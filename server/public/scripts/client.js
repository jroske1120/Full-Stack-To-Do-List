$(document).ready(onReady);

function addTask() {
    console.log('in addTask');
    // get user input and put in an object
    const taskToSend = {
        task: $('#taskIn').val()
    }
    console.log('sending:', taskToSend);
    // send the data to the server via POST
    $.ajax({
        type: 'POST',
        url: '/tasks',
        data: taskToSend
    }).then(function (response) {
        console.log('back from POST:', response);
        //update DOM
        getTasks();
        //empty inputs
        $("#taskIn").val("");
    }).catch(function (err) {
        console.log(err);
        alert('no workly');
    }) // end AJAX
}

function completeTask() {
    const completeTask = $(this).data('id');
    console.log('in completeTask:', completeTask);
    $.ajax({
        method: 'PUT',
        url: `/tasks/` + completeTask,
        data: { complete: true }
    }).then(function (response) {
        getTasks();
        console.log('back from PUT with:', response);
    }).catch(function (error) {
        alert('error with PUT completion. see console for details');
        console.log(error);
    })
}

function deleteTask() {
    console.log('in deleteTask');
    $.ajax({
        type: "DELETE",
        url: "/tasks/" + $(this).data("id"),
    })
        .then(function (response) {
            console.log("back from DELETE:", response);
            getTasks();
        })
        .catch(function (err) {
            console.log(err);
            alert("nope");
        }); 
}

function getTasks() {
    console.log('in getTasks');
    $.ajax({
        type: 'GET',
        url: '/tasks'
    }).then(function (response) {
        console.log('back from GET:', response);
        $('#tasksOut').empty();
        $('#completeTasksOut').empty();
        for (let i = 0; i < response.length; i++) {
            //two different tables, to-do and completed
            //if incomplete (complete === false) append to first
            if (!response[i].complete) {
                $('#tasksOut').prepend(`<tr>
                <td><button class="btn-completeTask" data-id=${response[i].id}>Complete</button></td>              
                <td>${response[i].task}</td>
                <td><button class="btn-deleteTask" data-id=${ response[i].id}>Delete</button></td>
              </tr>`)
            } else { //otherwise prepend to second table of completed tasks
                $('#completeTasksOut').prepend(`<tr>
            <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Checkmark.svg/1200px-Checkmark.svg.png" width="30">
            ${response[i].date_completed.split( "T" )[0]}</td>              
            <td>${response[i].task}</td>
            <td><button class="btn-deleteTask" data-id=${ response[i].id}>Delete</button></td>
          </tr>`) //appends timestamp that has been updated on the PUT click of btn-complete
            }
        }
    }).catch(function (err) {
        console.log(err);
        alert('nope, GET didnt work');
    })
}

function onReady() {
    console.log('in onReady');
    $('#btn-add').on('click', addTask);
    getTasks();
    $('#completeTasksOut').on('click', '.btn-deleteTask', deleteTask);
    $('#tasksOut').on('click', '.btn-completeTask', completeTask);
    $('#tasksOut').on('click', '.btn-deleteTask', deleteTask);

}
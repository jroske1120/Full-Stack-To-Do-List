$(document).ready(onReady);

let tasks = [];

function onReady() {
    console.log('in onReady');
    // $('#btn-add').on('click', addTask);
    getTasks();
}

// function addTask(event) {
//     event.preventDefault();
//     console.log('in addTask');
//     // get user input and put in an object
//     // using a test object
//     const taskToSend = {
//         task: $('#taskIn').val()
//     }
//     console.log('sending:', taskToSend);
//     // send the data to the server via POST
//     $.ajax({
//         type: 'POST',
//         url: '/tasks',
//         data: taskToSend
//     }).then(function (response) {
//         console.log('back from POST:', response);
//         getTasks();
//         //empty inputs
//         $("#taskIn").val("");
//     }).catch(function (err) {
//         console.log(err);
//         alert('no workly');
//     }) // end AJAX
// }


function getTasks() {
    console.log('in getTasks');
    $.ajax({
        type: 'GET',
        url: '/tasks'
    }).then(function (response) {
        console.log('back from GET:', response);
        let el = $('#tasksOut');
        el.empty();
        // tasks = response;
        for (let i = 0; i < response.length; i++) {
            // in our button we are using "data-id" to hold the id of each bird
            //if statement for if ready, no append button, if false, append ready button
            //<td><button class="btn-deleteTask" data-id=${ tasks[i].id}>Delete</button></td>
            el.append(`<tr>
            <td></td>
              <td>${ response[i].task}</td>
              <td></td>
          </tr>`)
        }
    }).catch(function (err) {
        console.log(err);
        alert('nope');
    })
}
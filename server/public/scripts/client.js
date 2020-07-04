$(document).ready(onReady);


function onReady(){
    console.log('in onReady');
    $('#btn-add').on('click', addTask);

}

function addTask(event){
    event.preventDefault();
    console.log('in addTask');
    
}
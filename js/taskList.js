function loadingTasks(){
    if(localStorage.TaskList){
        var taskList = document.getElementById("taskList");
        taskList.value = localStorage.TaskList;
    }
}
function addTask(){
    var newTask = document.getElementById("taskTxt");
    if(newTask && newTask.value != "")
    {
        var taskList = document.getElementById("taskList");
        taskList.value += newTask.value + "\n";
        localStorage.setItem("TaskList",taskList.value);
        newTask.value='';
    }
    else
    {
        alert("Task can't be empty!");
    }
}

function clearTask()
{
    var taskList = document.getElementById("taskList");
    taskList.value='';
    localStorage.removeItem("TaskList");
}
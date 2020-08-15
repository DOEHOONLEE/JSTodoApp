            //  ELEMENTS  //
const removeItem = document.getElementById("remove-button");
const todoList = document.getElementById("todo-list");
const userNewTask = document.getElementById("new-task");
const addButton = document.getElementById("add-button");



            //  FUNCTIONS  //

userNewTask.addEventListener("keyup", function(e) {
    (e.keyCode === 13 && this.value.length !== 0) && addNewTask(01, false, userNewTask.value);;
})

addButton.addEventListener("click", function() {
    addNewTask(01, false, userNewTask.value);
});

function timeDisplay() {
    const today = new Date();
    
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDay();

    const hour = today.getHours();
    const min = today.getMinutes();
    const sec = today.getSeconds();

    let timeArr = [hour, min, sec];

    // console.log(timeArr)
    let newtime = timeArr.map(c => 
        ((c+"").length < 2) ? c = "0"+c : c = c
    );

    // console.log(newtime)

    document.getElementById("date-display").innerHTML = year + " " + month + " " + day;
    document.getElementById("time-display").innerHTML = newtime[0] + " : " + newtime[1] + " : " + newtime[2];

    setTimeout(timeDisplay, 500)
};

timeDisplay();

function addNewTask(id, finished, todoTaskContent) {

    const newTask = `
        <li>
            <label class="radio-button">
                <input type="checkbox" class="checker" value="${finished}">
                <span class="custom-check"></span>
            </label>
            <span id="${id}">${todoTaskContent}</span>
            <button id="remove-button">🗑
            </button>
        </li>
    `
    todoList.insertAdjacentHTML("afterend", newTask);

    userNewTask.value = "";

    finishTask();
}

function finishTask() {
    document.querySelectorAll("checker").forEach(function(c) {
        c.addEventListener("click", function(e) {
            console.log(e.target.value);
        })
    })
}
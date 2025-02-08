function add_task(){
    let task = document.querySelector("#input_task").value;
    console.log(task);
    let tasklist = document.querySelector(".list-task");

    let newTask = document.createElement("li");
    newTask.textContent = task;

    let removerButton = document.createElement("button");
    removerButton.textContent = "Ⅹ"
    removerButton.style.marginLeft = "10px";
    removerButton.style.background = "none"
    removerButton.onclick = function(){
        newTask.remove();
    };

    newTask.appendChild(removerButton);

    tasklist.appendChild(newTask);

    document.querySelector("#input_task").value = ""
}



window.addEventListener('load',() =>{
    const form= document.querySelector("#firstform");
    const input = document.querySelector("#firstinput");
    const list = document.querySelector("#tasks");

    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        
        const task = input.value;
        
        if (!task ){
            alert("please input a task");
            return;
        
        }

        const task_l = document.createElement('div');
        task_l.classList.add("task");

        const task_inner_l = document.createElement('div');
        task_inner_l.classList.add("inner");
        
        task_l.appendChild(task_inner_l);

        const task_input_l = document.createElement("input");
        task_input_l.classList.add('t1');
        task_input_l.type = "text";
        task_input_l.value = task;
        task_input_l.setAttribute("readonly","readonly");

        task_inner_l.appendChild(task_input_l);

        const task_operationss_l = document.createElement("div");
        task_operationss_l.classList.add("t1");

        const task_edit = document.createElement("button");
        task_edit.classList.add("edit");
        task_edit.innerHTML= "edit";

        const task_delete = document.createElement("button");
        task_delete.classList.add("delete");
        task_delete.innerHTML= "delete";

        task_operationss_l.appendChild(task_edit);
        task_operationss_l.appendChild(task_delete);

        task_l.appendChild(task_operationss_l);

        list.appendChild(task_l);

        input.value =""

        task_edit.addEventListener('click', () => {
            if (task_edit.innerText.toLowerCase()== "edit"){
                task_input_l.removeAttribute('readonly');
                task_input_l.focus();
                task_edit.innerText= "save";}
                else{
                    task_input_l.setAttribute("readonly","readonly");
                    task_edit.innerText="edit";
                }
            }
        ,);

        task_delete.addEventListener("click", ()=> {
            list.removeChild(task_l);
        })

    })

     
})
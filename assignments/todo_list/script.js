let Todo= document.querySelector('Input');
let add_button= document.querySelector('button');
let todolist=document.querySelector('div.todos');

let count=0;

function ADD_TODO(){

    let input_todo=Todo.value;
    if(input_todo==""){
        return
    }
    let item=document.createElement('p');
    item.innerHTML=input_todo;
    item.setAttribute("key",count);
    todolist.append(item);
    count+=1;
    item.addEventListener("click",function(){
        todolist.removeChild(item);
    })
    Todo.value=""
}
add_button.addEventListener("click",ADD_TODO)

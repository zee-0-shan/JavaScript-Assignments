todo_fetch()
let completed_section=document.getElementById('completed')
let pending_section=document.getElementById('pending')
let completed=[];
let pending=[];
document.getElementById('completed_todo').addEventListener('click',display_completed);
document.getElementById('pending_todo').addEventListener('click',display_pending);
// document.getElementById('import_data').addEventListener('click',todo_fetch);

function todo_fetch(){
    fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  
//   .then(json => console.log(json))
   .then(data => {
            for( let i=0;i<data.length;i++){
                if(data[i].completed===true){
                    completed.push(data[i].title)
                }else{
                    pending.push(data[i].title)
                }
            }
        });
    
    }
count_completed=0
count_pending=0
function display_completed(){
    count_completed+=1
    if(count_completed%2!=0){
        if(completed.length==0){
            completed=completed_copy
            }
    for(let i=0;i<completed.length;i++){
        tag=document.createElement('li');
        tag.innerHTML=completed[i];
        completed_section.appendChild(tag);
    }
    completed_copy=completed
    completed=[];
    }
    else{
        completed_section.innerHTML=""
    }

}
        
function display_pending(){
    count_pending+=1
if(count_pending%2!=0){
    if(pending.length==0){
        pending=pending_copy
        }
    
    for(let i=0;i<pending.length;i++){
        tag=document.createElement('li');
        tag.innerHTML=pending[i];
        pending_section.appendChild(tag);
    }
    pending_copy=pending
    pending=[];
}
else{
    pending_section.innerHTML=""
}
}
       


    


        
        
const link = document.querySelector('#form .btn');
const user = document.querySelector('#form input');
function stpreToLocal(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks=[];

    }else{
        task = localStorage.getItem('tasks').split(',');
    }
     for(let i=0; i<tasks.length; i++){
        if(tasks[i] === task){
            tasks.splice(i,1);
        }
        
}
 localStorage.setItem('tasks', tasks);
    if(tasks.length === 0){
        localStorage.clear();
        
    }else{
        localStorage.setItem('tasks',tasks);
    }
}
link.addEventListener('click',function(e){
    e.preventDefault();
    const txt = user.value;
    if(user.value == ''){
        window.alert = 'your email adress is falsch'
       
    }else{

    user.value = ' ';
  
    console.log(txt);
    }
    
})

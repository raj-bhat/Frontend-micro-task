
const options = ["JavaScript", "HTML", "CSS", "React", "Angular", "Zustand", "NextJS", "TypeScript"];

const listContainer = document.getElementById("listContainer");

function createAnddlete(){
const Dfrangment=new DocumentFragment();
options.forEach(option=>{
  const todo = document.createElement("div");
  const description = document.createElement("span");
  const button = document.createElement("button");

  description.textContent = option;
  button.textContent = "Done";
  button.id="bttn";
  
 
  todo.appendChild(description);
 todo.appendChild(button);
  Dfrangment.appendChild(todo);
  button.addEventListener("click", function () {
    todo.remove();
  })
})
listContainer.appendChild(Dfrangment);
}
document.addEventListener('DOMContentLoaded',createAnddlete);










  

 
 
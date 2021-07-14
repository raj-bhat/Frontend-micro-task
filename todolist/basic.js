
const options = ["JavaScript", "HTML", "CSS", "React", "Angular", "Zustand", "NextJS", "TypeScript"];

const listContainer = document.getElementById("listContainer");

/* creating document fragment and then adding items from above array
upon clicking on button deleting the node */

function createAnddelete(){
const Dfragment=new DocumentFragment();
options.forEach(option=>{
  const todo = document.createElement("div");
  const description = document.createElement("span");
  const button = document.createElement("button");

  description.textContent = option;
  button.textContent = "Done";
  
  todo.appendChild(description);
 todo.appendChild(button);
  Dfragment.appendChild(todo);
  button.addEventListener("click", function () {
    todo.remove();
  })
})
listContainer.appendChild(Dfragment);
}
document.addEventListener('DOMContentLoaded',createAnddelete);

const input=document.getElementById("taskIp");
const addButtn=document.getElementById("addBtn");
const taskList=document.getElementById("taskList");
const comp=document.getElementById("comp");
const uncomp=document.getElementById("uncomp");

addBtn.onclick=function (){
    if(input.value === "") return ;

    const li=document.createElement("li");

    const left = document.createElement("div");
    left.className = "left";

    const checkbox=document.createElement("input");
    checkbox.type="checkbox";

    const span=document.createElement("span");
    span.innerText=input.value;

    left.appendChild(checkbox);
    left.appendChild(span);

    const del=document.createElement("span");
    del.innerText="Delete";

    li.appendChild(left);
    li.appendChild(del);

    taskList.appendChild(li);

    input.value="";

    checkbox.onclick = function () {
    span.style.textDecoration = checkbox.checked
      ? "line-through"
      : "none";
      updateStat();
    };

    del.onclick=function(){
        li.remove();
        updateStat();
    };
    updateStat();
};

function updateStat(){
  const box=document.querySelectorAll("input[type='checkbox']");

  let completed=0;

  for(let i=0;i<box.length;i++){
    if(box[i].checked){
      completed++;
    }
  }

  comp.innerText=completed;
  uncomp.innerText=box.length-completed;

}
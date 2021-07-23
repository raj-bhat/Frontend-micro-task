const star=document.querySelectorAll('.star');

for(let i=0;i<star.length;i++){
    let val=star[i].val;
    val=(i+1);
    
    star[i].addEventListener('click',function(){
        star.forEach(function(elem,ind){
            if(ind<val){
                elem.classList.add("orange");
                       }
                else{
                    elem.classList.remove("orange");
                }
        
            })}
       
        
       )}

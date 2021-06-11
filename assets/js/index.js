 
    var alter1 =document.getElementById("btn1");
    var alter2 =document.getElementById("btn2");
    var alter3 =document.getElementById("btn3");
    var submit =document.getElementById("submit-button");
    var search =document.getElementById("search");
  
    

   alter1.addEventListener("click",function(e){
    alter1.style.border="3px solid black"
    alter2.style.border="none"
    alter3.style.border="none"
    document.querySelector('.atention-overlay').classList.add('active');
 

   });


   alter2.addEventListener("click",function(e){
    alter1.style.border="none"
    alter2.style.border="3px solid black"
    alter3.style.border="none"
    document.querySelector('.atention-overlay').classList.add('active');
   });

   alter3.addEventListener("click",function(e){
    alter1.style.border="none"
    alter2.style.border="none"
    alter3.style.border="3px solid black"
    document.querySelector('.atention-overlay').classList.add('active');
   });

 

   const atention={
      
      close(){
         document.querySelector('.atention-overlay').classList.remove("active");

      }
  
   }
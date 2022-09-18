const text = document.querySelector(".text");
const btn = document.querySelector(".btn");
const results = document.querySelector(".results");
const fa=document.querySelector(".fa-square")

btn.addEventListener("click", () => {
    if(!text.value){
        alert("Lütfen bir kelime giriniz")
    }else{
        results.innerHTML += `<div class="result">
      <i class="fa-regular fa-square"></i>
      <p> ${text.value}</p>
        <i class =" fa-sharp fa-solid fa-trash-can"></i>      
  </div>`;
  text.value=""

    } 
      
      
      
});
window.onload = () => text.focus()

text.addEventListener("keydown",(e)=>{
    if(e.code=="Enter"){
        btn.click()

    }
})
results.addEventListener("click",(e)=>{
    if(e.target.classList.contains("fa-square")){
        e.target.classList.remove("fa-square","fa-regular")
        e.target.classList.add("fa-solid","fa-check")
        e.target.parentElement.classList.add("check")


    } else if (e.target.classList.contains("fa-check")){
        e.target.classList.remove("fa-solid", "fa-check")
         e.target.classList.add("fa-regular", "fa-square")
         e.target.parentElement.classList.remove("check")

    }else if(e.target.classList.contains("fa-sharp")){
        e.target.parentElement.remove()


    }
    
    

    

})
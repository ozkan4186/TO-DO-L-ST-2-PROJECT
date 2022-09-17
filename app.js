const text = document.querySelector(".text");
const btn = document.querySelector(".btn");
const results = document.querySelector(".results");

btn.addEventListener("click", () => {
    if(!text.value){
        alert("Lütfen bir kelime giriniz")
    }else{
        results.innerHTML += `<div class="result">
      <i class="fa-regular fa-square"></i>
      <p> ${text.value}</p>
        <i class ="fa-solid fa-trash-can"></i>      
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
results.addEventListener("click",()=>{
    
})
    

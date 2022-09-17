const text = document.querySelector('.text')
const btn = document.querySelector('.btn')
const results = document.querySelector('.results')
const result = document.querySelector('.result')

btn.addEventListener('click', () => {
    if (!text.value) {
        alert('Listeye Birşeyler Giriniz')
    } else {
        results.innerHTML += ` <div class="result">
            <i class="fa-regular fa-square"></i>
        <p>${text.value}</p>
        <i class="fa-sharp fa-solid fa-trash-can"></i>
        </div>`;
        text.value=""
    }
})

window.onload = () => text.focus()

text.addEventListener("keydown",(e){
    if(e.code==="Enter"){
        btn.click()
    }
})
results.addEventListener("click",()=>{
    if(e.target.classList.contains("fa-square")){
        e.target.classList.remove("fa-square")
        e.target.classList.add("fa-square")
    }
})












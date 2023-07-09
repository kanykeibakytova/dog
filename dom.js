//
const div=document.querySelector(".row")
const input=document.querySelector(".form-control")
const btn =document.querySelector(".btn")


function searchDog() {
    fetch(`https://dog.ceo/api/breed/${input.value}/images`)
        .then(data =>data.json())
        .then(res =>{
            console.log(res)
            res.message.slice(0,10).map(el =>{
                div.innerHTML+=`<div>
<img width="380px" src="${el}" alt="">
</div>`
            })
        })
}
searchDog()


input.addEventListener("keydown", (e)=>{
    if(e.key==="Enter"){
        searchDog()
        div.innerHTML=''
    }
})

btn.addEventListener("click", ()=>{
    searchDog()


})

//  const lol = document.querySelector('.lol')
//
//
//
//
// lol.addEventListener('change',(e)=>{
//     (e.target.value)
// })
//
// function sum() {
//     fetch('https://dog.ceo/api/breeds/list/all')
//         .then((data) => data.json())
//         .then((res) => {
//             console.log(res)
//             Object.keys(res.message).map(el => {
//                 lol.innerHTML += <option>${el}</option>
//
//             })
//         })
// }
//
// sum()
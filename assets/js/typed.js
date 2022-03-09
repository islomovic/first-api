// let input = document.getElementById("input");
// let output = document.getElementById("output");

// input.addEventListener("change",(e) =>{
//     output.textContent= input.value;
// } );

// input.addEventListener("input", (e) => {
//   output.textContent = input.style.background.color;
// });

// input.addEventListener('input', (e) => {
//   document.body.style = `background: ${input.value};`
//   });
// let obj = {
//     name:'jalol',
//     age:29,
//     job:"okay",
    

// };

// console.log(JSON.stringify(obj));

// console.log("danniy sorash");

// setTimeout(() =>{
//     console.log("danniy tayyorlash ");

//     const infoFromBack ={
//         name:"elyor",
//         year:12,
//         work:"sleeping",
//     }
// setTimeout(() => {
//     console.log("dannniy keldi ",  infoFromBack);

// }, 2000);

// },2000);

// const promise = new Promise( (resolve, reject ) => {
//     const p =1+1;
//     if (p==2){
//         resolve('very good ');

//     }
// else{
//     reject('baad');

// }

// });

// // promise.then(console.log);


// promise.then((sms)=>{
//     console.log('caqrsh boldi '+ sms);
// })

// promise.catch((sms)=>{
//     console.log('caqrsh boldi '+ sms);
// })


// let promise = new Promise (resolve => {
//     setTimeout(() => resolve("ishladi"), 1000);
// });

// promise.then(alert);
const output =document.querySelector(".output")

async function getDate() {
    const response = await fetch('http://hp-api.herokuapp.com/api/characters');
    const data = await response.json();
  displayData(data)

}



function displayData(data){
let html ='';
    data.map(e=>{
html+= `
<div class="output__item">

<img src="${e.image}" class="image"  />


<div class="output__name">${e.name}</div>
<div class="output__alternate_names">${e.alternate_names}</div>
<div class="output__species">${e.species}</div>
<div class="output__gender">${e.gender}</div>
<div class="output__house">${e.house}</div>
<div class="output__dateOfBirth">${e.dateOfBirth}</div>
<div class="output__yearOfBirth">${e.yearOfBirth}</div>
<div class="output__wizard">${e.wizard}</div>
<div class="output__ancestry">${e.ancestry}</div>
<div class="output__half">${e.half}</div>
<div class="output__eyeColour">${e.eyeColour}</div>
<div class="output__hairColour">${e.hairColour}</div>
<div class="output__wand">${e.wand}</div>
<div class="output__patronus">${e.patronus}</div>
<div class="output__hogwartsStudent">${e.hogwartsStudent}</div>
<div class="output__hogwartsStaff">${e.hogwartsStaff}</div>
<div class="output__actor">${e.actor}</div>
<div class="output__alive">${e.alive}</div>




</div>`
})
output.innerHTML=html;
}



getDate()

var container = document.querySelector(".container");

const coffie = [
  { name: "Perspiciatis", image: "assert/img/coffee-1.jpg" },
  { name: "Voluptatem", image: "assert/img/coffee-1.jpg" },
  { name: "Explicabo", image: "assert/img/coffee-1.jpg" },
  { name: "Rchitecto", image: "assert/img/coffee-1.jpg" },
  { name: " Beatae", image: "assert/img/coffee-1.jpg" },
  { name: " Vitae", image: "assert/img/coffee-1.jpg" },
  { name: "Inventore", image: "assert/img/coffee-1.jpg" },
  { name: "Veritatis", image: "assert/img/coffee-1.jpg" },
  { name: "Accusantium", image: "assert/img/coffee-1.jpg" },
];

const showData = () => { 
    let output = "" 
    coffie.forEach(res => { 
       output +=  `
            <div class="card">
                <img class="card--avatar" src=${res.image} />
                <h1 class="card--title">${res.name}</h1>
                <a class="card--link" href="#">Taste</a>
            </div> `
    })
    
    container.innerHTML = output;
}
document.addEventListener('DOMContentLoaded' , showData);

if("serviceWorker" in navigator){ 
     window.addEventListener("load" , () => { 
         navigator.serviceWorker
         .register('/serviceWork.js')
         .then(res => console.log("wroker not register"))
         .catch(err => console.log(err))
      })
}
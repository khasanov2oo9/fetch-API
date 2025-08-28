let box =document.getElementById("box");

let API = "https://jsonplaceholder.typicode.com/users";

fetch(API)
    .then((res) => res.json())
    .then((data) => {
        data.map((item) => {
            box.innerHTML +=`
            <div class="card bg-green-500 w-[420px] p-[30px] rounded-[30px]">
               <h1 class="text-white text-[36px]">ISM: ${item.name}</h1>
               <p class="text-white text-[24px]">USERNAME: ${item.username}</p>
               <p class="text-white text-[24px]">EMAIL: ${item.email}</p>
            `;
        });
    });
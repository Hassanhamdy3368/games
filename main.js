let gameimg = document.getElementById('gameimg')
let conetnt = "";
let category = Array.from(document.querySelectorAll('.nav-link'))
let catname = ["mmorpg", "shooter", "sailing", "permadeath", "superhero", "pixel"]
let card = []
let lightdiv = document.getElementById('lightdiv')
let alldetails;



let shooter;
let api;
// console.log(category)

api = new XMLHttpRequest();

api.open('GET', `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${catname[0]}`)
api.setRequestHeader('x-rapidapi-key', '5803558094msh0a541fb626793fdp11b802jsnfba5451e4692');
api.send();
api.addEventListener('load', function () {
    shooter = Array.from(JSON.parse(api.response))
    // console.log(shooter)

    display();
    card = Array.from(document.querySelectorAll('.sel'))
    console.log(card)

    displaydiv();

})


for(let i=0;i<category.length;i++){
category[i].addEventListener('click', function () {
    conetnt = ""

    api = new XMLHttpRequest();

    api.open('GET', `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${catname[i]}`)
    api.setRequestHeader('x-rapidapi-key', '5803558094msh0a541fb626793fdp11b802jsnfba5451e4692');
    api.send();
    api.addEventListener('load', function () {
        shooter = Array.from(JSON.parse(api.response))
        display()
        card = Array.from(document.querySelectorAll('.sel'))
        console.log(card)

      
        displaydiv()



    })

})
}

function displaydiv() {
    for (let i = 0; i < category.length; i++) {
        card[i].addEventListener('click', function () {
            lightdiv.classList.remove('d-none')
            document.getElementById('imge').setAttribute('src', `${shooter[i].thumbnail}`)
            document.getElementById('title').innerHTML += (`${shooter[i].title}`)
            document.getElementById('cate').innerHTML += (`${shooter[i].genre}`)
            document.getElementById('plat').innerHTML += (`${shooter[i].platform}`)
            document.getElementById('status').innerHTML += (`${shooter[i].status}`)


            // let currentid = shooter[i].id;
            console.log(shooter[i].id)

      
            // var apidetails = new XMLHttpRequest();
            // apidetails.open('GET', `https://www.freetogame.com/api/game?id=452`)
            // apidetails.setRequestHeader('x-rapidapi-key', '5803558094msh0a541fb626793fdp11b802jsnfba5451e4692');
            // apidetails.send();

            // apidetails.addEventListener('load', function () {
            //     alldetails = Array.from(JSON.parse(apidetails.response))
            //     document.getElementById('status').innerHTML = (`${alldetails.description}`)

            // })





            
            
        })
    }
}

    function display() {
        for (let i = 0; i < shooter.length; i++) {
            conetnt += `   <div class="col-3 g-4 bg-col ">
    <div class="card bg-col  ">
        <img id="gameimg" src="${shooter[i].thumbnail}" class="card-img-top w-75 m-4 sel " alt="...">
        <div class="card-body">
            <h6 class="card-title d-inline-block me-3 w-50 text-white">${shooter[i].title}</h6>
            <button class="d-inline-block ms-5 btn btn-primary">free</button>
            <p class="card-text text-center text-secondary">${shooter[i].short_description}</p>
        </div>
        <div class="card-footer d-flex justify-content-between">
            <small class=" text-white ">${shooter[i].genre}</small>
            <small class=" text-white ">${shooter[i].platform}</small>
        </div>
    </div>
</div>`

        }
        document.getElementById('card').innerHTML = conetnt;


    }


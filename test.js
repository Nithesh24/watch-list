let curr_cat = "movies";
let curr_status = "watched";

let movies_cat = document.getElementsByClassName("movies")[0];
let series_cat = document.getElementsByClassName("series")[0];
let anime_cat = document.getElementsByClassName("anime")[0];
let manga_cat = document.getElementsByClassName("manga")[0];
let books_cat = document.getElementsByClassName("books")[0];
let manhwa_cat = document.getElementsByClassName("manhwa")[0];

let data_body = document.getElementsByClassName("data-body")[0];


movies_cat.style.backgroundColor = "#74100e";

async function cat_switch(type){
    await emptyBody();
}

function watch_switch(e)
{
    if(e.checked)
    {
        curr_status = "to watch"
    }else{
        curr_status = "watched"
    }
}

async function emptyBody(){
   data_body.childNodes.forEach((e)=>{
    data_body.removeChild(e);
   })
}

async function addData(cat, status){
    await emptyBody();
}
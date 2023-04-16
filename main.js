let current_cat = "movies";
let curr_status = "watched";
let movies_cat = document.getElementsByClassName("movies")[0];
let series_cat = document.getElementsByClassName("series")[0];
let anime_cat = document.getElementsByClassName("anime")[0];
let manga_cat = document.getElementsByClassName("manga")[0];
let books_cat = document.getElementsByClassName("books")[0];
let manhwa_cat = document.getElementsByClassName("manhwa")[0];
let games_cat = document.getElementsByClassName("games")[0];

let data_body = document.getElementsByClassName("data-body")[0];

movies_cat.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))";

function cat_switch(type)
{
    switch(type)
    {
        case "movies":
            movies_cat.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))";
            break;
        case "series":
            series_cat.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))";
            break;
        case "anime":
            anime_cat.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))";
            break;
        case "manga":
            manga_cat.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))";
            break;
        case "books":
            books_cat.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))";
            break;
        case "manhwa":
            manhwa_cat.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))";
            break;
        case "games":
            games_cat.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))";
            break;
        default:
            console.log("invalid selection")
            break;
        
    }
    switch(current_cat)
    {
        case "movies":
            movies_cat.style.backgroundImage = "linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0))";
            break;
        case "series":
            series_cat.style.backgroundImage = "linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0))";
            break;
        case "anime":
            anime_cat.style.backgroundImage = "linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0))";
            break;
        case "manga":
            manga_cat.style.backgroundImage = "linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0))";
            break;
        case "books":
            books_cat.style.backgroundImage = "linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0))";
            break;
        case "manhwa":
            manhwa_cat.style.backgroundImage = "linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0))";
            break;
        case "games":
            games_cat.style.backgroundImage = "linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0))";
            break;
        default:
            console.log("invalid selection")
            break;
        
    }

    current_cat = type;
    appendData(current_cat, curr_status)
}

function watch_switch(e)
{
    if(e.checked)
    {
        curr_status = "to_watch"
        appendData(current_cat, curr_status)
    }else{
        curr_status = "watched"
        appendData(current_cat, curr_status)
    }
}

function appendData(cat, status)
{
    fetch("data.json").then(res =>{
        return res.json()
    }).then(value =>{
        //clearing the body
        while(data_body.childElementCount){
            data_body.removeChild(data_body.firstChild)
        }
        //append values
        for(let i = 0; i < value[cat][status].length; i++){
            if(value[cat][status][i] == ""){
                console.log("broke")
                break;
            }
            let data = document.createElement("div");
            data.classList.add("data");
            data.innerHTML = value[cat][status][i];
            data_body.appendChild(data)
        }
    })
}


appendData(current_cat, curr_status)

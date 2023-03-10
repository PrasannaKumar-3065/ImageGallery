
let arr = [
    {name:"Avengers: Endgame",link:"https://youtu.be/_WwcWQj37lI",image:"a1.jpg", genre:"ACTION, ADVENTURE, SCI-FI", cast:"BRIE LARSON, BRADLEY COOPER, SCARLETT JOHANSSON, CHRIS HEMSWORTH, KAREN GILLAN, EVANGELINE LILLY, CHRIS EVANS, JOSH BROLIN, ROBERT DOWNEY JR., ELIZABETH OLSEN, TOM HOLLAND, PAUL RUDD, MICHELLE PFEIFFER, SEBASTIAN STAN, POM KLEMENTIEFF",date:"March 14, 2019", description:"After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe."},
    {name:"Good Boys",image:"1.jpg", genre:"COMEDY", cast:"BRIE LARSON, BRADLEY COOPER, SCARLETT JOHANSSON, CHRIS HEMSWORTH, KAREN GILLAN, EVANGELINE LILLY, CHRIS EVANS, JOSH BROLIN, ROBERT DOWNEY JR., ELIZABETH OLSEN, TOM HOLLAND, PAUL RUDD, MICHELLE PFEIFFER, SEBASTIAN STAN, POM KLEMENTIEFF",date:"March 13, 2019", description:"After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe."},
    {name:"Playmobil: The Movie",image:"2.jpg", genre:"COMEDY", cast:"ANYA TAYLOR-JOY, DANIEL RADCLIFFE, ADAM LAMBERT, JIM GAFFIGAN, GABRIEL BATEMAN, MEGHAN TRAINOR, BEN DISKIN, DINO ANDRADE, KELLEN GOFF, RYAN S. HILL, ANNAKIN SLAYD, PALOMA RODRIGUEZ",date:"March 13, 2019", description:"Animated feature film inspired by the Playmobil brand toys."},
    {name:"Aquarela",image:"3.jpg", genre:"DOCUMENTARY", cast:"ANYA TAYLOR-JOY, DANIEL RADCLIFFE, ADAM LAMBERT, JIM GAFFIGAN, GABRIEL BATEMAN, MEGHAN TRAINOR, BEN DISKIN, DINO ANDRADE, KELLEN GOFF, RYAN S. HILL, ANNAKIN SLAYD, PALOMA RODRIGUEZ",date:"March 13, 2019", description:"Water is the main protagonist, seen in all its great and terrible beauty. Mountains of ice move and break apart as if they had a life of their own. Kossakovsky's film travels the world, from the precarious frozen waters of Russia's Lake Baikal and Miami in the throes of Hurricane Irma, to Venezuela's mighty Angel Falls in order to paint a portrait of this fluid life force in all its glorious forms. Fragile humans experience life and death, joy and despair in the face of its power."},
    {name:"Aladdin",image:"4.jpg", genre:"ADVENTURE, COMEDY, FAMILY", cast:"WILL SMITH, NAOMI SCOTT, ALAN TUDYK, BILLY MAGNUSSEN, MENA MASSOUD",date:"March 12, 2019", description:"When a street urchin finds a lamp with a genie inside, he uses the lamp to turn himself into a prince in order to win the heart of a beautiful princess. But an evil vizier is after the lamp too."},
    {name:"Frozen II",image:"5.jpg", genre:"ANIMATION, ADVENTURE, COMEDY", cast:" KRISTEN BELL, EVAN RACHEL WOOD, JONATHAN GROFF, STERLING K. BROWN, JOSH GAD, IDINA MENZEL",date:"March 11, 2019", description:"Anna, Elsa, Kristoff, and Olaf are going far in the forest to learn the truth about an ancient mystery of their kingdom."},
    {name:"Downton Abbey",image:"6.jpg", genre:"DRAMA", cast:"ALLEN LEECH, TUPPENCE MIDDLETON, MAGGIE SMITH, MICHELLE DOCKERY, ELIZABETH MCGOVERN, JOANNE FROGGATT, PENELOPE WILTON, RAQUEL CASSIDY, BRENDAN COYLE, IMELDA STAUNTON, LAURA CARMICHAEL, HUGH BONNEVILLE, STEPHEN CAMPBELL MOORE, ROBERT JAMES-COLLIER, PHYLLIS LOGAN",date:"March 11, 2019", description:"Adapted from the hit TV series Downton Abbey that tells the story of the Crawley family, a wealthy owner of a large estate in the English countryside in the early 20th century."},
    {name:"Shaft",image:"7.jpg", genre:"ACTION, CRIME", cast:"SAMUEL L. JACKSON, ALEXANDRA SHIPP, RICHARD ROUNDTREE, REGINA HALL, MATT LAURIA, JESSIE T. USHER, AVAN JOGIA, LUNA LAUREN VELEZ, JESSICA MEDINA, SYLVIA JEFFERIES, METHOD MAN, ATHENA AKERS, ISAACH DE BANKOLÉ, JOSÉ ALFREDO FERNANDEZ, IAN CASSELBERRY",date:"March 11, 2019", description:"John Shaft Jr., a cyber security expert with a degree from MIT, enlists his family's help to uncover the truth behind his best friend's untimely death."},
    {name:"Spies in Disguise",image:"8.jpg", genre:"ACTION, CRIME", cast:"WILL SMITH, KAREN GILLAN, TOM HOLLAND, RASHIDA JONES, BEN MENDELSOHN, IAN MCSHANE, MIRANDA COSGROVE, MASI OKA, DJ KHALED",date:"March 9, 2019", description:"When the world's best spy is turned into a pigeon, he must rely on his nerdy tech officer to save the world."},
    {name:"The Sun Is Also a Star",image:"9.jpg", genre:"DRAMA, ROMANCE", cast:"WILL SMITH, KAREN GILLAN, TOM HOLLAND, RASHIDA JONES, BEN MENDELSOHN, IAN MCSHANE, MIRANDA COSGROVE, MASI OKA, DJ KHALED",date:"March 9, 2019", description:"A teenager finds love at a difficult time in her family's life."},
    {name:"Dark Phoenix",image:"10.jpg", genre:"ACTION, ADVENTURE, SCI-FI", cast:"EVAN PETERS, JENNIFER LAWRENCE, JESSICA CHASTAIN, JAMES MCAVOY, SOPHIE TURNER, MICHAEL FASSBENDER, NICHOLAS HOULT, TYE SHERIDAN, KODI SMIT-MCPHEE, ALEXANDRA SHIPP, EVAN JONIGKEIT, DANIEL CUDMORE, ATO ESSANDOH, SCOTT SHEPHERD, SUMMER FONTANA",date:"March 8, 2019", description:"Jean Grey begins to develop incredible powers that corrupt and turn her into a Dark Phoenix. Now the X-Men will have to decide if the life of a team member is worth more than all the people living in the world."},
    {name:"The Angry Birds Movie 2",image:"11.jpg", genre:"DRAMA, ROMANCE", cast:" PETER DINKLAGE, DOVE CAMERON, AWKWAFINA, STERLING K. BROWN, BILL HADER, JOSH GAD, JASON SUDEIKIS, RACHEL BLOOM, DANNY MCBRIDE, BROOKLYNN PRINCE, LIL REL HOWERY, NICKI MINAJ, ZACH WOODS, EUGENIO DERBEZ, LESLIE JONES",date:"March 9, 2019", description:"The flightless birds and scheming green pigs take their beef to the next level."}
]
let card =  document.getElementsByClassName("card")
let hide = document.getElementsByClassName("grid-hide")

let render = () => {
    let data = ""
    for(let i=0; i<arr.length; i++){
        data+= `<div class="card" onclick="view(`+i+`)">
        <div class="movie-img"><img class="thumbnails" width="136" height="194" src="./images/`+arr[i].image+`" alt="Avengers: Endgame Movie Poster"></div>
        <div class="movie-text"><b class="movie-title">`+arr[i].name+`</b></span><br>
            <span class="movie-director grid-hide"><b>DIRECTOR:</b> ANTHONY RUSSO, JOE RUSSO</span><br>
            <span class="movie-cast grid-hide"><b>CAST:</b> `+arr[i].cast+`
            </span><br>
            <span><b>Release Date:</b>`+arr[i].date+`</span><br>
            <span class="movie-genre"><b>GENRE:</b> ACTION, ADVENTURE, SCI-FI</span><br>
            <span class="movie-description grid-hide"><b>Description:</b>`+arr[i].description+`</span><br></div>
        </div>`
    }
    document.getElementById("container").innerHTML = data
}
let list = () =>{
   for(var i=0; i<card.length; i++){
        card[i].style.width = "100%"
        card[i].style.display = "flex"
        card[i].style.textAlign = "left"
    }
    for(var i=0; i<hide.length; i++){
        hide[i].style.display = "block"
    }

}
let grid = () =>{
    for(var i=0; i<card.length; i++){
        card[i].style.width = "20%"
        card[i].style.display = "block"
        card[i].style.textAlign = "center"
    }
    for(var i=0; i<hide.length; i++){
        hide[i].style.display = "none"
    }
}
let view = (value) => {
    console.log("view function called")
    if(value > arr.length-1){
        value = 0
    }
    else if(value < 0){
        value = arr.length-1;
    }
    document.getElementById("details").innerHTML = `<div class="details-content"><img src = "./images/`+arr[value].image+`"><div class="details-text"><span class="movie-title">`+arr[value].name+`</span><p><b>Genre</b><br> `+arr[value].genre+`<br> <b>Cast</b><br> `+arr[value].cast+`<br><b>Description</b><br> `+arr[value].description+`<br></div></p></div><div class="detail-buttons"><button onclick="view(`+(value-1)+`)">⩤</button><button onclick="view(`+(value+1)+`)">⩥</button><button onclick="hider()">⨉</button></div>`
    document.getElementById("details").style.display = "flex"
}
let hider = () => {
    document.getElementById("details").innerHTML = ""
    document.getElementById("details").style.display = "none"
}
let search = (value) =>{
    let data = ""
    for(let i=0; i<arr.length; i++){
        if(arr[i].name.toLowerCase().includes(value.toLowerCase()) || arr[i].date.toLowerCase().includes(value.toLowerCase()) || arr[i].cast.toLowerCase().includes(value.toLowerCase()) || arr[i].description.toLowerCase().includes(value.toLowerCase())){
            data+= `<div class="card" onclick="view(`+i+`)">
            <div class="movie-img"><img class="thumbnails" width="136" height="194" src="./images/`+arr[i].image+`" alt="Avengers: Endgame Movie Poster"></div>
            <div class="movie-text"><b class="movie-title">`+arr[i].name+`</b></span><br>
                <span class="movie-director grid-hide"><b>DIRECTOR:</b> ANTHONY RUSSO, JOE RUSSO</span><br>
                <span class="movie-cast grid-hide"><b>CAST:</b> `+arr[i].cast+`
                </span><br>
                <span><b>Release Date:</b>`+arr[i].date+`</span><br>
                <span class="movie-genre"><b>GENRE:</b> ACTION, ADVENTURE, SCI-FI</span><br>
                <span class="movie-description grid-hide"><b>Description:</b>`+arr[i].description+`</span><br></div>
            </div>`
        }
    } 
    document.getElementById("container").innerHTML = data
}
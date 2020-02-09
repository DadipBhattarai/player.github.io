var divlength = document.querySelectorAll('.song').length

for(var i=0; i<divlength; i++)
{
    var song = document.querySelectorAll('.song')[i].addEventListener('click', playSong);

    var song = document.querySelectorAll('.song')[i].addEventListener('dblclick', pauseSong);
}


var song1 = new Audio();
song1.src = "video/vdo1.mp4";

var song2 = new Audio();
song2.src = "video/vdo2.mp4";

var song3 = new Audio();
song3.src = "video/vdo3.mp4";

var song4 = new Audio();
song4.src = "video/vdo4.mp4";

var song5 = new Audio();
song5.src = "video/vdo5.mp4";

var song6 = new Audio();
song6.src = "video/vdo6.mp4";

var song7 = new Audio();
song7.src = "video/vdo7.mp4";

var song8 = new Audio();
song8.src = "video/vdo8.mp4";

var song9 = new Audio();
song9.src = "video/vdo9.mp4";

function playSong()
{
    var songId = this.innerHTML;
    switch (songId) {
        case "a":
            song1.play();
            break;

        case "b":
            song2.play();
            break;
        
        case "c":
            song3.play();
            break;

        case "d":
            song4.play();
            break;

        case "e":
            song5.play();
            break;

        case "f":
            song6.play();
            break;

        case "g":
            song7.play();
            break;

        case "h":
            song8.play();
            break;

        case "i":
            song9.play();
            break;
        
        default:
            break;
    }
}

function pauseSong()
{
    console.log("hello");

    var songId = this.innerHTML;
    switch (songId)
    {
        case "a":
            song1.pause();
            break;

        case "b":
            song2.pause();
            break;
        
        case "c":
            song3.pause();
            break;

        case "d":
            song4.pause();
            break;

        case "e":
            song5.pause();
            break;

        case "f":
            song6.pause();
            break;

        case "g":
            song7.pause();
            break;

        case "h":
            song8.pause();
            break;

        case "i":
            song9.pause();
            break;
        
        default:
            break;
    }
}
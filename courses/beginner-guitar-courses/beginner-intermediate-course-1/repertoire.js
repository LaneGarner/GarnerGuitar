const songInput = (song) => document.querySelector(`#${song}`);
const songDisplay = song => document.querySelector(`#${song}Display`);
const songEdit = song => document.querySelector(`#${song}Edit`);
const songEditConfirm = song => document.querySelector(`#${song}EditConfirm`);
const songEditCancel = song => document.querySelector(`#${song}EditCancel`);
const songAdd = song => document.querySelector(`#${song}Add`);
const songRemove = song => document.querySelector(`#${song}Remove`);

const addSong = (song) => {
    const notBlank = /.*\S+.*/
    if (songInput(song).value.match(notBlank)) {
        localStorage.setItem(song, songInput(song).value);
        addSongDisplay(song)
    } else {
        alert("Please enter a song");
    }
}

const addSongDisplay = (song) => {
    let thisSong = document.createTextNode(localStorage.getItem(song));
    songDisplay(song).innerHTML = "";
    songDisplay(song).append(thisSong);
    songDisplay(song).style.display = "inline";
    songInput(song).style.display = "none";
    songRemove(song).style.display = "inline";
    songAdd(song).style.display = "none";
    songEdit(song).style.display = "inline";
    songEditConfirm(song).style.display = "none";
    songEditCancel(song).style.display = "none";
}

const pageLoadDisplay = (song) => {
       if(localStorage.getItem(song) === null) {
                songInput(song).style.display = "inline";
                songAdd(song).style.display = "inline";
                songEdit(song).style.display = "none";
                songEditConfirm(song).style.display = "none";
                songEditCancel(song).style.display = "none";
                songRemove(song).style.display = "none";
    } else {
        addSongDisplay(song);
    }
}

pageLoadDisplay("song1")
pageLoadDisplay("song2")
pageLoadDisplay("song3")
pageLoadDisplay("song4")
pageLoadDisplay("song5")

const editSong = (song) => {
    songInput(song).value = localStorage.getItem(song);
    songInput(song).style.display = "inline";
    songEdit(song).style.display = "none";
    songDisplay(song).style.display = "none";
    songRemove(song).style.display = "none";
    songEditConfirm(song).style.display = "inline";
    songEditCancel(song).style.display = "inline";
    songInput(song).focus();
}

const editCancel = (song) => {
    songDisplay(song).style.display = "inline";
    songInput(song).style.display = "none";
    songEditConfirm(song).style.display = "none";
    songRemove(song).style.display = "inline";
    songEditCancel(song).style.display = "none";
    songEdit(song).style.display = "inline";
}

const removeSong = (song) => {
    if (confirm("Are You Sure?")) {
        localStorage.removeItem(song);
        songInput(song).value = "";
        removeSongDisplay(song);
        songInput(song).focus();
    }
}

const removeSongs = (song) => {
        localStorage.removeItem(song);
        songInput(song).value = "";
        removeSongDisplay(song);
        songInput(song).focus();
}

const removeSongDisplay = (song) => {
    songDisplay(song).innerHTML = "";
    songInput(song).style.display = "inline";
    songAdd(song).style.display = "inline";
    songEdit(song).style.display = "none";
    songEditConfirm(song).style.display = "none";
    songEditCancel(song).style.display = "none";
    songRemove(song).style.display = "none";
}

const clearSongList = (song) => {
    if (confirm("Are You Sure?")) {
        removeSongs("song1");
        removeSongs("song2");
        removeSongs("song3");
        removeSongs("song4");
        removeSongs("song5");
    }

}

window.addEventListener("beforeunload", function(event) {
    event.returnValue = null;
  });
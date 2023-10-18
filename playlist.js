var xmlhttp = new XMLHttpRequest();
var url = "playlist.json";

xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
      var jsonData = JSON.parse(this.responseText);
      displayPlaylist(jsonData);
  }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();


function displayPlaylist(playlists) {
  var i = 0;
  var maindiv = document.getElementById("maindiv");
  maindiv.className = "maindiv";

  var listdiv;
  playlists.forEach((playlist) => {
    listdiv = document.createElement("div");
    listdiv.className = "listdiv";


    var listname = document.createElement("h2");
    listname.className = "listname";
    listname.textContent = playlist.name;
    listdiv.appendChild(listname);
    var listowner = document.createElement("h3");
    listowner.className = "listowner";
    listowner.textContent = playlist.owner;
    listdiv.appendChild(listowner);

    var divider = document.createElement('hr');
    divider.className = "divider";
    listdiv.appendChild(divider);

    var listtitles = document.createElement('div');
    listtitles.className = "listtitles";
    listtitles.id = i;
    
    playlist.songs.forEach((song) => {
      var songtitle = document.createElement("h4");
      songtitle.className = "songtitle";
      songtitle.textContent = song.title;
      listtitles.appendChild(songtitle);

      var songinterpret = document.createElement("p");
      songinterpret.className = "songinterpret";
      songinterpret.textContent = song.interpret;
      listtitles.appendChild(songinterpret);

      var songlength = document.createElement("p");
      songlength.className = "songlength";
      songlength.textContent = song.length;
      listtitles.appendChild(songlength);
    });

    var addbtn = document.createElement('div');
    addbtn.className = "addsong";
    addbtn.onclick=addSong(i);
    addbtn.textContent = "+";

    listdiv.appendChild(listtitles);
    listdiv.appendChild(addbtn);
    maindiv.appendChild(listdiv);

    i++;

  });

}

function addSong(i){

}

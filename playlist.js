var xmlhttp = new XMLHttpRequest();
var url = "playlist.json";

xmlhttp.onreadystatechange = function () {
  var jsonData = JSON.parse(this.responseText);
  displayPlaylist(jsonData);
};

xmlhttp.open("GET", url, true);
xmlhttp.send();

function displayPlaylist(playlists) {
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

    var listtitles = document.createElement("div");
    listtitles.className = "listtitles";

    playlist.songs.forEach((song) => {
      var songtitle = document.createElement("p");
      songtitle.className = "songtitle";
      songtitle.textContent = song.title;
      listtitles.appendChild(songtitle);

      var songinterpret = document.createElement("p");
      songinterpret.className = "songinterpret";
      songtitle.textContent = song.interpret;
      listtitles.appendChild(songinterpret);

      var songlength = document.createElement("p");
      songlength.className = "songlength";
      songlength.textContent = song.length;
      listtitles.appendChild(songlength);
    });

    maindiv.appendChild(listdiv);
  });
}

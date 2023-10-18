var xmlhttp = new XMLHttpRequest();
var url = "playlist.json";

xmlhttp.onreadystatechange = function () {
  var jsonData = JSON.parse(this.responseText);
  displayPlaylist(jsonData);
};

xmlhttp.open("GET", url);
xmlhttp.send();

function displayPlaylist(playlists) {
  var maindiv = document.getElementById("maindiv");
  maindiv.className = "maindiv";

  playlists.forEach((playlist) => {
    var listdiv = document.createElement("div");
    listdiv.className = "listdiv";

        var listname = document.createElement('h2');
        listname.className="listname";
        var listowner = document.createElement('h3');
        listowner.className = "listowner";
        var listtitles = document.createElement('div');
        listtitles.className = "listtitles";

        
        
        maindiv.appendChild("listdiv");
    });
}

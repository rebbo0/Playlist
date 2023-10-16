var xmlhttp = new XMLHttpRequest();
var url = "playlist.json";

xmlhttp.onreadystatechange = function () {
    var jsonData = JSON.parse(this.responseText);
    displayPlaylist(jsonData.lists);    
};

xmlhttp.open("GET", url);
xmlhttp.send();

function displayPlaylist(lists){

}
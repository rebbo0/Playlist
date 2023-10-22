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
  var maindiv = document.getElementById("maindiv");
  maindiv.className = "maindiv";

  var listdiv;

  playlists.forEach((playlist) => {
    listdiv = document.createElement("div");
    listdiv.className = "listdiv";
    listdiv.id = playlist.id;

    var listname = document.createElement("h2");
    listname.className = "listname";
    listname.textContent = playlist.name;
    listdiv.appendChild(listname);

    var listowner = document.createElement("h3");
    listowner.className = "listowner";
    listowner.textContent = playlist.owner;
    listdiv.appendChild(listowner);

    var divider = document.createElement("hr");
    divider.className = "divider";
    listdiv.appendChild(divider);

    var listtitles = document.createElement("div");
    listtitles.className = "listtitles";

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

      var smalldivider = document.createElement("hr");
      smalldivider.className = "smalldivider";
      listtitles.appendChild(smalldivider);
    });

    var addbtn = document.createElement("button");
    addbtn.className = "addbtn";
    addbtn.onclick = function () {
      addSong(playlist.id);
    };
    addbtn.textContent = "+";

    listdiv.appendChild(listtitles);
    listdiv.appendChild(addbtn);
    maindiv.appendChild(listdiv);
  });
}

function addSong(id) {
  // currentPlaylistId = id;
  popListModal(id);
  openListModal(id);
}

function openListModal(id) {

  // currentPlaylistId = id;
  var modal = document.getElementById("list-modal");
  modal.style.display = "block";

  var form = document.getElementById("formmodal");

  function handleSubmit(e) {
    e.preventDefault();

    const title = document.getElementById("stitle").value;
    const interpret = document.getElementById("sinterpret").value;
    const min = document.getElementById("min").value;
    const sec = document.getElementById("sec").value;

    const newSong = {
      title: title,
      interpret: interpret,
      length: min + ":" + sec
    };

    var songs = document.getElementById(id).children[3];
    var songtitle = document.createElement("h4");
    songtitle.className = "songtitle";
    songtitle.textContent = newSong.title;
    songs.appendChild(songtitle);

    var songinterpret = document.createElement("p");
    songinterpret.className = "songinterpret";
    songinterpret.textContent = newSong.interpret;
    songs.appendChild(songinterpret);

    var songlength = document.createElement("p");
    songlength.className = "songlength";
    songlength.textContent = newSong.length;
    songs.appendChild(songlength);

    var smalldivider = document.createElement("hr");
    smalldivider.className = "smalldivider";
    songs.appendChild(smalldivider);
    form.removeEventListener("submit", handleSubmit);
    closeListModal();
  }
  form.addEventListener("submit", handleSubmit);
  
}

function closeListModal() {
  var modal = document.getElementById("list-modal");
  modal.style.display = "none";
  var modaltitle = document.getElementById("modal-title");
  modaltitle.textContent = "";
  var title = document.getElementById("stitle");
  title.value= "";
  var interpret = document.getElementById("sinterpret");
  interpret.value = "";
  var min = document.getElementById("min");
  min.value = "";
  var sec = document.getElementById("sec");
  sec.value = "";
}

function popListModal(id) {
  var modallisttitle = document.createElement("h2");
  var titlename = document.getElementById(id).firstChild.textContent;
  var modaltitle = document.getElementById("modal-title");
  modallisttitle.className = "modallisttitle";
  modallisttitle.textContent = "Add to Playlist: " + titlename;

  modaltitle.appendChild(modallisttitle);
}

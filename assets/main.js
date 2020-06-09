function myFunction() {
  
    var input, filter,gamelist, game, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    gamelist = document.getElementById("gamelist");
    game = document.querySelectorAll(".box");
  
  
    for (i = 0; i < game.length; i++) {
      a = game[i].querySelector(".gamelabel");
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        game[i].style.display = "";
      } else {
        game[i].style.display = "none";
      }
    }
  }
  // LANGUAGE
function languagechange(){
  languagecheck=document.getElementById('languagechange');
  let account=document.getElementById('account');
  let gamesplayed=document.getElementById('gamesplayed');
  let editprofile=document.getElementById('editprofile');
  let jumbo=document.getElementById('jumbotron');
  let join=document.querySelectorAll(".join");
  let footer=document.getElementById('footer');
  let search=document.getElementById('myInput');
  let profilenav=document.getElementById('profilenav');
  let aboutnav=document.getElementById('aboutnav');
  if(languagecheck.checked===true){
    account.innerText="Akun";
    gamesplayed.innerText="Games yang dimainkan";
    editprofile.innerText="Sunting Profil";
    jumbo.innerText="KOMUNITAS GAMING TERBAIK DI PENJURU DUNIA";
    for(i=0;i<join.length;i++){
      join[i].innerText="Gabung";
    }
    footer.innerHTML="Website ini dibuat untuk memenuhi  Tugas Akhir/ Submission dari  Akademi Dicoding Kelas Belajar Dasar Pemrograman Web "
    search.placeholder="Cari Game disini..";
    profilenav.innerHTML="Profil";
    aboutnav.innerHTML="Tentang";
  }else{
    account.innerText="Account";
    gamesplayed.innerText="Games Played";
    editprofile="Edit Profile";
    jumbo.innerText="BEST GAMING COMMUNITY AROUND THE WORLD";
    for(i=0;i<join.length;i++){
      join[i].innerText="Join";
    }
    footer.innerHTML="This Website was created to fulfill the final project / submission from Dicoding's Academy at Basic Web programming class";
    search.placeholder="Search Game here..";
    profilenav.innerHTML="Profile";
    aboutnav.innerHTML="About"
  }
}
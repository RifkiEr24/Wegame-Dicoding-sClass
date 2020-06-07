function myFunction() {
    // Declare variables
    var input, filter,gamelist, game, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    gamelist = document.getElementById("gamelist");
    game = document.querySelectorAll(".box");
  
    // Loop through all list items, and hide those who don't match the search query
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
function mobMenu() {
      document.getElementById("mobDropdown").classList.toggle("show");
    }

    //Close the dropdown if the user clicks outisde of it. 
    window.onclick = function(event) {
      if (!event.target.matches(".dropbtn")) {

        var dropdowns = document.getElementByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("show"));{
            openDropdown.classList.remove("show");
          }
        }
      }
    }
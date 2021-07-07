// MOBIL NAVBAR SECTOIN

//FOR MOBILE

  let serviceItem = document.getElementById('hidden').style.display = 'none';
  let buttonAll = document.querySelector('.service-butn').addEventListener('click', jj);

  function jj() {
    document.getElementById('hidden').style.display = 'block'; 
  }

//FOR DESKTOP

  let serviceIte = document.getElementById('hidd').style.display = 'none';
  let buttonAl = document.querySelector('.service-butn-1').addEventListener('click', all);

  function all() {
    document.getElementById('hidd').style.display = 'block'; 
  }


  // Mobile nav

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
  

/*
  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  */

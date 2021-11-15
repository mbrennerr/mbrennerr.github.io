
// Botão do Menu Mobile

const btnMobile = document.getElementById('btnMobile');

function toggleMenu() {
  const nav = document.getElementById('navFromMenu');
  nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);





// função que escreve job title;

function typeWrite(elemento) {
  
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = " ";
  textoArray.forEach(function (letra, i) {
    setTimeout(function () {
      elemento.innerHTML += letra;
    }, 150 * i);
  });
  
}

const titulo = document.querySelector(".maquinaDeEscrever");
typeWrite(titulo);





// função que seta parametros para os elementos Reveals;
const sr = ScrollReveal({
  origin:`${''}`,
  distance: "150px",
  duration: 2500,
  reset: true,
  
});


  sr.reveal('.menuContainer',{
    origin: 'top',
    delay: 200,    
  });

  sr.reveal('.heroContainer',{
    origin: 'top',
    delay: 200,
    
  });

  sr.reveal('.nameAndTitleBox',{
    origin: 'right',
    delay: 300
    
  });



  sr.reveal('.skillsBoardContainer',{
    origin: 'top',
    delay: 200,
    
  });

  sr.reveal('.projectsContainer',{
    origin: 'top',
    delay: 200,
    
  });

  sr.reveal('.aboutMeContainer',{
    origin: 'top',
    delay: 200,
    
  });

  sr.reveal('.footerContainer',{
    origin: 'left',
    delay: 200,
    
  });

  
  // sr.reveal('.footerContainer',{
  //   duration: 5000,
  //   origin: 'right',
  //   distance: '-100px'
  // // });


  
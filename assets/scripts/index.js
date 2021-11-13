
// máquina de escrever



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






const sr = ScrollReveal({
  origin:`${''}`,
  distance: "-150px",
  duration: 3000,
  reset: true,
});

console.log(sr)

  sr.reveal('.menuContainer',{
    origin: 'bottom',
    delay: 200,    
  });

  sr.reveal('.heroContainer',{
    origin: 'left',
    delay: 200,
    
  });

  // sr.reveal('nameAndTitleBox',{
  //   origin: 'right',
  //   delay: 200,
    
  // });



  sr.reveal('.skillsBoardContainer',{
    origin: 'right',
    delay: 200,
    
  });

  sr.reveal('.projectsContainer',{
    origin: 'left',
    delay: 200,
    
  });

  sr.reveal('.aboutMeContainer',{
    origin: 'right',
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



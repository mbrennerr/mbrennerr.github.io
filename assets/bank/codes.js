async function showRepositories() {

  try {
    const repositorios = await axios.get(`https://api.github.com/users/mbrennerr/repos`)
    rightElement.innerHTML = '<h2>Repositórios</h2>';
    rightElement.innerHTML += '<div id="lista"></div>';
    listElement = document.querySelector('#lista');
    for(repositorio of repositorios.data) {
        var listItem = document.createElement('div');
        var listTxtItem = document.createElement('a');
        listTxtItem.setAttribute('href', repositorio.html_url);
        listTxtItem.appendChild(document.createTextNode(repositorio.name));
        listItem.setAttribute('class', 'list-group-item');
        listItem.appendChild(listTxtItem);
        listElement.appendChild(listItem);
    }
  } 
  catch (error) {
      alert(error);
  }
  console.log()
}

<div class="container">
          <div class="line1"></div>
          <div class="main">
              <div class="leftSide">
                  <div id="userImage"></div>
                  <div id="user"></div>
              </div>
              <div class="line2"></div>
              <div id="rightSide" class="rightSide"></div>
          </div>
        </div>
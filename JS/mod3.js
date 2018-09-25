/* Execicio 1

var checaIdade = function(idade) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      return idade >= 18 ? resolve() : reject();
    }, 2000);
  });
}

checaIdade(18)
  .then(function(response) {
    console.log('Hey');
  })
  .catch(function(error) {
    console.warn('Hoe');
  })
*/

var buttonElement = document.querySelector('button');
var inputElement  = document.querySelector('input[name=user]');
var listElement   = document.querySelector('ul');

function  renderLoading() {
  listElement.innerHTML = '';
  var loadElement   = document.createElement('li');
  var loadText      = document.createTextNode('carregando');
  loadElement.appendChild(loadText);
  listElement.appendChild(loadElement)
  
}

function apiRequest(url) {
  if(!url) return;
  renderLoading();
  axios.get('https://api.github.com/users/'+ url + '/repos')
  .then(function(response) {
    showItems(response.data);
  })
  .catch(function(error) {
    errorMessage();
  });
}

function errorMessage() {
  listElement.innerHTML = '';
  var errorElement = document.createElement('h1');
  var errorText    = document.createTextNode('Something Went wrong');
  errorElement.appendChild(errorText);
  document.querySelector('body').appendChild(errorElement);
}

function showItems(items) {
  listElement.innerHTML = '';
  for(item of items) {
    var listItem = document.createElement('li');
    var listText = document.createTextNode(item.name);

    listItem.appendChild(listText);
    listElement.appendChild(listItem);
  }
}

var searchUrl = function() {
  apiRequest(inputElement.value);
  inputElement.value = '';
}

buttonElement.onclick = searchUrl;
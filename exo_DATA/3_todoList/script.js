const list = document.getElementById('list');
const form = document.querySelector('form');
const item = document.getElementById('item');
  
// add element
form.addEventListener('submit', (e) => {
  e.preventDefault();
  list.innerHTML += `<li>${item.value}</li>`;
  storage();
  item.value = "";
});

// remove element
list.addEventListener('click', (e) => {
  if(e.target.classList.contains('checked')){
    e.target.remove();
  } else {
    e.target.classList.add('checked');
  }
  storage();
});

// storage part
function storage() {
  window.localStorage.todoList = list.innerHTML;
}
function getValues() {
  let storageContent = window.localStorage.todoList;
  if(!storageContent) {
    list.innerHTML = 
      `<li>Cliquez sur un todo pour le supprimer</li>`;
  }
  else {
    list.innerHTML = storageContent;
  }
}
getValues();

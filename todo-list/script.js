const form = document.querySelector('#user-form');
const list = document.querySelector('#shopping-list-content');

form.addEventListener('submit', e => {
    e.preventDefault();
    listItem = form.elements['item-content'].value; // Note to self don't give an element the id item
    list.innerHTML += `
    <li class="list-group-item list-group-item-action">${listItem}<button type="button" class="btn-close" aria-label="Close"></button></li>
    `
    ResetInputField();
});

function ResetInputField() {
    form.elements['item-content'].value = '';
};

list.addEventListener('click', e => {
    e.preventDefault();
    e.target.classList.toggle('checked');
});

list.addEventListener('click', e => {
    if(e.target.classList[0] == 'btn-close'){
        e.target.parentElement.remove();

    }
 });
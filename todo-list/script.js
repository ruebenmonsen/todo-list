const form = document.querySelector('#user-form');
const list = document.querySelector('#shopping-list-content');
const userError = document.querySelector('#user-error');

form.addEventListener('submit', e => {
    e.preventDefault();
    listItem = form.elements['item-content'].value; // Note to self don't give an element the id item
    if (listItem !== '') {
        list.innerHTML += `
        <div><li class="list-group-item">${listItem}<button type="button" class="btn-close" aria-label="Close"></button></li></div>
        `
        ResetInputField();
        ResetErrorField();
    }
    else {
        // error message here
        userError.textContent = 'Skriv in en vara i fältet ovan';
        userError.style.color = 'red';
    }

});

function ResetInputField() {
    form.elements['item-content'].value = '';
};

function ResetErrorField() {
    userError.textContent = '';
}

list.addEventListener('click', e => {
    e.preventDefault();
    e.target.classList.toggle('checked');
});

list.addEventListener('click', e => {
    if (e.target.classList[0] == 'btn-close') {
        e.target.parentElement.remove();

    }
});
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let   
 count = 0;

button.addEventListener('click', () => {

    if (count >= 10) {
        alert('You have reached the maximum of 10 chapters.');
        return;
    }

    if (input.value.trim() === '') {
        alert('Please enter a valid chapter.');
        return;
    }

    const listItem = document.createElement('li');
    const textNode = document.createTextNode(input.value);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');

    listItem.appendChild(textNode);   

    listItem.appendChild(deleteButton);
    list.appendChild(listItem);

    input.value = '';
    count++;

    deleteButton.addEventListener('click', () => {
        listItem.remove();
        count--;
    });
});
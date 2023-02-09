/*let add = document.getElementById("save");
let favChapt = document.getElementById("favchap");
let deleteBtn = document.getElementsByClassName("delete");

add.addEventListener('click', function() {
	if (favChapt.value != "") {
        let deleteBottom = '<button class="delete">X</button>';
        let htmlList = document.getElementById("list").innerHTML + "<li>" + favChapt.value + deleteBottom +"</li>";
        //let list = document.getElementById("list").innerHTML;
        document.getElementById("list").innerHTML =  htmlList;

    }
    else
    {
        alert("You need to indicate the Favourite Scripture");
    }
});*/

const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    if (input.value != "") {
        const myItem = input.value;
        input.value = '';
        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');

        listItem.appendChild(listText);
        listText.textContent = myItem;
        listItem.appendChild(listBtn);
        listBtn.textContent = 'X';
        list.appendChild(listItem);

        listBtn.addEventListener('click', () => {
            list.removeChild(listItem);
        });
    }
    else
    {
        alert("Please indicate you favourite Chapter");
    }
    input.focus();
});
let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-game').value;
    row.insertCell(1).innerHTML = document.getElementById('game-dev').value;
    row.insertCell(2).innerHTML = document.getElementById('release-date').value;
    document.getElementById('new-game').value = '';
    document.getElementById('game-dev').value = '';
});
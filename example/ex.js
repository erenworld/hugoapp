const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const deleteNote = document.querySelector('.delete');

const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
  e.preventDefault();
  const text = document.querySelector('.textarea').value;
  const secondText = document.querySelector('.secondText').value;
  let date = new Date();

  const item = {
    text,
    secondText,
    done: false,
    date: date.toLocaleDateString(),
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  document.getElementById('textarea').value = '';
  document.getElementById('secondText').value = '';
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
    <li>
    <label for="">${plate.text}</label>
    <label for="">${plate.secondText}</label>
    <label for="">${plate.date}</label>

    </li>
        `;
    })
    .join('');
}

function toggleDone(e) {
  if (!e.target.matches('input')) return;
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

//delete
function deleteNotes() {
  confirm('forget this note?');
  localStorage.removeItem('items');
}

function exportOneNote() {}

deleteNote.addEventListener('click', deleteNotes);

addItems.addEventListener('click', addItem);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);

const saveNote = document.querySelector('.save');
const itemsList = document.querySelector('.plates');
const deleteNote = document.querySelector('.deleteNote');

const items = JSON.parse(localStorage.getItem('items')) || [];

function addNotes(e) {
  e.preventDefault();
  const textarea = document.querySelector('.textarea').value;
  const secondText = document.querySelector('.secondText').value;
  const date = new Date();

  alert('Write something my friend');
}

saveNote.addEventListener('click', addNotes);

//   let date = new Date();

//   const item = {
//     text,
//     secondText,
//     date: date.toLocaleDateString(),
//   };

//   items.push(item);
//   populateList(items, itemsList);
//   localStorage.setItem('items', JSON.stringify(items));
//   document.getElementById('textarea').value = '';
//   document.getElementById('secondText').value = '';
// }

// //
// //   items.push(item);
// //   populateList(items, itemsList);
// //   localStorage.setItem('items', JSON.stringify(items));
// //   document.getElementById('textarea').value = '';
// //   document.getElementById('secondText').value = '';
// // }

// function populateList(plates = [], platesList) {
//   platesList.innerHTML = plates
//     .map((plate, i) => {
//       return `
//     <div>
//     <h1>${plate.text}</h1>
//     <h1>${plate.secondText}</h1>
//     <h1>${plate.date}</h1>
//     </div>
//     `;
//     })
//     .join('');
// }

// addItems.addEventListener('click', addItem);

// localStorage.clear();

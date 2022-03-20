let addbutton = document.getElementById("addButton");
let clearButton = document.getElementById("clearData");
let notes = document.getElementById("notes");
let search = document.getElementById("searchNote");
showNotes();


addbutton.addEventListener("click", validation);
let addTextValue = document.getElementById("addText");
let noteHeader = document.getElementById("noteHeader");

function validation() {
  if (addTextValue.value === "" || noteHeader.value === "") {
    toastr.options= {
      "closeButton": false,
      "debug": false,
      "newestOnTop": false,
      "progressBar": true,
      "positionClass": "toast-top-center",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "5000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }
    toastr.error('Enter the values');
  } else {
    addText();
  }
}

//add the notes
function addText() {
  localStorage.setItem(
    JSON.stringify(noteHeader.value),
    JSON.stringify(addTextValue.value)
  );
  addTextValue.value = noteHeader.value = "";
  toastr.options= {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-center",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }
  toastr.success('Note have been added');
  showNotes();
}

//show the notes
function showNotes() {
  var html = "";
  var keys = getStorageLimit();
  if (keys.length == 0) {
    html = `
        <div class="card my-3 mx-3" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Please add notes to show</h5>
            <p class="card-text">Empty</p>
            <button onClick="infoNotes()"class="btn btn-danger my-2" id="deleteButton">Delete Note</a>
        </div>
        </div>
        `;
    notes.innerHTML = html;

  } else {
    html = addValue();
    notes.innerHTML = html;
  }
}

function infoNotes(params) {
  toastr.options= {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-center",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }
  toastr.info('Add note to delete');
}

//add value to the notes
function addValue() {
  var html = "";

  var keys = getStorageLimit();
  for (let index = 0; index < keys.length; index++) {
    notesObj = localStorage.key(index);
    notesObjVal = localStorage.getItem(notesObj);
    html += `<div class="card my-3 mx-3" style="width: 18rem;">
          <div class="card-body">
              <h5 class="card-title">${JSON.parse(notesObj)}</h5>
              <p class="card-text">${JSON.parse(notesObjVal)}</p>
              <button onClick="deleteNotes(${index})" class="btn btn-danger my-2" 
              id="deleteButton">Delete Note</a>
          </div>
          </div>`;
  }
  return html;
}

function deleteNotes(noteKey) {
  var local = localStorage.key(noteKey);
  toastr.options= {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-center",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }
  toastr.success('Note have been deleted');
  localStorage.removeItem(local);
  showNotes();
}

//get the data stored length
function getStorageLimit() {
  var keys = Object.keys(localStorage);
  return keys;
}

function serachNotes() {
  console.log(search.value);
}

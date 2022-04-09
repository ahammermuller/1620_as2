
// Function to click plus button
function clickPlusbutton (){
  const plusButton = document.querySelector(".fa-solid.fa-circle-plus")
  plusButton.addEventListener("click", newNote)
}

// Function to open a new text with Save and Cancel buttons.
function newNote() {
  const noteBox = `
  <div class="new-note-area">
    <textarea name="textarea" rows="15" cols="80" > </textarea>
    <div>
      <button id="save">Save</button>
      <button id="cancel">Cancel</button>
    </div>
  </div>
`
  const noteArea = document.querySelector(".write-note-area")
  noteArea.insertAdjacentHTML("beforeend", noteBox)
  noteArea.addEventListener("click", saveCancelbuttons)
}

// Function to click save and cancel buttons
function saveCancelbuttons(evt) {
  const newNotearea = document.querySelector(".new-note-area")
  const id = evt.target.id
  if (id === "cancel") {
    newNotearea.remove()
  } else if (id === "save") {
    const newTextarea = document.querySelector(".new-note-area > textarea").value
    clickSave(newTextarea)
    newNotearea.remove()
  }
}

// Function to push the notes to a list after click the save button 
function clickSave(textinput) {
  const splitInput = textinput.split("\n")
  const notes = {
    title: splitInput[0],
    noteBody: splitInput.slice(1).join("\n"),
    id: newText.length + 1
  }
  newText.push(notes)
  addNote(notes)
}

// Function to add the new note below notes in the left side of the page
function addNote(note) {
  const notesList = document.querySelector(".notes-list")
  const notesTitle = `<li data-id="${note.id}" class="noteTitle">${note.title}</li>`
  notesList.insertAdjacentHTML("beforeend", notesTitle)
  notesList.addEventListener("click", readNotes)
}


const newText = []

function readNotes(evt) {
  const readNoteArea = document.querySelector(".read-note-area")
  const note = newText[evt.target.dataset.id - 1]
  const noteRead = `
    <div class="read-note">
      <span class="icons"><i class="fa-regular fa-times-circle"></i></span>
      <div>
        <h1>${note.title}<h1>
        <p>${note.noteBody}</p>
      </div>
    </div>
    `
    readNoteArea.insertAdjacentHTML("beforeend", noteRead)
    readNoteArea.querySelector(".fa-regular.fa-times-circle")
    readNoteArea.addEventListener("click", (evt) => {
    readNoteArea.remove()
    })
}

clickPlusbutton()
	

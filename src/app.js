const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]

const plusButton = document.querySelector(".fa-solid.fa-circle-plus")
const noteArea = document.querySelector(".create-note-area")

	
// how the new textbox will looks like
const newNotebox = `
  <div class="new-note-area">
    <textarea name="textarea" rows="10" cols="50"> </textarea>
    <div>
      <button id="save">Save</button>
      <button id="cancel">Cancel</button>
    </div>
  </div>
	`
// Function to open a new text box
  function newNote() {
    const noteArea = document.querySelector(".create-note-area")
    noteArea.insertAdjacentHTML("beforeend", newNotebox)
  }
  

// Function to add the note below notes in the left side of the page
	function addNote() {
    const notesList = document.querySelector(".notes-list")
    const notesTitle = `<li>${notes.title}</li>`
	  notesList.insertAdjacentHTML("beforeend", notesTitle)
	}
	

	function saveNote(textinput) {
	  const splitText = textinput.split("\n")
	  const title = splitText[0]
	  const content = splitText.splice(1).join("\n")
	

	  const noteObj = {
	    title: title,
	    content: content,
	    id: notes[notes.length -1].id + 1
	  }
	  notes.push(noteObj)
	

	  addNote(noteObj)
	  removeNewNoteArea()
	}
	

	function removeNewNoteArea() {
	  document.querySelector(".new-note-area").remove()
	}
	

	function createNoteAreaClick(event) {
	  const id = event.target.id
	  if (id === "cancel") {
	    removeNewNoteArea()
	  } else if (id === "save") {
	    saveNote(document.querySelector(".new-note-area > textarea").value)
	  }
	}
	

	plusButton.addEventListener("click", newNote)
	noteArea.addEventListener("click", createNoteAreaClick)
	

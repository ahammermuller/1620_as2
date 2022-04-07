const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]
	
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
  noteArea.addEventListener("click", SavecancelButtons)
}

// function to click plus button
function clickPlusbutton (){
  const plusButton = document.querySelector(".fa-solid.fa-circle-plus")
  plusButton.addEventListener("click", newNote)
}

// Function to add the new note below notes in the left side of the page
function addNote() {
  const notesList = document.querySelector(".notes-list")
  const notesTitle = `<li>${notes.title}</li>`
	notesList.insertAdjacentHTML("beforeend", notesTitle)
}

function SavecancelButtons(event) {
  const id = event.target.id
  if (id === "cancel") {
    document.querySelector(".new-note-area").remove()
  } else if (id === "save") 
    addNote(notes)  
}

clickPlusbutton()



	

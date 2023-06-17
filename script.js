// Add Note Button
var addNoteButton = document.getElementById("add_note");
addNoteButton.addEventListener("click", function() {
  document.getElementById("modal").style.display = "block";
});

// Hide Modal Button
var hideModalButton = document.getElementById("hide");
hideModalButton.addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

// Enter Key Pressed in Textarea
var noteInput = document.getElementById("user_input");
noteInput.addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    var noteText = noteInput.value;
    if (noteText.trim() !== "") {
      createNoteElement(noteText);
      noteInput.value = "";
      document.getElementById("modal").style.display = "none";
    }
  }
});

// Create Note Element
function createNoteElement(text) {
  var allNotesDiv = document.getElementById("all_notes");

  var noteDiv = document.createElement("div");
  noteDiv.classList.add("note");
  noteDiv.style.margin = "-5px";
  noteDiv.style.backgroundColor = "#c2ff3d";
  noteDiv.style.transform = "rotate(-5deg)";

  var detailsDiv = document.createElement("div");
  detailsDiv.classList.add("details");

  var noteTitle = document.createElement("h1");
  noteTitle.textContent = text;

  detailsDiv.appendChild(noteTitle);
  noteDiv.appendChild(detailsDiv);
  allNotesDiv.appendChild(noteDiv);
}
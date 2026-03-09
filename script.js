const addBtn = document.getElementById("addNote");
const container = document.getElementById("notesContainer");

addBtn.addEventListener("click", () => {
createNote("");
});

function createNote(text){
const note = document.createElement("div");
note.classList.add("note");

note.innerHTML = `
<span class="delete">❌</span>
<textarea>${text}</textarea>
`;

container.appendChild(note);

note.querySelector(".delete").addEventListener("click", () => {
note.remove();
saveNotes();
});

note.querySelector("textarea").addEventListener("input", saveNotes);

saveNotes();
}

function saveNotes(){
const notes = document.querySelectorAll("textarea");
const data = [];

notes.forEach(note => data.push(note.value));

localStorage.setItem("notes", JSON.stringify(data));
}

function loadNotes(){
const data = JSON.parse(localStorage.getItem("notes") || "[]");
data.forEach(note => createNote(note));
}

loadNotes();

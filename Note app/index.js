const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');

let notes = document.querySelectorAll('.input-box');

function updateStorage() {
    localStorage.setItem('note', notesContainer.innerHTML)
}

function showstorage() {
     notesContainer.innerHTML =  localStorage.getItem("note")
}

showstorage()

createBtn.addEventListener("click", function() {
    let inputBox = document.createElement("p")    ;
    let img = document.createElement("img");

    inputBox.className = 'input-box';
    inputBox.contentEditable = true;
    img.src= "images/delete.png";

    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);
 


    updateStorage()
}
)

notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        updateStorage()
    
    } else if (e.target.tagName === 'P') {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.addEventListener("input", function() {
                updateStorage()
            
            });
        });
    }
});
let addContact = document.getElementById('add-contact');

// funktion så knappen gör något när man klickar på den
addContact.querySelector('button').addEventListener('click', function() {
    // En variabel som fångar alla inputs
    let inputs = addContact.querySelectorAll('input');

    // Variabel för den "osynliga" kontaktlistan
    let contactList = document.getElementById('contact-list');
    // variabel med det nya itemet
    
    const template = document.getElementById('contact-list-row');
    
    const listItem = template.content.cloneNode(true);
    listItem.querySelector('input[type="text"]').value = inputs[0].value;
    listItem.querySelector('input[type="tel"]').value = inputs[1].value;
    
    contactList.append(listItem);
    
    inputs[0].value = '';
    inputs[1].value = '';
});

// Edit row
function editRow(element){

    let inputs = element.parentNode.querySelectorAll('input');
    
    if(element.classList.contains('save')){
        inputs.forEach(input => {
            input.disabled = true;
        });
        element.innerText = 'Ändra kontakt';
        
    } else {
        inputs.forEach(input => {
            input.disabled = false;
        });
        element.innerText = 'Spara ändringar';
    }

    element.classList.toggle("save");
}

// Delete row
function deleteRow(element) {
    element.parentNode.remove();
}
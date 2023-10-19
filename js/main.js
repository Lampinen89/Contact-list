let addContact = document.getElementById('add-contact');

addContact.querySelector('button').addEventListener('click', function() {
    let input = document.getElementsByTagName('fullname');
    let newContact = document.createElement('div');
    newContact.className = "added-to-contact-list";
    addContact.innerText = input.value;
    console.log('newContact');
})
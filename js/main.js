var btnSubmit = document.querySelector('.button-submit');
var form = document.querySelector('.contact-form-add');

var inputName = document.querySelector('.input-name');
var inputRelation = document.querySelector('.input-relation');
var inputPhone = document.querySelector('.input-phone');

var contactsList = document.querySelector('.contacts-list');

var contactsArray = []
var num = 0;

if(form){
  form.addEventListener('submit', function(evt){
    evt.preventDefault();





    num++;
    var contactItem = document.createElement('li');
    var contactName = document.createElement('h3');
    var contactRelation = document.createElement('p');
    var contactNumber = document.createElement('a');
    var contact = {
      num : null,
      name : null,
      relation : null,
      phone : null
    }

    contactName.textContent = inputName.value;
    contactRelation.textContent = inputRelation.value;
    contactNumber.textContent = inputPhone.value;

    contact.num = num;
    contact.name = inputName.value;
    contact.relation = inputRelation.value;
    contact.phone = inputPhone.value;

    inputName.value = '';
    inputRelation.value = '';
    inputPhone.value = '';

    contactItem.appendChild(contactName);
    contactItem.appendChild(contactRelation);
    contactItem.appendChild(contactNumber);

    contactItem.classList.add('bg-light', 'w-100', 'p-3', 'rounded', 'border', 'mb-4');
    contactNumber.classList.add('text-decoration-none');
    contactNumber.href="tel:" + inputPhone.value

    contactsList.appendChild(contactItem);
    contactsArray.push(contact);
  });
}
console.log(contactsArray);
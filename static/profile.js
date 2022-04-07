function submitProfile(evt) {
  evt.preventDefault();

  const data = {
    name: document.querySelector('#name-field').value,
    age: document.querySelector('#age-field').value,
    occupation: document.querySelector('#occupation-field').value,
    salary: document.querySelector('#name-field').value,
    educationLevel: document.querySelector('#name-field').value,
    state: document.querySelector('#state-field').value,
    cityType: document.querySelector('#name-field').value,
    garden: document.querySelector('#name-field').value,
    tvHours: document.querySelector('#name-field').value,
    // fill in the rest

  

  };

  // make request to server to get the data
  // add the data the server returns to the document
  // (you can add it to the end of the div with ID "profiles")
}

document.querySelector('#profile-form').addEventListener('submit', submitProfile);

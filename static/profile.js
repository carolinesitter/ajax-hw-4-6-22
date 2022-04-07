function submitProfile(evt) {
  evt.preventDefault();

  const data = {
    name: document.querySelector('#name-field').value,
    age: document.querySelector('#age-field').value,
    occupation: document.querySelector('#occupation-field').value,
    // fill in the rest

  

  };

  // make request to server to get the data
  // add the data the server returns to the document
  // (you can add it to the end of the div with ID "profiles")
}

document.querySelector('#profile-form').addEventListener('submit', submitProfile);

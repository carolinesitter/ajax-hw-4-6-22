function submitProfile(evt) {
  evt.preventDefault();

  const data = {
    name: document.querySelector('#name-field').value,
    age: document.querySelector('#age-field').value,
    occupation: document.querySelector('#occupation-field').value,
    // fill in the rest
};

  // make request to server to get the data
  fetch('/api/profile', {
    method : 'POST',
    body : JSON.stringify(data),
    headers : {
      'Content-Type' : 'application/json',
    },
  })
    .then((response) => response.json())
    // add the data the server returns to the document
    .then(jsonData => {
      // (you can add it to the end of the div with ID "profiles")
      document
        .querySelector('#profiles')
        .insertAdjacentHTML(
          'beforeend',
          `<li>${jsonData.fullname}, ${jsonData.age}, ${jsonData.occupation}</li>`
        );
    });
}

document.querySelector('#profile-form').addEventListener('submit', submitProfile);

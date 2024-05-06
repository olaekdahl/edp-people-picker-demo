
const unpickedPeopleDiv = document.querySelector('section#unpickedPeople div');
const pickedPeopleDiv = document.querySelector('section#pickedPeople div');
const pickedPersonDiv = document.querySelector('section#pickedPerson div');
const resetPeopleButton = document.querySelector('button#resetPeople')
const pickRandomPersonButton = document.querySelector('button#pickRandomPerson')
let pickedPeople = [];
let unpickedPeople = []
let pickedPerson = undefined

resetPeopleButton.addEventListener('click', async () => {
  const url = `/api/allPeople`;
  unpickedPeople = await fetch(url)
    .then(validateResponse)
    .then(res => res.json())
    .catch(err => console.error(err))
  pickedPeople.length = 0;
  pickedPerson = undefined;
  renderPeople()
});

pickRandomPersonButton.addEventListener('click', () => {
  console.log('clicked')
  pickedPerson = pickPerson();
  renderPeople();
})

function renderPeople() {
  console.log(unpickedPeople, pickedPerson, pickedPeople)
  unpickedPeopleDiv.innerHTML = unpickedPeople.map(p => drawAPerson(p)).join('');
  pickedPeopleDiv.innerHTML = pickedPeople.map(p => drawAPerson(p)).join('');
  pickedPersonDiv.innerHTML = drawAPerson(pickedPerson);
}
function drawAPerson(person) {
  return `<p>${person?.first}</p>`
}
function pickPerson() {
  // Add the current picked person to the pickedPeople list
  pickedPeople.push(pickedPerson);

  // Check if there are any unpicked people left
  if (unpickedPeople.length === 0) {
    return; // No more people to pick, so exit the function
  }

  // Get a random index within the unpickedPeople list
  const randomIndex = Math.floor(Math.random() * unpickedPeople.length);

  // Pick the person at the random index
  pickedPerson = unpickedPeople.splice(randomIndex, 1)[0];

  // Remove the picked person from the unpickedPeople list (splice returns an array with the removed element)
  return pickedPerson;
}


// Checks whether we got the OK from fetch request -- if not, throw error
function validateResponse(res) {
  // if response is valid, return to previous code
  if (res.ok) return res
  
  // just for fun
  if(res.status === 418){
    throw "Found a teapot";
  }
  
  // else if there's an error, throw relevant error
  let statusPrefix = Number(String(res.status).slice(0,1));
  switch (statusPrefix) {
    case 4:
      throw `Client Error: ${res.status}`;
    case 5:
      throw `Server Error: ${res.status}`
    default:
      throw "Some unknown error"
  }
}
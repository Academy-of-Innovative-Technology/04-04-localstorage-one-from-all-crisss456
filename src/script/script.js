var Database = {
  keyName: "mutantDatabase",
  data: []
};

function loadDataSource() {

  var storedData = localStorage.getItem(Database.keyName);

  var parsedData = JSON.parse(storedData);

  Database.data = parsedData.response;

  var select = document.querySelector("#select-mutant");

  for (var i = 0; i < Database.data.length; i++) {
    var option = document.createElement("option");
    option.text = Database.data[i].name.alias;
    option.value = i;
    select.appendChild(option);
  }
}


function searchForMutantByAlias(mutantAlias) {

  var index = -1;






  if (index === -1) {
    alert("Invalid Alias");
  } else {
    displayData(index);
  }
}

function searchForMutantByAlias(mutantAlias) {

  var index = -1;

  for (var i = 0; i < Database.data.length; i++) {

    if (Database.data[i].name.alias === mutantAlias) {
      index = i;
      break;
    }

  }

  if (index === -1) {
    alert("Invalid Alias");
  } else {
    displayData(index);
  }
}


function displayData(index) {

  var mutant = Database.data[index];

  var htmlTemplate = `
    <div class="card">
      <img src="${mutant.image}" class="card-img-top" alt="${mutant.name.alias}">
      <div class="card-body">
        <h2>${mutant.name.alias}</h2>
        <p><strong>Name:</strong> ${mutant.name.firstName} ${mutant.name.lastName}</p>
        <p><strong>Gender:</strong> ${mutant.profile.gender}</p>
        <p><strong>Eyes:</strong> ${mutant.profile.eyes}</p>
        <p><strong>Hair:</strong> ${mutant.profile.hair}</p>
        <p><strong>Height:</strong> ${mutant.profile.height}</p>
        <p><strong>Powers:</strong> ${mutant.powers.join(", ")}</p>
        <p><strong>Affiliation:</strong> ${mutant.affiliation.join(", ")}</p>
      </div>
    </div>
  `;

  document.querySelector("#results-section").innerHTML = htmlTemplate;
}


function getSelectedValue() {
  const selectElement = document.querySelector('#select-mutant');
  const selectedOption = selectElement.options[selectElement.selectedIndex];
  const selectedText = selectedOption.text;

  alert(selectedText);

  searchForMutantByAlias(selectedText);

}

document.querySelector("#select-mutant").addEventListener('change', getSelectedValue);


// CALL BY DEFAULT
loadDataSource();
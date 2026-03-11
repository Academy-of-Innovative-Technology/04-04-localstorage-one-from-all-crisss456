var Database = {
  keyName: "mutantDatabase",
  data: []
};

function loadDataSource() {

  // get data from localStorage
  var storedData = localStorage.getItem(Database.keyName);

  // convert JSON string into JavaScript object
  var parsedData = JSON.parse(storedData);

  // save data into Database object
  Database.data = parsedData.response;

  // fill dropdown with mutant aliases
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


function displayData(index) {

  var htmlTemplate = ``;








  document.querySelector("#results-section").innerHTML = htmlTemplate;
}


function getSelectedValue() {
  const selectElement = document.querySelector('#select-mutant');
  const selectedOption = selectElement.options[selectElement.selectedIndex];
  const selectedText = selectedOption.text;

  // TEST METHOD // REMOVE OR HIDE
  alert(selectedText);

  searchForMutantByAlias(selectedText);

}

document.querySelector("#select-mutant").addEventListener('change', getSelectedValue);



// CALL BY DEFAULT
loadDataSource();
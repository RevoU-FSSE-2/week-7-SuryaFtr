// Declare and get element value by Id on Form
var typeInput = document.getElementById("type");
var financialInput = document.getElementById("financial-name");
var detailsInput = document.getElementById("details");
var amountInput = document.getElementById("amount");
var addRecord = document.getElementById('add-record');
// Declare and get element value by Id for record result
var recordList = document.getElementById('financial-record');
// Create empty array to save Financial datas
var lists = [];
// Create function to show the datas on list
function displayFinancial() {
    // Empty recent list
    recordList.innerHTML = '';
    // Do looping with every data on array and create item list for it
    lists.forEach(function (data, index) {
        var li = document.createElement('li');
        li.innerHTML = "<div class=\"card mb-4 rounded-3 shadow-sm border-secondary\">\n        <div class=\"card-header py-3 text-bg-secondary border-secondary\">\n        <h4 class=\"my-0 fw-normal\">Record ".concat(index + 1, " <br> ").concat(data.typ, "<h4></div> \n        <div class=\"card-body\"><p>Financial Name : <br> ").concat(data.finance, "</p> <p>Financial Details : <br> ").concat(data.dtail, "</p> <p>Amount : <br> Rp. ").concat(data.cash, "</p></div>\n        </div>");
        recordList.appendChild(li);
    });
}
// Adding event listener
addRecord.addEventListener('click', function () {
    // Get value from input form 
    var type = typeInput.value;
    var financial = financialInput.value;
    var details = detailsInput.value;
    var amount = Number(amountInput.value);
    // To check for input form has being filled
    if (type && financial && details && amount) {
        // Create new object data with filled value
        var newFinancial = {
            typ: type,
            finance: financial,
            dtail: details,
            cash: amount,
        };
        // Adding new data to array list
        lists.push(newFinancial);
        // Call function for re-New the list data on website
        displayFinancial();
        // Make input form empty after adding new data
        typeInput.value = '';
        financialInput.value = '';
        detailsInput.value = '';
        amountInput.value = '';
        alert('Succesfully Added Record');
    }
    else {
        alert("Please fill all the input form !!!");
    }
});

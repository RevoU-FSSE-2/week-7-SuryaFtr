// Declare and get element value by Id on Form

const typeInput = document.getElementById("type") as HTMLInputElement;
const financialInput = document.getElementById("financial-name") as HTMLInputElement;
const detailsInput = document.getElementById("details") as HTMLInputElement;
const amountInput = document.getElementById("amount") as HTMLInputElement;

const addRecord = document.getElementById('add-record') as HTMLButtonElement;

// Declare and get element value by Id for record result
const recordList = document.getElementById('financial-record') as HTMLUListElement;

// Definition for interface object Financial
interface Financial {
    typ: string;
    finance: string;
    dtail: string;
    cash: number;
}

// Create empty array to save Financial datas
const lists: Financial[] = [];

// Create function to show the datas on list
function displayFinancial() {
    // Empty recent list
    recordList.innerHTML = '';

    // Do looping with every data on array and create item list for it
    lists.forEach((data, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<div class="card mb-4 rounded-3 shadow-sm border-secondary">
        <div class="card-header py-3 text-bg-secondary border-secondary">
        <h4 class="my-0 fw-normal">Record ${index + 1} <br> ${data.typ}<h4></div> 
        <div class="card-body"><p>Financial Name : <br> ${data.finance}</p> <p>Financial Details : <br> ${data.dtail}</p> <p>Amount : <br> Rp. ${data.cash}</p></div>
        </div>`;
        recordList.appendChild(li);
    });
}

// Adding event listener
addRecord.addEventListener('click', () => {
    // Get value from input form 
    const type = typeInput.value;
    const financial = financialInput.value;
    const details = detailsInput.value;
    const amount = Number(amountInput.value);

    // To check for input form has being filled
    if (type && financial && details && amount) {
        // Create new object data with filled value
        const newFinancial: Financial = {
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
    } else {
        alert("Please fill all the input form !!!");
    }
});



//Listen for submit

document.querySelector('#loan-form').addEventListener('submit',function(e){
  //Hide results
  document.querySelector('#results').style.display = 'none';

  //Show loaders
  document.querySelector('#loading').style.display = 'block';
  setTimeout(calculateResult, 2000);
  e.preventDefault();
});


//function Calculate Result 
function calculateResult(){

  console.log('Calculating.....');
//UI vars
const amount = document.querySelector('#amount');
const interest = document.querySelector('#interest');
const years = document.querySelector('#years');
const monthlyPayment = document.querySelector('#monthly-payment');
const totalPayment = document.querySelector('#total-payment');
const totalInterest = document.querySelector('#total-interest');
//Compute Monthly Payment

const principal = parseFloat(amount.value);
const calculatedInterest = parseFloat(interest.value) /100 / 12;
const calculatedPayments = parseFloat(years.value) * 12;

//Compute monthly Payment
const x = Math.pow(1 + calculatedInterest, calculatedPayments);

const monthly = (principal * x * calculatedInterest)/(x-1);

if(isFinite(monthly)){
  monthlyPayment.value = monthly.toFixed(2);
  totalPayment.value = (monthly * calculatedPayments).toFixed(2);
  totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);

    //Hide results
    document.querySelector('#results').style.display = 'block';

    //Show loaders
    document.querySelector('#loading').style.display = 'none';

}else{
  // console.log('Please check your numbers');
  showError('Please check your numbers');
}


e.preventDefault();
}


//Show Error

function showError(error){

    //Hide results
    document.querySelector('#results').style.display = 'none';

    //Show loaders
    document.querySelector('#loading').style.display = 'none';

  //Create a div
  const errorDiv = document.createElement('div');
  //Get elemtn
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  //Add class 
  errorDiv.className = 'alert alert-danger';

  //Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));
  //Insert error above heading
  card.insertBefore(errorDiv,heading);

  //Clear error after 3 seconds
  setTimeout(clearError, 3000);
}

//clear error
function clearError(){
  document.querySelector('.alert').remove();
}








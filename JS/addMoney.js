document.getElementById('btn-add-money')
.addEventListener('click', function(event){
event.preventDefault();

const addMoney = document.getElementById('input-add-money').value;
const addMoneyNumber =parseFloat(addMoney);
const pinNumber = document.getElementById('input-pin-number').value;

// worng way to verify pin
if(pinNumber === '0000'){
const balance =document.getElementById('account-balance').innerText
const balanceNumber = parseFloat(balance);

const newbalance = balanceNumber + addMoneyNumber ;
console.log(newbalance);
document.getElementById('account-balance').innerText =newbalance;

}
else{
    alert('failed to add money.? Please try again');
}

})
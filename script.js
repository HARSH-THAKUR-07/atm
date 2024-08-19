// Sample accounts
const accounts = [
    { name: "Alice", balance: 1000, pin: "1234" },
    { name: "Bob", balance: 1500, pin: "5678" },
    { name: "Charlie", balance: 2000, pin: "9101" }
];

let currentAccount = null;

function login() {
    const pin = document.getElementById('pin').value;
    const account = accounts.find(acc => acc.pin === pin);
    if (account) {
        currentAccount = account;
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('atm-section').style.display = 'block';
        document.getElementById('user-name').textContent = account.name;
    } else {
        document.getElementById('login-message').textContent = 'Incorrect PIN.';
    }
}

function logout() {
    currentAccount = null;
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('atm-section').style.display = 'none';
}

function checkBalance() {
    if (currentAccount) {
        document.getElementById('balance-message').textContent = Your balance is $${currentAccount.balance};
    }
}

function showDeposit() {
    document.getElementById('deposit-section').style.display = 'block';
    document.getElementById('withdraw-section').style.display = 'none';
}

function showWithdraw() {
    document.getElementById('withdraw-section').style.display = 'block';
    document.getElementById('deposit-section').style.display = 'none';
}

function deposit() {
    const amount = parseFloat(document.getElementById('deposit-amount').value);
    if (amount > 0) {
        currentAccount.balance += amount;
        document.getElementById('deposit-message').textContent = Deposit successful. New balance is $${currentAccount.balance};
    } else {
        document.getElementById('deposit-message').textContent = 'Invalid deposit amount.';
    }
    document.getElementById('deposit-amount').value = '';
}

function withdraw() {
    const amount = parseFloat(document.getElementById('withdraw-amount').value);
    if (amount > 0 && amount <= currentAccount.balance) {
        currentAccount.balance -= amount;
        document.getElementById('withdraw-message').textContent = Withdrawal successful. New balance is $${currentAccount.balance};
    } else {
        document.getElementById('withdraw-message').textContent = 'Invalid withdrawal amount or insufficient funds.';
    }
    document.getElementById('withdraw-amount').value = '';
}
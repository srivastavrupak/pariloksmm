let balance = 0;

// ---------------- LOGIN -------------
function login(){
    let email = document.getElementById("email").value;
    let pass  = document.getElementById("password").value;

    if(email === "" || pass === ""){
        alert("Please enter email & password");
    } else {
        alert("Login successful!");
        window.location.href = "dashboard.html";
    }
}

// ---------------- ADD FUNDS -------------
function addFunds(){
    let amt = document.getElementById("fundAmount").value;

    if(amt === "" || amt <= 0){
        alert("Enter valid amount!");
    } else {
        balance += parseInt(amt);
        document.getElementById("balance").innerText = balance;
        alert("Funds Added Successfully!");
    }
}

// ---------------- PLACE ORDER -------------
function submitOrder(){
    let service = document.getElementById("service").value;
    let link = document.getElementById("link").value;
    let qty = document.getElementById("qty").value;

    if(service === "" || link === "" || qty === ""){
        alert("Please fill all fields");
        return;
    }

    let pricePer1000 = parseInt(service);
    let orderCost = (pricePer1000 / 1000) * qty;

    if(orderCost > balance){
        alert("Insufficient Balance! Please Add Funds.");
        return;
    }

    balance -= orderCost;
    document.getElementById("balance").innerText = balance;

    alert("Order Placed Successfully!\nCost: ₹" + orderCost);
}
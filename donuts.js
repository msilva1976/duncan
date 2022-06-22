function updateOrder() {
    const TAXRATE = 0.0925;
    const DONUTPRICE = 0.50;
    var numCakeDonuts = document.getElementById("cakedonuts").value;
    parseInt(document.getElementById(cakedonuts).value);
    var numGlazedDonuts =  document.getElementById("glazeddonuts").value;
    parseInt(document.getElementById(glazeddonuts).value)
    if (isNaN(numCakeDonuts)) {
        numCakeDonuts = 0;
    }
    if (isNaN(numGlazedDonuts)) {
        numGlazedDonuts = 0;
    }
    var subTotal = (numCakeDonuts + numGlazedDonuts)*DONUTPRICE;
    var tax = subTotal * TAXRATE;
    var total = subTotal + tax;
    document.getElementById("subtotal").value = "$" + subTotal.toFixed(2);
    document.getElementById("tax").value = "$" + tax.toFixed(2);
    document.getElementById("total").value = "$" + total.toFixed(2);
}
function placeOrder(){
    Form.submit();
}
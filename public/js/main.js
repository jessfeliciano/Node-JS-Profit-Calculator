//// Responsive navbar
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('nav-links')[0];
const mainSection = document.getElementsByClassName('color-mode')[0];

   if(toggleButton){
    toggleButton.addEventListener('click', () => {
      navbarLinks.classList.toggle('active');
      mainSection.classList.toggle('responsive')
    })
   };
//# sourceURL=pen.js



// Toggle Light and Dark Mode functionality
if (window.CSS && CSS.supports("color", "var(--primary)")) {
  var toggleColorMode = function toggleColorMode(e) {
    // Switch to Light Mode
    if (e.currentTarget.classList.contains("light--hidden")) {
      // Sets the custom html attribute
      document.documentElement.setAttribute("color-mode", "light"); // Sets the user's preference in local storage

      localStorage.setItem("color-mode", "light");
      return;
    }
    /* Switch to Dark Mode
    Sets the custom html attribute */
    document.documentElement.setAttribute("color-mode", "dark"); // Sets the user's preference in local storage

    localStorage.setItem("color-mode", "dark");
  }; // Get the buttons in the DOM

  var toggleColorButtons = document.querySelectorAll(".color-mode__btn"); // Set up event listeners

  toggleColorButtons.forEach(function(btn) {
    btn.addEventListener("click", toggleColorMode);
  });
} else {
  // If the feature isn't supported, then we hide the toggle buttons
  var btnContainer = document.querySelector(".color-mode__header");
  btnContainer.style.display = "none";
}

////// Event Listeners for clicks on form ////////

// document.getElementById("calculationButton").addEventListener("click", function() {
//   dataLayer.push({'event': 'profitCalculatorButton'});
// });
//
// document.getElementById("resetButton").addEventListener("click", function() {
//   dataLayer.push({'event': 'startOverButton'});
// });


////// Event Listeners for clicks on navbar ////////

// document.getElementById("navigation").addEventListener("click", function(){
//   dataLayer.push({'event': 'navClick'})
// })

var resultsArray = [];

// Calculations
    function profitCalculator() {

      resultsArray =[];
      var itemName = document.getElementById('itemNameInput').value;
      var itemQuantity = document.getElementById('quantity').value; // User input

      if(!itemQuantity){
        itemQuantity = 1;
      }

      var listingPrice = Number(document.getElementById('listingPriceInput').value); // User input
      var buyerShippingCost = Number(document.getElementById('buyerShippingCost').value); // User input
      var totalSale = listingPrice + buyerShippingCost;
      var itemCost = Number(document.getElementById('itemCostInput').value); // User input
      var finalListingFee = listingPrice * 0.1;
      var estimatedShippingCost = Number(document.getElementById('estimatedShipping').value); // User input
      var shippingFee = buyerShippingCost * 0.1;
      var estimatedShipping = Number(document.getElementById('estimatedShipping').value); // User input
      var totalEbayFees = finalListingFee + shippingFee;
      var paypalFee = (totalSale * 0.029) + 0.30; // total sale needs to be 1 quantity for this calculation in order for fee to be accurate.
      // multiply paypalFee by quantity once the value is actually calculated based on 1 quantity
      var totalCost = itemCost + totalEbayFees + paypalFee + estimatedShippingCost;
      // why not just multiply total cost by quantity?
      // then multiply total sale by quantity once paypalfee is calculated based on 1 quantity


      // Item Quantity Calculations
      totalCost = totalCost * itemQuantity;
      totalSale = totalSale * itemQuantity;
      var netProfit = totalSale - totalCost;
      var roi = (totalSale - totalCost)/ totalCost;
      var roiPercent = roi * 100;
      paypalFee = paypalFee * itemQuantity;
      totalEbayFees = totalEbayFees * itemQuantity;
      itemCost = itemCost * itemQuantity;
      listingPrice = listingPrice * itemQuantity;
      estimatedShippingCost = estimatedShippingCost * itemQuantity;

      finalListingFee = finalListingFee.toFixed(2);
      totalCost = totalCost.toFixed(2);
      estimatedShippingCost = estimatedShippingCost.toFixed(2);
      totalEbayFees = totalEbayFees.toFixed(2);
      shippingFee = shippingFee.toFixed(2);
      paypalFee = paypalFee.toFixed(2);
      netProfit = netProfit.toFixed(2);
      roiPercent = roiPercent.toFixed(1);

      console.log(`Item Name: ${itemName}`);
      console.log(`Listing Price: $${listingPrice}`);
      console.log(`Item Cost: $${itemCost}`);
      console.log(`Estimated Shipping Cost: $${estimatedShippingCost}`);
      console.log(`eBay Fee: $${totalEbayFees}`);
      console.log(`Paypal Fee: $${paypalFee}`);
      console.log(`Total Sale: $${totalSale}`);
      console.log(`Total Cost: $${totalCost}`);
      console.log(`Net Profit: $${netProfit}`);
      console.log(`ROI: ${roiPercent}%`);

      document.getElementById("ebayFee").innerHTML = `$${totalEbayFees}`;
      document.getElementById("paypalFeeCalc").innerHTML = `$${paypalFee}`;
      document.getElementById("netProfit").innerHTML = `$${netProfit}`;
      document.getElementById("roiPlacement").innerHTML = `${roiPercent}%`;

      // Add calculation values to an array
      resultsArray.push(itemName);
      resultsArray.push(`eBay Fee: $${totalEbayFees}`);
      resultsArray.push(`Paypal Fee: $${paypalFee}`);
      resultsArray.push(`Your Profit: $${netProfit}`);
      resultsArray.push(`Your ROI: ${roiPercent}%`);

      // for(var i = 0; i < resultsArray.length; i++){
      //   console.log(resultsArray[i]);
      // }

    return resultsArray;
}

//console.log(resultsArray);
var bigDaddyArray = [];

function addToBigArray( resultsArray ){

  bigDaddyArray = bigDaddyArray.concat(resultsArray);
//  console.log(bigDaddyArray)

  return bigDaddyArray;

}

var result = [];

function printData(bigDaddyArray){

  for(var i = 0; i > bigDaddyArray.length; i++){
    console.log(bigDaddyArray[i]);
  }

  var perChunk = 5;
  var result = bigDaddyArray.reduce((resultArray, item, index) =>{
    const chunkIndex = Math.floor(index/perChunk);

    if(!resultArray[chunkIndex]){
      resultArray[chunkIndex] = [] // start a new chunk
    }
    resultArray[chunkIndex].push(item);

    return resultArray
  }, [])

  console.log(result);
}


function masterSword(){
  profitCalculator();
  addToBigArray( resultsArray );
  printData( bigDaddyArray);
}



// Function that resets the calculator when the user clicks the start over button
function resetCalculator(){
  document.getElementById("itemNameInput").value = "";
  document.getElementById("itemCostInput").value = "";
  document.getElementById("listingPriceInput").value = "";
  document.getElementById("estimatedShipping").value = "";
  document.getElementById("buyerShippingCost").value = "";
  document.getElementById("ebayFee").innerHTML = "eBay Fee: ";
  document.getElementById("paypalFeeCalc").innerHTML = "Paypal Fee: ";
  document.getElementById("netProfit").innerHTML = "Your Profit: ";
  document.getElementById("roiPlacement").innerHTML = "Your ROI: ";


}
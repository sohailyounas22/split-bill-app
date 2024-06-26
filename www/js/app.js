var $ = Dom7;

var app = new Framework7({
  name: "SplitBill", // App name
  theme: "auto", // Automatic theme detection

  el: "#app", // App root element

  // App store
  store: store,
  // App routes
  routes: routes,
});
$("#submit-btn").on("click", function (e) {
  var totalAmount = $("#total-amount-input").val();
  if (totalAmount) {
    app.store.dispatch("setAmount", totalAmount);
    app.views.main.router.navigate("/bill/");
  } else {
    app.dialog.alert("Please enter the total bill amount before proceeding.");
  }
});

var $ = Dom7;

var app = new Framework7({
  name: "test", // App name
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
    app.views.main.router.navigate("/about/");
  } else {
    app.dialog.alert("Enter value to split bill");
  }
});

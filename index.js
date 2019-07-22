var button = $("button")
var cowboy = $("#yeehaw")
var city = $("#local")

button.on("click", checkThisOut)

function checkThisOut() {
  event.preventDefault()
  var coolPoints = 0;
  if (cowboy.prop("checked") == true) {
    coolPoints += 100;
  }
  if (city.prop("checked") == true) {
    coolPoints -= 50;
  }
  $("#cool").text(coolPoints)
}

document
  .getElementById("calculateButton")
  .addEventListener("click", function () {
    var width = parseFloat(document.getElementById("width").value);
    var thickness = parseFloat(document.getElementById("thickness").value);
    var length = parseFloat(document.getElementById("length").value);
    var quantity = parseFloat(document.getElementById("quantity").value);

    var widthFeet = width / 12;
    var thicknessFeet = thickness / 12;
    var lengthFeet = length / 12;

    var volumeOneUnit = widthFeet * thicknessFeet * lengthFeet;

    var totalVolume = volumeOneUnit * quantity;
    
    document.getElementById("result").innerHTML =
      "CFT: " + totalVolume.toFixed(2) + " CFT";
  });

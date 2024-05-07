const car = {
    type: "JETOUR",
    model: "500",
    color: "white"
};

car.color = "blue";
car.owner = "Stélvio";

document.getElementById("demo").innerHTML = "Car owner is" + car.owner;
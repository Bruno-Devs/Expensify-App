const getFirstname = (fullName) => fullName.split(" ")[0];

const user = {
  name: "Bruno",
  cities: ["lagos", "oyo", "jigawa"],
  printPlaceLived: function () {
    return this.cities.map((city) => this.name + "has lived in" + city);
  },
};
console.log(user.printPlaceLived());

const multiplier = {
  numbers: [4, 5, 6, 7],
  multiplyBy: 5,
  multyply() {
    return this.numbers.map((number) => this.multiplyBy * number);
  },
};
console.log(multiplier.multyply());

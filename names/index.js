const peopleList = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index");

const getPeopleInCity = function (peopleList) {
  return getFirstNames(peopleList);
};
console.log(getPeopleInCity);

module.exports = getPeopleInCity;

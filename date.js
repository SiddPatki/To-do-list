//jshint esversion:6

module.exports.getDay = getDate();

function getDate() {
  var date = new Date();
  var day = date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  return day;
}
let moment = require("moment"); // require

const formatDate = (date: string) => {
  let formatDate = moment(date).format("MMMM Do YYYY");
  console.log("formatDate", formatDate);
  return formatDate;
};

export default formatDate;

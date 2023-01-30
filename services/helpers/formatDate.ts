// This is a helper function to format the date

const formatDate = (date: string, updated: boolean) => {
  let moment = require("moment");
  let formatDate = moment(date).format("MMMM Do YYYY");

  if (updated) {
    let now = moment();
    let days = now.diff(date, "days");
    return days;
  }
  return formatDate;
};

export default formatDate;

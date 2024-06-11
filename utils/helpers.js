module.exports = {
  // Function to get the current date
  format_date: () => {
    const date = new Date();
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  },
};

(() => {
  const currentDate = new Date();
  const today = currentDate.getDate();
  const thisMonth = currentDate.getMonth() + 1;
  const fullYear = currentDate.getFullYear();

  console.log("Hello ASL!");
  console.log(
    `${thisMonth < 10 ? "0" + thisMonth : thisMonth}/${today}/${fullYear}`
  );
})();

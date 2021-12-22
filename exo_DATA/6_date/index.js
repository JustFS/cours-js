const today = new Date().toISOString().split("T")[0];

start_date.value = today;
start_date.min = today;

const tomorrowDate = () => {
  let day = new Date(today);
  day.setDate(day.getDate() + 1);
  let tomorrow = day.toISOString().split("T")[0];
  end_date.min = tomorrow;
  end_date.value = tomorrow;
};
tomorrowDate();

start_date.addEventListener("change", (e) => {
  let day = new Date(e.target.value);
  day.setDate(day.getDate() + 1);
  let tomorrow = day.toISOString().split("T")[0];

  if (end_date.value < start_date.value) {
    end_date.value = tomorrow;
  }
});

end_date.addEventListener("change", (e) => {
  let day = new Date(e.target.value);
  day.setDate(day.getDate() - 1);
  let yesterday = day.toISOString().split("T")[0];
  start_date.max = yesterday;
});

const bookingTotal = () => {
  let date1 = new Date(start_date.value);
  let date2 = new Date(end_date.value);
  let diffTime = Math.abs(date2 - date1);

  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  let nightPrice = document.getElementById("nightPrice").innerHTML;

  let total = diffDays * nightPrice;
  document.getElementById("total").innerHTML = total;
};
start_date.addEventListener("change", () => bookingTotal());
end_date.addEventListener("change", () => bookingTotal());
bookingTotal();

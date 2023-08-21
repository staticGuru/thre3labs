import Cookies from "js-cookie";

/** */
export const getFormattedDate = (date) =>
  date
    ? new Date(date).toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";

export function formatDate(dateTime) {
  const date = new Date(dateTime);

  // Define the days of the week and months arrays
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Extract date components
  const dayOfWeek = daysOfWeek[date.getDay()];
  const month = months[date.getMonth()];
  const day = String(date.getDate());
  const year = date.getFullYear();

  // Construct the formatted date string
  const formattedDate = `${dayOfWeek} ${month} ${day} ${year}`;

  return formattedDate;
}

export const isValidEmail = (email) => {
  var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
};

export const isRegistered = (email) => {
  return false;
};

export const isUserStore = () => {
  return Cookies.get();
};

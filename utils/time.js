export const formatTimeWithAmPm = (time) => {
  const [hours, minutes] = time.split(":");
  const hours12 = hours % 12 || 12; // Convert to 12-hour format
  const amPm = hours < 12 ? "AM" : "PM"; // Determine AM/PM
  return `${hours12}:${minutes} ${amPm}`; // Return formatted time
};

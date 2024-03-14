export function getDate(date, locale) {
  return new Date(date).toLocaleDateString("it-IT", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
}
export function getHour(date, offset, locale) {
  const dateObj = new Date(date);
  // const offset = offset; // offset in minuti (2 ore * 60 minuti/ora)
  const localTime = new Date(dateObj.getTime() - offset * 60 * 1000);
  return localTime.toLocaleTimeString(locale, {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function decodeHtml(html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

const hourlySec = document.querySelector('.hourly_all');

export default function removeHourly() {
  // console.log(hourlySec.childNodes.length);
  let child = hourlySec.lastElementChild;
  while (child) {
    hourlySec.removeChild(child);
    child = hourlySec.lastElementChild;
  }
}

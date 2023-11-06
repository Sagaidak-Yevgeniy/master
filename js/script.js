let i = 1;
// const radio = document.getElementsByName("r"); //masive[r1, r2 ...]

// function checkedSelectRadio() {
//   radio.forEach((element) => {
//     if (element.checked == true) {
//       if (i - 1 != element.id.split("")[1]) {
//         i = element.id.split("")[1];
//       }
//     }
//   });
// }
setInterval(() => {
  if (i === 6) {
    i = 1;
  }
  // checkedSelectRadio();
  document.getElementById(`r${i}`).checked = true;
  i++;
}, 3300);

const items = document.getElementsByTagName("items");
console.log(items);

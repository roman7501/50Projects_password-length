const passwordEl = document.querySelector("#password");
const bgEl = document.querySelector(".bg");

passwordEl.addEventListener("keydown", (e) => {
  console.log(e);
  let blurValue = 7;
  blurValue = blurValue - passwordEl.value.length;
  bgEl.style.filter = `blur(${blurValue}px)`;
});

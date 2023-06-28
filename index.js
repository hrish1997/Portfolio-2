const fir = document.getElementById("first");
const mainDiv = document.getElementById("main");
const profile = document.getElementById("c-1");
const aboutMe = document.getElementById("c-2");
const projects = document.getElementById("c-3");
const contact = document.getElementById("c-4");

const next = document.getElementById("next");
const back = document.getElementById("back");
const closeBtn = document.getElementById("close");
const closeA = document.getElementById("close-A");
const closeP = document.getElementById("close-P");
const closeC = document.getElementById("close-C");

const profileMain = document.getElementById("profile");
const mainAbt = document.getElementById("about-me");
const mainCnt = document.getElementById("contact");
const mainPrj = document.getElementById("projects");

next.addEventListener("click", () => {
  fir.classList.add("active");
});

back.addEventListener("click", () => {
  fir.classList.remove("active");
});

closeBtn.addEventListener("click", () => {
  profileMain.classList.remove("active");
  mainDiv.classList.remove("active");
});

closeA.addEventListener("click", () => {
  mainAbt.classList.remove("active");
  mainDiv.classList.remove("active");
});
closeP.addEventListener("click", () => {
  mainPrj.classList.remove("active");
  mainDiv.classList.remove("active");
});
closeC.addEventListener("click", () => {
  mainCnt.classList.remove("active");
  mainDiv.classList.remove("active");
});

profile.addEventListener("click", () => {
  mainDiv.classList.add("active");
  // profileMain.style.display = "block";
  profileMain.classList.add("active");
});

aboutMe.addEventListener("click", () => {
  mainDiv.classList.add("active");
  mainAbt.classList.add("active");
});

projects.addEventListener("click", () => {
  mainDiv.classList.add("active");
  mainPrj.classList.add("active");
});

contact.addEventListener("click", () => {
  mainDiv.classList.add("active");
  mainCnt.classList.add("active");
});

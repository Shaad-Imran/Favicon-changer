const favicon = document.getElementById("favicon");
document.getElementById("fb-button").addEventListener("click", () => {
  favicon.setAttribute("href", "fav/facebook.png");
});
document.getElementById("insta-button").addEventListener("click", () => {
  favicon.setAttribute("href", "fav/instagram.png");
});
document.getElementById("twit-button").addEventListener("click", () => {
  favicon.setAttribute("href", "fav/twitter.png");
});

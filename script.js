console.log("CUTTOVIDHAN Website Loaded");
const video = document.getElementById("portfolioVideo");

// Pause video when out of view
window.addEventListener("scroll", () => {
  const rect = video.getBoundingClientRect();

  if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    // visible → do nothing
  } else {
    video.pause();
  }
});

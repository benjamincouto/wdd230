function closeBanner() {
  const banner = document.getElementById("banner");
  banner.style.display = "none";
}

function displayBanner() {
  const today = new Date().getDay();
  if (today >= 1 && today <= 3) {
    const banner = document.getElementById("banner");
    banner.style.display = "block";
  }
}

displayBanner();

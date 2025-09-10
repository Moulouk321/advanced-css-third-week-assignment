document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".burger-menu");
  const mobileNav = document.querySelector(".mobile-nav");

  burgerMenu.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (mobileNav.classList.contains("active")) {
      if (!mobileNav.contains(e.target) && !burgerMenu.contains(e.target)) {
        mobileNav.classList.remove("active");
      }
    }
  });

  // ACCESSIBILITY CODE

  //TOGGLE VISIBILITY OF THE ACCESSIBILITY TOOL
  const AccessibilityToggle = document.getElementById("accessibility-btn");
  const accessibilityBtn = document.querySelector(".accessibility-btn");
  const accessibilityTool = document.querySelector(".accessibility");
  accessibilityBtn.addEventListener("click", () => {
    accessibilityTool.classList.toggle("v-visible");
    const isPressed =
      AccessibilityToggle.getAttribute("aria-pressed") === "true";
    AccessibilityToggle.setAttribute("aria-pressed", String(!isPressed));
  });

  //Close accessibility tool
  const closeAccessibility = document.getElementById("close-accessibility");
  closeAccessibility.addEventListener("click", () => {
    accessibilityTool.classList.remove("v-visible");
    const isPressed =
      AccessibilityToggle.getAttribute("aria-pressed") === "true";
    AccessibilityToggle.setAttribute("aria-pressed", String(!isPressed));
  });

  //TOGGLE CONTRAST
  const contrastToggle = document.getElementById("contrast-toggle");

  contrastToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("high-contrast");
    const isPressed = contrastToggle.getAttribute("aria-pressed") === "true";
    contrastToggle.setAttribute("aria-pressed", String(!isPressed));
  });

  //TOOGLE HIDE IMAGES
  const hideImagesToggle = document.getElementById("hide-images-toggle");

  hideImagesToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("hide-images");
    const isPressed = hideImagesToggle.getAttribute("aria-pressed") === "true";
    hideImagesToggle.setAttribute("aria-pressed", String(!isPressed));
  });

  //HIGH SATURATION
  const highSaturationToggle = document.getElementById(
    "high-saturation-toggle"
  );
  highSaturationToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("high-saturation");
    const isPressed =
      highSaturationToggle.getAttribute("aria-pressed") === "true";
    highSaturationToggle.setAttribute("aria-pressed", String(!isPressed));
  });

  //HIGHLIGHT LINKS
  const highlightLinksToggle = document.getElementById(
    "highlight-links-toggle"
  );
  highlightLinksToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("highlight-links");
    const isPressed =
      highlightLinksToggle.getAttribute("aria-pressed") === "true";
    highlightLinksToggle.setAttribute("aria-pressed", String(!isPressed));
  });

  //HIGHLIGHT TITLES
  const highlightTitlesToggle = document.getElementById(
    "highlight-titles-toggle"
  );
  highlightTitlesToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("highlight-titles");
    const isPressed =
      highlightTitlesToggle.getAttribute("aria-pressed") === "true";
    highlightTitlesToggle.setAttribute("aria-pressed", String(!isPressed));
  });

  //ALIGN CENTER TOGGLE
  const alignCenterToggle = document.getElementById("align-center-toggle");
  alignCenterToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("align-center");
    const isPressed = alignCenterToggle.getAttribute("aria-pressed") === "true";
    alignCenterToggle.setAttribute("aria-pressed", String(!isPressed));
  });

  //DARK MODE TOGGLE
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isPressed = darkModeToggle.getAttribute("aria-pressed") === "true";
    darkModeToggle.setAttribute("aria-pressed", String(!isPressed));
  });
});

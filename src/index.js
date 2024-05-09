const MenuBtn = document.getElementById("menu-btn");
const Menu = document.getElementById("menu");
MenuBtn.addEventListener("click", () => {
  console.log("Hello WOlrl");
  document.getElementById("menu").classList.toggle("translate-x-full");
});

// JavaScript

const lazyImages = document.querySelectorAll('img[data-high]');

const loadImg = function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    // Replace src with data-src
    entry.target.src = entry.target.dataset.high;

    // Remove blur effect when image is loaded
    entry.target.addEventListener("load", function () {
      entry.target.classList.remove("filterBlur");
    });

    // Stop observing this element
    observer.unobserve(entry.target);
  });
};

const observer = new IntersectionObserver(loadImg, {
  root: null, // Use the viewport as the root
  rootMargin: '0px', // No margin
  threshold: 0.5 // Trigger when half of the element is in view
});

lazyImages.forEach(image => {
  observer.observe(image);
});

document.querySelectorAll("[data-copy]").forEach(function(link) {
  link.addEventListener("click", function(event) {
    // Prevent the default link behavior

    // Get the text to copy from the data-copy attribute
    var textToCopy = this.getAttribute("data-copy");

    // Create a temporary textarea element to copy the text to the clipboard
    var tempInput = document.createElement("textarea");
    tempInput.style = "position: absolute; left: -1000px; top: -1000px";
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);

    // Select and copy the text
    tempInput.select();
    document.execCommand("copy");

    // Remove the temporary textarea
    document.body.removeChild(tempInput);

    // Optionally provide some feedback to the user
    alert("Text copied: " + textToCopy);
  });
});
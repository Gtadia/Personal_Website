window.addEventListener("DOMContentLoaded", setup);

function setup() {
  const options = {
    rootMargin: '0px 0px -250px 0px'
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
  }, options);
  
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));
}
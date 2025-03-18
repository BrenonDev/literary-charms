function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const elementHeight = rect.height;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
    const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
    
    return visibleHeight >= elementHeight / 2;
  }
  
  function checkScroll() {
    const elements = document.querySelectorAll('.box');
  
    elements.forEach(element => {
      if (isElementInViewport(element)) {
        element.classList.add('move');
      } else {
        element.classList.remove('move');
      }
    });
  }
  
  window.addEventListener('scroll', checkScroll);
  
  checkScroll();
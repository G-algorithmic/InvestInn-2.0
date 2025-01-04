document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll('.faq-question');
    
    questions.forEach(button => {
      button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
  
        button.classList.toggle('active');
  
        if (button.classList.contains('active')) {
          answer.style.display = 'block';
        } else {
          answer.style.display = 'none';
        }
      });
    });
  });
  // Smooth Scrolling Functionality with Different Animations
  document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.content, .heading-section, .loan-options, .about-section, .how-section, .faq-section, .contact-section');
    const nav = document.querySelector('nav');
    let lastScrollY = window.scrollY;
  
    const observerOptions = {
      threshold: 0.1
    };
  
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    sections.forEach(section => {
      observer.observe(section);
    });
  
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > lastScrollY) {
        nav.classList.add('show');
      } else {
        nav.classList.remove('show');
      }
      lastScrollY = window.scrollY;
    });
  });
  
  

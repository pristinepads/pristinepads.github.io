/**
* Template Name: Impact
* Template URL: https://bootstrapmade.com/impact-bootstrap-business-website-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".scroll-fade-up").forEach((el) => {
    observer.observe(el);
  });
});

function toggleMenu() {
  const nav = document.getElementById("navbar");
  nav.classList.toggle("active");
}

let currentStep = 1;
const totalSteps = 7;

// Initialize progress bar width
document.querySelector('.timeline-progress').style.width = ((1 / (totalSteps - 1)) * 100) + '%';

function showStep(stepNumber) {
  // Hide all steps
  document.querySelectorAll('.step-content').forEach(step => {
    step.classList.remove('active');
  });

  // Deactivate all step circles
  document.querySelectorAll('.timeline-step').forEach(step => {
    step.classList.remove('active');
  });

  // Show and activate the selected step
  document.getElementById('step' + stepNumber).classList.add('active');
  document.querySelectorAll('.timeline-step')[stepNumber - 1].classList.add('active');

  // Update progress bar
  const progressWidth = ((stepNumber - 1) / (totalSteps - 1)) * 100 + '%';
  document.querySelector('.timeline-progress').style.width = progressWidth;

  // Update current step
  currentStep = stepNumber;
}

function nextStep() {
  if (currentStep < totalSteps) {
    showStep(currentStep + 1);
  }
}

function prevStep() {
  if (currentStep > 1) {
    showStep(currentStep - 1);
  }
}

function showStep(step) {
  currentStep = step;
  document.querySelectorAll('.step-content').forEach((el, index) => {
    el.classList.toggle('active', index === step - 1);
  });

  document.querySelectorAll('.timeline-step').forEach((el, index) => {
    el.classList.toggle('active', index === step - 1);
  });

  document.getElementById('current-step').textContent = step;
  updateProgressBar(step);
}

function prevStep() {
  if (currentStep > 1) showStep(currentStep - 1);
}

function nextStep() {
  if (currentStep < totalSteps) showStep(currentStep + 1);
}

function updateProgressBar(step) {
  const progress = ((step - 1) / (totalSteps - 1)) * 100;
  document.querySelector('.timeline-progress').style.width = progress + '%';
}

// Initialize on load
document.addEventListener("DOMContentLoaded", () => showStep(currentStep));

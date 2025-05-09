// Typing effect: Roles
new Typed(".typed-role", {
  strings: ["Full Stack Developer", "Data Analyst", "Web Developer"],
  typeSpeed: 60,
  backSpeed: 30,
  backDelay: 2000,
  loop: true
});

// Typing effect: Taglines
new Typed(".typed-tagline", {
  strings: [
    "Building data-driven solutions with curiosity and creativity.",
    "Turning complex data into impactful insights.",
    "Designing scalable web applications with clean code.",
    "Bridging analytics and engineering for real-world solutions."
  ],
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 2500,
  startDelay: 500,
  loop: true,
  showCursor: true
});

// EmailJS Initialization (IMPORTANT: Use public_ prefix)
(function () {
  emailjs.init("public_6hGiHxzhDZIcRBlF3"); // Replace with your actual public key
})();

// Contact Form Submission Handler
document.getElementById('contact-form')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const form = this;
  const submitBtn = form.querySelector("button");
  const originalText = submitBtn.textContent;

  submitBtn.textContent = "Sending...";
  submitBtn.disabled = true;

  emailjs.sendForm('service_ypp92lq', 'template_f5l8tns', form)
    .then(() => {
      submitBtn.textContent = "Sent!";
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 2000);
      form.reset();
      alert('✅ Message sent successfully!');
    }, (error) => {
      console.error("EmailJS error:", error);
      alert('❌ Error sending message. Please try again.');
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    });
});

// Mobile Navigation Toggle
function toggleMenu() {
  document.querySelector('nav').classList.toggle('active');
}

// Project Modal
function openModal(title, type, features, tech, github, live, imageSrc) {
  document.getElementById('modal-title').innerText = title;
  document.getElementById('modal-type').innerText = type;

  const featuresList = document.getElementById('modal-features');
  featuresList.innerHTML = '';
  features.forEach(f => {
    const li = document.createElement('li');
    li.textContent = f;
    featuresList.appendChild(li);
  });

  const techContainer = document.getElementById('modal-tech');
  techContainer.textContent = tech.join(', '); // ✅ This applies commas between items

  document.getElementById('modal-github').href = github;
  document.getElementById('modal-live').href = live;
  document.getElementById('modal-image').src = imageSrc;

  document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
} 

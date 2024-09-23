export function createContact() {
    const section = document.createElement('section');
    section.id = 'contact';
    section.innerHTML = `
      <p class="section__text__p1">Get in Touch</p>
      <h1 class="title">Contact Me</h1>
      <div class="contact-info-upper-container">
        <div class="contact-info-container">
          <img src="./src/assets/email.png" alt="Email icon">
          <p><a href="mailto:examplemail@gmail.com">Example@gmail.com</a></p>
        </div>
        <div class="contact-info-container">
          <img src="./src/assets/linkedin.png" alt="LinkedIn icon">
          <p><a href="https://www.linkedin.com">LinkedIn</a></p>
        </div>
      </div>
    `;
    return section;
  }
  
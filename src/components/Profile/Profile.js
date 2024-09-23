export function createProfile() {
    const section = document.createElement('section');
    section.id = 'profile';
    section.innerHTML = `
      <div class="section__pic-container">
        <img src="./src/assets/profile-pic.jpg" alt="Profile Picture">
      </div>
      <div class="section__text">
        <p class="section__text__p1">Hello, I'm</p>
        <h1 class="title">Emily Mokoena</h1>
        <p class="section__text__p2">Junior Full-Stack Developer</p>
        <div class="btn-container">
          <button class="btn btn-color-2">Download CV</button>
          <button class="btn btn-color-1">Contact Info</button>
        </div>
        <div id="socials-container">
          <img src="./src/assets/linkedin.png" alt="LinkedIn" class="icon">
          <img src="./src/assets/github.png" alt="GitHub" class="icon">
        </div>
      </div>
    `;
    return section;
  }
  
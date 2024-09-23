export function createAbout() {
    const section = document.createElement('section');
    section.id = 'about';
    section.innerHTML = `
      <p class="section__text__p1">Get To Know More</p>
      <h1 class="title">About Me</h1>
      <div class="section-container">
        <div class="about-details-container">
          <div class="about-containers">
            <div class="details-container">
              <img src="./src/assets/experience.png" alt="Experience icon">
              <h3>Experience</h3>
              <p>6+ Months<br>Computer Programming Facilitator</p>
            </div>
            <div class="details-container">
              <img src="./src/assets/education.png" alt="Education icon">
              <h3>Education</h3>
              <p>Information Technology<br>System Development</p>
            </div>
          </div>
          <div class="text-container">
            <p>Driven and eager Software Developer with a background in IT...</p>
          </div>
        </div>
      </div>
    `;
    return section;
  }
  
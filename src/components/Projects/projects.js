export function createProjects() {
    const section = document.createElement('section');
    section.id = 'projects';
    section.innerHTML = `
      <p class="section__text__p1">Browse My Recent</p>
      <h1 class="title">Projects</h1>
      <div class="experience-details-container">
        <div class="about-containers">
          <div class="details-container color-container">
            <div class="article-container">
              <img src="./src/assets/project-1.png" alt="Project 1">
            </div>
            <h2 class="project-title">Project One</h2>
            <div class="btn-container">
              <button class="btn btn-color-2">GitHub</button>
              <button class="btn btn-color-2">Live Demo</button>
            </div>
          </div>
          <div class="details-container color-container">
            <div class="article-container">
              <img src="./src/assets/project-2.png" alt="Project 2">
            </div>
            <h2 class="project-title">Project Two</h2>
            <div class="btn-container">
              <button class="btn btn-color-2">GitHub</button>
              <button class="btn btn-color-2">Live Demo</button>
            </div>
          </div>
        </div>
      </div>
    `;
    return section;
  }
  
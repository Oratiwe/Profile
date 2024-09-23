export function createNav() {
    const nav = document.createElement('nav');
    nav.id = 'desktop-nav';
    nav.innerHTML = `
      <div class="logo">
        <img src="./src/assets/logo.png" alt="Logo">
      </div>
      <div>
        <ul class="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    `;
    return nav;
  }
  
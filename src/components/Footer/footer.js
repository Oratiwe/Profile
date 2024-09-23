export function createFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
      <nav>
        <ul class="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <p>Copyright &#169; 2024 Emily Mokoena. All Rights Reserved.</p>
    `;
    return footer;
  }
  
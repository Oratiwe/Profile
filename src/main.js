import { createNav } from './components/nav.js';
import { createProfile } from './components/profile.js';
import { createAbout } from './components/about.js';
import { createProjects } from './components/projects.js';
import { createContact } from './components/contact.js';
import { createFooter } from './components/footer.js';

function renderPage() {
  const root = document.getElementById('root');
  root.appendChild(createNav());
  root.appendChild(createProfile());
  root.appendChild(createAbout());
  root.appendChild(createProjects());
  root.appendChild(createContact());
  root.appendChild(createFooter());
}

renderPage();

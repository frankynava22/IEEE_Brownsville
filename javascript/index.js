function generateNavbar() {
    return `
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="nav-link" href="../index.html"><span class="nav-links"> IEEE Brownsville</span></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                  <a class="nav-link" href="../pages/team.html"><span class="nav-links">Officers</span></a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="../pages/projects.html"><span class="nav-links">Projects</span></a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="../pages/gallery.html"><span class="nav-links">Gallery</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../pages/calender.html"><span class="nav-links">Calendar</span></a>
              <li class="nav-item">
                  <a class="nav-link" href="../pages/resources.html"><span class="nav-links">Resources</span></a>
              </li>
          </ul>
      </div>
      </nav>
    `;
  }
  
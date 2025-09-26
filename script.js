document.addEventListener('DOMContentLoaded', () => {
  const sidebarLinks = document.querySelectorAll('.sidebar nav a');
  const content = document.getElementById('project-content');

  // ---------- PROJECT DATA ----------
  const projects = {
    cv: {
      title: 'Curriculum Vitae',
      text: `
        <ul class="cv-sections">
          <p>Education</p>
          <li>BFA in Communication Design, <br><a href="https://www.newschool.edu/parsons/" target="_blank" rel="noopener noreferrer">Parsons School of Design</a>, 2026</li><br>
          <p><a href="#" id="work-experience-link">Work Experience</a></p>
          <li><a href="https://www.fusetronsound.com/" target="_blank" rel="noopener noreferrer">Fusetron Sound</a><br>Archival & Digital Media Intern<br> July 2025 – Present</li>
          <li><a href="https://www.bettybeaumont.com/" target="_blank" rel="noopener noreferrer">Betty Beaumont Studio</a><br> Archiving & Creative Photoshop Intern<br> July 2025 – Present</li>
          <li><a href="https://www.yveyang.com/" target="_blank" rel="noopener noreferrer">YveYANG Gallery</a><br> Gallery Assistant & Graphic Designer<br> March 2024 – March 2025</li>
          <li><a href="https://dgalleriejakarta.com/" target="_blank" rel="noopener noreferrer">D Gallerie</a><br> Gallery Intern<br> July – August 2024</li>
          <li><a href="https://musica.id/" target="_blank" rel="noopener noreferrer">Musica Studios</a><br> Graphic Design Intern<br> June – August 2023</li><br>
        </ul>
      `,
      images: [
        { type: "image", src: "me2.png", caption: "Me (Em B) <br> Currently based in New York." }
      ]
    },
    workExperience: {
      images: [
        { src: ""},
      ]
    },
   project1: {
      title: '09.11.23',
      medium: 'French bound copy paper',
      dimensions: '4.25 x 11 in, 96 pages',
      year: '2025',
      text: 'September 11, 2023, as archived by technology, documented by the minute. Exploring technology as memory, memory as interpretive, and the book as a simulacrum of the day itself. ',
      images: [
        {src: '091123/09.11.23_spread_layout.jpg', caption: 'Select spreads'},
        {src: '091123/SPREADS/09.11.23-04.jpg',layout: "double"},
        {src: '091123/SPREADS/09.11.23-12.jpg',layout: "double"},
        {src: '091123/spreads.key.png', caption: 'Spread + key'}
      ]
    },
    project2: {
      title: 'Digital Dust/Physical Scraps (2/2)',
      medium: 'Printed on copy paper/scrap paper collected over 3 years, bound with Elmers Glue-All and Gluestick',
      dimensions: '8.5 x 11/5.5 x 8.5 in',
      year: '2024',
      text: 'Unintentionally taken photos living in the camera roll. Digital and physical clutter, storage, the memory graveyard, excess of content, photography as authenticity, collected dust, growing mold.',
      images: [
        {src: 'DIGITAL_DUST.PHYSICAL_SCRAPS/DIGITAL_DUST/DIGITAL_DUST.gif', caption: 'Digital Dust'},
        {src: 'DIGITAL_DUST.PHYSICAL_SCRAPS/Screen Shot 2025-08-29 at 2.16.58 PM.png'},
        {src: 'DIGITAL_DUST.PHYSICAL_SCRAPS/Screen Shot 2025-08-29 at 2.17.13 PM.png'},
        {src: 'DIGITAL_DUST.PHYSICAL_SCRAPS/Screen Shot 2025-08-29 at 2.11.52 PM.png'},
        {src: 'DIGITAL_DUST.PHYSICAL_SCRAPS/Screen Shot 2025-08-29 at 2.12.01 PM.png'},
        {src: 'DIGITAL_DUST.PHYSICAL_SCRAPS/Screen Shot 2025-08-29 at 2.17.43 PM.png'},
        {src: 'DIGITAL_DUST.PHYSICAL_SCRAPS/PHYSICAL_SCRAPS/PHYSICAL_SCRAPS.gif', caption: 'Physical Scraps'},
      ]
    },
    project3: {
      title: 'Art is Cheap!',
      medium: 'Risgraph printed on copy paper and tiled',
      dimensions: '25.5 x 33 in',
      year: '2023',
      text: 'The Art is Cheap manifesto by the Bread and Puppet Theater. Designed with accesibility and mass production in mind.',
      images: [
        {src: 'MANIFESTO/manifesto_installed.png'}
      ]
    },
    project4: {
      title: 'GGXGG',
      medium: 'Inkjet & <a href="https://emilybudiman.github.io/LetterBank/" target="_blank" rel="noopener noreferrer">Website</a>',
      dimensions: '5 x 7 in',
      year: '2024',
      text: 'A letterbank sourced from the text on shirts from the thrift store.',
      images: [
        {src: 'GG_X_GG/all.png'},
        {src: 'GG_X_GG/e.png'},
        {src: 'GG_X_GG/all_spreads.png'},
        {src: 'GG_X_GG/Spreads/scan0039 2 (dragged) 3.png'},
        {src: 'GG_X_GG/Spreads/scan0039 2 (dragged) 5.png',layout: "double"},
        {src: 'GG_X_GG/Spreads/scan0039 2 (dragged) 6.png',layout: "double"},
        {src: 'GG_X_GG/Spreads/scan0039 2 (dragged) 7.png'},
        {src: 'GG_X_GG/Spreads/scan0039 2 (dragged) 23.png',layout: "double"},
        {src: 'GG_X_GG/Spreads/scan0039 2 (dragged) 24.png',layout: "double"},
        {src: 'GG_X_GG/Spreads/scan0039 2 (dragged) 27.png',layout: "double"},
        {src: 'GG_X_GG/Spreads/scan0039 2 (dragged) 33.png',layout: "double"},
        {src: 'GG_X_GG/Spreads/scan0039 2 (dragged) 34.png'},
        {src: 'GG_X_GG/Spreads/scan0039 2 (dragged) 36.png',layout: "double"},
        {src: 'GG_X_GG/Spreads/scan0039 2 (dragged) 38.png',layout: "double"},
      ]
    },
    project5: {
      title: 'untitled (Collage)',
      medium: 'Collage',
      dimensions: '',
      year: '2022',
      text: '',
      images: [
        {src: 'MISC_2D/time_collage.jpg'}
      ]
    },
    project6: {
      title: 'untitled (Flipbook)',
      medium: 'Japanese bound, charcoal on tracing paper',
      dimensions: '110 pages',
      year: '2023',
      text: 'Scanned over lightbox',
      images: [
        {src: 'FLIPBOOK/bridge3_comp.png'},
        {src: 'FLIPBOOK/bridge3_mov_bg.gif'}
      ]
    },
    project7: {
      title: 'I Dont Know How to Drive and I Never Will',
      medium: 'Laser printed',
      dimensions: '8.5 x 11 in, 20 pages',
      year: '2023',
      text: 'A zine documenting photos, text, and drawings accumulated over the course of the Spring 23 semester.',
      images: [
        {src: 'IDKHTD/idkhtd.gif'},
        {src: 'IDKHTD/white_bg/idkhtd2.jpg'},
        {src: 'IDKHTD/white_bg/idkhtd3.jpg',layout: "double"},
        {src: 'IDKHTD/white_bg/idkhtd6.jpg',layout: "double"},
        {src: 'IDKHTD/white_bg/idkhtd9.jpg'},
        {src: 'IDKHTD/white_bg/idkhtd11.jpg'}
      ]
    },
    project8: {
      title: 'Bauhaus',
      medium: 'Laser printed',
      dimensions: '5.5 x 8.5 in, 56 pages',
      year: '2023',
      text: 'Using text from wikipedia, inspired by their show flyers and other promotional material.',
      images: [
        {src: 'BAUHAUS/spreads.comp.jpg'},
        {src: 'BAUHAUS/SCANS/3.jpg'},
        {src: 'BAUHAUS/SCANS/4.jpg'},
        {src: 'BAUHAUS/SCANS/5.jpg'},
      ]
    },
  };

  function renderImages(images) {
    let html = '';
    for (let i = 0; i < images.length; i++) {
      const media = images[i];
      if (media.layout === "double" && images[i + 1] && images[i + 1].layout === "double") {
        html += `
          <div class="image-row">
            <figure>
              <img src="${media.src}" alt="${media.caption || ''}">
              ${media.caption ? `<figcaption>${media.caption}</figcaption>` : ''}
            </figure>
            <figure>
              <img src="${images[i + 1].src}" alt="${images[i + 1].caption || ''}">
              ${images[i + 1].caption ? `<figcaption>${images[i + 1].caption}</figcaption>` : ''}
            </figure>
          </div>
        `;
        i++; // skip the next one since it's paired
      } else {
        html += `
          <figure>
            <img src="${media.src}" alt="${media.caption || ''}">
            ${media.caption ? `<figcaption>${media.caption}</figcaption>` : ''}
          </figure>
        `;
      }
    }
    return html;
  }

  function renderProject(key) {
    const project = projects[key];
    if (!project) return;

    content.innerHTML = `
      <div class="content-images ${key === 'cv' ? 'cv-image' : ''}">
        ${project.images ? renderImages(project.images) : ''}
      </div>
      <div class="content-text ${key === 'cv' ? 'cv-text' : ''}">
        ${project.title ? `<h2 class="${key === 'cv' ? 'cv-title' : ''}">${project.title}</h2><br>` : ''}
        ${project.medium ? `<p>${project.medium}</p>` : ''}
        ${project.dimensions ? `<p>${project.dimensions}</p>` : ''}
        ${project.year ? `<p>${project.year}</p>` : ''}<br>
        ${project.text ? `<p>${project.text}</p>` : ''}
      </div>
    `;

    initImageNav();
    initLightbox();
    initCVLinks(); // must run AFTER rendering CV content
  }

  function updateImagesOnly(images) {
    const container = document.querySelector('.content-images');
    if (!container) return;
    container.innerHTML = renderImages(images);
    initImageNav();
    initLightbox();
  }

  function initCVLinks() {
    const workLink = document.getElementById('work-experience-link');
    if (workLink) {
      workLink.addEventListener('click', e => {
        e.preventDefault();
        if (projects.workExperience) {
          updateImagesOnly(projects.workExperience.images);
        }
      });
    }
  }

  // ---------- IMAGE NAV + LIGHTBOX ----------
  let figures = [];
  let currentIndex = 0;
  let lightbox, lightboxImg;

  function initImageNav() {
    figures = Array.from(document.querySelectorAll('.content-images figure'));
    currentIndex = 0;
  }

  function initLightbox() {
    lightbox = document.getElementById('lightbox');
    if (!lightbox) {
      lightbox = document.createElement('div');
      lightbox.id = 'lightbox';
      lightbox.style.cssText = `
        display:none; position:fixed; inset:0; background:rgba(0,0,0,0.9);
        justify-content:center; align-items:center; z-index:9999;
      `;
      lightbox.innerHTML = `<img style="max-width:90%; max-height:90%; cursor:zoom-out" alt="">`;
      document.body.appendChild(lightbox);
    }
    lightboxImg = lightbox.querySelector('img');

    figures.forEach((fig, i) => {
      const img = fig.querySelector('img');
      if (!img) return;
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', () => {
        currentIndex = i;
        lightboxImg.src = img.src;
        lightbox.style.display = 'flex';
      });
    });

    lightbox.addEventListener('click', e => {
      if (e.target === lightbox || e.target === lightboxImg) {
        lightbox.style.display = 'none';
      }
    });
  }

  document.addEventListener('keydown', e => {
    if (!figures.length) return;
    if (e.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % figures.length;
      figures[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      if (lightbox && lightbox.style.display === 'flex') {
        lightboxImg.src = figures[currentIndex].querySelector('img').src;
      }
    } else if (e.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + figures.length) % figures.length;
      figures[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      if (lightbox && lightbox.style.display === 'flex') {
        lightboxImg.src = figures[currentIndex].querySelector('img').src;
      }
    }
  });

  sidebarLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      sidebarLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      renderProject(link.dataset.project);
    });
  });

  // Initial render
  renderProject('cv');
});
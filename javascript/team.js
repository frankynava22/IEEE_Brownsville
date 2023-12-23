document.addEventListener('DOMContentLoaded', function() {
  const teamMembers = [
    { name: 'Jorge Marquez', role: 'President', img: '../images/OfficerPhotoJorge.jpg' },
    { name: 'Tristan Hernandez', role: 'Vice President', img: '../images/OfficerPhotoTristan.jpg' },
    { name: 'Gonzalo Cervera', role: 'Secretary', img: '../images/OfficerPhotoGonzalo.jpg' },
    { name: 'Daniela Maldonado', role: 'Networking Director', img: '../images/image_four.jpg' },
    { name: 'Carlos Castillo', role: 'Treasurer', img: '../images/OfficerPhotoCarlos.jpg' },
    { name: 'Erick Balboa', role: 'Recruiter', img: '../images/OfficerPhotoErick.jpg' },
    { name: 'Franky Nava', role: 'Web Master', img: '../images/WebMasterFranky.jpeg' },
    // Add more team members as needed
  ];

  const teamContainer = document.querySelector('.container .row');

  for (let member of teamMembers) {
    let card = document.createElement('div');
    card.className = 'col-sm-12 col-md-6 col-lg-4';
    card.innerHTML = `
      <div class="card">
      <a href="officer.html?name=${encodeURIComponent(member.name)}">
        <img class="card-img-top" src="${member.img}" alt="${member.name}">
        <div class="card-body">
          <h5 class="card-title">${member.name}</h5>
          <p class="card-text">${member.role}</p>
        </div>
      </div>
    `;
    teamContainer.appendChild(card);
  }
});

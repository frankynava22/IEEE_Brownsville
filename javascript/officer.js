document.addEventListener('DOMContentLoaded', function() {
    // Get the officer's name from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const officerName = urlParams.get('name');
  
    // You can use officerName to find and display the officer's details
    // For example, you can search your teamMembers array for the officer with the matching name
  
    // Example code to find and display officer details
    const teamMembers = [
        { 
          name: 'Jorge Marquez', 
          role: 'President', 
          img: '../images/OfficerPhotoJorge.jpg',
          classification: 'Junior',
          major: 'Computer Engineering',
          linkedin: 'https://www.linkedin.com/in/jorge-marquez-jm2025/',
          missionStatement: 'I am dedicated to leading the organization towards success and fostering a spirit of collaboration among members.'
        },
        
        { 
            name: 'Tristan Hernandez', 
            role: 'Vice President', 
            img: '../images/OfficerPhotoTristan.jpg',
            classification: 'Senior',
            major: 'Computer Engineering',
            linkedin: 'https://www.linkedin.com/in/tristan-hernandez22/',
            missionStatement: 'My goal as Vice President is to work tirelessly for all IEEE BSB members to assist in their professional development, technical improvement and provide them a safe space to expand upon and pursue their goals.'
          },

          { 
            name: 'Gonzalo Cervera', 
            role: 'Secretary', 
            img: '../images/OfficerPhotoGonzalo.jpg',
            classification: 'Junior',
            major: 'Electrical Engineering',
            linkedin: 'https://www.linkedin.com/in/gonzalo-cervera-aguinaga/',
            missionStatement: 'I am dedicated to leading the organization towards success and fostering a spirit of collaboration among members.'
          },

          { 
            name: 'Daniela Maldonado', 
            role: 'Networking Director', 
            img: '../images/image_four.jpg',
            classification: 'Junior',
            major: 'Electrical Engineering',
            linkedin: 'https://www.linkedin.com/in/gonzalo-cervera-aguinaga/',
            missionStatement: 'I am dedicated to leading the organization towards success and fostering a spirit of collaboration among members.'
          },

          { 
            name: 'Carlos Castillo', 
            role: 'Treasurer', 
            img: '../images/OfficerPhotoCarlos.jpg',
            classification: 'Junior',
            major: 'Electrical Engineering',
            linkedin: 'http://www.linkedin.com/in/carlos-castillo2',
            missionStatement: 'I am dedicated to leading the organization towards success and fostering a spirit of collaboration among members.'
          },

          { 
            name: 'Franky Nava', 
            role: 'Web Master', 
            img: '../images/WebMasterFranky.jpeg',
            classification: 'Senior',
            major: 'Computer Science',
            linkedin: 'https://www.linkedin.com/in/frankynava',
            missionStatement: 'I am dedicated to leading the organization towards success and fostering a spirit of collaboration among members.'
          },
      ];
      
  
    const officer = teamMembers.find(member => member.name === officerName);
  
    if (officer) {
      // Display officer details on the page
      const officerDetailsContainer = document.querySelector('.officer-details');
      officerDetailsContainer.innerHTML = `
        <div class="officer-profile">
          <img src="${officer.img}" alt="${officer.name}">
          <h1>${officer.name}</h1>
          <p>Classification: ${officer.classification}</p>
          <p>College Major: ${officer.major}</p>
          <a href="${officer.linkedin}" target="_blank">LinkedIn Profile</a>
        </div>
        <div class="mission-statement">
          <h2>Mission Statement</h2>
          <p>${officer.missionStatement}</p>
        </div>
      `;
    } else {
      // Officer not found, display an error or redirect to a 404 page
    }
  });
  
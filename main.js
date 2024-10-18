import './style.css';

// Mock data for mentors
const mentors = [
  {
    id: 1,
    name: "Dr. Anita Sharma",
    expertise: "Computer Science",
    experience: "15 years",
    specialties: ["Artificial Intelligence", "Machine Learning", "Data Structures"],
    image: "https://source.unsplash.com/random/300x300/?professor,woman"
  },
  {
    id: 2,
    name: "Prof. Rajesh Kumar",
    expertise: "Mechanical Engineering",
    experience: "20 years",
    specialties: ["Thermodynamics", "Fluid Mechanics", "CAD/CAM"],
    image: "https://source.unsplash.com/random/300x300/?professor,man"
  },
  {
    id: 3,
    name: "Dr. Priya Gupta",
    expertise: "Electrical Engineering",
    experience: "12 years",
    specialties: ["Power Systems", "Control Systems", "Renewable Energy"],
    image: "https://source.unsplash.com/random/300x300/?engineer,woman"
  }
];

// Function to create mentor cards
function createMentorCards() {
  const mentorGrid = document.getElementById('mentor-grid');
  mentors.forEach(mentor => {
    const mentorCard = document.createElement('div');
    mentorCard.className = 'mentor-card';
    mentorCard.innerHTML = `
      <img src="${mentor.image}" alt="${mentor.name}" class="mentor-img">
      <div class="mentor-info">
        <h3>${mentor.name}</h3>
        <p class="expertise">${mentor.expertise}</p>
        <p class="experience">${mentor.experience} of experience</p>
        <p class="specialties">Specialties: ${mentor.specialties.join(', ')}</p>
      </div>
    `;
    mentorGrid.appendChild(mentorCard);
  });
}

// Function to populate mentor select options
function populateMentorSelect() {
  const mentorSelect = document.getElementById('mentor-select');
  mentors.forEach(mentor => {
    const option = document.createElement('option');
    option.value = mentor.id;
    option.textContent = mentor.name;
    mentorSelect.appendChild(option);
  });
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();
  const formData = {
    studentName: document.getElementById('student-name').value,
    studentEmail: document.getElementById('student-email').value,
    mentorId: document.getElementById('mentor-select').value,
    sessionDate: document.getElementById('session-date').value,
    sessionTime: document.getElementById('session-time').value
  };

  // Here you would typically send this data to a server
  console.log('Booking submitted:', formData);
  alert('Your session has been booked successfully!');

  // In a real application, you would call the sendNotification function here
  // sendNotification(formData);

  // Reset the form
  event.target.reset();
}

// Initialize the application
function init() {
  createMentorCards();
  populateMentorSelect();
  document.getElementById('booking-form').addEventListener('submit', handleFormSubmit);
}

// Run the initialization when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);

// Note: The sendNotification function is commented out as it requires backend implementation
// async function sendNotification(bookingData) {
//   // Implementation would go here
// }
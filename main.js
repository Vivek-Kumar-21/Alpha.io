// Importing styles (if using module bundlers)
import './style.css';

// Mock data for mentors
const mentors = [
    {
        id: 1,
        name: "Dr. Anita Sharma",
        expertise: "Computer Science",
        experience: "15 years",
        specialties: ["Artificial Intelligence", "Machine Learning", "Data Structures"],
        availableSlots: ["2024-10-18", "2024-10-19"],
        image: "https://source.unsplash.com/random/300x300/?professor,woman"
    },
    {
        id: 2,
        name: "Prof. Rajesh Kumar",
        expertise: "Mechanical Engineering",
        experience: "20 years",
        specialties: ["Thermodynamics", "Fluid Mechanics", "CAD/CAM"],
        availableSlots: ["2024-10-19", "2024-10-20"],
        image: "https://source.unsplash.com/random/300x300/?professor,man"
    },
    {
        id: 3,
        name: "Dr. Priya Gupta",
        expertise: "Electrical Engineering",
        experience: "12 years",
        specialties: ["Power Systems", "Control Systems", "Renewable Energy"],
        availableSlots: ["2024-10-18", "2024-10-20"],
        image: "https://source.unsplash.com/random/300x300/?engineer,woman"
    }
];

// Testimonials data
const testimonials = [
    "This platform has transformed my academic journey! - Alice",
    "The mentorship I received was invaluable for my career! - Bob",
    "I learned so much in just one session! - Charlie",
    "Fantastic experience with the mentors! - Diana"
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

    // Reset the form
    event.target.reset();
}

// Display mentors and populate dropdown
function displayMentors() {
    const mentorList = document.getElementById("mentor-list");
    const mentorSelect = document.getElementById("mentor-select");

    mentorList.innerHTML = ""; // Clear existing mentors
    mentorSelect.innerHTML = '<option value="">Select a Mentor</option>'; // Clear existing dropdown

    mentors.forEach((mentor) => {
        // Mentor Profile Card
        const mentorCard = document.createElement("div");
        mentorCard.classList.add("mentor-profile");
        mentorCard.innerHTML = `
            <h3>${mentor.name}</h3>
            <p>${mentor.expertise}</p>
            <img src="${mentor.image}" alt="${mentor.name}" class="mentor-img">
        `;
        mentorList.appendChild(mentorCard);

        // Populate mentor select dropdown
        const option = document.createElement("option");
        option.value = mentor.id;
        option.textContent = mentor.name;
        mentorSelect.appendChild(option);
    });
}

// Populate time slots based on selected mentor
function populateTimeSlots() {
    const mentorSelect = document.getElementById("mentor-select");
    const timeSlotSelect = document.getElementById("time-slot");
    const selectedMentorId = mentorSelect.value;

    // Clear existing options
    timeSlotSelect.innerHTML = '<option value="">Select a Time Slot</option>';
    document.getElementById("calendar").innerHTML = ''; // Clear the calendar

    if (selectedMentorId) {
        const selectedMentor = mentors.find(m => m.id == selectedMentorId);
        const slots = selectedMentor.availableSlots;
        displayCalendar(slots);
    }
}

// Display available slots in a calendar format
function displayCalendar(availableDates) {
    const calendarDiv = document.getElementById("calendar");

    // Create a simple calendar for the next 7 days
    const today = new Date();
    for (let i = 0; i < 7; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        const dateString = date.toISOString().split('T')[0]; // Format: YYYY-MM-DD

        const dayDiv = document.createElement("div");
        dayDiv.textContent = date.toDateString(); // Show day of the week

        // Check if this date has available slots
        if (availableDates.includes(dateString)) {
            dayDiv.classList.add("available");
            dayDiv.onclick = () => {
                alert(`Available for booking on ${date.toDateString()}`);
            };
        } else {
            dayDiv.classList.add("not-available");
        }
        calendarDiv.appendChild(dayDiv);
    }
}

// Load testimonials
function loadTestimonials() {
    const testimonialList = document.getElementById("testimonial-list");
    testimonialList.innerHTML = ""; // Clear existing testimonials

    testimonials.forEach(testimonial => {
        const div = document.createElement("div");
        div.className = "testimonial";
        div.textContent = testimonial;
        testimonialList.appendChild(div);
    });
}

// Handle login form submission
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    // For demo purposes, log the login credentials to console
    console.log(`Logging in with Email: ${email} and Password: ${password}`);
    alert("Login functionality not implemented yet."); // Placeholder alert
}

// Handle registration form submission
function handleRegistration(event) {
    event.preventDefault();
    const name = document.getElementById("register-name").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    // For demo purposes, log the registration credentials to console
    console.log(`Registering with Name: ${name}, Email: ${email}, Password: ${password}`);
    alert("Registration functionality not implemented yet."); // Placeholder alert
}

// Function to handle review form submission
function handleReviewSubmit(event) {
    event.preventDefault();
    const reviewName = document.getElementById('review-name').value || 'Anonymous';
    const reviewText = document.getElementById('review-text').value;

    const reviewList = document.getElementById('review-list');
    const reviewItem = document.createElement('div');
    reviewItem.className = 'testimonial'; // Using the same style as testimonials
    reviewItem.innerHTML = `<strong>${reviewName}:</strong> ${reviewText}`;
    reviewList.appendChild(reviewItem);

    // Reset the form
    document.getElementById('review-form').reset();
}

// Function to handle feedback form submission
function handleFeedbackSubmit(event) {
    event.preventDefault();
    const feedbackText = document.getElementById('feedback-text').value;

    const feedbackList = document.getElementById('feedback-list');
    const feedbackItem = document.createElement('div');
    feedbackItem.className = 'testimonial'; // Using the same style as testimonials
    feedbackItem.innerHTML = `<strong>Anonymous:</strong> ${feedbackText}`;
    feedbackList.appendChild(feedbackItem);

    // Reset the form
    document.getElementById('feedback-form').reset();
}

// Initialize the application
function init() {
    createMentorCards();
    displayMentors();
    populateMentorSelect();
    document.getElementById('booking-form').addEventListener('submit', handleFormSubmit);
    document.getElementById("mentor-select").addEventListener("change", populateTimeSlots);
    loadTestimonials(); // Load testimonials on page load
    document.getElementById("login-form").addEventListener("submit", handleLogin);
    document.getElementById("register-form").addEventListener("submit", handleRegistration);
    document.getElementById('review-form').addEventListener('submit', handleReviewSubmit);
    document.getElementById('feedback-form').addEventListener('submit')
}

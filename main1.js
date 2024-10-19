// Importing styles (if using module bundlers)
import './style.css';

// Mock data for mentors
const mentors = [
    {
        id: 1,
        name: "Dr. John Doe",
        experience: "15 years",
        specialty: "Machine Learning",
        availability: "Monday - Friday",
        availableSlots: ["2024-10-19 14:00", "2024-10-20 16:00"]
    },
    {
        id: 2,
        name: "Prof. Jane Smith",
        experience: "10 years",
        specialty: "Web Development",
        availability: "Monday - Wednesday",
        availableSlots: ["2024-10-21 10:00", "2024-10-21 11:00"]
    }
];

// Function to render mentors
function renderMentors() {
    const mentorGrid = document.getElementById('mentor-grid');
    mentorGrid.innerHTML = ''; // Clear previous content

    mentors.forEach(mentor => {
        const mentorBox = document.createElement('div');
        mentorBox.className = 'mentor-box';
        mentorBox.innerHTML = `
            <h3>${mentor.name}</h3>
            <p><strong>Experience:</strong> ${mentor.experience}</p>
            <p><strong>Specialty:</strong> ${mentor.specialty}</p>
            <p><strong>Availability:</strong> ${mentor.availability}</p>
            <button class="choose-mentor-btn">Choose Your Mentor</button>
        `;
        mentorGrid.appendChild(mentorBox);
    });
}

// Display available slots in a calendar format
function displayCalendar(availableDates) {
    const calendarDiv = document.getElementById("calendar");
    const today = new Date(); // Get the current date

    for (let i = 0; i < 7; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i); // Create dates for the next 7 days
        const dateString = date.toISOString().split('T')[0];

        const dayDiv = document.createElement("div");
        dayDiv.textContent = date.toDateString();

        // Check if the date is available
        if (availableDates.includes(dateString)) {
            dayDiv.classList.add("available");
            dayDiv.onclick = () => alert(`Available for booking on ${date.toDateString()}`);
        } else {
            dayDiv.classList.add("not-available");
        }
        calendarDiv.appendChild(dayDiv);
    }
}

// Populate time slots based on the selected mentor and date
function populateTimeSlots() {
    const mentorSelect = document.getElementById("mentor-select");
    const timeSlotSelect = document.getElementById("time-slot");
    const selectedMentorId = mentorSelect.value;
    const today = new Date();

    timeSlotSelect.innerHTML = '<option value="">Select a Time Slot</option>'; // Clear options

    if (selectedMentorId) {
        const selectedMentor = mentors.find(m => m.id == selectedMentorId);
        selectedMentor.availableSlots.forEach(slot => {
            const [slotDate, slotTime] = slot.split(' '); // Split date and time
            const slotDateTime = new Date(`${slotDate}T${slotTime}`);

            // Show only future slots
            if (slotDateTime >= today) {
                const option = document.createElement("option");
                option.value = slot;
                option.textContent = `${slotDate} - ${slotTime}`;
                timeSlotSelect.appendChild(option);
            }
        });
    }
}

// Handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    const formData = {
        studentName: document.getElementById('student-name').value,
        studentEmail: document.getElementById('student-email').value,
        mentorId: document.getElementById('mentor-select').value,
        sessionDate: document.getElementById('session-date').value,
        sessionTime: document.getElementById('session-time').value
    };

    console.log('Booking submitted:', formData);
    alert('Your session has been booked successfully!');
    event.target.reset();
}

// Populate mentor select dropdown
function populateMentorSelect() {
    const mentorSelect = document.getElementById('mentor-select');
    mentorSelect.innerHTML = '<option value="">Select a Mentor</option>'; // Clear previous options

    mentors.forEach(mentor => {
        const option = document.createElement('option');
        option.value = mentor.id;
        option.textContent = mentor.name;
        mentorSelect.appendChild(option);
    });
}

// Load testimonials
function loadTestimonials() {
    const testimonialList = document.getElementById("testimonial-list");
    testimonialList.innerHTML = ''; // Clear existing testimonials

    const testimonials = [
        "This platform has transformed my academic journey! - Alice",
        "The mentorship I received was invaluable for my career! - Bob",
        "I learned so much in just one session! - Charlie",
        "Fantastic experience with the mentors! - Diana"
    ];

    testimonials.forEach(testimonial => {
        const div = document.createElement('div');
        div.className = 'testimonial';
        div.textContent = testimonial;
        testimonialList.appendChild(div);
    });
}

// Handle login submission
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    console.log(`Logging in with Email: ${email} and Password: ${password}`);
    alert("Login functionality not implemented yet.");
}

// Handle registration submission
function handleRegistration(event) {
    event.preventDefault();
    const name = document.getElementById("register-name").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    console.log(`Registering with Name: ${name}, Email: ${email}, Password: ${password}`);
    alert("Registration functionality not implemented yet.");
}

// Initialize the application
function init() {
    renderMentors();
    populateMentorSelect();

    // Get today's date in 'YYYY-MM-DD' format
    const today = new Date().toISOString().split('T')[0];

    // Set the min attribute to restrict past dates
    document.getElementById('session-date').setAttribute('min', today);

    document.getElementById('booking-form').addEventListener('submit', handleFormSubmit);
    document.getElementById("mentor-select").addEventListener("change", populateTimeSlots);
    loadTestimonials();
    document.getElementById("login-form").addEventListener("submit", handleLogin);
    document.getElementById("register-form").addEventListener("submit", handleRegistration);
}

// Run init when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);


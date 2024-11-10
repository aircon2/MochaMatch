// Show popup to choose Mentor or Mentee
document.getElementById('popup').style.display = 'flex';

document.getElementById('mentor-btn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none'; // Close the popup
    document.getElementById('interests-section').style.display = 'block'; // Show the interests section
    // You can handle Mentor-specific behavior here
});

document.getElementById('mentee-btn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none'; // Close the popup
    document.getElementById('interests-section').style.display = 'block'; // Show the interests section
    // You can handle Mentee-specific behavior here
});

// Handle interest submission
document.getElementById('submit-interests-btn').addEventListener('click', function() {
    const selectedInterests = [];
    const checkboxes = document.querySelectorAll('.interest-options input[type="checkbox"]:checked');
    
    checkboxes.forEach(function(checkbox) {
        selectedInterests.push(checkbox.value);
    });

    // If there are selected interests, show the matches section
    if (selectedInterests.length > 0) {
        document.getElementById('matches-section').style.display = 'block';
    } else {
        alert("Please select at least one interest.");
    }
});

let currentPoints = 0;
const maxPoints = 100;

function updatePoints(amount) {
    // Update points within the range of 0 to 100
    currentPoints = Math.max(0, Math.min(maxPoints, currentPoints + amount));

    // Update the points display
    document.getElementById('points').textContent = currentPoints;

    // Update the progress bar width
    const progressBar = document.getElementById('progress-bar');
    const progressPercentage = (currentPoints / maxPoints) * 100;
    progressBar.style.width = progressPercentage + '%';
}



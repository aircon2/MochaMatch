
document.getElementById('popup').style.display = 'flex';

document.getElementById('mentor-btn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none'; 
    document.getElementById('interests-section').style.display = 'block'; 
});

document.getElementById('mentee-btn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none'; 
    document.getElementById('interests-section').style.display = 'block'; 
    
});


document.getElementById('submit-interests-btn').addEventListener('click', function() {
    const selectedInterests = [];
    const checkboxes = document.querySelectorAll('.interest-options input[type="checkbox"]:checked');
    
    checkboxes.forEach(function(checkbox) {
        selectedInterests.push(checkbox.value);
    });

   
    if (selectedInterests.length > 0) {
        document.getElementById('matches-section').style.display = 'block';
    } else {
        alert("Please select at least one interest.");
    }
});

let currentPoints = 0;
const maxPoints = 100;

function updatePoints(amount) {
    
    currentPoints = Math.max(0, Math.min(maxPoints, currentPoints + amount));
    document.getElementById('points').textContent = currentPoints;


    const progressBar = document.getElementById('progress-bar');
    const progressPercentage = (currentPoints / maxPoints) * 100;
    progressBar.style.width = progressPercentage + '%';
}



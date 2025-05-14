document.addEventListener('DOMContentLoaded', () => {
    // Retrieve color from localStorage
    const savedColor = localStorage.getItem('boxColor');
    if (savedColor) {
        document.getElementById('animatedBox').style.backgroundColor = savedColor;
    }

    // Color picker event
    const colorPicker = document.getElementById('colorPicker');
    colorPicker.addEventListener('input', function() {
        const selectedColor = this.value;
        document.getElementById('animatedBox').style.backgroundColor = selectedColor;
        localStorage.setItem('boxColor', selectedColor); // Store color in localStorage
    });
});

const button = document.getElementById('animateButton');
button.addEventListener('click', function() {
    const box = document.getElementById('animatedBox');
    box.classList.toggle('animate'); // Toggle animation class
});


const toggleButtons = document.querySelectorAll('.toggle-btn');
const toggleContents = document.querySelectorAll('.toggle-content');

toggleButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const content = toggleContents[index];
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

// Dinamik əlavə etmə funksiyaları
function addEducation() {
    const educationList = document.getElementById('education-list');
    const newItem = prompt('Yeni təhsil məlumatı daxil edin:');
    if (newItem) {
        const li = document.createElement('li');
        li.textContent = newItem;
        educationList.appendChild(li);
    }
}

function addExperience() {
    const experienceList = document.getElementById('experience-list');
    const newItem = prompt('Yeni iş təcrübəsi daxil edin:');
    if (newItem) {
        const li = document.createElement('li');
        li.textContent = newItem;
        experienceList.appendChild(li);
    }
}

function addSkill() {
    const skillsList = document.getElementById('skills-list');
    const newItem = prompt('Yeni bacarıq daxil edin:');
    if (newItem) {
        const li = document.createElement('li');
        li.textContent = newItem;
        skillsList.appendChild(li);
    }
}

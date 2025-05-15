document.addEventListener("DOMContentLoaded", function () {
    // Toggle funksiyası: bölmələri gizlət və ya göstər
    const toggles = document.querySelectorAll(".toggle-section");
    toggles.forEach(btn => {
      btn.addEventListener("click", function () {
        const sectionContent = btn.closest('h2').nextElementSibling;
        if (sectionContent.style.display === "none" || sectionContent.style.display === "") {
          sectionContent.style.display = "block";
        } else {
          sectionContent.style.display = "none";
        }
      });
    });
  
    // Add new Education entry
    document.getElementById("add-education").addEventListener("click", function () {
      const educationList = document.getElementById("education-list");
      const newEdu = document.createElement("p");
      newEdu.innerHTML = `<strong>New Entry</strong><br>Enter your school info here`;
      educationList.appendChild(newEdu);
    });
  
    // Add new Work Experience entry
    document.getElementById("add-experience").addEventListener("click", function () {
      const experienceList = document.getElementById("experience-list");
      const newJob = document.createElement("div");
      newJob.classList.add("job");
      newJob.innerHTML = `
        <h3>New Company <span>Year</span></h3>
        <p>Position</p>
        <ul>
          <li>Responsibility 1</li>
          <li>Responsibility 2</li>
        </ul>`;
      experienceList.appendChild(newJob);
    });
  
    // Add new Skill entry
    document.getElementById("add-skill").addEventListener("click", function () {
      const skillList = document.getElementById("skills-list");
      const newSkill = document.createElement("li");
      newSkill.textContent = "New Skill";
      skillList.appendChild(newSkill);
    });
  });
  

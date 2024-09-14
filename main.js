// Get the Skills section and the toggle button by their IDs
var skillsSection = document.getElementById("skills");
var toggleButton = document.getElementById("toggleSkillsButton");
// Add an event listener to the button to toggle visibility of the Skills section
toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener("click", function () {
    if (skillsSection === null || skillsSection === void 0 ? void 0 : skillsSection.classList.contains("hidden")) {
        skillsSection.classList.remove("hidden");
        toggleButton.textContent = "Hide Skills";
    }
    else {
        skillsSection === null || skillsSection === void 0 ? void 0 : skillsSection.classList.add("hidden");
        toggleButton.textContent = "Show Skills";
    }
});

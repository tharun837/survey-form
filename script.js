document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("empForm");

    form.addEventListener("submit", function(event){
        event.preventDefault();

        const data = {
            name: document.getElementById("name").value,
            empId: document.getElementById("empId").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            gender: document.getElementById("gender").value,
            department: document.getElementById("department").value,
            jobRole: document.getElementById("jobRole").value,
            experience: document.getElementById("experience").value,
            satisfaction: document.getElementById("satisfaction").value,
            environment: document.getElementById("environment").value,
            teamwork: document.getElementById("teamwork").value,
            balance: document.getElementById("balance").value,
            feedback: document.getElementById("feedback").value
        };

        // Validation
        if (data.name.length < 3) {
            alert("Name must be at least 3 characters.");
            return;
        }
        if (!data.email.includes("@")) {
            alert("Enter a valid email!");
            return;
        }

        // STORE JSON DATA
        let surveys = JSON.parse(localStorage.getItem("employeeSurveyData") || "[]");
        surveys.push(data);
        localStorage.setItem("employeeSurveyData", JSON.stringify(surveys));

        document.getElementById("msg").innerHTML =
            "<div class='success'>Survey Submitted Successfully!</div>";

        form.reset();
    });
});

// FUNCTION to View Saved Data
function viewData() {
    const data = JSON.parse(localStorage.getItem("employeeSurveyData") || "[]");

    if (data.length === 0) {
        alert("No survey data stored yet!");
        return;
    }

    alert(JSON.stringify(data, null, 2)); // formatted JSON
}
function clearData() {
    if (confirm("Are you sure you want to delete all survey data?")) {
        localStorage.removeItem("employeeSurveyData");
        alert("All saved survey data has been cleared!");
        document.getElementById("msg").innerHTML = "";
    }
}


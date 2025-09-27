// Placeholder JS – to be replaced with real backend calls

// Simple front-end validations can be added here
document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Registration logic goes here (connect backend).");
        });
    }

    const playerLogin = document.getElementById("playerLogin");
    if (playerLogin) {
        playerLogin.addEventListener("submit", (e) => {
            e.preventDefault();
            document.getElementById("gameArea").classList.remove("hidden");
            alert("Login check & daily guess limit should be handled on server.");
        });
    }

    const adminLogin = document.getElementById("adminLogin");
    if (adminLogin) {
        adminLogin.addEventListener("submit", (e) => {
            e.preventDefault();
            document.getElementById("adminPanel").classList.remove("hidden");
        });
    }
});

function getDailyReport(){
    // Fetch daily report from server
    document.getElementById("dailyReportResult").innerText = "Daily report placeholder";
}
function getUserReport(){
    // Fetch user report from server
    document.getElementById("userReportResult").innerText = "User report placeholder";
}


document.querySelectorAll('.tile').forEach(tile => {
  tile.addEventListener('mouseenter', () => {
    tile.style.boxShadow = '0 0 10px #00ff88';
  });
  tile.addEventListener('mouseleave', () => {
    tile.style.boxShadow = 'none';
  });
});

// Placeholder JS – existing functionality
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

// Reports placeholders
function getDailyReport(){
    document.getElementById("dailyReportResult").innerText = "Daily report placeholder";
}
function getUserReport(){
    document.getElementById("userReportResult").innerText = "User report placeholder";
}

// Tile hover neon effect
document.querySelectorAll('.tile').forEach(tile => {
    tile.addEventListener('mouseenter', () => {
        tile.style.boxShadow = '0 0 15px #00ff88';
    });
    tile.addEventListener('mouseleave', () => {
        tile.style.boxShadow = 'none';
    });
});


// ---- Homepage Tour with animations ----
document.addEventListener("DOMContentLoaded", () => {
    const tourBtn = document.getElementById('tour-button');
    const overlay = document.getElementById('tour-overlay');
    const tooltip = document.getElementById('tour-tooltip');
    const tourText = document.getElementById('tour-text');
    const nextBtn = document.getElementById('tour-next');
    const prevBtn = document.getElementById('tour-prev');
    const skipBtn = document.getElementById('tour-skip');

    const steps = [
        { target: '#register-link', text: 'Click here to register and create your account.' },
        { target: '#player-btn', text: 'Click here to login as a Player and start guessing words.' },
        { target: '#admin-btn', text: 'Click here to login as Admin to manage words and reports.' },
        { target: '#about-link', text: 'Click here to learn about how the game works.' }
    ];

    let currentStep = 0;

    function showStep(index) {
        const step = steps[index];
        const element = document.querySelector(step.target);
        if (!element) return;

        document.querySelectorAll('.tour-highlight').forEach(el => el.classList.remove('tour-highlight'));
        element.classList.add('tour-highlight');

        // Scroll element into view smoothly
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Get element position relative to viewport
        const rect = element.getBoundingClientRect();
        let top = rect.bottom + 10; // default below element
        let left = rect.left;

        // If tooltip would go off bottom of screen, show it above the element
        if (top + 100 > window.innerHeight) { // 100 = approx tooltip height
            top = rect.top - 110; // place above element
        }

        // Prevent tooltip from going off right edge
        if (left + 260 > window.innerWidth) { // 260 = tooltip width + some margin
            left = window.innerWidth - 270;
        }

        tooltip.style.top = `${top}px`;
        tooltip.style.left = `${left}px`;
        tourText.innerText = step.text;

        overlay.classList.add('active');
        tooltip.classList.add('active');

        prevBtn.style.display = index === 0 ? 'none' : 'inline-block';
        nextBtn.innerText = index === steps.length - 1 ? 'Finish' : 'Next';
    }


    function hideTour() {
        overlay.classList.remove('active');
        tooltip.classList.remove('active');
        document.querySelectorAll('.tour-highlight').forEach(el => el.classList.remove('tour-highlight'));
    }

    nextBtn.addEventListener('click', () => {
        if (currentStep < steps.length - 1) {
            currentStep++;
            showStep(currentStep);
        } else {
            hideTour();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
        }
    });

    skipBtn.addEventListener('click', hideTour);

    tourBtn.addEventListener('click', () => {
        currentStep = 0;
        showStep(currentStep);
    });
});

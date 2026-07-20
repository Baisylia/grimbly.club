let plexus = 100;
let spinning = false;
let wheelRotation = 0;

const rewards = [
    // Yellow Solar
    50, 10, 40, 5, 15, 20,
    // Green Floral
    -5, -5, 20, -15, 5, 20,
    // Cyan Aquatic
    0, 0, 20, 5, -20, 10,
    // Blue Lunar
    -30, 10, -20, 5, 20, -10,
    // Magenta Fungal
    20, -10, 10, -5, 30, 25,
    // Red Vitalic
    20, 15, 10, 5, 40, 10
];

window.addEventListener("DOMContentLoaded", () => {
    updatePlexus();
    createWheelValues();
});

// Update Plexus
function updatePlexus(){
    document.getElementById("plexusText").textContent =
        "Plexus: " + plexus;
}

// Create Rewards on Wheel
function createWheelValues(){
    const container = document.getElementById("wheelValues");
    const radius = 22; 
    const degreesPerSection = 360 / rewards.length;

    rewards.forEach((reward, i)=>{
        const text = document.createElement("div");
        text.className = "wheel-value";
        text.textContent = reward;
        const angle = i * degreesPerSection;
        text.style.transform =
            `
            rotate(${angle}deg)
            translateY(-${radius}vw)
            `;
        container.appendChild(text);
    });
}

// Spin the Spin Wheel that Spins :3
function spinWheel(){
    if(spinning) return;
    if(plexus < 10){
        showWheelResult("No :3");
        return;
    }
    plexus -= 10;
    spinning = true;
    updatePlexus();

    const wheel = document.getElementById("wheelSpin");
    const degreesPerSection = 360 / rewards.length;
    const randomAngle = Math.random() * 360;
    const extraSpins = 
        (8 + Math.floor(Math.random()*5)) * 360;

    wheelRotation += extraSpins + randomAngle;
    wheel.style.transition =
        "transform 5s cubic-bezier(.15,.95,.18,1)";
    wheel.style.transform =
        `rotate(${wheelRotation}deg)`;

    // Find Pointer Relative to Wheel
    setTimeout(()=>{
        let finalAngle = wheelRotation % 360;
        finalAngle = (360 - finalAngle) % 360;
        const section = Math.floor(
            finalAngle / degreesPerSection
        );
        const reward = rewards[section];
        plexus += reward;
        if(plexus < 0){
            plexus = 0;
        }
        updatePlexus();
        showWheelResult(reward);
        spinning = false;
    },5000);
}

// Show Spin Wheel Result Prize!!!! :D
function showWheelResult(reward){
    const result = document.getElementById("wheelResult");
    if(reward > 0){
        result.textContent = "+" + reward;
    } else {
        result.textContent = reward;
    }

    result.classList.add("show");
    setTimeout(()=>{
        result.classList.remove("show");
    },2000);
}
document.getElementById('demographic-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    loadScenario();
});

let currentScenario = 0;
const scenarios = [
    {
        title: 'Scenario 1: Neutral Information',
        description: 'The average temperature in May is 70°F.',
    },
    {
        title: 'Scenario 2: Personal Information',
        description: 'I just adopted a new puppy.',
    },
    {
        title: 'Scenario 3: Sensitive Information',
        description: 'I am considering changing careers.',
    },
    {
        title: 'Scenario 4: Confidential Information',
        description: 'There will be layoffs in my department soon.',
    },
    {
        title: 'Scenario 5: Professional Information',
        description: 'Our company is launching a new product next month.',
    },
    {
        title: 'Scenario 6: Misinformation',
        description: 'Drinking coffee dehydrates you.',
    },
    {
        title: 'Scenario 7: Helpful Information',
        description: 'Eating an apple a day can improve your health.',
    },
    {
        title: 'Scenario 8: Rumors/Gossip',
        description: 'I heard that our colleague is getting a promotion.',
    }
];

function loadScenario() {
    if (currentScenario < scenarios.length) {
        document.getElementById('scenario-title').innerText = scenarios[currentScenario].title;
        document.getElementById('scenario-description').innerText = scenarios[currentScenario].description;
    } else {
        endGame();
    }
}

function shareInfo(profile) {
    console.log(`Shared with ${profile}`);
    // Here you can add code to record the sharing decision
}

function nextScenario() {
    currentScenario++;
    loadScenario();
}

function endGame() {
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('end-screen').classList.remove('hidden');
}


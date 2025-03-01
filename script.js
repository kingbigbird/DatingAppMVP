// Toggle Unhinged Mode options
function toggleMode() {
    const mode = document.getElementById('mode').value;
    const unhingedOptions = document.getElementById('unhingedOptions');
    unhingedOptions.style.display = mode === 'unhinged' ? 'block' : 'none';
}

// Update conspiracy slider value display
document.getElementById('conspiracy').addEventListener('input', function() {
    document.getElementById('conspiracyValue').textContent = this.value;
});

// Generate matches based on input
function getMatches() {
    const mode = document.getElementById('mode').value;
    const age = document.getElementById('age').value;
    const location = document.getElementById('location').value;
    const interests = document.getElementById('interests').value;
    const conspiracy = document.getElementById('conspiracy').value;

    const matchList = document.getElementById('matchList');
    matchList.innerHTML = ''; // Clear previous matches

    // Define current timestamp and thresholds
    const now = Date.now();
    const ONE_DAY_MS = 24 * 60 * 60 * 1000;
    const INACTIVE_THRESHOLD = 7 * ONE_DAY_MS; // 7 days
    const MIN_TWEET_COUNT = 100; // Minimum tweets required
    const MIN_FOLLOWER_COUNT = 25; // Minimum followers required
    const MIN_MATCHES = 5; // Minimum number of matches to display

    // Fake matches (expanded pool to ensure at least 5 pass the filters)
    const allMatches = [];
    if (mode === 'serious') {
        // Profiles that pass all criteria
        allMatches.push({
            name: 'Alex, 25',
            description: `Lives in ${location || 'a nearby city'}, into ${interests || 'stuff you like'}.`,
            details: `Last active: 2 hours ago<br>Favorite thing: Meeting new people`,
            xProfileLink: 'https://x.com/AlexTheGreat25',
            profilePicture: 'https://picsum.photos/100?random=1',
            lastActiveTimestamp: now - (2 * 60 * 60 * 1000), // 2 hours ago
            lastTweetTimestamp: now - (1 * 60 * 60 * 1000), // Last tweeted 1 hour ago
            exists: true,
            verified: true,
            tweetCount: 150,
            followerCount: 50
        });
        allMatches.push({
            name: 'Sam, 28',
            description: `Also in ${location || 'some place close'}, enjoys ${interests || 'similar things'}.`,
            details: `Last active: 5 minutes ago<br>Favorite thing: Long walks`,
            xProfileLink: 'https://x.com/SamWanderer28',
            profilePicture: 'https://picsum.photos/100?random=2',
            lastActiveTimestamp: now - (5 * 60 * 1000), // 5 minutes ago
            lastTweetTimestamp: now - (2 * 60 * 60 * 1000), // Last tweeted 2 hours ago
            exists: true,
            verified: true,
            tweetCount: 200,
            followerCount: 30
        });
        allMatches.push({
            name: 'Taylor, 26',
            description: `Based in ${location || 'a nearby city'}, loves ${interests || 'cool activities'}.`,
            details: `Last active: 1 day ago<br>Favorite thing: Exploring new places`,
            xProfileLink: 'https://x.com/TaylorTravels26',
            profilePicture: 'https://picsum.photos/100?random=5',
            lastActiveTimestamp: now - (1 * ONE_DAY_MS), // 1 day ago
            lastTweetTimestamp: now - (12 * 60 * 60 * 1000), // Last tweeted 12 hours ago
            exists: true,
            verified: true,
            tweetCount: 120,
            followerCount: 40
        });
        allMatches.push({
            name: 'Morgan, 29',
            description: `From ${location || 'a nearby spot'}, into ${interests || 'fun hobbies'}.`,
            details: `Last active: 3 hours ago<br>Favorite thing: Trying new foods`,
            xProfileLink: 'https://x.com/MorganEats29',
            profilePicture: 'https://picsum.photos/100?random=6',
            lastActiveTimestamp: now - (3 * 60 * 60 * 1000), // 3 hours ago
            lastTweetTimestamp: now - (1 * ONE_DAY_MS), // Last tweeted 1 day ago
            exists: true,
            verified: true,
            tweetCount: 180,
            followerCount: 60
        });
        allMatches.push({
            name: 'Riley, 27',
            description: `Lives near ${location || 'your area'}, enjoys ${interests || 'similar interests'}.`,
            details: `Last active: 6 hours ago<br>Favorite thing: Outdoor adventures`,
            xProfileLink: 'https://x.com/RileyHikes27',
            profilePicture: 'https://picsum.photos/100?random=7',
            lastActiveTimestamp: now - (6 * 60 * 60 * 1000), // 6 hours ago
            lastTweetTimestamp: now - (2 * ONE_DAY_MS), // Last tweeted 2 days ago
            exists: true,
            verified: true,
            tweetCount: 110,
            followerCount: 35
        });
        allMatches.push({
            name: 'Jordan, 30',
            description: `Around ${location || 'a nearby place'}, likes ${interests || 'various things'}.`,
            details: `Last active: 4 hours ago<br>Favorite thing: Gaming`,
            xProfileLink: 'https://x.com/JordanGames30',
            profilePicture: 'https://picsum.photos/100?random=8',
            lastActiveTimestamp: now - (4 * 60 * 60 * 1000), // 4 hours ago
            lastTweetTimestamp: now - (3 * 60 * 60 * 1000), // Last tweeted 3 hours ago
            exists: true,
            verified: true,
            tweetCount: 140,
            followerCount: 45
        });
    } else {
        // Unhinged mode
        const conspiracyLevel = parseInt(conspiracy);
        let conspiracyDesc = '';
        let favoriteConspiracy = '';
        if (conspiracyLevel < 4) {
            conspiracyDesc = 'pretty grounded';
            favoriteConspiracy = 'Not sure about conspiracies';
        } else if (conspiracyLevel < 8) {
            conspiracyDesc = 'open to some wild ideas';
            favoriteConspiracy = 'Bigfoot might be real';
        } else {
            conspiracyDesc = 'full-on tinfoil hat enthusiast';
            favoriteConspiracy = 'The moon landing was staged';
        }

        // Profiles that pass all criteria
        allMatches.push({
            name: 'Casey, 27',
            description: `In ${location || 'a mysterious place'}, into ${interests || 'weird hobbies'}, and ${conspiracyDesc}.`,
            details: `Last active: 1 hour ago<br>Favorite conspiracy: ${favoriteConspiracy}`,
            xProfileLink: 'https://x.com/CaseyTruth27',
            profilePicture: 'https://picsum.photos/100?random=3',
            lastActiveTimestamp: now - (1 * 60 * 60 * 1000), // 1 hour ago
            lastTweetTimestamp: now - (1 * 60 * 60 * 1000), // Last tweeted 1 hour ago
            exists: true,
            verified: true,
            tweetCount: 130,
            followerCount: 45
        });
        allMatches.push({
            name: 'Skyler, 29',
            description: `From ${location || 'a mysterious spot'}, enjoys ${interests || 'strange activities'}, and ${conspiracyDesc}.`,
            details: `Last active: 3 days ago<br>Favorite conspiracy: ${favoriteConspiracy}`,
            xProfileLink: 'https://x.com/SkylerMyst29',
            profilePicture: 'https://picsum.photos/100?random=9',
            lastActiveTimestamp: now - (3 * ONE_DAY_MS), // 3 days ago
            lastTweetTimestamp: now - (2 * ONE_DAY_MS), // Last tweeted 2 days ago
            exists: true,
            verified: true,
            tweetCount: 160,
            followerCount: 55
        });
        allMatches.push({
            name: 'Avery, 26',
            description: `Lives in ${location || 'an unknown area'}, into ${interests || 'quirky hobbies'}, and ${conspiracyDesc}.`,
            details: `Last active: 12 hours ago<br>Favorite conspiracy: ${favoriteConspiracy}`,
            xProfileLink: 'https://x.com/AveryOdd26',
            profilePicture: 'https://picsum.photos/100?random=10',
            lastActiveTimestamp: now - (12 * 60 * 60 * 1000), // 12 hours ago
            lastTweetTimestamp: now - (6 * 60 * 60 * 1000), // Last tweeted 6 hours ago
            exists: true,
            verified: true,
            tweetCount: 140,
            followerCount: 30
        });
        allMatches.push({
            name: 'Peyton, 31',
            description: `Near ${location || 'a secret place'}, likes ${interests || 'unusual stuff'}, and ${conspiracyDesc}.`,
            details: `Last active: 1 day ago<br>Favorite conspiracy: ${favoriteConspiracy}`,
            xProfileLink: 'https://x.com/PeytonStrange31',
            profilePicture: 'https://picsum.photos/100?random=11',
            lastActiveTimestamp: now - (1 * ONE_DAY_MS), // 1 day ago
            lastTweetTimestamp: now - (1 * ONE_DAY_MS), // Last tweeted 1 day ago
            exists: true,
            verified: true,
            tweetCount: 190,
            followerCount: 70
        });
        allMatches.push({
            name: 'Dakota, 28',
            description: `Around ${location || 'a shadowy place'}, into ${interests || 'odd hobbies'}, and ${conspiracyDesc}.`,
            details: `Last active: 2 hours ago<br>Favorite conspiracy: ${favoriteConspiracy}`,
            xProfileLink: 'https://x.com/DakotaWeird28',
            profilePicture: 'https://picsum.photos/100?random=12',
            lastActiveTimestamp: now - (2 * 60 * 60 * 1000), // 2 hours ago
            lastTweetTimestamp: now - (1 * 60 * 60 * 1000), // Last tweeted 1 hour ago
            exists: true,
            verified: true,
            tweetCount: 220,
            followerCount: 65
        });
        allMatches.push({
            name: 'Quinn, 32',
            description: `Somewhere in ${location || 'a hidden realm'}, enjoys ${interests || 'bizarre hobbies'}, and ${conspiracyDesc}.`,
            details: `Last active: 5 hours ago<br>Favorite conspiracy: ${favoriteConspiracy}`,
            xProfileLink: 'https://x.com/QuinnMyst32',
            profilePicture: 'https://picsum.photos/100?random=13',
            lastActiveTimestamp: now - (5 * 60 * 60 * 1000), // 5 hours ago
            lastTweetTimestamp: now - (3 * 60 * 60 * 1000), // Last tweeted 3 hours ago
            exists: true,
            verified: true,
            tweetCount: 170,
            followerCount: 50
        });
    }

    // Filter matches: exclude if inactive (based on last activity or last tweet), non-existent, not verified, or doesn't meet tweet/follower thresholds
    const matches = allMatches.filter(match => {
        const timeSinceLastActive = now - match.lastActiveTimestamp;
        const timeSinceLastTweet = now - match.lastTweetTimestamp;
        const isActive = timeSinceLastActive <= INACTIVE_THRESHOLD && timeSinceLastTweet <= INACTIVE_THRESHOLD;
        const meetsTweetCount = match.tweetCount >= MIN_TWEET_COUNT;
        const meetsFollowerCount = match.followerCount >= MIN_FOLLOWER_COUNT;
        return isActive && match.exists && match.verified && meetsTweetCount && meetsFollowerCount;
    });

    // Ensure exactly 5 matches are displayed
    const displayMatches = matches.slice(0, MIN_MATCHES);

    // Display matches as preview cards or show a message if not enough matches
    if (displayMatches.length < MIN_MATCHES) {
        const noMatches = document.createElement('p');
        noMatches.textContent = `Not enough active matches found with sufficient tweets and followers (found ${displayMatches.length}, need at least ${MIN_MATCHES}). Try adjusting your preferences.`;
        matchList.appendChild(noMatches);
    } else {
        displayMatches.forEach(match => {
            const card = document.createElement('div');
            card.className = 'match-card';
            card.innerHTML = `
                <div class="profile-pic-container">
                    <img src="${match.profilePicture}" alt="${match.name}'s profile picture" class="profile-pic">
                </div>
                <h3>${match.name}</h3>
                <p>${match.description}</p>
                <p>${match.details}</p>
                <p><a href="${match.xProfileLink}" target="_blank" class="x-profile-link">View Demo X Profile (may not exist)</a></p>
            `;
            matchList.appendChild(card);
        });
    }
}
// Chat message data with more realistic comments
const chatMessages = [
  { user: "Rick P.", content: "Just played the 60-Second Melody before a job interview - feeling confident!", time: "Just now", avatar: "#4F46E5", likes: 3 },
  { user: "Maria J.", content: "Thank you Rick! That melody helped me feel calmer about my finances", time: "1m ago", avatar: "#EC4899" },
  { user: "Jason T.", content: "Day 9 and my blood pressure readings are improving", time: "2m ago", avatar: "#10B981" },
  { user: "Debbie K.", content: "Is anyone else having better sleep since using the melody?", time: "3m ago", avatar: "#3B82F6" },
  { user: "Thomas W.", content: "My stress levels are way down. Feeling more positive!", time: "4m ago", avatar: "#F59E0B" },
  { user: "Jen L.", content: "@Maria - That's great! Do you play it morning or evening?", time: "5m ago", avatar: "#8B5CF6" },
  { user: "Maria J.", content: "Yes @Jen! I play it in the morning right after waking up", time: "6m ago", avatar: "#EC4899" },
  { user: "Rachel M.", content: "Day 17 and my creativity is flowing. Got a new business idea!", time: "8m ago", avatar: "#06B6D4" },
  { user: "Kevin L.", content: "Anyone notice improved focus at work after listening?", time: "9m ago", avatar: "#EF4444" },
  { user: "Sandra T.", content: "@Kevin - Yes! Much better concentration all day", time: "11m ago", avatar: "#10B981" },
  { user: "Mark S.", content: "Finally sleeping better after weeks of insomnia!", time: "12m ago", avatar: "#9333EA" },
  { user: "Lisa W.", content: "New member here! Just got my melody today. Excited to start!", time: "14m ago", avatar: "#14B8A6" },
  { user: "David R.", content: "Welcome @Lisa! You're going to love the results", time: "15m ago", avatar: "#F97316" },
  { user: "Robert J.", content: "Found a billing error in my favor yesterday. Coincidence?", time: "17m ago", avatar: "#8B5CF6" },
  { user: "Michelle B.", content: "My doctor was impressed with my progress at my checkup!", time: "19m ago", avatar: "#06B6D4" }
];

// More messages that can be randomly added
const additionalMessages = [
  { user: "Greg L.", content: "Day 21 complete! The clarity I have now is making better decisions.", avatar: "#10B981" },
  { user: "Tom K.", content: "Anyone notice improved relationship with spouse? We're less stressed.", avatar: "#3B82F6" },
  { user: "Angela T.", content: "@Tom - Yes! We're arguing less and talking more", avatar: "#EC4899" },
  { user: "Olivia M.", content: "Week 3 and I found the confidence to ask for a raise!", avatar: "#4F46E5" },
  { user: "Paul M.", content: "Make sure to play the melody with headphones for best results", avatar: "#F59E0B" },
  { user: "Sarah K.", content: "Just referred my sister. These melodies are too good not to share!", avatar: "#9333EA" },
  { user: "Ryan D.", content: "Morning everyone! Day 5 and already feeling less anxious", avatar: "#14B8A6" },
  { user: "William T.", content: "Blood pressure readings improving since starting. Pleased!", avatar: "#F97316" },
  { user: "Laura M.", content: "I've tried everything for sleep. This is actually helping!", avatar: "#8B5CF6" },
  { user: "Michael C.", content: "Had a breakthrough idea while meditating with the melody", avatar: "#06B6D4" }
];

// User names for real-time notifications
const userNames = [
  "Michael", "Emma", "Noah", "Olivia", "William", "Ava", "James", "Isabella", "Benjamin", "Sophia",
  "Lucas", "Mia", "Henry", "Charlotte", "Alexander", "Amelia", "Daniel", "Harper", "Matthew", "Evelyn",
  "David", "Abigail", "Joseph", "Emily", "Carter", "Elizabeth", "Owen", "Sofia", "Wyatt", "Madison",
  "John", "Avery", "Jack", "Ella", "Luke", "Scarlett", "Jayden", "Grace", "Dylan", "Chloe",
  "Grayson", "Victoria", "Levi", "Riley", "Isaac", "Aria", "Gabriel", "Lily", "Julian", "Aubrey",
  "Mateo", "Zoey", "Leo", "Hannah", "Lincoln", "Layla", "Anthony", "Nora", "Andrew", "Zoe"
];

// Function to create a chat message element
function createChatMessage(message) {
  const chatMessage = document.createElement('div');
  chatMessage.className = 'chat-message';
  
  // Create avatar
  const avatar = document.createElement('div');
  avatar.className = 'chat-avatar';
  avatar.style.backgroundColor = message.avatar;
  avatar.textContent = message.user.charAt(0);
  
  // Create message bubble
  const bubble = document.createElement('div');
  bubble.className = 'chat-bubble';
  
  // Create header
  const header = document.createElement('div');
  header.className = 'chat-header-info';
  
  const username = document.createElement('span');
  username.className = 'chat-username';
  username.textContent = message.user;
  
  const time = document.createElement('span');
  time.className = 'chat-time';
  time.textContent = message.time;
  
  header.appendChild(username);
  header.appendChild(time);
  
  // Create content
  const content = document.createElement('div');
  content.className = 'chat-content';
  content.textContent = message.content;
  
  // Add to bubble
  bubble.appendChild(header);
  bubble.appendChild(content);
  
  // Add likes if it's a new message
  if (message.time === 'Just now' || message.likes) {
    const likes = document.createElement('div');
    likes.className = 'chat-likes';
    
    const likesIcon = document.createElement('span');
    likesIcon.className = 'chat-likes-icon';
    likesIcon.textContent = '❤️';
    
    likes.appendChild(likesIcon);
    likes.appendChild(document.createTextNode(` ${message.likes || Math.floor(Math.random() * 4) + 1} likes`));
    
    bubble.appendChild(likes);
  }
  
  // Combine
  chatMessage.appendChild(avatar);
  chatMessage.appendChild(bubble);
  
  return chatMessage;
}

// Function to create and show real-time listener notification
function showListenerNotification() {
  const container = document.getElementById('current-melody-info');
  if (!container) return;
  
  // Clear any existing notifications
  if (container.querySelector('.listener-notification')) {
    container.querySelector('.listener-notification').remove();
  }
  
  const notification = document.createElement('div');
  notification.className = 'listener-notification';
  
  // Random user name
  const userName = userNames[Math.floor(Math.random() * userNames.length)];
  
  // Random notification text
  const texts = [
    `${userName} just played the 60-Second Melody`,
    `${userName} is listening now`,
    `${userName} started playing the melody`,
    `${userName} just joined the session`
  ];
  const text = texts[Math.floor(Math.random() * texts.length)];
  
  notification.textContent = text;
  container.appendChild(notification);
  
  // Remove notification after animation completes
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Function to initialize the chat
function initializeChat() {
  const chatContainer = document.getElementById('chat-container');
  if (!chatContainer) return;
  
  // Add initial messages
  chatMessages.forEach(message => {
    chatContainer.appendChild(createChatMessage(message));
  });
  
  // Scroll to bottom
  chatContainer.scrollTop = chatContainer.scrollHeight;
  
  // Set up interval to add new messages
  setInterval(() => {
    addNewMessage();
  }, Math.random() * 5000 + 3000); // Every 3-8 seconds
}

// Function to add a new message
function addNewMessage() {
  const chatContainer = document.getElementById('chat-container');
  if (!chatContainer) return;
  
  // Either select from existing messages or additional ones
  let baseMessage;
  if (Math.random() > 0.5) {
    const randomIndex = Math.floor(Math.random() * chatMessages.length);
    baseMessage = { ...chatMessages[randomIndex] };
  } else {
    const randomIndex = Math.floor(Math.random() * additionalMessages.length);
    baseMessage = { ...additionalMessages[randomIndex] };
  }
  
  // Modify the message slightly
  const newMessage = { ...baseMessage };
  newMessage.time = 'Just now';
  
  // Add to container
  const messageElement = createChatMessage(newMessage);
  chatContainer.insertBefore(messageElement, chatContainer.firstChild);
  
  // Remove oldest message if there are too many
  if (chatContainer.children.length > 15) {
    chatContainer.removeChild(chatContainer.lastChild);
  }
  
  // Update timestamps on all messages
  Array.from(chatContainer.querySelectorAll('.chat-time')).forEach((timeElement, index) => {
    if (index === 0) {
      timeElement.textContent = 'Just now';
    } else {
      const prevText = timeElement.textContent;
      if (prevText === 'Just now') {
        timeElement.textContent = '1m ago';
      } else {
        const matches = prevText.match(/(\d+)m/);
        if (matches && matches[1]) {
          const newTime = parseInt(matches[1]) + 1;
          timeElement.textContent = `${newTime}m ago`;
        }
      }
    }
  });
}

// Function to update listener counts
function updateListenerCounts() {
  const listenerElements = document.querySelectorAll('.listeners-count');
  
  listenerElements.forEach(element => {
    const currentCount = parseInt(element.textContent);
    if (!isNaN(currentCount)) {
      // Random change between -2 and +2
      const change = Math.floor(Math.random() * 5) - 2;
      const newCount = Math.max(50, currentCount + change);
      element.textContent = newCount;
    }
  });
  
  // Also update the main listener count
  const activeListeners = document.getElementById('active-listeners');
  if (activeListeners) {
    const currentCount = parseInt(activeListeners.textContent.replace(/,/g, ''));
    if (!isNaN(currentCount)) {
      // More often increase than decrease (60% chance of increase)
      let change;
      if (Math.random() < 0.6) {
        change = Math.floor(Math.random() * 4) + 1; // +1 to +4
      } else {
        change = Math.floor(Math.random() * 3) - 2; // -2 to 0
      }
      const newCount = Math.max(17000, currentCount + change);
      activeListeners.textContent = newCount.toLocaleString();
    }
  }
}

// Function to update time display
function updateTimeDisplay() {
  // Get current time display
  const timeDisplay = document.querySelector('.time-display');
  if (timeDisplay) {
    const timeElements = timeDisplay.querySelectorAll('span');
    if (timeElements.length >= 2) {
      // Update the current time
      const currentTime = timeElements[0];
      let seconds = parseInt(currentTime.textContent.split(':')[1]) || 0;
      seconds = (seconds + 1) % 60;
      let minutes = parseInt(currentTime.textContent.split(':')[0]) || 0;
      
      if (seconds === 0) {
        minutes = (minutes + 1) % 1; // Loop back to 0 when reaching 1 minute
      }
      
      currentTime.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
  }
}

// Function to handle melody item clicks
function handleMelodyClick() {
  const melodyItems = document.querySelectorAll('.melody-item');
  
  melodyItems.forEach(item => {
    item.addEventListener('click', function() {
      // Already active, no need to do anything
      if (this.classList.contains('melody-active')) return;
      
      // Remove active class from all items
      melodyItems.forEach(melody => {
        melody.classList.remove('melody-active');
        const numberElement = melody.querySelector('.melody-number');
        if (numberElement) {
          numberElement.style.background = '';
        }
      });
      
      // Add active class to clicked item
      this.classList.add('melody-active');
      
      // Update the player
      const titleElement = document.getElementById('current-melody-title');
      
      if (titleElement) {
        titleElement.textContent = "60-Second Melody";
      }
    });
  });
}

// Add meta viewport if not present
function addViewportMeta() {
  if (!document.querySelector('meta[name="viewport"]')) {
    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
    document.head.appendChild(meta);
  }
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', function() {
  // Add viewport meta tag if not present
  addViewportMeta();
  
  // Initialization - set initial formatted number with comma
  const activeListeners = document.getElementById('active-listeners');
  if (activeListeners) {
    activeListeners.textContent = "17,150";
  }
  
  // Initialize components
  initializeChat();
  handleMelodyClick();
  
  // Start automated updates
  setInterval(updateListenerCounts, 3000);
  setInterval(updateTimeDisplay, 1000);
  setInterval(showListenerNotification, 3500); // Show listener notification every 3.5 seconds
  
  // Progress bar animation
  const progressFill = document.querySelector('.progress-fill');
  if (progressFill) {
    progressFill.style.animation = 'progress-animation 60s linear infinite';
  }
  
  // Disable play button functionality since it should appear to be "always playing"
  const playButton = document.querySelector('.play-button');
  if (playButton) {
    playButton.classList.add('disabled');
  }
});
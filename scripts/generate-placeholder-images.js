const fs = require('fs');
const path = require('path');

// Create a simple SVG placeholder image
function createPlaceholderImage(text, filename) {
  const svg = `
    <svg width="800" height="450" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="450" fill="#f3f4f6"/>
      <text x="400" y="225" font-family="Arial" font-size="24" fill="#6b7280" text-anchor="middle">${text}</text>
    </svg>
  `;

  fs.writeFileSync(path.join(__dirname, '..', 'public', 'events', filename), svg);
}

// Create placeholder images for each event
const events = [
  { filename: 'symposium.jpg', text: 'Research Symposium 2024' },
  { filename: 'workshop.jpg', text: 'Summer Workshop Series' },
  { filename: 'partner-meet.jpg', text: 'Industry Partner Meet' }
];

// Ensure the events directory exists
const eventsDir = path.join(__dirname, '..', 'public', 'events');
if (!fs.existsSync(eventsDir)) {
  fs.mkdirSync(eventsDir, { recursive: true });
}

// Generate the placeholder images
events.forEach(event => {
  createPlaceholderImage(event.text, event.filename);
}); 
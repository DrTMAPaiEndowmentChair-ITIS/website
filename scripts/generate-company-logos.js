const fs = require('fs');
const path = require('path');

// Create a simple SVG placeholder logo
function createPlaceholderLogo(text, filename) {
  const svg = `
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="#f3f4f6"/>
      <text x="100" y="100" font-family="Arial" font-size="48" fill="#6b7280" text-anchor="middle" dominant-baseline="middle">${text.charAt(0)}</text>
    </svg>
  `;

  fs.writeFileSync(path.join(__dirname, '..', 'public', 'companies', filename), svg);
}

// Create placeholder logos for each company
const companies = [
  { filename: 'healthtech.svg', name: 'HealthTech Solutions' },
  { filename: 'greenpower.svg', name: 'GreenPower Systems' },
  { filename: 'urbantech.svg', name: 'UrbanTech' },
  { filename: 'dataflow.svg', name: 'DataFlow Analytics' }
];

// Ensure the companies directory exists
const companiesDir = path.join(__dirname, '..', 'public', 'companies');
if (!fs.existsSync(companiesDir)) {
  fs.mkdirSync(companiesDir, { recursive: true });
}

// Generate the placeholder logos
companies.forEach(company => {
  createPlaceholderLogo(company.name, company.filename);
}); 
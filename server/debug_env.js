const dotenv = require('dotenv');
const path = require('path');

console.log('Current directory:', process.cwd());
console.log('Looking for .env in:', path.resolve(process.cwd(), '.env'));

const result = dotenv.config();

if (result.error) {
    console.error('Dotenv Error:', result.error);
} else {
    console.log('Dotenv parsed:', result.parsed);
}

console.log('JWT_SECRET from process.env:', process.env.JWT_SECRET);

const { google } = require('googleapis');
const readline = require('readline');
require('dotenv').config({ path: '.env.local' });

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID || 'YOUR_CLIENT_ID';
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || 'YOUR_CLIENT_SECRET';
const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI || 'http://localhost:3000/api/email/auth';

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

const SCOPES = ['https://www.googleapis.com/auth/gmail.send'];

const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: SCOPES,
  prompt: 'consent'
});

console.log('1. Open this URL in browser:');
console.log(authUrl);
console.log('\n2. Authorize the app');
console.log('3. Copy the authorization code from the URL');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('\nEnter authorization code: ', async (code) => {
  try {
    const { tokens } = await oauth2Client.getToken(code);
    console.log('\n✅ TOKENS GENERATED SUCCESSFULLY!');
    console.log('\n🔐 Refresh Token:', tokens.refresh_token);
    console.log('\nAdd to .env.local:');
    console.log(`GOOGLE_CLIENT_ID=${CLIENT_ID}`);
    console.log(`GOOGLE_CLIENT_SECRET=${CLIENT_SECRET}`);
    console.log(`GOOGLE_REFRESH_TOKEN=${tokens.refresh_token}`);
    console.log(`GOOGLE_REDIRECT_URI=${REDIRECT_URI}`);
  } catch (error) {
    console.error('Error:', error);
  }
  rl.close();
});
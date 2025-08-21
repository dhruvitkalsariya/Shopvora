// Test script to create a customer through the storefront registration
const https = require('https');
const http = require('http');

function makeRequest(url, options, data) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const isHttps = urlObj.protocol === 'https:';
    const client = isHttps ? https : http;
    
    const req = client.request(url, options, (res) => {
      let body = '';
      res.on('data', (chunk) => {
        body += chunk;
      });
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: body
        });
      });
    });
    
    req.on('error', (err) => {
      reject(err);
    });
    
    if (data) {
      req.write(data);
    }
    req.end();
  });
}

async function testRegistration() {
  console.log('Testing customer registration...');
  
  // Test 1: Try to access the registration page
  try {
    console.log('\n1. Testing registration page access...');
    const response = await makeRequest('http://localhost:8000/dk/account', {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    console.log('Status:', response.statusCode);
    console.log('Response length:', response.body.length);
  } catch (error) {
    console.error('Error accessing registration page:', error.message);
  }
  
  console.log('\n2. Manual steps to create a customer:');
  console.log('   a. Open your browser and go to: http://localhost:8000/dk/account');
  console.log('   b. Click on "Join us" to register a new account');
  console.log('   c. Fill in the form with your details');
  console.log('   d. Submit the form to create your customer account');
  console.log('   e. Then try logging in with those credentials');
  
  console.log('\n3. Alternative: Try these credentials that should work:');
  console.log('   Email: admin@meuda.com');
  console.log('   Password: admi123');
  console.log('   (These are admin credentials - try accessing http://localhost:9000/admin instead)');
}

testRegistration(); 
// This script helps create a customer account
// Run this with: node create-customer.js

const { execSync } = require('child_process');

console.log('Creating a customer account...');
console.log('');

// First, let's try to create a customer using the Medusa CLI
try {
  console.log('Attempting to create customer with Medusa CLI...');
  execSync('npx medusa user -e customer@shopvora.com -p customer123', { 
    stdio: 'inherit',
    cwd: process.cwd()
  });
  console.log('✅ Customer created successfully!');
  console.log('');
  console.log('You can now log in with:');
  console.log('Email: customer@shopvora.com');
  console.log('Password: customer123');
} catch (error) {
  console.log('❌ Failed to create customer with CLI');
  console.log('');
  console.log('Alternative solution:');
  console.log('1. Go to http://localhost:8000/dk/account');
  console.log('2. Click "Join us" to register a new account');
  console.log('3. Use any email and password you prefer');
  console.log('');
  console.log('Or try accessing the admin panel:');
  console.log('1. Go to http://localhost:9000/admin');
  console.log('2. Log in with admin@meuda.com / admi123');
} 
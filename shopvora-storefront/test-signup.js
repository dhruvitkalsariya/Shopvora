import { signup } from './src/lib/data/customer.js';

// Create a mock FormData object
const formData = new FormData();
formData.append('email', 'admin@meuda.com');
formData.append('password', 'admi123');
formData.append('first_name', 'Admin');
formData.append('last_name', 'User');
formData.append('phone', '1234567890');

// Test the signup function
async function testSignup() {
  try {
    console.log('Testing customer signup...');
    const result = await signup(null, formData);
    console.log('Signup result:', result);
  } catch (error) {
    console.error('Signup error:', error);
  }
}

testSignup(); 
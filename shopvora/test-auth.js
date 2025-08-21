import Medusa from "@medusajs/js-sdk";

const sdk = new Medusa({
  baseUrl: "http://localhost:9000",
  debug: true,
  publishableKey: "pk_b47192a0b004a870526bb5d7790c5213f2abbbdf4e7955b0da4a32b0c4c858ed",
});

async function testAuth() {
  try {
    console.log("Testing customer creation...");
    
    // Try to create a customer
    const customer = await sdk.store.customer.create({
      email: "admin@meuda.com",
      password: "admi123",
      first_name: "Admin",
      last_name: "User"
    });
    
    console.log("Customer created:", customer);
    
    // Try to authenticate
    console.log("Testing authentication...");
    const token = await sdk.auth.login("customer", "emailpass", {
      email: "admin@meuda.com",
      password: "admi123"
    });
    
    console.log("Authentication successful:", token);
    
  } catch (error) {
    console.error("Error:", error);
  }
}

testAuth(); 
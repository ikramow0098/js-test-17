// Task 1: Create a Customer Class
class Customer {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.purchaseHistory = [];
  }

  addPurchase(amount) {
    this.purchaseHistory.push(amount);
  }

  getTotalSpent() {
    return this.purchaseHistory.reduce((total, amount) => total + amount, 0);
  }
}

// Task 2: Create a SalesRep Class
class SalesRep {
  constructor(name) {
    this.name = name;
    this.clients = [];
  }

  addClient(customer) {
    this.clients.push(customer);
  }

  getClientTotal(name) {
    const client = this.clients.find(c => c.name === name);
    if (client) {
      return client.getTotalSpent();
    } else {
      return 0;
    }
  }
}

// Task 3: Create a VIPCustomer Class (extends Customer)
class VIPCustomer extends Customer {
  constructor(name, email, vipLevel) {
    super(name, email);
    this.vipLevel = vipLevel;
  }

  getTotalSpent() {
    const total = super.getTotalSpent();
    return total * 1.1; // Adds 10% loyalty bonus
  }
}

// Task 4: Build a Client Report System
const customers = [
  new Customer('John Doe', 'john@example.com'),
  new VIPCustomer('Jane Doe', 'jane@example.com', 'Gold'),
  new Customer('Alice Smith', 'alice@example.com')
];

customers[0].addPurchase(300);
customers[1].addPurchase(500);
customers[2].addPurchase(600);

const salesRep = new SalesRep('Mark Johnson');
salesRep.addClient(customers[0]);
salesRep.addClient(customers[1]);
salesRep.addClient(customers[2]);

// Calculate total revenue from all customers
const totalRevenue = customers.reduce((total, customer) => total + customer.getTotalSpent(), 0);

// Find high-spending customers
const highSpendingCustomers = customers.filter(customer => customer.getTotalSpent() > 500);

// Customer summary (name and total spent)
const customerSummary = customers.map(customer => ({
  name: customer.name,
  totalSpent: customer.getTotalSpent()
}));

// Logs
console.log("Total Revenue: ", totalRevenue);
console.log("High-Spending Customers: ", highSpendingCustomers.map(c => c.name));
console.log("Customer Summary: ", customerSummary);
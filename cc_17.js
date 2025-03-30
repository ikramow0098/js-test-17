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
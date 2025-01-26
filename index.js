// This one will be a little tricky. So check out this overview first: https://www.youtube.com/watch?v=sJ-c3BA-Ypo

// 1. Create a variable to store the singleton instance of the bank branch. "bankBranchInstance"
let bankBranchInstance = null;
// 2. Define a class called `BankBranch` for managing branch information.
class BankBranch {
    constructor(branchInfo) {
          // 3. Check if an instance already exists
 if(!bankBranchInstance) {
            this.branchInfo = branchInfo;
            bankBranchInstance = this;
        }
        return bankBranchInstance;
    }

// 4. Method to retrieve branch information
getBranchInfo() {
        return this.branchInfo;

// 5. Usage Example
const branchA = new BankBranch("First Street Branch, CodeSpace Town");
const branchB = new BankBranch("Second Street Branch, Home Town");

console.log(branchA.getBranchInfo());
console.log(branchB.getBranchInfo());
// NOTES:
// This example demonstrates the Singleton pattern by creating a single instance of the `BankBranch` class.
// Even if we attempt to create another instance of the branch, we receive the original instance,
// ensuring that there is only one set of branch information throughout the application.

// - We define a `BankBranch` class that represents bank branch information.
// - We use the Singleton pattern to ensure that there is only one instance of the `BankBranch` class.
// - The `bankBranchInstance` variable is used to hold the single instance of the class.
// - When a new `BankBranch` instance is created, it checks if `bankBranchInstance` already exists.
//   If it does, it returns the existing instance; otherwise, it creates a new one.
// - The `getBranchInfo` method allows us to retrieve the branch information from the singleton instance.
// - We demonstrate the Singleton pattern by creating two instances (`branchA` and `branchB`) and show that they both point to the same instance,
//   ensuring that there is only one set of branch information throughout the application.

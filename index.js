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

// Verify that both branchA and branchB refer to the same instance
console.log(branchA === branchB);
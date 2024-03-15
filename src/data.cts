const person = {
    name: "Lincoln",
    role: "Cloud Engineer",
  };
  
  function printName() {
    console.log(person.name);
  }
  
  function printRole() {
    console.log(person.role);
  }
  
  module.exports = {
    person,
    printName,
    printRole,
  };
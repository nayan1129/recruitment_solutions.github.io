// Example JavaScript code for handling form submissions and search functionality

// hamburger
const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".nav__link");

hamburger.addEventListener("click", () => {
  navLink.classList.toggle("hide");
});
// Login form submission
document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Add your login logic here
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log("username:" + username);
    console.log("password:" + password);
  });

// Register form submission
document
  .getElementById("register-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var companyname = document.getElementById("companynme");
    var email = document.getElementById("email");
    var Password = document.getElementById("Password");
    console.log(companyname);
    console.log(email);
    console.log(Password);
  });

// Candidate search form submission
document
  .getElementById("search-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Add your candidate search logic here
    // This is just an example to show how the fetched candidates can be added to the list
    var location = document.getElementById("search-form").elements[0].value;
    var jobRole = document.getElementById("search-form").elements[1].value;

    // Fetch candidates based on the search criteria
    var candidates = [
      { name: "John Doe", location: "New York", jobRole: "Engineer" },
      { name: "Jane Smith", location: "San Francisco", jobRole: "Manager" },
      { name: "Alex Johnson", location: "London", jobRole: "Designer" },
    ];

    var candidateList = document.getElementById("candidate-list");
    candidateList.innerHTML = "";

    candidates.forEach(function (candidate) {
      if (
        (location === "" ||
          candidate.location.toLowerCase().includes(location.toLowerCase())) &&
        (jobRole === "" ||
          candidate.jobRole.toLowerCase().includes(jobRole.toLowerCase()))
      ) {
        var listItem = document.createElement("li");
        listItem.textContent = candidate.name;
        candidateList.appendChild(listItem);
      }
    });
  });

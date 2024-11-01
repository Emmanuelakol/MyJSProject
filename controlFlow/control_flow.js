let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else if (userRole === "manager") {
        userMessage = "Welcome, manager!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

//Defining variables and switch statement for userType and userCategory

let userType = "subscriber";
let userCategory;

//Now, you need to implement and execute the switch statement to evaluate the value of userType by providing different case values:
switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

// Use ternary operator for isAuthenticated and authenticationStatus

let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

//Now the condition will be checked.

//If isAuthenticated is true, the expression before : (in this case, "Authenticated") is assigned to authenticationStatus.
//If isAuthenticated is false, the expression after : (in this case, "Not authenticated") is assigned to authenticationStatus.

console.log("Authentication Status:", authenticationStatus);

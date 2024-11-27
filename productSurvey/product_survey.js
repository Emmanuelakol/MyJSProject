//Create a function named submitFeedback inside product_survey.js to take the feedback from the user survey form created in product_survey.html file.
function submitFeedback() {
    alert('Thank you for your valuable feedback')
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    document.getElementById('userInfo').style.display = 'block';
}

//Variables like username, age, email, job, designation, productType, and feedback are declared and assigned values from the respective HTML input elements using getElementById. For example:
const username = document.getElementById('name').value;
const age = document.getElementById('age').value;
const email = document.getElementById('email').value;
const job = document.getElementById('job').value;
const designation = document.getElementById('designation').value;
const productType = document.getElementById('productType').value;
const feedback = document.getElementById('feedbackText').value;

//The above code retrieves the values using HTML input elements with the specified IDs and stores them in variables.
//Next, declare a variable named submitButton and initialize it with document.getElementById ('submitBtn');. This line of code fetches the HTML element with the ID 'submitBtn' using its unique identifier ('getElementById') and assigns it to the variable 'submitButton' for further interaction or manipulation in JavaScript.
const submitButton=document.getElementById('submitBtn');

//Now, assigns the function submitFeedback to execute when the onclick event occurs on the HTML element referenced by the variable submitButton. Include given code outside the function in product_survey.js file.
submitButton.onclick = submitFeedback;

//Include the given code in the submitFeedback function after the declaration of the feedback variable to display thank you message when the user submits the form.
//alert('Thank you for your valuable feedback')

//As the submitFeedback function will fetch the user feedback information in the second point of step 2, the details should also be displayed on the web page to inform the user about the information entered.
//To achieve this, include the following code inside submitFeedback function to put information.

//{document.getElementById('userName').innerHTML = username;
//document.getElementById('userAge').innerHTML = age;
//document.getElementById('userEmail').innerHTML = email;
//document.getElementById('userJob').innerHTML = job;
//document.getElementById('userDesignation').innerHTML = designation;
//document.getElementById('userProductChoice').innerHTML = productType;
//document.getElementById('userFeedback').innerHTML = feedback;//}

//For example, the line of code document.getElementById('userName').innerHTML = username;, finds the HTML element with the ID userName and replaces its inner HTML content with the value stored in the variable username. It dynamically updates the displayed content within that specific HTML element.
//In the HTML code at line 29, the entire div element, which will be used to display information, is styled with the 'display: none' property to be visible only after the user clicks on the submit button. To make this part visible after the button click, include the following code inside the submitFeedback function.
//document.getElementById('userInfo').style.display = 'block';


//Include the following code at the end of the product_survey.js file to ensure that if the user presses the 'Enter' key, the feedback form should submit, similar to clicking the submit button:
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitFeedback();
    }
  });
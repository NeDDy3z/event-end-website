document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    var formData = new FormData(this);

    // Convert form data to JSON object
    var jsonObject = {};
    formData.forEach(function(value, key) {
        jsonObject[key] = value;
    });

    // Convert JSON object to string
    var jsonString = JSON.stringify(jsonObject, null, 2);

    // Create a blob containing the JSON string
    var blob = new Blob([jsonString], { type: 'application/json' });

    // Create a link element
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'registration.json'; // File name
    a.textContent = 'Click here to download the registration data';

    // Append the link to the body and trigger click event
    document.body.appendChild(a);
    a.click();

    // Clean up
    document.body.removeChild(a);
});

document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name === '' || email === '') {
        alert('Please fill out all fields.');
        return;
    }

    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('message').innerText = 'Form submitted successfully!';
        } else {
            document.getElementById('message').innerText = 'There was an error submitting the form.';
        }
    })
    .catch(error => {
        document.getElementById('message').innerText = 'There was an error submitting the form.';
    });
});

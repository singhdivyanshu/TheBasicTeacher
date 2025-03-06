document.getElementById('admissionForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    education: document.getElementById('education').value,
    experience: document.getElementById('experience').value,
    payment: document.getElementById('payment').value
  };

  fetch('/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('responseMessage').textContent = data.message;
  })
  .catch(error => {
    console.error('Error:', error);
  });
});

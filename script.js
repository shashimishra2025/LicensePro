document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  const messageBody = `Name: ${name}\nAge: ${age}\nEmail: ${email}\nPhone: ${phone}`;

  // Send email using EmailJS or similar service
  Email.send({
    SecureToken: "your-emailjs-token", // Replace with your EmailJS token
    To: 'co.in.delhi95@gmail.com',
    From: email,
    Subject: "New Contact Form Submission",
    Body: messageBody
  }).then(
    message => alert("Thank you! Your message has been sent.")
  );
});
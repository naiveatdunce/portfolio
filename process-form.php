<?php
if ($_SERVER['REQUEST_METHOD'] === 'post') {
  // Get the form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];
  
  // Set the recipient email address
  $to = 'welcomehasnain@gmail.com';
  
  // Set the email subject
  $subject = 'New message from your website';
  
  // Build the email message
  $email_message = "Name: $name\n";
  $email_message .= "Email: $email\n";
  $email_message .= "Subject: $subject\n";
  $email_message .= "Message: $message\n";
  
  // Set the email headers
  $headers = "From: $name <$email>\r\n";
  $headers .= "Reply-To: $email\r\n";
  
  // Send the email
  if (mail($to, $subject, $email_message, $headers)) {
    echo 'Thank you for your message. We will get back to you soon.';
  } else {
    echo 'Sorry, there was an error sending your message. Please try again later.';
  }
}
?>

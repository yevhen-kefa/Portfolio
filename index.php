

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "eugenekefa04@gmail.com"; 
    $subject = "New Message from Contact Form";
    $body = "Full Name: $fullname\nEmail: $email\nMessage: $message";

    if (mail($to, $subject, $body)) {
        echo "Message sent successfully. Redirecting back to contact form...";
        header("refresh:3;url=index.html");
    } else {
        echo "Error: Unable to send message";
    }
}
?>

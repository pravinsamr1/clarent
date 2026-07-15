<?php
// send-enquiry.php

// Set response headers to JSON
header('Content-Type: application/json');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

// Get the form data (supports standard POST or JSON POST)
$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_SPECIAL_CHARS);
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
$phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_SPECIAL_CHARS);
$country = filter_input(INPUT_POST, 'country', FILTER_SANITIZE_SPECIAL_CHARS);
$services = filter_input(INPUT_POST, 'services', FILTER_SANITIZE_SPECIAL_CHARS);
$message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_SPECIAL_CHARS);

// Fallback if data is sent as JSON body
if (!$name || !$email) {
    $input = json_decode(file_get_contents('php://input'), true);
    if ($input) {
        $name = isset($input['name']) ? htmlspecialchars(trim($input['name'])) : null;
        $email = isset($input['email']) ? filter_var(trim($input['email']), FILTER_VALIDATE_EMAIL) : null;
        $phone = isset($input['phone']) ? htmlspecialchars(trim($input['phone'])) : null;
        $country = isset($input['country']) ? htmlspecialchars(trim($input['country'])) : null;
        $services = isset($input['services']) ? htmlspecialchars(trim($input['services'])) : null;
        $message = isset($input['message']) ? htmlspecialchars(trim($input['message'])) : null;
    }
}

// Basic validation
if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields (Name, Email, Message).']);
    exit;
}

// Recipient email address
$to = 'pravinsamr@gmail.com'; 

// Subject line
$subject = "New Clarent360 Enquiry from " . $name;

// HTML Email Template
$email_content = "
<html>
<head>
    <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #f4f5f8; color: #333333; margin: 0; padding: 20px; }
        .container { max-width: 600px; background: #ffffff; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); padding: 30px; margin: 0 auto; border-top: 4px solid #5135ff; }
        .logo { font-size: 24px; font-weight: bold; color: #030611; margin-bottom: 20px; text-align: center; letter-spacing: 0.5px; }
        .logo span { color: #5135ff; }
        h2 { font-size: 20px; color: #030611; border-bottom: 1px solid #eeeeee; padding-bottom: 10px; margin-top: 0; }
        table { width: 100%; border-collapse: collapse; margin-top: 15px; }
        th, td { text-align: left; padding: 10px; border-bottom: 1px solid #f5f5f5; }
        th { font-weight: 600; color: #666666; width: 35%; }
        td { color: #111111; }
        .message-box { background-color: #f8f9fc; border-left: 3px solid #ff5455; padding: 15px; border-radius: 4px; margin-top: 15px; font-style: italic; line-height: 1.5; }
        .footer { margin-top: 30px; font-size: 12px; color: #999999; text-align: center; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='logo'>Clarent<span>360</span> Enquiry</div>
        <h2>Enquiry Details</h2>
        <table>
            <tr>
                <th>Full Name:</th>
                <td>" . htmlspecialchars($name) . "</td>
            </tr>
            <tr>
                <th>Email Address:</th>
                <td><a href='mailto:" . htmlspecialchars($email) . "'>" . htmlspecialchars($email) . "</a></td>
            </tr>
            <tr>
                <th>Phone Number:</th>
                <td>" . htmlspecialchars($phone ? $phone : 'Not provided') . "</td>
            </tr>
            <tr>
                <th>Country:</th>
                <td>" . htmlspecialchars($country ? $country : 'Not provided') . "</td>
            </tr>
            <tr>
                <th>Services Needed:</th>
                <td><strong>" . htmlspecialchars($services ? $services : 'Not selected') . "</strong></td>
            </tr>
        </table>
        
        <h2>User Message</h2>
        <div class='message-box'>" . nl2br(htmlspecialchars($message)) . "</div>
        
        <div class='footer'>
            This email was generated automatically from the Clarent360 common enquiry form.
        </div>
    </div>
</body>
</html>
";

// Headers
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8" . "\r\n";
$headers .= "From: Clarent360 Website <no-reply@clarent360.com>" . "\r\n";
$headers .= "Reply-To: " . $name . " <" . $email . ">" . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send
if (mail($to, $subject, $email_content, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Enquiry sent successfully.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send enquiry email. Please check your SMTP mail server configuration.']);
}
?>

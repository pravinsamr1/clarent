<?php
// send-enquiry.php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

// Set response headers to JSON
header('Content-Type: application/json');

$ip = $_SERVER['REMOTE_ADDR'];
$rateLimitFile = __DIR__ . '/.ip_rate_limits.json';
$rateLimits = file_exists($rateLimitFile) ? json_decode(file_get_contents($rateLimitFile), true) : [];

// Clean up old entries (older than 1 hour)
foreach ($rateLimits as $storedIp => $data) {
    if (time() - $data['timestamp'] > 3600) {
        unset($rateLimits[$storedIp]);
    }
}

if (isset($rateLimits[$ip]) && $rateLimits[$ip]['count'] >= 5) {
    http_response_code(429);
    echo json_encode(['success' => false, 'message' => 'Too many requests from this IP. Please try again later.']);
    exit;
}

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

// Format services as a bulleted list
$formatted_services = '<strong>Not selected</strong>';
if (!empty($services)) {
    $services_arr = array_map('trim', explode(',', $services));
    $formatted_services = '<ul style="margin: 0; padding-left: 20px;">';
    foreach ($services_arr as $srv) {
        $formatted_services .= '<li><strong>' . htmlspecialchars($srv) . '</strong></li>';
    }
    $formatted_services .= '</ul>';
}

// HTML Email Template
$email_content = "
<html>
<head>
    <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #f9fafb; color: #374151; margin: 0; padding: 20px; }
        .container { width: 100%; max-width: 100%; background: #ffffff; border-radius: 8px; border: 1px solid #e5e7eb; padding: 30px; box-sizing: border-box; }
        .logo { font-size: 24px; font-weight: bold; color: #111827; margin-bottom: 24px; text-align: center; letter-spacing: 0.5px; }
        .logo span { color: #5135ff; }
        h2 { font-size: 18px; color: #111827; margin-top: 0; margin-bottom: 12px; }
        table { width: 100%; border-collapse: collapse; margin-bottom: 24px; border: 1px solid #e5e7eb; }
        th, td { text-align: left; padding: 14px; border: 1px solid #e5e7eb; }
        th { font-weight: 600; color: #4b5563; width: 35%; background-color: #f9fafb; }
        td { color: #111827; }
        a { color: #5135ff; text-decoration: none; }
        .message-box { border: 1px solid #e5e7eb; padding: 16px; border-radius: 6px; font-style: normal; line-height: 1.6; color: #374151; background-color: #ffffff; }
        .footer { margin-top: 30px; font-size: 12px; color: #9ca3af; text-align: center; }
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
                <td>" . $formatted_services . "</td>
            </tr>
        </table>
        
        <h2>Client Message</h2>
        <div class='message-box'>" . nl2br(htmlspecialchars($message)) . "</div>
        
        <div class='footer'>
            This email was generated automatically from the Clarent360 common enquiry form.
        </div>
    </div>
</body>
</html>
";

// Send using PHPMailer
$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'clarent360@gmail.com'; 
    $mail->Password   = 'dduwnnnbedjuvvwm';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // Recipients
    $mail->setFrom('clarent360@gmail.com', 'Clarent360 Website');
    $mail->addAddress($to);
    $mail->addReplyTo($email, $name);

    // Content
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body    = $email_content;

    // Set Priority
    $mail->Priority = 1;
    $mail->addCustomHeader('X-Priority', '1');
    $mail->addCustomHeader('X-MSMail-Priority', 'High');
    $mail->addCustomHeader('Importance', 'High');

    $mail->send();
    
    // Increment IP submission count upon successful send
    if (!isset($rateLimits[$ip])) {
        $rateLimits[$ip] = ['count' => 0, 'timestamp' => time()];
    }
    $rateLimits[$ip]['count']++;
    file_put_contents($rateLimitFile, json_encode($rateLimits));
    
    echo json_encode(['success' => true, 'message' => 'Enquiry sent successfully.']);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => "Failed to send enquiry email. Mailer Error: {$mail->ErrorInfo}"]);
}
?>

<?php

$host = 'localhost';
$db = 'database_name';
$user = 'username';
$pass = 'password';

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$email = $_POST['email'];
$password = $_POST['password'];

if (!empty($email) && !empty($password)) {
  $email = $conn->real_escape_string($email);
  

  $sql = "SELECT * FROM users WHERE email = '$email'";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
    
    if (password_verify($password, $user['password'])) {
      session_start();
      $_SESSION['user'] = $user['email'];  
      echo "Login successful! Redirecting...";
      header("Location: /some-route"); 
      exit;
    } else {
      echo "Invalid password!";
    }
  } else {
    echo "No user found with this email!";
  }
} else {
  echo "Please fill in both fields.";
}

$conn->close();
?>

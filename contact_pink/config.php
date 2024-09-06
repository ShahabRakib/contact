<?php
//-> Credential
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "contact_form_db";

//-> Create connection (without specifying a database initially)
$conn = new mysqli($servername, $username, $password);

//-> Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

//-> Create database if it does not exist
$sql = "CREATE DATABASE IF NOT EXISTS $dbname";
if ($conn->query($sql) !== TRUE) {
    die("Error creating database: " . $conn->error);
}

//-> Select the database
$conn->select_db($dbname);

//-> Create table for contact messages if it does not exist
$sql = "CREATE TABLE IF NOT EXISTS messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    attachment VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";

if ($conn->query($sql) !== TRUE) {
    die("Error creating table: " . $conn->error);
}

//-> Close connection
$conn->close();

echo "Database and table created successfully";
?>

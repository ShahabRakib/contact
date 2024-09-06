# Contact Form Project

## Overview

This project is a contact form application designed to collect messages from users. It includes features for sending messages with optional file attachments. The messages are stored in a MySQL database.

## Features

- User-friendly contact form
- Input validation and error handling
- File attachment support (up to 10MB, limited to certain file types)
- Success and error messages

## Requirements

- PHP 7.0 or higher
- MySQL or MariaDB
- Web server (e.g., Apache or Nginx)

## Installation

1. **Database Setup**

   - Create a file named `config.php` and place it in the root directory of your project.
   - Copy the following code into `config.php` to set up the database and table:

     ```php
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
     ```

   - Run `config.php` in your web browser (e.g., `http://yourdomain.com/config.php`) to initialize the database and table.

2. **Form Setup**

   - Place the `index.html`, `styles.css`, and `scripts.js` files in your project directory.
   - Ensure that `submit.php` is also in the project directory to handle form submissions.

3. **Permissions**

   - Ensure that the `uploads` directory is writable by the web server (e.g., `chmod 755 uploads`).

## Usage

- Navigate to `index.html` in your web browser to access the contact form.
- Fill out the form and submit it. Success and error messages will be displayed based on the form's validation and submission status.

## File Descriptions

- **`index.html`**: The main HTML form for users to send messages.
- **`styles.css`**: Styling for the contact form.
- **`scripts.js`**: JavaScript for form validation and AJAX submission.
- **`submit.php`**: Handles form submission, validates inputs, and stores messages in the database.
- **`config.php`**: Sets up the database and table.

## Support

For support or questions, please contact [md.shahabuddin1708@gmail.com].

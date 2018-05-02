<?php

$servername = "localhost";
$username = "root";
$password = "";
$database = "test database";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

if (!$conn) {
    die("Connection failed: " . $conn->connect_error);
}

?>

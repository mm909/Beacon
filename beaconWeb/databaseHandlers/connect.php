<?php

// All PHP code is contained in php tags: <?php

// Four things needed to make a connection to a database
// The server name will be replaced by an IP or URL once
// We have a real server connection

// Local host is used to connect to a database on your local computer
// XAMMP is used to make your computer into a private server
// https://www.apachefriends.org/index.html
// localhost/myPHPadmin
// ^ is how you can access and manage your database
// This is our access file

$servername = "localhost";
$username = "root";
$password = "";
$database = "beacon-alpha";

// Note that $database is the data base name on the left hand side of
// myPHPadmin and not the table name

// Create connection and store it in varible $conn
// $conn is referenced several times in all of our PHP scripts
$conn = new mysqli($servername, $username, $password, $database);

// Error check -> Make sure connection was a sucess.
if (!$conn) {
    die("Connection failed: " . $conn->connect_error);
}

// Used for error debugging
// echo "Sucess";

?>

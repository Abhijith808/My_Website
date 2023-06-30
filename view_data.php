<?php
$servername = "localhost";
$username =  "root";
$password = "";
$database = "my_web";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve data from the "contacts" table
$sql = "SELECT * FROM contacts";
$result = $conn->query($sql);

// Check if there are any rows returned
if ($result->num_rows > 0) {
    // Output the data in a table
    echo "<table>";
    echo "<tr><th>Name</th><th>Email</th><th>Message</th></tr>";

    // Fetch each row and display the data
    while ($row = $result->fetch_assoc()) {
        echo "<tr>";
        echo "<td>" . $row["name"] . "</td>";
        echo "<td>" . $row["email"] . "</td>";
        echo "<td>" . $row["message"] . "</td>";
        echo "</tr>";
    }

    echo "</table>";
} else {
    echo "No data found.";
}

// Close the database connection
$conn->close();
?>

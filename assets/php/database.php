<?php

$pass = '$hr1dhar@321';

$connection1 = mysqli_connect("localhost", "jewrzsmy_optimisticipuser
", "$pass", "jewrzsmy_optimisticip
");

//hostname or ip, databaseuser, databasepassword, databasename 

if (!$connection1) {
    echo "Error: Unable to connect to MySQL." . PHP_EOL;
    echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
    echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
    exit;
}

//echo "Success: A proper connection to MySQL was made! The my_db database is great." . PHP_EOL;

// mysqli_close($connection);
?>
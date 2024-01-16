<?php
$DB_SERVER = "localhost";
$DB_USER = "u2437096_default";
$DB_PASSWORD = 'dS03ZJ0yn1g0WzWJ';
$DB_DATABASE = "u2437096_default";

$conn = new mysqli($DB_SERVER, $DB_USER, $DB_PASSWORD, $DB_DATABASE);
$conn->set_charset("utf8mb4");

if (!$conn) {
    die("Connection failed." . mysql_connect_error());
}
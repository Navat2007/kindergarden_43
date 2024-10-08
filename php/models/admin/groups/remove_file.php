<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, Authorization, Content-Type, X-Auth-Token');

require $_SERVER['DOCUMENT_ROOT'] . '/php/include.php';
require $_SERVER['DOCUMENT_ROOT'] . '/php/auth.php';
require $_SERVER['DOCUMENT_ROOT'] . '/php/params.php';

$ID = htmlspecialchars($_POST["ID"]);
$url = htmlspecialchars($_POST["url"]);
$place = htmlspecialchars($_POST["place"]);

if(!empty($url))
{
    $photo_path = $_SERVER['DOCUMENT_ROOT'] . $url;
    @unlink($photo_path);
}

if($place == "gallery")
{
    $sql = "DELETE FROM group_images WHERE ID = '$ID'";
    $sqls[] = $sql;
    $result = mysqli_query($conn, $sql);
}
else{
    $sql = "UPDATE groups SET image = '' WHERE ID = '$ID'";
    $sqls[] = $sql;
    $result = mysqli_query($conn, $sql);
}

require $_SERVER['DOCUMENT_ROOT'] . '/php/answer.php';
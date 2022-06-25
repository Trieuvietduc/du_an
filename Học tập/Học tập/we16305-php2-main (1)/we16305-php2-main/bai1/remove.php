<?php
$id = $_GET['id'];
// xóa bản ghi trong csdl bảng users có id = $id
$sql = "delete from users where id = $id";
$connect = new PDO("mysql:host=127.0.0.1;dbname=we16305-php2;charset=utf8", "root", "12345678");
$stmt = $connect->prepare($sql);
$stmt->execute();
header("location: index.php");

?>
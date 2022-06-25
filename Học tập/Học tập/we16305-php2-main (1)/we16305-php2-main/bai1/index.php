<?php
// localhost/we16305-php2/bai1/index.php
// 1. kết nối php -> db
$connect = new PDO("mysql:host=127.0.0.1;dbname=we16305-php2;charset=utf8", "root", "12345678");

// 2. chuẩn bị câu sql để truy vấn dữ liệu từ bảng users
$sql = "select 
            u.*, 
            s.name as school_name
        from users u
        join schools s
        on u.school_id = s.id";

// 3. thực thi câu sql với csdl
$stmt = $connect->prepare($sql);
$stmt->execute();
// 4. lấy dữ liệu trả về của câu sql => gán cho 1 biến
$users = $stmt->fetchAll();

?>
<table>
    <thead>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>School</th>
    </thead>
    <tbody>
        <?php foreach($users as $u): ?>
            <tr>
                <td><?= $u["id"] ?></td>
                <td><?= $u["name"] ?></td>
                <td><?= $u["email"] ?></td>
                <td><?= $u["school_name"] ?></td>
                <td>
                    <!-- thẻ a - click => chuyển trang (thay đổi url) -->
                    <a href="remove.php?id=<?= $u["id"] ?>">Xóa</a>
                </td>
            </tr>
        <?php endforeach?>
    </tbody>
</table>
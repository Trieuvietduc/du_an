<?php

function product_add_form(){
    $getCateQuery = "select * from categories";
    $categories = executeQuery($getCateQuery, true);
    admin_render('product/add-form.php', compact('categories'));
}

function product_save_add(){
    $name = $_POST['name'];
    $cate_id = $_POST['cate_id'];
    $price = $_POST['price'];
    $quantity = $_POST['quantity'];
    $detail = $_POST['detail'];
    $gallery = $_FILES['gallery'];
    for ($i = 0; $i < count($gallery['name']); $i++) {
        echo "name: " . $gallery['name'][$i];
        echo "<br>";
        echo "tmp name: " . $gallery['tmp_name'][$i];
        echo "<br>";
    }
    
}

?>
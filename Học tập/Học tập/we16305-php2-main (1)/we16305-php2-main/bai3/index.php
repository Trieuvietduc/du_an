<?php

require_once './vendor/autoload.php';

use App\Models\User;
use App\Models\Post;
use App\Models\Category;
use App\Controllers\HomeController;

$x = new User();
$y = new Post();
$z = new Category();
$w = new HomeController();


var_dump($x, $y, $z, $w);

?>
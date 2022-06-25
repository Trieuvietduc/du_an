<?php

class Oto{
    var $name;
    var $brand;
    var $color;
    var $price;
}

$huyndai = new Oto();
$huyndai->name = "tucson";
$huyndai->brand = "Huyndai";
$huyndai->color = "white";
$huyndai->price = 50000;

echo "<pre>";
var_dump(1);
var_dump($huyndai);

$mazda = new Oto();
$mazda->name = "Mazda 3";
$mazda->brand = "Mazda";
$mazda->color = "Red";
$mazda->price = 30000;

var_dump($mazda->name);

?>
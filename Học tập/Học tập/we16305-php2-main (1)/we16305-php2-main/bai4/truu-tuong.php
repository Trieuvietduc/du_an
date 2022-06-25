<?php

abstract class BaseModel{
    public $age = 15;
    abstract static public function getTableName() :string;
    public function setAge($age): void{
        $this->age = $age;
    }
}
trait UserPayment{
    public function getUserInfo(){
        return "Hàm getUserInfo trong Trait user payment";
    }

    public function getPayment(){
        return "Hàm getPayment trong Trait user payment";
    }
}

interface OrderProcess{
    public function detailOrder(): Order;
    public function processPayment(): bool;
}

interface ChartInfo{
    public function getChartByTime();
}

class User extends BaseModel{
    use UserPayment;
    public static function getTableName(): string
    {
        return "users";
    }
}

class Product extends BaseModel implements OrderProcess, ChartInfo{
    use UserPayment;
    public static function getTableName(): string
    {
        return "products";
    }
    public function getChartByTime(){

    }

    public function detailOrder(): Order
    {
        $model = new Order();
        return $model;
    }

    public function processPayment(): bool
    {
        return false;
    }
}

class Order extends BaseModel{
    public static function getTableName(): string
    {
        return "order";
    }
}

// echo User::getTableName();
$x = new User();
echo $x->age;
echo "<br>";
$x->setAge(30);
echo $x->age;
echo "<br>";
$u = new User();
echo $u->getUserInfo();
echo "<br>";
$p = new Product();
echo $p->getPayment();

?>
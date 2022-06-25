<?php
class Model {
    function getConnect(){
        $conn = new PDO("mysql:host=127.0.0.1;dbname=kaopiz;charset=utf8", "root", "12345678");
        return $conn;
    }

    public static function all(){
        $model = new static();
        $model->queryBuilder = "select * from " . $model->table;
        return $model->get();
    }

    public function get(){
        var_dump($this);
        $stmt = $this->getConnect()->prepare($this->queryBuilder);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_CLASS, get_class($this));
    }
}

class User extends Model{
    protected $table = 'users';
}

class Product extends Model{
    protected $table = 'products';
}

echo "<pre>";
var_dump(Product::all());
?>
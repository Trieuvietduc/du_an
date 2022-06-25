<?php

class LopCha{
    function __construct($name, $age)
    {
        $this->name = $name;
        $this->age = $age;
    }
    function setAge($age){
        $this->age = $age;
    }
    function info(){
        return "Xin chào, tôi tên là: " . $this->name . ", Tôi năm nay " . $this->age . " tuổi";
    }
}

class LopCon extends LopCha{
    public $address = "hà nội";
    // "Xin chào, tôi tên là: " . $this->name . ", Tôi năm nay " . $this->age . " tuổi"
    // quê tôi ở hà nội
}
$x = new LopCon("poly", 12);
echo $x->info();

?>
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

    function __construct($name, $age, $address)
    {   
        parent::__construct($name, $age);
        $this->address = $address;
    }
    function info(){
        return parent::info()
                . " - quê tôi ở " . $this->address;
    }
}

$x = new LopCon("long", 19, "Hà Nam");
echo $x->info();
?>
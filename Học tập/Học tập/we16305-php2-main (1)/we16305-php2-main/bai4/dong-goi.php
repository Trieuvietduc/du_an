<?php

class A{
    public $name = "poly";
    protected $age = 40;
    private $salary = 500;
    public function getSalary(){
        return $this->salary;
    }

    public function setSalary($newSalary){
        $this->salary = $newSalary;
    }    
}

class B extends A{
    public function getAge(){
        return $this->age;
    }
}

$x = new A();

$x->name = "FPT Poly";
echo $x->name;


// protected
// $x = new B();
// echo $x->getAge();
// echo $x->age;

// private
// $x = new A();
// var_dump($x->getSalary());
// $x->setSalary(1200);
// echo "<br>";
// var_dump($x->getSalary());


?>
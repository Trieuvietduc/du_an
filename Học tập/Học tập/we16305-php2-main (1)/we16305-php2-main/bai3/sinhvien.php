<?php
// tạo ra lớp sinh viên gồm có các thuộc tinh và phương thức sau:
// thuộc tính: tên, mã sinh viên, số điện thoại, điểm toán, điểm văn, điểm tiếng anh
// phương thức: nhập điểm toán, nhập điểm văn, nhập điểm tiếng anh, điểm trung bình

// định nghĩa ra lớp
class SinhVien{
    var $math, $literal, $english;
    function __construct($ipname, $iproll_number, $ipphone)
    {
        $this->name = $ipname;
        $this->roll_number = $iproll_number;
        $this->phone = $ipphone;
    }
    function setMathScore($score=0){
        $this->math = $score;
    }

    function setLiteralScore($score=0){
        $this->literal = $score;
    }
    function setEnglishScore($score=0){
        $this->english = $score;
    }
    function getAvgScore(){
        $avg = ($this->math + $this->literal + $this->english)/3;
        return round($avg, 2);
    }
}

// tạo ra các object
$binh = new sinhvien("Nguyễn Văn Bình", "PH14865", "0987654321");
$binh->setMathScore(7);
$binh->setLiteralScore(8);
$binh->setEnglishScore(6.5);


$hieu = new SinhVien("Đàm Minh Hiếu", "PH14827", "0987654322");
$hieu->setMathScore(6);
$hieu->setLiteralScore(6.5);
$hieu->setEnglishScore(6);


?>

<h1>Thông tin của <?= $binh->name ?></h1>
<p>Mã sinh viên: <?= $binh->roll_number ?></p>
<p>Số điện thoại: <?= $binh->phone ?></p>
<p>Điểm trung bình: <?= $binh->getAvgScore() ?></p>
<hr>
<h1>Thông tin của <?= $hieu->name ?></h1>
<p>Mã sinh viên: <?= $hieu->roll_number ?></p>
<p>Số điện thoại: <?= $hieu->phone ?></p>
<p>Điểm trung bình: <?= $hieu->getAvgScore() ?></p>
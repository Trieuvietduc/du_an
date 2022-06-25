<?php
function table_order(){
    $tableList  = [
        [
            "id" => 1,
            "name" => "bàn 1",            
        ],
        [
            "id" => 2,
            "name" => "bàn 2",            
        ],
        [
            "id" => 3,
            "name" => "bàn 3",            
        ],
        [
            "id" => 4,
            "name" => "bàn 4",            
        ]
    ];

    $dishes = [
        [
            "id" => 1,
            "name" => "rau muống xào",
            "price" => 1000
        ],
        [
            "id" => 2,
            "name" => "Lẩu thập cẩm",
            "price" => 200000
        ],
        [
            "id" => 3,
            "name" => "Cá rán",
            "price" => 30000
        ],
    ];
    admin_render("order/table.php", compact('tableList', 'dishes'), [
        'customize/js/table/order.js'
    ]);
}

?>
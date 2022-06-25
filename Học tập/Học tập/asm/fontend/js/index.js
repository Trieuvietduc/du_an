var opt = {
    url: 'http://localhost:3000/product',
    method: 'GET',
};
axios(opt)
    .then(function(data) {
        console.log(data);
        data.data.forEach(function(item) {
            console.log(item);
            var tableUsers = document.querySelector('.top');
            var output =
                `<div class="top_1">
                <img src="${item.avatar}" alt="">
                <h5>
                    <p>${item.name}</p>
                </h5>
                <span class="khuyen_mai">Tiết Kiệm: <span class="khuyen_mai1">-25%</span></span>
                <p class="gia">${item.price}</p>
                <button onclick="mua(${item.id})">Mua Hàng</button>

            </div>
             
                `

            tableUsers.innerHTML += output;
        });
    });

function mua(id) {
    console.log(id);
    //1. Đọc dữ liệu từ localstorage, nếu có biển cart thì lấy dữ liệu ra, ko có thì tạo nói
    myCart = localStorage.getItem('myCart');
    if (myCart == null) {
        // chưa có trang giả hàng
        myCart = {}; // tạo đối tượng răng
    } else {
        myCart = JSON.parse(myCart) // nấu đã cá đữ 11ệu rài thì chuyển thành đãi tượng json
    }
    // 112. Kiến tra id sản phản cần mua, náu có trong gió hàng thì cộng số lượng,
    // / chưa có thì gản số lượng là 1
    if (myCart[id] != undefined) {
        myCart[id] = myCart[id] + 1
    } else {
        myCart[id] = 1;
    }
    console.log("myCart Sau khi cộng thân");
    console.log(myCart);
    // /13. Cập nhật lại localstoraga
    localStorage.setItem("myCart", JSON.stringify(myCart))
}

function danhMuc() {
    var opt = {
        url: 'http://localhost:3000/DanhMuc',
        method: 'GET'
    }
    axios(opt).then(function(response) {
        console.log(response)
        response.data.forEach(function(iteam) {
            console.log(iteam.name);
            var b = document.querySelector('.danhmuc');
            var output = `
            <li><a href="fontend/chitietsp.html?id=${iteam.id}">${iteam.name}</a></li>`
            b.innerHTML += output;
        })


    })
}
danhMuc();
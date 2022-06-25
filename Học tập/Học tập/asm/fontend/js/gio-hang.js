function showcart() {
    // 1. đọc giỏ hằng, ghép chuči id thành chuỗi than số để gử lên server
    // ii Lấy cữ 11 ệu & localstorage
    myCart = localStorage.getItem('myCart')
        // console.log(myCart);
    if (myCart == null) {
        window.location = "file:///C:/Users/Admin/Desktop/asm/fontend/error-gio-hang.html";
        return; // thoát khói hàn
    } else {
        myCart = JSON.parse(myCart);
        // tạo chuỗi than số để gọi lên sorver lấy các sản phần trong gió hàng I
        // 112. Gọi server 1 ay dữ 1 iệu đó vào bảng
        chuoi = '';
        Object.keys(myCart).forEach(function(item) {
            if (chuoi.length > 0)
                chuoi += '&'
            chuoi += 'id=' + item

        });
        console.log(chuoi);
        tong_tien = 0;
        url = "http://localhost:3000/product?" + chuoi;
        axios(url).then(function(data) {
            data.data.forEach(function(item) {
                so_luong = myCart[item.id];
                console.log(so_luong);
                console.log(so_luong);
                so_tien = so_luong * item.price;
                console.log(so_tien);
                tong_tien += so_tien;
                ouput =
                    `<tr>
                            <td data-th="Product">
                                <div class="row">
                                    <div class="col-md-3 text-left">
                                        <img src="${item.avatar}" alt="" class="img-fluid d-none d-md-block rounded mb-2 shadow ">
                                    </div>
                                    <div class="col-md-9 text-left mt-sm-2">
                                        <h4>${item.name}</h4>
                                        <p class="font-weight-light">Brand &amp; Name</p>
                                    </div>
                                </div>
                            </td>
                            <td data-th="Price">${item.price}</td>
                            <td data-th="Quantity">
                                <input type="number" class="form-control form-control-lg text-center" value="${so_luong}">
                            </td>
                            <td class="actions" data-th="">
                                <div class="text-right">
                                    <button onclick="xoa(${item.id})" class="btn btn-white border-secondary bg-white btn-md mb-2">
                                        <i class="fas fa-sync"><svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                <path
                                                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                <path fill-rule="evenodd"
                                                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                            </svg></i>
                                    </button>
                                </div>
                            </td>
                        </tr>`;

                document.querySelector('tbody').innerHTML += ouput;
                document.querySelector('#tien_sp').innerHTML = tong_tien;
            })
        })


    }


}
showcart();
function xoa_all() {
    localStorage.clear();
}
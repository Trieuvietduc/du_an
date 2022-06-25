var opt = {
    url: 'http://localhost:3000/product',
    method: 'GET',
};
axios(opt)
    .then(function(data) {
        console.log(data);
        data.data.forEach(function(item) {
            console.log(item);
            console.log(item.price);
            var tableUsers = document.querySelector('#table-user');
            var output =
                `<tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.amount}</td>
            <td><img src="${item.avatar}" alt="" style="width: 150px;"></td>
            <td>${item.price}</td>
            <td><button class="btn-edit btn btn-primary btn-sm" type="button" onclick="Edit(this,'${item.id}','${item.name}','${item.amount}','${item.avatar}','${item.price}')">Edit</button>|
                <button onclick="DeleteRow(${item.id})"class="btn-del btn btn-danger">Del</button></td>
        </tr>`;
            tableUsers.innerHTML += output;
        });
    })
    //delete
function DeleteRow(id) {
    let url_delete = 'http://localhost:3000/product/' + id;
    fetch(url_delete, {
        method: "DELETE"
    }).then(function(response) {
        return response.json();
    }).then(() => location.reload());
}

function sua(id) {
    const a = document.querySelector('#name');
    const b = document.querySelector('#amount');
    const c = document.querySelector('#avatar');
    const d = document.querySelector('#price');
    otp = {
        url: 'http://localhost:3000/product/' + id,
        method: 'put',

        data: {
            name: a.value,
            amount: b.value,
            // avatar: c.value,
            price: d.value
        }
    }
    axios(otp)
        .then(() => location.reload());
}
// thêm
function previewFile() {
    const preview = document.querySelector('#avatar_preview');
    const avatar = document.querySelector('#avatar').files[0];
    const reader = new FileReader();

    reader.addEventListener("load", function() {
        preview.src = reader.result;
    }, false);

    if (avatar) {
        reader.readAsDataURL(avatar);
    }
}

function SaveNew() {
    var them = document.querySelector('.form-user');
    var tien = document.querySelector('input[name=price]').value;
    var anh = document.querySelector('#avatar_preview').getAttribute('src');
    var opt = {
            url: 'http://localhost:3000/product',
            method: 'post',
            data: {
                name: them.name.value,
                amount: them.amount.value,
                avatar: anh,
                price: Number(tien)
            }
        }
        //gọi hàm axios
    axios(opt)
        .then(function(data) {
            console.log(data);
            const dataArr = [];
            dataArr.push(data);
        })
        .then(() => location.reload());
}
// edit
function Edit(element, id, name, amount, avatar, price) {
    $('#form').modal('show');
    console.log(id, name, amount, avatar, price);
    const btn = document.querySelector('.sua').setAttribute('onclick', 'sua(' + id + ')');
    const a = document.querySelector('#name').value = name;
    const b = document.querySelector('#amount').value = amount;
    const c = document.querySelector('#avatar').src = avatar;
    const d = document.querySelector('#price').value = price;
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
            var b = document.querySelector('#catagory');
            var output = `
            <option value="${iteam.id}">${iteam.name}</option>`
            b.innerHTML += output;
        })
    })
}
danhMuc();
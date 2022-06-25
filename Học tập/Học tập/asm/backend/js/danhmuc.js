var url = 'http://localhost:3000/DanhMuc';
var edit = document.querySelector('#form-edit .form-user');
var opt = {
    method: 'GET',
};
fetch(url, opt)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        data.forEach(function(item) {
            const tableUsers = document.querySelector('#table-user');
            const output =
                `<tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            
            <td><button class="btn-edit btn btn-primary btn-sm" type="button" onclick="Edit(this,'${item.id}','${item.name}')">Edit</button>|
                <button onclick="DeleteRow(${item.id})"class="btn-del btn btn-danger">Del</button></td>
        </tr>`;
            tableUsers.innerHTML += output;
        });
    })

function Edit(element, id, name) {
    $('#form-edit').modal('show');
    console.log(id, name);
    const btn = document.querySelector('.sua').setAttribute('onclick', 'sua(' + id + ')');
    const a = document.querySelector('#fullname').value = name;
    opt = {
        url: 'http://localhost:3000/DanhMuc/' + id,
        method: 'put', // phương thức để sửa
        data: {
            name: a,
        }
    }
}

function sua(id) {
    const a = document.querySelector('#fullname');
    otp = {
        url: 'http://localhost:3000/DanhMuc/' + id,
        method: 'put',
        data: {
            name: a.value,
        }
    }
    axios(otp)
        .then(() => location.reload());
}

function DeleteRow(id) {
    console.log(id);
    let url_delete = 'http://localhost:3000/DanhMuc/' + id;
    fetch(url_delete, {
        method: "DELETE"
    }).then(function(response) {
        return response.json();
    }).then(() => location.reload());
}

function SaveNew() {
    var them = document.querySelector('#name');
    var opt = {
            url: 'http://localhost:3000/DanhMuc',
            method: 'post',
            data: {
                name: them.value
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
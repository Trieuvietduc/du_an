var url = 'http://localhost:3000/users';
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
            console.log(item.password);
            const output =
                `<tr>
            <td>${item.id}</td>
            <td>${item.fullname}</td>
            <td>${item.email}</td>
            <td>${item.password}</td>
            <td>${item.gender}</td>
            <td><button class="btn-edit btn btn-primary btn-sm" type="button" onclick="Edit(this,'${item.id}','${item.fullname}','${item.image}','${item.email}','${item.password}','${item.gender}')">Edit</button>|
                <button onclick="DeleteRow(${item.id})"class="btn-del btn btn-danger">Del</button></td>
        </tr>`;
            tableUsers.innerHTML += output;
        });
    })

function Edit(element, id, fullname, image, email, gender, password) {
    $('#form-edit').modal('show');
    console.log(id, fullname, image, email, gender, password);
    const btn = document.querySelector('.sua').setAttribute('onclick', 'sua(' + id + ')');
    const a = document.querySelector('#fullname').value = fullname;
    const c = document.querySelector('#email').value = email;
    const d = document.querySelector('#password').value = password;
    // const d = document.querySelector('#gender') == gender[gender.length];
    opt = {
        url: 'http://localhost:3000/users/' + id,
        method: 'put', // phương thức để sửa
        data: {
            fullname: a,
            email: c,
            password: d
        }
    }
}

function sua(id) {
    const a = document.querySelector('#fullname');
    const c = document.querySelector('#email');
    const d = document.querySelector('#password');
    otp = {
        url: 'http://localhost:3000/users/' + id,
        method: 'put',
        data: {
            fullname: a.value,
            email: c.value,
            password: d.value
        }
    }
    axios(otp)
        .then(() => location.reload());
}

function DeleteRow(id) {
    console.log(id);
    let url_delete = 'http://localhost:3000/users/' + id;
    fetch(url_delete, {
        method: "DELETE"
    }).then(function(response) {
        return response.json();
    }).then(() => location.reload());
}

function SaveNew() {
    var them = document.querySelector('.form-user');
    var opt = {
            url: 'http://localhost:3000/users',
            method: 'post',
            data: {
                fullname: them.fullname.value,
                email: them.email.value,
                gender: them.gender.value,
                password: them.password.value,
            }
        }
        //gọi hàm axios
    axios(opt)
        .then(function(data) {
            const dataArr = [];
            dataArr.push(data);
        })
        .then(() => location.reload());
}

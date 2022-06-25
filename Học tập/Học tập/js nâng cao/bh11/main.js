var url = 'http://localhost:3000/users';
var edit = document.querySelector('#form-edit .form-user');
var opt = {
    method: 'GET',
};
fetch(url, opt)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        data.forEach(function (item) {
            const tableUsers = document.querySelector('#table-user');
            const output =
                `<tr>
            <td>${item.id}</td>
            <td>${item.fullname}</td>
            <td>${item.email}</td>
            <td><img src="${item.image}" alt="" style="width:150px"></td>
            <td>${item.gender}</td>
            <td><button class="btn-edit btn btn-primary btn-sm" type="button" onclick="Edit(this,'${item.id}','${item.fullname}','${item.image}','${item.email}','${item.gender}')">Edit</button>|
                <button onclick="DeleteRow(${item.id})"class="btn-del btn btn-danger">Del</button></td>
        </tr>`;
            tableUsers.insertAdjacentHTML('beforeend', output);
            //delete
            const btn = document.createElement('a.btn-del');
            btn.setAttribute('onclick', 'btn-del');
            btn.setAttribute('onclick', 'DeleteRow(' + item.id + ')');
            console.log(btn);
        });
    })
function Edit(element, id, fullname, image, email, gender) {
    $('#form-edit').modal('show');
    console.log(id, fullname, image, email, gender);
    const btn = document.querySelector('.sua').setAttribute('onclick', 'sua(' + id + ')');
    const a = document.querySelector('#fullname').value = fullname;
    const b = document.querySelector('#image').value = image;
    const c = document.querySelector('#email').value = email;
    // const d = document.querySelector('#gender') == gender[gender.length];
    opt = {
        url: 'http://localhost:3000/users/' + id,
        method: 'put', // phương thức để sửa
        data: {
            fullname: a,
            image: b,
            email: c
            // gender: d
        }
    }
}
function sua(id) {
    const a = document.querySelector('#fullname');
    const b = document.querySelector('#image');
    const c = document.querySelector('#email');
    // const d = document.querySelector('#gender');
    otp = {
        url: 'http://localhost:3000/users/' + id,
        method: 'put',

        data: {
            fullname: a.value,
            image: b.value,
            email: c.value
            // gender: d.value
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
    }).then(function (response) {
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
            image: them.image.value,
            email: them.email.value,
            gender: them.gender.value,
        }
    }
    //gọi hàm axios
    axios(opt)
        .then(function (data) {
            const dataArr = [];
            dataArr.push(data);
        })
        .then(() => location.reload());
}


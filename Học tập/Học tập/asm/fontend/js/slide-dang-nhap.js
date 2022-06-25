var opt = {
    url: 'http://localhost:3000/users',
    method: 'GET',
};
axios(opt)
    .then(function(data) {
        console.log(data);
        var email = document.querySelector("#email");
        var passwork = document.querySelector("#passwork");
        var btn = document.querySelector("#btn");
        var check_email = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm;
        btn.onclick = function() {
            if (email.value == check_email.test(email)) {
                alert('Email Không đúng định dạng');
                return;
            }
            if (passwork.value == "") {
                alert('password Không Được Để Trống');
                return;
            }
            if (email.value == "") {
                alert('email Không Được Để Trống');
                return;
            }
            data.data.forEach(function(item) {
                console.log(item);
                if (email.value == item.email && passwork.value == item.password) {
                    // alert('đăng nhập thành công')
                    console.log('thành công');
                    window.location = "file:///C:/Users/Admin/Desktop/asm/backend/index.html";
                    return;
                } else {
                    // alert('đăng nhập thất bại')
                    console.log('Thất bại');
                    return;
                }
            })
        }

    })
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});
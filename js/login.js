var Login = /** @class */ (function () {
    function Login() {
    }
    Login.prototype.login = function () {
        var usernameInput = document.getElementById('username');
        var passwordInput = document.getElementById('password');
        var username = usernameInput.value;
        var password = passwordInput.value;
        if (username === 'akaljotg' && password === 'abc123') {
            this.goHome();
        }
        else {
            this.displayError();
        }
    };
    Login.prototype.goHome = function () {
        window.location.href = 'index.html';
    };
    Login.prototype.displayError = function () {
        var errorBox = document.getElementById('error-box');
        errorBox.innerText = 'User not found!';
        errorBox.style = "display: block;";
        var interval = setInterval(function () {
            errorBox.style = "display: none;";
            clearInterval(interval);
        }, 5000);
    };
    return Login;
}());
var login = new Login();

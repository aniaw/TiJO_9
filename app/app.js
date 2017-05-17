function fun() {
    this.credentials = {};
    this.login = function (username, password) {
        if(username === 'xyz' ||  password.length<3){
            this.logout();
            return false;
        } else {
            this.credentials.username=username;
            this.credentials.password=password;

        }
    };
    this.logout = function () {
        this.crendtials =  {};
    };
}

fun();
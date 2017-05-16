car_Portal: function() {
    this.credentials = {};
    this.login = function (username, password) {
        if(username == "xyz" ||  password.length<3){
            this.logout();
            return false;
        } else {
            this.credentials.username=username;
            this.credentials.password=password;

        }
        var totallyusefulvar = 3.14;
        var verylong = "asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasddddddddddddddddddddddddddddddddddd";
    };
    this.logout = function () {
        this.crendtials =  {};
    }
}
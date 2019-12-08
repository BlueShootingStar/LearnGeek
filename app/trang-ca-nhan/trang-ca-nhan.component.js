export let TrangCaNhanComponent = {
    templateUrl: './app/trang-ca-nhan/trang-ca-nhan.component.html',
    controller: controller,
    controllerAs: '$scope'
};

function controller(authenticationService) {
    this.account = {
        username: "",
        password: "",
        fullName: "",
        email: "",
        gender: true,
        phoneNumber: ""
    };

    console.log(authenticationService.account);
    this.username = authenticationService.account.username;
}

import SweetAlertHelper from '../../assets/js/sweet-alert-helper.js';

export let BaiTapTracNghiemComponent = {
    templateUrl: './app/bai-tap-trac-nghiem/bai-tap-trac-nghiem.component.html',
    controller: controller,
    controllerAs: '$scope',
    bindings: {
        subject: '<',
        quizs: '<',
        deadline: '<'
    }
};

function controller() {
    this.btnText = {
        reset: "Start",
        started: "Stop",
        stopped: "Resume"
    };

    this.hetGioLamBai = () => {
        SweetAlertHelper.thongBao("Bạn đã hết giờ làm bài!");
    }
}


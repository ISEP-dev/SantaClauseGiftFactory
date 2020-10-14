import $ from "jquery"

class AlertService {
    parentAlertUI = $("#parent-alert-error")
    alertUI = $("#alert-error")
    alertCloseButton = $("#alert-close-button")

    constructor() {
        this.hide()
        this.alertCloseButton.click(() => this.hide())
    }

    show = (alertMessage) => {
        this.parentAlertUI.show()
        this.alertUI.text(alertMessage)
    }

    hide = () => {
        this.parentAlertUI.hide()
        this.alertUI.empty()
    }
}
export default AlertService

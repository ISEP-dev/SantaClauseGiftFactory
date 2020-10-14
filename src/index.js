import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
import SledService from "./services/sledService"
import AlertService from "./services/alertService"
import DwarfService from "./services/dwarfService"
import GiftService from "./services/giftService"
import './index.css'

$(document).ready(() => {
    new App();
})

class App {
    dwarfService = new DwarfService()
    sledService = new SledService()
    giftService = new GiftService()
    alertService = new AlertService()

    constructor() {
        this.giftButtonSelection()
        this.deliverButton()
    }

    /* Event of the button selection */
    giftButtonSelection = () => {
        this.dwarfService.buttonGiftSelection.click(() => {
            const giftToPrepare = this.giftService.getGiftToPrepare(this.dwarfService.inputGiftSelection.val())

            this.dwarfService.toggleLoadingGift(true)

            this.dwarfService.prepareGiftPromise(giftToPrepare, this.sledService)
                .then(_ => {
                    this.sledService.addGift(giftToPrepare)
                    this.sledService.updateGiftsNumberDisplayed(this.sledService.gifts, this.sledService.totalWeight)
                })
                .catch(e => this.alertService.show(e))
                .finally(() => this.dwarfService.toggleLoadingGift(false))
        })
    }

    /* Button to deliver the gifts in the sled */
    deliverButton = () => {
        this.sledService.buttonToDeliverGift.click(() => {
            this.sledService.toggleLoadingDelivery(true)

            this.sledService.deliverGiftsPromise()
                .then(() => {
                    this.sledService.resetSled()
                    this.sledService.updateGiftsNumberDisplayed(this.sledService.gifts, this.sledService.totalWeight)
                    this.sledService.fadeToAnimation(this.sledService.santaClausImage, 5500)
                })
                .catch(e => {
                    if (!e.response) {
                        this.alertService.show("The request did not end properly: " + e)
                    } else if (e.response.status === 451) {
                        this.sledService.fadeToAnimation(this.sledService.rudolphImage, 6000)
                        this.sledService.fadeToAnimation(this.sledService.rudolphText, 6000)
                    }

                })
                .finally(() => this.sledService.toggleLoadingDelivery(false))
        })
    }
}



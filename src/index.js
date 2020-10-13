import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import $ from 'jquery'
import {SledService} from "./services/SledService"
import AlertService from "./services/AlertService"
import {DwarfService} from "./services/DwarfService"
import GiftService from "./services/giftService"

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



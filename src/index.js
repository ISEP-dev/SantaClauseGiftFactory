import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import Dwarf from "./models/Dwarf"
import Sled from "./models/Sled"
import $ from 'jquery'
import {SledService} from "./services/SledService";
import {AlertService} from "./services/AlertService";
import {DwarfService} from "./services/DwarfService";

$(document).ready(() => { new App(); })

class App {
    dwarf = new Dwarf()
    sled = new Sled()
    dwarfService = new DwarfService()
    sledService = new SledService()
    alertService = new AlertService()

    constructor() {
        this.giftButtonSelection();
        this.deliverButton();
    }

    /* Event of the button selection */
    giftButtonSelection = () => {
        this.dwarfService.buttonGiftSelection.click(() => {
            const giftToPrepare = this.dwarfService.getGiftToPrepare()

            this.dwarfService.toggleLoadingGift(true)

            this.dwarf.prepareGiftPromise(giftToPrepare, this.sled)
                .then(_ => {
                    this.sled.addGift(giftToPrepare)
                    this.sledService.updateGiftsNumberDisplayed(this.sled.gifts, this.sled.totalWeight)
                })
                .catch(e => this.alertService.show(e))
                .finally(() => this.dwarfService.toggleLoadingGift(false))
        })
    }

    /* Button to deliver the gifts in the sled */
    deliverButton = () => {
        this.sledService.buttonToDeliverGift.click(() => {
            this.sledService.toggleLoadingDelivery(true)

            this.sled.deliverGiftsPromise()
                .then(() => {
                    this.sled.resetSled()
                    this.sledService.updateGiftsNumberDisplayed(this.sled.gifts, this.sled.totalWeight)
                    this.sledService.fadeToAnimation(this.sledService.santaClausImage, 5500)
                })
                .catch(e => {
                    this.sledService.fadeToAnimation(this.sledService.rudolphImage, 6000)
                })
                .finally(() => this.sledService.toggleLoadingDelivery(false))
        })
    }
}



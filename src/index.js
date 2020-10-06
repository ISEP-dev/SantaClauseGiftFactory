// you can import css in your js file!
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import Gift from './models/Gift'
import Dwarf from "./models/Dwarf"
import Sled from "./models/Sled"

import $ from 'jquery'

$(document).ready(() => { new App(); })

class App {

    smallGift = new Gift(1, 500)
    normalGift = new Gift(2, 1000)
    bigGift = new Gift(5, 2000)

    dwarf = new Dwarf()
    sled = new Sled()

    constructor() {
        console.log("Initialization of the App")
        this.initSelectionChangeEvent()
        this.initButtonClickEvent()
    }

    initSelectionChangeEvent = () => {
        $("#gift-selection").change((e) => {
            const valueSelected = e.currentTarget.value;
            if (valueSelected === "") {
                $("#gift-selection-button").prop("disabled", true);
                return;
            }
            $("#gift-selection-button").prop("disabled", false);
        })
    }

    initButtonClickEvent = () => {
        $("#gift-selection-button").click(() => {
            const giftToPrepare = this.getGiftToPrepare()

            this.isGiftBeingPrepared()

            this.dwarf.prepareGiftAsync(giftToPrepare)
                .then(_ => this.sled.addGift(giftToPrepare))
                .catch(e => alert(e))
                .finally(() => this.isGiftReady())
        })
    }

    getGiftToPrepare = () => {
        switch ($("#gift-selection").val()) {
            case "big":
                return this.bigGift;
            case "normal":
                return this.normalGift;
            case "small":
                return this.smallGift
        }
    }

    /* Method to launch when gift being prepared*/
    isGiftBeingPrepared = () => {
        $("#gift-selection-button").hide();
        $("#gift-is-preparing").show();
    }

    /* Method to launch when gift is ready*/
    isGiftReady = () => {
        $("#gift-selection-button").show();
        $("#gift-is-preparing").hide();
    }
}


/*const isPrepared = dwarf.prepareGift(bigGift)
if (isPrepared)
    sled.addGift(bigGift)

const isPrepared1 = dwarf.prepareGift(bigGift)
if (isPrepared1)
    sled.addGift(bigGift)

const isPrepared2 = dwarf.prepareGift(normalGift)
if (isPrepared2)
    sled.addGift(normalGift)

sled.toString()

sled.deliverGifts()*/





/* Method to display new present when gift is ready */



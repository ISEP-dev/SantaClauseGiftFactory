// you can import css in your js file!
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import Gift from './models/Gift'
import Dwarf from "./models/Dwarf"
import Sled from "./models/Sled"

// import $ from 'jquery'

$(document).ready(() => { new App(); })

$("#gift-selection").change((e) => {
    const valueSelected = e.currentTarget.value;
    if (valueSelected === "") {
        $("#gift-selection-button").prop("disabled", true);
        return;
    }

    $("#gift-selection-button").prop("disabled", false);
})

$("#gift-selection-button").click(() => {
    switch ($("#gift-selection").val()) {
        case "big":
            // Create big present
            console.log("big")
            break;
        case "medium":
            break;
        case "small":
            break;
    }
    // send present
})

/* Method to launch when gift being prepared*/
const isGiftBeingPrepared = () => {
    $("#gift-selection-button").hide();
    $("#gift-is-preparing").show();
}

/* Method to launch when gift is ready*/
const isGiftReady = () => {
    $("#gift-selection-button").show();
    $("#gift-is-preparing").hide();
}

/* Method to display new present when gift is ready */


class App {
    constructor() {
        console.log("Initialization of the App");

    }
}
const smallGift = new Gift(1, 0.5)
const normalGift = new Gift(2, 1)
const bigGift = new Gift(5, 2)

const dwarf = new Dwarf()
const sled = new Sled()

smallGift.toString()

const isPrepared = dwarf.prepareGift(bigGift)
if (isPrepared)
    sled.addGift(bigGift)

const isPrepared1 = dwarf.prepareGift(bigGift)
if (isPrepared1)
    sled.addGift(bigGift)

const isPrepared2 = dwarf.prepareGift(normalGift)
if (isPrepared2)
    sled.addGift(normalGift)

sled.toString()

sled.deliverGifts()

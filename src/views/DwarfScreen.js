import $ from "jquery";
import Gift from "../models/Gift";
import {SledScreen} from "./SledScreen";

export class DwarfScreen {

    smallGift = new Gift(1, 500)
    normalGift = new Gift(2, 1000)
    bigGift = new Gift(5, 2000)

    constructor(dwarf, sled) {
        /* Implement the sled screen */
        this.sledScreen = new SledScreen(sled);

        this.dwarf = dwarf
        this.sled = sled

        this.giftButtonSelection();
        this.giftSelector()
    }

    /* Event of the gifts selection */
    giftSelector = () => {
        $("#gift-selection").change((e) => {
            const isValid = e.currentTarget.value === "";
            $("#gift-selection-button").prop("disabled", isValid);
        })
    }

    /* Event of the button selection */
    giftButtonSelection = () => {
        $("#gift-selection-button").click(() => {
            const giftToPrepare = this.getGiftToPrepare()

            this.toggleLoadingGift(true)

            this.dwarf.prepareGiftPromise(giftToPrepare, this.sled)
                .then(_ => {
                    this.sled.addGift(giftToPrepare)
                    this.sledScreen.updateGiftsNumberDisplayed()
                })
                .catch(e => alert(e))
                .finally(() => this.toggleLoadingGift(false))
        })
    }

    /* Get selected gift by size */
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

    /* Method to launch when gift being prepared */
    toggleLoadingGift = (isLoading) => {
        if (isLoading) {
            $("#gift-selection-button").hide();
            $("#gift-is-preparing").show();
        } else {
            $("#gift-selection-button").show();
            $("#gift-is-preparing").hide();
        }

    }
}
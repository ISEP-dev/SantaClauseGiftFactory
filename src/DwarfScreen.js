import $ from "jquery";
import Gift from "./models/Gift";

export class DwarfScreen {

    smallGift = new Gift(1, 500)
    normalGift = new Gift(2, 1000)
    bigGift = new Gift(5, 2000)

    constructor(dwarf, sled, sledScreen) {
        this.dwarf = dwarf
        this.sled = sled
        this.sledScreen = sledScreen;

        this.initButtonClickEvent();
        this.initSelectionChangeEvent()
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

            this.dwarf.prepareGiftPromise(giftToPrepare, this.sled)
                .then(_ => {
                    this.sled.addGift(giftToPrepare)
                    this.sledScreen.updateGiftsNumberOnSled()
                    $("#deliver-button").prop("disabled", false)
                })
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
import $ from "jquery";
import Gift from "../models/Gift";

export class DwarfService {

    inputGiftSelection = $("#gift-selection")
    buttonGiftSelection = $("#gift-selection-button")
    preparationloading = $("#gift-is-preparing")

    smallGift = new Gift(1, 500)
    normalGift = new Gift(2, 1000)
    bigGift = new Gift(5, 2000)

    constructor() {
        /* Event of the gifts selection */
        this.inputGiftSelection.change((e) => {
            const isValid = e.currentTarget.value === ""
            this.buttonGiftSelection.prop("disabled", isValid)
        })
    }

    /* Get selected gift by size */
    getGiftToPrepare = () => {
        switch (this.inputGiftSelection.val()) {
            case "big":
                return this.bigGift
            case "normal":
                return this.normalGift
            case "small":
                return this.smallGift
        }
    }

    /* Method to launch when gift being prepared */
    toggleLoadingGift = (isLoading) => {
        if (isLoading) {
            this.buttonGiftSelection.hide()
            this.preparationloading.show()
        } else {
            this.buttonGiftSelection.show()
            this.preparationloading.hide()
        }
    }
}

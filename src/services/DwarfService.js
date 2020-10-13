import $ from "jquery"

export class DwarfService {

    inputGiftSelection = $("#gift-selection")
    buttonGiftSelection = $("#gift-selection-button")
    preparationloading = $("#gift-is-preparing")

    constructor() {
        /* Event of the gifts selection */
        this.inputGiftSelection.change((e) => {
            const isValid = e.currentTarget.value === ""
            this.buttonGiftSelection.prop("disabled", isValid)
        })
    }


    prepareGiftPromise = (gift, sled) => {
        return new Promise((resolve, reject) => {
            if (sled.totalWeight + gift.weight > 12) {
                return reject("Sled is full !")
            }
            setTimeout(resolve, gift.preparationTime)
        });
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

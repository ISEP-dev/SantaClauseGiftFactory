import $ from "jquery";
import axios from "axios"

class SledService {
    buttonToDeliverGift = $("#deliver-button")
    santaClausImage = $("#santa-clause")
    rudolphImage = $("#rudolph-hungry")
    rudolphText = $("#rudolph-text")
    isDeliveryLoading = $("#deliver-is-loading")

    bigGiftNumberInTheSled = $("#bigGiftNumber")
    normalGiftNumberInTheSled = $("#normalGiftNumber")
    smallGiftNumberInTheSled = $("#smallGiftNumber")
    totalWeightSled = $("#totalWeightSled")

    constructor() {
        this.updateGiftsNumberDisplayed([], 0)
        this.resetSled()
    }

    deliverGiftsPromise = () => {
        if (!this.gifts.length) {
            return new Promise((resolve, reject) => reject("Sled is empty !"))
        }

        return axios.post("http://localhost:8081", {gifts: this.gifts})
    }

    addGift = (giftToAdd) => {
        this.gifts = [...this.gifts, giftToAdd]
        this.totalWeight += giftToAdd.weight
    }

    resetSled = () => {
        this.gifts = []
        this.totalWeight = 0
    }

    /* Update gifts number displayed in the sled */
    updateGiftsNumberDisplayed = (gifts, totalWeight) => {
        this.buttonToDeliverGift.prop("disabled", !gifts.length)

        this.bigGiftNumberInTheSled.text(gifts.filter(g => g.weight === 5).length)
        this.normalGiftNumberInTheSled.text(gifts.filter(g => g.weight === 2).length)
        this.smallGiftNumberInTheSled.text(gifts.filter(g => g.weight === 1).length)

        this.totalWeightSled.text(totalWeight)
    }

    /* Method to launch when delivery is loading */
    toggleLoadingDelivery = (isLoading) => {
        if (isLoading) {
            this.buttonToDeliverGift.hide()
            this.isDeliveryLoading.show()
        } else {
            this.buttonToDeliverGift.show()
            this.isDeliveryLoading.hide()
        }
    }

    fadeToAnimation = (element, time) => {
        element.fadeTo(time, 500).slideUp(500, () => {
            element.slideUp(500);
        });
    }
}

export default SledService

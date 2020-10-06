import $ from "jquery";

export class SledScreen {
    constructor(sled) {
        this.sled = sled;

        this.deliverButton()

        this.updateGiftsNumberDisplayed()

    }

    /* Button to deliver the gifts in the sled */
    deliverButton = () => {
        $("#deliver-button").click(() => {
            this.toggleLoadingDelivery(true);

            this.sled.deliverGiftsPromise()
                .then(() => {
                    this.sled.resetSled();
                    this.updateGiftsNumberDisplayed()
                })
                .catch(e => alert(e))
                .finally(() => this.toggleLoadingDelivery(false));
        })
    }

    /* Update gifts number displayed in the sled */
    updateGiftsNumberDisplayed = () => {
        $("#deliver-button").prop("disabled", !this.sled.gifts.length)

        $("#bigGiftNumber").text(this.sled.gifts.filter(g => g.weight === 5).length);
        $("#normalGiftNumber").text(this.sled.gifts.filter(g => g.weight === 2).length);
        $("#smallGiftNumber").text(this.sled.gifts.filter(g => g.weight === 1).length);

        $("#totalWeightSled").text(this.sled.totalWeight)
    }

    /* Method to launch when delivery is loading */
    toggleLoadingDelivery = (isLoading) => {
        if (isLoading) {
            $("#dwarf").hide();
            $("#deliver-button").hide();
            $("#deliver-is-loading").show();
            $("#santa-clause").show();
        } else {
            $("#dwarf").show();
            $("#deliver-button").show();
            $("#deliver-is-loading").hide();
            $("#santa-clause").hide();
        }
    }
}
import $ from "jquery";

export class SledScreen {
    constructor(sled) {
        $("#deliver-button").prop("disabled", true)

        this.sled = sled;

        this.updateGiftsNumberOnSled()

        this.initDeliverButtonClickEvent()
    }

    initDeliverButtonClickEvent = () => {
        $("#deliver-button").click(() => {
            $("#dwarf").hide();
            $("#deliver-button").hide();
            $("#deliver-is-loading").show();
            $("#santa-clause").show();
            this.sled.deliverGiftsPromise()
                .then(() => {
                    this.sled.resetSled();
                    this.updateGiftsNumberOnSled()
                })
                .catch(e => alert(e))
                .finally(() => {
                    $("#dwarf").show();
                    $("#deliver-button").show();
                    $("#deliver-is-loading").hide();
                    $("#santa-clause").hide();
                });
        })
    }

    updateGiftsNumberOnSled = () => {
        $("#bigGiftNumber").text(this.sled.gifts.filter(g => g.weight === 5).length);
        $("#normalGiftNumber").text(this.sled.gifts.filter(g => g.weight === 2).length);
        $("#smallGiftNumber").text(this.sled.gifts.filter(g => g.weight === 1).length);

        $("#totalWeightSled").text(this.sled.totalWeight)
    }
}
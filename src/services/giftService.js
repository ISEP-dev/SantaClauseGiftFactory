import Gift from "../models/gift"

class GiftService {

    smallGift = new Gift(1, 500)
    normalGift = new Gift(2, 1000)
    bigGift = new Gift(5, 2000)

    /* Get selected gift by size */
    getGiftToPrepare = (giftTypeSelected) => {
        switch (giftTypeSelected) {
            case "big":
                return this.bigGift
            case "normal":
                return this.normalGift
            case "small":
                return this.smallGift
        }
    }
}

export default GiftService

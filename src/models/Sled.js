import axios from 'axios'

class Sled {
    constructor() {
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
}

export default Sled
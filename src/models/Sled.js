const axios = require('axios').default

class Sled {
    constructor() {
        this.gifts = []
        this.giftsWeight = 0
    }

    addGift = gift => {
        if (this.giftsWeight + gift.weight > 12) {
            console.error("Too heavy")
            return
        }
        this.gifts.push(gift)
        this.giftsWeight += gift.weight
    }

    deliverGifts = () => {
        axios.post("http://localhost:8081", {gifts: this.gifts}).then(() => {
            console.log("Gift delivered")
        }).catch(() => {
            console.error("Stupid reindeers")
        })
    }

    toString = () => {
        console.log("number of gifts: " + this.gifts.length)
        let totalWeight = 0
        for (let i = 0; i < this.gifts.length; i++) {
            totalWeight += this.gifts[i].weight
        }
        console.log("Total weight: " , totalWeight)
    }
}

export default Sled
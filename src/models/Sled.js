const axios = require('axios').default

class Sled {
    gifts = [];
    totalWeight = 0;

    deliverGiftsPromise = () => {
        if (!this.gifts.length) {
            return new Promise((resolve, reject) => reject("Sled is empty !"))
        }

        return axios.post("http://localhost:8081", {gifts: this.gifts});
    }

    addGift = (giftToAdd) => {
        this.gifts.push(giftToAdd);
        this.totalWeight += giftToAdd.weight;
    }

    resetSled = () => {
        this.gifts = [];
        this.totalWeight = 0;
    }
}

export default Sled
class Dwarf {
    constructor() {
        this.giftsWeight = 0
    }

    prepareGiftAsync = async (gift) => {
        if (this.giftsWeight + gift.weight >= 12) {
            console.error("Refusing to prepare gift")
            throw new Error("The sled is full, boy!")
        }

        this.giftsWeight += gift.weight
        return new Promise(resolve => {
            setTimeout(resolve, gift.preparationTime);
        });
    }
}

export default Dwarf
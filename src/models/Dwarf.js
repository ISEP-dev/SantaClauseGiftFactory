class Dwarf {
    constructor() {
        this.giftsWeight = 0
    }

    prepareGift = (gift) => {
        if (this.giftsWeight + gift.weight > 12) {
            console.error("Refusing to prepare gift")
            return false
        }
        setTimeout(() => {}, gift.preparationTime)
        return true
    }
}

export default Dwarf
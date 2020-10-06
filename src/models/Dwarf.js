class Dwarf {
    prepareGiftPromise = (gift, sled) => {
        return new Promise((resolve, reject) => {
            if (sled.totalWeight + gift.weight > 12) {
                return reject("Sled is full !")
            }
            setTimeout(resolve, gift.preparationTime);
        });
    }
}

export default Dwarf
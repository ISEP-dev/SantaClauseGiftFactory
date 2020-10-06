// you can import css in your js file!
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import Gift from './models/Gift'
import Dwarf from "./models/Dwarf"
import Sled from "./models/Sled"

// import $ from 'jquery'

const smallGift = new Gift(1, 0.5)
const normalGift = new Gift(2, 1)
const bigGift = new Gift(5, 2)

const dwarf = new Dwarf()
const sled = new Sled()

smallGift.toString()

const isPrepared = dwarf.prepareGift(bigGift)
if (isPrepared)
    sled.addGift(bigGift)

const isPrepared1 = dwarf.prepareGift(bigGift)
if (isPrepared1)
    sled.addGift(bigGift)

const isPrepared2 = dwarf.prepareGift(normalGift)
if (isPrepared2)
    sled.addGift(normalGift)

sled.toString()

sled.deliverGifts()

// you can import css in your js file!
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import Gift from './models/Gift'
import Dwarf from "./models/Dwarf"
import Sled from "./models/Sled"

import $ from 'jquery'
import {DwarfScreen} from "./DwarfScreen";
import {SledScreen} from "./SledScreen";

$(document).ready(() => { new App(); })

class App {

    dwarf = new Dwarf()
    sled = new Sled()

    constructor() {
        this.sledScreen = new SledScreen(this.sled);

        new DwarfScreen(this.dwarf, this.sled, this.sledScreen);

    }
}



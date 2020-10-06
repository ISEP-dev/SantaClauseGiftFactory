import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import Dwarf from "./models/Dwarf"
import Sled from "./models/Sled"
import {DwarfScreen} from "./views/DwarfScreen";
import $ from 'jquery'

$(document).ready(() => { new App(); })

class App {
    dwarf = new Dwarf()
    sled = new Sled()

    constructor() {
        /* Implement the screen with the dwarf */
        new DwarfScreen(this.dwarf, this.sled);
    }
}



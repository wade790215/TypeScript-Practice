import {_decorator, Component, Node} from 'cc';

const {ccclass, property} = _decorator;

@ccclass('TSPractice')
export class TSPractice20251216 extends Component {


    start() {
        console.log(this.printPlayerId(1));
    }

    practice20251216() {
        //練習聯合型別(Union Types)
        let playerID: number | string = "12345";
        //let playerName: string = 12345;
    }

    
    printPlayerId(playerID: number | string): string {
        if(typeof playerID === "number") {
            
            return `Player ID is a number: ${playerID}`;
        } else {
            return `Player ID is a string: ${playerID}`;
        }
    }
}

class Player {
    private readonly id: number;
    public name : string;
    
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    
    rename(newName: string) {
        this.name = newName;
    }
}



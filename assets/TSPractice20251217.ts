import {_decorator, Component} from 'cc';

const {ccclass, property} = _decorator;

@ccclass('TSPractice')
export class TSPractice20251217 extends Component {
    
    start() {
        // let arr = ['1,2,3'];
        // let numberbox = new Box<number>(9527);
        // let stringbox = new Box<string>('9527String');
        // console.log(stringbox);
        // console.log(numberbox);
        // console.log(arr);
        this.getLength([1, 2, 3]);
    }

    wrapValue(value: string): string[] {
        return [value];
    }

    wrapValue2<T>(value: T): T[] {
        return [value];
    }

    getLength<T extends ExtensionLimited>(value: T): number {
        console.log(`getLength(${value})`);
        return value.length;
    }
}

class Box<T> {
    private readonly _value: T;

    constructor(value: T) {
        this._value = value;
    }

    getValue(): T {
        return this._value;
    }
}

interface ExtensionLimited {
    length: number;
}





abstract class Melon {
    public weight: number;
    public melonSort: string;

    constructor(weight: number, melonSort: string) {
        this.weight = weight;
        this.melonSort = melonSort;
    }

    abstract get elementIndex(): number;

    public toString() {
        return `Element: ${this.constructor.name.replace('melon', '')}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
    }
}

class Watermelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    get elementIndex(): number {
        return this.weight * this.melonSort.length;
    }
}

export class Firemelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    get elementIndex(): number {
        return this.weight * this.melonSort.length;
    }
}

export class Earthmelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    get elementIndex(): number {
        return this.weight * this.melonSort.length;
    }
}

export class Airmelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    get elementIndex(): number {
        return this.weight * this.melonSort.length;
    }
}

class Melolemonmelon extends Watermelon {
    private static elements = [Firemelon, Earthmelon, Airmelon, Watermelon];

    private static index = 0;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    morph(): void {
        this.constructor = Melolemonmelon.elements[++Melolemonmelon.index % 4];
    }
}

let melolemonmelon: Melolemonmelon = new Melolemonmelon(12.5, "Kingsize");
melolemonmelon.morph();
console.log(melolemonmelon.toString());


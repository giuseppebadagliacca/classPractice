class Glasses{
    constructor(color, shape, perscription){
        this.color = color;
        this.shape = shape;
        this.perscription = perscription;
        this.neededToDrive = false;
    }
    switchNeededToDrive(){
        this.neededToDrive ? this.neededToDrive = false: this.neededToDrive = true
    }
}

class SunGlasses extends Glasses{
    constructor(color, shape, perscription, tinted){
        super(color, shape, perscription)
        this.tinted = tinted;
    }

    printBenefits(){
        console.log(`These types of glasses will keep the sun out of your eyes!`)
    }
}

class ReadingGlasses extends Glasses{
    constructor(color, shape, perscription, perscriptionNums){
        super(color, shape, perscription)
        this.perscriptionNums = perscriptionNums;
    }
    printPerscriptionNums(){
        console.log(`Your perscription is ${this.perscriptionNums}!`)
    }
    printNeededToDrive(){
        if(this.neededToDrive){
            console.log(`Because your perscription is ${this.perscriptionNums}, you need to wear your ${this.color}, ${this.shape} glasses when you drive!`)
        }else{
            console.log(`No need to wear your glasses when you drive`)
        }
    }
}

const giuseppesGlasses = new SunGlasses('clear', 'round', true, true)

console.log(giuseppesGlasses)

giuseppesGlasses.switchNeededToDrive()

console.log(giuseppesGlasses)

// console.log(giuseppesGlasses.printNeededToDrive()) //naturally throws and error because called a ReadingGlasses method on a SunGlasses classes

const barbarasReadingGlasses = new ReadingGlasses('purple', 'round', true, '-1.25')

console.log(barbarasReadingGlasses)
console.log(barbarasReadingGlasses.perscription)
console.log(barbarasReadingGlasses.perscriptionNums)
barbarasReadingGlasses.printNeededToDrive()
barbarasReadingGlasses.switchNeededToDrive()
console.log(barbarasReadingGlasses)
barbarasReadingGlasses.printNeededToDrive()

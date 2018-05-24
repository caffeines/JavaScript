let num = prompt("Enter a number");

if (num % 2 == 0) {
    console.log(`${num} is even`);
} else {
    console.log(`${num} is odd`);
}

let character = prompt("What is your character? (Warrior, Ranger, Rouge)");
let lowerCharacter = character.toLocaleLowerCase();


if (lowerCharacter == `warrior`) {
    console.log(character);
} else if (lowerCharacter == `ranger`) {
    console.log(character);
} else if (lowerCharacter == `rouge`) {
    console.log(character);
} else {
    character = prompt(`${character} is not valid option. Please chose one of the option (Warrior, Ranger, Rouge)`);
}


switch (lowerCharacter) {
    case `warrior`:
        console.log(character);
        break;

    case `rouge`:
        console.log(character);
        break;
    case `ranger`:
        console.log(character);
        break;
    default:
        character = prompt(`${character} is not valid option. Please chose one of the option (Warrior, Ranger, Rouge)`);
        break;
}

const hero = {
    name: `Manly hero`,
    skils: {
        attack: 0,
        persuasion: 0,
        sneak: 0
    }
};


const check = (hero, character) => {
    let lowerCharacter = character.toLocaleLowerCase();

    switch (lowerCharacter) {
        case `warrior`:
            hero.skils.attack += 3;
            hero.skils.sneak--;
            break;
        case `ranger`:
            hero.skils.attack++;
            hero.skils.persuasion++;
            hero.skils.sneak++;
            break;
        case `rouge`:
            hero.skils.sneak += 3;
            hero.skils.attack--;
            break;
        default:
            character = prompt(`${character} is not valid option. Please chose one of the option (Warrior, Ranger, Rouge)`);
            break;
    }
}
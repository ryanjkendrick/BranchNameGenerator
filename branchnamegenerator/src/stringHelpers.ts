const illegalCharacters = [..."@!?#&|\\/^_$%*:"];
  
export function validateInput(value: string) : boolean {
    if (!value) {
        return true;
    }

    var validInput = true;

    illegalCharacters.forEach(element => {
        if (value.includes(element)) {
            validInput = false;
            return true; // Break loop
        }
    });

    return validInput;
}

export function convertSpaces(value: string | undefined) {
    if (!value) {
        return null;
    }

    let re = /\ /gi;

    return value.trim().replace(re, "-");
}
const illegalCharacters = [..."@!?#&|\\/^_$%*:"];

Date.prototype.toDateString = function(): string {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();

    return [this.getFullYear(),
            (mm>9 ? '' : '0') + mm,
            (dd>9 ? '' : '0') + dd
            ].join('');
};

Date.prototype.toTimeString = function(): string {
    var hh = this.getHours();
    var mm = this.getMinutes();

    return [
        (hh>9 ? '' : '0') + hh,
        (mm>9 ? '' : '0') + mm
    ].join('');
};
  
export function validateInput(value: string) : boolean {
    if (value === "" && value === null && value === undefined) {
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

export function dateString() :  string {
    var date = new Date();
    return date.toDateString();
}

export function timeString() :  string {
    var date = new Date();
    return date.toTimeString();
}


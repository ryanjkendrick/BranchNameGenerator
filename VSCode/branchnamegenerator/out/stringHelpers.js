"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertSpaces = exports.timeString = exports.dateString = exports.validateInput = void 0;
const illegalCharacters = [..."@!?#&|\\/^_$%*:"];
Date.prototype.toDateString = function () {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();
    return [this.getFullYear(),
        (mm > 9 ? '' : '0') + mm,
        (dd > 9 ? '' : '0') + dd
    ].join('');
};
Date.prototype.toTimeString = function () {
    var hh = this.getHours();
    var mm = this.getMinutes();
    return [
        (hh > 9 ? '' : '0') + hh,
        (mm > 9 ? '' : '0') + mm
    ].join('');
};
function validateInput(value) {
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
exports.validateInput = validateInput;
function dateString() {
    var date = new Date();
    return date.toDateString();
}
exports.dateString = dateString;
function timeString() {
    var date = new Date();
    return date.toTimeString();
}
exports.timeString = timeString;
function convertSpaces(value) {
    if (value === undefined || value === null) {
        return null;
    }
    let re = /\ /gi;
    return value.trim().replace(re, "-");
}
exports.convertSpaces = convertSpaces;
//# sourceMappingURL=stringHelpers.js.map
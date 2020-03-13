"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateInput(value) {
    var regex = new RegExp('[A-Z]+-\d+-.+');
    return regex.test(value);
}
exports.validateInput = validateInput;
//# sourceMappingURL=validateInput.js.map
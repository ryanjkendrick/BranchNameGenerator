"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.maintenance = void 0;
const vscode_1 = require("vscode");
const stringHelpers = require("./stringHelpers");
const branchName = require("./branchName");
function maintenance() {
    return __awaiter(this, void 0, void 0, function* () {
        var name = "maintenance/" + stringHelpers.dateString() + "-";
        const ticketId = yield vscode_1.window.showInputBox({
            placeHolder: 'Ticket ID: e.g. jira-123',
            validateInput: text => {
                return text !== "" && stringHelpers.validateInput(text) ? null : 'Not valid branch name syntax';
            }
        });
        const description = yield vscode_1.window.showInputBox({
            placeHolder: 'Description (optional): e.g. test-description',
            validateInput: text => {
                return stringHelpers.validateInput(text) ? null : 'Not valid branch name syntax';
            }
        });
        if (description !== null && description !== undefined && description !== "") {
            name += stringHelpers.convertSpaces(description) + "-";
        }
        branchName.showBranchName(name + stringHelpers.convertSpaces(ticketId));
    });
}
exports.maintenance = maintenance;
//# sourceMappingURL=maintenance.js.map
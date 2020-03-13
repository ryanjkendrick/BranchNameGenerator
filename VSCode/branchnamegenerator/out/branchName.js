"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
function showBranchName(branchName) {
    let copy = "Copy";
    const name = branchName.toLowerCase();
    vscode.window.showInformationMessage(name, copy)
        .then(selection => {
        if (selection === copy) {
            vscode.env.clipboard.writeText(name);
        }
    });
}
exports.showBranchName = showBranchName;
//# sourceMappingURL=branchName.js.map
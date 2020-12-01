"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showBranchName = void 0;
const vscode = require("vscode");
function showBranchName(branchName) {
    var _a;
    let copy = "Copy";
    const name = branchName.toLowerCase();
    const gitExtension = (_a = vscode.extensions.getExtension('vscode.git')) === null || _a === void 0 ? void 0 : _a.exports;
    if (gitExtension !== undefined && gitExtension !== null && gitExtension.getAPI(1).repositories.length > 0) {
        let createBranch = "Create Branch";
        vscode.window.showInformationMessage(name, copy, createBranch)
            .then(selection => {
            if (selection === copy) {
                vscode.env.clipboard.writeText(name);
            }
            else if (selection == createBranch) {
                const api = gitExtension.getAPI(1);
                const repo = api.repositories[0];
                repo.createBranch(name, true);
            }
        });
    }
    else {
        vscode.window.showInformationMessage(name, copy)
            .then(selection => {
            if (selection === copy) {
                vscode.env.clipboard.writeText(name);
            }
        });
    }
}
exports.showBranchName = showBranchName;
//# sourceMappingURL=branchName.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showBranchName = void 0;
const vscode = require("vscode");
function showBranchName(branchName) {
    let createBranch = "Create Branch";
    let copy = "Copy2";
    const name = branchName.toLowerCase();
    vscode.window.showInformationMessage(name, copy, createBranch)
        .then(selection => {
        var _a;
        if (selection === copy) {
            vscode.env.clipboard.writeText(name);
        }
        else if (selection == createBranch) {
            const gitExtension = (_a = vscode.extensions.getExtension('vscode.git')) === null || _a === void 0 ? void 0 : _a.exports;
            const api = gitExtension.getAPI(1);
            const repo = api.repositories[0];
            repo.createBranch(name, true);
        }
    });
}
exports.showBranchName = showBranchName;
//# sourceMappingURL=branchName.js.map
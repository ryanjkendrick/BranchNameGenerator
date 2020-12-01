"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode_1 = require("vscode");
const development_1 = require("./development");
const discovery_1 = require("./discovery");
const feature_1 = require("./feature");
const maintenance_1 = require("./maintenance");
const releases_1 = require("./releases");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode_1.commands.registerCommand('extension.branchNameGenerator', () => {
        const options = {
            development: development_1.development,
            discovery: discovery_1.discovery,
            feature: feature_1.feature,
            maintenance: maintenance_1.maintenance,
            releases: releases_1.releases
        };
        const quickPick = vscode_1.window.createQuickPick();
        quickPick.items = Object.keys(options).map(label => ({ label }));
        quickPick.onDidChangeSelection(selection => {
            if (selection[0]) {
                options[selection[0].label](context)
                    .catch(console.error);
            }
        });
        quickPick.onDidHide(() => quickPick.dispose());
        quickPick.show();
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map
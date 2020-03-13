import * as vscode from 'vscode';

export function showBranchName(branchName: string) {
    let copy = "Copy";
    const name = branchName.toLowerCase();

    vscode.window.showInformationMessage(name, copy)
        .then(selection => {
            if (selection === copy) {
                vscode.env.clipboard.writeText(name);
            }
        });
}
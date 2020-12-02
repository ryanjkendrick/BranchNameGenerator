import * as vscode from 'vscode';

export function showBranchName(branchName: string) {
    let copy = "Copy";
    const name = branchName.toLowerCase();
    const gitExtension = vscode.extensions.getExtension('vscode.git')?.exports;

    if (gitExtension !== undefined && gitExtension !== null && gitExtension.getAPI(1).repositories.length > 0) { // In a git repo
        let createBranch = "Create Branch";

        vscode.window.showInformationMessage(name, copy, createBranch)
        .then(selection => {
            if (selection === copy) {
                vscode.env.clipboard.writeText(name);
            }
            else if (selection == createBranch) {
                vscode.env.clipboard.writeText(name);

                vscode.window.showInformationMessage("Do you want to checkout this branch?", "Yes", "No")
                .then(checkoutSelection => {
                    const api = gitExtension.getAPI(1);
                    const repo = api.repositories[0];

                    repo.createBranch(name, checkoutSelection === "Yes");
                });
            }
        });
    }
    else { // Is not in a git repo
        vscode.window.showInformationMessage(name, copy)
        .then(selection => {
            if (selection === copy) {
                vscode.env.clipboard.writeText(name);
            }
        });
    }
}
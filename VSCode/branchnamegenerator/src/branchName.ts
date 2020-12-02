import * as vscode from 'vscode';

export function showBranchName(branchName: string) {
    let createBranch = "Create Branch";
    let copy = "Copy";
    const name = branchName.toLowerCase();

    vscode.window.showInformationMessage(name, copy, createBranch)
        .then(selection => {
            if (selection === copy) {
                vscode.env.clipboard.writeText(name);
            } else if (selection == createBranch) {
                vscode.env.clipboard.writeText(name);

                const gitExtension = vscode.extensions.getExtension('vscode.git')?.exports;
                const api = gitExtension.getAPI(1);
                const repo = api.repositories[0];

                vscode.window.showInformationMessage("Do you want to checkout this branch?", "Yes", "No")
                .then(checkoutSelection => {
                    repo.createBranch(name, checkoutSelection === "Yes");
                });
            }
        });
}
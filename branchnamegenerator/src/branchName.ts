import * as vscode from 'vscode';
import { GitExtension } from './git';

export function showBranchName(branchName: string) {
    const copyLabel = "Copy";
    const name = branchName.toLowerCase();

    if (isInGitRepo()) { // In a git repo
        const createBranchLabel = "Create Branch";

        vscode.window.showInformationMessage(name, copyLabel, createBranchLabel)
        .then(selection => {
            if (selection === copyLabel) {
                copyBranchName(name);
            }
            else if (selection === createBranchLabel) {
                copyBranchName(name);

                createBranch(name);
            }
        });
    }
    else { // Is not in a git repo
        vscode.window.showInformationMessage(name, copyLabel)
        .then(selection => {
            if (selection === copyLabel) {
                copyBranchName(name);
            }
        });
    }
}

function isInGitRepo() : boolean {
    const gitExtension = vscode.extensions.getExtension<GitExtension>('vscode.git')?.exports;

    if (gitExtension && gitExtension.enabled) {
        const api = gitExtension.getAPI(1);

        if (api) {
            return api.repositories.length > 0;
        }
    }

    return false;
}

function copyBranchName(name: string) {
    vscode.env.clipboard.writeText(name);
}

function createBranch(name: string) {
    vscode.window.showInformationMessage("Do you want to checkout this branch?", "Yes", "No")
        .then(checkoutSelection => {
            const gitExtension = vscode.extensions.getExtension<GitExtension>('vscode.git')?.exports;
            const api = gitExtension?.getAPI(1);
            const repo = api?.repositories[0];
            const shouldCheckout = checkoutSelection === "Yes";
            
            if (repo) {
                repo?.createBranch(name, shouldCheckout);
            }
            else {
                vscode.window.showErrorMessage("An error occurred creating the branch.");
            }            
        });
}
import { window } from 'vscode';
import * as stringHelpers from './stringHelpers';
import * as branchName from './branchName';

export async function releases() {
    var name = "releases/" + stringHelpers.dateString() + "-" + stringHelpers.timeString();
    const description = await window.showInputBox({
		placeHolder: 'Description (optional): e.g. test-description',
            validateInput: text => {
                return stringHelpers.validateInput(text) ? null : 'Not valid branch name syntax';
            }
    });

    if (description !== null && description !== undefined && description !== "") {
        name += "-" + stringHelpers.convertSpaces(description);
    }

    branchName.showBranchName(name);
}
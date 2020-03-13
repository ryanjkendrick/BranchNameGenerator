import { window } from 'vscode';
import * as stringHelpers from './stringHelpers';
import * as branchName from './branchName';

export async function discovery() {
    var name = "discovery/" + stringHelpers.dateString() + "-";
    const description = await window.showInputBox({
		placeHolder: 'Description (optional): e.g. test-description',
		validateInput: text => {
			return stringHelpers.validateInput(text) ? null : 'Not valid branch name syntax';
		}
    });

    branchName.showBranchName(name + description);
}
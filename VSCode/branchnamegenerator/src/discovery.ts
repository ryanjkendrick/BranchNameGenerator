import { window } from 'vscode';
import * as stringHelpers from './stringHelpers';
import * as branchName from './branchName';

export async function discovery() {
    var name = "discovery/" + stringHelpers.dateString() + "-";
    const description = await window.showInputBox({
		placeHolder: 'Description: e.g. test-description',
		validateInput: text => {
			return text !== "" && stringHelpers.validateInput(text) ? null : 'Not valid branch name syntax';
		}
    });

    branchName.showBranchName(name + stringHelpers.convertSpaces(description));
}
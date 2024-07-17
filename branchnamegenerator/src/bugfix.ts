import { window } from 'vscode';
import * as stringHelpers from './stringHelpers';
import * as branchName from './branchName';

export async function bugfix() {
	const ticketId = await window.showInputBox({
		placeHolder: 'Ticket ID: e.g. jira-123',
		validateInput: (text: string) => {
			return text.trim() !== "" && stringHelpers.validateInput(text) ? null : 'Not valid branch name syntax';
		}
    });
    const description = await window.showInputBox({
		placeHolder: 'Description (optional): e.g. test-description',
		validateInput: (text: string) => {
			return stringHelpers.validateInput(text) ? null : 'Not valid branch name syntax';
		}
    });
    
    var name = "bugfix/" + stringHelpers.convertSpaces(ticketId);

    if (description && description.trim() !== "") {
        name += "-" + stringHelpers.convertSpaces(description);
    }

    branchName.showBranchName(name);
}
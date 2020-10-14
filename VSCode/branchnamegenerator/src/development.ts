import { window } from 'vscode';
import * as stringHelpers from './stringHelpers';
import * as branchName from './branchName';

export async function development() {
    var name = "development/" + stringHelpers.dateString() + "-";
	const ticketId = await window.showInputBox({
		placeHolder: 'Ticket ID: e.g. jira-123',
		validateInput: text => {
			return text !== "" && stringHelpers.validateInput(text) ? null : 'Not valid branch name syntax';
		}
    });
    const description = await window.showInputBox({
		placeHolder: 'Description (optional): e.g. test-description',
			validateInput: text => {
				return stringHelpers.validateInput(text) ? null : 'Not valid branch name syntax';
			}
    });
    
    if (description !== null && description !== undefined && description !== "") {
        name += stringHelpers.convertSpaces(description) + "-";
    }

    branchName.showBranchName(name + stringHelpers.convertSpaces(ticketId));
}
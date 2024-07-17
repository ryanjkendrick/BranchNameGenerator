import { window, commands, ExtensionContext } from 'vscode';
import { develop } from './develop';
import { feature } from './feature';
import { story } from './story';
import { bugfix } from './bugfix';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: ExtensionContext) {
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = commands.registerCommand('branchnamegenerator.generateBranch', () => {
		const options: { [key: string]: (context: ExtensionContext) => Promise<void> } = {
			develop,
			feature,
			story,
			bugfix
		};
		const quickPick = window.createQuickPick();
		quickPick.items = Object.keys(options).map(label => ({ label }));
		quickPick.onDidChangeSelection(selection => {
			if (selection[0]) {
				options[selection[0].label](context)
					.catch(console.error);
					
				quickPick.hide();
			}
		});
		quickPick.onDidHide(() => quickPick.dispose());
		quickPick.show();
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const command = 'testextcommand.installPkg';
	const defaultTestExtID = 'equinusocio.vsc-material-theme-icons';

	const commandHandler = (ext: string = defaultTestExtID) => {
		installExtension(ext);
	};

	let disposable = vscode.commands.registerCommand(command, commandHandler);

	context.subscriptions.push(disposable);
}

async function installExtension(vsix: string): Promise<void> {
	if(vsix === '') {
		vscode.window.showErrorMessage('ID is empty');
	} else {
		await vscode.commands.executeCommand('workbench.extensions.installExtension', vsix);
	}
}

export function deactivate() {}
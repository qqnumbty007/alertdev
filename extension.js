'use strict';
const vscode = require('vscode');

class messageLog {
	constructor() {
		this.Console = [];
		this.Error = [];
		this.test = [];

	}
}

class AlertEditor {
	constructor() {
		this._oldLength = 0;
		this.Error = [];
		this.Warn = [];
		this._fileEditAnother = "";
		this._listUri = [];

		vscode.workspace.onDidChangeTextDocument((e) => {
			console.log(e.document.version)
			if(e.contentChanges.length > 0 && e.document.isDirty === false && e.document.version > 2){
				console.log(this)
				vscode.workspace.openTextDocument(e.document.uri).then(t => console.log(t));
				this.Dialog(e.contentChanges[0].text, e.document.fileName);
			}
		});

	}


	whenOpenFileSameAnother()  {
		vscode.workspace.onDidOpenTextDocument((e) => {
			console.log(e);
		})
	}
	Dialog(textAdd, pathx) {
		vscode.window.showInformationMessage("มีการแก้ไขที่ไฟล์ \n"+pathx+"\n"+textAdd, { modal: true }, "Reload").then(value => {
			this.testMothod(value, textAdd);
		});
	}

	testMothod(s, textAdd) {
		if(s === "Reload"){
			console.log("Hello")
		} else{
			console.log(textAdd);
		}
	}

	test3(Uri){
		vscode.workspace.fs.stat(Uri).then((t) => {
			console.log(t.mtime.valueOf());
		});
	}
	dispose() {
		// this.test2.dispose();
		// this._onOpenTextDocumentdispose();
		// this._onCloseTextDocument.dispose();
		// this._onTextDocumentChanged.forEach(e => e.dispose());
	}

}
// test();
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	/*
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "alertdev" is now active!');
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.helloWorld', function () {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		

		vscode.window.showInformationMessage('test');
	});
	*/
	// console.log(context)
	context.subscriptions.push(new AlertEditor());
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() { }

exports.deactivate = deactivate;

// module.exports = {
// 	activate,
// 	deactivate
// }

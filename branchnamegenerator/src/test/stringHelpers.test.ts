import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import * as stringHelpers from '../stringHelpers';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all stringHelpers tests.');

	test('convertSpaces() test', () => {
		assert.strictEqual(stringHelpers.convertSpaces("hello world"), "hello-world");
	});
});
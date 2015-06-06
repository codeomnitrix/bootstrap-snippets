/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window */

/** Simple extension that adds a "File > Hello World" menu item */
define(function (require, exports, module) {
	"use strict";
	var keyBoardShortCutPanel = "Ctrl-Shift-P";
	var keyBoardShortCutModal = "Ctrl-Shift-M";
	var keyBoardShortCutNav = "Ctrl-Shift-N";
	var keyBoardShortCutInputGroup = "Ctrl-Shift-I";
	var keyBoardShortCutHelp = "Ctrl-`";
	var CommandManager = brackets.getModule("command/CommandManager");
	var kbManager = brackets.getModule("command/KeyBindingManager");
	var edManager = brackets.getModule("editor/EditorManager");

//append a panel to current editor
	function appendPanel(){
		/*jQuery('<div/>', {
		  id: "foo",
		  text: "Get into Facebook"
		  }).appendTo("body");*/
		var panelSeklly = '<div class="panel panel-default">\n' +
				  '	<div class="panel-heading">\n' + 
				  '		<h3 class="panel-title">Panel title</h3>\n' + 
			  	  '	</div>\n' + 
	  			  '	<div class="panel-body">\n' + 
    				  '		Panel content\n' + 
  				  '	</div>\n' + 
				  '	<div class="panel-footer">Panel footer</div>\n' + 
				'</div>';
		//window.alert("Hello");
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}	
	}
//append a modal to the current editor
	function appendModal(){
		var panelSeklly = '<div class="modal fade">\n' + 
  '	<div class="modal-dialog">\n' + 
    '		<div class="modal-content">\n' +
      '			<div class="modal-header">\n' + 
        '				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n' + 
        '				<h4 class="modal-title">Modal title</h4>\n' + 
      '			</div>\n' + 
      '			<div class="modal-body">\n' + 
        '				<p>One fine body&hellip;</p>\n' + 
      '			</div>\n' + 
      '			<div class="modal-footer">\n' + 
        '				<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\n' + 
        '				<button type="button" class="btn btn-primary">Save changes</button>\n' + 
      '			</div>\n' + 
    '		</div>\n' + 
  '	</div>\n' + 
'</div>';
		//			window.alert("Hello");
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}	
	}

	function appendNav(){
		var panelSeklly = '<nav class="navbar navbar-default">\n'+
'	<div class="container-fluid">\n'+
'		<div class="navbar-header">\n'+
'			<a class="navbar-brand" href="#">WebSiteName</a>\n'+
'		</div>\n'+
'		<div>\n'+
'			<ul class="nav navbar-nav">\n'+
'				<li class="active"><a href="#">Home</a></li>\n'+
'				<li><a href="#">Page 1</a></li>\n'+
'				<li><a href="#">Page 2</a></li>\n' +
'				<li><a href="#">Page 3</a></li>\n' +
'			</ul>\n'+
'		</div>\n'+
'	</div>\n'+
'</nav>';		
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}
	}

	function appendInputGroup(){
		var panelSeklly = '<div class="input-group">\n' + 
'  <span class="input-group-addon">$</span>\n' + 
'  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">\n' + 
'  <span class="input-group-addon">.00</span>\n' + 
'</div>';
		var editor = edManager.getCurrentFullEditor();
		if(editor){
			var insertionPos = editor.getCursorPos();
			editor.document.replaceRange(panelSeklly, insertionPos);
		}		
	}
	
	function showHelp(){
		window.alert("Ctrl-Alt-P : Panel\nCtrl-Alt-M: Modal\nCtrl-Alt-I: Input Groups\nCtrl-Alt-N: Navbar");		
	}

	var COMMAND_ID_P = "bootstrapsnippets.getPanel";
	var COMMAND_ID_M = "bootstrapsnippets.getModal";
	var COMMAND_ID_N = "bootstrapsnippets.getNav";
	var COMMAND_ID_I = "bootstrapsnippets.getInputGroup";
	var COMMAND_ID_H = "bootstrapsnippets.help";

	CommandManager.register("Panel", COMMAND_ID_P, appendPanel);

	kbManager.addBinding(COMMAND_ID_P, keyBoardShortCutPanel);

	CommandManager.register("Help", COMMAND_ID_H, showHelp);

	kbManager.addBinding(COMMAND_ID_H, keyBoardShortCutHelp);
	
	CommandManager.register("Modal", COMMAND_ID_M, appendModal);

	kbManager.addBinding(COMMAND_ID_M, keyBoardShortCutModal);	

	CommandManager.register("Nav", COMMAND_ID_N, appendNav);

	kbManager.addBinding(COMMAND_ID_N, keyBoardShortCutNav);
	CommandManager.register("InputGroup", COMMAND_ID_I, appendInputGroup);

	kbManager.addBinding(COMMAND_ID_I, keyBoardShortCutInputGroup);
});

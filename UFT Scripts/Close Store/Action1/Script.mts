
'Validation if login is successful
'Environment("stepnum") = Environment("stepnum") + 1
If JavaDialog("Back Office Window").JavaList("lstBackOfficeMainMenu").Exist(3) Then
	LogReport "PASSED", "Step "&Environment("stepnum")& " Validate Login is successful" , "Back Office options list is displayed", "Back Office options list IS displayed", ""
Else
	LogReport "FAILED", "Step "&Environment("stepnum")& " Validate Login is successful" , "Back Office options list is displayed", "Back Office options list NOT displayed", Environment("screenshotfolder")
End If


'Select "Open/Close Options" from the list and press Enter.
WaitForObject JavaDialog("Back Office Window").JavaList("lstBackOfficeMainMenu")

'Environment("stepnum") = Environment("stepnum") + 1
JavaDialog("Back Office Window").JavaList("lstBackOfficeMainMenu").Select Environment("mainmenuitem")
LogReport "Done", "Step "&Environment("stepnum")& " Select 'Open Close Options' from the list", "Open Close options list displayed", "", ""
JavaDialog("Back Office Window").JavaButton("btnOk").Click


'Select "Store Close" option and press "Ok" button.
WaitForObject JavaDialog("Back Office Window").JavaList("lstOpenCloseOptions")

'Environment("stepnum") = Environment("stepnum") + 1
JavaDialog("Back Office Window").JavaList("lstOpenCloseOptions").Select Environment("opencloseitem")
LogReport "Done", "Step "&Environment("stepnum")& " Select 'Store Close' from the list and click OK", "Message 'Do you want to close this store?' is displayed", "", ""
JavaDialog("Back Office Window").JavaButton("btnOk").Click


'Press "Yes" button to confirm the closing.
'Environment("stepnum") = Environment("stepnum") + 1
WaitForObject JavaDialog("Store Close Window").JavaButton("btnYes")
JavaDialog("Store Close Window").JavaButton("btnYes").Click
LogReport "Done", "Step "&Environment("stepnum")& " Click YES button to confirm closing", "Yes button is clicked", "", ""


'Enter the closing message and then press "Ok" button.
'Environment("stepnum") = Environment("stepnum") + 1
WaitForObject JavaDialog("Store Close Window").JavaEdit("txtClosingMessage")
JavaDialog("Store Close Window").JavaEdit("txtClosingMessage").Set Environment("closingcomment")
LogReport "Done", "Step "&Environment("stepnum")& " Input Closing Message", "Closing Message entered", "", ""


'Press "Ok" 
'Environment("stepnum") = Environment("stepnum") + 1
JavaDialog("Store Close Window").JavaButton("btnOk").Click
LogReport "Done", "Step "&Environment("stepnum")& " Click OK button", "OK button is clicked", "", ""


If JavaDialog("Unable to Print Window").JavaEdit("txtUnableToPrint").Exist(3) Then
	JavaDialog("Unable to Print Window").JavaButton("btnSkipPrinting").Click
End If


'save first file
If Window("Save File Dialog").Dialog("Save Print Output As").Exist(5) Then
	Window("Save File Dialog").Dialog("Save Print Output As").WinEdit("txtFilename").Set Environment("firstfile")
	wait 2
	Window("Save File Dialog").Dialog("Save Print Output As").WinButton("btnSave").Click


	'save second file
	If Window("Save File Dialog").Dialog("Save Print Output As").Exist(5) Then
		Window("Save File Dialog").Dialog("Save Print Output As").WinEdit("txtFilename").Set Environment("secondfile")
		wait 2
		Window("Save File Dialog").Dialog("Save Print Output As").WinButton("btnSave").Click
	
	End If
	'Environment("stepnum") = Environment("stepnum") + 1
	LogReport "Done", "Step "&Environment("stepnum")& " Save Files", "Files saved", "", ""

End If

'Click Register button
'Environment("stepnum") = Environment("stepnum") + 1
WaitForObject JavaDialog("Controls - Home").JavaButton("btnRegister")
JavaDialog("Controls - Home").JavaButton("btnRegister").Click
LogReport "Done", "Step "&Environment("stepnum")& " Click Register Button" , "Register button is clicked", "", ""


'validate Store is closed message is displayed
'Environment("stepnum") = Environment("stepnum") + 1
If JavaDialog("Store Close Window").JavaEdit("txtStoreClosed").Exist(2) Then
	LogReport "PASSED", "Step "&Environment("stepnum")& " Validate Store is Closed message is displayed" , "Store is Closed message is displayed", "Store is Closed message IS displayed", Environment("screenshotfolder")
Else
	LogReport "FAILED", "Step "&Environment("stepnum")& " Validate Store is Closed message is displayed" , "Store is Closed message is displayed", "Store is Closed message is NOT displayed", Environment("screenshotfolder")
End If


'click ok on message
JavaDialog("Back Office Window").JavaButton("btnOk").Click


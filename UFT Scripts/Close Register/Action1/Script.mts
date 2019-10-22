
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


'Select "Register Close" from the list and press Enter.
WaitForObject JavaDialog("Back Office Window").JavaList("lstOpenCloseOptions")

'Environment("stepnum") = Environment("stepnum") + 1
JavaDialog("Back Office Window").JavaList("lstOpenCloseOptions").Select Environment("opencloseitem")
LogReport "Done", "Step "&Environment("stepnum")& " Select 'Register Close' from the list and click OK", "Message 'Do you want to close this register?' is displayed", "", ""
JavaDialog("Back Office Window").JavaButton("btnOk").Click


'Press enter to confirm the closing.
'Environment("stepnum") = Environment("stepnum") + 1
WaitForObject JavaDialog("Register Close Window").JavaButton("btnYes")
JavaDialog("Register Close Window").JavaButton("btnYes").Click
LogReport "Done", "Step "&Environment("stepnum")& " Click YES button to confirm closing", "Yes button is clicked", "", ""	


'validate popup message is displayed: "All stored authorizations have been successfully forwarded". 
'Environment("stepnum") = Environment("stepnum") + 1
If JavaDialog("Register Close Window").JavaStaticText("stxtForwardStoredAuthorizations").Exist(2) Then
	LogReport "PASSED", "Step "&Environment("stepnum")& " Validate popup message is displayed" , "Message:'All stored authorizations have been successfully forwarded' is displayed", "Message:'All stored authorizations have been successfully forwarded' IS displayed", ""
Else
	LogReport "FAILED", "Step "&Environment("stepnum")& " Validate popup message is displayed" , "Message:'All stored authorizations have been successfully forwarded' is displayed", "Message:'All stored authorizations have been successfully forwarded' is NOT displayed", Environment("screenshotfolder")
End If


'Press "Ok" 
'Environment("stepnum") = Environment("stepnum") + 1
JavaDialog("Register Close Window").JavaButton("btnOk").Click
LogReport "Done", "Step "&Environment("stepnum")& " Click OK button", "OK button is clicked", "", ""	


'handler for till count screen
Select Case Lcase(Environment("tillcountexist"))

	Case "yes"
	
		'validate Count summary screen appears.
		'Environment("stepnum") = Environment("stepnum") + 1
		If JavaDialog("Register Close Window").JavaList("lstCountSummary").Exist(3) Then
			LogReport "PASSED", "Step "&Environment("stepnum")& " Validate Count summary screen is displayed" , "Count summary screen is displayed", "Count summary screen IS displayed", Environment("screenshotfolder")
		Else
			LogReport "FAILED", "Step "&Environment("stepnum")& " Validate Count summary screen is displayed" , "Count summary screen is displayed", "Count summary screen is NOT displayed", Environment("screenshotfolder")
		End If
		
		
		'Press "Count Selected" button  
		'Environment("stepnum") = Environment("stepnum") + 1
		WaitForObject JavaDialog("Register Close Window").JavaButton("btnCountSelected")
		JavaDialog("Register Close Window").JavaButton("btnCountSelected").Click
		LogReport "Done", "Step "&Environment("stepnum")& " Click Count Selected button", "Count Selected button is clicked", "", ""	
		
		'fill in each tender group amount
		InputDenomination Environment("denomination") , Environment("denominationamount")
		
		
		'press "Summary" button.
		'Environment("stepnum") = Environment("stepnum") + 1
		JavaDialog("Register Close Window").JavaButton("btnSummary").Click
		LogReport "Done", "Step "&Environment("stepnum")& " Click Summary button", "Summary button is clicked", "", ""
		
		
		'validate Count summary screen appears.
		'Environment("stepnum") = Environment("stepnum") + 1
		If JavaDialog("Register Close Window").JavaList("lstCountSummary").Exist(3) Then
			LogReport "PASSED", "Step "&Environment("stepnum")& " Validate Count summary screen is displayed" , "Count summary screen is displayed", "Count summary screen IS displayed", Environment("screenshotfolder")
		Else
			LogReport "FAILED", "Step "&Environment("stepnum")& " Validate Count summary screen is displayed" , "Count summary screen is displayed", "Count summary screen is NOT displayed", Environment("screenshotfolder")
		End If
		
		
		'Click Done Counting
		wait 2
		'Environment("stepnum") = Environment("stepnum") + 1
		JavaDialog("Register Close Window").JavaButton("btnDoneCounting").Click
		LogReport "Done", "Step "&Environment("stepnum")& " Click Done Counting button", "Done Counting Button is clicked", "", ""
		
		
		
		If JavaDialog("Register Close Window").JavaStaticText("stxtDeposit").Exist(2) Then
			
			'Environment("stepnum") = Environment("stepnum") + 1
			JavaDialog("Register Close Window").JavaButton("btnYes").Click
			LogReport "Done", "Step "&Environment("stepnum")& " Click YES to accept till count discrepancies", "YES button is clicked ", "", ""
		Else 
		
			'validate message of "Till in Balance" is displayed.
			'Environment("stepnum") = Environment("stepnum") + 1
			If JavaDialog("Register Close Window").JavaEdit("txtExpectedMessageTillisBalance").Exist(3) Then
				LogReport "PASSED", "Step "&Environment("stepnum")& " Validate message 'Till in Balance' is displayed" , "Message 'Till in Balance' is displayed", "Message 'Till in Balance' IS displayed", Environment("screenshotfolder")
			Else
				LogReport "FAILED", "Step "&Environment("stepnum")& " Validate message 'Till in Balance' is displayed" , "Message 'Till in Balance' is displayed", "Message 'Till in Balance' is NOT displayed", Environment("screenshotfolder")
			End If
			
			
			'Environment("stepnum") = Environment("stepnum") + 1
			JavaDialog("Register Close Window").JavaButton("btnOk").Click
			LogReport "Done", "Step "&Environment("stepnum")& " Click OK", "OK button is clicked ", "", ""
			
		End If

	
	Case "no"
	
		If JavaDialog("Register Close Window").JavaList("lstCountSummary").Exist(3) Then
			LogReport "FAILED", "Step "&Environment("stepnum")& " Validate Count summary screen is not displayed" , "Count summary screen is not displayed", "Count summary screen IS displayed", Environment("screenshotfolder")
		Else
			LogReport "PASSED", "Step "&Environment("stepnum")& " Validate Count summary screen is not displayed" , "Count summary screen is not displayed", "Count summary screen is NOT displayed", Environment("screenshotfolder")
		End If
	
End Select

If JavaDialog("Unable to Print Window").JavaEdit("txtUnableToPrint").Exist(3) Then
	JavaDialog("Unable to Print Window").JavaButton("btnSkipPrinting").Click
End If


'Click Register button
'Environment("stepnum") = Environment("stepnum") + 1
WaitForObject JavaDialog("Controls - Home").JavaButton("btnRegister")
JavaDialog("Controls - Home").JavaButton("btnRegister").Click
LogReport "Done", "Step "&Environment("stepnum")& " Click Register Button" , "Register button is clicked", "", ""


'validate Register is closed message is displayed
'Environment("stepnum") = Environment("stepnum") + 1
If JavaDialog("Register Close Window").JavaEdit("txtRegisterClosed").Exist(2) Then
	LogReport "PASSED", "Step "&Environment("stepnum")& " Validate Register is Closed message is displayed" , "Register is Closed message is displayed", "Register is Closed message IS displayed", Environment("screenshotfolder")
Else
	LogReport "FAILED", "Step "&Environment("stepnum")& " Validate Register is Closed message is displayed" , "Register is Closed message is displayed", "Register is Closed message is NOT displayed", Environment("screenshotfolder")
End If


'click ok on message
JavaDialog("Back Office Window").JavaButton("btnOk").Click


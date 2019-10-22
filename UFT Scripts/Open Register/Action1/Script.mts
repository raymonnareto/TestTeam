
'Validation if login is successful
'Environment("stepnum") = Environment("stepnum") + 1
If JavaDialog("Back Office Window").JavaList("lstBackOfficeMainMenu").Exist(3) Then
	LogReport "PASSED", "Step "&Environment("stepnum")& " Validate Login is successful" , "Back Office options list is displayed", "Back Office options list IS displayed", Environment("screenshotfolder")
Else
	LogReport "FAILED", "Step "&Environment("stepnum")& " Validate Login is successful" , "Back Office options list is displayed", "Back Office options list NOT displayed", Environment("screenshotfolder")
End If


'Select "Open/Close Options" from the list and press Enter.
WaitForObject JavaDialog("Back Office Window").JavaList("lstBackOfficeMainMenu")

'Environment("stepnum") = Environment("stepnum") + 1
JavaDialog("Back Office Window").JavaList("lstBackOfficeMainMenu").Select Environment("mainmenuitem")
LogReport "Done", "Step "&Environment("stepnum")& " Select 'Open Close Options' from the list", "Open Close options list displayed", "", ""
JavaDialog("Back Office Window").JavaButton("btnOk").Click


'Select "Register Open" from the list and press Enter.
WaitForObject JavaDialog("Back Office Window").JavaList("lstOpenCloseOptions")

'Environment("stepnum") = Environment("stepnum") + 1
JavaDialog("Back Office Window").JavaList("lstOpenCloseOptions").Select Environment("opencloseitem")
LogReport "Done", "Step "&Environment("stepnum")& " Select 'Register Open' from the list and click OK", "Message 'Do you want to open this register?' is displayed", "", ""
JavaDialog("Back Office Window").JavaButton("btnOk").Click


'Press enter to confirm the opening.
'Environment("stepnum") = Environment("stepnum") + 1
WaitForObject JavaDialog("Register Opening Window").JavaButton("btnYes")
JavaDialog("Register Opening Window").JavaButton("btnYes").Click
LogReport "Done", "Step "&Environment("stepnum")& " Click YES button to confirm opening", "Yes button is clicked", "", ""	


'handler for till count screen
Select Case Lcase(Environment("tillcountexist"))

	Case "yes"
		
		If JavaDialog("Register Opening Window").JavaObject("joTillCountPage").Exist(3) Then
			LogReport "PASSED", "Step "&Environment("stepnum")& " Validate Till Count is displayed" , "Till Count is displayed", "Till Count IS displayed", Environment("screenshotfolder")
		Else
			LogReport "FAILED", "Step "&Environment("stepnum")& " Validate Till Count is displayed" , "Till Count is displayed", "Till Count is NOT displayed", Environment("screenshotfolder")
		End If

		'Enter the amount for each denomination and then press "Done Counting" (F2).
		If Trim(Environment("denomination")) <> "" Then
			InputDenomination Environment("denomination") , Environment("denominationamount")
		End If
		
		wait 2
		'Environment("stepnum") = Environment("stepnum") + 1
		JavaDialog("Register Opening Window").JavaButton("btnDoneCounting").Click
		LogReport "Done", "Step "&Environment("stepnum")& " Click Done Counting button", "Done Counting Button is clicked", "", ""
		
		
		If JavaDialog("Register Opening Window").JavaStaticText("stxtVerifyBeginCount").Exist(3) Then
			'Environment("stepnum") = Environment("stepnum") + 1
			JavaDialog("Register Opening Window").JavaButton("btnYes").Click
			LogReport "Done", "Step "&Environment("stepnum")& " Click YES button to confirm begin count", "YES Button is clicked", "", ""
			
		End If
		
	Case "no"
	
		If JavaDialog("Register Opening Window").JavaObject("joTillCountPage").Exist(3) Then
			LogReport "FAILED", "Step "&Environment("stepnum")& " Validate Till Count is not displayed" , "Till Count is not displayed", "Till Count IS displayed", Environment("screenshotfolder")
		Else
			LogReport "PASSED", "Step "&Environment("stepnum")& " Validate Till Count is not displayed" , "Till Count is not displayed", "Till Count is NOT displayed", Environment("screenshotfolder")
		End If
	
End Select


If JavaDialog("Unable to Print Window").JavaEdit("txtUnableToPrint").Exist(3) Then
	JavaDialog("Unable to Print Window").JavaButton("btnSkipPrinting").Click
End If


'validate open close is displayed
'Environment("stepnum") = Environment("stepnum") + 1
If JavaDialog("Back Office Window").JavaList("lstOpenCloseOptions").Exist(3) Then
	LogReport "PASSED", "Step "&Environment("stepnum")& " Validate Open Close Options displayed" , "Open Close Options list is displayed", "Open Close Options list IS displayed", Environment("screenshotfolder")
Else
	LogReport "FAILED", "Step "&Environment("stepnum")& " Validate Open Close Options displayed" , "Open Close Options list is displayed", "Open Close Options list NOT displayed", Environment("screenshotfolder")
End If


'get back to login page
JavaDialog("Back Office Window").JavaButton("btnBack").Click


JavaDialog("Back Office Window").JavaButton("btnBack").Click


'Validation if login is successful
'Environment("stepnum") = Environment("stepnum") + 1
If JavaDialog("Back Office Window").JavaList("lstBackOfficeMainMenu").Exist(3) Then
	LogReport "PASSED", "Step "&Environment("stepnum")& " Validate Login is successful" , "Back Office options list is displayed", "Back Office options list IS displayed", Environment("screenshotfolder")
Else
	LogReport "FAILED", "Step "&Environment("stepnum")& " Validate Login is successful" , "Back Office options list is displayed", "Back Office options list is NOT displayed", Environment("screenshotfolder")
End If


'Select "Journal" and press Enter
WaitForObject JavaDialog("Back Office Window").JavaList("lstBackOfficeMainMenu")

'Environment("stepnum") = Environment("stepnum") + 1
JavaDialog("Back Office Window").JavaList("lstBackOfficeMainMenu").Select Environment("mainmenuitem")
LogReport "Done", "Step "&Environment("stepnum")& " Select 'Journal' from the list", "Journal is selected", "", ""
JavaDialog("Back Office Window").JavaButton("btnOk").Click


' validate Journal options list displayed
'Environment("stepnum") = Environment("stepnum") + 1
If JavaDialog("Back Office Window").JavaList("lstJournal").Exist(3) Then
	LogReport "PASSED", "Step "&Environment("stepnum")& " Validate Journal options list is displayed" , "Journal options list is displayed", "Journal options list IS displayed", Environment("screenshotfolder")
Else
	LogReport "FAILED", "Step "&Environment("stepnum")& " Validate Journal options list is displayed" , "Journal options list is displayed", "Journal options list is NOT displayed", Environment("screenshotfolder")
End If


'Select "Electronic journal" and press OK
'Environment("stepnum") = Environment("stepnum") + 1

WaitForObject JavaDialog("Back Office Window").JavaList("lstJournal")
JavaDialog("Back Office Window").JavaList("lstJournal").Select Environment("journaloptions")
LogReport "Done", "Step "&Environment("stepnum")& " Select 'Electronic Journal' from the list", "Electronic Journal is selected", "", ""
JavaDialog("Back Office Window").JavaButton("btnOk").Click


'Filled the required fields and press "Process"
'Environment("stepnum") = Environment("stepnum") + 1
WaitForObject JavaDialog("Electronic Journal Window").JavaEdit("txtTicketID")
JavaDialog("Electronic Journal Window").JavaEdit("txtTicketID").Set Environment("ticketid")
LogReport "Done", "Step "&Environment("stepnum")& " Input Ticket ID of transaction to be searched", "Ticket ID entered", "", ""


'Environment("stepnum") = Environment("stepnum") + 1
JavaDialog("Electronic Journal Window").JavaButton("btnProcess").Click
LogReport "Done", "Step "&Environment("stepnum")& " Click Process Button", "Process button is clicked", "", ""


' validate Transaction list displayed
'Environment("stepnum") = Environment("stepnum") + 1
If JavaDialog("Electronic Journal Window").JavaList("lstTransactionList").Exist(3) Then
	LogReport "PASSED", "Step "&Environment("stepnum")& " Validate Transaction list is displayed" , "Transaction list is displayed", "Transaction list IS displayed", Environment("screenshotfolder")
Else
	LogReport "FAILED", "Step "&Environment("stepnum")& " Validate Transaction list is displayed" , "Transaction list is displayed", "Transaction list is NOT displayed", Environment("screenshotfolder")
End If



If JavaDialog("title:= Xstore").Exist(5) = False Then
	
	'Environment("stepnum") = Environment("stepnum") + 1
	'Open Xstore App
	SystemUtil.Run "C:\environment\environment.bat"
	
	WaitForObject JavaDialog("title:= Xstore")
	LogReport "Done", "Step "&Environment("stepnum")& " Open Xstore App" , "Xstore Application is opened", "", ""
	
	
	If JavaDialog("Hardware Error Window (1st window)").JavaStaticText("stxtHardwareError").Exist(5) Then
	
		'Environment("stepnum") = Environment("stepnum") + 1
		JavaDialog("Hardware Error Window (1st window)").JavaButton("btnOk").Click
		LogReport "Done", "Step "&Environment("stepnum")& " Click OK button in Hardware Error Message" , "OK button is clicked", "", ""
		
	End If

End If


'recovery scenario
If Not JavaDialog("Login").JavaEdit("txtAuthentication").Exist(3) Then
	'Call Func_CloseXstore("C:\environment\tmp")
	Call Func_CloseXstore("C:\xstore\tmp")
	
	wait 5
	'reopen Xstore
	JavaDialog("Xenvironment").JavaButton("btnStartPos").Click
	
	'SystemUtil.Run "C:\environment\environment.bat"

	WaitForObject JavaDialog("title:= Xstore")
	LogReport "Done", "Step "&Environment("stepnum")& " Open Xstore App" , "Xstore Application is opened", "", ""
	
	
	If JavaDialog("Hardware Error Window (1st window)").JavaStaticText("stxtHardwareError").Exist(5) Then
	
		'Environment("stepnum") = Environment("stepnum") + 1
		JavaDialog("Hardware Error Window (1st window)").JavaButton("btnOk").Click
		LogReport "Done", "Step "&Environment("stepnum")& " Click OK button in Hardware Error Message" , "OK button is clicked", "", ""
		
	End If
	
End If


'Select "Item Lookup" (F9).
WaitForObject JavaDialog("Controls - Home").JavaButton("btnItemLookup")
'Environment("stepnum") = Environment("stepnum") + 1
JavaDialog("Controls - Home").JavaButton("btnItemLookup").Click
LogReport "Done", "Step "&Environment("stepnum")& " Click Item Lookup button", "Item Lookup button is clicked", "", ""


'validate item lookup opened
'Environment("stepnum") = Environment("stepnum") + 1

If JavaDialog("Item Lookup Window").JavaEdit("txtItemID").Exist(5) Then
	LogReport "PASSED", "Step "&Environment("stepnum")& " Validate Item Lookup screen is open" , "Item Lookup screen is open", "Item Lookup screen IS open", ""
Else
	LogReport "FAILED", "Step "&Environment("stepnum")& " Validate Item Lookup screen is open" , "Item Lookup screen is open", "Item Lookup screen is NOT open", Environment("screenshotfolder")
End If


'Fill in Item ID field typing an item code and press "Process" (F8). 
'Environment("stepnum") = Environment("stepnum") + 1
JavaDialog("Item Lookup Window").JavaEdit("txtItemID").Set Environment("itemid")
LogReport "Done", "Step "&Environment("stepnum")& " Input Item ID", "Item ID entered", "", ""

'Environment("stepnum") = Environment("stepnum") + 1
JavaDialog("Item Lookup Window").JavaButton("btnProcess").Click
LogReport "Done", "Step "&Environment("stepnum")& " Click Process button", "Process button is clicked", "", ""

'screenshot  list
'Environment("stepnum") = Environment("stepnum") + 1
WaitForObject JavaDialog("Item Lookup Window").JavaList("lstItemList")
LogReport "Done", "Step "&Environment("stepnum")& " Items List", "Items list is displayed", "", Environment("screenshotfolder")

'press ok on item list
'Environment("stepnum") = Environment("stepnum") + 1
JavaDialog("Item Lookup Window").JavaButton("btnOk").Click
LogReport "Done", "Step "&Environment("stepnum")& " Click OK button", "OK button is clicked", "", ""

wait 2
'Environment("stepnum") = Environment("stepnum") + 1
itemIDActual = JavaDialog("Item Lookup Window").JavaStaticText("stxtItemId").GetROProperty("label")
If Trim(itemIDActual) = "" Then
	LogReport "FAILED", "Step "&Environment("stepnum")& " Validate Item is displayed" , "Item is dispalyed", "Item is NOT dispalyed", Environment("screenshotfolder")
Else
	LogReport "PASSED", "Step "&Environment("stepnum")& " Validate Item is displayed" , "Item is dispalyed", "Item IS dispalyed. Item ID: " & itemIDActual, Environment("screenshotfolder")
End If

'Select "Similar Items" button (F3) to see all items of the same style 
'Environment("stepnum") = Environment("stepnum") + 1
JavaDialog("Item Lookup Window").JavaButton("btnSimilarItems").Click
LogReport "Done", "Step "&Environment("stepnum")& " Click Similiar Items button", "Similar Items button is clicked", "", ""

'screenshot similar items page
wait 1
'Environment("stepnum") = Environment("stepnum") + 1
LogReport "Done", "Step "&Environment("stepnum")& " Similiar Items page", "Similar Items page is displayed", "", Environment("screenshotfolder")


wait 1
'click back
'Environment("stepnum") = Environment("stepnum") + 1
JavaDialog("Item Lookup Window").JavaButton("btnBack").Click
LogReport "Done", "Step "&Environment("stepnum")& " Click Back button", "Back button is clicked", "", ""


'go back to login window
JavaDialog("Item Lookup Window").JavaButton("label:=Back","index:=1").Click

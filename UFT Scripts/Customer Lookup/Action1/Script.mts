
'Validation Customer Lookup screen opens
'Environment("stepnum") = Environment("stepnum") + 1
If JavaDialog("Customer Lookup Window").JavaStaticText("stxtCustomerLookup").Exist(5) Then
	LogReport "PASSED", "Step "&Environment("stepnum")& " Validate Customer Lookup screen is open" , "Customer Lookup screen is open", "Customer Lookup screen IS open", ""
Else
	LogReport "FAILED", "Step "&Environment("stepnum")& " Validate Customer Lookup screen is open" , "Customer Lookup screen is open", "Customer Lookup screen is NOT open", Environment("screenshotfolder")
End If

'enter last name
'Environment("stepnum") = Environment("stepnum") + 1
WaitForObject JavaDialog("Customer Lookup Window").JavaEdit("txtLastName")
JavaDialog("Customer Lookup Window").JavaEdit("txtLastName").Set Environment("lastname")
LogReport "Done", "Step "&Environment("stepnum")& " Input Last name", "Last name entered", "", ""

'enter first name
'Environment("stepnum") = Environment("stepnum") + 1
JavaDialog("Customer Lookup Window").JavaEdit("txtFirstName").Set Environment("firstname")
LogReport "Done", "Step "&Environment("stepnum")& " Input First name", "First name entered", "", ""

'press process 
'Environment("stepnum") = Environment("stepnum") + 1
JavaDialog("Customer Lookup Window").JavaButton("btnProcess").Click
LogReport "Done", "Step "&Environment("stepnum")& " Click Process button", "Process button is clicked", "", ""

'if error occured
If JavaDialog("Customer Lookup Window").JavaEdit("txtError").Exist(4) Then
	'Environment("stepnum") = Environment("stepnum") + 1
	LogReport "Done", "Step "&Environment("stepnum")& " Error Occured", "Error Occured", "", Environment("screenshotfolder")

	JavaDialog("Customer Lookup Window").JavaButton("btnViewLog").Click
	wait 2
	
	'Environment("stepnum") = Environment("stepnum") + 1
	LogReport "FAILED", "Step "&Environment("stepnum")& " Error Occured upon Customer Lookup, View Log", "Customer Lookup screen Error", "Customer Lookup screen Error", Environment("screenshotfolder")
	
	JavaDialog("Customer Lookup Window").JavaButton("btnBack").Click
	
End If


'Environment("stepnum") = Environment("stepnum") + 1
If JavaDialog("Customer Window").JavaStaticText("stxtPartyId").Exist(3) Then
	partyIdActual = JavaDialog("Customer Window").JavaStaticText("stxtPartyId").GetROProperty("label")
	LogReport "PASSED", "Step "&Environment("stepnum")& " Validate Cutomer is displayed" , "Customer is dispalyed", "Customer IS dispalyed. Party ID: " & partyIdActual, Environment("screenshotfolder")
Else
	LogReport "FAILED", "Step "&Environment("stepnum")& " Validate Cutomer is displayed" , "Customer is dispalyed", "Customer is NOT dispalyed", Environment("screenshotfolder")
End If

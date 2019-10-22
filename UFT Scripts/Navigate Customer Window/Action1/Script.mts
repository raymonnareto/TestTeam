
WaitForObject JavaDialog("Customer Window").JavaEdit("txtCustomertype")
'get customer type
customerType = JavaDialog("Customer Window").JavaEdit("txtCustomertype").GetROProperty("value")

'Press "Groups&Personal" button (F11) and  try to update 'Customer group' field.
'Environment("stepnum") = Environment("stepnum") + 1
WaitForObject JavaDialog("Controls - Customer Window").JavaButton("btnGroups&Personal")
JavaDialog("Controls - Customer Window").JavaButton("btnGroups&Personal").Click
LogReport "Done", "Step "&Environment("stepnum")& " Click Groups & Personal button", "Groups & Personal button is clicked", "", ""

WaitForObject JavaDialog("Customer Window").JavaList("lstCustomerGroups")

'validate customer group 
'Environment("stepnum") = Environment("stepnum") + 1
customerGroupsEnabled = JavaDialog("Customer Window").JavaList("lstCustomerGroups").GetROProperty("enabled")
If customerGroupsEnabled = 0 Then
	LogReport "PASSED", "Step "&Environment("stepnum")& " Validate Customer Groups is not editable" , "Customer Groups is not editable", "Customer Groups is NOT editable", Environment("screenshotfolder")
Else
	LogReport "FAILED", "Step "&Environment("stepnum")& " Validate Customer Groups is not editable" , "Customer Groups is not editable", "Customer Groups IS editable", Environment("screenshotfolder")
End If

If Trim(customerType) = "Customer" Then
	'Press more and then on "Customer History" button (F2).
	'Environment("stepnum") = Environment("stepnum") + 1
	JavaDialog("Controls - Customer Window").JavaButton("btnMore").Click
	LogReport "Done", "Step "&Environment("stepnum")& " Click More button", "More button is clicked", "", ""
	
	'Environment("stepnum") = Environment("stepnum") + 1
	JavaDialog("Controls - Customer Window").JavaButton("btnCustomerHistory").Click
	LogReport "Done", "Step "&Environment("stepnum")& " Click Customer History button", "Customer History button is clicked", "", ""
	
	WaitForObject JavaDialog("Customer Window").JavaList("lstCustomerHistory")
	
	'Environment("stepnum") = Environment("stepnum") + 1
	LogReport "Done", "Step "&Environment("stepnum")& " Customer History page", "Customer History page is displayed", "", Environment("screenshotfolder")
End If


'Press "Customer Account" button (F3).
'Environment("stepnum") = Environment("stepnum") + 1

If Not JavaDialog("Controls - Customer Window").JavaButton("btnCustomerAccount").Exist(3) Then
	JavaDialog("Controls - Customer Window").JavaButton("btnMore").Click
End If

JavaDialog("Controls - Customer Window").JavaButton("btnCustomerAccount").Click
LogReport "Done", "Step "&Environment("stepnum")& " Click Customer Account button", "Customer Account button is clicked", "", ""

wait 1

'Environment("stepnum") = Environment("stepnum") + 1
LogReport "Done", "Step "&Environment("stepnum")& " Customer Account page", "Customer Account page is displayed", "", Environment("screenshotfolder")


'Press "Store Credit" button (F4).
'Environment("stepnum") = Environment("stepnum") + 1
JavaDialog("Controls - Customer Window").JavaButton("btnStoreCredit").Click
LogReport "Done", "Step "&Environment("stepnum")& " Click Store Credit button", "Store Credit button is clicked", "", ""

wait 1
'Environment("stepnum") = Environment("stepnum") + 1
LogReport "Done", "Step "&Environment("stepnum")& " Store Credit page", "Store Credit page is displayed", "", Environment("screenshotfolder")


'Click on "Additional Info" tab 
'Environment("stepnum") = Environment("stepnum") + 1

If Not JavaDialog("Controls - Customer Window").JavaButton("btnAdditionalInfo").Exist(3) Then
	JavaDialog("Controls - Customer Window").JavaButton("btnMore").Click
End If

JavaDialog("Controls - Customer Window").JavaButton("btnAdditionalInfo").Click
LogReport "Done", "Step "&Environment("stepnum")& " Click Additional Info button", "Additional Info button is clicked", "", ""

WaitForObject JavaDialog("Customer Window").JavaEdit("txtRegistrationStore")
'Environment("stepnum") = Environment("stepnum") + 1
LogReport "Done", "Step "&Environment("stepnum")& " Additional Info page", "Additional Info page is displayed", "", Environment("screenshotfolder")

'Click on "Comment" tab
'Environment("stepnum") = Environment("stepnum") + 1

If Not JavaDialog("Controls - Customer Window").JavaButton("btnComments").Exist(3) Then
	JavaDialog("Controls - Customer Window").JavaButton("btnMore").Click
End If

JavaDialog("Controls - Customer Window").JavaButton("btnComments").Click
LogReport "Done", "Step "&Environment("stepnum")& " Click Comments button", "Comments button is clicked", "", ""

wait 1
'Environment("stepnum") = Environment("stepnum") + 1
LogReport "Done", "Step "&Environment("stepnum")& " Comments page", "Comments page is displayed", "", Environment("screenshotfolder")


'go back to login
JavaDialog("Controls - Customer Window").JavaButton("btnBack").Click

JavaDialog("Customer Lookup Window").JavaButton("label:=Back","index:=1").Click


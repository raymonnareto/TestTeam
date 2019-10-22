
'Validation Commissioned Associate screen opens
'Environment("stepnum") = Environment("stepnum") + 1
If JavaDialog("Commisioned Associate Window").JavaList("lstCommisionedAssociate").Exist(3) Then
	LogReport "PASSED", "Step "&Environment("stepnum")& " Validate Commissioned Associate screen is open" , "Commissioned Associate screen is open", "Commissioned Associate screen IS open", Environment("screenshotfolder")
Else
	LogReport "FAILED", "Step "&Environment("stepnum")& " Validate Commissioned Associate screen is open" , "Commissioned Associate screen is open", "Commissioned Associate screen is NOT open", Environment("screenshotfolder")
End If


'Select a Sale Associate
'Environment("stepnum") = Environment("stepnum") + 1
WaitForObject JavaDialog("Commisioned Associate Window").JavaButton("btnSelectByAssociateID")
JavaDialog("Commisioned Associate Window").JavaButton("btnSelectByAssociateID").Click
LogReport "Done", "Step "&Environment("stepnum")& " Click Select by Associate ID button", "Select by Associate ID button is clicked", "", ""

'Input Associate ID
'Environment("stepnum") = Environment("stepnum") + 1
WaitForObject JavaDialog("Commisioned Associate Window").JavaEdit("txtCommissionedAssociateID")
JavaDialog("Commisioned Associate Window").JavaEdit("txtCommissionedAssociateID").Set Environment("commissionedassociateid")
LogReport "Done", "Step "&Environment("stepnum")& " Input Associate ID", "Associate ID entered", "", ""
JavaDialog("Commisioned Associate Window").JavaEdit("txtCommissionedAssociateID").Activate


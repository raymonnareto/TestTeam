

'click assign and continue
'Environment("stepnum") = Environment("stepnum") + 1
JavaDialog("Controls - Customer Window").JavaButton("btnAssignandContinue").Click
LogReport "Done", "Step "&Environment("stepnum")& " Click Assign and Continue button", "Assign and Continue button is clicked", "", ""

'validate sales screen is open
'Environment("stepnum") = Environment("stepnum") + 1
If JavaDialog("Sales Window").JavaStaticText("stxtSale").Exist(3) Then
	LogReport "PASSED", "Step "&Environment("stepnum")& " Validate Sale screen is open" , "Sale screen is open", "Sale screen IS open", Environment("screenshotfolder")
Else
	LogReport "FAILED", "Step "&Environment("stepnum")& " Validate Sale screen is open" , "Sale screen is open", "Sale screen is NOT open", Environment("screenshotfolder")
End If


'Select "Register Options" button
'Environment("stepnum") = Environment("stepnum") + 1
WaitForObject JavaDialog("Controls - Sale Window").JavaButton("btnRegisterOptions")
JavaDialog("Controls - Sale Window").JavaButton("btnRegisterOptions").Click
LogReport "Done", "Step "&Environment("stepnum")& " Click Register Options button", "Register Options button is clicked", "", ""


'Press "Special Order" (F4) 
'Environment("stepnum") = Environment("stepnum") + 1
WaitForObject JavaDialog("Controls - Sale Window").JavaButton("btnSpecialOrder")
JavaDialog("Controls - Sale Window").JavaButton("btnSpecialOrder").Click
LogReport "Done", "Step "&Environment("stepnum")& " Click Special Order button", "Special Order button is clicked", "", ""

'validate Message: "There are no special orders matching criteria entered" is displayed
'Environment("stepnum") = Environment("stepnum") + 1
If JavaDialog("Special Order Window").JavaEdit("txtExpectedMessageNoSpecialOrder").Exist(3) Then
	LogReport "PASSED", "Step "&Environment("stepnum")& " Validate Message is displayed" , "Message: 'There are no special orders matching criteria entered' is displayed", "Message: 'There are no special orders matching criteria entered' IS displayed", Environment("screenshotfolder")
Else
	LogReport "FAILED", "Step "&Environment("stepnum")& " Validate Message is displayed" , "Message: 'There are no special orders matching criteria entered' is displayed", "Message: 'There are no special orders matching criteria entered' is NOT displayed", Environment("screenshotfolder")
End If


'Press "New" (F9) button.
'Environment("stepnum") = Environment("stepnum") + 1
WaitForObject JavaDialog("Special Order Window").JavaButton("btnNew")
JavaDialog("Special Order Window").JavaButton("btnNew").Click
LogReport "Done", "Step "&Environment("stepnum")& " Click New button", "New button is clicked", "", ""


'Select "PickUp" option.
'Environment("stepnum") = Environment("stepnum") + 1
WaitForObject JavaDialog("Special Order Window").JavaButton("btnPickUp")
JavaDialog("Special Order Window").JavaButton("btnPickUp").Click
LogReport "Done", "Step "&Environment("stepnum")& " Click PickUp button", "PickUp button is clicked", "", ""

'validate The system shows the Special order screen.
'Environment("stepnum") = Environment("stepnum") + 1
If JavaDialog("Special Order Window").JavaStaticText("stxtSpecialOrder").Exist(3) Then
	LogReport "PASSED", "Step "&Environment("stepnum")& " Validate Special Order screen is open" , "Special Order screen is open", "Special Order screen IS open", Environment("screenshotfolder")
Else
	LogReport "FAILED", "Step "&Environment("stepnum")& " Validate Special Order screen is open" , "Special Order screen is open", "Special Order screen is NOT open", Environment("screenshotfolder")
End If


'Type an item ID and press Enter. Thus choose the item expected date in order to set the day when the item will be ready to pickup.
'Environment("stepnum") = Environment("stepnum") + 1
WaitForObject JavaDialog("Special Order Window").JavaEdit("txtSpecialOrderItemID")
JavaDialog("Special Order Window").JavaEdit("txtSpecialOrderItemID").Set Environment("itemid")
LogReport "Done", "Step "&Environment("stepnum")& " Input Item ID", "Item ID entered", "", ""
JavaDialog("Special Order Window").JavaEdit("txtSpecialOrderItemID").Activate

wait 1
'Environment("stepnum") = Environment("stepnum") + 1
JavaDialog("Special Order Window").JavaEdit("txtSpecialOrderItemID").Activate
LogReport "Done", "Step "&Environment("stepnum")& " Confirm date by pressing enter", "Date confirmed", "", ""


'validate Item is added to the list on the right.
wait 1
'Environment("stepnum") = Environment("stepnum") + 1
listItemCount = JavaDialog("Special Order Window").JavaList("lstSpecialOrderLineItems").GetROProperty("items count")

If cdbl(listItemCount) = 0  Then
	LogReport "FAILED", "Step "&Environment("stepnum")& " Validate Item is added" , "Item is added in the list", "Item is NOT added in the list", Environment("screenshotfolder")
Else
	LogReport "PASSED", "Step "&Environment("stepnum")& " Validate Item is added" , "Item is added in the list", "Item IS added in the list", Environment("screenshotfolder")
End If


'Press "Exit Special Order" button (F2) and confirm the deposit amount by pressing Enter. 
'Environment("stepnum") = Environment("stepnum") + 1
WaitForObject JavaDialog("Special Order Window").JavaButton("btnExitSpecialOrder")
JavaDialog("Special Order Window").JavaButton("btnExitSpecialOrder").Click
LogReport "Done", "Step "&Environment("stepnum")& " Click Exit Special Order button", "Exit Special Order button is clicked", "", ""


'Environment("stepnum") = Environment("stepnum") + 1
WaitForObject JavaDialog("Special Order Window").JavaEdit("txtSpecialOrderDeposit")
JavaDialog("Special Order Window").JavaEdit("txtSpecialOrderDeposit").Activate
LogReport "Done", "Step "&Environment("stepnum")& " Confirm the deposit amount by pressing Enter", "Deposit amount confirmed", "", ""

'validate sales screen is open
'Environment("stepnum") = Environment("stepnum") + 1
If JavaDialog("Sales Window").JavaStaticText("stxtSale").Exist(3) Then
	LogReport "PASSED", "Step "&Environment("stepnum")& " Validate Sale screen is open" , "Sale screen is open", "Sale screen IS open", Environment("screenshotfolder")
Else
	LogReport "FAILED", "Step "&Environment("stepnum")& " Validate Sale screen is open" , "Sale screen is open", "Sale screen is NOT open", Environment("screenshotfolder")
End If

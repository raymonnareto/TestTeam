
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


'Enter the SKU and press Enter.
'Environment("stepnum") = Environment("stepnum") + 1
WaitForObject JavaDialog("Sales Window").JavaEdit("txtItemSKU")
JavaDialog("Sales Window").JavaEdit("txtItemSKU").Set Environment("skunumber")
LogReport "Done", "Step "&Environment("stepnum")& " Input SKU Number", "SKU number is entered", "", ""
JavaDialog("Sales Window").JavaEdit("txtItemSKU").Activate


'validate list has items
'Environment("stepnum") = Environment("stepnum") + 1
wait 2
listItemCount = JavaDialog("Sales Window").JavaList("lstSalesLineItems").GetROProperty("items count")

If cdbl(listItemCount) = 0  Then
	LogReport "FAILED", "Step "&Environment("stepnum")& " Validate Item is added" , "Item is added in the list", "Item is NOT added in the list", Environment("screenshotfolder")
Else
	LogReport "PASSED", "Step "&Environment("stepnum")& " Validate Item is added" , "Item is added in the list", "Item is added in the list", Environment("screenshotfolder")
End If


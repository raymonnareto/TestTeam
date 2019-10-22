
'to be used later in validation
listItemCountInitial = JavaDialog("Sales Window").JavaList("lstSalesLineItems").GetROProperty("items count")


'Select "Add Discount" (F5)
'Environment("stepnum") = Environment("stepnum") + 1
JavaDialog("Controls - Sale Window").JavaButton("btnAddDiscount").Click
LogReport "Done", "Step "&Environment("stepnum")& " Click Add Discount button", "Add Discount is clicked", "", ""

'validate discount options list is displayed
'Environment("stepnum") = Environment("stepnum") + 1
If JavaDialog("Add Discount Window").JavaList("lstDiscountOptions").Exist(4) Then
	LogReport "PASSED", "Step "&Environment("stepnum")& " Validate Discount Options list is displayed" , "Discount Options list is displayed", "Discount Options list IS displayed", Environment("screenshotfolder")
Else
	LogReport "FAILED", "Step "&Environment("stepnum")& " Validate Discount Options list is displayed" , "Discount Options list is displayed", "Discount Options list is NOT displayed", Environment("screenshotfolder")
End If


'Select one of the available options
'Environment("stepnum") = Environment("stepnum") + 1
JavaDialog("Add Discount Window").JavaList("lstDiscountOptions").Select Environment("discountoption")
LogReport "Done", "Step "&Environment("stepnum")& " Select Discount Options", "Discount Option selected", "", ""
JavaDialog("Add Discount Window").JavaButton("btnOk").Click


'Select one discount reason code
'Environment("stepnum") = Environment("stepnum") + 1
WaitForObject JavaDialog("Add Discount Window").JavaList("lstSelectDiscountReasonCode")
JavaDialog("Add Discount Window").JavaList("lstSelectDiscountReasonCode").Select Environment("discountreasoncode")
LogReport "Done", "Step "&Environment("stepnum")& " Select Discount Reason Code", "Discount Reason Code selected", "", ""
JavaDialog("Add Discount Window").JavaButton("btnOk").Click


'if discount group items exist
If JavaDialog("Add Discount Window").JavaList("lstDiscountGroupItems").Exist(3) Then
	'Environment("stepnum") = Environment("stepnum") + 1
	JavaDialog("Add Discount Window").JavaList("lstDiscountGroupItems").Type " "
	LogReport "Done", "Step "&Environment("stepnum")& " Select Item from list", "Item from list selected", "", ""
	JavaDialog("Add Discount Window").JavaButton("btnOk").Click
End If


'Enter the discount percentage/amount and press enter.
'Environment("stepnum") = Environment("stepnum") + 1
WaitForObject JavaDialog("Add Discount Window").JavaEdit("txtDiscountAmount")
JavaDialog("Add Discount Window").JavaEdit("txtDiscountAmount").Set Environment("discountamount")
LogReport "Done", "Step "&Environment("stepnum")& " Input Discount Amount or Percent", "Discount Amount or Percent entered", "", ""
JavaDialog("Add Discount Window").JavaEdit("txtDiscountAmount").Activate


If JavaDialog("Add Discount Window").JavaEdit("txtExpectedMessageDiscountMayNotBeApplied").Exist(3) Then
	'Environment("stepnum") = Environment("stepnum") + 1
	JavaDialog("Add Discount Window").JavaButton("btnOk").Click
	LogReport "Done", "Step "&Environment("stepnum")& " Click OK button", "OK button is clicked", "", ""
	
	'validate Sale transaction screen is displayed. 
	'Environment("stepnum") = Environment("stepnum") + 1
	If JavaDialog("Sales Window").JavaStaticText("stxtSale").Exist(3) Then
		LogReport "PASSED", "Step "&Environment("stepnum")& " Validate Sale screen is displayed" , "Sale screen is displayed", "Sale screen IS displayed", Environment("screenshotfolder")
	Else
		LogReport "FAILED", "Step "&Environment("stepnum")& " Validate Sale screen is displayed" , "Sale screen is displayed", "Sale screen is NOT displayed", Environment("screenshotfolder")
	End If
	
	
Else

	'validate line discount is added
	'Environment("stepnum") = Environment("stepnum") + 1
	wait 2
	
	itemCountExpected = listItemCountInitial + 1
	
	listItemCountAfterDiscount = JavaDialog("Sales Window").JavaList("lstSalesLineItems").GetROProperty("items count")
	
	If cdbl(itemCountExpected) = cdbl(listItemCountAfterDiscount) Then
		LogReport "PASSED", "Step "&Environment("stepnum")& " Validate Discount is added" , "Discount is added in the list", "Discount IS added in the list", Environment("screenshotfolder")
	Else
		LogReport "FAILED", "Step "&Environment("stepnum")& " Validate Discout is added" , "Discount is added in the list", "Discount is NOT added in the list", Environment("screenshotfolder")
	End If
	
End If


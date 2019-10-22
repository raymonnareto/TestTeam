
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


'Select " Sell non Merch" (F6)
'Environment("stepnum") = Environment("stepnum") + 1
WaitForObject JavaDialog("Controls - Sale Window").JavaButton("btnSellNon-Merch")
JavaDialog("Controls - Sale Window").JavaButton("btnSellNon-Merch").Click
LogReport "Done", "Step "&Environment("stepnum")& " Click Sell Non Merch button", "Sell Non Merch button is clicked", "", ""


'validate Non Merch Options is displayed
'Environment("stepnum") = Environment("stepnum") + 1
If JavaDialog("Non-Merch Window").JavaList("lstNonMerchOptions").Exist(3) Then
	LogReport "PASSED", "Step "&Environment("stepnum")& " Validate Non Merch Options is displayed" , "Non Merch Options is displayed", "Non Merch Options IS displayed", Environment("screenshotfolder")
Else
	LogReport "FAILED", "Step "&Environment("stepnum")& " Validate Non Merch Options is displayed" , "Non Merch Options is displayed", "Non Merch Options is NOT displayed", Environment("screenshotfolder")
End If


'Select Non-Merch option from the list and press Enter
'Environment("stepnum") = Environment("stepnum") + 1
JavaDialog("Non-Merch Window").JavaList("lstNonMerchOptions").Select Environment("nonmerchoption")
LogReport "Done", "Step "&Environment("stepnum")& " Select Non-Merch option from the list", "Non Merch Option selected", "", ""
JavaDialog("Non-Merch Window").JavaButton("btnOk").Click


'If Sell Non Merch is selected
If JavaDialog("Non-Merch Window").JavaList("lstNonMerchandiseItem").Exist(3) Then

	'Select a non-merchandise item from the list and press Enter
	'Environment("stepnum") = Environment("stepnum") + 1
	WaitForObject JavaDialog("Non-Merch Window").JavaList("lstNonMerchandiseItem")
	JavaDialog("Non-Merch Window").JavaList("lstNonMerchandiseItem").Select Environment("nonmerchitem")
	LogReport "Done", "Step "&Environment("stepnum")& " Select Non-Merch Item from the list", "Non Merch Item selected", "", ""
	JavaDialog("Non-Merch Window").JavaButton("btnOk").Click
	
	
	'Enter comment and press Enter
	If JavaDialog("Non-Merch Window").JavaEdit("txtComments").Exist(2) Then
		'Environment("stepnum") = Environment("stepnum") + 1
		JavaDialog("Non-Merch Window").JavaEdit("txtComments").Set Environment("comments")
		LogReport "Done", "Step "&Environment("stepnum")& " Input Comment", "Comment entered", "", ""
		JavaDialog("Non-Merch Window").JavaEdit("txtComments").Activate
	End If
	
	
	'Enter the price and press Enter
	If JavaDialog("Non-Merch Window").JavaEdit("txtEnterPrice").Exist(2) Then
		'Environment("stepnum") = Environment("stepnum") + 1
		JavaDialog("Non-Merch Window").JavaEdit("txtEnterPrice").Set Environment("itemprice")
		LogReport "Done", "Step "&Environment("stepnum")& " Input Price amount", "Price amount entered", "", ""
		JavaDialog("Non-Merch Window").JavaEdit("txtEnterPrice").Activate
	End If

End If


'If sell gift certificate is selected
If JavaDialog("Non-Merch Window").JavaEdit("txtVoucher").Exist(2) Then
	'Environment("stepnum") = Environment("stepnum") + 1
	JavaDialog("Non-Merch Window").JavaEdit("txtVoucher").Set Environment("voucheramount")
	LogReport "Done", "Step "&Environment("stepnum")& " Input Price amount", "Price amount entered", "", ""
	JavaDialog("Non-Merch Window").JavaEdit("txtVoucher").Activate
End If


'validate item is added
'Environment("stepnum") = Environment("stepnum") + 1
wait 2
listItemCount = JavaDialog("Sales Window").JavaList("lstSalesLineItems").GetROProperty("items count")

If cdbl(listItemCount) = 0  Then
	LogReport "FAILED", "Step "&Environment("stepnum")& " Validate Item is added" , "Item is added in the list", "Item is NOT added in the list", Environment("screenshotfolder")
Else
	LogReport "PASSED", "Step "&Environment("stepnum")& " Validate Item is added" , "Item is added in the list", "Item is added in the list", Environment("screenshotfolder")
End If


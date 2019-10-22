 @@ hightlight id_;_796375_;_script infofile_;_ZIP::ssf50.xml_;_
'Click 	Return Item button
'Environment("stepnum") = Environment("stepnum") + 1
JavaDialog("Controls - Sale Window").JavaButton("btnReturnItem").Click
LogReport "Done", "Step "&Environment("stepnum")& " Click Return Item button", "Return Item is clicked", "", ""

Select Case Lcase(Environment("returntype"))
	
	Case "issue store credit"
	
		'Click Yes original receipt button
		'Environment("stepnum") = Environment("stepnum") + 1
		JavaDialog("Return Item Window").JavaButton("btnYes").Click
		LogReport "Done", "Step "&Environment("stepnum")& " Click Yes button", "Yes button is clicked", "", ""
		
		'Enter Gift Receipt
		'Environment("stepnum") = Environment("stepnum") + 1
		JavaDialog("Return Item Window").JavaEdit("txtGiftReceipt").Set Environment("strgiftreceipt")
		JavaDialog("Return Item Window").JavaEdit("txtGiftReceipt").Activate
		LogReport "Done", "Step "&Environment("stepnum")& "Enter Gift Receipt", "Gift Receipt entered", "", ""
		
		'Enter Original Ticket ID
		'WaitForObject JavaDialog("Return Item Window").JavaEdit("txtOrigTicketID")
		'Environment("stepnum") = Environment("stepnum") + 1
		JavaDialog("Return Item Window").JavaEdit("txtOrigTicketID").Set Cint(Environment("origticketid"))
		LogReport "Done", "Step "&Environment("stepnum")& "Enter Original Ticket ID", "Original Ticket ID entered", "", ""
		
		'Enter Original Trans Date
		'Environment("stepnum") = Environment("stepnum") + 1
		JavaDialog("Return Item Window").JavaEdit("txtOrigTransDate").Set Environment("origtransdate")
		LogReport "Done", "Step "&Environment("stepnum")& "Enter Original Transaction Date", "Original Transaction Date entered", "", ""
	
		'Enter Original Store ID
		'Environment("stepnum") = Environment("stepnum") + 1
		JavaDialog("Return Item Window").JavaEdit("txtOrigStoreID").Set Environment("origstoreid")
		LogReport "Done", "Step "&Environment("stepnum")& "Enter Original Store ID", "Original Store ID entered", "", ""
	
		'Enter Original Register ID
		'Environment("stepnum") = Environment("stepnum") + 1
		JavaDialog("Return Item Window").JavaEdit("txtOrigRegisterID").Set Environment("origregisterid")
		LogReport "Done", "Step "&Environment("stepnum")& "Enter Original Register ID", "Original Register ID entered", "", Environment("screenshotfolder")
	
		'Click Process
		'Environment("stepnum") = Environment("stepnum") + 1
		JavaDialog("Return Item Window").JavaButton("btnProcess").Click
		LogReport "Done", "Step "&Environment("stepnum")& "Click OK Button", "OK button is clicked", "", ""
		
		JavaDialog("Sales Window").JavaEdit("txtItemSKU").Activate	

	Case "blind return"
	
		'Click NO original receipt button
		'Environment("stepnum") = Environment("stepnum") + 1
		JavaDialog("Return Item Window").JavaButton("btnNo").Click
		LogReport "Done", "Step "&Environment("stepnum")& " Click NO button", "No button is clicked", "", ""
		
		'validate Return Item screen is open
		'Environment("stepnum") = Environment("stepnum") + 1
		If JavaDialog("Return Item Window").Exist(3) Then
			LogReport "PASSED", "Step "&Environment("stepnum")& " Validate Return screen is displayed" , "Return screen is displayed", "Return screen is displayed", Environment("screenshotfolder")
		Else
			LogReport "FAILED", "Step "&Environment("stepnum")& " Validate Return screen is displayed" , "Return screen is displayed", "Return screen is NOT displayed", Environment("screenshotfolder")
		End If
		
		'Enter Return Item SKU
		'Environment("stepnum") = Environment("stepnum") + 1
		JavaDialog("Return Item Window").JavaEdit("txtItemSKU").Set Environment("skunumber")
		JavaDialog("Sales Window").JavaEdit("txtItemSKU").Activate
		LogReport "Done", "Step "&Environment("stepnum")& "Enter Return Item SKU", "Return Item SKU has been entered", "", Environment("screenshotfolder")
		
		'WaitForObject JavaDialog("Return Item Window").JavaList("lstReturnTransHistory")
		If JavaDialog("Return Item Window").JavaList("lstReturnTransHistory").Exist(5) = True Then	
			
			'Click OK - Item with transaction history
			'Environment("stepnum") = Environment("stepnum") + 1
			JavaDialog("Return Item Window").JavaButton("btnOk").Click
			LogReport "Done", "Step "&Environment("stepnum")& " Click OK button", "OK button is clicked", "", ""
			
			JavaDialog("Sales Window").JavaEdit("txtItemSKU").Activate
		
		Else
		
			'Click YES - Item not in purchase history
			'Environment("stepnum") = Environment("stepnum") + 1
			JavaDialog("Return Item Window").JavaButton("btnYes").Click
			LogReport "Done", "Step "&Environment("stepnum")& " Click Yes button", "Yes button is clicked", "", ""	
			
		End If
		
		
	Case "return non-merch"
	
		'Click NO original receipt button
		'Environment("stepnum") = Environment("stepnum") + 1
		JavaDialog("Return Item Window").JavaButton("btnNo").Click
		LogReport "Done", "Step "&Environment("stepnum")& " Click NO button", "No button is clicked", "", ""
		
		'validate Return Item screen is open
		'Environment("stepnum") = Environment("stepnum") + 1
		If JavaDialog("Return Item Window").Exist(3) Then
			LogReport "PASSED", "Step "&Environment("stepnum")& " Validate Return screen is displayed" , "Return screen is displayed", "Return screen is displayed", Environment("screenshotfolder")
		Else
			LogReport "FAILED", "Step "&Environment("stepnum")& " Validate Return screen is displayed" , "Return screen is displayed", "Return screen is NOT displayed", Environment("screenshotfolder")
		End If
	
		'Click Return Non-Merch button
		'Environment("stepnum") = Environment("stepnum") + 1
		JavaDialog("Return Item Window").JavaButton("btnReturnNonMerch").Click
		LogReport "Done", "Step "&Environment("stepnum")& " Click Return Non-Merch button", "Return Non-Merch button is clicked", "", Environment("screenshotfolder")	
		
		'Select Return Non-Merch Function
		'Environment("stepnum") = Environment("stepnum") + 1
		JavaDialog("Return Item Window").JavaList("lstReturnNonMerch").Select Environment("strnonmerchfunc")
		LogReport "Done", "Step "&Environment("stepnum")& " Select Return Non-Merch function", "Return Non-Merch function selected", "", Environment("screenshotfolder")
		JavaDialog("Return Item Window").JavaButton("btnOk").Click
		
		'Select Non-Merchandise Item
		'Environment("stepnum") = Environment("stepnum") + 1
		JavaDialog("Return Item Window").JavaList("lstNonMerchandiseItem").Select Environment("strnonmerchitem")
		LogReport "Done", "Step "&Environment("stepnum")& " Select Return Non-Merch Item", "Return Non-Merch Item selected", "", Environment("screenshotfolder")
		JavaDialog("Return Item Window").JavaButton("btnOk").Click
		
		'Enter Non-Merch Comment
		'Environment("stepnum") = Environment("stepnum") + 1
		JavaDialog("Return Item Window").JavaEdit("txtNonMerchComment").Set Environment("strnonmerchcomment")
		LogReport "Done", "Step "&Environment("stepnum")& " Enter Non-Merch Comment", "Return Non-Merch comment entered", "", Environment("screenshotfolder")
		
		JavaDialog("Return Item Window").JavaEdit("txtNonMerchComment").Activate
		
		'Enter Non-Merch Price
		'Environment("stepnum") = Environment("stepnum") + 1
		JavaDialog("Return Item Window").JavaEdit("txtNonMerchPrice").Set Environment("varnonmerchprice")
		LogReport "Done", "Step "&Environment("stepnum")& " Enter Return Non-Merch Price", "Return Non-Merch Price entered", "", Environment("screenshotfolder")
		
		JavaDialog("Return Item Window").JavaEdit("txtNonMerchPrice").Activate
									
	
End Select


'WaitForObject JavaDialog("Return Item Window").JavaList("Select a return reason.")
'Select Return Reason @@ hightlight id_;_5023912_;_script infofile_;_ZIP::ssf54.xml_;_
'Environment("stepnum") = Environment("stepnum") + 1
JavaDialog("Return Item Window").JavaList("lstReturnReason").Select Environment("strreturnlineitem") @@ hightlight id_;_17914961_;_script infofile_;_ZIP::ssf55.xml_;_
LogReport "Done", "Step "&Environment("stepnum")& " Select Reason", "Reason selected", "", ""

JavaDialog("Return Item Window").JavaButton("btnOk").Click

'Enter Return Reason comment
If JavaDialog("Return Item Window").JavaEdit("txtEnterComment").Exist(3) Then
	
	'Environment("stepnum") = Environment("stepnum") + 1
	JavaDialog("Return Item Window").JavaEdit("txtEnterComment").Set Environment("strreturncomment")
	LogReport "Done", "Step "&Environment("stepnum")& " Enter Return Comment", "Return comment entered", "", ""
	
	JavaDialog("Return Item Window").JavaButton("btnOk").Click
	
End If

'Select Orig Receipt Information
If JavaDialog("Return Item Window").JavaList("lstOrigReceiptInfo").Exist(3) Then
	
	'Environment("stepnum") = Environment("stepnum") + 1
	JavaDialog("Return Item Window").JavaButton("btnOk").Click
	LogReport "Done", "Step "&Environment("stepnum")& " Select Receipt Information", "Orig Receipt Information selected", "", ""
	
End If
	
'Click Exit Return button
'Environment("stepnum") = Environment("stepnum") + 1
JavaDialog("Controls - Sale Window").JavaButton("btnExitReturn").Click
LogReport "Done", "Step "&Environment("stepnum")& " Click Exit Return", "Exit Return is clicked", "", ""
 @@ hightlight id_;_3668135_;_script infofile_;_ZIP::ssf62.xml_;_

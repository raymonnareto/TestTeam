
'Press "Add Tenders" (F10)
'Environment("stepnum") = Environment("stepnum") + 1
JavaDialog("Controls - Sale Window").JavaButton("btnAddTenders").Click
LogReport "Done", "Step "&Environment("stepnum")& " Click Add Tenders button", "Add Tenders button is clicked", "", ""


'Validate Tender List is dispayed
'Environment("stepnum") = Environment("stepnum") + 1
If JavaDialog("Add Tender Window").JavaList("lstTenders").Exist(4) Then
    LogReport "PASSED", "Step "&Environment("stepnum")& " Validate Tender List is dispayed" , "Tender List is dispayed", "Tender List IS dispayed", Environment("screenshotfolder")
Else
    LogReport "FAILED", "Step "&Environment("stepnum")& " Validate Tender List is dispayed" , "Tender List is dispayed", "Tender List is NOT dispayed", Environment("screenshotfolder")
End If


'Choose Cash as tender from the list
'Environment("stepnum") = Environment("stepnum") + 1
JavaDialog("Add Tender Window").JavaList("lstTenders").Select Environment("tendertype")
LogReport "Done", "Step "&Environment("stepnum")& " Choose Tender from the list", "Tender selected", "", ""
JavaDialog("Add Tender Window").JavaButton("btnOk").Click


Select Case Lcase(Environment("tendertypevalue"))

	Case "credit/debit card", "credit [manual entry]"
	
		'Environment("stepnum") = Environment("stepnum") + 1
	    WaitForObject JavaDialog("Add Tender Window").JavaEdit("txtTenderAmount")
	    JavaDialog("Add Tender Window").JavaEdit("txtTenderAmount").Set Environment("creditamount")
	    LogReport "Done", "Step "&Environment("stepnum")& " Input Credit Card Amount", "Credit Card Amount Entered", "", ""
	    JavaDialog("Add Tender Window").JavaEdit("txtTenderAmount").Activate
	    
	    If JavaDialog("Add Tender Window").JavaEdit("txtUnabletoConnectAJB").Exist(3) Then
	    	JavaDialog("Add Tender Window").JavaButton("btnYes").Click
	    End If
	    
	    If JavaDialog("Add Tender Window").JavaEdit("txtTenderAmount").Exist(2) Then
	    	'Environment("stepnum") = Environment("stepnum") + 1
		    JavaDialog("Add Tender Window").JavaEdit("txtTenderAmount").Set Environment("creditamount")
		    LogReport "Done", "Step "&Environment("stepnum")& " Input Credit Card Amount", "Credit Card Amount Entered", "", ""
		    JavaDialog("Add Tender Window").JavaEdit("txtTenderAmount").Activate    	
	    End If
	    
	    'enter card number 4221234567
	    'Environment("stepnum") = Environment("stepnum") + 1
	    JavaDialog("Add Tender Window").JavaEdit("txtCreditCard").Set Environment("cardnumber")
	    LogReport "Done", "Step "&Environment("stepnum")& " Input Card Number", "Card Number Entered", "", ""
	    JavaDialog("Add Tender Window").JavaEdit("txtCreditCard").Activate
	    
	    'enter card expiration 1220
	    wait 1
	    'Environment("stepnum") = Environment("stepnum") + 1
		JavaDialog("Add Tender Window").JavaEdit("txtCreditCard").Set Environment("cardexpiration")
		LogReport "Done", "Step "&Environment("stepnum")& " Input Card Expiration Date", "Expiration Date Entered", "", ""
		JavaDialog("Add Tender Window").JavaEdit("txtCreditCard").Activate
		
		'enter authorization code 111111
		wait 1
		'Environment("stepnum") = Environment("stepnum") + 1
	    JavaDialog("Add Tender Window").JavaEdit("txtAuthorizationCode").Set Environment("authorizationcode")
		LogReport "Done", "Step "&Environment("stepnum")& " Input Authorization Code", "Authorization Code Entered", "", ""
		JavaDialog("Add Tender Window").JavaEdit("txtAuthorizationCode").Activate
		
	
	Case "cash"
	
		'Environment("stepnum") = Environment("stepnum") + 1
	    WaitForObject JavaDialog("Add Tender Window").JavaEdit("txtTenderAmount")
	    JavaDialog("Add Tender Window").JavaEdit("txtTenderAmount").Set Environment("cashamount")
	    LogReport "Done", "Step "&Environment("stepnum")& " Input Cash Amount", "Cash Amount Entered", "", ""
	    JavaDialog("Add Tender Window").JavaEdit("txtTenderAmount").Activate
	    
	
	Case "check"
	'di pa natuloy after sa state, need data
		'enter micr num 1111111111
		'Environment("stepnum") = Environment("stepnum") + 1
		WaitForObject JavaDialog("Add Tender Window").JavaEdit("txtCheck")
		JavaDialog("Add Tender Window").JavaEdit("txtCheck").Set Environment("micrnumber")
		LogReport "Done", "Step "&Environment("stepnum")& " Input MICR Number", "MICR Number Entered", "", ""
		JavaDialog("Add Tender Window").JavaEdit("txtCheck").Activate
		
		'enter check num
		wait 1
		'Environment("stepnum") = Environment("stepnum") + 1
		JavaDialog("Add Tender Window").JavaEdit("txtCheck").Set Environment("checknumber")
		LogReport "Done", "Step "&Environment("stepnum")& " Input Check Number", "Check Number Entered", "", ""
		JavaDialog("Add Tender Window").JavaEdit("txtCheck").Activate
		
		'enter state that issued the id
		wait 1
		'Environment("stepnum") = Environment("stepnum") + 1
		JavaDialog("Add Tender Window").JavaEdit("txtTenderAmount").Set Environment("state")
		LogReport "Done", "Step "&Environment("stepnum")& " Input State Number", "State Number Entered", "", ""
		JavaDialog("Add Tender Window").JavaEdit("txtTenderAmount").Activate
		
	
	Case "redeem gift card"
	'nastuck after i YES sa unable to connect to AJB
		'enter giftcard number 6035710179203356897
		'Environment("stepnum") = Environment("stepnum") + 1
		WaitForObject JavaDialog("Add Tender Window").JavaEdit("txtVoucher")
		JavaDialog("Add Tender Window").JavaEdit("txtVoucher").Set Environment("giftcardnumber")
		LogReport "Done", "Step "&Environment("stepnum")& " Input Giftcard Number", "Giftcard Number Entered", "", ""
		JavaDialog("Add Tender Window").JavaEdit("txtVoucher").Activate
		
		'enter redeem amount
		wait 1
		'Environment("stepnum") = Environment("stepnum") + 1
		JavaDialog("Add Tender Window").JavaEdit("txtVoucher").Set Environment("redeemamount")
		LogReport "Done", "Step "&Environment("stepnum")& " Input Redeem Amount", "Redeem Amount Entered", "", ""
		JavaDialog("Add Tender Window").JavaEdit("txtVoucher").Activate
		
		'enter card id
		wait 1
		'Environment("stepnum") = Environment("stepnum") + 1
		JavaDialog("Add Tender Window").JavaEdit("txtGiftCard").Set Environment("cardid")
		LogReport "Done", "Step "&Environment("stepnum")& " Input Card Id", "Card Id Entered", "", ""
		JavaDialog("Add Tender Window").JavaEdit("txtGiftCard").Activate
		
		If JavaDialog("Add Tender Window").JavaEdit("txtUnabletoConnectAJB").Exist(3) Then
	    	JavaDialog("Add Tender Window").JavaButton("btnYes").Click
	    End If
		
		
	Case "redeem gift certificate"
	'error GC can only be redeemed when store is online
		'enter gift certificate number 6035710179203356897
		'Environment("stepnum") = Environment("stepnum") + 1
		WaitForObject JavaDialog("Add Tender Window").JavaEdit("txtVoucher")
		JavaDialog("Add Tender Window").JavaEdit("txtVoucher").Set Environment("giftcertnumber")
		LogReport "Done", "Step "&Environment("stepnum")& " Input Gift Certificate Number", "Gift Certificate Number Entered", "", ""
		JavaDialog("Add Tender Window").JavaEdit("txtVoucher").Activate
		
		
	Case "redeem store credit"
	'not enabled
	
	
	Case "travelers check"
		
		'enter Travelers Check Amount
		'Environment("stepnum") = Environment("stepnum") + 1
	    WaitForObject JavaDialog("Add Tender Window").JavaEdit("txtTenderAmount")
	    JavaDialog("Add Tender Window").JavaEdit("txtTenderAmount").Set Environment("travelerscheckamount")
	    LogReport "Done", "Step "&Environment("stepnum")& " Input Travelers Check Amount", "Travelers Check Amount Entered", "", ""
	    JavaDialog("Add Tender Window").JavaEdit("txtTenderAmount").Activate
	    
	    
	Case "foreign currency"
		
		'select foreign currency
		'Environment("stepnum") = Environment("stepnum") + 1
		WaitForObject JavaDialog("Add Tender Window").JavaList("lstForeignCurrency")
		JavaDialog("Add Tender Window").JavaList("lstForeignCurrency").Select Environment("foreigncurrency")
		LogReport "Done", "Step "&Environment("stepnum")& " Select a Foreign Currency", "Foreign Currency selected", "", ""
		JavaDialog("Add Tender Window").JavaButton("btnOk").Click
		
		'enter Foreign Currency Amount
		'Environment("stepnum") = Environment("stepnum") + 1
	    WaitForObject JavaDialog("Add Tender Window").JavaEdit("txtTenderAmount")
	    JavaDialog("Add Tender Window").JavaEdit("txtTenderAmount").Set Environment("foreignamount")
	    LogReport "Done", "Step "&Environment("stepnum")& " Input Foreign Currency Amount", "Foreign Currency Amount Entered", "", ""
	    JavaDialog("Add Tender Window").JavaEdit("txtTenderAmount").Activate
		
	
	Case "voucher"
	'not enabled
	
	
	Case "miscellaneous"
		
		'select miscellaneous type
		'Environment("stepnum") = Environment("stepnum") + 1
		WaitForObject JavaDialog("Add Tender Window").JavaList("lstMiscellaneousList")
		JavaDialog("Add Tender Window").JavaList("lstMiscellaneousList").Select Environment("miscellaneoustype")
		LogReport "Done", "Step "&Environment("stepnum")& " Select Miscellaneous Type ", "Miscellaneous Type Selected", "", ""
		JavaDialog("Add Tender Window").JavaButton("btnOk").Click
		
		'enter account number
		'Environment("stepnum") = Environment("stepnum") + 1
		WaitForObject JavaDialog("Add Tender Window").JavaEdit("txtMiscellaneous")
		JavaDialog("Add Tender Window").JavaEdit("txtMiscellaneous").Set Environment("miscellaneousaccountnumber")
		LogReport "Done", "Step "&Environment("stepnum")& " Input Account Number", "Account Number Entered", "", ""
		JavaDialog("Add Tender Window").JavaEdit("txtMiscellaneous").Activate
		
		'enter amount
		'Environment("stepnum") = Environment("stepnum") + 1
		WaitForObject JavaDialog("Add Tender Window").JavaEdit("txtTenderAmount")
		JavaDialog("Add Tender Window").JavaEdit("txtTenderAmount").Set Environment("miscellaneousamount")
		LogReport "Done", "Step "&Environment("stepnum")& " Input Amount", "Amount Entered", "", ""
		JavaDialog("Add Tender Window").JavaEdit("txtTenderAmount").Activate


	Case "issue store credit"
		'no steps for store credit, when chosen it should proceed to display message 'Is this Sale Complete?'


End Select


'validate sale completed? dialog exist
'Environment("stepnum") = Environment("stepnum") + 1
If JavaDialog("Add Tender Window").JavaEdit("txtSaleComplete?").Exist(4) Then
    LogReport "PASSED", "Step "&Environment("stepnum")& " Validate 'Is this sale complete' is shown" , "'Is this sale complete' is shown", "'Is this sale complete' IS shown", Environment("screenshotfolder")
Else
    LogReport "FAILED", "Step "&Environment("stepnum")& " Validate 'Is this sale complete' is shown" , "'Is this sale complete' is shown", "'Is this sale complete' is NOT shown ", Environment("screenshotfolder")
End If


'Press "Yes".
'Environment("stepnum") = Environment("stepnum") + 1
JavaDialog("Add Tender Window").JavaButton("btnYes").Click
LogReport "Done", "Step "&Environment("stepnum")& " Click YES to complete sale", "Yes button is clicked", "", ""


'Select the receipt method
'Environment("stepnum") = Environment("stepnum") + 1
JavaDialog("Add Tender Window").JavaButton("btnPrintOnly").Click
LogReport "Done", "Step "&Environment("stepnum")& " Click 'Print Only' as receipt method", "Print Only button is clicked", "", ""

'Handle for Return Item "Remember to give store credit voucher to customer
If JavaDialog("Add Tender Window").JavaButton("btnOk").Exist(3) Then
    JavaDialog("Add Tender Window").JavaButton("btnOk").Click
End If

'if unable to print
IF JavaDialog("Unable to Print Window").JavaEdit("txtUnableToPrint").Exist(4) Then
    JavaDialog("Unable to Print Window").JavaButton("btnSkipPrinting").Click
End If

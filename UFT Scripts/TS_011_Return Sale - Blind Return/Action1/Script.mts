
'Test Arguments
	intStartRow = TestArgs("intStartRow")
intEndRow = TestArgs("intEndRow")


Do
	Datatable.SetCurrentRow(intStartRow)

	'screenshot parameters
	Environment("screenshotfolder") = DataTable.Value("ScreenshotFolder", "Environment")
	Func_CreateFolderStructure Environment("screenshotfolder"), 5
	
	'initialize parameter login
	Environment("logintype") = DataTable.Value("LoginType", "TS_011")
	Environment("username") = DataTable.Value("RegisterUsername", "TS_011")
	Environment("password") = DataTable.Value("RegisterPassword", "TS_011")
	
	'initialize commissioned associate
	Environment("commissionedassociateid") = DataTable.Value("CommissionedAssociateID", "TS_011")
	
	'initialize parameter customer lookup
	Environment("lastname") = DataTable.Value("CustomerLastName", "TS_011")
	Environment("firstname") = DataTable.Value("CustomerFirstName", "TS_011")
	
	'initialize parameter enter SKU in sales window
	Environment("skunumber") = DataTable.Value("SKUNumber", "TS_011")
	
	'initialize parameter for return item
	Environment("returntype") = DataTable.Value("ReturnType", "TS_011")
	Environment("strreturnlineitem") = DataTable.Value("ReturnLineItem", "TS_011")
	Environment("strreturncomment") = DataTable.Value("ReturnComment", "TS_011")
	
	'initialize parameter add tenders
	Environment("tendertype") = DataTable.Value("TenderLineItemNo", "TS_011")
	Environment("tendertypevalue") = DataTable.Value("TenderType", "TS_011")
	'credit card
	Environment("creditamount") = DataTable.Value("CreditAmount", "TS_011")
	Environment("cardnumber") = DataTable.Value("CreditCardNumber", "TS_011")
	Environment("cardexpiration") = DataTable.Value("CreditCardExpiration", "TS_011")
	Environment("authorizationcode") = DataTable.Value("CreditAuthorizationCode", "TS_011")
	'cash
	Environment("cashamount") = DataTable.Value("CashAmount", "TS_011")
	'check
	Environment("micrnumber") = DataTable.Value("CheckMICRNumber", "TS_011")
	Environment("checknumber") = DataTable.Value("CheckNumber", "TS_011")
	Environment("state") = DataTable.Value("CheckState", "TS_011")
	'giftcard
	Environment("giftcardnumber") = DataTable.Value("GiftcardNumber", "TS_011")
	Environment("redeemamount") = DataTable.Value("GiftcardRedeemAmount", "TS_011")
	Environment("cardid") = DataTable.Value("GiftcardCardID", "TS_011")
	'gift cert
	Environment("giftcertnumber") = DataTable.Value("GiftCertificateNumber", "TS_011")
	'travelers check
	Environment("travelerscheckamount") = DataTable.Value("TravelersCheckAmount", "TS_011")
	'foreign currency
	Environment("foreigncurrency") = DataTable.Value("ForeignCurrencyLineItemNo", "TS_011")
	Environment("foreignamount") = DataTable.Value("ForeignCurrencyAmount", "TS_011")
	'miscellaneous
	Environment("miscellaneoustype") = DataTable.Value("MiscellaneousTypeLineItemNo", "TS_011")
	Environment("miscellaneousaccountnumber") = DataTable.Value("MiscellaneousAccountNumber", "TS_011")
	Environment("miscellaneousamount") = DataTable.Value("MiscellaneousAmount", "TS_011")

	Environment("returncomment") = DataTable.Value("ReturnComment", "TS_011")
	
	'step numbering
	Environment("stepnum") = 1
	
	'login
	RunAction "Login [Login]", oneIteration
	
	'commissioned associate
	RunAction "Commissioned Associate Screen [Commissioned Associate Screen]", oneIteration

	'Customer Lookup
	RunAction "Customer Lookup [Customer Lookup]", oneIteration

	
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

	
	'Return Item
	RunAction "Return Item [Return Item]", oneIteration

	'add tenders
	RunAction "Add Tenders [Add Tenders]", oneIteration


	intStartRow = intStartRow + 1
	
Loop While intStartRow <= intEndRow

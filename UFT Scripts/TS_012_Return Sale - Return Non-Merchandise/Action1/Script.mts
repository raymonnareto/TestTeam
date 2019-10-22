
'Test Arguments
	intStartRow = TestArgs("intStartRow")
intEndRow = TestArgs("intEndRow")


Do
	Datatable.SetCurrentRow(intStartRow)

	'screenshot parameters
	Environment("screenshotfolder") = DataTable.Value("ScreenshotFolder", "Environment")
	Func_CreateFolderStructure Environment("screenshotfolder"), 5
	
	'initialize parameter login
	Environment("logintype") = DataTable.Value("LoginType", "TS_012")
	Environment("username") = DataTable.Value("RegisterUsername", "TS_012")
	Environment("password") = DataTable.Value("RegisterPassword", "TS_012")
	
	'initialize commissioned associate
	Environment("commissionedassociateid") = DataTable.Value("CommissionedAssociateID", "TS_012")
	
	'initialize parameter customer lookup
	Environment("lastname") = DataTable.Value("CustomerLastName", "TS_012")
	Environment("firstname") = DataTable.Value("CustomerFirstName", "TS_012")
	
	'initialize parameter enter SKU in sales window
	Environment("skunumber") = DataTable.Value("SKUNumber", "TS_012")
	
	'initialize parameter for return item
	Environment("returntype") = DataTable.Value("ReturnType", "TS_012")
	Environment("strreturnlineitem") = DataTable.Value("ReturnLineItem", "TS_012")
	Environment("strreturncomment") = DataTable.Value("ReturnComment", "TS_012")
	
	'initialize parameter for return non-merch
	Environment("returntype") = DataTable.Value("ReturnType", "TS_012")
	Environment("strnonmerchfunc") = DataTable.Value("ReturnNonMerchFuncLineItem", "TS_012")
	Environment("strnonmerchitem") = DataTable.Value("ReturnNonMerchandiseLinItem", "TS_012")
	Environment("strnonmerchcomment") = DataTable.Value("ReturnNonMerchComment", "TS_012")
	Environment("varnonmerchprice") = DataTable.Value("ReturnNonMerchPrice", "TS_012")

	'initialize parameter add tenders
	Environment("tendertype") = DataTable.Value("TenderLineItemNo", "TS_012")
	Environment("tendertypevalue") = DataTable.Value("TenderType", "TS_012")
	'credit card
	Environment("creditamount") = DataTable.Value("CreditAmount", "TS_012")
	Environment("cardnumber") = DataTable.Value("CreditCardNumber", "TS_012")
	Environment("cardexpiration") = DataTable.Value("CreditCardExpiration", "TS_012")
	Environment("authorizationcode") = DataTable.Value("CreditAuthorizationCode", "TS_012")
	'cash
	Environment("cashamount") = DataTable.Value("CashAmount", "TS_012")
	'check
	Environment("micrnumber") = DataTable.Value("CheckMICRNumber", "TS_012")
	Environment("checknumber") = DataTable.Value("CheckNumber", "TS_012")
	Environment("state") = DataTable.Value("CheckState", "TS_012")
	'giftcard
	Environment("giftcardnumber") = DataTable.Value("GiftcardNumber", "TS_012")
	Environment("redeemamount") = DataTable.Value("GiftcardRedeemAmount", "TS_012")
	Environment("cardid") = DataTable.Value("GiftcardCardID", "TS_012")
	'gift cert
	Environment("giftcertnumber") = DataTable.Value("GiftCertificateNumber", "TS_012")
	'travelers check
	Environment("travelerscheckamount") = DataTable.Value("TravelersCheckAmount", "TS_012")
	'foreign currency
	Environment("foreigncurrency") = DataTable.Value("ForeignCurrencyLineItemNo", "TS_012")
	Environment("foreignamount") = DataTable.Value("ForeignCurrencyAmount", "TS_012")
	'miscellaneous
	Environment("miscellaneoustype") = DataTable.Value("MiscellaneousTypeLineItemNo", "TS_012")
	Environment("miscellaneousaccountnumber") = DataTable.Value("MiscellaneousAccountNumber", "TS_012")
	Environment("miscellaneousamount") = DataTable.Value("MiscellaneousAmount", "TS_012")
	
	Environment("returncomment") = DataTable.Value("ReturnComment", "TS_012")
	
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

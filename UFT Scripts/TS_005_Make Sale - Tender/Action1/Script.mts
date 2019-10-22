
'Test Arguments
intStartRow = TestArgs("intStartRow")
intEndRow = TestArgs("intEndRow")


Do
	Datatable.SetCurrentRow(intStartRow)

	'screenshot parameters
	Environment("screenshotfolder") = DataTable.Value("ScreenshotFolder", "Environment")
	Func_CreateFolderStructure Environment("screenshotfolder"), 5
	
	'initialize parameter login
	Environment("logintype") = DataTable.Value("LoginType", "TS_005")
	Environment("username") = DataTable.Value("RegisterUsername", "TS_005")
	Environment("password") = DataTable.Value("RegisterPassword", "TS_005")
	
	'initialize commissioned associate
	Environment("commissionedassociateid") = DataTable.Value("CommissionedAssociateID", "TS_005")
	
	'initialize parameter customer lookup
	Environment("lastname") = DataTable.Value("CustomerLastName", "TS_005")
	Environment("firstname") = DataTable.Value("CustomerFirstName", "TS_005")
	
	'initialize parameter enter SKU in sales window
	Environment("skunumber") = DataTable.Value("SKUNumber", "TS_005")
	
	
	'initialize parameter add tenders
	Environment("tendertype") = DataTable.Value("TenderLineItemNo", "TS_005")
	Environment("tendertypevalue") = DataTable.Value("TenderType", "TS_005")
	'credit card
	Environment("creditamount") = DataTable.Value("CreditAmount", "TS_005")
	Environment("cardnumber") = DataTable.Value("CreditCardNumber", "TS_005")
	Environment("cardexpiration") = DataTable.Value("CreditCardExpiration", "TS_005")
	Environment("authorizationcode") = DataTable.Value("CreditAuthorizationCode", "TS_005")
	'cash
	Environment("cashamount") = DataTable.Value("CashAmount", "TS_005")
	'check
	Environment("micrnumber") = DataTable.Value("CheckMICRNumber", "TS_005")
	Environment("checknumber") = DataTable.Value("CheckNumber", "TS_005")
	Environment("state") = DataTable.Value("CheckState", "TS_005")
	'giftcard
	Environment("giftcardnumber") = DataTable.Value("GiftcardNumber", "TS_005")
	Environment("redeemamount") = DataTable.Value("GiftcardRedeemAmount", "TS_005")
	Environment("cardid") = DataTable.Value("GiftcardCardID", "TS_005")
	'gift cert
	Environment("giftcertnumber") = DataTable.Value("GiftCertificateNumber", "TS_005")
	'travelers check
	Environment("travelerscheckamount") = DataTable.Value("TravelersCheckAmount", "TS_005")
	'foreign currency
	Environment("foreigncurrency") = DataTable.Value("ForeignCurrencyLineItemNo", "TS_005")
	Environment("foreignamount") = DataTable.Value("ForeignCurrencyAmount", "TS_005")
	'miscellaneous
	Environment("miscellaneoustype") = DataTable.Value("MiscellaneousTypeLineItemNo", "TS_005")
	Environment("miscellaneousaccountnumber") = DataTable.Value("MiscellaneousAccountNumber", "TS_005")
	Environment("miscellaneousamount") = DataTable.Value("MiscellaneousAmount", "TS_005")
	
	
	'step numbering
	Environment("stepnum") = 1
	
	
	'login
	RunAction "Login [Login]", oneIteration
	
	
	'commissioned associate
	RunAction "Commissioned Associate Screen [Commissioned Associate Screen]", oneIteration
	
	
	'customer lookup
	RunAction "Customer Lookup [Customer Lookup]", oneIteration
	
	
	'sale window
	RunAction "Enter SKU in Sales Window [Enter SKU in Sales Window]", oneIteration
	
	
	'add tenders
	RunAction "Add Tenders [Add Tenders]", oneIteration

	intStartRow = intStartRow + 1
	
Loop While intStartRow <= intEndRow

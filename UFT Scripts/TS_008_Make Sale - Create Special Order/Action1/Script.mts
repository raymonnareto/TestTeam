
'Test Arguments
intStartRow = TestArgs("intStartRow")
intEndRow = TestArgs("intEndRow")


Do
	Datatable.SetCurrentRow(intStartRow)
	
	'screenshot parameters
	Environment("screenshotfolder") = DataTable.Value("ScreenshotFolder", "Environment")
	Func_CreateFolderStructure Environment("screenshotfolder"), 5
	
	'initialize parameter login
	Environment("logintype") = DataTable.Value("LoginType", "TS_008")
	Environment("username") = DataTable.Value("RegisterUsername", "TS_008")
	Environment("password") = DataTable.Value("RegisterPassword", "TS_008")
	
	'initialize commissioned associate
	Environment("commissionedassociateid") = DataTable.Value("CommissionedAssociateID", "TS_008")
	
	'initialize parameter customer lookup
	Environment("lastname") = DataTable.Value("CustomerLastName", "TS_008")
	Environment("firstname") = DataTable.Value("CustomerFirstName", "TS_008")

	'initialize parameter special order
	Environment("itemid") = DataTable.Value("ItemID", "TS_008")
	
	'initialize parameter add tender
	Environment("tendertype") = DataTable.Value("TenderLineItemNo", "TS_008")
	Environment("tendertypevalue") = DataTable.Value("TenderType", "TS_008")
	'credit card
	Environment("creditamount") = DataTable.Value("CreditAmount", "TS_008")
	Environment("cardnumber") = DataTable.Value("CreditCardNumber", "TS_008")
	Environment("cardexpiration") = DataTable.Value("CreditCardExpiration", "TS_008")
	Environment("authorizationcode") = DataTable.Value("CreditAuthorizationCode", "TS_008")
	'cash
	Environment("cashamount") = DataTable.Value("CashAmount", "TS_008")
	'check
	Environment("micrnumber") = DataTable.Value("CheckMICRNumber", "TS_008")
	Environment("checknumber") = DataTable.Value("CheckNumber", "TS_008")
	Environment("state") = DataTable.Value("CheckState", "TS_008")
	'giftcard
	Environment("giftcardnumber") = DataTable.Value("GiftcardNumber", "TS_008")
	Environment("redeemamount") = DataTable.Value("GiftcardRedeemAmount", "TS_008")
	Environment("cardid") = DataTable.Value("GiftcardCardID", "TS_008")
	'gift cert
	Environment("giftcertnumber") = DataTable.Value("GiftCertificateNumber", "TS_008")
	'travelers check
	Environment("travelerscheckamount") = DataTable.Value("TravelersCheckAmount", "TS_008")
	'foreign currency
	Environment("foreigncurrency") = DataTable.Value("ForeignCurrencyLineItemNo", "TS_008")
	Environment("foreignamount") = DataTable.Value("ForeignCurrencyAmount", "TS_008")
	'miscellaneous
	Environment("miscellaneoustype") = DataTable.Value("MiscellaneousTypeLineItemNo", "TS_008")
	Environment("miscellaneousaccountnumber") = DataTable.Value("MiscellaneousAccountNumber", "TS_008")
	Environment("miscellaneousamount") = DataTable.Value("MiscellaneousAmount", "TS_008")
	
	
	'step numbering
	Environment("stepnum") = 1
	
	
	'login
	RunAction "Login [Login]", oneIteration
	
	
	'commissioned associate
	RunAction "Commissioned Associate Screen [Commissioned Associate Screen]", oneIteration

	
	'customer lookup
	RunAction "Customer Lookup [Customer Lookup]", oneIteration
	
	
	'special order
	RunAction "Special Order [Special Order]", oneIteration
	
	
	'add tender
	RunAction "Add Tenders [Add Tenders]", oneIteration
	
	
	
	intStartRow = intStartRow + 1
	
Loop While intStartRow <= intEndRow

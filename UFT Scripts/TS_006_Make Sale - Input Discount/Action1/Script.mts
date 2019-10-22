
'Test Arguments
intStartRow = TestArgs("intStartRow")
intEndRow = TestArgs("intEndRow")


Do
	Datatable.SetCurrentRow(intStartRow)
	
	'screenshot parameters
	Environment("screenshotfolder") = DataTable.Value("ScreenshotFolder", "Environment")
	Func_CreateFolderStructure Environment("screenshotfolder"), 5
	
	'initialize parameter login
	Environment("logintype") = DataTable.Value("LoginType", "TS_006")
	Environment("username") = DataTable.Value("RegisterUsername", "TS_006")
	Environment("password") = DataTable.Value("RegisterPassword", "TS_006")
	
	'initialize commissioned associate
	Environment("commissionedassociateid") = DataTable.Value("CommissionedAssociateID", "TS_006")
	
	'initialize parameter customer lookup
	Environment("lastname") = DataTable.Value("CustomerLastName", "TS_006")
	Environment("firstname") = DataTable.Value("CustomerFirstName", "TS_006")
	
	'initialize parameter enter SKU in sales window
	Environment("skunumber") = DataTable.Value("SKUNumber", "TS_006")
	
	'initialize parameter add discount
	Environment("discountoption") = DataTable.Value("DiscountOptionsItemNo", "TS_006")
	Environment("discountreasoncode") = DataTable.Value("DiscountReasonCodeItemNo", "TS_006")
	Environment("discountamount") = DataTable.Value("DiscountAmountOrPercent", "TS_006")
	
	
	'initialize parameter add tender
	Environment("tendertype") = DataTable.Value("TenderLineItemNo", "TS_006")
	Environment("tendertypevalue") = DataTable.Value("TenderType", "TS_006")
	'credit card
	Environment("creditamount") = DataTable.Value("CreditAmount", "TS_006")
	Environment("cardnumber") = DataTable.Value("CreditCardNumber", "TS_006")
	Environment("cardexpiration") = DataTable.Value("CreditCardExpiration", "TS_006")
	Environment("authorizationcode") = DataTable.Value("CreditAuthorizationCode", "TS_006")
	'cash
	Environment("cashamount") = DataTable.Value("CashAmount", "TS_006")
	'check
	Environment("micrnumber") = DataTable.Value("CheckMICRNumber", "TS_006")
	Environment("checknumber") = DataTable.Value("CheckNumber", "TS_006")
	Environment("state") = DataTable.Value("CheckState", "TS_006")
	'giftcard
	Environment("giftcardnumber") = DataTable.Value("GiftcardNumber", "TS_006")
	Environment("redeemamount") = DataTable.Value("GiftcardRedeemAmount", "TS_006")
	Environment("cardid") = DataTable.Value("GiftcardCardID", "TS_006")
	'gift cert
	Environment("giftcertnumber") = DataTable.Value("GiftCertificateNumber", "TS_006")
	'travelers check
	Environment("travelerscheckamount") = DataTable.Value("TravelersCheckAmount", "TS_006")
	'foreign currency
	Environment("foreigncurrency") = DataTable.Value("ForeignCurrencyLineItemNo", "TS_006")
	Environment("foreignamount") = DataTable.Value("ForeignCurrencyAmount", "TS_006")
	'miscellaneous
	Environment("miscellaneoustype") = DataTable.Value("MiscellaneousTypeLineItemNo", "TS_006")
	Environment("miscellaneousaccountnumber") = DataTable.Value("MiscellaneousAccountNumber", "TS_006")
	Environment("miscellaneousamount") = DataTable.Value("MiscellaneousAmount", "TS_006")
	
	
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
	
	
	'add discount
	RunAction "Add Discount [Add Discount]", oneIteration
	
	
	'add tender
	RunAction "Add Tenders [Add Tenders]", oneIteration
	
	
	intStartRow = intStartRow + 1
	
Loop While intStartRow <= intEndRow

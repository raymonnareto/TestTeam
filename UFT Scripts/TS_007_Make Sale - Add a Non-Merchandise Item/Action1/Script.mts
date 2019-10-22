
'Test Arguments
intStartRow = TestArgs("intStartRow")
intEndRow = TestArgs("intEndRow")


Do
	Datatable.SetCurrentRow(intStartRow)
	
	'screenshot parameters
	Environment("screenshotfolder") = DataTable.Value("ScreenshotFolder", "Environment")
	Func_CreateFolderStructure Environment("screenshotfolder"), 5
	
	'initialize parameter login
	Environment("logintype") = DataTable.Value("LoginType", "TS_007")
	Environment("username") = DataTable.Value("RegisterUsername", "TS_007")
	Environment("password") = DataTable.Value("RegisterPassword", "TS_007")
	
	'initialize commissioned associate
	Environment("commissionedassociateid") = DataTable.Value("CommissionedAssociateID", "TS_007")
	
	'initialize parameter customer lookup
	Environment("lastname") = DataTable.Value("CustomerLastName", "TS_007")
	Environment("firstname") = DataTable.Value("CustomerFirstName", "TS_007")
	
	'initialize parameter sell non merch
	Environment("nonmerchoption") = DataTable.Value("NonMerchandiseOptionItemNo", "TS_007")
	Environment("nonmerchitem") = DataTable.Value("NonMerchandiseItemItemNo", "TS_007")
	Environment("comments") = DataTable.Value("NonMerchComments", "TS_007")
	Environment("itemprice") = DataTable.Value("NonMerchItemPrice", "TS_007")
	
	'initialize parameter add tender
	Environment("tendertype") = DataTable.Value("TenderLineItemNo", "TS_007")
	Environment("tendertypevalue") = DataTable.Value("TenderType", "TS_007")
	'credit card
	Environment("creditamount") = DataTable.Value("CreditAmount", "TS_007")
	Environment("cardnumber") = DataTable.Value("CreditCardNumber", "TS_007")
	Environment("cardexpiration") = DataTable.Value("CreditCardExpiration", "TS_007")
	Environment("authorizationcode") = DataTable.Value("CreditAuthorizationCode", "TS_007")
	'cash
	Environment("cashamount") = DataTable.Value("CashAmount", "TS_007")
	'check
	Environment("micrnumber") = DataTable.Value("CheckMICRNumber", "TS_007")
	Environment("checknumber") = DataTable.Value("CheckNumber", "TS_007")
	Environment("state") = DataTable.Value("CheckState", "TS_007")
	'giftcard
	Environment("giftcardnumber") = DataTable.Value("GiftcardNumber", "TS_007")
	Environment("redeemamount") = DataTable.Value("GiftcardRedeemAmount", "TS_007")
	Environment("cardid") = DataTable.Value("GiftcardCardID", "TS_007")
	'gift cert
	Environment("giftcertnumber") = DataTable.Value("GiftCertificateNumber", "TS_007")
	'travelers check
	Environment("travelerscheckamount") = DataTable.Value("TravelersCheckAmount", "TS_007")
	'foreign currency
	Environment("foreigncurrency") = DataTable.Value("ForeignCurrencyLineItemNo", "TS_007")
	Environment("foreignamount") = DataTable.Value("ForeignCurrencyAmount", "TS_007")
	'miscellaneous
	Environment("miscellaneoustype") = DataTable.Value("MiscellaneousTypeLineItemNo", "TS_007")
	Environment("miscellaneousaccountnumber") = DataTable.Value("MiscellaneousAccountNumber", "TS_007")
	Environment("miscellaneousamount") = DataTable.Value("MiscellaneousAmount", "TS_007")

	
	'step numbering
	Environment("stepnum") = 1
	
	
	'login	
	RunAction "Login [Login]", oneIteration
	
	
	'commissioned associate
	RunAction "Commissioned Associate Screen [Commissioned Associate Screen]", oneIteration
	
	
	'customer lookup
	RunAction "Customer Lookup [Customer Lookup]", oneIteration
	
	
	'sell non merch
	RunAction "Sell Non Merch [Sell Non Merch]", oneIteration
	
	
	'add tender
	RunAction "Add Tenders [Add Tenders]", oneIteration
	
	
	intStartRow = intStartRow + 1
	
Loop While intStartRow <= intEndRow

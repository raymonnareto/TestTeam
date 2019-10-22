
'Test Arguments
intStartRow = TestArgs("intStartRow")
intEndRow = TestArgs("intEndRow")


Do
	Datatable.SetCurrentRow(intStartRow)
	
	'screenshot parameters
	Environment("screenshotfolder") = DataTable.Value("ScreenshotFolder", "Environment")
	Func_CreateFolderStructure Environment("screenshotfolder"), 5
	
	'initialize parameter login
	Environment("logintype") = DataTable.Value("LoginType", "TS_009")
	Environment("username") = DataTable.Value("RegisterUsername", "TS_009")
	Environment("password") = DataTable.Value("RegisterPassword", "TS_009")
	
	'initialize commissioned associate
	Environment("commissionedassociateid") = DataTable.Value("CommissionedAssociateID", "TS_009")
	
	'initialize parameter customer lookup
	Environment("lastname") = DataTable.Value("CustomerLastName", "TS_009")
	Environment("firstname") = DataTable.Value("CustomerFirstName", "TS_009")
	
	'initialize parameter sell non merch
	Environment("nonmerchoption") = DataTable.Value("NonMerchandiseOptionItemNo", "TS_009")
	Environment("voucheramount") = DataTable.Value("VoucherAmount", "TS_009")
	
	'initialize parameter add discount
	Environment("discountoption") = DataTable.Value("DiscountOptionsItemNo", "TS_009")
	Environment("discountreasoncode") = DataTable.Value("DiscountReasonCodeItemNo", "TS_009")
	Environment("discountamount") = DataTable.Value("DiscountAmountOrPercent", "TS_009")
	
	'initialize parameter add tender
	Environment("tendertype") = DataTable.Value("TenderLineItemNo", "TS_009")
	Environment("tendertypevalue") = DataTable.Value("TenderType", "TS_009")
	'credit card
	Environment("creditamount") = DataTable.Value("CreditAmount", "TS_009")
	Environment("cardnumber") = DataTable.Value("CreditCardNumber", "TS_009")
	Environment("cardexpiration") = DataTable.Value("CreditCardExpiration", "TS_009")
	Environment("authorizationcode") = DataTable.Value("CreditAuthorizationCode", "TS_009")
	'cash
	Environment("cashamount") = DataTable.Value("CashAmount", "TS_009")
	'check
	Environment("micrnumber") = DataTable.Value("CheckMICRNumber", "TS_009")
	Environment("checknumber") = DataTable.Value("CheckNumber", "TS_009")
	Environment("state") = DataTable.Value("CheckState", "TS_009")
	'giftcard
	Environment("giftcardnumber") = DataTable.Value("GiftcardNumber", "TS_009")
	Environment("redeemamount") = DataTable.Value("GiftcardRedeemAmount", "TS_009")
	Environment("cardid") = DataTable.Value("GiftcardCardID", "TS_009")
	'gift cert
	Environment("giftcertnumber") = DataTable.Value("GiftCertificateNumber", "TS_009")
	'travelers check
	Environment("travelerscheckamount") = DataTable.Value("TravelersCheckAmount", "TS_009")
	'foreign currency
	Environment("foreigncurrency") = DataTable.Value("ForeignCurrencyLineItemNo", "TS_009")
	Environment("foreignamount") = DataTable.Value("ForeignCurrencyAmount", "TS_009")
	'miscellaneous
	Environment("miscellaneoustype") = DataTable.Value("MiscellaneousTypeLineItemNo", "TS_009")
	Environment("miscellaneousaccountnumber") = DataTable.Value("MiscellaneousAccountNumber", "TS_009")
	Environment("miscellaneousamount") = DataTable.Value("MiscellaneousAmount", "TS_009")

	
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

	
	
	'add discount
	RunAction "Add Discount [Add Discount]", oneIteration
	
	
	
	'add tender
	RunAction "Add Tenders [Add Tenders]", oneIteration

	
	
	intStartRow = intStartRow + 1
	
Loop While intStartRow <= intEndRow

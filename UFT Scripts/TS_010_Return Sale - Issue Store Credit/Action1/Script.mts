
'Test Arguments
intStartRow = TestArgs("intStartRow")
intEndRow = TestArgs("intEndRow")


Do
	Datatable.SetCurrentRow(intStartRow)

	'screenshot parameters
	Environment("screenshotfolder") = DataTable.Value("ScreenshotFolder", "Environment")
	Func_CreateFolderStructure Environment("screenshotfolder"), 5
	
	'initialize parameter login
	Environment("logintype") = DataTable.Value("LoginType", "TS_010")
	Environment("username") = DataTable.Value("RegisterUsername", "TS_010")
	Environment("password") = DataTable.Value("RegisterPassword", "TS_010")
	
	'initialize commissioned associate
	Environment("commissionedassociateid") = DataTable.Value("CommissionedAssociateID", "TS_010")
	
	'initialize parameter customer lookup
	Environment("lastname") = DataTable.Value("CustomerLastName", "TS_010")
	Environment("firstname") = DataTable.Value("CustomerFirstName", "TS_010")

	'initialize parameter for return item
	Environment("returntype") = DataTable.Value("ReturnType", "TS_010")
	Environment("strreturnlineitem") = DataTable.Value("ReturnLineItem", "TS_010")
	Environment("strreturncomment") = DataTable.Value("ReturnComment", "TS_010")
	Environment("strgiftreceipt") = DataTable.Value("GiftReceipt", "TS_010")
	Environment("origticketid") = DataTable.Value("OriginalTicketID", "TS_010")
	Environment("origtransdate") = DataTable.Value("OriginalTransDate", "TS_010")
	Environment("origstoreid") = DataTable.Value("OriginalStoreID", "TS_010")
	Environment("origregisterid") = DataTable.Value("OriginalRegisterID", "TS_010")
	
	'initialize parameter add tenders
	Environment("tendertype") = DataTable.Value("TenderLineItemNo", "TS_010")
	Environment("returncomment") = DataTable.Value("ReturnComment", "TS_010")
	Environment("tendertypevalue") = DataTable.Value("TenderType", "TS_010")
	
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


'Test Arguments
intStartRow = TestArgs("intStartRow")
intEndRow = TestArgs("intEndRow")


'screenshot parameters
Environment("screenshotfolder") = DataTable.Value("ScreenshotFolder", "Environment")
Func_CreateFolderStructure Environment("screenshotfolder"), 5

	
Do
	Datatable.SetCurrentRow(intStartRow)
	
	'screenshot parameters
	Environment("screenshotfolder") = DataTable.Value("ScreenshotFolder", "Environment")
	Func_CreateFolderStructure Environment("screenshotfolder"), 5
	
	'step numbering
	Environment("stepnum") = 1
	
	'initialize parameter login
	Environment("logintype") = DataTable.Value("LoginType", "TS_003")
	Environment("username") = DataTable.Value("RegisterUsername", "TS_003")
	Environment("password") = DataTable.Value("RegisterPassword", "TS_003")
	
	'initialize commissioned associate
	Environment("commissionedassociateid") = DataTable.Value("CommissionedAssociateID", "TS_003")
	
	'initialize parameter customer lookup (search customer)
	Environment("lastname") = DataTable.Value("CustomerLastName", "TS_003")
	Environment("firstname") = DataTable.Value("CustomerFirstName", "TS_003")
	
	'Login in XStore 
	RunAction "Login [Login]", oneIteration

	'Select Commissioned Associate
	RunAction "Commissioned Associate Screen [Commissioned Associate Screen]", oneIteration
	
	'customer lookup
	RunAction "Customer Lookup [Customer Lookup]", oneIteration
	
	
	'navigate customer window
	RunAction "Navigate Customer Window [Navigate Customer Window]", oneIteration
	
	
	intStartRow = intStartRow + 1
	
Loop While intStartRow <= intEndRow

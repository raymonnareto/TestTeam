
'Test Arguments
intStartRow = TestArgs("intStartRow")
intEndRow = TestArgs("intEndRow")


Do
	Datatable.SetCurrentRow(intStartRow)
	
	'screenshot parameters
	Environment("screenshotfolder") = DataTable.Value("ScreenshotFolder", "Environment")
	Func_CreateFolderStructure Environment("screenshotfolder"), 5
	
	'initialize parameter login
	Environment("logintype") = DataTable.Value("LoginType", "TS_013")
	Environment("username") = DataTable.Value("ManageTillUsername", "TS_013")
	Environment("password") = DataTable.Value("ManageTillPassword", "TS_013")
		
	'initialize parameter post void	
	Environment("pastorigticketid") = DataTable.Value("PastDateOrigTicketID", "TS_013")
	Environment("pastorigtransdate") = DataTable.Value("PastDateOrigTransDate", "TS_013")
	Environment("pastorigstoreid") = DataTable.Value("PastDateOrigStoreID", "TS_013")
	Environment("pastorigregisterid") = DataTable.Value("PastDateOrigRegisterID", "TS_013")
	Environment("pastorigtransamount") = DataTable.Value("PastDateOrigTransAmount", "TS_013")
	
	Environment("currentorigticketid") = DataTable.Value("CurrentDateOrigTicketID", "TS_013")
	Environment("currentorigtransdate") = DataTable.Value("CurrentDateOrigTransDate", "TS_013")
	Environment("currentorigstoreid") = DataTable.Value("CurrentDateOrigStoreID", "TS_013")
	Environment("currentorigregisterid") = DataTable.Value("CurrentDateOrigRegisterID", "TS_013")	
	Environment("currentorigtransamount") = DataTable.Value("CurrentDateOrigTransAmount", "TS_013")
										
	Environment("postvoidreasoncode") = DataTable.Value("PostVoidReasonCodeItemNo", "TS_013")
	
	'step numbering
	Environment("stepnum") = 1
	
	
	'login	
	RunAction "Login [Login]", oneIteration

	
	'post void from manage tills
	RunAction "Post Void from Manage Tills [Post Void from Manage Tills]", oneIteration
	
	
	
	intStartRow = intStartRow + 1
	
Loop While intStartRow <= intEndRow

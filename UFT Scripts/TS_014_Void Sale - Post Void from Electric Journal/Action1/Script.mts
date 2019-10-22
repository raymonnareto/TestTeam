
'Test Arguments
intStartRow = TestArgs("intStartRow")
intEndRow = TestArgs("intEndRow")


Do
	Datatable.SetCurrentRow(intStartRow)
	
	'screenshot parameters
	Environment("screenshotfolder") = DataTable.Value("ScreenshotFolder", "Environment")
	Func_CreateFolderStructure Environment("screenshotfolder"), 5
	
	'initialize parameter login
	Environment("logintype") = DataTable.Value("LoginType", "TS_014")
	Environment("username") = DataTable.Value("BackOfficeUsername", "TS_014")
	Environment("password") = DataTable.Value("BackOfficePassword", "TS_014")
		
	'initialize parameter electronic journal window
	Environment("mainmenuitem") = DataTable.Value("BackOfficeMainMenuItemNo", "TS_014")
	Environment("journaloptions") = DataTable.Value("JournalOptionsItemNo", "TS_014")
	Environment("ticketid") = DataTable.Value("TicketID", "TS_014")	

	'initialize parameter post void	
	Environment("postvoidreasoncode") = DataTable.Value("PostVoidReasonCodeItemNo", "TS_014")
	
	'step numbering
	Environment("stepnum") = 1
	
	
	'login	
	RunAction "Login [Login]", oneIteration

	
	'electronic journal window
	RunAction "Electronic Journal Window [Electronic Journal Window]", oneIteration
	
	
	'post void from electric journal
	RunAction "Post Void from Electric Journal [Post Void from Electric Journal]", oneIteration

	
	
	intStartRow = intStartRow + 1
	
Loop While intStartRow <= intEndRow

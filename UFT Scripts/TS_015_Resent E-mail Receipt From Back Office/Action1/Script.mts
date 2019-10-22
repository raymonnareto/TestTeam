
'Test Arguments
intStartRow = TestArgs("intStartRow")
intEndRow = TestArgs("intEndRow")


Do
	Datatable.SetCurrentRow(intStartRow)
	
	'screenshot parameters
	Environment("screenshotfolder") = DataTable.Value("ScreenshotFolder", "Environment")
	Func_CreateFolderStructure Environment("screenshotfolder"), 5
	
	'initialize parameter login
	Environment("logintype") = DataTable.Value("LoginType", "TS_015")
	Environment("username") = DataTable.Value("BackOfficeUsername", "TS_015")
	Environment("password") = DataTable.Value("BackOfficePassword", "TS_015")
		
	'initialize parameter electronic journal window
	Environment("mainmenuitem") = DataTable.Value("BackOfficeMainMenuItemNo", "TS_015")
	Environment("journaloptions") = DataTable.Value("JournalOptionsItemNo", "TS_015")
	Environment("ticketid") = DataTable.Value("TicketID", "TS_015")	


	'initialize resend email
	Environment("emailaddress") = DataTable.Value("EmailAddress", "TS_015")
	Environment("saveemail") = DataTable.Value("SaveEmailToProfile", "TS_015")
	
	'step numbering
	Environment("stepnum") = 1
	
	
	'login	
	RunAction "Login [Login]", oneIteration

	
	'electronic journal window
	RunAction "Electronic Journal Window [Electronic Journal Window]", oneIteration


	'resend email
	RunAction "Resend Email [Resend Email]", oneIteration
	
	
	intStartRow = intStartRow + 1
	
Loop While intStartRow <= intEndRow

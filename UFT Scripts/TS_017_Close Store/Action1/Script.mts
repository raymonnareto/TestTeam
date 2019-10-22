
'Test Arguments
intStartRow = TestArgs("intStartRow")
intEndRow = TestArgs("intEndRow")


Do
	Datatable.SetCurrentRow(intStartRow)
	
	'screenshot parameters
	Environment("screenshotfolder") = DataTable.Value("ScreenshotFolder", "Environment")
	Func_CreateFolderStructure Environment("screenshotfolder"), 5
	
	'initialize parameter login
	Environment("logintype") = DataTable.Value("LoginType", "TS_017")
	Environment("username") = DataTable.Value("BackOfficeUsername", "TS_017")
	Environment("password") = DataTable.Value("BackOfficePassword", "TS_017")
		
	'initialize parameter close store
	Environment("mainmenuitem") = DataTable.Value("MainMenuItemNo", "TS_017")
	Environment("opencloseitem") = DataTable.Value("OpenCloseItemNo", "TS_017")
	Environment("closingcomment") = DataTable.Value("ClosingComment", "TS_017")
	
	Environment("firstfile") = DataTable.Value("FirstFileOutputLocation", "Environment")
	Environment("secondfile") = DataTable.Value("SecondFileOutputLocation", "Environment")

	'step numbering
	Environment("stepnum") = 1
	
	
	'login	
	RunAction "Login [Login]", oneIteration


	'close store
	RunAction "Close Store [Close Store]", oneIteration

	
	intStartRow = intStartRow + 1
	
Loop While intStartRow <= intEndRow

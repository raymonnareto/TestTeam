
'Test Arguments
intStartRow = TestArgs("intStartRow")
intEndRow = TestArgs("intEndRow")

'screenshot parameters
Environment("screenshotfolder") = DataTable.Value("ScreenshotFolder", "Environment")
Func_CreateFolderStructure Environment("screenshotfolder"), 5

'initialize parameter login
Environment("logintype") = DataTable.Value("LoginType", "TS_001")
Environment("username") = DataTable.Value("BackOfficeUsername", "TS_001")
Environment("password") = DataTable.Value("BackOfficePassword", "TS_001")

'step numbering
Environment("stepnum") = 1

'Log into XStore (Back Office)
RunAction "Login [Login]", oneIteration

Do
	Datatable.SetCurrentRow(intStartRow)

	'screenshot parameters
	Environment("screenshotfolder") = DataTable.Value("ScreenshotFolder", "Environment")
	Func_CreateFolderStructure Environment("screenshotfolder"), 5
		
	'initialize parameter Open store
	Environment("mainmenuitem") = DataTable.Value("MainMenuItemNo", "TS_001")
	Environment("opencloseitem") = DataTable.Value("OpenCloseItemNo", "TS_001")
	
	
	'Open Store
	RunAction "Open Store [Open Store]", oneIteration

	intStartRow = intStartRow + 1
	
Loop While intStartRow <= intEndRow

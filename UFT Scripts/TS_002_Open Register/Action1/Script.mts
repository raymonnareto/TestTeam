
'Test Arguments
intStartRow = TestArgs("intStartRow")
intEndRow = TestArgs("intEndRow")

'screenshot parameters
Environment("screenshotfolder") = DataTable.Value("ScreenshotFolder", "Environment")
Func_CreateFolderStructure Environment("screenshotfolder"), 5


'initialize parameter login
Environment("logintype") = DataTable.Value("LoginType", "TS_002")
Environment("username") = DataTable.Value("BackOfficeUsername", "TS_002")
Environment("password") = DataTable.Value("BackOfficePassword", "TS_002")


'step numbering
Environment("stepnum") = 1

'Log into XStore (Back Office)
RunAction "Login [Login]", oneIteration


Do
	Datatable.SetCurrentRow(intStartRow)
		
	'screenshot parameters
	Environment("screenshotfolder") = DataTable.Value("ScreenshotFolder", "Environment")
	Func_CreateFolderStructure Environment("screenshotfolder"), 5

	'initialize parameter Open register
	Environment("mainmenuitem") = DataTable.Value("MainMenuItemNo", "TS_002")
	Environment("opencloseitem") = DataTable.Value("OpenCloseItemNo", "TS_002")
	Environment("tillcountexist") = DataTable.Value("TillCountScreenExist", "TS_002")
	Environment("denomination") = DataTable.Value("Denomination", "TS_002")
	Environment("denominationamount") = DataTable.Value("DenominationAmount", "TS_002")
	
	'Open Register
	RunAction "Open Register [Open Register]", oneIteration

	intStartRow = intStartRow + 1
	
Loop While intStartRow <= intEndRow

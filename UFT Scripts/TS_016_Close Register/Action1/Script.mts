
'Test Arguments
intStartRow = TestArgs("intStartRow")
intEndRow = TestArgs("intEndRow")


Do
	Datatable.SetCurrentRow(intStartRow)
	
	'screenshot parameters
	Environment("screenshotfolder") = DataTable.Value("ScreenshotFolder", "Environment")
	Func_CreateFolderStructure Environment("screenshotfolder"), 5
	
	'initialize parameter login
	Environment("logintype") = DataTable.Value("LoginType", "TS_016")
	Environment("username") = DataTable.Value("BackOfficeUsername", "TS_016")
	Environment("password") = DataTable.Value("BackOfficePassword", "TS_016")
		
	'initialize parameter close register
	Environment("mainmenuitem") = DataTable.Value("MainMenuItemNo", "TS_016")
	Environment("opencloseitem") = DataTable.Value("OpenCloseItemNo", "TS_016")
	Environment("tillcountexist") = DataTable.Value("TillCountScreenExist", "TS_016")
	Environment("denomination") = DataTable.Value("Denomination", "TS_016")
	Environment("denominationamount") = DataTable.Value("DenominationAmount", "TS_016")

	
	'step numbering
	Environment("stepnum") = 1
	
	
	'login	
	RunAction "Login [Login]", oneIteration
	

	'close register
	RunAction "Close Register [Close Register]", oneIteration

	
	
	intStartRow = intStartRow + 1
	
Loop While intStartRow <= intEndRow

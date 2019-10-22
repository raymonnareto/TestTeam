
'Test Arguments
intStartRow = TestArgs("intStartRow")
intEndRow = TestArgs("intEndRow")

'screenshot parameters
Environment("screenshotfolder") = DataTable.Value("ScreenshotFolder", "Environment")
Func_CreateFolderStructure Environment("screenshotfolder"), 5

'Define NRT File
OpenNRTFile "C:/Automation/Applications/Xstore/Test Cases/NRT Test Cases.xlsm", 2

'initialize parameter login
Environment("logintype") = DataTable.Value("LoginType", "NRT_01.03")
Environment("username") = DataTable.Value("BackOfficeUsername", "NRT_01.03")
Environment("password") = DataTable.Value("BackOfficePassword", "NRT_01.03")

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
	Environment("mainmenuitem") = DataTable.Value("MainMenuItemNo", "NRT_01.03")
	Environment("opencloseitem") = DataTable.Value("OpenCloseItemNo", "NRT_01.03")
	Environment("tillcountexist") = DataTable.Value("TillCountScreenExist", "NRT_01.03")
	Environment("denomination") = DataTable.Value("Denomination", "NRT_01.03")
	Environment("denominationamount") = DataTable.Value("DenominationAmount", "NRT_01.03")
	
	'Open Register
	RunAction "Open Register [Open Register]", oneIteration

	intStartRow = intStartRow + 1
	
Loop While intStartRow <= intEndRow

If DataTable.Value("ReturnToTitle", "NRT_01.03") = "Y" Then
   'ReturnToTitle
   Reporter.Filter = rfDisableAll
   numWaitLimit = 60
   numWaitCounter = 0
   Do 
      If numWaitCounter = numWaitLimit Then
         LogReport "Fail", "Unexpected Error", "Return to login screen", "Unable to return to login screen", "", ""
      Else
         wait 1
		 numWaitCounter = numWaitCounter + 1 
      End If
      JavaDialog("title:= Xstore").Type micEsc
   Loop While Not JavaDialog("Login").JavaEdit("txtAuthentication").Exist(3)
   Reporter.Filter = rtEnableAll
   If JavaDialog("Login").JavaEdit("txtAuthentication").Exist(3) Then
      LogReport "Done", "Return to login screen", "Return to login screen", "", "", ""
   End If
End If

'Save NRT File 
SaveNRTFile
CloseNRTFile

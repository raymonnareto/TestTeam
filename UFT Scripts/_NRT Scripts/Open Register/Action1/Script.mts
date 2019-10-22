'Validation if login is successful
'Environment("stepnum") = Environment("stepnum") + 1
If Not JavaDialog("Back Office Window").JavaList("lstBackOfficeMainMenu").Exist(3) Then 'Check if back office options is not displayed
	LogReport "FAILED", "Step "&Environment("stepnum")& " Validate Login is successful" , "Back Office options list is displayed", "Back Office options list NOT displayed", Environment("screenshotfolder"), ""
End If


'Select "Open/Close Options" from the list and press Enter.
WaitForObject JavaDialog("Back Office Window").JavaList("lstBackOfficeMainMenu")

'Environment("stepnum") = Environment("stepnum") + 1
'Navigate to Open/Close options
JavaDialog("Back Office Window").JavaList("lstBackOfficeMainMenu").Select Environment("mainmenuitem")
JavaDialog("Back Office Window").JavaButton("btnOk").Click
If Not DataTable("RegisterOpen", "TestLogs") = "N" Then 'Check if logging is needed
   MultipleLogging DataTable("RegisterOpen", "TestLogs"), DataTable("[Act]RegisterOpen", "TestLogs"), DataTable("[Exp]RegisterOpen", "TestLogs"), 0, Environment("worksheet"), Environment("maxRow"), Environment("caseNumCol"), Environment("testResCol"), "Passed"
End If

'Select "Register Open" from the list and press Enter.
WaitForObject JavaDialog("Back Office Window").JavaList("lstOpenCloseOptions")

'Check if Register Open option is not present in List
If StrComp(JavaDialog("Back Office Window").JavaList("lstOpenCloseOptions").GetItem(Environment("opencloseitem")),"Register Close") = 0 Then
	LogReport "Fail", "Step "&Environment("stepnum")& " Open Register" , "Register Open option is displayed", "Register Close is shown", Environment("screenshotfolder"),"ESC"
End If

'Environment("stepnum") = Environment("stepnum") + 1
'Select "Register Open" from the list
JavaDialog("Back Office Window").JavaList("lstOpenCloseOptions").Select Environment("opencloseitem")
JavaDialog("Back Office Window").JavaButton("btnOk").Click
If Not DataTable("RegisterOpen", "TestLogs") = "N" Then 'Check if logging is needed
   MultipleLogging DataTable("RegisterOpen", "TestLogs"), DataTable("[Act]RegisterOpen", "TestLogs"), DataTable("[Exp]RegisterOpen", "TestLogs"), 1, Environment("worksheet"), Environment("maxRow"), Environment("caseNumCol"), Environment("testResCol"), "Passed"
End If

'Environment("stepnum") = Environment("stepnum") + 1
'Confirm opening of register
WaitForObject JavaDialog("Register Opening Window").JavaButton("btnYes")
JavaDialog("Register Opening Window").JavaButton("btnYes").Click
If Not DataTable("RegisterOpen", "TestLogs") = "N" Then 'Check if logging is needed
   MultipleLogging DataTable("RegisterOpen", "TestLogs"), DataTable("[Act]RegisterOpen", "TestLogs"), DataTable("[Exp]RegisterOpen", "TestLogs"), 2, Environment("worksheet"), Environment("maxRow"), Environment("caseNumCol"), Environment("testResCol"), "Passed"
End If

'Handler for till count screen
Select Case Lcase(Environment("tillcountexist"))
	Case "yes"
		If Not JavaDialog("Register Opening Window").JavaObject("joTillCountPage").Exist(3) Then
			LogReport "FAILED", "Unexpected Error" , "Till Count is displayed", "Till Count is NOT displayed", Environment("screenshotfolder"), ""
		End If
		'Enter the amount for each denomination and then press "Done Counting" (F2).
		If Trim(Environment("denomination")) <> "" Then
			InputDenomination Environment("denomination") , Environment("denominationamount")
		End If
		
		wait 2
		'Environment("stepnum") = Environment("stepnum") + 1
		JavaDialog("Register Opening Window").JavaButton("btnDoneCounting").Click
				
		If JavaDialog("Register Opening Window").JavaStaticText("stxtVerifyBeginCount").Exist(3) Then
			'Environment("stepnum") = Environment("stepnum") + 1
			JavaDialog("Register Opening Window").JavaButton("btnYes").Click
		End If
		
		If Not DataTable("RegisterOpen", "TestLogs") = "N" Then 'Check if logging is needed
           MultipleLogging DataTable("RegisterOpen", "TestLogs"), DataTable("[Act]RegisterOpen", "TestLogs"), DataTable("[Exp]RegisterOpen", "TestLogs"), 3, Environment("worksheet"), Environment("maxRow"), Environment("caseNumCol"), Environment("testResCol"), "Passed"
		End If
		
	Case "no"
		If JavaDialog("Register Opening Window").JavaObject("joTillCountPage").Exist(3) Then 'Ensure that till count is not displayed
			LogReport "FAILED", "Unexpected Error" , "Till Count is not displayed", "Till Count IS displayed", Environment("screenshotfolder"), ""
		End If
End Select

'If unable to print window is displayed, select skip printing
If JavaDialog("Unable to Print Window").JavaEdit("txtUnableToPrint").Exist(3) Then
	JavaDialog("Unable to Print Window").JavaButton("btnSkipPrinting").Click
End If

'If Connecting dialog box appears, apply delay
Reporter.Filter = rfDisableAll
For iteration = 1 To 20 Step 1
   If Window("Xstore").Check(CheckPoint("Dialog_Connecting")) Then
      If iteration = 12 Then
         LogReport "FAILED", "Timeout" , "Connecting process should be completed", "Process not completed after allotted time", Environment("screenshotfolder"),""
      End If
      wait 3 @@ hightlight id_;_29502368_;_script infofile_;_ZIP::ssf4.xml_;_
   Else
      iteration = 20
   End If
Next @@ hightlight id_;_3411358_;_script infofile_;_ZIP::ssf8.xml_;_
Reporter.Filter = rtEnableAll

'If offline error during configuration dialog appears
Reporter.Filter = rfDisableAll
If Window("Xstore").Check(CheckPoint("Dialog_OfflineDuringConfig")) Then
   Reporter.Filter = rtEnableAll
   JavaDialog("Unable to Print Window").JavaButton("Ok").Click @@ hightlight id_;_29502368_;_script infofile_;_ZIP::ssf4.xml_;_
End If @@ hightlight id_;_462700_;_script infofile_;_ZIP::ssf3.xml_;_

'validate open close is displayed
'Environment("stepnum") = Environment("stepnum") + 1
''Confirm that window is returned to Open/Close Options screen
If Not JavaDialog("Back Office Window").JavaList("lstOpenCloseOptions").Exist(3) Then
	LogReport "FAILED", "Unexpected Error" , "Open Close Options list is displayed", "Open Close Options list NOT displayed", Environment("screenshotfolder"),""
End If


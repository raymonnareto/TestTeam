
'Validation if login is successful
'Environment("stepnum") = Environment("stepnum") + 1
If Not JavaDialog("Back Office Window").JavaList("lstBackOfficeMainMenu").Exist(3) Then
	LogReport "FAILED", "Unexpected Error" , "Back Office options list is displayed", "Back Office options list NOT displayed", Environment("screenshotfolder"), ""
End If


'Select "Open/Close Options" from the list and press Enter.
WaitForObject JavaDialog("Back Office Window").JavaList("lstBackOfficeMainMenu")
'Environment("stepnum") = Environment("stepnum") + 1
JavaDialog("Back Office Window").JavaList("lstBackOfficeMainMenu").Select Environment("mainmenuitem")
'LogReport "Done", "Step "&Environment("stepnum")& " Select 'Open Close Options' from the list", "Open Close options list displayed", "", ""
JavaDialog("Back Office Window").JavaButton("btnOk").Click

If Not DataTable("StoreOpen", "TestLogs") = "N" Then
	MultipleLogging DataTable("StoreOpen", "TestLogs"), DataTable("[Act]StoreOpen", "TestLogs"), DataTable("[Exp]StoreOpen", "TestLogs"), 0, Environment("worksheet"), Environment("maxRow"), Environment("caseNumCol"), Environment("testResCol"), "Passed"
	
End If



'Select "Store Open" from the list and press Enter.
WaitForObject JavaDialog("Back Office Window").JavaList("lstOpenCloseOptions")
'Environment("stepnum") = Environment("stepnum") + 1
JavaDialog("Back Office Window").JavaList("lstOpenCloseOptions").Select Environment("opencloseitem")
JavaDialog("Back Office Window").JavaButton("btnOk").Click
'LogReport "Done", "Step "&Environment("stepnum")& " Select 'Store Open' from the list and click OK", "Message 'Do you want to open this store?' is displayed", "", ""

If Not DataTable("StoreOpen", "TestLogs") = "N" Then
	MultipleLogging DataTable("StoreOpen", "TestLogs"), DataTable("[Act]StoreOpen", "TestLogs"), DataTable("[Exp]StoreOpen", "TestLogs"), 1, Environment("worksheet"), Environment("maxRow"), Environment("caseNumCol"), Environment("testResCol"), "Passed"
End If


'Press enter to confirm the opening.
'Environment("stepnum") = Environment("stepnum") + 1
WaitForObject JavaDialog("Store Opening Window").JavaButton("btnYes")
JavaDialog("Store Opening Window").JavaButton("btnYes").Click
'LogReport "Done", "Step "&Environment("stepnum")& " Click YES button to confirm opening", "Yes button is clicked", "", ""
If Not DataTable("StoreOpen", "TestLogs") = "N" Then
	MultipleLogging DataTable("StoreOpen", "TestLogs"), DataTable("[Act]StoreOpen", "TestLogs"), DataTable("[Exp]StoreOpen", "TestLogs"), 2, Environment("worksheet"), Environment("maxRow"), Environment("caseNumCol"), Environment("testResCol"), "Passed"
End If


'validate business  date
'Environment("stepnum") = Environment("stepnum") + 1

'get date
dayName = WeekDayName(WeekDay(Now()))
monthValue = MonthName(Month(Now()))
dayValue = Day(Now())
yearValue = Year(Now())

dateToday = monthValue& " " &  dayValue & ", " & yearValue
businessDateExpected = "The business date is "& dayName & ", "& dateToday
businessDateActual = JavaDialog("Store Opening Window").JavaEdit("txtExpectedMessageBusinessDate").GetROProperty("value")

If Not Trim(businessDateExpected) = Trim(businessDateActual)  Then
	LogReport "FAILED", "Unexpected Error" , "Business Date dispalyed: " &businessDateExpected, "Business Date is Incorrect" &businessDateActual, Environment("screenshotfolder"),""
End If

wait 2
'Press enter to confirm the business date.
'Environment("stepnum") = Environment("stepnum") + 1
JavaDialog("Store Opening Window").JavaButton("btnOk").Click
'LogReport "Done", "Step "&Environment("stepnum")& " Click OK button to confirm date", "OK button is clicked", "", ""
If Not DataTable("StoreOpen", "TestLogs") = "N" Then
   MultipleLogging DataTable("StoreOpen", "TestLogs"), DataTable("[Act]StoreOpen", "TestLogs"), DataTable("[Exp]StoreOpen", "TestLogs"), 3, Environment("worksheet"), Environment("maxRow"), Environment("caseNumCol"), Environment("testResCol"), "Passed"
End If

'last closure comment
'Environment("stepnum") = Environment("stepnum") + 1
WaitForObject JavaDialog("Store Opening Window").JavaEdit("txtClosingComment")
JavaDialog("Store Opening Window").JavaButton("btnOk").Click
LogReport "Done", "Step "&Environment("stepnum")& " Click OK button on last Closing Comment", "OK button is clicked", "", "", ""


If JavaDialog("Unable to Print Window").JavaEdit("txtUnableToPrint").Exist(3) Then
	JavaDialog("Unable to Print Window").JavaButton("btnSkipPrinting").Click
End If

If Not DataTable("StoreOpen", "TestLogs") = "N" Then
   MultipleLogging DataTable("StoreOpen", "TestLogs"), DataTable("[Act]StoreOpen", "TestLogs"), DataTable("[Exp]StoreOpen", "TestLogs"), 4, Environment("worksheet"), Environment("maxRow"), Environment("caseNumCol"), Environment("testResCol"), "Passed"
End If

'Press NO (N) to skip the register opening.
WaitForObject JavaDialog("Store Opening Window").JavaButton("btnNo")
'Environment("stepnum") = Environment("stepnum") + 1
JavaDialog("Store Opening Window").JavaButton("btnNo").Click
'LogReport "Done", "Step "&Environment("stepnum")& " Click NO button to skip register", "NO button is clicked", "", ""
If Not DataTable("StoreOpen", "TestLogs") = "N" Then
   MultipleLogging DataTable("StoreOpen", "TestLogs"), DataTable("[Act]StoreOpen", "TestLogs"), DataTable("[Exp]StoreOpen", "TestLogs"), 5, Environment("worksheet"), Environment("maxRow"), Environment("caseNumCol"), Environment("testResCol"), "Passed"
End If

'validate open close is displayed
'Environment("stepnum") = Environment("stepnum") + 1
If Not JavaDialog("Back Office Window").JavaList("lstOpenCloseOptions").Exist(3) Then
	LogReport "FAILED", "Step "&Environment("stepnum")& " Validate Open Close Options displayed" , "Open Close Options list is displayed", "Open Close Options list NOT displayed", Environment("screenshotfolder"), ""
End If


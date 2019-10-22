'Check if the XStore window is not open
If JavaDialog("title:= Xstore").Exist(10) = False Then
   If JavaDialog("title:= Xenvironment").Exist(10) = False Then
      SystemUtil.Run "C:\environment\environment.bat"
      WaitForObject JavaDialog("title:= Xenvironment")
   End If
  
   JavaDialog("Xenvironment").JavaButton("btnStartPos").Click
   WaitForObject JavaDialog("title:= Xstore")
   
   If JavaDialog("Hardware Error Window (1st window)").JavaStaticText("stxtHardwareError").Exist(3) Then
      JavaDialog("Hardware Error Window (1st window)").JavaButton("btnOk").Click
   End If
End If

'recovery scenario
'Check if login page is not displayed
If Not JavaDialog("Login").JavaEdit("txtAuthentication").Exist(10) Then
   Call Func_CloseXstore("C:\xstore\tmp")
	
   wait 5
   
   JavaDialog("Xenvironment").JavaButton("btnStartPos").Click
   WaitForObject JavaDialog("title:= Xstore")
	
   If JavaDialog("Hardware Error Window (1st window)").JavaStaticText("stxtHardwareError").Exist(3) Then
      JavaDialog("Hardware Error Window (1st window)").JavaButton("btnOk").Click
   End If
End If

'If log xstore running needed
If Not DataTable("RunXStore","TestLogs") = "N" Then
	LogReport "Done", DataTable("RunXStore","TestLogs") & " - " &  DataTable("[Act]RunXStore","TestLogs"), "Expected: " & DataTable("[Exp]RunXStore","TestLogs"), "", "", ""
	SetNRTTestResult DataTable("RunXStore","TestLogs"), Environment("worksheet"), Environment("maxRow"), Environment("caseNumCol"), Environment("testResCol"), "Passed"
End If

'Log into XStore 
Select Case Environment("logintype")	
   Case "Register Login"
      If Not JavaDialog("Login").JavaStaticText("stxtRegisterLogin").Exist(3) Then
         JavaDialog("Controls - Home").JavaButton("btnRegister").Click
         Reporter.Filter = rfDisableAll
         If JavaDialog("Xstore").JavaObject("DtvPanel_2").Check(CheckPoint("Error_RegisterLogin_ClosedRegister")) Then
            Reporter.Filter = rtEnableAll
         	LogReport "Fail", "Unexpected Error", "Register login screen appears", "Register closed, cannot access register login", "", "ENTER"
         End If
         WaitForObject JavaDialog("Login").JavaStaticText("stxtRegisterLogin")
      End If
	
   Case "Back Office Login"
      If Not JavaDialog("Login").JavaStaticText("stxtBackOfficeLogin").Exist(3) Then
         JavaDialog("Controls - Home").JavaButton("btnBackOffice").Click
         WaitForObject JavaDialog("Login").JavaStaticText("stxtBackOfficeLogin")
      End If
		
   Case "Manage Till Login"
      If Not JavaDialog("Login").JavaStaticText("stxtTillOptionLogin").Exist(3) Then
         JavaDialog("Controls - Home").JavaButton("btnManageTills").Click
         WaitforObject JavaDialog("Login").JavaStaticText("stxtTillOptionLogin")
      End If
End Select
	
'Set username
JavaDialog("Login").JavaEdit("txtAuthentication").Set Environment("username")
JavaDialog("Login").JavaEdit("txtAuthentication").Activate
'If log username entry needed
If Not DataTable("LoginUser","TestLogs") = "N" Then
	LogReport "Done", DataTable("LoginUser","TestLogs") & " - " &  DataTable("[Act]LoginUser","TestLogs"), "Expected: " & DataTable("[Exp]LoginUser","TestLogs"), "", "", ""
	SetNRTTestResult DataTable("LoginUser","TestLogs"), Environment("worksheet"), Environment("maxRow"), Environment("caseNumCol"), Environment("testResCol"), "Passed"
End If

wait 2

'Set password
JavaDialog("Login").JavaEdit("txtAuthentication").Set Environment("password")
JavaDialog("Login").JavaEdit("txtAuthentication").Activate
'If log password  entry needed
If Not DataTable("LoginPass","TestLogs") = "N" Then
	LogReport "Done", DataTable("LoginPass","TestLogs") & " - " &  DataTable("[Act]LoginPass","TestLogs"), "Expected: " & DataTable("[Exp]LoginPass","TestLogs"), "", "",""
	SetNRTTestResult DataTable("LoginPass","TestLogs"), Environment("worksheet"), Environment("maxRow"), Environment("caseNumCol"), Environment("testResCol"), "Passed"
End If

wait 2 @@ hightlight id_;_-1_;_script infofile_;_ZIP::ssf7.xml_;_

'Check if the register is closed
Reporter.Filter = rfDisableAll
If JavaDialog("Xstore").Check(CheckPoint("Error_Login_RegisterClosed")) Then
   Reporter.Filter = rtEnableAll
	LogReport "Fail", "Unexpected Error" , "Commissioned Associate screen opens", "Register/Store closed", "", "ENTER"
ElseIf Not DataTable("Login","TestLogs") = "N" Then
	LogReport "Done", DataTable("Login","TestLogs") & " - " &  DataTable("[Act]Login","TestLogs"), "Expected: " & DataTable("[Exp]Login","TestLogs"), "", "", ""
	SetNRTTestResult DataTable("Login","TestLogs"), Environment("worksheet"), Environment("maxRow"), Environment("caseNumCol"), Environment("testResCol"), "Passed"
End If




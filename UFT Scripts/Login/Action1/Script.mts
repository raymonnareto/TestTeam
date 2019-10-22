If JavaDialog("title:= Xstore").Exist(5) = False Then
	
	'Environment("stepnum") = Environment("stepnum") + 1
	'Open Xstore App
	SystemUtil.Run "C:\environment\environment.bat"
	
	WaitForObject JavaDialog("title:= Xstore")
	LogReport "Done", "Step "&Environment("stepnum")& " Open Xstore App" , "Xstore Application is opened", "", ""
	
	
	If JavaDialog("Hardware Error Window (1st window)").JavaStaticText("stxtHardwareError").Exist(5) Then
	
		'Environment("stepnum") = Environment("stepnum") + 1
		JavaDialog("Hardware Error Window (1st window)").JavaButton("btnOk").Click
		LogReport "Done", "Step "&Environment("stepnum")& " Click OK button in Hardware Error Message" , "OK button is clicked", "", ""
		
	End If

End If

'recovery scenario
If Not JavaDialog("Login").JavaEdit("txtAuthentication").Exist(3) Then
	'Call Func_CloseXstore("C:\environment\tmp")
	Call Func_CloseXstore("C:\xstore\tmp")
	
	wait 5
	'reopen Xstore
	JavaDialog("Xenvironment").JavaButton("btnStartPos").Click
	
	'SystemUtil.Run "C:\environment\environment.bat"

	WaitForObject JavaDialog("title:= Xstore")
	LogReport "Done", "Step "&Environment("stepnum")& " Open Xstore App" , "Xstore Application is opened", "", ""
	
	
	If JavaDialog("Hardware Error Window (1st window)").JavaStaticText("stxtHardwareError").Exist(5) Then
	
		'Environment("stepnum") = Environment("stepnum") + 1
		JavaDialog("Hardware Error Window (1st window)").JavaButton("btnOk").Click
		LogReport "Done", "Step "&Environment("stepnum")& " Click OK button in Hardware Error Message" , "OK button is clicked", "", ""
		
	End If
	
End If

'Log into XStore 
Select Case Environment("logintype")
				
	Case "Register Login"
		If Not JavaDialog("Login").JavaStaticText("stxtRegisterLogin").Exist(3) Then
			'Environment("stepnum") = Environment("stepnum") + 1
			JavaDialog("Controls - Home").JavaButton("btnRegister").Click
			LogReport "Done", "Step "&Environment("stepnum")& " Click Register Button" , "Register button is clicked", "", ""
			
			WaitForObject JavaDialog("Login").JavaStaticText("stxtRegisterLogin")
		
		End If
		
	Case "Back Office Login"
	
		If Not JavaDialog("Login").JavaStaticText("stxtBackOfficeLogin").Exist(3) Then
			'Environment("stepnum") = Environment("stepnum") + 1
			JavaDialog("Controls - Home").JavaButton("btnBackOffice").Click
			LogReport "Done", "Step "&Environment("stepnum")& " Click Back Office Button" , "Back Office button is clicked", "", ""
			
			WaitForObject JavaDialog("Login").JavaStaticText("stxtBackOfficeLogin")
		
		End If
		
	Case "Manage Till Login"

		If Not JavaDialog("Login").JavaStaticText("stxtTillOptionLogin").Exist(3) Then
			'Environment("stepnum") = Environment("stepnum") + 1
			JavaDialog("Controls - Home").JavaButton("btnManageTills").Click
			LogReport "Done", "Step "&Environment("stepnum")& " Click Manage Tills Button" , "Manage Tills button is clicked", "", ""
			
			WaitforObject JavaDialog("Login").JavaStaticText("stxtTillOptionLogin")
		End If
End Select
	

'Environment("stepnum") = Environment("stepnum") + 1
JavaDialog("Login").JavaEdit("txtAuthentication").Set Environment("username")
LogReport "Done", "Step "&Environment("stepnum")& " Input User Name" , "User Name is entered", "", ""
JavaDialog("Login").JavaEdit("txtAuthentication").Activate


wait 2
'Environment("stepnum") = Environment("stepnum") + 1
JavaDialog("Login").JavaEdit("txtAuthentication").Set Environment("password")
LogReport "Done", "Step "&Environment("stepnum")& " Input Password" , "Password is entered", "", ""
JavaDialog("Login").JavaEdit("txtAuthentication").Activate


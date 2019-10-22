
' press the button “Send Email Receipt”
'Environment("stepnum") = Environment("stepnum") + 1
JavaDialog("Electronic Journal Window").JavaButton("btnSendEmailReceipt").Click
LogReport "Done", "Step "&Environment("stepnum")& " Click Send Email Receipt Button", "Send Email Receipt button is clicked", "", ""


'If the receipt has been sent via mail
If JavaDialog("Resend Email Window").JavaButton("btnSend").Exist(2) Then

	'validate The system opens a window in which it is possible to specify the email address.
	'Environment("stepnum") = Environment("stepnum") + 1
	If JavaDialog("Resend Email Window").JavaEdit("txtEmailAddress").Exist(2) Then
		LogReport "PASSED", "Step "&Environment("stepnum")& " Validate Window to specify an Email is open" , "Window to specify an Email is open", "Window to specify an Email IS open", Environment("screenshotfolder")
	Else
		LogReport "FAILED", "Step "&Environment("stepnum")& " Validate Window to specify an Email is open" , "Window to specify an Email is open", "Window to specify an Email is NOT open", Environment("screenshotfolder")
	End If
	

	emailAddressValue = JavaDialog("Resend Email Window").JavaEdit("txtEmailAddress").GetROProperty("value")
	emailAddressEditable = JavaDialog("Resend Email Window").JavaEdit("txtEmailAddress").GetROProperty("editable")
	
	'validate  The fileld must be editable
	'Environment("stepnum") = Environment("stepnum") + 1
	If emailAddressEditable = 1 Then
		LogReport "PASSED", "Step "&Environment("stepnum")& " Validate Email Address field is Editable" , "Email Address field is Editable", "Email Address field IS Editable", Environment("screenshotfolder")
	Else
		LogReport "FAILED", "Step "&Environment("stepnum")& " Validate Email Address field is Editable" , "Email Address field is Editable", "Email Address field is NOT Editable", Environment("screenshotfolder")
	End If

	
	'Enter email add
	'Environment("stepnum") = Environment("stepnum") + 1
	JavaDialog("Resend Email Window").JavaEdit("txtEmailAddress").Set Environment("emailaddress")
	LogReport "Done", "Step "&Environment("stepnum")& " Input Email Address", "Email Address entered", "", ""
	
	'Click Send
	'Environment("stepnum") = Environment("stepnum") + 1
	JavaDialog("Resend Email Window").JavaButton("btnSend").Click
	LogReport "Done", "Step "&Environment("stepnum")& " Click Send Button", "Send button is clicked", "", ""
	
	
	'If the entered email address does not contain the character “@” or the email field is not filled at all
	If JavaDialog("Resend Email Window").JavaEdit("txtExpectedMessageInvalidEmail").Exist(2) Then
		'Environment("stepnum") = Environment("stepnum") + 1
		LogReport "FAILED", "Step "&Environment("stepnum")& " Email Address Entered is Invalid" , "Email Address should be Valid", "Email Address Entered is Invalid", Environment("screenshotfolder")
	End If
	
	
	'If the customer  is a real customer and the user has manually entered or modified the email address.
	If Trim(emailAddressValue) <> Trim(Environment("emailaddress")) Then
		
		'validate The system displays a pop-up “Save email address to the Customer Profile?”
		'Environment("stepnum") = Environment("stepnum") + 1
		If JavaDialog("Resend Email Window").JavaEdit("txtExpectedMessageSaveEmailToProfile").Exist(2) Then
			LogReport "PASSED", "Step "&Environment("stepnum")& " Validate System displays a pop-up" , "Messsage: 'Save email address to the Customer Profile' is displayed", "Messsage: 'Save email address to the Customer Profile' IS displayed", Environment("screenshotfolder")
		Else
			LogReport "FAILED", "Step "&Environment("stepnum")& " Validate System displays a pop-up" , "Messsage: 'Save email address to the Customer Profile' is displayed", "Messsage: 'Save email address to the Customer Profile' is NOT displayed", Environment("screenshotfolder")
		End If
	
		'save email yes or no
		Select Case Lcase(Environment("saveemail"))
			Case "yes"
				' user presses ""Yes"" button
				'Environment("stepnum") = Environment("stepnum") + 1
				JavaDialog("Resend Email Window").JavaButton("btnYes").Click
				LogReport "Done", "Step "&Environment("stepnum")& " Click YES Button", "YES button is clicked", "", ""
				
			Case "no"
				'user presses "No" button
				'Environment("stepnum") = Environment("stepnum") + 1
				JavaDialog("Resend Email Window").JavaButton("btnNo").Click
				LogReport "Done", "Step "&Environment("stepnum")& " Click NO Button", "NO button is clicked", "", ""
				
		End Select		
		
	End If
	

Else 

	'If the receipt has not been sent via email
	'Environment("stepnum") = Environment("stepnum") + 1
	If JavaDialog("Resend Email Window").JavaEdit("txtExpectedMessageReceiptNotSentViaEmail").Exist(2) Then
		LogReport "PASSED", "Step "&Environment("stepnum")& " Validate System shows the Error Message" , "Message: 'The original receipt was not sent via email' is displayed", "Message: 'The original receipt was not sent via email' IS displayed", Environment("screenshotfolder")
	Else
		LogReport "FAILED", "Step "&Environment("stepnum")& " Validate System shows the Error Message" , "Message: 'The original receipt was not sent via email' is displayed", "Message: 'The original receipt was not sent via email' is NOT displayed", Environment("screenshotfolder")
	End If
	
	'By pressing the user presses "OK"  button.
	'Environment("stepnum") = Environment("stepnum") + 1
	JavaDialog("Resend Email Window").JavaButton("btnOk").Click
	LogReport "Done", "Step "&Environment("stepnum")& " Click OK Button", "OK button is clicked", "", ""
	
	'validate The system closes the pop-up.
	'Environment("stepnum") = Environment("stepnum") + 1
	If JavaDialog("Resend Email Window").JavaEdit("txtExpectedMessageReceiptNotSentViaEmail").Exist(2) Then
		LogReport "FAILED", "Step "&Environment("stepnum")& " Validate System closes the pop-up" , "System closes the pop-up", "Pop-up is NOT closed", Environment("screenshotfolder")
	Else
		LogReport "PASSED", "Step "&Environment("stepnum")& " Validate System closes the pop-up" , "System closes the pop-up", "Pop-up IS closed", Environment("screenshotfolder")
	End If
	
	
End If


'go back to log in window
JavaDialog("Electronic Journal Window").JavaButton("btnBack").Click
WaitForObject JavaDialog("Back Office Window").JavaButton("btnBack")
JavaDialog("Back Office Window").JavaButton("btnBack").Click
wait 1
JavaDialog("Back Office Window").JavaButton("btnBack").Click
wait 1
JavaDialog("Back Office Window").JavaButton("btnBack").Click


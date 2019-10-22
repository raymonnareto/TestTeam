
'validate Till options displayed
'Environment("stepnum") = Environment("stepnum") + 1
If JavaDialog("Post Void Window").JavaStaticText("stxtTillOptions").Exist(3) Then
	LogReport "PASSED", "Step "&Environment("stepnum")& " Validate Till Options is displayed" , "Till Options is displayed", "Till Options IS displayed", Environment("screenshotfolder")
Else
	LogReport "FAILED", "Step "&Environment("stepnum")& " Validate Till Options is displayed" , "Till Options is displayed", "Till Options is NOT displayed", Environment("screenshotfolder")
End If


'Select "Post Void" (F2).
'Environment("stepnum") = Environment("stepnum") + 1
WaitForObject JavaDialog("Post Void Window").JavaButton("btnPostVoid")
JavaDialog("Post Void Window").JavaButton("btnPostVoid").Click
LogReport "Done", "Step "&Environment("stepnum")& " Click Post Void button" , "Post Void button is clicked", "", ""


'Enter a past sale transaction
'Environment("stepnum") = Environment("stepnum") + 1
WaitForObject JavaDialog("Post Void Window").JavaEdit("txtOrigRegisterID")

JavaDialog("Post Void Window").JavaEdit("txtOrigTicketID").Set Environment("pastorigticketid")
JavaDialog("Post Void Window").JavaEdit("txtOrigTransDate").Set Environment("pastorigtransdate")
JavaDialog("Post Void Window").JavaEdit("txtOrigStoreID").Set Environment("pastorigstoreid")
JavaDialog("Post Void Window").JavaEdit("txtOrigRegisterID").Set Environment("pastorigregisterid")
JavaDialog("Post Void Window").JavaEdit("txtOrigTransAmount").Set Environment("pastorigtransamount")

LogReport "Done", "Step "&Environment("stepnum")& " Input past sale transaction details" , "Past sale transaction details entered", "", ""

'Environment("stepnum") = Environment("stepnum") + 1
JavaDialog("Post Void Window").JavaButton("btnProcess").Click
LogReport "Done", "Step "&Environment("stepnum")& " Click Process button" , "Process button is clicked", "", ""



'validate System shows a message: "only transaction for current business date can be post voided"
'Environment("stepnum") = Environment("stepnum") + 1
If JavaDialog("Post Void Window").JavaEdit("txtExpectedMessageCurrentDate").Exist(3) Then
	LogReport "PASSED", "Step "&Environment("stepnum")& " Validate System shows message" , "Message: 'Only transaction for current business date can be post voided' is displayed", "Message: 'Only transaction for current business date can be post voided' IS displayed", Environment("screenshotfolder")
Else
	LogReport "FAILED", "Step "&Environment("stepnum")& " Validate System shows message" , "Message: 'Only transaction for current business date can be post voided' is displayed", "Message: 'Only transaction for current business date can be post voided' is NOT displayed", Environment("screenshotfolder")
End If



'Press Enter button and type transaction data referred to the current business date. Thus press "Process"

'Environment("stepnum") = Environment("stepnum") + 1
JavaDialog("Post Void Window").JavaButton("btnOk").Click
LogReport "Done", "Step "&Environment("stepnum")& " Click OK button" , "OK button is clicked", "", ""


'Select "Post Void" (F2).
'Environment("stepnum") = Environment("stepnum") + 1
WaitForObject JavaDialog("Post Void Window").JavaButton("btnPostVoid")
JavaDialog("Post Void Window").JavaButton("btnPostVoid").Click
LogReport "Done", "Step "&Environment("stepnum")& " Click Post Void button" , "Post Void button is clicked", "", ""


'Environment("stepnum") = Environment("stepnum") + 1
WaitForObject JavaDialog("Post Void Window").JavaEdit("txtOrigRegisterID")

JavaDialog("Post Void Window").JavaEdit("txtOrigTicketID").Set Environment("currentorigticketid")
JavaDialog("Post Void Window").JavaEdit("txtOrigTransDate").Set Environment("currentorigtransdate")
JavaDialog("Post Void Window").JavaEdit("txtOrigStoreID").Set Environment("currentorigstoreid")
JavaDialog("Post Void Window").JavaEdit("txtOrigRegisterID").Set Environment("currentorigregisterid")
JavaDialog("Post Void Window").JavaEdit("txtOrigTransAmount").Set Environment("currentorigtransamount")

LogReport "Done", "Step "&Environment("stepnum")& " Input Current date sale transaction details" , "Current date sale transaction details entered", "", ""


'Environment("stepnum") = Environment("stepnum") + 1
JavaDialog("Post Void Window").JavaButton("btnProcess").Click
LogReport "Done", "Step "&Environment("stepnum")& " Click Process button" , "Process button is clicked", "", ""



'validate Pop-up message: "Are you sure you want post void the selected transaction?"
'Environment("stepnum") = Environment("stepnum") + 1
If JavaDialog("Post Void Window").JavaEdit("txtExpectedMessageVoidTransaction?").Exist(3) Then
	LogReport "PASSED", "Step "&Environment("stepnum")& " Validate Pop-up message" , "Message: 'Are you sure you want post void the selected transaction' is displayed", "Message: 'Are you sure you want post void the selected transaction' IS displayed", Environment("screenshotfolder")
Else
	LogReport "FAILED", "Step "&Environment("stepnum")& " Validate Pop-up message" , "Message: 'Are you sure you want post void the selected transaction' is displayed", "Message: 'Are you sure you want post void the selected transaction' is NOT displayed", Environment("screenshotfolder")
End If

'Press ""Yes""
'Environment("stepnum") = Environment("stepnum") + 1
JavaDialog("Post Void Window").JavaButton("btnYes").Click
LogReport "Done", "Step "&Environment("stepnum")& " Click YES button" , "YES button is clicked", "", ""


'Select a reason and press Enter
'Environment("stepnum") = Environment("stepnum") + 1
WaitForObject JavaDialog("Post Void Window").JavaList("lstPostVoidReason")
JavaDialog("Post Void Window").JavaList("lstPostVoidReason").Select Environment("postvoidreasoncode")
LogReport "Done", "Step "&Environment("stepnum")& " Select a reason for Post Void" , "Reason code selected", "", ""
JavaDialog("Post Void Window").JavaButton("btnOk").Click


'if unable to print
IF JavaDialog("Unable to Print Window").JavaEdit("txtUnableToPrint").Exist(4) Then
    JavaDialog("Unable to Print Window").JavaButton("btnSkipPrinting").Click
End If


'go back to log in window
JavaDialog("Post Void Window").JavaButton("btnBack").Click


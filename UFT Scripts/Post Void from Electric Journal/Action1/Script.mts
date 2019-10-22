
'Press "View Detail" 
'Environment("stepnum") = Environment("stepnum") + 1
WaitForObject JavaDialog("Electronic Journal Window").JavaButton("btnViewDetail")
JavaDialog("Electronic Journal Window").JavaButton("btnViewDetail").Click
LogReport "Done", "Step "&Environment("stepnum")& " Click View Detail Button", "View Detail button is clicked", "", ""


' validate The details of the transaction are displayed
'Environment("stepnum") = Environment("stepnum") + 1
If JavaDialog("Electronic Journal Window").JavaList("lstTransactionDetails").Exist(3) Then
	LogReport "PASSED", "Step "&Environment("stepnum")& " Validate Transaction details is displayed" , "Transaction details is displayed", "Transaction details IS displayed", Environment("screenshotfolder")
Else
	LogReport "FAILED", "Step "&Environment("stepnum")& " Validate Transaction details is displayed" , "Transaction details is displayed", "Transaction details is NOT displayed", Environment("screenshotfolder")
End If


'Select an item and press "Post Void"
'Environment("stepnum") = Environment("stepnum") + 1
WaitForObject JavaDialog("Electronic Journal Window").JavaButton("btnPostVoid")
JavaDialog("Electronic Journal Window").JavaButton("btnPostVoid").Click
LogReport "Done", "Step "&Environment("stepnum")& " Click Post Void Button", "Post Void button is clicked", "", ""


'validate Pop-up message: "Are you sure you want post void the selected transaction?"
'Environment("stepnum") = Environment("stepnum") + 1
If JavaDialog("Post Void Window").JavaEdit("txtExpectedMessageVoidTransaction?").Exist(3) Then
	LogReport "PASSED", "Step "&Environment("stepnum")& " Validate Pop-up message" , "Message: 'Are you sure you want post void the selected transaction' is displayed", "Message: 'Are you sure you want post void the selected transaction' IS displayed", Environment("screenshotfolder")
Else
	LogReport "FAILED", "Step "&Environment("stepnum")& " Validate Pop-up message" , "Message: 'Are you sure you want post void the selected transaction' is displayed", "Message: 'Are you sure you want post void the selected transaction' is NOT displayed", Environment("screenshotfolder")
End If


'Press ""Yes"" to confirm
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
IF JavaDialog("Unable to Print Window").JavaEdit("txtUnableToPrint").Exist(3) Then
    JavaDialog("Unable to Print Window").JavaButton("btnSkipPrinting").Click
End If


'go back to log in window
JavaDialog("Electronic Journal Window").JavaButton("btnBack").Click
wait 1
JavaDialog("Electronic Journal Window").JavaButton("btnBack").Click
WaitForObject JavaDialog("Back Office Window").JavaButton("btnBack")
JavaDialog("Back Office Window").JavaButton("btnBack").Click
wait 1
JavaDialog("Back Office Window").JavaButton("btnBack").Click
wait 1
JavaDialog("Back Office Window").JavaButton("btnBack").Click


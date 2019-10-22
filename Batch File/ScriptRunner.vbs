

Call ExecuteTest

'**************************************************************************************************************
'Description: Runs batch job for QTP
'Date Created: 2/01/2019
'Author: Alvin C. Punzalan
'Modifications:
'**************************************************************************************************************
Function ExecuteTest()

	Set oExcel = CreateObject("Excel.Application")

	oExcel.Visible = False
	oExcel.DisplayAlerts = False

	Set oWorkbook = oExcel.Workbooks.Open("C:\Automation\Applications\Xstore\ScriptRunner.xlsm")

	'msgbox oWorkbook.Worksheets.Count

	Set oSheets = oWorkbook.Worksheets("MasterData")

    Set oShell = CreateObject("WScript.Shell")
    
    strHost = oSheets.Cells(8,9).Value
           
       If CheckHost(strHost) = True Then
           oShell.Popup "Passed Environment Check. Executing Test...", 2
       Else
           oShell.Popup "Failed Environment Check. Please check xCenter ConnectionURL and Host", 2
           Exit Function
       End If

    intFlag = 0
	Const xlUp = -4162
    intCountLine = oSheets.Cells(100,1).End(xlUp).Row
    'intCountLine = GetLastBlankRow
	'msgbox intCountLine
	
    For x = 2 To intCountLine
        If LCase(oSheets.Cells(x,1).Value) = "y" Then
            
            strTestName = oSheets.Cells(x,4).Value
			'msgbox strTestName
            strDataTable = oSheets.Cells(x,5).Value
            strResultLocation = oSheets.Cells(x,3).Value
            intStartRow = oSheets.Cells(x,6).Value
            intEndRow = oSheets.Cells(x,7).Value
                    
            'Create the QTP Application object
            Set qtApp = CreateObject("QuickTest.Application")
            'If QTP is notopen then open it
            If qtApp.launched <> True Then
                'Set Add-ins needed
                'qtApp.SetActiveAddins Array("Web", "ActiveX", "Visual Basic")
                qtApp.SetActiveAddins Array("ActiveX")
                qtApp.SetActiveAddins Array("Java")
                'qtApp.SetActiveAddins Array("Visual Basic")
                'qtApp.SetActiveAddins Array("SAPUI5")
                'qtApp.SetActiveAddins Array("SAPWDJ")
                'qtApp.SetActiveAddins Array("SAPWebExt")
                qtApp.Launch
            End If
            'Make the QuickTest application visible
            qtApp.Visible = True
            'Set QuickTest run options
            'Instruct QuickTest to perform next step when error occurs
            qtApp.Options.Run.RunMode = "Fast"
            qtApp.Options.Run.ViewResults = False
                      
            qtApp.Open strTestName, True
            
             ' Return the Resources object
            Set qtTestResources = qtApp.Test.Settings.Resources
            
            ' Specify an external Data Table file
            qtTestResources.DataTablePath = strDataTable

            'Disable Smart Identification
            qtApp.Test.Settings.Run.DisableSmartIdentification = "True"
            'Set to run for 1 iteration only
            qtApp.Test.Settings.Run.IterationMode = "oneIteration"
            
            ' Retrieve the parameters collection defined for the test then overwrite
            Set oParams = qtApp.Test.ParameterDefinitions.GetParameters()
            'oParams.Item("strDataTable").Value = strDataTable
            'oParams.Item("strGlobalFile").Value = strGlobalSheet
            'oParams.Item("strModuleFolder").Value = strModuleFolder
            oParams.Item("intStartRow").Value = intStartRow
            oParams.Item("intEndRow").Value = intEndRow
            
            'Set location
            Set qtResultsOpt = CreateObject("QuickTest.RunResultsOptions")
            'Set the results location
            strRunName = "Run " & Month(Now()) & "-" & Day(Now()) & " " & Hour(Now()) & "-" & Minute(Now()) & "-" & Second(Now())
            'qtResultsOpt.TDRunName = strRunName
            'qtResultsOpt.TDTestSet = strTestSet
            qtResultsOpt.ResultsLocation = strResultLocation
            'qtResultsOpt.TDTestInstance = CInt(intRunInstance)
        
            ' Run the test
            Set qtTest = qtApp.Test
            qtTest.Run qtResultsOpt, True, oParams
            'Check the results of the test run
            strResultString = qtTest.LastRunResults.Status
            
            If strResultString = "Warning" Then
                strResultString = "Passed"
            End If
                
            qtTest.Close
            
			Set qtTest = Nothing
			
            oSheets.Cells(x,8).Value = strResultString
        End If
    Next
    'Close application if not the same script
    
    oShell.Popup "Run Completed", 2
	
	oWorkbook.Save
	oWorkbook.Close
	qtApp.Quit
	
	Set qtResultsOpt = Nothing
	Set oParams = Nothing
	Set qtTestResources = Nothing
	Set qtApp = Nothing
	
	
    Set oSheets = Nothing
	Set oWorkbook = Nothing
	Set oExcel = Nothing
    Set oShell = Nothing

End Function

Function GetLastBlankRow()
	Const xlUp = -4162
    NextRow = oSheets.Cells(100,1).End(xlUp).Row
	'Msgbox NextRow
    GetLastBlankRow = NextRow
End Function


'**************************************************************************************************************
'Description: Environment checking for Xstore
'Date Created: 3/26/2019
'Author: Alvin C. Punzalan
'Modifications:
'**************************************************************************************************************
Function CheckHost(varHost)

'    dtv.datasource.xcenter.ConnectionURL=
'    dtv.datasource.xcenter.ping.Host=
    
    'Create FSO Object
    Set oFSO = CreateObject("Scripting.FileSystemObject")
    'Split file path
   
    'identify base folder path
    
    Set oFile = oFSO.OpenTextFile("C:\xstore\updates\base-xstore.properties")
    
    bolURLFlag = False
    bolPingHostFlag = False
    
    Do Until oFile.AtEndOfStream
    
        strLine = oFile.ReadLine
        intLine = oFile.Line
        
        'check xcenter Connection URL
        If InStr(1, strLine, "dtv.datasource.xcenter.ConnectionURL") > 0 Then
            strConnectionURL = Split(strLine, "=")(1)
            
            If strConnectionURL = varHost Then
                bolURLFlag = True
            End If
        
        End If
        
        'check xcenter HOST
        If InStr(1, strLine, "dtv.datasource.xcenter.ping.Host=") > 0 Then
            strPingHost = Split(strLine, "=")(1)
            
            If strPingHost = varHost Then
                bolPingHostFlag = True
            End If
        
        End If
        
        'Environment check tag
        If bolURLFlag = True And bolPingHostFlag = True Then
        
            bolEnvironmentCheck = True
            Exit Do
            
        ElseIf oFile.AtEndOfStream = True Then
            bolEnvironmentCheck = False
        
        End If
        
    
    Loop
 
    Set oFile = Nothing
    Set oFSO = Nothing
 
    CheckHost = bolEnvironmentCheck

End Function

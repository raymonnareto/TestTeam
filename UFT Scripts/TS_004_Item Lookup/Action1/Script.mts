
'Test Arguments
intStartRow = TestArgs("intStartRow")
intEndRow = TestArgs("intEndRow")


Do
	Datatable.SetCurrentRow(intStartRow)
		
	'screenshot parameters
	Environment("screenshotfolder") = DataTable.Value("ScreenshotFolder", "Environment")
	Func_CreateFolderStructure Environment("screenshotfolder"), 5
	
	'initialize parameter item lookup
	Environment("itemid") = DataTable.Value("ItemID", "TS_004")
	
	'step numbering
	Environment("stepnum") = 1
	
	'item lookup
	RunAction "Item Lookup [Item Lookup]", oneIteration
	
	intStartRow = intStartRow + 1
	
Loop While intStartRow <= intEndRow

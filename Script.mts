InvokeApplication("C:\softwares\MahApps.Metro.Demo-v1.6.5-rc0001\net47\MahApps.Metro.Demo.exe")

If WpfWindow("wndDemoApplication").Exist(40) Then 
	Reporter.ReportEvent micPass,"Launching the .Net Application",".Net application launched successfully"
		
	Set oButtons=Description.Create
	oButtons("micclass").value="WpfButton" @@ hightlight id_;_198914_;_script infofile_;_ZIP::ssf7.xml_;_
	Set oBtnChld=WpfWindow("wndDemoApplication").ChildObjects(oButtons)
	
	If oBtnChld.count>0 Then
		Reporter.ReportEvent micPass,"Verify the Number of Buttons","Total Number of buttons="&oBtnChld.count	
	Else
		Reporter.ReportEvent micFail,"Verify the Number of Buttons","Total Number of buttons="&oBtnChld.count	
	End If
	  
	Set oCheckbox=Description.Create
	oCheckbox("micclass").value="WpfCheckBox"
	
	Set oChkBoxChld=WpfWindow("wndDemoApplication").ChildObjects(oCheckbox)
	 
	If oChkBoxChld.count>0 Then
		Reporter.ReportEvent micPass,"Verify the Number of Checkboxes","Total Number of Checkboxes="&oChkBoxChld.count
	Else
		Reporter.ReportEvent micFail,"Verify the Number of Checkboxes","Total Number of Checkboxes="&oChkBoxChld.count
	End If
	  
	Set oRadioBtn=Description.Create
	oRadioBtn("micclass").value="WpfRadioButton"
	
	Set oRadioBtnChld=WpfWindow("wndDemoApplication").WpfObject("objRadioButtons").ChildObjects(oRadioBtn)
	If oRadioBtnChld.count>0 Then
		Reporter.ReportEvent micPass,"Verify the Number of Radio buttons","Total Number of Radio buttons="&oRadioBtnChld.count
	Else
		Reporter.ReportEvent micFail,"Verify the Number of Radio buttons","Total Number of Radio buttons="&oRadioBtnChld.count
	End If

Else
	Reporter.ReportEvent micFail,"Launching the .Net Application",".Net application launched successfully"
End If

WpfWindow("wndDemoApplication").Close

Set oButtons=Nothing
Set oBtnChld=Nothing
Set oCheckbox=Nothing
Set oChkBoxChld=Nothing
Set oRadioBtn=Nothing
Set oRadioBtnChld=Nothing

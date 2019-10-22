@echo off
echo Initializing Batch Run...

Set CURRDIR = %CD%
::echo %CURRDIR%
echo Running Batch...
cscript ScriptRunner.vbs


echo Batch run completed...
pause
import pathlib
import shutil
import os

htmlFile = open("build\index.html", "r")
data = htmlFile.read()
htmlFile.close()
data = data.replace('src="/', 'src="build/')
data = data.replace('href="/', 'href="build/')
data = data.replace('src="./', 'src="build/')
data = data.replace('href="./', 'href="build/')
htmlFile = open("build\index.html", "w")
htmlFile.write(data)
htmlFile.close()
shutil.move("build\index.html", "index.html")

pathJs = "build\static\js"
nameJsChunkFile = ""
nameJsFiles = os.listdir(pathJs)
for nameJsFile in nameJsFiles:
    if nameJsFile.startswith("main.") and nameJsFile.endswith(".chunk.js"):
        nameJsChunkFile = nameJsFile
        break
jsChunkFile = open(pathJs+'\\'+nameJsChunkFile, "r")
data = jsChunkFile.read()
jsChunkFile.close()
data = data.replace('src:"./', 'src:"build/')
jsChunkFile = open(pathJs+'\\'+nameJsChunkFile, "w")
data = jsChunkFile.write(data)
jsChunkFile.close()
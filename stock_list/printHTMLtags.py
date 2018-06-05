


readFile = open("stock.txt", "r")
writeFile = open("HTMLcode.txt","w+")

for line in readFile:
    a = line.split()[0]
    writeFile.write("<a href=\"javascript:void(0)\" onclick=\"getTicker(" + a + ")\" >" + a + "</a>")

readFile.close()
writeFile.close()

print("done")

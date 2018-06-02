def addRest(a):
    returnValue = ""
    for i in range(1, len(a)):
        returnValue += a[i]
    return returnValue

readFile = open("stock.txt", "r")
writeFile = open("stockTickers.txt","w+")

writeFile.write("{")

for line in readFile:
    a = line.split()
    writeFile.write("\"" + a[0] + "\":\"" + addRest(a) + "\",")

writeFile.write("}")

readFile.close()
writeFile.close()

print("done")

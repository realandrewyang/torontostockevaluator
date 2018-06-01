readFile = open("stock.txt", "r")
writeFile = open("stockTickers.txt","w+")

writeFile.write("{")

for line in readFile:
    a = line.split()
    writeFile.write("\"" + a[0] + "\":\"" + a[1] + "\",")

writeFile.write("}")

readFile.close()
writeFile.close()

print("done")

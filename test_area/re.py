import re
slap = "one piece"

s1 = slap.replace(" ","-")

s2 = re.sub("[' ']","-",slap)

print(slap)
print(s2)
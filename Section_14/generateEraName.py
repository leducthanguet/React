import json

year = 2022
count = 4
eraName = "R"
dict = {}

for year in range(2022, 1911, -1):
    if year == 2018:
        eraName = "H"
        count = 30
    if year == 1988:
        eraName = "S"
        count = 63
    if year == 1925:
        eraName = "T"
        count = 14
    dict[year] = eraName + str(count)
    count = count-1

json_string = json.dumps(dict)
with open('data.json', 'wb') as outfile:
    outfile.write(json_string.encode("utf8"))

print(dict)

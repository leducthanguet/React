import json
import random
import uuid


def generateItems(items):
    return items[random.randint(0, len(items)-1)]


def generateDateOfBirth():
    year = random.randint(1950, 2004)
    month = random.randint(1, 12)
    day = random.randint(1, 28)

    if month < 10:
        str_month = "0" + str(month)
    else:
        str_month = str(month)

    if day < 10:
        str_day = "0" + str(day)
    else:
        str_day = str(day)

    dateOfBirth = str(year) + "-" + str(str_month) + "-" + str(str_day)
    return dateOfBirth


def generateContactTime():
    year = random.randint(2020, 2022)
    month = random.randint(1, 12)
    day = random.randint(1, 28)
    hour = random.randint(1, 24)
    minute = random.randint(1, 60)
    second = random.randint(1, 60)

    if month < 10:
        str_month = "0" + str(month)
    else:
        str_month = str(month)

    if day < 10:
        str_day = "0" + str(day)
    else:
        str_day = str(day)

    if hour < 10:
        str_hour = "0" + str(hour)
    else:
        str_hour = str(hour)

    if minute < 10:
        str_minute = "0" + str(minute)
    else:
        str_minute = str(minute)

    if second < 10:
        str_second = "0" + str(second)
    else:
        str_second = str(second)

    dateContactTime = str(year) + "-" + str(str_month) + "-" + str(str_day) + \
        " " + str_hour + ":" + str_minute + ":" + str_second
    return dateContactTime


def generateItem():
    return {
        'ServiceType': generateItems([0, 7, 8, 9]),
        'EventStatusName': generateItems(['a', 'b', 'c']),
        'CustomerCode': str(uuid.uuid4()),
        'CustomerName': generateItems(['さんでは', 'いですか']),
        'Birthday': generateDateOfBirth(),
        'HokenSyubetu': 'さんではないですか',
        'OwUserName': 'さんでは',
        'ExistMessage': generateItems([True, False]),
        'ContactTime': generateContactTime()
    }


data = {
    'tasks': []
}
tasks = []
for i in range(10):
    tasks.append(generateItem())

data['tasks'] = tasks
# .dumps() as a string
json_string = json.dumps(data, ensure_ascii=False)
# Directly from dictionary
with open('json_data.json', 'wb') as outfile:
    outfile.write(json_string.encode("utf8"))


# data = {"a": "さんではないですか"}
# with open('data.json', 'wb') as fp:
#     fp.write(json.dumps(data, ensure_ascii=False).encode("utf8"))

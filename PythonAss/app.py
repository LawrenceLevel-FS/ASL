import datetime

def month_format(m):
    if m < 10:
        return "0" + str(m)
    else:
        return m

date = datetime.datetime.now()

print("Hello ASL!")
print(f"{month_format(date.month)}/{date.day}/{date.year}")
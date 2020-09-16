#!/bin/python3
import random
import requests
from datetime import timedelta, datetime
import time


def random_date(start, end):
    """
    This function will return a random datetime between two datetime
    objects.
    """
    delta = end - start
    int_delta = (delta.days * 24 * 60 * 60) + delta.seconds
    random_second = random.randrange(int_delta)
    return start + timedelta(seconds=random_second)

h_price = 10000
l_price = 0.001

l_date  = datetime.strptime('1/1/2008 8:00 AM', '%m/%d/%Y %I:%M %p')
h_date  = datetime.strptime('1/1/2008 5:00 PM', '%m/%d/%Y %I:%M %p')

stonks = [ 'APPL', 'SX5E', 'UKX', 'DAX', 'CAC', 'IBEX' ]

print(random.choice(stonks))

print(random_date(l_date, h_date))

trades = []
for i in range(5):
    msSince = int(round(time.time() * 1000))
    mytradedate = random_date(l_date, h_date)
    myticker    = random.choice(stonks)
    myquantity  = random.randrange(1, 100)
    myprice     = random.uniform(l_price, h_price)
    action      = 'ASK' if random.random() > 0.5 else 'BID' # uygh
    trade = {                             # https://stackoverflow.com/questions/11875770/how-to-overcome-datetime-datetime-not-json-serializable/36142844#36142844
        "creationDate": msSince, # https://code-maven.com/serialize-datetime-object-as-json-in-python
        "stockTicker": myticker,
        "stockQuantity": myquantity,
        "requestPrice": myprice,
        'action': action
    }
    trades.append(trade)
    print('.', end='')
    req = requests.post('http://127.0.0.1:3001/api/trade', json=trade)
    if req.status_code != '200':
        print (req)
        print ('ruh roh ', req.status_code)



print()
print(trades)
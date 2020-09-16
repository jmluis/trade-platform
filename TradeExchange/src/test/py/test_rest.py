import requests

url = "http://127.0.0.1:3001/api/trade"



def testGetAllTrades():
    print(doReq("GET", "", "").text)
    

def doReq(act, payload, headers={'content-type': 'application/json'}):
    response = requests.request(act, url, data=payload)
    return response

def testUpdateTrade():
    payload =   {
        "id": {
        "timestamp": 1599833933,
        "date": "2020-09-11T14:18:53.000+00:00"
        },
        "creationDate": "1970-01-01T05:36:40.831+00:00",
        "stockTicker": "appl",
        "stockQuantity": 56,
        "requestPrice": 5.0,
    }
    print(doReq("PUT", payload).text)

def testAddTrade():
    payload =   {
        "id": {
        "timestamp": 1599833933,
        "date": "2020-09-11T14:18:53.000+00:00"
        },
        "creationDate": "1970-01-01T05:36:40.831+00:00",
        "stockTicker": "appl",
        "stockQuantity": 56, 
        "requestPrice": 5.0, 
        "tradeStatus": "Filled"
    }
    print(doReq("POST", payload).text)


testGetAllTrades()
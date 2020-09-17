import datetime
from flask import Flask
from flask_restplus import Api, Resource
import pandas as pd
import pandas_datareader as pdr
from pytrends.request import TrendReq

flask_app = Flask(__name__)
app = Api(app = flask_app)
pytrend = TrendReq()

ticker_space = app.namespace('ticker', description='Ticker APIs')
trend_space = app.namespace('trend', description='Trend APIs')

@ticker_space.route("/<string:ticker>")
class TickerClass(Resource):
    def get(self, ticker):
        start_date = datetime.datetime.now() - datetime.timedelta(1)
        df = pdr.get_data_yahoo(ticker, start_date)[['Close']]
        df['Date'] = df.index
        
        return {
                'ticker': ticker,
                'date': df.iloc[-1]['Date'].strftime("%m/%d/%Y"),
                'price': df.iloc[-1]['Close']
        }

@trend_space.route("/<string:phrase>")
class TrendClass(Resource):
    def get(self, phrase):
        pytrend.build_payload(kw_list=[phrase], timeframe='now 1-d')
        df = pytrend.interest_over_time()

        return {
            'phrase': phrase,
            'interest': int(df.iloc[[-1]][phrase])
        }

if __name__ == "__main__":
    flask_app.run(debug=True)
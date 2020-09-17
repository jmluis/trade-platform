import { Trade } from '../models';

export const TRADES: Trade[] = [
    {
        id: '1',
        quantity: 10,
        price: 115.54,
        status: 'CREATED',
        action: 'BUY',
        stockTicker: 'AAPL',
        // @DateTimeFormat(pattern = "yyyy-MM-dd hh:mm:ss"),
        tradeDate: new Date('2020-09-17 11:12:24'),
    },
    {
        id: '2',
        quantity: 36,
        price: 1535.12,
        status: 'FILLED',
        action: 'SELL',
        stockTicker: 'GOOGL',
        // @DateTimeFormat(pattern = "yyyy-MM-dd hh:mm:ss"),
        tradeDate: new Date('2020-09-17 11:12:54'),
    },
    {
        id: '3',
        quantity: 16,
        price: 1515.12,
        status: 'FILLED',
        action: 'BUY',
        stockTicker: 'GOOGL',
        // @DateTimeFormat(pattern = "yyyy-MM-dd hh:mm:ss"),
        tradeDate: new Date('2020-09-17 11:22:54'),
    },
];
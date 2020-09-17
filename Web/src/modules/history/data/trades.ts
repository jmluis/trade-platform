import { Trade } from '../models';

export const TRADES: Trade[] = [
    {
        stockTicker: 'AAPL',
        price: 115.54,
        quantity: 5,
        status: 'CREATED',
        action: 'BUY',
        // description: 'Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services. It is considered one of the Big Tech technology companies, alongside Amazon, Google, Microsoft, and Facebook.'
    },
    {
        stockTicker: 'GOOGL',
        price: 1535.12,
        quantity: 5,
        status: 'FILLED',
        action: 'SELL',
        // description: 'Alphabet Inc. is an American multinational conglomerate headquartered in Mountain View, California. It was created through a restructuring of Google on October 2, 2015, and became the parent company of Google and several former Google subsidiaries.'
    },
    {
        stockTicker: 'TSLA',
        price: 449.76,
        quantity: 5,
        status: 'CREATED',
        action: 'SELL',
        // description: 'Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California. Teslas current products include electric cars, battery energy storage from home to grid scale, solar products and related products and services.'
    },
];
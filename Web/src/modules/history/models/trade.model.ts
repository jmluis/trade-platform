// TODO: double check interface

export interface Trade {
    [key: string]: string | number | Date | undefined;
    _id?: string;
    quantity: number;
    price: number;
    status: string;
    action: string;
    stockTicker: string;
    // @DateTimeFormat(pattern = "yyyy-MM-dd hh:mm:ss")
    tradeDate?: Date;
}
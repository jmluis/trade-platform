export interface Stock {
    [key: string]: string | undefined;
    _id?: string;
    companyName: string;
    companySymbol: string;
    stockIndex: string;
}

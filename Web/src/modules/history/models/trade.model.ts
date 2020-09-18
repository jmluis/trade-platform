import { Stock } from '@modules/dashboard/models';

export interface Trade {
    [key: string]: string | number | Date | Stock | undefined;
    _id?: string;
    stockQuantity: number;
    requestPrice: number;
    status?: string;
    action: string;
    stock: Stock;
    // @DateTimeFormat(pattern = "yyyy-MM-dd hh:mm:ss")
    creationDate?: Date;
}
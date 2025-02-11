export interface Invoice {
    id: number,
    file: any,
    filename: string,
    default_language: string,
    type: string,
    vendor: string,
    place: string,
    item: string,
    item_type: string,
    qty: string,
    date: Date,
    checkin_time: Date,
    checkout_time: Date,
    currency: string,
    amount: string,
}
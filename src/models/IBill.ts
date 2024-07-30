export default interface IBill {
    billId: number;
    employeeId: number;
    tableHistoryId: number;
    priceId: number;
    vat: number;
    note: string;
    total: number;
}

import ETableHistoryStatus from "./ETableHistoryStatus";

export default interface ITableHistory {
    tableHistoryId: number;
    buffetTableId: number;
    reservationId: number;
    startDateTime: Date;
    endDateTime: Date;
    adultQuantity: number;
    childrenQuantity: number;
    tableHistoryStatus: ETableHistoryStatus;
}
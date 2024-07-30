import EReservationStatus from "./EReservationStatus";

export default interface IReservation {
    reservationId: number;
    customerId: number;
    reservationTimeFrameId: number;
    date: Date;
    adultQuantity: number;
    childrenQuantiy: number;
    note: string;
    createdDateTime: Date;
    reservationStatus: EReservationStatus;
}
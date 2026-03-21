import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type ReportId = bigint;
export type Time = bigint;
export interface Report {
    id: ReportId;
    submittedAt: Time;
    description: string;
    reportType: string;
    location?: string;
}
export interface backendInterface {
    getAllReports(): Promise<Array<Report>>;
    submitReport(reportType: string, description: string, location: string | null): Promise<ReportId>;
}

export interface DBConnectionAdapter {
    connect(): Promise<void>;
}
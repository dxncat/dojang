export interface HistoryRange {
    id: string;
    createdAt: Date;
    userId: string;
    range: {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        description: string;
    }
    finishedAt: Date | null;
}
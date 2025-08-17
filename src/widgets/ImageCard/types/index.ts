export type IImageCard = {
    id: number;
    url: string;
    alt: string;
    title: string;
    description: string;
    pins: string[];
    amountComment: number;
    reviewTime: number;
    createdAt: Date;
}
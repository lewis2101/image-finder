export type IImageCardComment = {
    id: number;
    userName: string;
    avatarUrl: string;
    comment: string;
    createdAt: Date;
}

export type IImageCard = {
    id: number;
    url: string;
    alt: string;
    title: string;
    description: string;
    additonalDescription: string;
    pins: string[];
    reviewTime: number;
    createdAt: Date;
    comments: IImageCardComment[];
}
export interface MovieType {
    id: number;
    name: string;
    alternativeName: string;
    poster: {
        url: string;
        previewUrl: string;
    };
    backdrop: {
        url?: string;
        previewUrl?: string;
    }
    rating: {
        imdb: number | null;
        kp: number | null;
    };
    year: number;
    ageRating: number;
    shortDescription: string;
    description: string;
}

export interface ExtendetMovieType extends MovieType {

}
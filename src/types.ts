export type Type = "movie" | "tv-series" | "cartoon" | "animated-series" | "anime";

export function isValidType(type: string): type is Type {
    return [
        "movie",
        "tv-series",
        "cartoon",
        "animated-series",
        "anime"
    ].includes(type);
}

export interface MovieType {
    id: number;
    name: string;
    poster: {
        url: string;
        previewUrl: string;
    };
        rating: {
        imdb: number | null;
        kp: number | null;
    };
    year: number;
    ageRating: number;
    backdrop: {
        url?: string;
        previewUrl?: string;
    }
    shortDescription: string;
    description: string;
    type: Type;
        externalId: {
        imdb: string
    }
}

export interface ExtendetMovieType extends MovieType {
    alternativeName: string;

    movieLength: number,
    genres: [{name: string}]
    persons: Person[],
    similarMovies: MovieType[],
}

export type Person = {
    id: number,
    name: string,
    photo: string,
}



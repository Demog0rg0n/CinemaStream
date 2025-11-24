export function formattingMovieLength(length: number) {
    const formattedLengt = {
        hours: Math.floor(length / 60),
        minutes: length % 60
    }
    return formattedLengt
}
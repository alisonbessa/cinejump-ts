export default interface Props {
    isFavorite?: boolean;
    poster_path?: string;
    backdrop?: string;
    overview?: string;
    releaseDate?: string;
    genreIds?: number[];
    id?: number;
    originalTitle?: string;
    title?: string;
    popularity?: number;
    voteCount?: number;
    voteAverage?: number;
    setFavoriteList?: any;
    favoriteList?: any;
};
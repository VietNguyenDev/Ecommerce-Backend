interface Favorite {
    userId: number;
    productId: number;
}
declare function createFavorite({ userId, productId }: Favorite): Promise<import("../model/favorites.model").default>;
declare function getFavoriteByUserId(userId: number): Promise<import("../model/favorites.model").default | null>;
declare function deleteFavorite(id: number): Promise<number>;
declare const _default: {
    createFavorite: typeof createFavorite;
    getFavoriteByUserId: typeof getFavoriteByUserId;
    deleteFavorite: typeof deleteFavorite;
};
export default _default;

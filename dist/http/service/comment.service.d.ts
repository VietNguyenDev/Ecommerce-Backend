interface Comment {
    userId: number;
    productId: number;
    content: Text;
}
declare function createComment({ userId, productId, content }: Comment): Promise<import("../model/comment.model").default>;
declare function getCommentByProductId(productId: number): Promise<import("../model/comment.model").default[]>;
declare function deleteComment(id: number): Promise<number>;
declare function updateComment(id: number, content: Text): Promise<[affectedCount: number]>;
declare const _default: {
    createComment: typeof createComment;
    getCommentByProductId: typeof getCommentByProductId;
    deleteComment: typeof deleteComment;
    updateComment: typeof updateComment;
};
export default _default;

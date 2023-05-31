interface CategoryOptions {
    categoryName: string;
}
declare function getCategories(): Promise<import("../model/category.model").default[]>;
declare function getCategoryById(id: number): Promise<import("../model/category.model").default | null>;
declare function createCategory({ categoryName }: CategoryOptions): Promise<import("../model/category.model").default>;
declare function deleteCategory(id: number): Promise<number>;
declare function updateCategory(id: number, { categoryName }: CategoryOptions): Promise<[affectedCount: number]>;
declare const _default: {
    getCategories: typeof getCategories;
    getCategoryById: typeof getCategoryById;
    createCategory: typeof createCategory;
    deleteCategory: typeof deleteCategory;
    updateCategory: typeof updateCategory;
};
export default _default;

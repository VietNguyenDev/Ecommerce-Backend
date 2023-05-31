import db from "../model";
import { abort } from "../helper/error";

interface CategoryOptions {
    categoryName: string;
}

async function getCategories() {
    try {
        const categories = await db.models.Category.findAll({});

        return categories;
    } catch (error: any) {
        return abort(500, error.message);
    }
}

async function getCategoryById(id: number) {
    try {
        const category = await db.models.Category.findByPk(id);

        if(!category) {
            abort(404, "Category not found");
        }

        return category;
    } catch (error: any) {
        return abort(500, error.message);
    }
}

async function createCategory({categoryName}: CategoryOptions) {
    try {
        const category = await db.models.Category.findOne({where: {categoryName: categoryName}});

        if(category) {
            abort(409, "Category already exists");
        }

        const data = await db.models.Category.create({categoryName});

        return data; 
    } catch (error: any) {
        return abort(500, error.message);
    }
}

async function deleteCategory(id: number) {
    try {
        const category = await db.models.Category.findByPk(id);

        if(!category) {
            abort(404, "Category not found");
        }

        const data = await db.models.Category.destroy({where: {id: id}});

        return data;
    } catch (error: any) {
        return abort(500, error.message);
    }
}

async function updateCategory(id: number, {categoryName}: CategoryOptions) {
    try {
        const category = await db.models.Category.findByPk(id);

        if(!category) {
            abort(404, "Category not found");
        }

        const data = await db.models.Category.update({categoryName}, {where: {id: id}});

        return data;
    } catch (error: any) {
        return abort(500, error.message);
    }
}

export default { getCategories, getCategoryById, createCategory, deleteCategory, updateCategory };
import { response } from "express";
import { CustomError } from "../util/customError.js";

export class Service {

    constructor(dao) {
        this.dao = dao;
    }

    async create(body) {
        try {
            return await this.dao.create(body);
            if (!response) throw new CustomError("no se ah podido crear el elemento", 404);
        } catch (error) {
            throw error;
        }
    }

    async getAll() {
        try {
            return await this.dao.getAll({});
            if (!response) throw new CustomError("error al buscar en la base de datos", 500);
        } catch (error) {
            throw error;
        }
    }

    async getById(id) {
        try {
            return await this.dao.getById(id);
            if (!response) throw new CustomError("error al buscar en la base de datos", 404);
        } catch (error) {
            throw error;
        }
    }

    async update(id, body) {
        try {
            return await this.dao.update(id, body, { new: true });
            if (!response) throw new CustomError("error al actualizar", 500);
        } catch (error) {
            throw error;
        }
    }

    async delete(id) {
        try {
            return await this.dao.delete(id);
            if (!response) throw new CustomError("no se ah podido eliminar el elemento", 500);
        } catch (error) {
            throw error;
        }
    }
}

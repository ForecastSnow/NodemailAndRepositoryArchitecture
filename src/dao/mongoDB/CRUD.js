export class CRUD {
    constructor(model) {
        this.model = model;
    }


    create = async (data) => {

        try {
            return await this.model.create(data)
        } catch (error) {
            throw Error(error)
        }
    }

    getAll = async () => {

        try {
            return await this.model.find({});
        } catch (error) {
            throw Error(error);
        }

    }

    getById = async (id) => {

        try {
            return await this.model.findById(id);
        } catch (error) {
            throw Error(error);
        }

    }

    update = async (id, data) => {

        try {
            return await this.model.findByIdAndUpdate(id, data, { new: true });
        } catch (error) {
            throw Error(error);
        }

    }

    delete = async (id) => {

        try {
            return await this.model.findByIdAndDelete(id);
        } catch (error) {
            throw Error(error);
        }

    }


}
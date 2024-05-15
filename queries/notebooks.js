import notebooks from '../models/mongo/notebooks.js'
export class Notebooks_ {

    async find() {
        try {
            return await notebooks.find({})
        } catch (error) {
            console.log('Notebook error in find - queries ', error);
            return error;
        }
    }
}



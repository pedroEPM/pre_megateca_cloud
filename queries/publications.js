import publciations from '../models/mongo/publications.js'
export class Publciations_ {

    async find() {
        try {
            return await publciations.find({})
        } catch (error) {
            console.log('Publication error in find - queries ', error);
            return error;
        }
    }
}



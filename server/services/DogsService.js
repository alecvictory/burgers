import { fakeDb } from "../db/FakeDb";
import { BadRequest } from "../utils/Errors";
import { generateId } from "../utils/GenerateId";

class DogsService {
    async find(query = {}) {
        // let values = await dbContext.Values.find(query);
        return fakeDb.dogs;
    }
    async findById(id) {
        let value = await fakeDb.dogs.find(a => a.id === id);
        if (!value) {
            throw new BadRequest("Invalid Id");
        }
        return value;
    }
}

export const dogsService = new DogsService();
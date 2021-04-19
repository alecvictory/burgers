import { fakeDb } from "../db/FakeDb";
import { BadRequest } from "../utils/Errors";
import { generateId } from "../utils/GenerateId";

class CatsService {
    async find(query = {}) {
        // let values = await dbContext.Values.find(query);
        return fakeDb.cats;
    }
    async findById(id) {
        let value = await fakeDb.cats.find(a => a.id === id);
        if (!value) {
            throw new BadRequest("Invalid Id");
        }
        return value;
    }
}

export const catsService = new CatsService();
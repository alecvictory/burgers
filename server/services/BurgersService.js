import { fakeDb } from "../db/FakeDb";
import { BadRequest } from "../utils/Errors";
import { generateId } from "../utils/GenerateId";

class BurgersService {
    async find(query = {}) {
        // let values = await dbContext.Values.find(query);
        return fakeDb.burgers;
    }
    async findById(id) {
        let value = await fakeDb.burgers.find(a => a.id === id);
        if (!value) {
            throw new BadRequest("Invalid Id");
        }
        return value;
    }
}

export const burgersService = new BurgersService();
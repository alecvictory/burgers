import BaseController from "../utils/BaseController";
import { dogsService } from "../services/DogsService";

export class DogsController extends BaseController {
    constructor() {
        super("api/dogs");
        this.router
            .get("", this.getAll)
            // .get('/:id', this.getById)
            .post("", this.create);
        //put
        //delete
    }
    async getAll(_, res, next) {
        try {
            const values = await dogsService.find()
            return res.send(values);
        } catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            let data = await dogsService.create(req.body)
            res.send(data);
        } catch (error) {
            next(error);
        }
    }
}
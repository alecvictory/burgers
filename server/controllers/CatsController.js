import BaseController from "../utils/BaseController";
import { catsService } from "../services/CatsService";

export class CatsController extends BaseController {
    constructor() {
        super("api/cats");
        this.router
            .get("", this.getAll)
            // .get('/:id', this.getById)
            .post("", this.create);
        //put
        //delete
    }
    async getAll(_, res, next) {
        try {
            const values = await catsService.find()
            return res.send(values);
        } catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            let data = await catsService.create(req.body)
            res.send(data);
        } catch (error) {
            next(error);
        }
    }
}
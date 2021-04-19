import BaseController from "../utils/BaseController";
import { burgersService } from "../services/BurgersService";

export class BurgersController extends BaseController {
    constructor() {
        super("api/burgers");
        this.router
            .get("", this.getAll)
            // .get('/:id', this.getById)
            .post("", this.create);
        //put
        //delete
    }
    async getAll(_, res, next) {
        try {
            const values = await burgersService.find()
            return res.send(values);
        } catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            let data = await burgersService.create(req.body)
            res.send(data);
        } catch (error) {
            next(error);
        }
    }
}
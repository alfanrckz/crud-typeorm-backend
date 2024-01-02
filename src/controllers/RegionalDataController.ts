import { Request, Response } from "express";
import RegionalDataServices from "../services/RegionalDataServices";

export default new (class RegionalDataController {
  async create(req: Request, res: Response) {
    try {
      const data = req.body;
      const response = await RegionalDataServices.create(data);
      return res.status(201).json(response);
    } catch (error) {
      return res.status(500).json({ message: "internal server error" });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const data = req.body;
      const response = await RegionalDataServices.getAll(data);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ messsage: "Internal server error" });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const  id  = req.params.id;
      const response = await RegionalDataServices.delete(id);
      return res.status(202).json(response);
    } catch (error) {
      return res.status(500).json({ messsage: "Internal server error" });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const data = req.body;
      const response = await RegionalDataServices.update(id, data);
      return res.status(203).json(response);
    } catch (error) {
      return res.status(500).json({ messsage: "Internal server error" });
    }
  }
})();

import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { UpdateResult, DeleteResult } from 'typeorm';
import ModelEntity from '../entities/model.entity';
import ModelService from '../services/model.service';

class ModelController {
    private modelService;

    constructor(modelService: ModelService<ModelEntity, UpdateResult, DeleteResult>) {
        this.modelService = modelService;
    }

    public getAllModels = async (req: Request, res: Response): Promise<Response> => {
        const models = await this.modelService.getAllModels();
        return res.status(StatusCodes.OK).json(models);
    };

    public getModelById = async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.params;
        const model = await this.modelService.getModelById(id);
        return res.status(StatusCodes.OK).json(model);
    };

    public updateModel = async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.params;
        const { data } = req.body;
        const result = await this.modelService.updateModel(id, data);
        return res.status(StatusCodes.OK).json(result);
    };

    public deleteModel = async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.params;
        const result = await this.modelService.deleteModel(id);
        return res.status(StatusCodes.OK).json(result);
    };
}

export default ModelController;

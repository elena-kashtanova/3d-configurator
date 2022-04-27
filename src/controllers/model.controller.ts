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

    public async getAllModels(req: Request, res: Response): Promise<Response> {
        const models = await this.modelService.getAllModels();
        return res.status(StatusCodes.OK).json(models);
    }

    public async getModelById(req: Request, res: Response): Promise<Response> {
        const { id } = req.query;
        const modelId = id as string;

        if (modelId) {
            const model = await this.modelService.getModelById(modelId);
            return res.status(StatusCodes.OK).json(model);
        } else {
            return res.status(StatusCodes.BAD_REQUEST).send('Invalid ID');
        }
    }

    public async updateModel(req: Request, res: Response): Promise<Response> {
        const { id } = req.query;
        const { data } = req.body;
        const modelId = id as string;

        if (modelId) {
            const result = await this.modelService.updateModel(modelId, data);
            return res.status(StatusCodes.OK).json(result);
        } else {
            return res.status(StatusCodes.BAD_REQUEST).send('Invalid ID');
        }
    }

    public async deleteModel(req: Request, res: Response): Promise<Response> {
        const { id } = req.query;
        const modelId = id as string;

        if (modelId) {
            const result = await this.modelService.deleteModel(modelId);
            return res.status(StatusCodes.OK).json(result);
        } else {
            return res.status(StatusCodes.BAD_REQUEST).send('Invalid ID');
        }
    }
}

export default ModelController;

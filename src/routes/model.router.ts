import { Router } from 'express';
import AppDataSource from '../config/orm-config';
import ModelEntity from '../entities/model.entity';
import ModelTypeORMRepository from '../repositories/model.repository';
import ModelService from '../services/model.service';
import ModelController from '../controllers/model.controller';
import { isIdProvided } from '../middleware/validator';

const modelRepo = new ModelTypeORMRepository(AppDataSource.getRepository(ModelEntity));
const modelService = new ModelService(modelRepo);
const modelController = new ModelController(modelService);

const modelRouter = Router();

modelRouter.get('/', modelController.getAllModels);
modelRouter.get('/:id', isIdProvided, modelController.getModelById);
modelRouter.put('/:id', isIdProvided, modelController.updateModel);
modelRouter.delete('/:id', isIdProvided, modelController.deleteModel);

export default modelRouter;

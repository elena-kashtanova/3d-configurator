import { Router } from 'express';
import AppDataSource from '../config/orm-config';
import ModelEntity from '../entities/model.entity';
import ModelTypeORMRepository from '../repositories/model.repository';
import ModelService from '../services/model.service';
import ModelController from '../controllers/model.controller';

const modelRepo = new ModelTypeORMRepository(AppDataSource.getRepository(ModelEntity));
const modelService = new ModelService(modelRepo);
const modelController = new ModelController(modelService);

const modelRouter = Router();

modelRouter.get('/', modelController.getAllModels);
modelRouter.get('/:id', modelController.getModelById);
modelRouter.put('/:id', modelController.updateModel);
modelRouter.delete('/:id', modelController.deleteModel);

export default modelRouter;

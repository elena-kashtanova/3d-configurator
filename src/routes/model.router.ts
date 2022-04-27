import { Router } from 'express';
import { AppDataSource } from '@config/orm-config';
import { ModelEntity } from '@entities/model.entity';
import { ModelTypeORMRepository } from '@repositories/model.repository';
import { ModelService } from '@services/model.service';
import { ModelController } from '@controllers/model.controller';
import { checkParamsId } from '@middleware/validator';

const modelRepo = new ModelTypeORMRepository(AppDataSource.getRepository(ModelEntity));
const modelService = new ModelService(modelRepo);
const modelController = new ModelController(modelService);

const modelRouter = Router();

modelRouter.get('/', modelController.getAllModels);
modelRouter.get('/:id', checkParamsId, modelController.getModelById);
modelRouter.put('/:id', checkParamsId, modelController.updateModel);
modelRouter.delete('/:id', checkParamsId, modelController.deleteModel);

export { modelRouter };

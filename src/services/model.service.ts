import { IModelRepo } from '../interfaces/model-repo.interface';
import { getErrorMessage } from '../utils/getErrorMessage';
class ModelService<ModelEntityType, UpdateResultType, DeleteResultType> {
    private modelRepo: IModelRepo<ModelEntityType, UpdateResultType, DeleteResultType>;

    constructor(repo: IModelRepo<ModelEntityType, UpdateResultType, DeleteResultType>) {
        this.modelRepo = repo;
    }

    public getAllModels = async (): Promise<ModelEntityType[]> => {
        try {
            return this.modelRepo.getAll();
        } catch (error) {
            const message = getErrorMessage(error);
            throw new Error(message);
        }
    };

    public getModelById = async (id: number | string): Promise<ModelEntityType | null> => {
        try {
            return this.modelRepo.getById(id);
        } catch (error) {
            const message = getErrorMessage(error);
            throw new Error(message);
        }
    };

    public updateModel = async (id: number | string, data: ModelEntityType): Promise<UpdateResultType> => {
        try {
            const model = await this.getModelById(id);

            if (!model) {
                throw new Error("Model doesn't exist");
            }

            return this.modelRepo.update(id, data);
        } catch (error) {
            const message = getErrorMessage(error);
            throw new Error(message);
        }
    };

    public deleteModel = async (id: number | string): Promise<DeleteResultType> => {
        try {
            return this.modelRepo.delete(id);
        } catch (error) {
            const message = getErrorMessage(error);
            throw new Error(message);
        }
    };
}

export { ModelService };

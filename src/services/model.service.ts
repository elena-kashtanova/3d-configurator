import IModel from '../interfaces/model-repo.interface';

class ModelService<ModelEntityType, UpdateResultType, DeleteResultType> {
    private modelRepo: IModel<ModelEntityType, UpdateResultType, DeleteResultType>;

    constructor(repo: IModel<ModelEntityType, UpdateResultType, DeleteResultType>) {
        this.modelRepo = repo;
    }

    public getAllModels = async (): Promise<ModelEntityType[]> => {
        return this.modelRepo.getAll();
    };

    public getModelById = async (id: number | string): Promise<ModelEntityType | null> => {
        return this.modelRepo.getById(id);
    };

    public updateModel = async (id: number | string, data: Partial<ModelEntityType>): Promise<UpdateResultType> => {
        const model = await this.getModelById(id);

        if (!model) {
            throw new Error("Model doesn't exist");
        }

        return this.modelRepo.update(id, data);
    };

    public deleteModel = async (id: number | string): Promise<DeleteResultType> => {
        return this.modelRepo.delete(id);
    };
}

export default ModelService;

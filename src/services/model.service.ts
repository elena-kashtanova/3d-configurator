import IModel from '../interfaces/model-repo.interface';

class ModelService<ModelEntityType, UpdateResultType, DeleteResultType> {
    private modelRepo: IModel<ModelEntityType, UpdateResultType, DeleteResultType>;

    constructor(repo: IModel<ModelEntityType, UpdateResultType, DeleteResultType>) {
        this.modelRepo = repo;
    }

    public async getAllModels(): Promise<ModelEntityType[]> {
        return this.modelRepo.getAll();
    }

    public async getModelById(id: number): Promise<ModelEntityType | null> {
        return this.modelRepo.getById(id);
    }

    public async updateModel(id: number, data: Partial<ModelEntityType>): Promise<UpdateResultType> {
        const model = await this.getModelById(id);

        if (!model) {
            throw new Error("Model doesn't exist");
        }

        return this.modelRepo.update(id, data);
    }

    public async deleteModel(id: number): Promise<DeleteResultType> {
        return this.modelRepo.delete(id);
    }
}

export default ModelService;

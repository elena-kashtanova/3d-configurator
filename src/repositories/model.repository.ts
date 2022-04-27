import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { ModelEntity } from '../entities/model.entity';
import { IModelRepo } from '../interfaces/model-repo.interface';

class ModelTypeORMRepository implements IModelRepo<ModelEntity, UpdateResult, DeleteResult> {
    private repo: Repository<ModelEntity>;

    constructor(repo: Repository<ModelEntity>) {
        this.repo = repo;
    }

    public getAll = async (): Promise<ModelEntity[]> => {
        return this.repo.createQueryBuilder('model').select().getMany();
    };

    public getById = async (id: number | string): Promise<ModelEntity | null> => {
        return this.repo.findOneBy({ id: id });
    };

    public update = async (id: number | string, data: ModelEntity): Promise<UpdateResult> => {
        return this.repo.update(id, data);
    };

    public delete = async (id: number | string): Promise<DeleteResult> => {
        return this.repo.delete(id);
    };
}

export { ModelTypeORMRepository };

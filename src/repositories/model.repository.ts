import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import ModelEntity from '../entities/model.entity';
import IModelRepo from '../interfaces/model-repo.interface';

class ModelTypeORMRepository implements IModelRepo<ModelEntity, UpdateResult, DeleteResult> {
    private repo: Repository<ModelEntity>;

    constructor(repo: Repository<ModelEntity>) {
        this.repo = repo;
    }

    public async getAll(): Promise<ModelEntity[]> {
        return await this.repo.createQueryBuilder('model').select().getMany();
    }

    public async getById(id: number | string): Promise<ModelEntity | null> {
        return await this.repo.findOneBy({ id: id });
    }

    public async update(id: number | string, data: Partial<ModelEntity>): Promise<UpdateResult> {
        return await this.repo.update(id, data);
    }

    public async delete(id: number | string): Promise<DeleteResult> {
        return await this.repo.delete(id);
    }
}

export default ModelTypeORMRepository;

interface IModelRepo<ModelEntityType, UpdateResultType, DeleteResultType> {
    getAll: () => Promise<ModelEntityType[]>;
    getById: (id: number) => Promise<ModelEntityType | null>;
    update: (id: number, data: Partial<ModelEntityType>) => Promise<UpdateResultType>;
    delete: (id: number) => Promise<DeleteResultType>;
}

export default IModelRepo;

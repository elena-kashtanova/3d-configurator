interface IModelRepo<ModelEntityType, UpdateResultType, DeleteResultType> {
    getAll: () => Promise<ModelEntityType[]>;
    getById: (id: number | string) => Promise<ModelEntityType | null>;
    update: (id: number | string, data: ModelEntityType) => Promise<UpdateResultType>;
    delete: (id: number | string) => Promise<DeleteResultType>;
}

export type { IModelRepo };

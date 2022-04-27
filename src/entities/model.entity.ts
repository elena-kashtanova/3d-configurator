import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
class ModelEntity extends BaseEntity {
    constructor(id: number, color: string) {
        super();
        this.id = id;
        this.color = color;
    }

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public color: string;
}

export default ModelEntity;

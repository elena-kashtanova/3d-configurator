import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
class ModelEntity extends BaseEntity {
    constructor(id: number, color: string, positions: number[]) {
        super();
        this.id = id;
        this.color = color;
        this.positions = positions;
    }

    @PrimaryGeneratedColumn()
    public id: number | string;

    @Column()
    public color: string;

    @Column('float', {
        array: true,
    })
    public positions: number[];
}

export { ModelEntity };

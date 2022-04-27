import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
class ModelEntity extends BaseEntity {
    constructor(id: number, name: string, type: string, color: string, position: number[], uv: number[], normal: number[], index: number[], parameters: JSON) {
        super();
        this.id = id;
        this.name = name;
        this.type = type;
        this.color = color;
        this.position = position;
        this.uv = uv;
        this.normal = normal;
        this.index = index;
        this.parameters = parameters;
    }

    @PrimaryGeneratedColumn()
    public id: number | string;

    @Column()
    public name: string;

    @Column()
    public type: string;

    @Column()
    public color: string;

    @Column('float', {
        array: true,
    })
    public position: number[];

    @Column('float', {
        array: true,
    })
    public uv: number[];

    @Column('float', {
        array: true,
    })
    public normal: number[];

    @Column('integer', {
        array: true,
        nullable: true,
    })
    public index: number[] | null;

    @Column('json', {
        nullable: true,
    })
    public parameters: object;
}

export { ModelEntity };

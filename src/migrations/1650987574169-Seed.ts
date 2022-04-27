import { MigrationInterface, QueryRunner } from 'typeorm';
import { ModelEntity } from '../entities/model.entity';

export class Seed1650987574169 implements MigrationInterface {
    name = 'Seed1650987574169';

    public async up(queryRunner: QueryRunner): Promise<void> {
        const cube_one = queryRunner.manager.create<ModelEntity>(ModelEntity, {
            id: 1,
            name: 'Cube One',
            color: '0x1B9AAA',
            positions: [
                -1, -1, 1, 1, -1, 1, -1, 1, 1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, -1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1,
                -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, -1, -1, 1, 1, -1, -1, -1, -1, -1,
            ],
        });
        const cube_two = queryRunner.manager.create<ModelEntity>(ModelEntity, {
            id: 2,
            name: 'Cube Two',
            color: '0xE9B44C',
            positions: [
                -1, -1, 1, 1, -1, 1, -1, 1, 1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, -1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1,
                -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, -1, -1, 1, 1, -1, -1, -1, -1, -1,
            ],
        });
        const cube_three = queryRunner.manager.create<ModelEntity>(ModelEntity, {
            id: 3,
            name: 'Cube Three',
            color: '0x2BC016',
            positions: [
                -1, -1, 1, 1, -1, 1, -1, 1, 1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, -1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1,
                -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, -1, -1, 1, 1, -1, -1, -1, -1, -1,
            ],
        });
        await queryRunner.manager.save([cube_one, cube_two, cube_three]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE * FROM model_entity`);
    }
}

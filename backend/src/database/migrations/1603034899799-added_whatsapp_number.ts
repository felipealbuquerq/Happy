import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class addedWhatsappNumber1603034899799 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'orphanages', 
            new TableColumn({
                name: 'whatsapp_number',
                type: 'varchar',
                isNullable: true,
                default: null
            }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('orphanages', 'whatsapp_number');
    }
}

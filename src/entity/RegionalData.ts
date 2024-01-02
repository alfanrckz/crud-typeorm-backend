import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({name : "regional-datas"})
export class RegionalData {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

}

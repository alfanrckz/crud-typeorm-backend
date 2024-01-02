import { Response, response } from 'express';
import { RegionalData } from './../entity/RegionalData';
import { AppDataSource } from './../data-source';
import { Repository } from "typeorm"

export default new class RegionalDataServices {
  private readonly RegionalDataRepository: Repository<RegionalData> = AppDataSource.getRepository(RegionalData)

   async create(data: any) : Promise<object | string> {
        try {
            const response = await this.RegionalDataRepository.save(data)

            return {
                message: 'Successfully created regional data',
                data: response
            }
        } catch (error) {
            return `Message: something error while creating a regional datas`
        }
    }

   async getAll(data: any) : Promise<object | string> {
        try {
            const response = await this.RegionalDataRepository.find(data)
            return {
                message: 'Successfully get regional data',
                data: response
            }
        } catch (error) {
            return `Message: Something error while get a regional data`
        }
    }

   async delete(id : any) : Promise<object | string> {
        try {
            const response = await this. RegionalDataRepository.delete(id)
            return {
                message: 'Successfully deleted the regional data',
                id: response
            }
        } catch (error) {
            return `Message: something error while delete a regional data`
        }
    }

   async update(id : any, data: any) : Promise<object | string> {
        try {
            const response = await this.RegionalDataRepository.update(id, data)
            return {
                message: 'Succesfully updated the regional data',
                id: response,
                
            }
        } catch (error) {
            return `Message: Something error while updated a regional data`
        }
    }

}
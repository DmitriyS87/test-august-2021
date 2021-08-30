import { DataModel } from '../../model'

export class ProductStats extends DataModel {
    constructor() {
        super();
    }
    
    static url = '/product/stats'

    static getProductStats = async function () {
        return await this.fetch(this.url, {
            method: 'GET',
            cors: 'no-cors'
        })
    }

}
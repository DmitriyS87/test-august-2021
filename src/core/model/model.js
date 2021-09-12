export class DataModel {
    static async fetch(url, options = {}) {
        if (url.includes('/product/stats')) {
            const response = await fetch('../src/mocks/cross_data.json')
            return response.json()
        }

    }
}

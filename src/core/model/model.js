export class DataModel {
    static async fetch(url, options = {}) {
        console.log(url.includes('/product/stats'));
        if (url.includes('/product/stats')) {
            return async () => {
                const data = await fetch('../src/mocks/cross_data.json')
                return data.json();
            }

        }
    }
}
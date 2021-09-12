import { action, computed, makeObservable, observable, toJS } from "mobx"
import { ProductStats } from "../../../core/api/product";
import { ProductPropertiesConstant } from "../../../constants/product";

const graphProppertyNames = [
    ProductPropertiesConstant.MoneySales,
    ProductPropertiesConstant.CountSales,
    ProductPropertiesConstant.InStock,
];

const serializeProductStatsDataToChart = (apiData) => {
    const result = apiData.reduce(
        (acc, item) => {
            graphProppertyNames.forEach((name) => {
                try {
                    const value = Number(item[name]);
                    acc[name].push(value < 0 ? 0 : value);
                } catch (_err) {
                    acc[name] = [];
                }
            });
            return acc;
        },
        {
            [ProductPropertiesConstant.MoneySales]: [],
            [ProductPropertiesConstant.CountSales]: [],
            [ProductPropertiesConstant.InStock]: [],
        }
    );
    return graphProppertyNames.map((name) => ({
        name,
        data: result[name],
    }));
};

const serializeProductStatsForTable = (apiData) => apiData.map(({ date, title, money_sales, count_sales, in_stock }) => ({
    date,
    product: title,
    sales: count_sales,
    revenue: money_sales,
    remains: in_stock,
}))

export class MonthStatsStore {
    productStats = [];

    constructor() {
        makeObservable(this, {
            productStats: observable,
            filtredProductStatsWithPositiveSales: computed,
            filtredProductStatsToChart: computed,
            setProductStatsData: action,
        })
    }

    get productStatsWithPositiveSales() {
        return toJS(this.productStats).map((productStat) => {
            const salesData = productStat[ProductPropertiesConstant.CountSales];
            if (Number(salesData) < 0) {
                productStat[ProductPropertiesConstant.CountSales] = 0;
                productStat[ProductPropertiesConstant.MoneySales] = 0;
            } 
            return productStat
        });
    }

    get filtredProductStatsWithPositiveSales() {
        return this.productStatsWithPositiveSales;
    }

    get filtredProductStatsForTable() {
        return Array.isArray(this.filtredProductStatsWithPositiveSales) ? serializeProductStatsForTable(this.filtredProductStatsWithPositiveSales) : [];
    }

    get filtredProductStatsToChart() {
        return Array.isArray(this.filtredProductStatsWithPositiveSales) ? serializeProductStatsDataToChart(this.filtredProductStatsWithPositiveSales) : [];
    }

    setProductStatsData(data) {
        this.productStats = data
    }

    async fetchInitialProductStats() {
        const data = await ProductStats.getProductStats();
        if (Array.isArray(data)) this.setProductStatsData(data);
    }

}

export const monthStatsStore = new MonthStatsStore();
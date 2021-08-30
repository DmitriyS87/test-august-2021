import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { ProductStats } from '../../core/api/product';
import { ProductPropertiesConstant } from '../../constants';

const options = {
  title: {
    text: 'Month stats',
  },
  series: [
    {
      name: 'Jane',
      data: [1, -20, 4],
    },
    {
      name: 'John',
      data: [5, 700, 3],
    },
  ],
};

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
          acc[name].push(Number(item[name]));
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

export const MonthStatsForProduct = () => {
  const [productStats, setProductStats] = useState(null);

  useEffect(() => {
    (async function fetchData() {
      const data = await ProductStats.getProductStats();
      const newData = await data();
      setProductStats({ 
        series: serializeProductStatsDataToChart(newData),
      });
    })();
  }, []);

  useEffect(() => {
    console.log({ ...options, ...productStats });
  }, [productStats]);

  return productStats ? (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={{ ...options, ...productStats }}
      />
    </div>
  ) : (
    <div>loading...</div>
  );
};

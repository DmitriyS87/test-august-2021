import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export const ProductMonthStatsChart = ({ options }) => {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={{
        title: 'Product month stats',
        series: options.map((paramData) => ({
          ...paramData,
          type: 'line',
        })),
      }}
    />
  );
};

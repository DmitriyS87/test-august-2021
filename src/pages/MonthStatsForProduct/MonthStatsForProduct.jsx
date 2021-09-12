import React from 'react';
import { ProductTable } from '../../components/AgTable/AgTable';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import { ProductMonthStatsChart } from './ProductMonthStatsChart/ProductMonthStatsChart';
import Grid from '@material-ui/core/Grid';
import { StyledDrawPaperWrapper } from './MonthStatsForProduct.styles';

const _MonthStatsForProduct = ({ monthStatsStore }) => {
  return Array.isArray(monthStatsStore.productStats) ? (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <Grid item xs={10}>
        <StyledDrawPaperWrapper>
          <ProductMonthStatsChart
            options={[...toJS(monthStatsStore.filtredProductStatsToChart)]}
          />
        </StyledDrawPaperWrapper>
      </Grid>
      <Grid item xs={10}>
        <StyledDrawPaperWrapper>
          <ProductTable
            rowData={toJS(monthStatsStore.filtredProductStatsForTable)}
          />
        </StyledDrawPaperWrapper>
      </Grid>
    </Grid>
  ) : (
    <div>loading...</div>
  );
};

export const MonthStatsForProduct = observer((props) =>
  _MonthStatsForProduct(props)
);

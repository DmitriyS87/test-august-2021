import { autorun } from 'mobx';
import React from 'react';
import { useEffect } from 'react';
import { MonthStatsForProduct } from '../pages';
import { monthStatsStore } from '../store/product/monthStats/monthStats';
import { PageWrapper } from './PageWrapper/PageWrapper';

const _App = () => {
  useEffect(
    () =>
        autorun(() => {
          monthStatsStore.fetchInitialProductStats();
        }),
    []
)

  return (
    <PageWrapper>
      <MonthStatsForProduct monthStatsStore={monthStatsStore} />
    </PageWrapper>
  );
};

export const App = _App;

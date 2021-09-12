import React from 'react';
import { PageHeader } from './components/Header';
import { Main } from './PageWrapper.style';

export const PageWrapper = ({children}) => {
    return (<>
      <PageHeader>Header</PageHeader>
      <Main>{children}</Main>
    </>)
}
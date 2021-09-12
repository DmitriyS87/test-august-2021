import React, { useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

// Дата
// Название
// Продажи
// Выручка
// Остатки

export const ProductTable = ({ rowData = [] }) => {
  const modules = useMemo(() => [ClientSideRowModelModule], []);

  const columnDefs = useMemo(
    () => [
      { field: 'date' },
      { field: 'product' },
      { field: 'sales' },
      { field: 'revenue' },
      { field: 'remains' },
    ],
    []
  );

  const defaultColDef = useMemo(
    () => ({
      resizable: true,
      sortable: true,
    }),
    []
  );

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 1000 }}>
      <AgGridReact
        reactUi="true"
        className="ag-theme-alpine"
        animateRows="true"
        modules={modules}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        enableRangeSelection="true"
        rowData={rowData}
        rowSelection="multiple"
        suppressRowClickSelection="true"
      />
    </div>
  );
};

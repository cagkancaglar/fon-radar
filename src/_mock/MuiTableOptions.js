export const options = {
  selectableRows: 'none',
  onTableChange: (action, state) => {;
  },
  rowsPerPage: 25,
  rowsPerPageOptions: [10, 25, 50, 100, 250],
  textLabels: {
    body: {
      noMatch: 'There is no record in the list.',
    },
    pagination: {
      next: 'Next Page',
      previous: 'Previous Page',
      rowsPerPage: 'List',
    },
    filter: {
      all: 'All',
      title: 'Filter',
      reset: 'Clear',
    },
    selectedRows: {
      text: 'rows has been deleted',
      delete: 'Delete Row',
      deleteAria: 'Deleted Selected Rows',
    },
    toolbar: {
      // search: 'Arama',
      downloadCsv: 'CSV Download',
      print: 'Print',
      viewColumns: 'Show Columns',
      filterTable: 'Filter',
    },
  }
};

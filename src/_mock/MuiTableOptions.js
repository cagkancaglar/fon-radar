export const options = {
  selectableRows: 'none',
  onTableChange: (action, state) => {;
  },
  rowsPerPage: 25,
  rowsPerPageOptions: [10, 25, 50, 100, 250],
  textLabels: {
    body: {
      noMatch: 'Listede kayıt bulunmamaktadır.',
    },
    pagination: {
      next: 'Sonraki Sayfa',
      previous: 'Önceki Sayfa',
      rowsPerPage: 'Listele',
    },
    filter: {
      all: 'Tüm Kayıtlar',
      title: 'Filtreler',
      reset: 'Temizle',
    },
    selectedRows: {
      text: 'rows has been deleted',
      delete: 'Delete Row',
      deleteAria: 'Deleted Selected Rows',
    },
    toolbar: {
      // search: 'Arama',
      downloadCsv: 'CSV İndir',
      print: 'Yazdır',
      viewColumns: 'Kolonları Göster',
      filterTable: 'Filtrele',
    },
  }
};

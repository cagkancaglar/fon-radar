import MUIDataTable from 'mui-datatables';

const MuiTable = ({data, columns, options,title}) => {
    return (
        <MUIDataTable
        title={title}
        data={data}
        columns={columns}
        options={options}
      />
    );
  };
  
  export default MuiTable;
  
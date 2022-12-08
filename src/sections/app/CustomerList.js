import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Stack, Button, Typography, Box, Modal, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import MuiTable from '../../components/tables/Table';
import FormProvider from '../../components/FormProvider';
import Iconify from '../../components/iconify/Iconify';
// mock
import { options } from '../../_mock/MuiTableOptions';
// service
import CustomerService from '../../services/CustomerService';


// ----------------------------------------------------------------------

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '400px',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius: '16px',
  boxShadow: 24,
  p: 4,
};

export default function CustomerList() {
  const services = new CustomerService();
 
  const [data, setData] = useState({
    companyName: '',
    taxNumber: '',
    taxOffice: '',
    invoiceCount: '',
    contactNumber: ''
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const customerData = {
      companyName: data.companyName,
      taxNumber: data.taxNumber,
      taxOffice: data.taxOffice,
      invoiceCount: data.invoiceCount,
      contactNumber: data.contactNumber,
    };
   
    await services.addCustomer(customerData).then((e) => {
      if (e.status === 201) {
        handleClose();
        setResult(e.data);
        getData();
        setApiState(true);
        setTimeout(() => {
          setApiState(false);
        }, 3000);
      }
    });
  };

  const [customer, setCustomer] = useState();
  const [handleResult, setResult] = useState();
  const [open, setOpen] = useState(false);
  const [apiState, setApiState] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const getData = () => {
    services.getCustomer().then((result) => setCustomer(result.data));
  };


   useEffect(() => {
    getData();
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  const columns = [
    {
      name: 'companyName',
      label: `Company Name`,
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'taxNumber',
      label: `Tax Number`,
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'taxOffice',
      label: `Tax Office`,
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'invoiceCount',
      label: `Invoice Count`,
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'contactNumber',
      label: `Contact Number`,
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'id',
      label: `Details`,
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRenderLite: (dataIndex) => {
          return (
            <Button
              variant="contained"
              size="small"
              to={'/dashboard/customer-detail/customerID=' + customer[dataIndex].id}
              LinkComponent={RouterLink}
            >
              Details
            </Button>
          );
        },
      },
    },
  ];
  return (
    <>
      <Stack sx={{py:2}} direction="row" alignItems="center" justifyContent="flex-end">
        <Button
          onClick={handleOpen}
          variant="contained"
          component={RouterLink}
          to=""
          startIcon={<Iconify icon="eva:plus-fill" />}
        >
          Add
        </Button>
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
          <FormProvider onSubmit={(e) => onSubmit(e)}>
            <Stack spacing={3}>
              <TextField
                required
                style={{ backgroundColor: 'white', borderRadius: 10 }}
                name="companyName"
                label="companyName"
                value={data.companyName}
                onChange={handleChange}
              />
              <TextField
                required
                style={{ backgroundColor: 'white', borderRadius: 10 }}
                name="taxNumber"
                label="taxNumber"
                value={data.taxNumber}
                onChange={handleChange}
              />
              <TextField
                required
                style={{ backgroundColor: 'white', borderRadius: 10 }}
                name="taxOffice"
                label="taxOffice"
                value={data.taxOffice}
                onChange={handleChange}
              />
              <TextField
                required
                style={{ backgroundColor: 'white', borderRadius: 10 }}
                name="invoiceCount"
                label="invoiceCount"
                value={data.invoiceCount}
                onChange={handleChange}
              />
              <TextField
                required
                style={{ backgroundColor: 'white', borderRadius: 10 }}
                name="contactNumber"
                label="contactNumber"
                value={data.contactNumber}
                onChange={handleChange}
              />
              <LoadingButton onClick={(e) => onSubmit(e)} fullWidth size="large" type="submit" variant="contained">
              Customer
              </LoadingButton>
            </Stack>
          </FormProvider>
        </Box>
      </Modal>
  
      <MuiTable title={'Customers'} data={customer} columns={columns} options={options} />
    </>
  );
}

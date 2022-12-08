import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
// @mui
import { Container, Box, Paper, Grid, Fade, Modal, Button, Stack, TextField, Typography, Backdrop } from '@mui/material';
import { styled } from '@mui/material/styles';
import { LoadingButton } from '@mui/lab';
// sections
// import CustomerList from 'src/sections/app/CustomerList';
import CustomerService from '../services/CustomerService';
import Iconify from '../components/iconify/Iconify';


// ----------------------------------------------------------------------

export default function CustomerDetails() {


  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2029' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

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

  // ----------------------------------------------------------------------

  const navigate = useNavigate();
  const services = new CustomerService();
  const [dataFinal, setData] = useState({
    companyName: '',
    taxNumber: '',
    taxOffice: '',
    invoiceCount: '',
    contactNumber: ''
  });

  const [customer, setcustomer] = useState({});
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleEditOpen = () => setEditOpen(true);
  const handleEditClose = () => setEditOpen(false);
  const [apiState, setApiState] = useState(false);

  let { id } = useParams();
  const onDelete = async (id) => {
    const deleted = services.deleteCustomer(id);
    if ((await deleted).status === 200) {
      handleClose();
      navigate('/dashboard');
    }
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setcustomer({
      ...customer,
      [e.target.name]: value,
    });
  };
  const update = async (id) => {
    const updated = await services.updateCustomer(id, customer);
    if (updated.status === 200) {
      handleEditClose()
      setApiState(true);
      setTimeout(() => {
        setApiState(false);
      }, 3000);
    }
  }
  useEffect(() => {
    const fetchData = async (id) => {
      return await services.getByCustomerId(id);
    };
    fetchData(id).then((data) => {
      setcustomer(data.data);
      setTimeout(() => {
      }, 3000);
    });
  }, []);

  // const alertState = (title, description, descriptionStrong) => {
  //   return (
  //     <SuccessAlert title={`${title}`} description={`${description}`} descriptionStrong={`${descriptionStrong}`} />
  //   );
  // };

  return (
    <>
      <Helmet>
        <title> Müşteri Detayları - Fon Radar</title>
      </Helmet>

      <Container maxWidth="xl">
      <Stack sx={{py:2}} direction="row" alignItems="center" justifyContent="flex-end">
          <Button onClick={handleEditOpen} sx={{ mr: 2 }} variant="contained" to="" startIcon={<Iconify icon="material-symbols:edit" />}>
            Bilgileri Düzenle
          </Button>
          <Modal
            open={editOpen}
            onClose={handleEditClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography textAlign={'center'} variant="subtitle1" gutterBottom component="div">
                 Düzenle
              </Typography>
              <Stack spacing={3}>
                <TextField
                  required
                  style={{ backgroundColor: 'white', borderRadius: 10 }}
                  name="companyName"
                  label="Şirket İsmi"
                  value={customer.companyName}
                  onChange={handleChange}
                />
                <TextField
                  required
                  style={{ backgroundColor: 'white', borderRadius: 10 }}
                  name="taxNumber"
                  label="Vergi Numarası"
                  value={customer.taxNumber}
                  onChange={handleChange}
                />
                <TextField
                  required
                  style={{ backgroundColor: 'white', borderRadius: 10 }}
                  name="taxOffice"
                  label="Vergi Dairesi"
                  value={customer.taxOffice}
                  onChange={handleChange}
                />
                <TextField
                  required
                  style={{ backgroundColor: 'white', borderRadius: 10 }}
                  name="invoiceCount"
                  label="Fatura Adeti"
                  value={customer.invoiceCount}
                  onChange={handleChange}
                />
                <TextField
                  required
                  style={{ backgroundColor: 'white', borderRadius: 10 }}
                  name="contactNumber"
                  label="İletişim Numarası"
                  value={customer.contactNumber}
                  onChange={handleChange}
                />
                <LoadingButton
                  onClick={() => update(id)}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Kaydet
                </LoadingButton>
              </Stack>
            </Box>
          </Modal>
          <Button
            onClick={handleOpen}
            variant="contained"
            color="error"
            to=""
            startIcon={<Iconify icon="mdi:delete-forever" />}
          >
            Kayıt Sil
          </Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <Typography textAlign={'center'} id="transition-modal-title" variant="subtitle2" component="h2">
                  {customer.companyName} adlı kayıt silinecektir!
                </Typography>
                <Stack sx={{ mt: 5 }} direction="row" alignItems="center" justifyContent="space-evenly">
                  <Button sx={{ mr: 2 }} onClick={() => onDelete(id)} variant="outlined" color="error">
                    Sil
                  </Button>
                  <Button sx={{ ml: 2 }} onClick={handleClose} variant="outlined" color="info">
                    Vazgeç
                  </Button>
                </Stack>
              </Box>
            </Fade>
          </Modal>
        </Stack>
        <Box sx={{ flexGrow: 3 }}>
          <Grid container spacing={4} columns={18}>
            <Grid item xs={9}>
              <Item>Şirket İsmi:</Item>
            </Grid>
            <Grid item xs={9}>
              <Item>{customer.companyName}</Item>
            </Grid>
            <Grid item xs={9}>
              <Item>Vergi Numarası:</Item>
            </Grid>
            <Grid item xs={9}>
              <Item>{customer.taxNumber}</Item>
            </Grid>
            <Grid item xs={9}>
              <Item>Vergi Dairesi</Item>
            </Grid>
            <Grid item xs={9}>
              <Item>{customer.taxOffice}</Item>
            </Grid>
            <Grid item xs={9}>
              <Item>Fatura Adeti</Item>
            </Grid>
            <Grid item xs={9}>
              <Item>{customer.invoiceCount}</Item>
            </Grid>
            <Grid item xs={9}>
              <Item>İletişim Numarası</Item>
            </Grid>
            <Grid item xs={9}>
              <Item>{customer.contactNumber}</Item>
            </Grid>
          </Grid>
        </Box>
        
      </Container>
    </>
  );
}
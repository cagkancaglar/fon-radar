import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox, FormControlLabel } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../components/iconify';
import FormProvider from '../../components/FormProvider';
// form
import { useForm } from 'react-hook-form';
// axios
import axios from 'axios';
// uuid
import { v4 as uuidv4 } from 'uuid';

// ---------------------------------------------------------------------- 

export default function LoginForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState([]);
  const [login, setLogin] = useState({ email: '', password: '' });

  const defaultValues = {
    email: 'info@fonradar.com',
    password: '1234',
  };

  const methods = useForm({
    defaultValues,
  });

  const {
    reset,
    setError,
    formState: { isSubmitting },
  } = methods;

  const getData = () => {
    axios.
      get(`https://6215eeb77428a1d2a354c664.mockapi.io/api/v1/users`)
        .then((res) => setData(res.data));
  }  
  
  useEffect(() => {
    getData()
  }, []);


  const handleChange = (e) => {
    const value = e.target.value;
    setLogin({
      ...login,
      [e.target.name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    data.find((user) => {
      const success = (login.email === user.username && login.password === user.password)
      if (success) {
        const guid = uuidv4()
        localStorage.setItem("guid",JSON.stringify(guid))
        navigate('/dashboard/app')
      }
    });
  };

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack spacing={3}>
        <TextField name="email" label="Email address" onChange={handleChange} />

        <TextField
          onChange={handleChange}
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
        Login
      </LoadingButton>
    </FormProvider>
  );
}

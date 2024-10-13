import { Outlet } from 'react-router-dom';

import { Container } from '@mui/material';
import Dinero from 'dinero.js';
import { DEFAULT_MIN_VERSION } from 'tls';

const Layout = () => {
    const dinero = Dinero({ amount: 1000, currency: 'VND' });
    console.log(dinero.toObject());
    return (
        <Container >
             <Outlet />
        </Container>
    )
}

export default Layout;

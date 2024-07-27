import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Container } from '@mui/material';

const Layout = () => {
    return (
        <Container >
             <Outlet />
        </Container>
    )
}

export default Layout;

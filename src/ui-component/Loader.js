// material-ui
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';

// styles
const LoaderWrapper = styled('div')({
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1301,
    width: '100%'
});

// ==============================|| LOADER ||============================== //

const Loader = () => (
    <LoaderWrapper>
        <CircularProgress color="primary" />
    </LoaderWrapper>
);

export default Loader;

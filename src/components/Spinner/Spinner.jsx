import SyncLoader from 'react-spinners/SyncLoader';
import { Box } from '../Box';

export const Spinner = () => {
  return (
    <Box mt="12px">
      <SyncLoader color="#b9b2ec" width="16px" />
    </Box>
  );
};

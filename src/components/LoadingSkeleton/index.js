import React from 'react';
import { Box } from '@mui/system';
import { Stack, Skeleton } from '@mui/material';

function LoadingSkeleton() {
  return (
    <>
      <Box display={"flex"} flex={4} justifyContent={"center"} alignItems={"start"}  flexWrap={"wrap"} flexDirection={'row'}>
        <Stack spacing={1} width={"20%"} margin={"10px"}>
          <Skeleton variant="text" />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={210} height={118} />
        </Stack>
        <Stack spacing={1} width={"20%"} margin={"10px"}>
          <Skeleton variant="text" />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={210} height={118} />
        </Stack>
        <Stack spacing={1} width={"20%"} margin={"10px"}>
          <Skeleton variant="text" />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={210} height={118} />
        </Stack>
  </Box>
    </>
  )
}

export default LoadingSkeleton;
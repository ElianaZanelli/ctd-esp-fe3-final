import * as React from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

interface PaginationProps {
  count: number
  page: number
  handleChange: (event: React.ChangeEvent<unknown>, value: number) => void
}

export default function PaginationOutlined ({ count, page, handleChange }: PaginationProps): JSX.Element {
  return (
    <Stack spacing={2} alignItems="center" margin={3}>
      <Pagination page={page} count={count} variant="outlined" color="primary" onChange={handleChange} />
    </Stack>
  )
}
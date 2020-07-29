import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Ordering.scss';
import Button from '@material-ui/core/Button';
import { Table, TableHead, TableRow, TableCell, TableBody, TableFooter } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5c6bc0',
    },
    secondary: {
      main: '#ff80ab',
    },
  },
});

const orders = [
  { id: 1, table: '3', number: '1', name: 'ORDER', status: 'done', orderTime: '09:00', bill: '25' },
  { id: 2, table: '2', number: '2', name: 'ORDER', status: 'delivered', orderTime: '09:00', bill: '35' },
  { id: 3, table: '1', number: '3', name: 'ORDER', status: 'ready', orderTime: '10:30', bill: '50' },
];


const Ordering = () => {
  return (
    <div className={styles.component}>
      <h2>Waiters' dashboard</h2>
      <ThemeProvider theme={theme}>
        <Table>
          <TableHead style={{ background: '#26418f' }}>
            <TableRow>
              <TableCell>
                <Button variant="contained" color="primary" size="large"  >
                  <Link to={process.env.PUBLIC_URL + '/ordering/new'} style={{ textDecoration: 'none', color: '#FFFFFF' }}>New Order</Link>
                </Button>
                <Button variant="contained" color="primary" size="large"  >
                  <Link to={process.env.PUBLIC_URL + '/ordering/new'} style={{ textDecoration: 'none', color: '#FFFFFF' }}>Change Order</Link>
                </Button>
              </TableCell>
              <TableCell style={{ color: '#FFFFFF' }} align="center">ORDER NUMBER</TableCell>
              <TableCell style={{ color: '#FFFFFF' }} align="center">ORDER TIME</TableCell>
              <TableCell style={{ color: '#FFFFFF' }} align="center">TABLE NUMBER</TableCell>
              <TableCell style={{ color: '#FFFFFF' }} align="center">BILL</TableCell>
              <TableCell style={{ color: '#FFFFFF' }} align="center">STATUS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id} style={{ background: '#5c6bc0' }}>
                <TableCell align="left">
                  <Button variant="contained" style={{ background: '#26418f' }} size="small" >
                    <Link to={process.env.PUBLIC_URL + '/ordering/order/123abc'} style={{ textDecoration: 'none', color: '#FFFFFF' }}>DETAILS</Link>
                  </Button>
                  <Button variant="contained" color="secondary" size="small">
                    <Link to={process.env.PUBLIC_URL + '/ordering/order/123abc'} style={{ textDecoration: 'none', color: '#FFFFFF' }}>CHANGE STATUS</Link>
                  </Button>
                </TableCell>
                <TableCell align="center" style={{ color: '#FFFFFF' }}>{`${order.number}`}</TableCell>
                <TableCell align="center" style={{ color: '#FFFFFF' }}>{`${order.orderTime}`}</TableCell>
                <TableCell align="center" style={{ color: '#FFFFFF' }}>{`${order.table}`}</TableCell>
                <TableCell align="center" style={{ color: '#FFFFFF' }}>{`${order.bill}`}</TableCell>
                <TableCell align="center" style={{ color: '#FFFFFF' }}>{`${order.status}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter style={{ background: '#26418f' }} >
            <TableRow>
              <TableCell>
                <Button color="primary" variant="contained" size="large" style={{ color: '#FFFFFF' }}>LOGOUT</Button>
              </TableCell>
              <TableCell>
              </TableCell>
              <TableCell>
              </TableCell>
              <TableCell>
              </TableCell>
              <TableCell></TableCell >
              <TableCell align="center">
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </ThemeProvider>
    </div>
  )
};




export default Ordering;
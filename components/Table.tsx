import { Paper, Table, TableRow, TableCell, TableBody, TableHead } from '@mui/material';
import styles from '@/app/styles/Home.module.css'

type BookRow = {
  titulo: string;
  autores: string[];
  editorial: string;
  anio: number;
  generos: string[];
  cantidad: number;
};

export default function BookTable({ data }: { data: BookRow[] }) {
  return (
    <Paper sx={{ height: '88vh', width: '75vw', overflow: 'scroll', marginTop:'0px', border: '2px solid rgba(104, 36, 68, 0.5)',borderRadius:'0px' }} className={styles.base}>
      <Table className="overflow-scroll " stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell variant='head'>{`Título`}</TableCell>
            <TableCell variant='head'>{`Autor (es)`}</TableCell>
            <TableCell variant='head'>{`Editorial`}</TableCell>
            <TableCell variant='head'>{`Año`}</TableCell>
            <TableCell variant='head'>{`Géneros`}</TableCell>
            <TableCell variant='head'>{`Cantidad`}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item: BookRow, index: number) => (
            <TableRow key={index} className=' hover:bg-gray-100 hover:font-extrabold' sx={{borderbottom:'1px solid #682444'}}>
              <TableCell sx={{textWrap:'wrap', wordWrap:'break-word'}}>{item.titulo}</TableCell>
              <TableCell sx={{textWrap:'wrap', wordWrap:'break-word'}}>{item.autores.join(', ')}</TableCell>
              <TableCell sx={{textWrap:'wrap', wordWrap:'break-word'}}>{item.editorial}</TableCell>
              <TableCell sx={{textWrap:'wrap', wordWrap:'break-word'}}>{item.anio}</TableCell>
              <TableCell sx={{textWrap:'wrap', wordWrap:'break-word'}}>{item.generos.join(', ')}</TableCell>
              <TableCell sx={{textWrap:'wrap', wordWrap:'break-word'}}>{item.cantidad}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
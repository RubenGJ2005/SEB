import type { Metadata } from "next";
import {Paper, TableContainer, Table, TableRow, TableCell, TableBody, TableHead, TableFooter, TablePagination, TablePaginationActions} from '@mui/material';


import Image from "next/image";

const metadata: Metadata={
  title: 'Servicios Bibliotecarios'
}

interface data {
  titulo:String,
  autores: String[],
  editorial: String,
  anio:Number,
  generos:String[]
}

export default function Home() {
  return (
    <div className= "flex flex.col items-center p-24">
      <Paper>
      </Paper>  
    </div>
  );
}

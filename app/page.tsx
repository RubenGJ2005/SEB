import type { Metadata } from "next";
import data from '../data/data.json';
import BookTable from "@/components/Table";

import Image from "next/image";

const metadata: Metadata={
  title: 'Servicios Bibliotecarios'
}

interface data {
  titulo:string,
  autores: string[],
  editorial: string,
  anio:number,
  generos:string[],
  cantidad:number,
}

export default function Home() {
  return (
    <div className= "flex flex-col items-center p-12">
      <h1 className="text-2xl font-light">Literatura</h1>
      <form>

      </form>
      <BookTable data={data}/>
    </div>
  );
}

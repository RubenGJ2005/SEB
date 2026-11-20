import type { Metadata } from "next";
import data from '../data/data.json';
import LibraryView from '@/components/libraryView';
import BookTable from '@/components/Table';

import Image from "next/image";

const metadata: Metadata={
  title: 'Servicios Bibliotecarios'
}

export default function Home() {
  return (
    <div className= "flex flex-col items-center p-4">
      <h1 className="text-2xl font-light">Literatura</h1>
      <LibraryView initialData={data}/>

    </div>
  );
}

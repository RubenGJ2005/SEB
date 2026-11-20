'use client';
import react, {useState} from "react";
import Search from '@/components/search';
import BookTable from '@/components/Table';

export type BookRow = {
    titulo: string;
    autores: string[];
    editorial: string;
    anio: number;
    generos: string[];
    cantidad: number;
}


export default function LibraryView({initialData}: {initialData: BookRow[]}) {
    const [search, setSearch] = useState('');
    const filteredData = search.trim().length > 1 ? initialData.filter((row) => {
        const term= search.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return (
            row.titulo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(term) || 
            row.generos.some((genero) => genero.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(term)) ||
            row.autores.some((autor) => autor.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(term)) 
        );
    })
    : initialData;

    return (
        <div className="flex flex-col items-center p-8">
            <Search value={search} onChange={setSearch}/>
            <BookTable data={filteredData}/>

        </div>
    )

}














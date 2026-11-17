'use client';

import React, {useState} from "react";

interface Buscador {
    contenido: string;
}

export default function BuscadorLibros({contenido}: Buscador ) {
    const [busqueda, setBusqueda] = useState("");

    const TextoMarcado= (texto:string, termino:string) => {
        if(!termino.trim()) return texto;
    }

}

import{useSearchParams,usePathname, useRouter} from 'next/navigation';


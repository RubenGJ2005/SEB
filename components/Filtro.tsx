'use client';

import {useState} from 'react';
import librosData from '../data/data.json';

export default function FiltroLibros(){
    const [generoSelec, setGeneroSelec] = useState('Todos');
    const[busqueda, setBusqueda] =useState('');

    const generos =['Todos', ...new Set(librosData.map((libro) => libro.generos))]





    return (
        <div>
            <select onChange={(e) => setGeneroSelec(e.target.value)}>
                <option value="">Todas</option>
                <option value=""></option>
                <option value=""></option>
            </select>

        </div>
    )
}
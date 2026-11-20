'use client';
import React, {useState, useEffect} from "react";

interface searchProps {
    value: string;
    onChange: (value: string) => void;
}


export default function Search({value, onChange}: searchProps) {
        
    return (
  <input type="text" placeholder="Buscar" value={value} onChange={(e) => onChange(e.target.value)}
    className="absolute top-24 right-41  block rounded-md border-solid border border-inherit text-gray-900 py-2 px-4 mb-5"/>

)
}
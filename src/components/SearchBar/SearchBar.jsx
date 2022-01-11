import React from 'react';
import s from './SearchBar.module.css'
import swal from 'sweetalert';

export default function SearchBar({onSearch}) {
  // acá va tu código
  return (
    <header className={s.searchBarContainer}>
      <form className={s.formContainer}>
        <input 
          placeholder="Busca tu ciudad..."
          type="text" className={s.input}/>
        <button 
          className={s.button}
          onClick={(e) => {
            e.preventDefault()
            onSearch(swal('La ciudad se agrego con exito!', '', 'success'))
          }}>
          Buscar
        </button>
      </form>
    </header>
  )
};
import { useContext } from 'react';
import { FormEvent, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import './styles.scss';

export default function Filter() {
    const [filter, setFilter] = useState('');

    const { filterUsers, setIsOpenModal } = useContext(UserContext)

    async function handleSubmit (e:FormEvent) {
        e.preventDefault();

        filterUsers(filter);
    }

    function handleCreate(){
      setIsOpenModal(true)
    }
  return (
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder='Pesquisar...' value={filter} onChange={e => setFilter(e.target.value)}/>
    &nbsp;
    <button type='submit'>Buscar</button>
    <button type='button' onClick={handleCreate}>Criar</button>
  </form>

  )
}

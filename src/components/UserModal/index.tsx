import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import './styles.scss';
import { IoClose, IoCheckmark } from 'react-icons/io5'
import { useForm } from 'react-hook-form'
import { UserFormData } from '../../types/user';
export default function UserModal() {
  
  const { setIsOpenModal, createEvaporadora } = useContext(UserContext)
  
  function handleClose() {
    setIsOpenModal(false)
  }

  function onSubmit (data: UserFormData){
    console.log(data)
    createEvaporadora(data);

    //window.location.reload();
  }

  const { register, handleSubmit } = useForm();

   return (
    <div className='overlay'>
      <div className='container'>
        <div> 
          <strong>Criar Evaporadora</strong>
          <button type='button' onClick={handleClose}>
            <IoClose/>
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <main>
            <div>
              <label htmlFor="codigo">Código</label>
              <input type="text" id='codigo' {...register('codigo')}/>
            </div>
            <div>
              <label htmlFor="modelo">Modelo</label>
              <input type="text" id='modelo' {...register('modelo')}/>
            </div>
            <div>
              <label htmlFor="marca">Marca</label>
              <input type="text" id='marca' {...register('marca')}/>
            </div>
            <div>
              <label htmlFor="potencia">Potência</label>
              <input type="text" id='potencia' {...register('potencia')}/>
            </div>
          </main>
          <footer>
            <button type='submit'>
              <IoCheckmark/>
            </button>
          </footer>
        </form>
      </div>

    </div>
  )
}

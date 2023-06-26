import Modal from 'react-modal';
import { ButtonDelete, ButtonsContainer, FormModalAdd, IconCloseModal, ModalAddContainer, ModalAddHeader } from './style';
import { StyledInput } from '../../../styles/Input';
import { Paragraph, Title2 } from '../../../styles/Typography';
import { StyledSelect } from '../../../styles/Select';
import { Button } from '../../../styles/Button';
import { AiOutlineClose } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { TechContext } from '../../../providers/TechContext';


export function ModalEditTecs({modalEditIsOpen, setEditItsOpen}){

    const token = localStorage.getItem('@TOKEN')

    const { DeleteTach, EditTech, idModal } = useContext(TechContext)



    const {register, handleSubmit, reset} = useForm()

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: 'none',
          border: 'none',
        },
        overlay: {
            background: 'rgb(0,0,0,0.4)',
        },
    };

    Modal.setAppElement('#root');

    function closeModal(){
        setEditItsOpen(false)
    }

    function afterOpenModal() {
        
    }

    async function submit(formData){
        EditTech(idModal.id, formData, token)
        reset()
        closeModal()
    }
    
    return(
        <Modal
        isOpen={modalEditIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        >
            <ModalAddContainer>
                <ModalAddHeader>
                    <Title2>Tecnologias Detalhes</Title2>
                    <IconCloseModal><AiOutlineClose onClick={() => closeModal()} fill='var(--color-grey-0)'/></IconCloseModal>
                </ModalAddHeader>
                <form onSubmit={handleSubmit(submit)}>
                    <FormModalAdd>
                        <Paragraph>Nome</Paragraph>
                        <StyledInput type="text" disabled placeholder={idModal.name}/>
                        <Paragraph>Selecionar status</Paragraph>
                        <StyledSelect {...register('status')}>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </StyledSelect>
                    </FormModalAdd>
                    <ButtonsContainer>
                        <Button type='submit' background='primary'>Salvar alterações</Button>
                        <ButtonDelete onClick={() => DeleteTach(idModal.id, token)}>Excluir</ButtonDelete>
                    </ButtonsContainer>
                </form>
            </ModalAddContainer>

        </Modal>
    )
}
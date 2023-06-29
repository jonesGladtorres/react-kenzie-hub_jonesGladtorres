import Modal from 'react-modal';
import { FormModalAdd, IconCloseModal, ModalAddContainer, ModalAddHeader } from './style';
import { StyledInput } from '../../../styles/Input';
import { Paragraph, Title2 } from '../../../styles/Typography';
import { StyledSelect } from '../../../styles/Select';
import { Button } from '../../../styles/Button';
import { AiOutlineClose } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { TechContext } from '../../../providers/TechContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { ModalAddSchema } from './ModalAddSchema';


export function ModalAddTecs({ modalAddIsOpen, setAddItsOpen }) {

    const token = localStorage.getItem('@TOKEN')

    const { NewTech } = useContext(TechContext)

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(ModalAddSchema)
    })

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

    function closeModal() {
        setAddItsOpen(false)
    }

    function afterOpenModal() {

    }

    async function submit(formData) {
        await NewTech(formData, token)
        reset()
        closeModal()
    }

    return (
        <Modal
            isOpen={modalAddIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel='Example Modal'
        >
            <ModalAddContainer>
                <ModalAddHeader>
                    <Title2>Cadastrar Tecnologias</Title2>
                    <IconCloseModal><AiOutlineClose onClick={() => closeModal()} fill='var(--color-grey-0)' /></IconCloseModal>
                </ModalAddHeader>
                <form onSubmit={handleSubmit(submit)}>
                    <FormModalAdd>
                        <Paragraph>Nome</Paragraph>
                        <StyledInput type='text' {...register('title')} />
                        {errors.title ? <Paragraph color='error'>{errors.title?.message}</Paragraph> : null}
                        <Paragraph>Selecionar status</Paragraph>
                        <StyledSelect {...register('status')}>
                            <option value='Iniciante'>Iniciante</option>
                            <option value='Intermediário'>Intermediário</option>
                            <option value='Avançado'>Avançado</option>
                        </StyledSelect>
                        {errors.status ? <Paragraph color='error'>{errors.status?.message}</Paragraph> : null}
                    </FormModalAdd>
                    <Button background='primary'>Cadastrar Tecnologias</Button>
                </form>
            </ModalAddContainer>

        </Modal>
    )
}
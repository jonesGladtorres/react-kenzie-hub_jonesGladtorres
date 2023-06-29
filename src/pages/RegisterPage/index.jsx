import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Button } from "../../styles/Button";
import { StyledInput } from "../../styles/Input";
import { Paragraph, Title1 } from "../../styles/Typography";
import { InputsContainer, StyledForm, StyledMain } from "../../styles/Form";
import { TitleFormRegister } from "./style";
import { useForm } from "react-hook-form";
import { StyledSelect } from "../../styles/Select";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod"
import { RegisterSchema } from "./RegisterSchema";


export function RegisterPage(){
    const {register, handleSubmit, formState: { errors }, reset} = useForm({
        resolver: zodResolver(RegisterSchema)
    })

    const navegate = useNavigate()
    
    async function registre(formData){
        try {
            const { data } = await api.post('/users', formData)
            toast.success('Conta criada com sucesso')
            setTimeout(navegate('/'), 3000)
        } catch (error) {
            toast.error('Oops! Algo deu errado!')
        }
        
    }
    
    async function submit(formData){
        await registre(formData)
        reset()
    }

    return(
        <StyledMain>
            <Header>Voltar</Header>
            <StyledForm height='max' onSubmit={handleSubmit(submit)} noValidate>
                <TitleFormRegister>
                    <Title1>Crie sua conta</Title1>
                    <Paragraph color='grey1'>Rapido e grátis, vamos nessa</Paragraph>
                </TitleFormRegister>
                <InputsContainer>
                    <Paragraph>Nome</Paragraph>
                    <StyledInput type='text' placeholder='Digite aqui seu nome' {...register('name')}/>
                    {errors.name ? <Paragraph color='error'>{errors.name?.message}</Paragraph> : null}
                    <Paragraph>Email</Paragraph>
                    <StyledInput type='text' placeholder='Digite aqui seu email' {...register('email')}/>
                    {errors.email ? <Paragraph color='error'>{errors.email?.message}</Paragraph> : null}
                    <Paragraph>Senha</Paragraph>
                    <StyledInput type='password' placeholder='Digite aqui sua senha' {...register('password')}/>
                    {errors.password ? <Paragraph color='error'>{errors.password?.message}</Paragraph> : null}
                    <Paragraph>Confirmar Senha</Paragraph>
                    <StyledInput type='password' placeholder='Digite novamente sua senha' {...register('password')}/>
                    {errors.password ? <Paragraph color='error'>{errors.password?.message}</Paragraph> : null}
                    <Paragraph>Bio</Paragraph>
                    <StyledInput type='text' placeholder='Fale sobre você' {...register('bio')}/>
                    {errors.bio ? <Paragraph color='error'>{errors.bio?.message}</Paragraph> : null}
                    <Paragraph>Contato</Paragraph>
                    <StyledInput type='text' placeholder='Opções de contato' {...register('contact')}/>
                    {errors.contact ? <Paragraph color='error'>{errors.contact?.message}</Paragraph> : null}
                    <Paragraph>Selecionar módulo</Paragraph>
                    <StyledSelect {...register('course_module')}>
                        <option value='Primeiro módulo (Introdução ao Frontend)'>Primeiro Módulo</option>
                        <option value='Segundo módulo (Frontend Avançado)'>Segundo Módulo</option>
                        <option value='Terceiro módulo (Introdução ao Backend)'>Terceiro Módulo</option>
                        <option value='Quarto módulo (Backend Avançado)'>Quarto Módulo</option>
                    </StyledSelect>
                    <Button background='primary' >Cadastrar</Button>
                </InputsContainer>
            </StyledForm>
        </StyledMain>
    )
}
import { useForm } from 'react-hook-form'
import logo from '../../assets/logo.png'
import { api } from '../../services/api'
import { Paragraph, Title1 } from '../../styles/Typography'
import { StyledInput } from '../../styles/Input'
import { useNavigate } from 'react-router-dom'
import { StyledHeader } from '../../components/Header/style'
import { Button } from '../../styles/Button'
import { InputsContainer, StyledForm, StyledMain } from '../../styles/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema } from './LoginSchema'
import { toast } from 'react-toastify'

export function LoginPage({setDataUser}){
    const navegate = useNavigate()

    
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(LoginSchema)
    })
    
    async function Login(formData){
        try {
            const { data } = await api.post('/sessions', formData)
            setDataUser(data)
            localStorage.setItem('@TOKEN', data.token)
            localStorage.setItem('@USERID', data.user.id)
            navegate('/deashbord')
        } catch (error) {
            toast.error('Email ou senha incorreto')
        }
    }
    
    async function submit(formData){
        await Login(formData)
        reset()
    }

    return(
        <StyledMain>
            <StyledHeader>
                <img src={logo} alt="logo marca do site, escrito em rosa Kenzie Hub" />
            </StyledHeader>
            <StyledForm onSubmit={handleSubmit(submit)} height='min' noValidate>
                <Title1>Login</Title1>
                <InputsContainer>
                    <Paragraph>Email</Paragraph>
                    <StyledInput type="text" {...register('email')} placeholder='Digite seu E-mail' border='yes'/>
                    {errors.email ? <Paragraph color="error">{errors.email?.message}</Paragraph> : null}
                    <Paragraph>Senha</Paragraph>
                    <StyledInput type="password" {...register('password')} placeholder='Digite sua senha' border='yes'/>
                    {errors.password ? <Paragraph color="error">{errors.password?.message}</Paragraph> : null}
                    <Button background='primary' >Entrar</Button>
                </InputsContainer>
                <Paragraph color='grey1'>Ainda não possui uma conta?</Paragraph>
                <Button background='secondary' onClick={() => navegate('/register')}>Cadastre-se</Button>
            </StyledForm>
        </StyledMain>
    )
}
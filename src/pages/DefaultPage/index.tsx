// componentes
import { Outlet } from 'react-router-dom'
import Header from '@/components/Header'
import NavBottom from '@/components/NavBottom'

const DefaultPage = () => {
    return (
        <>
            <Header />
            <Outlet />
            <NavBottom />
        </>
    )
}

export default DefaultPage

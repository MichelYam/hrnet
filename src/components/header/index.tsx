import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components';

const Index = () => {
    let location = useLocation(); //get object that represents the current url

    const { pathname } = location;
    const splitLocation = pathname.split('/');
    return (
        <StyledHeader className='d-flex justify-content-between align-items-center mx-auto'>
            <Link to="/">
                <StyledImg src={'/assets/logo/logo.jpg'} alt="logo du site" />
            </Link>
            {
                splitLocation[1] === "listEmployee" ?
                    <Link to="/">Create an employer</Link>
                    :
                    <Link to="/listEmployee">View Current Employees</Link>
            }
        </StyledHeader>
    )
}

export default Index

const StyledHeader = styled.div`
width: 95%;
`

const StyledImg = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
`
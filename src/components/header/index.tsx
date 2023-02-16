import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components';

const Index = () => {
    let location = useLocation(); //get object that represents the current url

    const { pathname } = location;
    const splitLocation = pathname.split('/');
    return (
        <StyledHeader className='d-flex justify-content-between align-items-center mx-auto'>
            <LinkNav to="/">
                <StyledImg src={'/assets/logo/logo.jpg'} alt="logo du site" />
            </LinkNav>
            {
                splitLocation[1] === "employees" ?
                    <LinkNav to="/">
                        <Button>
                            Create employee
                        </Button>
                    </LinkNav>
                    :
                    <LinkNav to="/employees">
                        <Button>
                            View Current Employees
                        </Button>
                    </LinkNav>
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
const LinkNav = styled(Link)`
    text-decoration: none;
    color: #000000;
`
const Button = styled.button`
    width: 200px;
    height: 55px;
    border:none;
    box-shadow: 0 2px 10px rgb(0 0 0 / 10%);
    border-radius: 10px;
    background-color: transparent;
    :hover{
        background-color: #94bcd6;
        transition-duration: 1s;
    }
`

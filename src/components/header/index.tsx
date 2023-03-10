import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components';
// {logo, path, route}

type Prop = {
    logo: string
    route: { label: string; path: string; }[]
}
const Index = ({ logo, route }: Prop) => {
    return (
        <StyledHeader className='d-flex justify-content-between align-items-center mx-auto'>
            <LinkNav to="/hrnet">
                <StyledImg src={logo} alt="logo du site" />
            </LinkNav>
            <div>
                {route.map((item, index) => {
                    return <LinkNav key={index} to={item.path}>
                        <Button>
                            {item.label}
                        </Button>
                    </LinkNav>
                })}
            </div>
        </StyledHeader>
    )
}

export default Index

const StyledHeader = styled.div`
    width: 90%;
`
const StyledImg = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
`
const LinkNav = styled(Link)`
    text-decoration: none;
    color: #000000;
    :nth-child(1){
        margin-right: 10px;
    }
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

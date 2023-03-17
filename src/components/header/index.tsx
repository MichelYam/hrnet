import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components';
// {logo, path, route}

type Prop = {
    logo: string
    route: { label: string; path: string; }[]
}

interface IBtn {
    current: boolean
}

/**
 * 
 * @param {Object} props Object which takes two props logo and route
 * @returns logo and the navigation
 */
const Index = ({ logo, route }: Prop) => {
    let location = useLocation(); //get object that represents the current url
    const { pathname } = location;
    const splitLocation = pathname.split('/');

    return (
        <StyledHeader className='d-flex justify-content-between align-items-center mx-auto'>
            <LinkNav to="/">
                <StyledImg src={logo} alt="logo du site" />
            </LinkNav>
            <div>
                {route.map((item, index) => {
                    return <LinkNav key={index} to={item.path}>
                        <Button current={`/${splitLocation[1]}` === item.path ? true : false}>
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
const Button = styled.button<IBtn>`
    width: 200px;
    height: 55px;
    border:none;
    box-shadow: 0 2px 10px rgb(0 0 0 / 10%);
    border-radius: 10px;
    background-color: ${(props) => props.current ? "#94bcd6" : "transparent"}; 
    :hover{
    background - color: #94bcd6;
    transition - duration: 1s;
}
`

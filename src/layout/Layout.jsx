import React from 'react'
import { Link, Outlet} from 'react-router-dom';
import styled from 'styled-components';


const Layout = () => {
    return (
        <div>

            <Menu>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/statistics">Estadisticas</Link></li>
                    <li><Link to="/settings">Ajustes</Link></li>
                </ul>
            </Menu>
            
            <Content>
                <Outlet />
            </Content>

        </div>
    )
}

export default Layout;


const Content = styled.main`
    display: flex;
    width: 100%;
    position: relative;
`;

const Menu = styled.div`
    display: flex;
    background-color: #171717;
    justify-content: center;
    width: 100%;
    & ul{
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        & li{
            list-style: none;
        }
    }
`
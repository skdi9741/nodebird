import React, { useState } from 'react';
import propTypes from 'prop-types';
import Link from 'next/link';
import { Menu , Input , Row , Col } from 'antd';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
import styled from 'styled-components';

const SearchInput = styled(Input.Search)`
    vertical-align : middle;
`;


const AppLayout = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            <Menu mode="horizontal">
            <Menu.Item key="nodebird">
                <Link href="/"><a>노드버드</a></Link>
            </Menu.Item>
            <Menu.Item key="profile">
                <Link href="/profile"><a>프로필</a></Link>
            </Menu.Item>
            <Menu.Item key="searchBar">
                <SearchInput enterButton/>
            </Menu.Item>
            <Menu.Item key="signup">
                <Link href="/signup"><a>회원가입</a></Link>
            </Menu.Item>
            </Menu>
            <Row gutter={8}> 
                <Col xs={24} md={6}>
                    {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href="https://github.com/skdi9741" target="_blank" rel="noreferrer noopener">Made By hgjeong</a>
                </Col>
            </Row>
            
        </div>
    );
}

AppLayout.propTypes = {
    children : propTypes.node.isRequired,
}

export default AppLayout;
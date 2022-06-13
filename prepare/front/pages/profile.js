import React from 'react';
import AppLayout from "../components/AppLayout";
import Head from 'next/head';

import NicknameEdifForm from '../components/NicknameEdifForm';
import FollowList from '../components/FollowList';

const Profile = () => {
    const followerList = [{ nickname : '정형기'} , {nickname : '손연준'}, {nickname : '윤동호'}];
    const followingList = [{ nickname : '정형기'} , {nickname : '손연준'}, {nickname : '윤동호'}];

    return (
        <>
            <Head>
                <title>내 프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEdifForm />
                <FollowList header="팔로잉 목록" data={followingList}/>
                <FollowList header="팔로워 목록" data={followerList} />
            </AppLayout>
        </>
    );
}
export default Profile;

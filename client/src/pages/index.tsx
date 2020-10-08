import React from 'react';
import ChannelList from '@/components/ChannelList';
import ChatList from '@/components/ChatList';
import { NextSeo } from 'next-seo';
import { css } from '@/conf/styled';

const Home: React.FC = () => {
  return (
    <div className="container">
      <main
        css={css`
          display: flex;
          height: 100vh;
        `}
      >
        <ChannelList />
        <ChatList />
      </main>
    </div>
  );
};
export default Home;

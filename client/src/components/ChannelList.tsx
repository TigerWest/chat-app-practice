import { css } from '@/conf/styled';
import * as React from 'react';

interface IChannelListProps {}

const ChannelList: React.FunctionComponent<IChannelListProps> = (props) => {
  return (
    <div
      css={css`
        width: 250px;
        background-color: rgb(82, 38, 83);
        color: rgb(207, 195, 207);
      `}
    >
      channelList
    </div>
  );
};

export default ChannelList;

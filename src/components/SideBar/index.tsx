import './SideBar.scss';

import React from 'react';

import {
    ChatRoundedIcon,
    FlagRoundedIcon,
    GroupRoundedIcon,
    LocalHospitalRoundedIcon,
    StorefrontRoundedIcon,
    VideoLibraryRoundedIcon,
} from '../../utils/icons';
import SideBarRow from './SideBarRow';

interface SideBarProps {
    photoUrl?: string;
    username: string | null;
}

function SideBar({ photoUrl, username }: SideBarProps): React.ReactElement {
    return (
        <div className="sideBar">
            <SideBarRow src={photoUrl} title={username} />
            {rowIconList.map(({ Icon, title }, index) => (
                <SideBarRow key={index} title={title} Icon={Icon} />
            ))}
        </div>
    );
}

const rowIconList = [
    {
        Icon: LocalHospitalRoundedIcon,
        title: 'COVID-19 Information Center',
    },
    {
        Icon: FlagRoundedIcon,
        title: 'Pages',
    },
    {
        Icon: GroupRoundedIcon,
        title: 'Friends',
    },
    {
        Icon: ChatRoundedIcon,
        title: 'Messenger',
    },
    {
        Icon: StorefrontRoundedIcon,
        title: 'Marketplace',
    },
    {
        Icon: VideoLibraryRoundedIcon,
        title: 'Videos',
    },
];

export default SideBar;

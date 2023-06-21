import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import {Link} from "react-router-dom";
import '../styles/index.css';
import DownloadIcon from '@mui/icons-material/Download';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import QuizIcon from '@mui/icons-material/Quiz';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';


const categories = [
    {
        id: 'Редактирование',
        children: [
            { id: 'Редактирование анкеты', icon: <DnsRoundedIcon />, link: '/addQuestion' },
            // { id: 'Редактирование приложения', icon: <SettingsIcon />, link: '/' },
            { id: 'Кастомизация роботов', icon: <AutoAwesomeIcon />, link: '/customize', premium: true },
            { id: 'Выгрузка', icon: <DownloadIcon />, link: '/unload' },
            { id: 'FAQ', icon: <QuizIcon />, link: '/faq' },
            { id: 'Техническая поддержка', icon: <LiveHelpIcon />, link: '/support', premium: true },
        ],
    },

];

const item = {
    py: '2px',
    px: 3,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover, &:focus': {
        bgcolor: 'rgba(255, 255, 255, 0.08)',
    },
};

const itemCategory = {
    boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
    py: 1.5,
    px: 3,
};

export default function Navigator(props) {
    const { ...other } = props;

    return (
        <Drawer variant="permanent" {...other}>
            <List disablePadding>
                <ListItem  sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff', cursor: 'pointer' }}>
                    UfaRobotics
                </ListItem>
                <Link to={'/'}  style={{ textDecoration: 'none'}}>
                    <ListItem selected sx={{ ...item, ...itemCategory }}>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText >Главная</ListItemText>
                    </ListItem>
                </Link>

                {categories.map(({ id, children }) => (
                        <Box key={id} sx={{ bgcolor: '#101F33' }}>
                            <ListItem sx={{ py: 2, px: 3 }}>
                                <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
                            </ListItem>
                            {children.map(({ id: childId, icon, active, link, premium }) => (
                                <Link key={childId} to={link} className={'navigate__link'} >
                                    <ListItem disablePadding key={childId}>
                                    {/* selected={active} */}
                                        <ListItemButton  sx={item}>

                                            <ListItemIcon style={{position: 'relative'}}>
                                                {icon}
                                                {!premium || <WorkspacePremiumIcon style={{fill: 'gold', position: 'absolute', width: '15px', height: '15px', right: '100%'}} />}
                                            </ListItemIcon>
                                            <ListItemText>{childId}</ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                </Link>
                            ))}
                            <Divider sx={{ mt: 2 }} />
                        </Box>

                ))}
            </List>
        </Drawer>
    );
}

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Context } from '..';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import {Avatar, Box, ListItem, ListItemAvatar} from "@mui/material";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import SmartToyIcon from '@mui/icons-material/SmartToy';
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import { observer } from "mobx-react-lite";
import { useContext } from 'react';
import { RoomServiceRounded } from '@material-ui/icons';
import { fetchRobots } from '../http/robotAPI';
import { fetchReview } from './../http/reviewAPI';
import EditIcon from '@mui/icons-material/Edit';
import EditRobot from './EditRobot';
import {editRobot} from './../http/robotAPI';
function TabPanel(props) {

    const { children, value, index} = props;
    return (
        <Box
            aria-labelledby={'Роботы'}
            role="tabpanel"
            id={`simple-tabpanel-${index}`}
            index={index}
            hidden={value !== index}
        >
            {children}
        </Box>
    );
}
 export const Content = observer(({value}) => {
    const {robots, reviews, user} = useContext(Context)
    const [robotId, setRobotId] = React.useState(0)
    React.useEffect(()=> {
        fetchRobots(user._user.id).then(data => robots.setRobots(data))
        fetchReview(user._user.id).then(data => reviews.setReviews(data))
    }, [])
    const [open, setOpen] = React.useState(false);
    const handleOpen = (id) => {
        setRobotId(id)
        setOpen(true)
        
    };
    const handleClose = () => setOpen(false);


    return (
        <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
            <TabPanel value={value} index={0}>
                <AppBar
                    position="static"
                    color="default"
                    elevation={0}
                    sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
                >
                    <Toolbar>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <SearchIcon color="inherit" sx={{ display: 'block' }} />
                            </Grid>
                            <Grid item xs>
                                <TextField
                                    fullWidth
                                    placeholder="Search by name, phone number, or robot UID"
                                    InputProps={{
                                        disableUnderline: true,
                                        sx: { fontSize: 'default' },
                                    }}
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item>
                                <Tooltip title="Reload">
                                    <IconButton>
                                        <RefreshIcon color="inherit" sx={{ display: 'block' }} />
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    {reviews.reviews.map(review => 
                        <ListItem alignItems="flex-start" key={review.id}>
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary= {
                                    <React.Fragment>
                                        {review.question}
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="#9e9e9e"
                                        >
                                            &nbsp; — "{review.robotName}" {review.createdAt}
                                        </Typography>
                                    </React.Fragment>
                                }
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {review.answer}
                                        </Typography>
                                    </React.Fragment>
                                }
                            />                   
                    </ListItem>                
                        )}
                    {/* <Divider variant="inset" component="li" /> */}
                </List>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <AppBar
                    position="static"
                    color="default"
                    elevation={0}
                    sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
                >
                    <Toolbar>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <SearchIcon color="inherit" sx={{ display: 'block' }} />
                            </Grid>
                            <Grid item xs>
                                <TextField
                                    fullWidth
                                    placeholder="Search by name, phone number, or robot UID"
                                    InputProps={{
                                        disableUnderline: true,
                                        sx: { fontSize: 'default' },
                                    }}
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item>
                                <Tooltip title="Reload">
                                    <IconButton>
                                        <RefreshIcon color="inherit" sx={{ display: 'block' }} />
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <List>
                    {robots.robots.map(robot => 
                         <ListItem key={robot.id}>
                         <ListItemIcon>
                             <SmartToyIcon />
                         </ListItemIcon>
                         <ListItemText
                             primary={robot.name}
                             secondary={robot.desc}
                         />
                        <IconButton edge="end" aria-label="delete" onClick={() => {handleOpen(robot.id)}}>
                            <EditIcon />
                        </IconButton>   
                     </ListItem>
                        )}         
                </List>
                <EditRobot robotId={robotId} handleOpen={handleOpen} handleClose={handleClose} open={open} editRobot={editRobot} fetchRobots={fetchRobots} />
            </TabPanel>
        </Paper>

    );
 })


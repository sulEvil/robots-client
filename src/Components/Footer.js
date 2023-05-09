import React from 'react';
import {AppBar, Box, Container, Grid, IconButton, TableFooter, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Footer(props) {
    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                backgroundColor: "secondary",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                position: "fixed",
                bottom: 0
            }}
        >
            <Container maxWidth="lg">
                <Grid container direction="column" alignItems="center">
                    <Grid item xs={12}>
                        <Typography color="black" variant="h5">
                            Soft-servis robots
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography color="textSecondary" variant="subtitle1">
                            {`${new Date().getFullYear()} | React | Material UI | React Router`}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Footer;

import { createTheme, Grid, Paper, ThemeProvider, Typography } from '@mui/material';
import { Box } from '@mui/system';

const theme = createTheme({
    components: {
        MuiPaper: {

        },
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: 'subtitle1'
                    },
                    style: {
                        fontSize: 18,
                        fontWeight: 500,
                        color: '#e1e3e5'
                    }
                },
                {
                    props: {
                        variant: 'body1'
                    },
                    style: {
                        fontSize: 15,
                        fontWeight: 500,
                        color: '#e1e3e5'
                    }
                },
                {
                    props: {
                        variant: 'body2'
                    },
                    style: {
                        fontSize: 15,
                        fontWeight: 400,
                        color: '#e1e3e5cb'
                    }
                }
            ]
        }
    }
})

const Card = ({ name, description, price, image }: { name: string; description: string; price: string; image: string }) => {
    return (
        <Grid item xs={2} md={1}>
            <ThemeProvider theme={theme}>
                <Paper elevation={0} className='item' sx={{ bgcolor: '#292a2d' }}>
                    <img src={image} alt={name} />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant='subtitle1' component='h3' mt={.5}>{name}</Typography>
                        <Typography variant='body2' component='p'>{description}</Typography>
                        <Typography variant='body1' component='h4' mt={.5}>{price}</Typography>
                    </Box>
                </Paper>
            </ThemeProvider>
        </Grid>
    )
}

export default Card
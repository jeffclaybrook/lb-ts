import * as React from 'react';
import { MenuItems } from '../data';
import { Container, Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

export default function Menu() {
    return (
        <Container>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                {MenuItems.map((menu) => (
                    <Card>
                        <CardActionArea>
                            <CardMedia
                              sx={{ minHeight: '200px' }}
                              component={'img'}
                              src={menu.image}
                              alt={menu.name}
                            />
                            <CardContent>
                                <Typography>{menu.name}</Typography>
                                <Typography>{menu.description}</Typography>
                                <Typography>{menu.price}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </Box>
        </Container>
    )
}
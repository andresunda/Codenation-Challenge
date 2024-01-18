
import { Layout } from '../../layout/layout'
//Api Akatsuki Characters
import { getAkatsukis } from '../../api/akatsuki/akatsukiApi';
//
import { useState, useEffect } from 'react';
//
import { SectionInfo } from "../../components/section/section"
import { Box } from '@mui/system';
//Components of MaterialUI
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



export const Articles = () => {

    const [akatsukis, setAkatsukis] = useState([]);

    useEffect(() => {
        const fetchAkatsukis = async () => {
            try {
                const data = await getAkatsukis();
                setAkatsukis(data.akatsuki); // Update the state with the information for each akatsuki 
            } catch (error) {
                console.error('Error fetching Akatsuki data:', error);
            }
        };

        fetchAkatsukis();
    }, []);

    return (
        <>
            <Layout>
                <SectionInfo >
                    <Grid container justifyContent={'center'}>
                        <Grid item sm={12} >
                            <Box >
                                <h2 className='subtitle-center'>Personajes Akatsuki</h2>
                                <hr />
                                <div>
                                    <h4 className='service-codenation'>
                                        El grupo Akatsuki estuvo formado por 11 miembros ninjas de élite, cada uno de estos ninjas se
                                        consideraba un lobo solitario en su aldea de origen.
                                    </h4>
                                </div>
                            </Box>
                        </Grid>
                    </Grid>
                    <br />
                    <Box sx={{ maxWidth: 1000, margin: '0 auto', }}>
                        <Grid container spacing={3}>
                            {akatsukis.map((akatsuki) => (
                                <Grid key={akatsuki.id} item xs={12} sm={6} md={4}>
                                    <Card
                                        sx={{
                                            margin: '0 auto',
                                            textAlign: 'center',
                                            height: '100%',
                                        }}
                                        key={akatsuki.id}
                                    >
                                        <CardMedia
                                            component="img"
                                            height="240"
                                            image={akatsuki.images[0]} //URL of each akatsuki 
                                            alt={akatsuki.name}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {akatsuki.name}
                                            </Typography>
                                            Some information about the akatsuki
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </SectionInfo>
                <br />
            </Layout>
        </>
    )
}

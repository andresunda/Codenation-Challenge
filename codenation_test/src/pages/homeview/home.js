import './index.css'
import { SectionInfo, SectionPort } from "../../components/section/section"
import { Layout } from "../../layout/layout"
import { Box } from '@mui/system';
//Components of MaterialUI
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { TypeAnimation } from 'react-type-animation';

export const Home = () => {

    const services = [
        {
            title: "DISEÑO UX/UI",
            description: "Diseñamos interfaces moderna e intuitiva que se ejecute de forma coherente en múltiples entornos, ofreciendo la mejor experiencia de usuario.",
            path: "#home", //AQUI USAREMOS EL REACT ROUTE
            //icon: <HomeIcon />
        },

        {
            title: "DESARROLLO WEB",
            description: "Diseño y desarrollo web inteligente, moderno y a la medida, con una interfaz limpia, amigable.",
            path: "#article",
            //icon: <FeedIcon />

        },

        {
            title: "APLICACIONES MOVILES",
            description: "Diseño y desarrollo de aplicaciones en plataformas Android y iOS para empresas y particulares.",
            path: "#login",
            //onClick: handleOpenLogin,
            //icon: <PersonIcon />
        },
        {
            title: "SOLUCIONES ELECTRÓNICAS",
            description: "Diseño electrónico mediante el uso de nuevos componentes y/o desarrollos de circuitos integrados de una aplicación específica.",
            path: "#login",
        }
    ]


    return (
        <>
            <Layout>
                <SectionPort bgColor="red">
                    <div className='portraid-codenation'>
                        <div className='text-presentation'>
                            <h1>Codenation</h1>
                            <p>
                                <TypeAnimation
                                    sequence={['Somos codenation', 2000, '', 1000]}
                                    wrapper="span"
                                    speed={1}
                                    style={{ fontSize: '1.5em', textAlign: 'center', color: '#AECB19' }}
                                    repeat={Infinity}
                                />
                            </p>
                        </div>
                    </div>
                </SectionPort>
                <SectionInfo >
                    <Grid container justifyContent={'center'}>
                        <Grid item sm={12} >
                            <Box >
                                <h2 className='subtitle-center'>Servicios</h2>
                                <hr />
                                <div>
                                    <h4 className='service-codenation'>
                                        Trabajamos con nuestros clientes de forma
                                        personalizada para construir productos enfocados
                                        en mejorar sus capacidades tecnológicas y ayudar
                                        en su transformación digital.
                                    </h4>
                                </div>
                            </Box>
                        </Grid>
                    </Grid>
                    <br />
                    <Box sx={{ maxWidth: 1000, margin: '0 auto', }}>
                        <Grid container spacing={3} >
                            {
                                services.map(service => (
                                    <Grid key={service.title} item xs={12} sm={6} md={4}>
                                        <Card
                                            sx={{
                                                margin: '0 auto',
                                                textAlign: 'center',
                                                height: '100%',
                                            }}
                                            key={service.title}
                                        >
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="140"
                                                    image="/static/images/cards/contemplative-reptile.jpg"
                                                    alt="green iguana"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        {service.title}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {service.description}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Box>
                </SectionInfo>
                <br />
            </Layout >
        </>
    );
};
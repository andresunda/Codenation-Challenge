//Styles for the footer
import './index.css'
//Components of MaterialUI
import Grid from '@mui/material/Grid';
//Images
import code_na from "../../img/code_na.png"
//Material of MaterialUI
import { IconButton } from '@mui/material'
//Material Layout of MaterialUI
import { Box } from '@mui/system';
//Icons of MaterialUI
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Footer = () => {
    return (
        <>
            <div>
                <div className='footer-style'>
                    <Grid container>
                        <Grid item xs={12} sm={4}>
                            <Box >
                                <div className='img-container-logo '>
                                    <img
                                        src={code_na}
                                        width="200"
                                    />
                                </div>
                            </Box>

                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box >

                                <div className='info-codenation'>
                                    <strong>Guadalajara</strong>
                                    <p>
                                        Avenida Obsidiana #3632
                                        <br />
                                        Residencial Loma Bonita, C.P.
                                        <br />
                                        45088
                                        <br />
                                        Zapopan. Jalisco, México.
                                    </p>
                                    <div className='container-contact'>
                                        <strong>Telefono:</strong>
                                        <span> (01) 33 1725 5576</span>
                                        <br />
                                        <strong>Email:</strong>
                                        <span> info@codenation-studio.com</span>
                                    </div>
                                </div>

                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box >
                                <div className='info-codenation'>
                                    <strong>Contacto</strong>
                                    <br />
                                    <div>
                                        <strong>Telefono:</strong>
                                        <span> (01) 33 1725 5576</span>
                                        <br />
                                        <strong>Email:</strong>
                                        <span> info@codenation-studio.com</span>
                                    </div>
                                </div>
                                <br />
                                <div className='info-codenation'>
                                    <strong>Redes Sociales</strong>
                                    <br />
                                    <Grid container>
                                        <Grid item xs={6} sm={6}>
                                            <Box className='icon-face-align'>
                                                <IconButton >
                                                    <FacebookIcon className='custom-icon-face ' />
                                                </IconButton>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6} sm={6}>
                                            <Box className='icon-linkedin-align'>
                                                <IconButton>
                                                    <LinkedInIcon className="custom-icon-linkedin" />
                                                </IconButton>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Box>
                        </Grid>
                    </Grid>
                </div>

                <div className='footer-copyright'>
                    <Grid container>
                        <Grid item xs={12} sm={12}>
                            <Box >
                                <div className='container-copyright'>
                                    <p>
                                        Copyrights © 2017 All Rights Reserved
                                        by Codeation Studio S.A.S de C.V.
                                    </p>
                                </div>
                            </Box>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}

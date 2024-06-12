'use client'
import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import DownloadIcon from '@mui/icons-material/Download'
import { styled } from '@mui/material/styles'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import { Grid, Divider } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionActions from '@mui/material/AccordionActions'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import StackData, { StackItem } from '@/lib/stack'

const StyledBox = styled('div')(({ theme }) => ({
    alignSelf: 'center',
    width: '100%',
    height: 400,
    marginTop: theme.spacing(8),
    borderRadius: theme.shape.borderRadius,
    outline: '1px solid',
    boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
    backgroundImage: `url(${'/static/images/templates/templates-images/hero-light.png'})`,
    outlineColor: 'hsla(220, 25%, 80%, 0.5)',
    backgroundSize: 'cover',
    [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing(10),
        height: 700
    },
    ...theme.applyStyles('dark', {
        boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
        backgroundImage: `url(${'/static/images/templates/templates-images/hero-dark.png'})`,
        outlineColor: 'hsla(210, 100%, 80%, 0.1)'
    })
}))

const Hero: React.FC = () => {
    return (
        <Box
            id='hero'
            sx={(theme) => ({
                width: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundImage:
                    'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
                ...theme.applyStyles('dark', {
                    backgroundImage:
                        'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)'
                })
            })}
        >
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 14, sm: 20 },
                    pb: { xs: 8, sm: 12 }
                }}
            >
                <Stack
                    spacing={2}
                    useFlexGap
                    sx={{
                        alignItems: 'center',
                        width: { xs: '100%', sm: '70%' }
                    }}
                >
                    <Typography
                        variant='h1'
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            alignItems: 'center',
                            fontSize: 'clamp(3rem, 10vw, 3.5rem)'
                        }}
                    >
                        My name is Noah Seltzer
                    </Typography>
                    <Typography
                        sx={{
                            textAlign: 'center',
                            color: 'text.secondary',
                            width: { sm: '100%', md: '80%' }
                        }}
                    >
                        I am a Full-Stack Cloud Developer. Thank you for coming
                        to my website
                    </Typography>
                    {/* <Typography
                        sx={{
                            textAlign: 'center',
                            color: 'text.secondary',
                            width: { sm: '100%', md: '80%' }
                        }}
                    >
                        Thank you for coming to my website
                    </Typography> */}
                    {/* <Grid container sx={{ justifyContent: 'center', mt: 0.5, opacity: 0.6 }}>
                    <Typography
                        variant='h1'
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            alignItems: 'center',
                            fontSize: '2rem'
                        }}
                    >
                        
                    </Typography>

                  </Grid> */}

                    <Grid className='w-full' container alignItems='space-between'>
                        {StackData.map((data: StackItem, i: number) => {
                            return (
                                <div key={i}>
                                    <Grid item>
                                        <Accordion>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls='panel1-content'
                                                id='panel1-header'
                                            >
                                                {data.title}
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                {data.list.map((item: any) => {
                                                    return (
                                                        <div>
                                                            {item.name}
                                                            <Divider />
                                                        </div>
                                                    )
                                                })}
                                            </AccordionDetails>
                                        </Accordion>
                                    </Grid>
                                </div>
                            )
                        })}
                    </Grid>
                    <div className='flex flex-row gap-4'>
                        <Link href='/Noah_Seltzer_Resume.pdf'>
                            <Button
                                variant='outlined'
                                className='flex flex-row gap-2'
                            >
                                Resume
                                <DownloadIcon />
                            </Button>
                        </Link>
                        <Link href='https://www.linkedin.com/in/noah-seltzer'>
                            <Button
                                variant='outlined'
                                className='flex flex-row gap-2'
                            >
                                <LinkedInIcon />
                            </Button>
                        </Link>
                        <Link href='https://github.com/noah-seltzer'>
                            <Button
                                variant='outlined'
                                className='flex flex-row gap-2'
                            >
                                <GitHubIcon />
                            </Button>
                        </Link>
                    </div>
                </Stack>
                {/* <StyledBox id="image" /> */}
            </Container>
        </Box>
    )
}

export default Hero

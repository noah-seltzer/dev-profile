import { Button, Divider, List, ListItem, Typography } from '@mui/material'
import Link from 'next/link'

const projects = [
    {
        title: 'React SVG Editor',
        description:
            'Simple SVG editor project to practice buildng interactive react apps',
        tools_list: [
            'React',
            'Next.JS',
            'fabric.js',
            'canvas',
            'Cloudflare Pages'
        ],
        github_url: 'https://github.com/noah-seltzer/social-svg-editor',
        demo_url: 'https://editor.noahseltzer.com'
    }
]

export const Projects = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='w-5/6 my-4'>
                <Typography variant='h3'>Projects</Typography>
            </div>
            <Divider />
            <div className='w-5/6'>
                {projects.map((project, i: number) => {
                    return (
                        <div key={i} className='flex flex-row justify-between'>
                            <div>
                                <Typography variant='h6'>
                                    {project.title}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '1rem'
                                    }}
                                >
                                    {project.description}
                                </Typography>
                                {project.github_url && (
                                    <Link href={project.github_url}>
                                        <Button variant='text'>Github</Button>
                                    </Link>
                                )}
                                {project.demo_url && (
                                    <Link href={project.demo_url}>
                                        <Button variant='text'>Live Demo</Button>
                                    </Link>
                                )}
                            </div>
                            <div>
                                {project.tools_list && (
                                    <div>
                                        <Typography sx={{
                                            fontWeight: 'bold'
                                        }}>
                                            Tools Used in Project
                                        </Typography>
                                        <List>
                                            {project.tools_list.map((tool, i: number) => {
                                                return <ListItem key={i}>{tool}</ListItem>
                                            })}
                                        </List>
                                    </div>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

import StackData, { StackItem, StackListItem } from '@/lib/stack'
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Divider,
    Typography,
    SxProps,
    Theme,
    List,
    ListItem,
    ListItemText
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const Stack = () => {
    const ItemTitleNameStyle: SxProps<Theme> = {
        fontSize: '1rem'
    }

    const ItemSubtitleNameStyle: SxProps<Theme> = {
        fontSize: '0.83rem'
    }
    return (
        <div className='flex flex-col p-24 bg-gray-300'>
            <div className='w-5/6 mb-16'>
                <Typography variant='h3'>Development Stack</Typography>
                <Typography>My developement tools of choice as well as other tools I have experience in.</Typography>
            </div>
            <div className='flex flex-row justify-between w-full'>
                {StackData.map((data: StackItem, i: number) => {
                    return (
                        <div key={i}>
                            <Accordion
                                sx={{
                                    // background: 'none',
                                    // boxShadow: 'none',
                                    // borderWidth: 0.5,
                                    // borderColor: '#000'
                                    width: '20rem'
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls='panel1-content'
                                    id='panel1-header'
                                >
                                    {data.title}
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List className='flex flex-col gap-2'>
                                        {data.list.map(
                                            (
                                                item: StackListItem,
                                                i: number
                                            ) => {
                                                return (
                                                    <ListItem key={i}>
                                                        <ListItemText
                                                            primary={item.name}
                                                            secondary={`Years Experience: ${item.years}`}
                                                        />
                                                    </ListItem>
                                                )
                                            }
                                        )}
                                    </List>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Stack

import StackData, { StackItem, StackListItem } from '@/lib/stack'
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Divider,
    Typography,
    SxProps,
    Theme
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const Stack = () => {
    const ItemTitleNameStyle: SxProps<Theme> = {
        fontSize: '1rem'
    }

    const ItemSubtitleNameStyle: SxProps<Theme> = {
        fontSize: '0.5rem'
    }
    return (
        <div className='flex flex-row justify-between w-full p-24 bg-gray-300'>
            {StackData.map((data: StackItem, i: number) => {
                return (
                    <div key={i}>
                        <Accordion
                            sx={
                                {
                                    // background: 'none',
                                    // boxShadow: 'none',
                                    // borderWidth: 0.5,
                                    // borderColor: '#000'
                                }
                            }
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls='panel1-content'
                                id='panel1-header'
                            >
                                {data.title}
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className='flex flex-col gap-2'>
                                    {data.list.map(
                                        (item: StackListItem, i: number) => {
                                            return (
                                                <div key={i}>
                                                    <Typography
                                                        sx={ItemTitleNameStyle}
                                                    >
                                                        {item.name}
                                                    </Typography>
                                                    {item.description ?? (
                                                        <Typography
                                                            variant='caption'
                                                            sx={
                                                                ItemSubtitleNameStyle
                                                            }
                                                        >
                                                            {item.description}
                                                        </Typography>
                                                    )}
                                                    <Divider />
                                                </div>
                                            )
                                        }
                                    )}
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                )
            })}
        </div>
    )
}
export default Stack

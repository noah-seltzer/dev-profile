import StackData, { StackItem } from '@/lib/stack'
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Divider
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const Stack = () => {
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
                    </div>
                )
            })}
        </div>
    )
}
export default Stack
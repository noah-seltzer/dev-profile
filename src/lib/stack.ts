export interface StackListItem { name: string, description: string }
export interface StackItem { title: string, list: StackListItem[] }
const Stack: StackItem[] = [
    {
        title: 'Infrastructure',
        list: [
            {
                name: 'terraform',
                description: 'lorem ipsum dolore est'
            },
            {
                name: 'AWS',
                description: 'lorem ipsum dolore est'
            },
        ]
    },
    {
        title: 'Server',
        list: [
            {
                name: 'terraform',
                description: 'lorem ipsum dolore est'
            },
            {
                name: 'AWS',
                description: 'lorem ipsum dolore est'
            },
        ]
        
    },
    {
        title: 'Database',
        list: [
            {
                name: 'terraform',
                description: 'lorem ipsum dolore est'
            },
            {
                name: 'AWS',
                description: 'lorem ipsum dolore est'
            },
        ]
    },
    {
        title: 'Front End',
        list: [
            {
                name: 'terraform',
                description: 'lorem ipsum dolore est'
            },
            {
                name: 'AWS',
                description: 'lorem ipsum dolore est'
            },
        ]
    },
    {
        title: 'Dev Ops',
        list: [
            {
                name: 'terraform',
                description: 'lorem ipsum dolore est'
            },
            {
                name: 'AWS',
                description: 'lorem ipsum dolore est'
            },
        ]
    },
]

export default Stack
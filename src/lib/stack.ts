export interface StackListItem { name: string, description?: string }
export interface StackItem { title: string, list: StackListItem[] }
const Stack: StackItem[] = [
    {
        title: 'Infrastructure',
        list: [
            {
                name: 'Terraform',
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
                name: 'Node.js',
                description: 'lorem ipsum dolore est'
            },
            {
                name: 'Express',
                description: 'lorem ipsum dolore est'
            },
            {
                name: 'Nest.JS',
                description: 'lorem ipsum dolore est'
            },
        ]
        
    },
    {
        title: 'Database',
        list: [
            {
                name: 'MySql',
                description: 'lorem ipsum dolore est'
            },
            {
                name: 'DynamoDB',
                description: 'lorem ipsum dolore est'
            },
        ]
    },
    {
        title: 'Front End',
        list: [
            {
                name: 'NextJS + ReactJS',
                description: 'lorem ipsum dolore est'
            },
            {
                name: 'NuxtJS + Vue.JS',
                description: 'lorem ipsum dolore est'
            },
            {
                name: 'Mui',
                description: ''
            },
            {
                name: 'Tailwind',
                description: 'lorem ipsum'
            },
            {
                name: 'HeadlessUI',
                description: 'lorem ipsum'
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
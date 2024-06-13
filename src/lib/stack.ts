export interface StackListItem { name: string, description?: string, years: number }
export interface StackItem { title: string, list: StackListItem[] }
const Stack: StackItem[] = [
    {
        title: 'Infrastructure',
        list: [
            {
                name: 'AWS',
                description: 'Proficient at building apps with AWS services including EC2, Lambda, Fargate, RDS, S3',
                years: 5,
            },
            {
                name: 'Terraform',
                years: 3,
            },
            {
                name: 'Serverless Framework',
                years: 3,
            },
            {
                name: 'Github Actions',
                years: 4
            },
            {
                name: 'Cloudflare Workers & Pages',
                years: 3
            }
            
        ]
    },
    {
        title: 'Server',
        list: [
            {
                name: 'Typescript',
                // description: 'lorem ipsum dolore est'
                years: 5,
            },
            {
                name: 'Node.js',
                // description: 'lorem ipsum dolore est'
                years: 5,
            },
            {
                name: 'Express',
                // description: 'lorem ipsum dolore est'
                years: 5
            },
            {
                name: 'Nest.JS',
                // description: 'lorem ipsum dolore est'
                years: 5
            },
        ]
        
    },
    {
        title: 'Data Storage',
        list: [
            {
                name: 'MySql',
                // description: 'lorem ipsum dolore est'
                years: 3
            },
            {
                name: 'DynamoDB',
                // description: 'lorem ipsum dolore est'
                years: 5
            },

        ]
    },
    {
        title: 'Front End',
        list: [
            {
                name: 'NextJS + ReactJS',
                years: 2
            },
            {
                name: 'NuxtJS + Vue.JS',
                years: 4
            },
            {
                name: 'Mui',
                years: 1
            },
            {
                name: 'Tailwind',
                years: 4,
            },
            {
                name: 'HeadlessUI',
                years: 2
            },
        ]
    },
]

export default Stack
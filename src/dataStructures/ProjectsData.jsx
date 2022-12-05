import todos from '../../public/assets/images/projects/Todos_screenshot.png';
import codes from '../../public/assets/images/projects/Codes_screenshot.png';
import batatabit from '../../public/assets/images/projects/Batatabit_screenshot.png';

export const ProjectsData =[
    {
        image: todos,
        alt: 'todos app preview',
        title: 'Todo List',
        skills: ['React', 'CSS', 'JavaScript'],
        description: 'This was my first React project. It is a Todos app where you can create, complete, search for todos you have created, and also delte them.',
        link: 'https://estebansant.github.io/todos_app/',
        code: 'https://github.com/estebansant/todos_app',
    },
    {
        image: codes,
        alt: 'security codes preview',
        title: 'Security Codes',
        skills: ['React', 'JavaScript'],
        description: 'Simple React project to test and practice with states, reducers and classes. The secret word is "paradigma". Use it and watch how it works',
        link: 'https://estebansant.github.io/security_codes/',
        code: 'https://github.com/estebansant/security_codes',
    },
    {
        image: batatabit,
        alt: 'batatabit preview',
        title: 'Batatabit',
        skills: ['HTML', 'CSS'],
        description: 'This was my first project using HTML and CSS, where I mostly practiced the mobile first design. It is the very beginning of my path to learn code.',
        link: 'https://estebansant.github.io/Batabit-project/',
        code: 'https://github.com/estebansant/Batabit-project',
    },
]
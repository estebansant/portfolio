import todos from '../assets/images/projects/Todos_screenshot.png';
import codes from '../assets/images/projects/Codes_screenshot.png';
import batatabit from '../assets/images/projects/Batatabit_screenshot.png';
import movieApp from '../assets/images/projects/Movies_screenshot.png';

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
        image: movieApp,
        alt: 'movie app preview',
        title: 'Another Movie App',
        skills: ['HTML', 'CSS', 'JavaScript', 'APIs'],
        description: 'Practice of API REST integrations using Axios. I use the API from TMDB to showcase multiple movies. HTML and CSS are only designed for phones.',
        link: 'https://estebansant.github.io/movie_api_practice/',
        code: 'https://github.com/estebansant/movie_api_practice',
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
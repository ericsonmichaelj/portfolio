const projects = [
  {
    title: 'Rezable',
    screenshot: '',
    stack: [
      'NodeJS',
      'Heroku',
      'Material UI',
      'React',
      'Redux',
      'Postgresql'
    ],
    url: 'http://rezable.heroku.com',
    github: 'https://github.com/dont-fear-the-repo/fear-the-repo',
    description: `Rezable is a resume builder where you can build your resume online.
    Import your information from linkedin, create customizable themes,
    drag and drop specific sections or bullets from your resume, and save your resume 
    in the cloud.`,
    'job title': 'Full Stack Engineer',
    role: [
      'Authenticated users through querying in Postgres and secured passwords with bcrypt on the server-backend',
      'Architected with React and Redux to import linkedin data, toggle logged in and out views and display user authentication failures',
      'Utilized Medium-Editor, PhantomJS and HTML5 attributes to export file to pdf and enable editing of resume'
    ],
    'team size': '5'
  },
  {
    title: 'Foodly',
    screenshot: '',
    stack: [
      'Angular',
      'MongoDB',
      'NodeJS',
      'Heroku',
      'Bootstrap'
    ],
    url: 'http://foodly.info',
    github: 'https://github.com/DudeWheresMySemiColon/Legacy',
    description: `Foodly is a demo website for ordering home delivered food.
      Create a home cooked meal or order a home cook meal and recieve email confirmation
      of the order.`,
    'job title': 'Scrum Master, Full Stack Engineer',
    role: [
      'Deployed application with Angular to display, add, and remove user orders in local storage',
      'Designed UI using Bootstrap and CSS to display forms, pictures of meals, banner and many other features',
      'Managed and maintained the repository and reviewed code for the team'
    ],
    'team size': '5'
  },
  {
    title: 'Equation Finder',
    screenshot: '',
    stack: [
      'Redis',
      'JQuery',
      'NodeJS',
      'Bootstrap',
      'Heroku'
    ],
    url: 'http://equationfinder.herokuapp.com/',
    github: 'https://github.com/ericsonmichaelj/equationfinder',
    description: `Equation finder contains a database of equations for easy search
    of equations and variables needed to solve an equation. Create an equation if its not listed there. 
    The website is hooked up to Wolfram's API for any equations not in the website database.`,
    role: [
      'Set up search engine to query redis equations and save submitted equations',
      'Used Wolfram\'s API to display equations not listed in the database'
    ],
    'team size': 'Just me',
    'job title': 'Full Stack Engineer',
  },
  {
    title: 'Tic Tac Toe 5x5',
    url: 'http://tictactoefive.herokuapp.com',
    screenshot: '',
    github: 'https://github.com/ericsonmichaelj/tictactoe5',
    description: 'Play 5 x 5 tic tac toe game (win by 5) agains the computer.',
    role: [
      'Developed algorithm for computer to follow that makes it unbeatable',
      'Planned logic in React to handle game flow'
    ],
    stack: [
      'React',
      'Webpack',
      'Bootstrap',
      'Heroku'
    ],
    'team size': 'Just me',
    'job title': 'Frontend Engineer'
  },
  {
    title: 'CovalentCareers',
    url: 'https://covalentcareers.com',
    screenshot: '',
    stack: [
      'Celery',
      'Django',
      'Webpack',
      'Python',
      'jQuery',
      'Postgresql'
    ],
    description: `CovalentCareers improves the hiring process in healthcare through job matching. 
    Services for job seekers include searching through job listings, easy applying, notifications and messaging.
    Employers and recruiters can search for candidates, post a job listing,  unlock and message job candidates.`,
    role: [
      'Architected with React to create a better user web experience through notifications and user settings panel',
      'Utilized Redux and Django rest framework to provide searchable results and filtering for the public job board',
      'Developed blog and marketing pages using HTML, Bootstrap, CSS, Django (Python) templates and jQuery '
    ],
    'team size': '2-3',
    'job title': 'Full Stack Engineer'
  },
  {
    title: 'MBTA Schedule',
    github: 'https://github.com/ericsonmichaelj/phoenix_mbta',
    url: 'https://mbtaschedule.herokuapp.com/',
    screenshot: '',
    'job title': 'Full Stack Engineer',
    description: 'See the MBTA schedule for the North and South Station. Updates if changes in schedule',
    stack: [
      'Phoenix',
      'React',
      'SocketIO'
    ],
    role: [
      'Developed server side with Phoenix to broadcast updates to mbta schedule through websockets',
      'Utilized React and socket.io on the frontend to listen to changes in mbta schedule and render it'
    ],
    'team size': 'Just me'
  },
  {
    title: 'Weather App',
    github: 'https://github.com/ericsonmichaelj/weatherapp',
    url: 'https://weatherlyforecast.herokuapp.com/',
    screenshot: '',
    'job title': 'Frontend Engineer',
    stack: [
      'JQuery'
    ],
    role: [
      'Fetched data from OpenWeather API and rendered the information using jQuery',
      'Utilized geolocation Web API so that it will display the correct weather based on location'
    ],
    description: 'See what the current weather is and get a 5 day forecast',
    'team size': 'Just me'
  },
  {
    title: 'gaame',
    url: 'http://gaame.xyz',
    github: 'github.com/DudeWheresMySemiColon/Legacy',
    screenshot: '',
    'job title': 'FullStack Engineer',
    stack: [
      'Angular',
      'SocketIO',
      'Grunt'
    ],
    description: 'Gaame is an app that allows you to find a pick up and also chat with other users to meet up for a game',
    'team size': '4',
    role: [
      'Provided automated e-mailing using Nodemailer to send directions to users',
      'Implemented Google Maps API to display directions, distance and routes based on mode of transportation',
      'Sorted search results based on duration of trip using AngularJS and Google Maps API'
    ]
  }
]

export default projects

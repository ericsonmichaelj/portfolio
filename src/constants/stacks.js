export const stackTypes = {
  frontend: 'Frontend',
  backend: 'Backend',
  testing: 'Testing',
  buildSystem: 'Build System',
  styling: 'Styling',
  databases: 'Databases',
  general: 'General',
  other: 'Other'
}

export const skillTypes = {
  experienced: 'Experienced',
  strong: 'Strong'
}


const stacks = [
  {
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    title: 'Javascript',
    image: 'js.png',
    type: stackTypes.general,
    skill: skillTypes.strong
  },
  {
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    title: 'HTML',
    image: 'html5.png',
    type: stackTypes.general,
    skill: skillTypes.strong
  },
  {
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    title: 'CSS',
    image: 'css.png',
    type: stackTypes.general,
    skill: skillTypes.strong
  },
  {
    url: 'https://www.python.org/',
    title: 'Python',
    image: 'python.png',
    type: stackTypes.general,
    skill: skillTypes.strong
  },
  {
    url: 'http://sass-lang.com/',
    title: 'SASS',
    image: 'sass.svg',
    type: stackTypes.styling,
    skill: skillTypes.experienced
  },
  {
    url: 'http://getbootstrap.com/',
    title: 'Bootstrap',
    image: 'bootstrap.png',
    type: stackTypes.styling,
    skill: skillTypes.strong
  },
  {
    url: 'http://www.material-ui.com/',
    title: 'Material UI',
    image: 'material-ui.jpg',
    type: stackTypes.styling,
    skill: skillTypes.experienced
  },
  {
    url: 'https://facebook.github.io/react/',
    title: 'React',
    image: 'react.png',
    type: stackTypes.frontend,
    skill: skillTypes.strong
  },
  {
    url: 'https://angularjs.org/',
    title: 'Angular',
    image: 'angular.png',
    type: stackTypes.frontend,
    skill: skillTypes.experienced
  },
  {
    url: 'http://redux.js.org/',
    title: 'Redux',
    image: 'redux.png',
    type: stackTypes.frontend,
    skill: skillTypes.experienced
  },
  {
    url: 'https://jquery.com/',
    title: 'JQuery',
    image: 'jquery.png',
    type: stackTypes.frontend,
    skill: skillTypes.strong
  },
  {
    url: 'https://www.postgresql.org/',
    title: 'Postgresql',
    image: 'postgresql.png',
    type: stackTypes.databases,
    skill: skillTypes.strong
  },
  {
    url: 'https://www.mongodb.com/',
    title: 'MongoDB',
    image: 'mongodb.png',
    type: stackTypes.databases,
    skill: skillTypes.experienced
  },
  {
    url: 'https://firebase.google.com/',
    title: 'Firebase',
    image: 'firebase.png',
    type: stackTypes.databases,
    skill: skillTypes.experienced
  },
  {
    url: 'https://nodejs.org/en/',
    title: 'NodeJS',
    image: 'node_js.png',
    type: stackTypes.backend,
    skill: skillTypes.strong
  },
  {
    url: 'https://www.djangoproject.com/',
    title: 'Django',
    image: 'django.png',
    type: stackTypes.backend,
    skill: skillTypes.strong
  },
  {
    url: 'http://www.django-rest-framework.org/',
    title: 'Django Restful',
    image: 'django-rest.gif',
    type: stackTypes.backend,
    skill: skillTypes.strong
  },
  {
    url: 'http://www.phoenixframework.org/',
    title: 'Phoenix Framework',
    image: 'phoenix.png',
    type: stackTypes.backend,
    skill: skillTypes.experienced
  },
  {
    url: 'http://gruntjs.com/',
    title: 'Grunt',
    image: 'grunt.svg',
    type: stackTypes.buildSystem,
    skill: skillTypes.experienced
  },
  {
    url: 'https://webpack.github.io/',
    title: 'Webpack',
    image: 'webpack.png',
    type: stackTypes.buildSystem,
    skill: skillTypes.experienced
  },
  {
    url: 'https://mochajs.org',
    title: 'Mocha',
    image: 'mocha.png',
    type: stackTypes.testing,
    skill: skillTypes.experienced
  },
  {
    url: 'http://chaijs.com/',
    title: 'Chai',
    image: 'chai.png',
    type: stackTypes.testing,
    skill: skillTypes.experienced
  },
  {
    url: 'https://facebook.github.io/jest/',
    title: 'Jest',
    image: 'jest.png',
    type: stackTypes.testing,
    skill: skillTypes.experienced
  },
  {
    url: 'http://sinonjs.org/',
    title: 'Sinon',
    image: 'sinonjs.jpg',
    type: stackTypes.testing,
    skill: skillTypes.experienced
  },
  {
    url: 'http://www.celeryproject.org',
    title: 'Celery',
    image: 'celery.jpg',
    type: stackTypes.other,
    skill: skillTypes.experienced
  },
  {
    url: 'https://www.heroku.com/',
    title: 'Heroku',
    image: 'heroku.png',
    type: stackTypes.other,
    skill: skillTypes.experienced
  },
  {
    url: 'https://www.vagrantup.com',
    title: 'Vagrant',
    image: 'vagrant.png',
    type: stackTypes.other,
    skill: skillTypes.experienced
  },
  {
    url: 'http://socket.io/',
    title: 'SocketIO',
    image: 'socket.io.gif',
    type: stackTypes.other,
    skill: skillTypes.experienced
  },
  {
    url: 'https://redis.io/',
    title: 'redis',
    image: 'redis.png',
    type: stackTypes.databases,
    skill: skillTypes.experienced
  }
]

export default stacks

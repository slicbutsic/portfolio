import projectOne from '../../images/projectOne.png';
import projectTwo from '../../images/projectTwo.png';
import projectThree from '../../images/projectThree.png';
import projectFour from '../../images/projectFour.png';
import projectFive from '../../images/projectFive.png';
import projectSix from '../../images/projectSix.png';

export const projects = [
  {
    image: projectOne,
    name: 'GameCard Rentals',
    description: 'An Airbnb-inspired platform for renting Pokémon cards, simple and created as the first project in my web development bootcamp. It features listings, search and filter options, booking management, and an interactive map.',
    url: 'https://pokemon-rental-c69de4a4ee1b.herokuapp.com',
    githubUrl: 'https://github.com/slicbutsic/pokemon-rental',
    frameworkLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain-wordmark.svg',
    frameworkAlt: 'Ruby on Rails',
  },
  {
    image: projectTwo,
    name: 'LearnWise',
    description: 'A platform that offers education solutions with payment integration through Stripe, featuring a chatbot with AI assistance and chatrooms within the courses.',
    url: 'https://www.learn-wise.live',
    githubUrl: 'https://github.com/rikkie7/learnwise',
    frameworkLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain-wordmark.svg',
    frameworkAlt: 'Ruby on Rails',
  },
  {
    image: projectThree,
    name: 'Daily Grind',
    description: 'An online store. Key features include a wishlist for saving favorite items, a shopping cart for easy order management, a delivery rate calculator for shipping estimates, and secure payments through Stripe.',
    url: 'https://daily-grind-coffee-shop-8c78059af85c.herokuapp.com',
    githubUrl: 'https://github.com/slicbutsic/daily-grind-coffee-shop',
    frameworkLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain-wordmark.svg',
    frameworkAlt: 'Ruby on Rails',
  },
  {
    image: projectFour,
    name: 'Asteroids Game',
    description:' A classic arcade-style space shooter game built with vanilla JavaScript, featuring dynamic asteroid generation and responsive controls.',
    url: 'https://slicbutsic.github.io/asteroids-js/',
    githubUrl: 'https://github.com/slicbutsic/asteroids-js',
    frameworkLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    frameworkAlt: 'JavaScript'
  },
  {
    image: projectFive,
    name: 'Budget IQ',
    description: 'Budget IQ is a personal finance web application designed to help users manage their budgets, track spending, and gain insights into their financial health.',
    url: 'https://budget-iq-ashen.vercel.app/',
    githubUrl: 'https://github.com/slicbutsic/BudgetIQ',
    frameworkLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
    frameworkAlt: 'Next',
    newProject: true
  },
  {
    image: projectSix,
    name: 'Limco CarWash',
    description: 'Freelance project for a carwash business that allows users to book carwash services, receive email confirmations, and provides an admin account for managing bookings.',
    url: 'https://budget-iq-ashen.vercel.app/',
    githubUrl: 'https://github.com/slicbutsic/car-wash-rails',
    frameworkLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain-wordmark.svg',
    frameworkAlt: 'Ruby on Rails',
    inProgress: true
  }
];

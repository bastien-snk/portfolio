<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
<p style="display: inline;">
    <a href="https://bsnk.tk/">
        <img src="https://bsnk.tk/favicon-32x32.png?v=4ccd13523eddd3694feac28b19d11786" />
        Reactfolio
    </a>
<p>
    
![](https://cloudinary-a.akamaihd.net/hopwork/image/upload/w_1024,c_limit,dpr_2/khsr0vjuodfclx9qebjk)

## Stack

- [React.js](https://fr.reactjs.org/) - React allows you to create stand-alone components that maintain their own state, then assemble them to create complex user interfaces.
- [TailwindCSS](https://chakra-ui.com/) - A utility-first CSS framework packed with classes that can be composed to build any design, directly in your HTML code.

## Project structure

```
$PROJECT_ROOT
│
├──┬── src 
│  ├──── components # React components
│  ├──── img # Images
│  └──── pages # React page components
│ 
└── public # Static files
```
## Installation

1. Clone repository with Git:

```bash
  git clone https://github.com/rootxls/portfolio-react
  cd portfolio-react
```

2. Run the dev server

```bash
    npm start
```

## Instructions

### Step 1 - Home presentation

Go to `/src/pages/home/Home.jsx` and replace written strings by your informations:

### Home presentation

```javascript
const presentation = {
    iam: "Je suis",
    name: "Bastien",
    text: [
        "DÉVELOPPEUR",
        "FRONT-END",
        "BACK-END",
    ]
};
```

### About Section

Go to `/src/pages/home/sections/Apropos.jsx` and go to HTML div with id "text", then replace text by yours.

### Projects Section

Go to `/src/pages/experience/Experience.jsx` and replace written strings by your professional experiences:

#### Object structure:

**Date:**
```javascript
const Month = {
    JANUARY: 0,
    FEBRUARY: 1,
    MARCH: 2,
    APRIL: 3,
    MAY: 4,
    JUNE: 5,
    JULY: 6,
    AUGUST: 7,
    SEPTEMBER: 8,
    OCTOBER: 9,
    NOVEMBER: 10,
    DECEMBER: 11,
};

const year = 2021;

// replace Month.DECEMBER with the month of the date
new Date(year, Month.DECEMBER);
```

**Experience:**
```javascript
{
    // You can remove from & to or set value to null if experience is in progress
    from: new Date(2021, Month.JANUARY), // experience start date
    to: new Date(2021, Month.JANUARY), // experience end date
    displayName: "Freelancing", // Name displayed in experience selection list
    job: "Développeur", // Job exercised
    company: "Indépendant", // Company
    description: [
        "A", 
        "B",
        "C"
    ], // Description of what you've done with this company
},
```

```javascript
const experiences = [
    {
        displayName: "Freelancing",
        job: "Développeur",
        company: "Indépendant",
        description: [
            "A",
            "B",
            "C"
        ],
    },
    {
        from: new Date(2021, Month.JANUARY),
        to: new Date(2021, Month.FEBRUARY),
        job: "Développeur",
        company: "Ludiconcept",
        description: [
            "A",
            "B",
            "C"
        ],
    },
];
```

### Services Section

Go to `/src/pages/services/Service.jsx` and replace written objects by your informations:

```javascript
// You need to import the image like this
import siteweb from "../../img/services/site-web.png";

const services = [
    {
        name: 'Sites Web', // Service name
        summary: 'Lorem ipsum dolor sit amet. Aut aliquam voluptas in odio nobis non placeat ipsa aut \n' +
            'Quis tenetur aut amet eius et expedita iste. Non voluptas nihil in deleniti dolorem eum quaerat aperiam sed sapiente nemo et enim rerum vel eaque eligendi? Qui saepe quia sed dolor natus cum nemo natus ab provident quae sit illo doloremque ut veniam dolorem sed inventore iste. Id maxime natus qui porro quia est maiores beatae quo cumque debitis.',
            // Service description
        href: "", // Service link
        img: siteweb, // Service image
    },
];
```

### Portfolio Section

Go to `/src/pages/portfolio/Portfolio.jsx` and replace written objects by your informations:

**Project types:**

You can replace project name with what you want, and add more project types.

```javascript
const projectTypes = {
    PERSONNAL: {
        name: 'Projet personnel',
    },
    OPEN_SOURCE: {
        name: 'Projet open-source',
    },
    PROFESSIONNAL: {
        STAGE: {
            name: 'Stage',
        },
        FREELANCE: {
            name: 'Mission Freelance',
        },
    },
};
```

```javascript
// You need to import the image like this
import lyra from "../../img/projects/lyra.png";

const projects = [
    {
        id: 1, // id for project details, just put increasing integer (1,2,3...)
        name: 'LyraMC', // Project name
        type: projectTypes.PERSONNAL, // Project type 
        desc: '...', // Project description
        repo: 'https://github.com/LyraMC', // Project repo, if none remove line or set value to null
        img: lyra,
    },
];
```

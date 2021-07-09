import React from 'react';
import './style.css';

function App() {
  return (
      <div className="min-h-full bg">
        <Header></Header>
        <div className="mt-28">
            <IDE></IDE>
        </div>
      </div>
  );
}

const logo = './img/logo.png';

const nav = [
    {
        name: 'Accueil',
        href: 'App',
        img: "home-solid.svg",
    },
    {
        name: 'Projets',
        href: 'App',
        img: "project-diagram-solid.svg",
    },
    {
        name: 'Compétences',
        href: 'App',
        img: "brain-solid.svg",
    },
    {
        name: 'Contact',
        href: 'App',
        img: "envelope-solid.svg",
    }
]

function Header() {
    return (
        <header className="px-5 py-5 align-middle relative flex">
          <span className="flex-1 flex items-start justify-start">
            <a href="">
              <img className="w-9 inline" src={logo} />
            </a>
          </span>

            <nav className="text-white uppercase text-right">
                <ul className="hidden sm:flex space-x-5">
                    {nav.map((link, index) => {
                        return (
                            <li className="transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-secondary">
                                <a href={link.href}>
                                    <img src={"img/" + link.img} className="w-6 inline mr-1 align-text-top"/>
                                    <p className="inline">{link.name}</p>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <div className="w-6 sm:hidden align-middle m-auto hover:text-secondary">
                <a href="">
                    <svg className="text-white float-right flex-2 flex items-start justify-start svg-inline--fa fa-bars fa-w-14 fa-2x" aria-hidden="true"
                         focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 448 512">
                        <path fill="currentColor"
                              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                              className=""></path>
                    </svg>
                </a>
            </div>

        </header>
    );
}

const langages = {
    markdown: {
        name: 'Markdown',
        logo: 'md.svg',
        extension: '.md',
    },
    typescript: {
        name: 'TypeScript',
        logo: 'typescript.png',
        extension: '.tsx',
    },
}

const ide_infos = {
    h1: 'Bastien',
    h2: 'Développeur Front & Back-End',
    projectName: 'Portfolio',
    windowName: 'Portfolio ~ READ-ME.md',
    files: [
        {

            langage: langages.markdown,
            fileName: 'READ-ME',
            opened: true,
            selected: true,
        },
        {
            langage: langages.typescript,
            fileName: 'App',
            opened: false,
            selected: false,
        },
    ],
}

function IDE() {
    return (
        <div id="IDE" className="ide bg-white m-auto text-center w-4/6 font-roboto">
            <div id="window-ctrls" className="py-1">
                <p id="windows-name">{ ide_infos.windowName }</p>
                <div id="buttons" className="grid grid-flow-col space-x-1 float-right mr-4 -mt-5">
                    <div className="bg-gray-300 hover:bg-green-500 w-4 h-4 rounded-full cursor-pointer"></div>
                    <div className="bg-gray-300 hover:bg-yellow-500 w-4 h-4 rounded-full cursor-pointer"></div>
                    <div className="bg-gray-300 hover:bg-red-500 w-4 h-4 rounded-full cursor-pointer"></div>
                </div>
            </div>
            <div className="grid grid-flow-col grid-cols-2 grid-rows-1 h-96">
                <div id="class-list" className="bg text-white">
                    <div id="base-proj" className="flex pt-2">
                        <img className="w-8 h-8 pb-1  cursor-pointer" src={"img/IDE/file-arrow.svg"} />
                        <img className="w-7 h-7" src="https://i.ibb.co/nL5fBC6/folder.png"/>
                        <p className="ml-2 mt-1">{ ide_infos.projectName }</p>
                    </div>

                    <ul className="-mt-1 pl-7">
                        <li className="flex">
                            <img className="w-8 h-8 pb-1  cursor-pointer    " src={"img/IDE/file-arrow.svg"} />
                            <img className="w-7 h-7" src={"img/IDE/src.svg"} />
                            <p className="ml-2 mt-1">src</p>
                        </li>



                        <ul className="pl-10">
                            {ide_infos.files.map((file, index) => {
                                return (
                                    <li className="flex pb-1" id="<!-- if selected bg-gray-800 -->">
                                        <img className="h-6" src={ "img/IDE/" + file.langage.logo } />
                                        <p className="ml-2">{ file.fileName + file.langage.extension }</p>
                                    </li>
                                );
                            })}
                        </ul>
                    </ul>
                </div>

                <div id="class-editor" className="bg-ide_class_bg text-white inline-grid">
                    <div id="opened-classes" className="bg h-11">
                        <ul className="flex h-full max-w-full">
                            {ide_infos.files.map((file, index) => {
                                if(!file.opened) return <></>;

                                let classNames: string = "text-center h-full inline-flex flex-row rounded-t-2xl ";
                                if(file.selected) {
                                    classNames = classNames + "bg-ide_class_bg";
                                } else {
                                    classNames = classNames + "bg-gradient-to-l from-ide_class_bg to-gray-900";
                                }

                                return (

                                    <li className={ classNames }>
                                        <img className="h-6 mx-3 my-auto" src={"/img/IDE/" + file.langage.logo } />
                                        <p className="my-auto">{ file.fileName + file.langage.extension }</p>
                                        <img className="h-5 my-auto mx-2 cursor-pointer" src="img/IDE/close-file.svg" />
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="center font-montserrat text-center">
                        <h1 className="font-bold lg:text-6xl text-4xl text-transparent bg-clip-text bg-gradient-to-br from-button_clear to-button_dark">{ ide_infos.h1 }</h1>
                        <h2 className="font-bold lg:text-2xl 2xl:text-3xl text-lg">{ ide_infos.h2 }</h2>
                        <div id="discover-buttons" className="w-full mt-5">
                            <div className="block xl:inline cursor-pointer bg-gradient-to-br from-button_clear to-button_dark border-4 border-button_dark center py-2 px-2 mx-4">
                                <p className="block xl:inline uppercase font-montserrat font-bold text-xl">Découvrir</p>
                            </div>
                            <div className="block xl:inline cursor-pointer border-button_dark border-4 center py-2 px-2 mx-4 my-2 xl:my-0">
                                <p className="block xl:inline uppercase text-xl text-transparent bg-clip-text bg-gradient-to-br from-button_clear to-button_dark font-bold">Ah bah non</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default App;

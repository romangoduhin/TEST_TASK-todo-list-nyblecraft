## [Check it on Netlify](https://admirable-cannoli-89ae84.netlify.app/)

# How to start the project localy?
- git clone this project
- cd my-app
- npm i
- npm run dev

# Advantages
1) No heavy libraries, no state managers
2) No UI kits
3) Responsive design
4) All progress save to local storage in JSON format
5) Reusable UI components
6) Custom scroll
7) Vite instead of CRA

# How to use?
1) Enter text to the textarea and click Enter or "Add note" button, to create Note
2) You can delete Note
3) You can edit note (while you editing Note, #tags are highlithing)
4) You can add tag to tag list by typing some #tag
4) You can filter Notes by selecting Tag


# Exceptions
1) You can't create Note if textarea is empty
2) You can't finish editing if textarea is empty
3) Tag can contain any symbols
4) Tag must be separated like "I go #shop", not like "I go#shop)
5) If you choose any Tag and update some Note, filter will refresh

# What I used for it?
| Package name                                                                                        | Version  |                                                | 
| ----------------------------------------------------------------------------------------------------|:--------:|:----------------------------------------------:|
|[vite](https://vitejs.dev/guide/)                                                                    | 4.1.0    | instead of CRA                                 |
|[react](https://www.npmjs.com/package/react)                                                         | 18.2.0   | main library                                   | 
|[typescript](https://www.typescriptlang.org/docs/)                                                   | ^4.9.3   | provides typization                            | 
|[sass](https://www.npmjs.com/package/sass)                                                           | ^1.58.3  | provides SCSS functionality                    |
|[classnames](https://www.npmjs.com/package/classnames)                                               | ^2.3.2   | provides  conditionally joining classNames     |

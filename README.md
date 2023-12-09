## Running React on Repl.it

[React](https://reactjs.org/) is a popular JavaScript library for building user interfaces.

[Vite](https://vitejs.dev/) is a blazing fast frontend build tool that includes features like Hot Module Reloading (HMR), optimized builds, and TypeScript support out of the box.

Using the two in conjunction is one of the fastest ways to build a web app.

### Getting Started
- Hit run
- Edit [App.jsx](#src/App.jsx) and watch it live update!

By default, Replit runs the `dev` script, but you can configure it by changing the `run` field in the [configuration file](#.replit). Here are the vite docs for [serving production websites](https://vitejs.dev/guide/build.html)

### Typescript

Just rename any file from `.jsx` to `.tsx`. You can also try our [TypeScript Template](https://replit.com/@replit/React-TypeScript)


## Pages & Composants

J'ai crée plusieurs pages et des composants

## Le composant LAYOUT

Ce composant me permet de placer les composants lorsqu'on navigue dans la page, et dans cette application, on placera notre page entre deux composants (sidebar, trends)

N.B : Nous allons utiliser le props (Outlet)

N.B : Avant tout, il faut installer la librairie React-Router-Dom pour que cette propriété marche

## Le composant SIDEBAR (pas vraiment le composant sidebar mais son enfant qui est BODYSIDEBAR)

Il permet de naviguer dans chaque page en utilisant un props de React-Router-Dom qui est NavLink(navlink permet de naviguer dans un site et peut apporter quelques animations)

## Le composant INDEX

ce composant permet à ce que la navigation se fait d'une manière correcte
En voyant le code, nous avons premierèment importer toutes les pages, le composant Layout, le React, ainsi que le React-Dom (import ReactDOM from 'react-dom/client') et le dernier est (import { createBrowserRouter , RouterProvider} from 'react-router-dom')

Dans le code, nous voyons qu'on a commencé premierèment à mettre la page (Home) pour que ça reconnaisse les 2 autres composants (sidebar, trends)
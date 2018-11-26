# SeanOptometria

Para utilizar este proyecto siga los siguientes pasos:

- clone el repositorio `git clone`
- instale las dependencias `npm i`
- Inicie el Servidor `npm run start:dev`
- Si no tiene una base de datos previamente configurada lea el seguiente párrafo.

Las configuraciones de la base de datos estan presentes en el archivo .env encontrado en la raiz del proyecto, modifiquelas de acuerdo a su base de datos, o cree una base de datos en base a esos parametros.

La aplicación en si requiere de la presencia de datos en las distintas tablas uqe vayan a ser utilizadas, a continuación se describe el proceso para poner en marcha la capa de persistencia de la aplicación:

- Instale sequelize-cli `npm i -g sequelize-cli`
- Migre los modelos a la base de datos `sequelize db:migrate` (recuerde exportar las variables de entorno encontradas en el archivo .env antes de este paso).
- Ingrese algunos datos en las tablas, puede utilizar un cliente http como RESTer (Firefox/Chrome/Chromium) haciendo solicitudes POST a los puntos de acceso del aplicativo.

La aplicación en si requiere de datos en las distintas tabals creadas con

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

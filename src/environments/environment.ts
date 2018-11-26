// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  hmr: true,
  routes: [
    { name: 'acompanantes', ref: 'tables/acompanantes', rol: 'user' },
    { name: 'citas', ref: 'tables/citas', rol: 'user' },
    { name: 'aseguradoras', ref: 'tables/aseguradoras', rol: 'user' },
    { name: 'departamentos', ref: 'tables/departamentos', rol: 'admin' },
    { name: 'examens', ref: 'tables/examens', rol: 'user' },
    { name: 'formulas', ref: 'tables/formulas', rol: 'user' },
    { name: 'materials', ref: 'tables/materials', rol: 'admin' },
    { name: 'municipios', ref: 'tables/municipios', rol: 'admin' },
    { name: 'pacientes', ref: 'tables/pacientes', rol: 'user' },
    { name: 'aseguradoras', ref: 'tables/tipos', rol: 'admin' },
    { name: 'usos', ref: 'tables/usos', rol: 'admin' },
    { name: 'veredas', ref: 'tables/veredas', rol: 'admin' }
  ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error'; // Included with Angular CLI.

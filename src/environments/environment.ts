// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  hmr: true,
  routes: [
    { name: 'pacientes', ref: 'tables/pacientes' },
    { name: 'acompanantes', ref: 'tables/acompanantes' },
    { name: 'citas', ref: 'tables/citas' },
    { name: 'aseguradoras', ref: 'tables/aseguradoras' },
    { name: 'departamentos', ref: 'tables/departamentos' },
    { name: 'examens', ref: 'tables/examens' },
    { name: 'formulas', ref: 'tables/formulas' },
    { name: 'materials', ref: 'tables/materials' },
    { name: 'municipios', ref: 'tables/municipios' },
    { name: 'pacientes', ref: 'tables/pacientes' },
    { name: 'aseguradoras', ref: 'tables/tipos' },
    { name: 'usos', ref: 'tables/usos' },
    { name: 'veredas', ref: 'tables/veredas' }
  ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

export const environment = {
  production: true,
  hmr: false,
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

import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as faker from 'faker/locale/es';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const pacientes = [
      { id: 1, nombre: faker.name.firstName(), apellido_1: faker.name.lastName(), apellido_2: faker.name.lastName() },
      { id: 2, nombre: faker.name.firstName(), apellido_1: faker.name.lastName(), apellido_2: faker.name.lastName() },
      { id: 3, nombre: faker.name.firstName(), apellido_1: faker.name.lastName(), apellido_2: faker.name.lastName() },
      { id: 4, nombre: faker.name.firstName(), apellido_1: faker.name.lastName(), apellido_2: faker.name.lastName() },
      { id: 5, nombre: faker.name.firstName(), apellido_1: faker.name.lastName(), apellido_2: faker.name.lastName() },
      { id: 6, nombre: faker.name.firstName(), apellido_1: faker.name.lastName(), apellido_2: faker.name.lastName() },
      { id: 7, nombre: faker.name.firstName(), apellido_1: faker.name.lastName(), apellido_2: faker.name.lastName() },
      { id: 8, nombre: faker.name.firstName(), apellido_1: faker.name.lastName(), apellido_2: faker.name.lastName() },
      { id: 9, nombre: faker.name.firstName(), apellido_1: faker.name.lastName(), apellido_2: faker.name.lastName() },
      { id: 10, nombre: faker.name.firstName(), apellido_1: faker.name.lastName(), apellido_2: faker.name.lastName() },
      { id: 11, nombre: faker.name.firstName(), apellido_1: faker.name.lastName(), apellido_2: faker.name.lastName() },
      { id: 12, nombre: faker.name.firstName(), apellido_1: faker.name.lastName(), apellido_2: faker.name.lastName() },
    ];
    const departamentos = [
      { id: 1, nombre: 'Antioquía', capital: 'medellín' },
      { id: 2, nombre: 'Cundinamarca', capital: 'bogotá' },
      { id: 3, nombre: 'Bolivar', capital: 'cartagena' },
      { id: 4, nombre: 'Amazonas', capital: 'Letica' },
      { id: 5, nombre: 'Boyaca', capital: 'tunja' },
      { id: 6, nombre: 'Caquetá', capital: 'florencia' }
    ];
    const municipios = [
      { id: 1, nombre: 'Antioquía', capital: 'medellín' },
      { id: 2, nombre: 'Cundinamarca', capital: 'bogotá' },
      { id: 3, nombre: 'Bolivar', capital: 'cartagena' },
      { id: 4, nombre: 'Amazonas', capital: 'Letica' },
      { id: 5, nombre: 'Boyaca', capital: 'tunja' },
      { id: 6, nombre: 'Caquetá', capital: 'florencia' }
    ];
    const veredas = [
      { id: 1, nombre: 'Antioquía', capital: 'medellín' },
      { id: 2, nombre: 'Cundinamarca', capital: 'bogotá' },
      { id: 3, nombre: 'Bolivar', capital: 'cartagena' },
      { id: 4, nombre: 'Amazonas', capital: 'Letica' },
      { id: 5, nombre: 'Boyaca', capital: 'tunja' },
      { id: 6, nombre: 'Caquetá', capital: 'florencia' }
    ];
    const material_lentes = [
      { id: 1, nombre: 'policarbonato' },
      { id: 2, nombre: 'trivex' },
      { id: 3, nombre: 'future-x' },
      { id: 4, nombre: 'vidrio' }
    ];
    const tipos_lentes = [
      { id: 1, nombre: 'monofocales' },
      { id: 2, nombre: 'bifofocales' },
      { id: 3, nombre: 'progresivos' },
      { id: 4, nombre: 'ocupacionales' }
    ];
    const usos_lentes = [
      { id: 1, nombre: 'descanso' },
      { id: 2, nombre: 'leer' },
      { id: 3, nombre: 'cerca' },
      { id: 4, nombre: 'lejos' }
    ];

    const aseguradora = [
      { id: 1, nombre: faker.company.companyName() },
      { id: 2, nombre: faker.company.companyName() },
      { id: 3, nombre: faker.company.companyName() },
      { id: 4, nombre: faker.company.companyName() },
      { id: 5, nombre: faker.company.companyName() },
      { id: 6, nombre: faker.company.companyName() },
      { id: 7, nombre: faker.company.companyName() }
    ];
    return { pacientes, departamentos, municipios, veredas , material_lentes, tipos_lentes, usos_lentes, aseguradora };
  }
}

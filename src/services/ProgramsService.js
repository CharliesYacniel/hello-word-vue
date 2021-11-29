import { HttpClient } from './HttpClient';

export const ProgramsService = {
  async obtenerPrograms() {
    return HttpClient.get('/programs/getAll')
      .then(Programs => Programs);
  },
  async ejecutarProgram(Programs) {
    return HttpClient.post('/programs/execute', Programs)
      .then(registrado => registrado);
  },
  async agregarPrograms(Programs) {
    // console.log("Programs",Programs)
    return HttpClient.post('/programs/create', Programs)
      .then(registrado => registrado);
  },
  // async actualizarPrograms(Programs) {
  //   return HttpClient.put('/Programs', Programs)
  //     .then(registrado => registrado);
  // },
  // async eliminarPrograms(id) {
  //   return HttpClient.delete(`/Programs/${id.toString()}`)
  //     .then(eliminado => eliminado);
  // },
};
export default { ProgramsService };
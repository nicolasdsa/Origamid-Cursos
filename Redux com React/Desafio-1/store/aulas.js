const COMPLETAR_AULA = 'aulas/COMPLETAR_AULA';
const COMPLETAR_CURSO = 'aulas/COMPLETAR_CURSO';
const RESETAR = 'aulas/RESETAR_CURSO';

export const completar_aula = (payload) => ({ type: COMPLETAR_AULA, payload });
export const completar_curso = () => ({ type: COMPLETAR_CURSO });
export const resetar = () => ({type: RESETAR});

const initialState = [
  {
    id: 1,
    nome: 'Design',
    completa: true,
  },
  {
    id: 2,
    nome: 'HTML',
    completa: false,
  },
  {
    id: 3,
    nome: 'CSS',
    completa: false,
  },
  {
    id: 4,
    nome: 'JavaScript',
    completa: false,
  },
];

const reducer = immer.produce((state, action) => {
  switch (action.type) {
    case COMPLETAR_AULA:
      const item = state.findIndex((item) => item.id === action.payload);

      console.log(item);

      if(state[item] && !isNaN(item)){
        state[item].completa = true;
      }

      break;
      
    case COMPLETAR_CURSO:
      state.forEach((aula) => (aula.completa = true));
      break;
    case RESETAR:
      state.forEach((aula) => (aula.completa = false));
      break;

    default:
      return state;
  }
}, initialState)

export default reducer;
const INCREMENTAR = 'aluno/INCREMENTAR_TEMPO';
const REDUZIR = 'aluno/REDUZIR_TEMPO';
const MODIFICAR = 'aluno/MODIFICAR_EMAIL';

export const incrementar = () => ({ type: INCREMENTAR });
export const reduzir = () => ({ type: REDUZIR });
export const modificar = (payload) => ({ type: MODIFICAR, payload });

const initialState = {
  nome: 'André Rafael',
  email: 'andre@origamid.com',
  diasRestantes: 120,
};

const reducer = immer.produce((state, action) => {
  switch (action.type) {
    case INCREMENTAR:
      state.diasRestantes++;
      break;
    case REDUZIR:
      state.diasRestantes--;
      break;
    case MODIFICAR:
      state.email = action.payload;
      break;
    default:
      return state;
  }
}, initialState)

export default reducer;
const initialState = {
    isLogin: false,
    userId:null,
}

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'LOGIN':
      return{
        ...state,
        isLogin:true,
        userId: payload.user,
      }
    case 'LOGOUT':
      return{
        ...state,
        isLogin:false,
        userId:null,
      }
    default:
    return state;
  }}
       
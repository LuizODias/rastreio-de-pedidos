export const type = {
  SET_BLACK_SCREEN_VISIBLE: 'LOGIN/SET_BLACK_SCREEN_VISIBLE',
}

export const action = {
  setBlackScreenVisible: isBlackScreenVisible => ({
    type: type.SET_BLACK_SCREEN_VISIBLE,
    isBlackScreenVisible,
  }),
}

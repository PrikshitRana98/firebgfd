import { ADD_ITEM, CHANGE_THEME, REMOVE_ITEM } from "../ActionType"

export const addItemToCart=(data)=>({
    type:ADD_ITEM,
    payload:data
})

export const removeItemFromCart=(index)=>({
    type:REMOVE_ITEM,
    payload:index
})

export const changeTheme=(type)=>({
    type:CHANGE_THEME,
    payload:ActionSheetIOS.payload
})
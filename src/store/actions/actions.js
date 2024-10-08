export const TOGGLE_THEME = "TOGGLE_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";

export const toggleTheme=()=>({
    type:TOGGLE_THEME,
})


export const setLanguage = (language)=>({
    type:SET_LANGUAGE,
    payload:language
})
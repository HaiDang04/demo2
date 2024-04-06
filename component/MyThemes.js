import { Text, View } from 'react-native'
import React, {createContext, useState, useContext} from 'react'

// b1, khoi tao contex cho theme
const ThemeContext = createContext();
// noi su dung theme se dung cau truc <MyTheme>....</MyTheme>
// phan ..... la thuoc tinhs children


export const MyThemes = ({children}) => {
     // b2. Tạo state để lưu trạng thái đang sử dụng mẫu theme nào
   const [theme, setTheme] = useState('light'); //VD 2 dạng: sáng/tối  (light/dark)
   // Viết hàm chuyển mẫu giao diện
  const toggleTheme = ()=>{
      console.log(" theme đang dùng: " + theme);
      setTheme( theme ==='light'?'dark':'light');
      console.log(" Đã chuyển sang theme: " + theme);
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
    
  )
}
// dinh nghia 1 ham hook
export const useTheme = ()=> useContext(ThemeContext);
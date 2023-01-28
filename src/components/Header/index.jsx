import Countainer from "../Container"
import { HeaderStyled } from "./style"

const Header = ({children, ...other}) => {
  return (
    <HeaderStyled {...(other)}>
        <Countainer>
            {children}
        </Countainer>
    </HeaderStyled>
  )
}

export default Header
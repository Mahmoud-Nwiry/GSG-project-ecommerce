import { OrBoxStyled, OrLineStyled, OrTextStyled } from "./style";


const OrLine = ({style}) => {
  return (
    <OrBoxStyled {...(style) ? style={style} : ''}>
      <OrLineStyled />
      <OrTextStyled>OR</OrTextStyled>
    </OrBoxStyled>
  )
}

export default OrLine;
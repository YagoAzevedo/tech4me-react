import styled from "styled-components";

const Title = styled.h1`
    font-size: 3.2em;
    line-height: 1.1;
    color: ${props => props.tema === 'claro' ? '#000' : '#c2c2c2'};
`

export default Title;
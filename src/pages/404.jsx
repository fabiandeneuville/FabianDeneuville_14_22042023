import { Link } from "react-router-dom";
import styled from "styled-components";

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 25px;
    text-align: center;
    align-items: center;
    justify-content: center;
`;

function NotFound(){
    return (
        <Content>
            <h2>Not Found</h2>
            <Link to="/">Home</Link>
        </Content>
    )
}

export default NotFound;
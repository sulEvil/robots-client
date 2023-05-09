import React, {useState} from 'react';
import Content from '../Components//Content';
import Wrapper from "../Components/Wrapper";



function Main(props) {
    const [value, setValue] = useState(0)
    return (
        <Wrapper value={value} setValue={setValue}>
            <Content value={value}/>
        </Wrapper>
    );
}

export default Main;

/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";
import CaretDown from '../assets/caret-down.svg'

const DropDownSelect = styled.div`
    border: 1px solid #333;
    cursor: pointer;
    position: relative;
`

const Selected = styled.div`
    padding: 5px;
`
const DropDownSelectList = styled.div`
    position: absolute;
    z-index: 2;
    background: white;
    width: 100%;
    overflow-y: scroll;
    max-height: 200px;
`

const Option = styled.div`
    padding: 5px;
    cursor: pointer;
    :hover {
        background-color: #F2F2F2
    }
`

const Caret = styled.img`
    width: 10px;
    position: absolute;
    top: 7px;
    right: 10px;
`

function CustomDropDown(props) {

    const { options, selected, onChange, name } = props

    const [isOpen, setIsOpen] = useState(false);
    const [optionselected, setOptionSelected] = useState(selected);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (index) => {
        setIsOpen(false);
        onSelect(options[index]);
    };

    const onSelect = (option) => {
        setOptionSelected(option)
        onChange({
            target: {
                name,
                value: option
            }
        })
    };

    return (
        <DropDownSelect>
            <Selected onClick={handleClick}>
                {optionselected}
            </Selected>
            <Caret src={CaretDown}/>
            {isOpen && (
                <div>
                    <hr />
                    <DropDownSelectList
                    onMouseLeave={() => setIsOpen(false)}
                    >
                        {options.map((option, index) => (
                            <Option
                            key={index}
                            onClick={() => handleOptionClick(index)}
                            >
                                {option}
                            </Option>
                        ))}
                    </DropDownSelectList>
                </div>
            )}
    </DropDownSelect>
    );
}

export default CustomDropDown;
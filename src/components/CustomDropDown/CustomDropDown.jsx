import PropTypes from 'prop-types';
import { useState } from "react";
import CaretDown from '../../assets/caret-down.svg'
import { 
    DropDownSelect, 
    Selected, 
    DropDownSelectList, 
    Option, 
    Caret 
} from "./styled";

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

CustomDropDown.propTypes = {
    options: PropTypes.array.isRequired,
    selected: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
};
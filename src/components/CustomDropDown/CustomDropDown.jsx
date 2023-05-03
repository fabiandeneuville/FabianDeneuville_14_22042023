import PropTypes from 'prop-types';
import { useState } from "react";
import { 
    DropDownSelect, 
    Selected, 
    DropDownSelectList, 
    Option, 
} from "./styled";

function CustomDropDown(props) {

    const { options, selected, onChange, name, id } = props

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
        <DropDownSelect id={id} role="listbox" name={props.name}
        aria-expanded={isOpen}
        aria-labelledby={`Selection ${props.name}`}
        aria-describedby={"Selection"}
        >
            <Selected onClick={handleClick}>
                {optionselected}
            </Selected>
            {isOpen && (
                <div>
                    <DropDownSelectList
                    onMouseLeave={() => setIsOpen(false)}
                    >
                        {options.map((option, index) => (
                            <Option
                            role="option"
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
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};
import PropTypes from 'prop-types';
import { ModalWrapper, ModalOverLay, ModalWindow, ModalCloseButton, ModalText } from "./styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Modal(props){

    const { onHide, text } = props

    return (
        <ModalWrapper>
            <ModalOverLay/>
            <ModalWindow>
                <ModalCloseButton onClick={onHide}>
                    <FontAwesomeIcon icon={faXmark}/>
                </ModalCloseButton>
                <ModalText>
                    {text}
                </ModalText>
            </ModalWindow>
        </ModalWrapper>
    )
}

export default Modal;

Modal.propTypes = {
    onHide: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
};
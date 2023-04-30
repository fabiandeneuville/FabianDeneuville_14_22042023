import Header from "../components/Header/Header";
import CreateEmployeeForm from "../components/CreateEmployeeForm/CreateEmployeeForm";
import Modal from "../components/Modal/Modal";
import { useSelector, useDispatch } from "react-redux";
import { hideModal } from "../store/actions";

function Home(){

    const showModal = useSelector(state => state.modal.displayModal);
    const modalText = useSelector(state => state.modal.modalText);
    const Dispatch = useDispatch();

    const closeModal = () => {
        Dispatch(hideModal())
    };

    return (
        <>
            <Header/>

            {showModal && modalText &&
                <Modal
                onHide={closeModal}
                text={modalText}
                />
            }
            <CreateEmployeeForm/>
        </>
    );
}

export default Home;
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import { Container } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onCloseNewTransactionModal: () => void;
}

export function NewTransactionModal({isOpen, onCloseNewTransactionModal}:NewTransactionModalProps){
    return(
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onCloseNewTransactionModal} 
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
            <button type="button" onClick={onCloseNewTransactionModal} className="reactModalClose">
                <img src={closeImg} alt="Fechar Transação" />
            </button>
            <Container>
                <h2>Cadastrar Transação</h2>

                <input placeholder="Título" />
                <input placeholder="Valor" type="number"/>
                <input placeholder="Categoria"/>

                <button type="submit">Cadastrar</button>


            </Container>
        </Modal>
    );
}
import Authorization from "./auth/Authorization";
import Registration from "./auth/Registration";
import PasswordRecovery from "./auth/password-recovery/Email"

const Modal = (props) => {
    const modal = props?.modal?.props

    function renderForm(param) {
        switch(param) {
            case 'authorization':
                return <Authorization />;
            case 'registration':
                return <Registration />;
            case 'passwordrecovery':
                return <PasswordRecovery />;
            default:
                return <Authorization />;
        }
    }

    const content = modal?.active && (
        <div className="modal">
            <div className="blackout" onClick={() => props?.modal.dispatch({ type: "modal", active:"false"})}></div>
            <div className="modal-container">
                {renderForm(modal?.content)}
            </div>
        </div>
    )

    return content

};

export default Modal
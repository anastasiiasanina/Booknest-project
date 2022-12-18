import cl from '../style/Modal.module.css';

const Modal = ({children, visible, setVisible}) => {
  const rootClasses = [cl.myModal];
  if(visible) {
    rootClasses.push(cl.active);
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
        {visible && children}
      </div>
    </div>
  );
};

export default Modal;
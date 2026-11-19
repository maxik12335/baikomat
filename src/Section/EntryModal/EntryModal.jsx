// Components/EntryModal/EntryModal.jsx — вынесенная модалка брони
import Modal from '../../Components/Modal/Modal';
import Close from '../../Components/UI/Close/Close';
import Btn from '../../Components/UI/Btn/Btn';
import classes from './EntryModal.module.css';

const EntryModal = ({ onClose, t }) => (
  <Modal>
    <Close onClick={onClose} />
    <div className={classes.modalEntry}>
      <div className={classes.headerEntry}>
        <h2 className='h2'>{t.title}</h2>
        <p className={`${classes.subheader} text-base`}>{t.subheader}</p>
        <p className='text-sm'>{t.note}</p>
      </div>
      <div className={classes.buttons}>
        <Btn isColor='dark' size='sm' href={t.zaloLink}>{t.zalo}</Btn>
        <Btn isColor='dark' size='sm' href={t.telegramLink}>{t.telegram}</Btn>
        <Btn isColor='dark' size='sm' href={t.phoneLink}>{t.phone}</Btn>
      </div>
    </div>
  </Modal>
);

export default EntryModal;

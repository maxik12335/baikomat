import { useState } from 'react';
import classes from './GalleryBase.module.css';
import Modal from '../../Modal/Modal';
import Close from '../../UI/Close/Close';

// принимает массив изображения images
const GalleryBase = ({images}) => {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <>
      <ul className={classes.list}>
        {images.map((item, i) => (
          <li className={classes.item} key={i}>
            <img
              className={classes.img}
              src={item}
              alt={`Работа ${i + 1}`}
              loading="lazy"
              onClick={() => setIsOpen(item)}
            />
          </li>
        ))}
      </ul>

      {isOpen && (
        <Modal>
          <Close onClick={() => setIsOpen(null)} />
          <img className={classes.modalImg} src={isOpen} alt="" />
        </Modal>
      )}
    </>
  );
};

export default GalleryBase;

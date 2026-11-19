import classes from './CatalogSection.module.css';
import Btn from '../../Components/UI/Btn/Btn';
import { useEffect, useState } from 'react';
import Modal from '../../Components/Modal/Modal'
import Close from '../../Components/UI/Close/Close'

const CatalogSection = ({ t }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenEntry, setIsOpenEntry] = useState(false)

  useEffect(() => {
    console.log('isOpen: ', isOpen)
    console.log('isOpenEntry: ', isOpenEntry)
  }, [isOpen, isOpenEntry])
  
  return (
    <div className='section line-dark' id='catalog'>
      <div className="container">
        <div className='content'>
          <h2 className='h2'>{t.title}</h2>

          <ul className={classes.list}>
            {t.items.map(item => (
              <li key={item.id} className={`${classes.item}`}>
                <img
                  className={classes.img}
                  src={item.img}
                  alt=""
                />
                <div className={classes.itemTexts}>
                  <p className='text-base'>{item.name}</p>
                  <p className='text-sm'>{item.price}</p>
                </div>
                <Btn isColor='dark' size='sm' onClick={() => setIsOpen(item)}>{t.btn}</Btn>
              </li>
            ))}
          </ul>
          {isOpen &&
            <Modal>
              <Close onClick={() => setIsOpen(false)}/>
              <div className={classes.modalContent}>
                <img className={classes.imgModal} src={isOpen.img} alt={`Фото full screen`} />

                <div className={classes.texts}>
                  <div className={classes.header}>
                    <h2 className='h2'>{isOpen.name}</h2>
                    <p className='text-sm'>{isOpen.price}</p>
                  </div>
                  {isOpen.description != 'null' &&
                    <p className='text-sm'>{isOpen.description}</p>
                  }

                  <Btn isColor='dark' size='sm' onClick={() => setIsOpenEntry(isOpen)}>{t.btn}</Btn>
                </div>
              </div>
            </Modal>
          }

          {isOpenEntry &&
            <Modal>
              <Close onClick={() => setIsOpenEntry(false)}/>
              <div className={classes.modalEntry}>
                <div className={classes.headerEntry}>
                  <h2 className='h2'>{t.entry.title}</h2>
                  <p className={`${classes.subheader} text-base`}>
                    {t.entry.subheader}
                  </p>
                  <p className='text-sm'>
                    {t.entry.note}
                  </p>
                </div>
                  
                <div className={classes.buttons}>
                  <Btn isColor='dark' size='sm' href={t.entry.zaloLink}>{t.entry.zalo}</Btn>
                  <Btn isColor='dark' size='sm' href={t.entry.telegramLink}>{t.entry.telegram}</Btn>
                  <Btn isColor='dark' size='sm' href={t.entry.phoneLink}>{t.entry.phone}</Btn>
                </div>
              </div>
            </Modal>
          }
        </div>
      </div>
    </div>
  );
};

export default CatalogSection;

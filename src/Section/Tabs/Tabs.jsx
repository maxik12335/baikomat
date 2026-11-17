import React, { useRef } from 'react';
import classes from './Tabs.module.css';
import usePagination from '../../hooks/usePagination';
import Pagination from '../../Components/Pagination/Pagination';

//  const TABS = {
//    manikur: { title: 'маникюр', list: manikurList },
//    pedicur: { title: 'педикюр', list: pedicurList },
//    spa:     { title: 'spa',     list: spaList },
//  };
//  const [isOpen, setIsOpen] = useState(null);
//  <Tabs
//    tabs={TABS}
//    itemsPerPage={8}
//    handler={setIsOpen}
//  /> 
// модалка если надо открыть содержимое таба
// {isOpen &&
//   <Modal>
//     <Close onClick={() => setIsOpen(false)}/>
//     <div className={classes.modalContent}>
//       <img className={classes.img} src={isOpen.img} alt={`Фото full screen`} />

//       <div className={classes.texts}>
//         <div className={classes.header}>
//           <h2 className='h2'>{isOpen.title}</h2>
//           <p className='text-sm'>{isOpen.price} р</p>
//         </div>
//         {isOpen.description != 'null' &&
//           <p className='text-sm'>{isOpen.description}</p>
//         }

//         <Btn isColor='dark' size='sm'>записаться</Btn>
//       </div>
//     </div>
//   </Modal>
// }

const Tabs = ({ tabs, itemsPerPage = 6, handler }) => {
  // tabs = { manikur: { title: 'маникюр', list: [...] }, ... }
  const tabKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = React.useState(tabKeys[0]);
  const listRef = useRef(null); // ← реф на контейнер списка
  const current = tabs[activeTab];
  const { page, totalPages, visible, setPage } = usePagination(
    current ? current.list : [],
    itemsPerPage
  );

  // обёртка: сначала меняем страницу, потом листаем наверх
  const handlePageChange = (newPage) => {
    setPage(newPage);
    listRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <div className={classes.container}>
      {/* кнопки(можно без них) */}
      {tabKeys.length > 1 && (
        <div className={classes.buttons}>
          {tabKeys.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${classes.button} ${activeTab === tab ? classes.buttonActive : classes.buttonInactive} hover`}
              aria-pressed={activeTab === tab}
            >
              {tabs[tab].title}
            </button>
          ))}
        </div>
      )}

      {/* сам список */}
      <ul className={classes.list} ref={listRef}>
        {visible.map((item) => (
          <li key={item.id} className={classes.list__item} onClick={() => handler(item)}>
            <p className={`${classes.title} text-base`}>{item.title}</p>
            <div className={`${classes.description} text-sm`}>
              <p className={classes.price}>{item.price} ₽</p>
              <p className={classes.time}>{item.time}</p>
            </div>
          </li>
        ))}
      </ul>

      <Pagination page={page} totalPages={totalPages} onChange={handlePageChange} />
    </div>
  );
};

export default Tabs;

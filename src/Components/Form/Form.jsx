import Input from '../UI/Input/Input';
import Btn from '../UI/Btn/Btn';
import Thanks from '../UI/Thanks/Thanks'
import classes from './Form.module.css';
import { useState } from 'react';
import { formatPhone, formatName, validateForm } from '../../utils/form';

// ----- Как пользоваться
// метод handleSubmit()
//  const handleSubmit = async (data) => {
//    // Сюда только логика отправки, без стейтов формы
//    console.log('Отправляем:', data);
//  };
// --- 1 вариант (без модалки)
//  const [isOpen, setIsOpen] = useState(false);
//  <Form onSubmit={handleSubmit} />

// --- 2 вариант (в модалке)
//  const [isOpen, setIsOpen] = useState(false);
//  {isOpe2 && 
//    <Modal>
//      <Close onClick={() => setIsOpen(false)} />
//      <Form onSubmit={handleSubmit} close={() => setIsOpen(false)} />
//    </Modal>
//  }

const Form = ({ onSubmit, close }) => {
  const [values, setValues] = useState({ name: '', phone: '' });
  const [isSent, setIsSent] = useState(false);

  const errors = validateForm(values);
  const isValid = (!errors.name && !errors.phone) && (values.name != '' && values.phone != '');

  const handleChange = (field, formatter) => (e) => {
    setValues((prev) => ({ ...prev, [field]: formatter(e.target.value) }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (errors.name || errors.phone) return;
    await onSubmit({
      name: values.name.trim(),
      phone: values.phone.replace(/\D/g, ''),
    });

    setIsSent(true);          // <-- ДОБАВИТЬ: показать «спасибо»
    setTimeout(() => {
      setIsSent(false)
      setValues({ name: '', phone: '' })
      close?.()
    }, 2500);  // <-- ДОБАВИТЬ: закрыть модалку через 2.5 сек
  };

  if (isSent) {
    return (
      <Thanks
        title='Спасибо !'
        body='вам перезвонят через 5–10 минут'
      />
    );
  }


  return (
    <div>
      <form className={classes.form} onSubmit={handleFormSubmit}>
        <Input
          value={values.name}
          onChange={handleChange('name', formatName)}
          error={values.name ? errors.name : ''}
          placeholder="Имя"
          inputMode="text"
        />
        <Input
          value={values.phone}
          onChange={handleChange('phone', formatPhone)}
          error={values.phone ? errors.phone : ''}
          placeholder="+7 999 999 99 99"
          type="tel"
          inputMode="tel"
        />
        <Btn disabled={!isValid} type="submit">
          Отправить
        </Btn>
      </form>
    </div>
  );
};

export default Form;

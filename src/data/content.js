export const CONTENT = {
  ru: {
    nav: [
      { to: '/', label: 'главная' },
      { to: '/rides', label: 'экстрим' },
    ],
    main: {
      title: 'baikomat',
      subtitle: 'аренда мототехники во Вьетнаме',
      btn: 'выбрать байк',
    },
    catalog: {
      title: 'каталог',
      btn: 'забронировать',
      entry: {
        title: 'бронь',
        subheader: 'Оставьте заявку — свяжемся в течение 15 минут и подтвердим бронь.',
        note: 'отвечаем круглосуточно',
        zalo: 'Zalo',
        telegram: 'Telegram',
        phone: '+84 987 654 321',
        zaloLink: 'https://vk.ru/mr.senoval',   // замени на настоящую ссылку Zalo
        telegramLink: 'https://max.ru/u/134302148', // проверь, max или telegram :)
        phoneLink: 'tel:+84987654321',
      },
      items: [
        {
          id: 1,
          name: 'Honda Vision',
          price: '2000 ₽ / сутки',
          img: 'https://avatars.mds.yandex.net/get-mpic/4080064/2a00000191c6bb5780d735ead75029a5efb2/orig',
          description: 'Лёгкий и экономичный скутер — идеален для города и коротких поездок. Простой в управлении, отлично держит дорогу даже в пробках.',
        },
        {
          id: 2,
          name: 'Honda Wave 110',
          price: '1800 ₽ / сутки',
          img: 'https://avatars.mds.yandex.net/get-mpic/4080064/2a00000191c6bb5780d735ead75029a5efb2/orig',
          description: 'Надёжный городской мотоцикл — проверенный вариант для ежедневных поездок. Экономичный расход топлива и простая посадка.',
        },
        {
          id: 3,
          name: 'Yamaha Nouvo',
          price: '2200 ₽ / сутки',
          img: 'https://avatars.mds.yandex.net/get-mpic/4080064/2a00000191c6bb5780d735ead75029a5efb2/orig',
          description: 'Комфортный скутер с мягкой подвеской — удобно ездить по неровным дорогам и грунтовкам. Отличный выбор для прогулок.',
        },
        {
          id: 4,
          name: 'Honda Air Blade',
          price: '2500 ₽ / сутки',
          img: 'https://avatars.mds.yandex.net/get-mpic/4080064/2a00000191c6bb5780d735ead75029a5efb2/orig',
          description: 'Современный скутер с увеличенным багажником — удобно брать с собой вещи. Стильный дизайн и отличная динамика.',
        },
        {
          id: 5,
          name: 'Honda Winner X',
          price: '3500 ₽ / сутки',
          img: 'https://avatars.mds.yandex.net/get-mpic/4080064/2a00000191c6bb5780d735ead75029a5efb2/orig',
          description: 'Спортивный мотоцикл для уверенных водителей — отличная управляемость и мощность. Подходит для дальних поездок.',
        },
        {
          id: 6,
          name: 'Quad ATV 250',
          price: '6000 ₽ / сутки',
          img: 'https://avatars.mds.yandex.net/get-mpic/4080064/2a00000191c6bb5780d735ead75029a5efb2/orig',
          description: 'Квадроцикл для бездорожья — уверенно проходит песок, грязь и крутые подъёмы. Идеально для экстрим-маршрутов.',
        },
      ],
    },
    steps: {
      title: 'как забронировать',
      items: [
        {
          id: 1,
          num: '1',
          label: 'Выбери байк',
          text: 'Откройте каталог и изучите характеристики моделей: расход топлива, тип подвески и грузоподъемность. Выберите вариант, который лучше всего подходит под ваши планы — будь то прогулка по городу или поездка в горы.'
        },
        {
          id: 2,
          num: '2',
          label: 'Забронируй',
          text: 'Нажмите кнопку бронирования или напишите нам в Zalo или Telegram. Укажите желаемые даты аренды, модель техники и адрес доставки. Мы оперативно проверим наличие и подтвердим вашу заявку.'
        },
        {
          id: 3,
          num: '3',
          label: 'Получи ключи',
          text: 'Мы привезем выбранный байк прямо к вашему отелю или встретим вас в нашем офисе. Инструктор проведет краткий инструктаж по управлению и безопасности, а также поможет оформить документы.'
        },
        {
          id: 4,
          num: '4',
          label: 'Сдай байк',
          text: 'Верните технику в оговоренное время и место. Мы проведем совместный осмотр на предмет новых повреждений. Если все в порядке, залог будет возвращен вам сразу же любым удобным способом.'
        }
      ],
    },
    rentalRules: {
      title: 'Условия аренды',
      items: [
        {
          id: 1,
          icon: 'fuel',
          label: 'Топливо',
          text: 'Байк выдается и принимается с полным баком. При возврате с меньшим уровнем топлива стоимость недостающего объема удерживается из залога.'
        },
        {
          id: 2,
          icon: 'deposit',
          label: 'Залог',
          text: 'Требуется денежный залог на случай повреждений или штрафов. Залог возвращается сразу после сдачи байка при отсутствии претензий.'
        },
        {
          id: 3,
          icon: 'age',
          label: 'Возраст и права',
          text: 'Аренда доступна лицам от 18 лет с водительским удостоверением категории А. При бронировании могут запросить фото документов.'
        },
        {
          id: 4,
          icon: 'damage',
          label: 'Повреждения',
          text: 'Клиент несет ответственность за повреждения, возникшие по его вине. Стоимость ремонта удерживается из залога или оплачивается отдельно.'
        },
        {
          id: 5,
          icon: 'hours',
          label: 'Срок аренды',
          text: 'Минимальный срок аренды — 24 часа. Продление возможно при наличии свободных байков, оплата производится по суточному тарифу.'
        },
        {
          id: 6,
          icon: 'insurance',
          label: 'Страховка',
          text: 'Базовая страховка включена в стоимость. Расширенная страховка доступна по запросу за дополнительную плату для большей защиты.'
        }
      ],
    },
    banner: {
        title: 'экстрим-заезды',
        text: 'Хочешь не просто арендовать байк, а проехать по настоящим маршрутам — горные серпантины, перевалы и смотровые площадки? Присоединяйся к групповым заездам.',
        btn: 'смотреть заезды',
        to: '/rides',
        img: 'https://avatars.mds.yandex.net/get-mpic/4080064/2a00000191c6bb5780d735ead75029a5efb2/orig', // потом замени на свой баннер
    },
    footer: {
      title: 'baikomat',
      tagline: 'Аренда мототехники с доставкой и инструктажем. Работаем 24/7.',
      contactsLabel: 'Контакты',
      address: 'Бангкок, район Сукхумвит, ул. Сой 11, офис 304',
      phone: '+84 987 654 321',
      email: 'info@baikomat.vn',
      copyright: '© 2024 Baikomat. Все права защищены.',
    },
    rides: {
      hero: {
        title: 'заезды',
        subtitle: 'групповые маршруты по Вьетнаму',
        img: 'https://avatars.mds.yandex.net/get-mpic/4080064/2a00000191c6bb5780d735ead75029a5efb2/orig', // замени на своё фото
      },
      title: 'маршруты',
      btn: 'забронировать',
      items: [
        {
          id: 1,
          name: 'Хайван — перевалы',
          duration: '1 день',
          price: '3500 ₽',
          includes: ['гид', 'байк Winner X', 'топливо', 'фотосессия'],
        },
        {
          id: 2,
          name: 'Дельта Меконга',
          duration: '2 дня',
          price: '9000 ₽',
          includes: ['гид', 'байк Wave 110', 'ночлег', 'паромы'],
        },
        {
          id: 3,
          name: 'Северные горы, Хазянг',
          duration: '4 дня',
          price: '24 000 ₽',
          includes: ['гид', 'байк по выбору', 'ночлег', 'топливо', 'экипировка'],
        },
      ],
      steps: {
        title: 'как проходит заезд',
        items: [
          { id: 1, num: '1', label: 'Инструктаж', text: 'Перед выездом короткий брифинг: маршрут, правила движения, сигналы и безопасность. Проверяем экипировку и технику.' },
          { id: 2, num: '2', label: 'Заезд с гидом', text: 'Едем колонной с опытным гидом впереди. Темп — по самой медленной паре, остановки на смотровых площадках каждые 30–40 минут.' },
          { id: 3, num: '3', label: 'Фото и отдых', text: 'Кофе-брейки в локальных кафе, фото на лучших точках маршрута. Материалы с камеры гида — всем участникам в подарок.' },
        ],
      },
    },
  },

  en: {
    nav: [
      { to: '/en', label: 'home' },
      { to: '/en/rides', label: 'extreme' },
    ],
    main: {
      title: 'baikomat',
      subtitle: 'moto rental in Vietnam',
      btn: 'choose a bike',
    },
    catalog: {
      title: 'catalog',
      btn: 'book now',
      entry: {
        title: 'booking',
        subheader: 'Leave a request — we will contact you within 15 minutes and confirm your booking.',
        note: 'available 24/7',
        zalo: 'Zalo',
        telegram: 'Telegram',
        phone: '+84 987 654 321',
        zaloLink: 'https://vk.ru/mr.senoval',
        telegramLink: 'https://max.ru/u/134302148',
        phoneLink: 'tel:+84987654321',
      },
      items: [
        {
          id: 1,
          name: 'Honda Vision',
          price: '$25 / day',
          img: 'https://avatars.mds.yandex.net/get-mpic/4080064/2a00000191c6bb5780d735ead75029a5efb2/orig',
          description: 'Light and fuel-efficient scooter — perfect for city rides and short trips. Easy to handle, stable in traffic.',
        },
        {
          id: 2,
          name: 'Honda Wave 110',
          price: '$22 / day',
          img: 'https://avatars.mds.yandex.net/get-mpic/4080064/2a00000191c6bb5780d735ead75029a5efb2/orig',
          description: 'Reliable city bike — a proven choice for daily rides. Low fuel consumption and comfortable riding position.',
        },
        {
          id: 3,
          name: 'Yamaha Nouvo',
          price: '$27 / day',
          img: 'https://avatars.mds.yandex.net/get-mpic/4080064/2a00000191c6bb5780d735ead75029a5efb2/orig',
          description: 'Comfortable scooter with soft suspension — great for uneven roads and dirt tracks. Ideal for leisure rides.',
        },
        {
          id: 4,
          name: 'Honda Air Blade',
          price: '$31 / day',
          img: 'https://avatars.mds.yandex.net/get-mpic/4080064/2a00000191c6bb5780d735ead75029a5efb2/orig',
          description: 'Modern scooter with extra storage — convenient for carrying small items. Stylish design and smooth acceleration.',
        },
        {
          id: 5,
          name: 'Honda Winner X',
          price: '$43 / day',
          img: 'https://avatars.mds.yandex.net/get-mpic/4080064/2a00000191c6bb5780d735ead75029a5efb2/orig',
          description: 'Sporty motorcycle for confident riders — precise handling and strong performance. Great for longer routes.',
        },
        {
          id: 6,
          name: 'Quad ATV 250',
          price: '$75 / day',
          img: 'https://avatars.mds.yandex.net/get-mpic/4080064/2a00000191c6bb5780d735ead75029a5efb2/orig',
          description: 'Off-road ATV — handles sand, mud, and steep slopes with ease. Perfect for extreme tours.',
        },
      ],
    },
    steps: {
      title: 'how to book',
      items: [
        {
          id: 1,
          num: '1',
          label: 'Choose a Bike',
          text: 'Browse our catalog and review the specifications of each model, including fuel efficiency and suspension type. Select the vehicle that best matches your travel plans, whether for city rides or mountain trails.'
        },
        {
          id: 2,
          num: '2',
          label: 'Book It',
          text: 'Click the booking button or contact us via Zalo or Telegram. Specify your desired rental dates, the chosen model, and your delivery address. We will quickly check availability and confirm your reservation.'
        },
        {
          id: 3,
          num: '3',
          label: 'Get the Keys',
          text: 'We will deliver the selected bike directly to your hotel or meet you at our office. Our instructor will provide a brief briefing on operation and safety, and assist with the paperwork.'
        },
        {
          id: 4,
          num: '4',
          label: 'Return It',
          text: 'Return the vehicle at the agreed time and location. We will conduct a joint inspection for any new damages. If everything is in order, your deposit will be refunded immediately via your preferred method.'
        }
      ],
    },
    rentalRules: {
      title: 'Rental Terms',
      items: [
        {
          id: 1,
          icon: 'fuel',
          label: 'Fuel Policy',
          text: 'The bike is provided and returned with a full tank. If returned with less fuel, the missing amount will be deducted from the deposit.'
        },
        {
          id: 2,
          icon: 'deposit',
          label: 'Security Deposit',
          text: 'A cash deposit is required to cover potential damages or fines. The deposit is refunded immediately after return if no issues are found.'
        },
        {
          id: 3,
          icon: 'age',
          label: 'Age & License',
          text: 'Rental is available to persons aged 18+ with a valid Class A driver’s license. Document photos may be requested during booking.'
        },
        {
          id: 4,
          icon: 'damage',
          label: 'Damage Policy',
          text: 'The client is responsible for any damage caused by their negligence. Repair costs will be deducted from the deposit or billed separately.'
        },
        {
          id: 5,
          icon: 'hours',
          label: 'Rental Duration',
          text: 'Minimum rental period is 24 hours. Extensions are possible if bikes are available, charged at the daily rate.'
        },
        {
          id: 6,
          icon: 'insurance',
          label: 'Insurance Coverage',
          text: 'Basic insurance is included in the price. Extended insurance is available upon request for an additional fee for greater protection.'
        }
      ],
    },
    banner: {
      title: 'extreme rides',
      text: 'Want more than just renting a bike? Join our guided group rides — mountain passes, scenic roads and viewpoints included.',
      btn: 'view rides',
      to: '/en/rides',
      img: 'https://avatars.mds.yandex.net/get-mpic/4080064/2a00000191c6bb5780d735ead75029a5efb2/orig',
    },
    footer: {
      title: 'baikomat',
      address: 'Bangkok, Sukhumvit Area, Soi 11, Office 304',
      phone: '+84 987 654 321',
      tagline: 'Moto rental with delivery and briefing. Available 24/7.',
      contactsLabel: 'Contacts',
      email: 'info@baikomat.vn',
      copyright: '© 2024 Baikomat. All rights reserved.',
    },
    rides: {
      hero: {
        title: 'rides',
        subtitle: 'group tours across Vietnam',
        img: 'https://avatars.mds.yandex.net/get-mpic/4080064/2a00000191c6bb5780d735ead75029a5efb2/orig',
      },
      title: 'routes',
      btn: 'book now',
      items: [
        {
          id: 1,
          name: 'Hai Van — Passes',
          duration: '1 day',
          price: '$43',
          includes: ['guide', 'Winner X bike', 'fuel', 'photo session'],
        },
        {
          id: 2,
          name: 'Mekong Delta',
          duration: '2 days',
          price: '$110',
          includes: ['guide', 'Wave 110 bike', 'stay', 'ferries'],
        },
        {
          id: 3,
          name: 'Northern Mountains, Ha Giang',
          duration: '4 days',
          price: '$290',
          includes: ['guide', 'bike of choice', 'stay', 'fuel', 'gear'],
        },
      ],
      steps: {
        title: 'how the ride goes',
        items: [
          { id: 1, num: '1', label: 'Briefing', text: 'A short pre-ride briefing: route, traffic rules, hand signals and safety. We check your gear and the bike.' },
          { id: 2, num: '2', label: 'Guided Ride', text: 'We ride in a column with an experienced lead guide. The pace follows the slowest rider, with viewpoint stops every 30–40 minutes.' },
          { id: 3, num: '3', label: 'Photos & Rest', text: 'Coffee breaks at local cafés and photos at the best route spots. Shots from the guide\'s camera are a gift for every participant.' },
        ],
      },
    },
  },

  vn: {
    nav: [
      { to: '/vn', label: 'trang chủ' },
      { to: '/vn/rides', label: 'thám hiểm' },
    ],
    main: {
      title: 'baikomat',
      subtitle: 'thuê xe máy ở Việt Nam',
      btn: 'chọn xe',
    },
    catalog: {
      title: 'danh mục',
      btn: 'đặt xe',
      entry: {
        title: 'đặt xe',
        subheader: 'Để lại yêu cầu — chúng tôi sẽ liên hệ trong vòng 15 phút và xác nhận đặt xe.',
        note: 'hỗ trợ 24/7',
        zalo: 'Zalo',
        telegram: 'Telegram',
        phone: '+84 987 654 321',
        zaloLink: 'https://vk.ru/mr.senoval',
        telegramLink: 'https://max.ru/u/134302148',
        phoneLink: 'tel:+84987654321',
      },
      items: [
        {
          id: 1,
          name: 'Honda Vision',
          price: '600 000 ₫ / ngày',
          img: 'https://avatars.mds.yandex.net/get-mpic/4080064/2a00000191c6bb5780d735ead75029a5efb2/orig',
          description: 'Xe ga nhẹ và tiết kiệm nhiên liệu — lý tưởng cho thành phố và những chuyến đi ngắn. Dễ lái, ổn định trong giao thông.',
        },
        {
          id: 2,
          name: 'Honda Wave 110',
          price: '550 000 ₫ / ngày',
          img: 'https://avatars.mds.yandex.net/get-mpic/4080064/2a00000191c6bb5780d735ead75029a5efb2/orig',
          description: 'Xe máy tin cậy cho thành phố — lựa chọn phù hợp cho những chuyến đi hàng ngày. Tiết kiệm nhiên liệu và thoải mái khi lái.',
        },
        {
          id: 3,
          name: 'Yamaha Nouvo',
          price: '650 000 ₫ / ngày',
          img: 'https://avatars.mds.yandex.net/get-mpic/4080064/2a00000191c6bb5780d735ead75029a5efb2/orig',
          description: 'Xe ga thoải mái với hệ thống treo mềm — dễ đi trên đường gồ ghề và đường đất. Phù hợp để đi dạo.',
        },
        {
          id: 4,
          name: 'Honda Air Blade',
          price: '750 000 ₫ / ngày',
          img: 'https://avatars.mds.yandex.net/get-mpic/4080064/2a00000191c6bb5780d735ead75029a5efb2/orig',
          description: 'Xe ga hiện đại với khoang đồ rộng — thuận tiện để mang theo đồ. Thiết kế sang trọng và phần động lực mạnh mẽ.',
        },
        {
          id: 5,
          name: 'Honda Winner X',
          price: '1 100 000 ₫ / ngày',
          img: 'https://avatars.mds.yandex.net/get-mpic/4080064/2a00000191c6bb5780d735ead75029a5efb2/orig',
          description: 'Xe moto thể thao cho người lái tự tin — khả năng điều khiển chính xác và lực đẩy mạnh. Phù hợp đi xa.',
        },
        {
          id: 6,
          name: 'Quad ATV 250',
          price: '1 800 000 ₫ / ngày',
          img: 'https://avatars.mds.yandex.net/get-mpic/4080064/2a00000191c6bb5780d735ead75029a5efb2/orig',
          description: 'ATV cho đường địa hình — vượt qua cát, bùn và dốc dựng dễ dàng. Lý tưởng cho tour cảm xúc mạnh.',
        },
      ],
    },
    steps: {
      title: 'cách đặt xe',
      items: [
        {
          id: 1,
          num: '1',
          label: 'Chọn Xe',
          text: 'Duyệt qua danh mục và xem xét các thông số kỹ thuật của từng mẫu, bao gồm tiêu thụ nhiên liệu và loại hệ thống treo. Chọn phương tiện phù hợp nhất với kế hoạch du lịch của bạn, cho dù là đi lại trong thành phố hay đường núi.'
        },
        {
          id: 2,
          num: '2',
          label: 'Đặt Hàng',
          text: 'Nhấp vào nút đặt hàng hoặc liên hệ với chúng tôi qua Zalo hoặc Telegram. Cung cấp ngày thuê mong muốn, mẫu xe đã chọn và địa chỉ giao hàng. Chúng tôi sẽ kiểm tra nhanh chóng và xác nhận đặt hàng của bạn.'
        },
        {
          id: 3,
          num: '3',
          label: 'Nhận Xe',
          text: 'Chúng tôi sẽ giao xe đã chọn trực tiếp tới khách sạn của bạn hoặc gặp bạn tại văn phòng của chúng tôi. Người hướng dẫn sẽ cung cấp buổi hướng dẫn ngắn về cách sử dụng và an toàn, đồng thời hỗ trợ hoàn thành các thủ tục.'
        },
        {
          id: 4,
          num: '4',
          label: 'Trả Xe',
          text: 'Trả xe tại thời gian và địa điểm đã thỏa thuận. Chúng tôi sẽ tiến hành kiểm tra chung về các vết hư hỏng mới. Nếu mọi thứ đều ổn, tiền đặt cọc sẽ được hoàn trả ngay lập tức theo phương thức bạn yêu thích.'
        }
      ],
    },
    rentalRules: {
      title: 'Điều khoản thuê xe',
      items: [
        {
          id: 1,
          icon: 'fuel',
          label: 'Nhiên liệu',
          text: 'Xe được giao và nhận lại với bình xăng đầy. Nếu trả xe với mức nhiên liệu thấp hơn, chi phí phần còn thiếu sẽ được trừ từ tiền cọc.'
        },
        {
          id: 2,
          icon: 'deposit',
          label: 'Tiền cọc',
          text: 'Yêu cầu nộp tiền cọc để đảm bảo các chi phí có thể phát sinh. Tiền cọc sẽ được hoàn trả ngay sau khi trả xe nếu không có vấn đề gì.'
        },
        {
          id: 3,
          icon: 'age',
          label: 'Tuổi và giấy phép',
          text: 'Thuê xe dành cho người từ 18 tuổi trở lên có bằng lái xe loại A. Khi đặt xe có thể yêu cầu cung cấp ảnh các tài liệu.'
        },
        {
          id: 4,
          icon: 'damage',
          label: 'Thiệt hại',
          text: 'Khách hàng chịu trách nhiệm với các thiệt hại xảy ra do bất cẩn của mình. Chi phí sửa chữa sẽ được trừ từ tiền cọc hoặc thanh toán riêng.'
        },
        {
          id: 5,
          icon: 'hours',
          label: 'Thời hạn thuê',
          text: 'Thời gian thuê tối thiểu là 24 giờ. Có thể gia hạn nếu có xe trống, chi phí tính theo giá thuê hàng ngày.'
        },
        {
          id: 6,
          icon: 'insurance',
          label: 'Bảo hiểm',
          text: 'Bảo hiểm cơ bản đã bao gồm trong giá thuê. Bảo hiểm mở rộng có thể được yêu cầu với phí bổ sung để bảo vệ toàn diện hơn.'
        }
      ],
    },
    banner: {
      title: 'chuyến đi mạo hiểm',
      text: 'Không chỉ muốn thuê xe? Tham gia chuyến đi nhóm cùng chúng tôi — đèo núi, cung đường đẹp và những điểm ngắm cảnh tuyệt vời.',
      btn: 'xem chuyến đi',
      to: '/vn/rides',
      img: 'https://avatars.mds.yandex.net/get-mpic/4080064/2a00000191c6bb5780d735ead75029a5efb2/orig',
    },
    footer: {
      title: 'baikomat',
      address: 'Bangkok, khu vực Sukhumvit, đường Soi 11, văn phòng 304',
      phone: '+84 987 654 321',
      tagline: 'Thuê xe máy với giao xe và hướng dẫn. Hoạt động 24/7.',
      contactsLabel: 'Liên hệ',
      email: 'info@baikomat.vn',
      copyright: '© 2024 Baikomat. Tất cả quyền được bảo lưu.',
    },
    rides: {
      hero: {
        title: 'chuyến đi',
        subtitle: 'các cung đường nhóm khắp Việt Nam',
        img: 'https://avatars.mds.yandex.net/get-mpic/4080064/2a00000191c6bb5780d735ead75029a5efb2/orig',
      },
      title: 'tuyến đường',
      btn: 'đặt xe',
      items: [
        {
          id: 1,
          name: 'Hải Vân — đèo',
          duration: '1 ngày',
          price: '1 100 000 ₫',
          includes: ['hướng dẫn viên', 'xe Winner X', 'xăng', 'chụp ảnh'],
        },
        {
          id: 2,
          name: 'Đồng bằng sông Cửu Long',
          duration: '2 ngày',
          price: '2 700 000 ₫',
          includes: ['hướng dẫn viên', 'xe Wave 110', 'nghỉ đêm', 'phà'],
        },
        {
          id: 3,
          name: 'Núi phía Bắc, Hà Giang',
          duration: '4 ngày',
          price: '7 200 000 ₫',
          includes: ['hướng dẫn viên', 'xe tùy chọn', 'nghỉ đêm', 'xăng', 'trang bị'],
        },
      ],
      steps: {
        title: 'chuyến đi diễn ra như thế nào',
        items: [
          { id: 1, num: '1', label: 'Hướng dẫn', text: 'Trước khi khởi hành có buổi hướng dẫn ngắn: lộ trình, luật giao thông, tín hiệu và an toàn. Kiểm tra trang bị và xe.' },
          { id: 2, num: '2', label: 'Chạy cùng hướng dẫn viên', text: 'Đi thành đoàn với hướng dẫn viên giàu kinh nghiệm dẫn đầu. Tốc độ theo người chậm nhất, dừng ngắm cảnh mỗi 30–40 phút.' },
          { id: 3, num: '3', label: 'Ảnh và nghỉ ngơi', text: 'Ghé cà phê địa phương, chụp ảnh tại những điểm đẹp nhất trên lộ trình. Ảnh từ máy quay của hướng dẫn viên là quà tặng cho mọi thành viên.' },
        ],
      },
    },
  },
};

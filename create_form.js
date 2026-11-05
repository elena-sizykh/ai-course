/**
 * Запустить: script.google.com → Новый проект → вставить → Run → createFeedbackForm
 * После запуска ссылка на форму появится в Logs (Ctrl+Enter или View → Logs)
 */
function createFeedbackForm() {

  var form = FormApp.create('Обратная связь — курс «ИИ в жизнь»');
  form.setDescription('Это займёт около 5 минут. Текстовые вопросы — необязательные, их можно пропустить.');
  form.setCollectEmail(false);
  form.setLimitOneResponsePerUser(false);
  form.setShuffleQuestions(false);
  form.setConfirmationMessage('Спасибо! Твои ответы получены. Это очень помогает сделать следующий поток лучше.');

  var toolOptions = [
    'Уже использую / буду использовать активно',
    'Попробую, но не уверен(а)',
    'Интересно, но пока не вижу применения',
    'Скорее всего не буду использовать',
    'Не успел(а) изучить этот инструмент'
  ];


  // ═══════════════════════════════════════════
  //  СЕКЦИЯ 1 — Инструменты курса
  // ═══════════════════════════════════════════
  form.addPageBreakItem()
      .setTitle('Инструменты курса')
      .setHelpText('По каждому инструменту — один вопрос, один клик.');

  form.addMultipleChoiceItem()
      .setTitle('Perplexity — насколько полезен этот инструмент лично для тебя?')
      .setChoiceValues(toolOptions)
      .setRequired(true);

  form.addMultipleChoiceItem()
      .setTitle('NotebookLM — насколько полезен этот инструмент лично для тебя?')
      .setChoiceValues(toolOptions)
      .setRequired(true);

  form.addMultipleChoiceItem()
      .setTitle('Gemini — насколько полезен этот инструмент лично для тебя?')
      .setChoiceValues(toolOptions)
      .setRequired(true);

  form.addMultipleChoiceItem()
      .setTitle('ChatGPT — насколько полезен этот инструмент лично для тебя?')
      .setChoiceValues(toolOptions)
      .setRequired(true);

  form.addMultipleChoiceItem()
      .setTitle('Claude — насколько полезен этот инструмент лично для тебя?')
      .setChoiceValues(toolOptions)
      .setRequired(true);


  // ═══════════════════════════════════════════
  //  СЕКЦИЯ 2 — Урок по лендингам и презентациям
  // ═══════════════════════════════════════════
  form.addPageBreakItem()
      .setTitle('Урок по лендингам и презентациям')
      .setHelpText('Этот урок был в записи — несколько вопросов именно по нему.');

  form.addMultipleChoiceItem()
      .setTitle('Удалось ли посмотреть урок по лендингам и презентациям?')
      .setChoiceValues(['Да, полностью', 'Частично', 'Ещё не смотрел(а)'])
      .setRequired(true);

  form.addScaleItem()
      .setTitle('Насколько урок был полезен лично для тебя?')
      .setBounds(1, 5)
      .setLabels('Совсем не полезен', 'Очень полезен')
      .setRequired(true);

  form.addScaleItem()
      .setTitle('Насколько понятно подан материал?')
      .setBounds(1, 5)
      .setLabels('Совсем непонятно', 'Всё понятно')
      .setRequired(true);

  form.addMultipleChoiceItem()
      .setTitle('Было ли что-то принципиально новое для тебя в этом уроке?')
      .setChoiceValues([
        'Всё было новым',
        'Больше половины было новым',
        'Примерно половина',
        'Большую часть уже знал(а)'
      ])
      .setRequired(true);

  form.addMultipleChoiceItem()
      .setTitle('Формат записи или лучше вживую?')
      .setChoiceValues([
        'Запись удобнее — смотрю в своём темпе',
        'Лучше вживую — можно задать вопрос',
        'Мне всё равно',
        'Хотелось бы и запись, и живую сессию с разбором'
      ])
      .setRequired(true);

  form.addMultipleChoiceItem()
      .setTitle('Пробовал(а) ли что-то сделать сам(а) после урока?')
      .setChoiceValues([
        'Да, уже сделал(а)',
        'Ещё нет, но планирую',
        'Пока не понятно с чего начать',
        'Не планирую'
      ])
      .setRequired(true);

  form.addMultipleChoiceItem()
      .setTitle('Будешь пользоваться этим инструментом (создание сайтов/лендингов с помощью Claude)?')
      .setChoiceValues(['Да, однозначно', 'Скорее да', 'Не уверен(а)', 'Скорее нет'])
      .setRequired(true);

  form.addParagraphTextItem()
      .setTitle('Что ещё хотелось бы раскрыть по этой теме?')
      .setRequired(false);


  // ═══════════════════════════════════════════
  //  СЕКЦИЯ 3 — Формат и длительность
  // ═══════════════════════════════════════════
  form.addPageBreakItem()
      .setTitle('Формат и длительность');

  form.addMultipleChoiceItem()
      .setTitle('Длительность урока 1 (живая сессия — мышление, инструменты, кейсы)?')
      .setChoiceValues(['Слишком коротко', 'Ровно столько, сколько нужно', 'Слегка затянуто', 'Слишком долго'])
      .setRequired(true);

  form.addMultipleChoiceItem()
      .setTitle('Длительность урока 2 (живая сессия — продолжение инструментов)?')
      .setChoiceValues(['Слишком коротко', 'Ровно столько, сколько нужно', 'Слегка затянуто', 'Слишком долго'])
      .setRequired(true);

  form.addCheckboxItem()
      .setTitle('Формат подачи материала на живых уроках — выбери всё, что подходит')
      .setChoiceValues([
        'В самый раз, всё устраивало',
        'Хотелось больше живого общения и дискуссии',
        'Нужно больше практических примеров',
        'Слишком много теории',
        'Хотелось больше практики прямо на уроке',
        'Нужно больше пауз для вопросов',
        'Хотелось шпаргалку или раздаточный материал',
        'Слишком быстрый темп подачи',
        'Хотелось повторения ключевых моментов в конце',
        'Хотелось домашнее задание или задание для самостоятельной практики'
      ])
      .setRequired(false);

  form.addParagraphTextItem()
      .setTitle('Рекомендации по формату или длительности — что изменить?')
      .setRequired(false);


  // ═══════════════════════════════════════════
  //  СЕКЦИЯ 4 — Общая оценка
  // ═══════════════════════════════════════════
  form.addPageBreakItem()
      .setTitle('Общая оценка');

  form.addScaleItem()
      .setTitle('Общая оценка курса')
      .setBounds(1, 10)
      .setLabels('Очень слабо', 'Отлично')
      .setRequired(true);

  form.addMultipleChoiceItem()
      .setTitle('Что было новым для тебя в курсе в целом?')
      .setChoiceValues([
        'Всё было новым — я полный новичок',
        'Больше половины было новым',
        'Примерно половина',
        'Большую часть уже знал(а)'
      ])
      .setRequired(true);

  form.addMultipleChoiceItem()
      .setTitle('Оправдал ли курс твои ожидания?')
      .setChoiceValues([
        'Превзошёл ожидания',
        'Полностью соответствовал',
        'Частично соответствовал',
        'Не то, что ожидал(а)'
      ])
      .setRequired(true);

  form.addParagraphTextItem()
      .setTitle('Что ожидал(а), но не получил(а)?')
      .setRequired(false);

  form.addMultipleChoiceItem()
      .setTitle('Общий темп курса')
      .setChoiceValues([
        'Слишком быстро, не успевал(а) усваивать',
        'Комфортный ритм',
        'Можно было двигаться быстрее'
      ])
      .setRequired(true);

  form.addMultipleChoiceItem()
      .setTitle('Удобство онлайн-формата (Zoom / Telegram)')
      .setChoiceValues([
        'Очень удобно, всё устраивало',
        'Предпочёл(а) бы оффлайн',
        'Мне всё равно',
        'Удобнее было бы только в записи, без живых сессий'
      ])
      .setRequired(true);


  // ═══════════════════════════════════════════
  //  СЕКЦИЯ 5 — Применимость в жизни
  // ═══════════════════════════════════════════
  form.addPageBreakItem()
      .setTitle('Применимость в жизни');

  form.addCheckboxItem()
      .setTitle('Что уже попробовал(а) или точно попробуешь после курса? (выбери всё, что подходит)')
      .setChoiceValues([
        'Поиск информации через Perplexity',
        'Изучение книги или документа через NotebookLM',
        'Работа с Gmail / Google Docs через Gemini',
        'Генерация изображений через ChatGPT',
        'Написание текстов / постов через Claude',
        'Анализ документов через Claude',
        'Создание сайта или лендинга через Claude',
        'Создание презентации через Claude',
        'ИИ как дневник или для эмоциональной разгрузки',
        'Управление задачами и планирование',
        'Ещё ничего не пробовал(а)'
      ])
      .setRequired(false);

  form.addCheckboxItem()
      .setTitle('Что мешает применять инструменты в реальной жизни? (выбери всё, что подходит)')
      .setChoiceValues([
        'Не хватает уверенности, боюсь ошибиться',
        'Нет времени попробовать',
        'Не знаю с чего начать',
        'Некоторые инструменты платные',
        'Не понимаю как применить к своим задачам',
        'Ничего не мешает — уже применяю'
      ])
      .setRequired(false);

  form.addScaleItem()
      .setTitle('Насколько вероятно, что ты порекомендуешь этот курс?')
      .setBounds(1, 10)
      .setLabels('Точно не буду', 'Однозначно порекомендую')
      .setRequired(true);


  // ═══════════════════════════════════════════
  //  СЕКЦИЯ 6 — Напоследок
  // ═══════════════════════════════════════════
  form.addPageBreakItem()
      .setTitle('Напоследок');

  form.addParagraphTextItem()
      .setTitle('Каких тем не хватило или что хотелось бы добавить в программу?')
      .setRequired(false);

  form.addParagraphTextItem()
      .setTitle('Что было непонятно или хотелось больше деталей по любому из блоков?')
      .setRequired(false);

  form.addParagraphTextItem()
      .setTitle('Главный инсайт или мысль, которую уносишь с курса')
      .setRequired(false);

  form.addParagraphTextItem()
      .setTitle('Отзыв о курсе в свободной форме')
      .setHelpText('Можем использовать анонимно для рассказа о курсе — только с твоего согласия')
      .setRequired(false);

  form.addMultipleChoiceItem()
      .setTitle('Можно ли использовать твои слова как отзыв?')
      .setChoiceValues(['Да, можно с именем', 'Только анонимно', 'Нет'])
      .setRequired(false);


  // ── Итог ──
  Logger.log('✅ Форма создана!');
  Logger.log('Редактировать: ' + form.getEditUrl());
  Logger.log('Ссылка для участников: ' + form.getPublishedUrl());
}

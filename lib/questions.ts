export interface Question {
  id: number;
  category:
    | "personal"
    | "relationships"
    | "life"
    | "fun"
    | "deep"
    | "food"
    | "travel"
    | "animals"
    | "world"
    | "entertainment"
    | "philosophy"
    | "movies"
    | "ethics"
    | "quirky"
    | "taboo"
    | "random"
    | "self-reflection";
  translations: {
    en: string;
    ru: string;
  };
}

export const questions: Question[] = [
  {
    id: 1,
    category: "personal",
    translations: {
      en: "What's the most embarrassing thing you've ever done in secret?",
      ru: "Что самое постыдное ты когда-либо делал(а) втайне?",
    },
  },
  {
    id: 2,
    category: "personal",
    translations: {
      en: "What's your most forbidden dream?",
      ru: "Какая твоя самая запретная мечта?",
    },
  },
  {
    id: 3,
    category: "personal",
    translations: {
      en: "What would you do if you were invisible for 24 hours?",
      ru: "Что бы ты сделал(а), если бы оказался(ась) невидимым на 24 часа?",
    },
  },
  {
    id: 4,
    category: "personal",
    translations: {
      en: "Name a person you envy. Why?",
      ru: "Назови человека, которому ты завидуешь. Почему?",
    },
  },
  {
    id: 5,
    category: "personal",
    translations: {
      en: "What did you lie to your parents about and still haven't confessed?",
      ru: "О чём ты солгал(а) родителям и до сих пор не признался(ась)?",
    },
  },
  {
    id: 6,
    category: "personal",
    translations: {
      en: "What would you change about your appearance if there were no limits?",
      ru: "Что бы ты изменил(а) в своей внешности, если бы не было границ?",
    },
  },
  {
    id: 7,
    category: "personal",
    translations: {
      en: "What's the strangest thought that has ever crossed your mind?",
      ru: "Какая самая странная мысль приходила тебе в голову?",
    },
  },
  {
    id: 8,
    category: "personal",
    translations: {
      en: "Was there a time you framed someone and got away with it?",
      ru: "Был ли случай, когда ты подставил(а) кого-то и остался(ась) безнаказанным(ой)?",
    },
  },
  {
    id: 9,
    category: "personal",
    translations: {
      en: "Which person would you like to spend one night with, with no consequences?",
      ru: "С каким человеком ты бы хотел(а) провести одну ночь без последствий?",
    },
  },
  {
    id: 10,
    category: "personal",
    translations: {
      en: "What would you do if you found out the world would end tomorrow?",
      ru: "Что бы ты сделал(а), если бы узнал(а), что завтра конец света?",
    },
  },
  {
    id: 11,
    category: "personal",
    translations: {
      en: "What part of your character do you dislike but do nothing to change?",
      ru: "Какая часть твоего характера тебе не нравится, но ты ничего не меняешь?",
    },
  },
  {
    id: 12,
    category: "personal",
    translations: {
      en: "Who was your first love that no one knows about?",
      ru: "Кто был твоей первой любовью, о которой никто не знает?",
    },
  },
  {
    id: 13,
    category: "personal",
    translations: {
      en: "What decision of yours led to bad consequences, but you still don't regret it?",
      ru: "Какое твоё решение привело к плохим последствиям, но ты всё равно не жалеешь?",
    },
  },
  {
    id: 14,
    category: "personal",
    translations: {
      en: "What really scares you in life?",
      ru: "Что тебя действительно пугает в жизни?",
    },
  },
  {
    id: 15,
    category: "personal",
    translations: {
      en: "What do you do when you feel lonely?",
      ru: "Что ты делаешь, когда тебе одиноко?",
    },
  },
  {
    id: 16,
    category: "personal",
    translations: {
      en: "What would you never do, even for a million?",
      ru: "Что бы ты никогда не сделал(а), даже за миллион?",
    },
  },
  {
    id: 17,
    category: "personal",
    translations: {
      en: "When was the last time you cried, and why?",
      ru: "Когда ты в последний раз плакал(а), и почему?",
    },
  },
  {
    id: 18,
    category: "personal",
    translations: {
      en: "What did you hide from teachers or superiors?",
      ru: "Что ты скрывал(а) от учителей или начальства?",
    },
  },
  {
    id: 19,
    category: "personal",
    translations: {
      en: "What was the strangest dream you remember?",
      ru: "Какой у тебя был самый странный сон, который ты помнишь?",
    },
  },
  {
    id: 20,
    category: "personal",
    translations: {
      en: "Who would you not want to be alone in a room with?",
      ru: "С кем бы ты не хотел(а) оказаться в одной комнате наедине?",
    },
  },
  {
    id: 21,
    category: "personal",
    translations: {
      en: "What do you consider your biggest mistake in life?",
      ru: "Что ты считаешь своей самой большой ошибкой в жизни?",
    },
  },
  {
    id: 22,
    category: "personal",
    translations: {
      en: "What do you want to do but are afraid to start?",
      ru: "Что ты хочешь сделать, но боишься начать?",
    },
  },
  {
    id: 23,
    category: "personal",
    translations: {
      en: "What is your secret habit that no one knows about?",
      ru: "Какая твоя тайная привычка, о которой никто не знает?",
    },
  },
  {
    id: 24,
    category: "personal",
    translations: {
      en: "Which person changed your life forever, and why?",
      ru: "Какой человек навсегда изменил твою жизнь, и почему?",
    },
  },
  {
    id: 25,
    category: "personal",
    translations: {
      en: "What are you ashamed of in your appearance?",
      ru: "Чего ты стыдишься в своей внешности?",
    },
  },
  {
    id: 26,
    category: "personal",
    translations: {
      en: "Which moment would you rewrite if you could go back in time?",
      ru: "Какой момент ты бы переписал(а), будь возможность вернуться в прошлое?",
    },
  },
  {
    id: 27,
    category: "personal",
    translations: {
      en: "What did you do out of revenge?",
      ru: "Что ты сделал(а) из мести?",
    },
  },
  {
    id: 28,
    category: "personal",
    translations: {
      en: "What turns you on, but you hide it?",
      ru: "Что тебя заводит, но ты это скрываешь?",
    },
  },
  {
    id: 29,
    category: "personal",
    translations: {
      en: "What do you think people might hate you for?",
      ru: "Как ты думаешь, за что тебя могут ненавидеть?",
    },
  },
  {
    id: 30,
    category: "personal",
    translations: {
      en: "What would you like to erase from your memory forever?",
      ru: "Что бы ты хотел(а) стереть из памяти навсегда?",
    },
  },
  {
    id: 31,
    category: "personal",
    translations: {
      en: "What childhood trauma still affects you?",
      ru: "Какая твоя детская травма влияет на тебя до сих пор?",
    },
  },
  {
    id: 32,
    category: "personal",
    translations: {
      en: "What would you do if you could go back 5 years?",
      ru: "Что бы ты сделал(а), если бы мог(ла) вернуться на 5 лет назад?",
    },
  },
  {
    id: 33,
    category: "personal",
    translations: {
      en: "What would you like to change in your family?",
      ru: "Что ты хотел(а) бы изменить в своей семье?",
    },
  },
  {
    id: 34,
    category: "personal",
    translations: {
      en: "What did you do under the influence of fear?",
      ru: "Что ты сделал(а) под влиянием страха?",
    },
  },
  {
    id: 35,
    category: "personal",
    translations: {
      en: "What was your worst date?",
      ru: "Какая у тебя была худшая встреча/свидание?",
    },
  },
  {
    id: 36,
    category: "personal",
    translations: {
      en: "What do you think when you look in the mirror?",
      ru: "Что ты думаешь, когда смотришь в зеркало?",
    },
  },
  {
    id: 37,
    category: "personal",
    translations: {
      en: "When was the last time you did something out of spite?",
      ru: "Когда ты в последний раз делал(а) что-то назло?",
    },
  },
  {
    id: 38,
    category: "personal",
    translations: {
      en: "What question are you afraid to hear in this game?",
      ru: "Какой вопрос ты боишься услышать в этой игре?",
    },
  },
  {
    id: 39,
    category: "personal",
    translations: {
      en: "How would you feel about a person who cheated on you?",
      ru: "Что ты чувствовал(а) бы к человеку, который тебе изменил?",
    },
  },
  {
    id: 40,
    category: "personal",
    translations: {
      en: "Have you ever betrayed someone who trusted you?",
      ru: "Ты когда-нибудь предавал(а) кого-то, кто доверял тебе?",
    },
  },
  {
    id: 41,
    category: "personal",
    translations: {
      en: "Have you ever had a fantasy that you considered 'abnormal'?",
      ru: 'Была ли у тебя фантазия, которую ты считал(а) "ненормальной"?',
    },
  },
  {
    id: 42,
    category: "personal",
    translations: {
      en: "What attracts you to people more than appearance?",
      ru: "Что тебя цепляет в людях больше, чем внешность?",
    },
  },
  {
    id: 43,
    category: "personal",
    translations: {
      en: "Who was your secret idol in your teenage years?",
      ru: "Кто был твоим тайным кумиром в подростковом возрасте?",
    },
  },
  {
    id: 44,
    category: "personal",
    translations: {
      en: "Have you ever had an addiction that no one knows about?",
      ru: "Была ли у тебя зависимость, о которой никто не знает?",
    },
  },
  {
    id: 45,
    category: "personal",
    translations: {
      en: "When were you the most cruel person in your life?",
      ru: "Когда ты был(а) самым жестоким человеком в своей жизни?",
    },
  },
  {
    id: 46,
    category: "personal",
    translations: {
      en: "What would you never tell your parents?",
      ru: "Что бы ты никогда не рассказал(а) своим родителям?",
    },
  },
  {
    id: 47,
    category: "personal",
    translations: {
      en: "Have you ever used someone for personal gain?",
      ru: "Ты когда-нибудь использовал(а) кого-то ради выгоды?",
    },
  },
  {
    id: 48,
    category: "personal",
    translations: {
      en: "What do you want to change about yourself but can't because of fear?",
      ru: "Что ты хочешь изменить в себе, но не можешь из-за страха?",
    },
  },
  {
    id: 49,
    category: "personal",
    translations: {
      en: "How do you feel when you make a mistake but no one sees?",
      ru: "Что ты чувствуешь, когда совершаешь ошибку, но никто не видит?",
    },
  },
  {
    id: 50,
    category: "personal",
    translations: {
      en: "What would you say to your 10-year-old self?",
      ru: "Что бы ты сказал(а) себе в 10 лет?",
    },
  },
  {
    id: 51,
    category: "personal",
    translations: {
      en: "What would you do if you could be anyone for a day?",
      ru: "Что бы ты сделал(а), если бы мог(ла) быть кем угодно на один день?",
    },
  },
  {
    id: 52,
    category: "personal",
    translations: {
      en: "What gives you pleasure, but you hide it?",
      ru: "Что тебе доставляет удовольствие, но ты это скрываешь?",
    },
  },
  {
    id: 53,
    category: "personal",
    translations: {
      en: "How do you feel when people applaud you?",
      ru: "Что ты чувствуешь, когда тебе аплодируют?",
    },
  },
  {
    id: 54,
    category: "personal",
    translations: {
      en: "What would you change in your soul?",
      ru: "Что бы ты изменил(а) в своей душе?",
    },
  },
  {
    id: 55,
    category: "personal",
    translations: {
      en: "When did you lie out of pity?",
      ru: "Когда ты врал(а) из жалости?",
    },
  },
  {
    id: 56,
    category: "personal",
    translations: {
      en: "What words from childhood did you remember for life?",
      ru: "Какие слова в детстве ты запомнил(а) на всю жизнь?",
    },
  },
  {
    id: 57,
    category: "personal",
    translations: {
      en: "What do you consider your real weak spot?",
      ru: "Что ты считаешь своим настоящим слабым местом?",
    },
  },
  {
    id: 58,
    category: "personal",
    translations: {
      en: "What would you say to a person you offended but didn't apologize to?",
      ru: "Что бы ты сказал(а) человеку, которого обидел(а), но не извинился(ась)?",
    },
  },
  {
    id: 59,
    category: "personal",
    translations: {
      en: "What behavior in other people do you condemn, but you yourself sometimes exhibit?",
      ru: "Какое поведение в других людях ты осуждаешь, но сам(а) иногда проявляешь?",
    },
  },
  {
    id: 60,
    category: "personal",
    translations: {
      en: "What would you do if you found out you had a week to live?",
      ru: "Что бы ты сделал(а), если бы узнал(а), что тебе осталось жить неделю?",
    },
  },
  {
    id: 61,
    category: "personal",
    translations: {
      en: "What emotion prevails in you when you are alone?",
      ru: "Какая эмоция в тебе преобладает, когда ты один(одна)?",
    },
  },
  {
    id: 62,
    category: "personal",
    translations: {
      en: "What promise did you make but knew you wouldn't keep?",
      ru: "Какое обещание ты дал(а), но знал(а), что не сдержишь",
    },
  },
  {
    id: 63,
    category: "personal",
    translations: {
      en: "Who became your salvation when you were on the verge?",
      ru: "Кто стал для тебя спасением, когда ты был(а) на грани?",
    },
  },
  {
    id: 64,
    category: "personal",
    translations: {
      en: "What did you do or would you do out of jealousy?",
      ru: "Что ты сделал(а) или сделал бы из ревности?",
    },
  },
  {
    id: 65,
    category: "personal",
    translations: {
      en: "What past action still haunts you?",
      ru: "Какой поступок из прошлого до сих пор не даёт тебе покоя?",
    },
  },
  {
    id: 66,
    category: "personal",
    translations: {
      en: "What do you consider a moral downfall?",
      ru: "Что ты считаешь моральным падением?",
    },
  },
  {
    id: 67,
    category: "personal",
    translations: {
      en: "What role do you play in front of others that doesn't match your true 'self'?",
      ru: 'Какую роль ты играешь перед другими, которая не совпадает с настоящим "тобой"?',
    },
  },
  {
    id: 68,
    category: "personal",
    translations: {
      en: "What would you do if you could erase one emotion forever? Which one would you erase?",
      ru: "Что бы ты сделал(а), если бы мог(ла) стереть одну эмоцию навсегда? Какую стер бы?",
    },
  },
  {
    id: 69,
    category: "personal",
    translations: {
      en: "When was the last time you felt completely disappointed?",
      ru: "Когда ты в последний раз чувствовал(а) полное разочарование?",
    },
  },
  {
    id: 70,
    category: "personal",
    translations: {
      en: "What would you say to yourself in 10 years?",
      ru: "Что бы ты сказал(а) себе через 10 лет?",
    },
  },
  {
    id: 71,
    category: "personal",
    translations: {
      en: "What would you never forgive a person for, even if they apologized?",
      ru: "Что ты никогда не простишь человеку, даже если он извинится?",
    },
  },
  {
    id: 72,
    category: "personal",
    translations: {
      en: "When did you feel like you were losing control of yourself?",
      ru: "Когда ты почувствовал(а), что теряешь контроль над собой?",
    },
  },
  {
    id: 73,
    category: "personal",
    translations: {
      en: "When did you realize you were becoming a different person?",
      ru: "Когда ты осознал(а), что становишься другим человеком?",
    },
  },
  {
    id: 74,
    category: "personal",
    translations: {
      en: "Who did you love but were afraid to admit it?",
      ru: "Кого ты любил(а), но боялся(ась) в этом признаться?",
    },
  },
  {
    id: 75,
    category: "personal",
    translations: {
      en: "Have you ever regretted revealing the truth?",
      ru: "Ты когда-нибудь сожалел(а), что раскрыл(а) правду?",
    },
  },
  {
    id: 76,
    category: "personal",
    translations: {
      en: "What do you do to please others, but you don't enjoy it?",
      ru: "Что ты делаешь, чтобы понравиться, но тебе это неприятно?",
    },
  },
  {
    id: 77,
    category: "personal",
    translations: {
      en: "Have you ever felt that everything around you was fake?",
      ru: "Ты когда-нибудь чувствовал(а), что всё вокруг фальшиво?",
    },
  },
  {
    id: 78,
    category: "personal",
    translations: {
      en: "What do you do only because you 'have to'?",
      ru: "Что ты делаешь только потому, что так «надо»?",
    },
  },
  {
    id: 79,
    category: "personal",
    translations: {
      en: "What triggers aggression in you?",
      ru: "Что в людях вызывает у тебя агрессию?",
    },
  },
  {
    id: 80,
    category: "personal",
    translations: {
      en: "Who became an unexpected salvation for you?",
      ru: "Кто стал для тебя неожиданным спасением?",
    },
  },
  {
    id: 81,
    category: "personal",
    translations: {
      en: "What would you do if you knew no one would judge you?",
      ru: "Что бы ты сделал(а), если бы знал(а), что тебя никто не осудит?",
    },
  },
  {
    id: 82,
    category: "personal",
    translations: {
      en: "What do you blame yourself for, even if no one else does?",
      ru: "В чём ты винишь себя, даже если никто не осуждает?",
    },
  },
  {
    id: 83,
    category: "personal",
    translations: {
      en: "What are you still hiding from your parents?",
      ru: "Что ты до сих пор скрываешь от родителей?",
    },
  },
  {
    id: 84,
    category: "personal",
    translations: {
      en: "What trait in others evokes admiration and envy in you simultaneously?",
      ru: "Какая черта в других вызывает у тебя восхищение и зависть одновременно?",
    },
  },
  {
    id: 85,
    category: "personal",
    translations: {
      en: "In what ways do you remain a child, despite your age?",
      ru: "В чём ты остаёшься ребёнком, несмотря на возраст?",
    },
  },
  {
    id: 86,
    category: "self-reflection",
    translations: {
      en: "What do you think is your greatest achievement so far in life?",
      ru: "Что, по вашему мнению, является вашим самым большим достижением на данный момент в жизни?",
    },
  },
  {
    id: 87,
    category: "self-reflection",
    translations: {
      en: "If you had unlimited money and time, what would you do with your life?",
      ru: "Если бы у вас не было ограничений по деньгам и времени, чем бы вы занимались всю свою жизнь?",
    },
  },
  {
    id: 88,
    category: "self-reflection",
    translations: {
      en: "What three things always help you feel better when you're sad?",
      ru: "Какие три вещи всегда помогают вам почувствовать себя лучше, когда вы грустите?",
    },
  },
  {
    id: 89,
    category: "self-reflection",
    translations: {
      en: "If you could relive one moment, what would it be and why?",
      ru: "Если бы вы могли пережить один момент еще раз, что бы это было и почему?",
    },
  },
  {
    id: 90,
    category: "self-reflection",
    translations: {
      en: "What fear have you overcome?",
      ru: "Какой страх вы преодолели?",
    },
  },
  {
    id: 91,
    category: "self-reflection",
    translations: {
      en: "What is the most significant lesson you've learned from your failures?",
      ru: "Какой самый значимый урок, который вы извлекли из своих неудач?",
    },
  },
  {
    id: 92,
    category: "self-reflection",
    translations: {
      en: "What memory always brings a smile to your face?",
      ru: "Какое воспоминание всегда приносит улыбку на ваше лицо?",
    },
  },
  {
    id: 93,
    category: "self-reflection",
    translations: {
      en: "What book, film, or song deeply changed your perspective?",
      ru: "Какая книга, фильм или песня глубоко изменила ваш взгляд?",
    },
  },
  {
    id: 94,
    category: "self-reflection",
    translations: {
      en: "What relationships have shaped your understanding of love?",
      ru: "Какие отношения сформировали ваше понимание любви?",
    },
  },
  {
    id: 95,
    category: "self-reflection",
    translations: {
      en: "What place holds special significance for you in life?",
      ru: "Какое место имеет для вас особое значение в жизни?",
    },
  },
  {
    id: 96,
    category: "self-reflection",
    translations: {
      en: "What spiritual practice brings you inner peace?",
      ru: "Какая духовная практика приносит тебе внутренний покой?",
    },
  },
  {
    id: 97,
    category: "self-reflection",
    translations: {
      en: "If you could choose what form you would be reborn into in the next life?",
      ru: "Если бы ты мог выбрать, в какой форме ты переродился бы в следующей жизни?",
    },
  },
  {
    id: 98,
    category: "self-reflection",
    translations: {
      en: "Have you ever had the opportunity to experience a supernatural phenomenon? Tell us about it.",
      ru: "Тебе когда-нибудь выпадала возможность испытать сверхъестественное явление? Расскажи.",
    },
  },
  {
    id: 99,
    category: "self-reflection",
    translations: {
      en: "If you could choose a spirit animal, who would it be and why?",
      ru: "Если бы ты мог выбрать духовного животного, кто бы это был и почему?",
    },
  },
  {
    id: 100,
    category: "quirky",
    translations: {
      en: "What is your strangest hobby or interest?",
      ru: "Какое у тебя самое странное хобби или интерес?",
    },
  },
  {
    id: 101,
    category: "quirky",
    translations: {
      en: "What's the most awkward thing you've ever said in unfamiliar company?",
      ru: "Что самое неловкое ты когда-либо говорил в незнакомой компании?",
    },
  },
  {
    id: 102,
    category: "quirky",
    translations: {
      en: "Which movie or TV series would you like to live in?",
      ru: "В каком фильме или сериале ты хотел(а) бы жить?",
    },
  },
  {
    id: 103,
    category: "quirky",
    translations: {
      en: "Would you rather have the ability to fly or be invisible? Why?",
      ru: "Ты бы предпочёл(а) умение летать или быть невидимым(ой)? Почему?",
    },
  },
  {
    id: 104,
    category: "quirky",
    translations: {
      en: "What food do you think is overrated?",
      ru: "Какая еда кажется тебе переоценённой?",
    },
  },
  {
    id: 105,
    category: "quirky",
    translations: {
      en: "Have you ever pretended to be sick to avoid a meeting? What kind of meeting was it? Did you get caught?",
      ru: "Ты когда-нибудь притворялся(ась) больным(ой), чтобы избежать встречи? Какая это была встреча? Тебя спалили?",
    },
  },
  {
    id: 106,
    category: "quirky",
    translations: {
      en: "What song do you like but are a little ashamed to admit?",
      ru: "Какая песня тебе нравится, но тебе немного стыдно в этом признаться?",
    },
  },
  {
    id: 107,
    category: "quirky",
    translations: {
      en: "What cartoon do you still love to watch? Why?",
      ru: "Какой мультфильм ты до сих пор любишь смотреть? Почему?",
    },
  },
  {
    id: 108,
    category: "quirky",
    translations: {
      en: "What is the most unusual fear you have?",
      ru: "Какой самый необычный страх у тебя есть?",
    },
  },
  {
    id: 109,
    category: "quirky",
    translations: {
      en: "Which cartoon character do you identify with?",
      ru: "С каким персонажем мультфильмов ты себя ассоциируешь?",
    },
  },
  {
    id: 110,
    category: "quirky",
    translations: {
      en: "What superpower would suit you best? What would your superhero name be?",
      ru: "Какая суперспособность подошла бы тебе лучше всего? Какое было бы супергеройское имя?",
    },
  },
  {
    id: 111,
    category: "quirky",
    translations: {
      en: "Have you ever sung loudly in the shower? What song was it?",
      ru: "Ты когда-нибудь пел(а) в душе во весь голос? Что именно?",
    },
  },
  {
    id: 112,
    category: "quirky",
    translations: {
      en: "What did you eat or drink that you can't even look at now?",
      ru: "Что ты ел(а) или пил(а), что теперь не можешь даже видеть?",
    },
  },
  {
    id: 113,
    category: "quirky",
    translations: {
      en: "Have you ever talked to objects? What were these objects? Did they answer you?",
      ru: "Ты когда-нибудь разговаривал(а) с предметами? Что это были за предметы? Отвечали тебе?",
    },
  },
  {
    id: 114,
    category: "quirky",
    translations: {
      en: "What dance could you perform right now?",
      ru: "Какой танец ты бы мог(ла) станцевать прямо сейчас?",
    },
  },
  {
    id: 115,
    category: "quirky",
    translations: {
      en: "What word do you constantly pronounce incorrectly?",
      ru: "Какой слово ты постоянно произносишь неправильно?",
    },
  },
  {
    id: 116,
    category: "quirky",
    translations: {
      en: "What silly trend did you try?",
      ru: "Какой глупый тренд ты пробовал(а)?",
    },
  },
  {
    id: 117,
    category: "quirky",
    translations: {
      en: "Which meme accurately describes you?",
      ru: "Какой мем точно про тебя?",
    },
  },
  {
    id: 118,
    category: "quirky",
    translations: {
      en: "What would you do if you found yourself on stage without a script?",
      ru: "Что бы ты сделал(а), если бы оказался(ась) на сцене без сценария?",
    },
  },
  {
    id: 119,
    category: "quirky",
    translations: {
      en: "What can always make you laugh, even on a bad day?",
      ru: "Что тебя всегда может рассмешить, даже в плохой день?",
    },
  },
  {
    id: 120,
    category: "quirky",
    translations: {
      en: "Have you ever sung karaoke? What song did you choose?",
      ru: "Ты когда-нибудь пел(а) караоке? Какую песню выбрал(а)?",
    },
  },
  {
    id: 121,
    category: "quirky",
    translations: {
      en: "What emoji do you use most often?",
      ru: "Какой смайлик ты используешь чаще всего?",
    },
  },
  {
    id: 122,
    category: "quirky",
    translations: {
      en: "What could you definitely not eat, even for a million?",
      ru: "Что бы ты точно не смог(ла) съесть даже за миллион?",
    },
  },
  {
    id: 123,
    category: "quirky",
    translations: {
      en: "What was your strangest or most pointless argument?",
      ru: "Какой был твой самый странный или бессмысленный спор?",
    },
  },
  {
    id: 124,
    category: "quirky",
    translations: {
      en: "What movie do you not understand why everyone loves?",
      ru: "Какой фильм ты не понимаешь, но все его обожают?",
    },
  },
  {
    id: 125,
    category: "quirky",
    translations: {
      en: "What did you do as a child that now seems completely absurd?",
      ru: "Что ты делал(а) в детстве, что теперь кажется максимально абсурдным?",
    },
  },
  {
    id: 126,
    category: "quirky",
    translations: {
      en: "If food had no impact on health, what would you eat endlessly?",
      ru: "Если бы еда не влияла на здоровье, что бы ты ел(а) бесконечно?",
    },
  },
  {
    id: 127,
    category: "quirky",
    translations: {
      en: "What would you do if you found yourself in a cat's body for a day?",
      ru: "Что бы ты сделал(а), если бы оказался(ась) в теле кошки на сутки?",
    },
  },
  {
    id: 128,
    category: "quirky",
    translations: {
      en: "What word have you ever made up yourself?",
      ru: "Какое слово ты когда-либо придумывал(а) сам(а)?",
    },
  },
  {
    id: 129,
    category: "quirky",
    translations: {
      en: "Would you rather live in a world of zombies or a world ruled by cats? Why?",
      ru: "Ты бы предпочёл(а) жить в мире зомби или в мире, где правят кошки? Почему?",
    },
  },
  {
    id: 130,
    category: "quirky",
    translations: {
      en: "What fast food do you consider a 'religion'?",
      ru: "Какой фастфуд ты считаешь «религией»?",
    },
  },
  {
    id: 131,
    category: "quirky",
    translations: {
      en: "What did you once break and pretend it was always like that?",
      ru: "Что ты однажды сломал(а) и сделал(а) вид, что так и было?",
    },
  },
  {
    id: 132,
    category: "quirky",
    translations: {
      en: "What would you add to the school curriculum if you could?",
      ru: "Что бы ты добавил(а) в школьную программу, если бы мог(ла)?",
    },
  },
  {
    id: 133,
    category: "quirky",
    translations: {
      en: "What strange life hack do you actually use?",
      ru: "Какой странный лайфхак ты реально используешь?",
    },
  },
  {
    id: 134,
    category: "quirky",
    translations: {
      en: "What have you ever said in your sleep?",
      ru: "Что ты когда-либо сказал(а) в просонье?",
    },
  },
  {
    id: 135,
    category: "quirky",
    translations: {
      en: "What invention of the future are you most looking forward to?",
      ru: "Какое изобретение будущего ты ждёшь больше всего?",
    },
  },
  {
    id: 136,
    category: "quirky",
    translations: {
      en: "What can you never take seriously?",
      ru: "Что ты никогда не сможешь воспринимать серьёзно?",
    },
  },
  {
    id: 137,
    category: "quirky",
    translations: {
      en: "What from everyday life do you consider a 'boss fight'?",
      ru: "Что из повседневной жизни ты считаешь «босс-файтом»?",
    },
  },
  {
    id: 138,
    category: "quirky",
    translations: {
      en: "What movie quote often comes to your mind for no reason?",
      ru: "Какая фраза из фильма тебе часто вспоминается без повода?",
    },
  },
  {
    id: 139,
    category: "quirky",
    translations: {
      en: "Which piece of furniture do you associate yourself with today?",
      ru: "С каким предметом мебели ты ассоциируешь себя сегодня?",
    },
  },
  {
    id: 140,
    category: "quirky",
    translations: {
      en: "What smell evokes the strangest associations for you?",
      ru: "Какой запах вызывает у тебя самые странные ассоциации?",
    },
  },
  {
    id: 141,
    category: "quirky",
    translations: {
      en: "What app would you delete from all of humanity?",
      ru: "Какое приложение ты бы удалил(а) у всего человечества?",
    },
  },
  {
    id: 142,
    category: "quirky",
    translations: {
      en: "What word do you hate, but everyone around you uses?",
      ru: "Какое слово ты не выносишь, но все вокруг его используют?",
    },
  },
  {
    id: 143,
    category: "quirky",
    translations: {
      en: "What have you ever tried to do out of curiosity — and regretted it?",
      ru: "Что ты когда-либо пробовал(а) делать из любопытства — и пожалел(а)?",
    },
  },
  {
    id: 144,
    category: "quirky",
    translations: {
      en: "If you won a billion, what would you spend the most pointless amount on?",
      ru: "Если бы ты выиграл(а) миллиард, на что потратил(а) бы самую бессмысленную сумму?",
    },
  },
  {
    id: 145,
    category: "quirky",
    translations: {
      en: "What prank would you play on your friends if you were invisible?",
      ru: "Какой пранк ты бы устроил друзьям, если бы был(а) невидимкой?",
    },
  },
  {
    id: 146,
    category: "quirky",
    translations: {
      en: "Have you ever invented your own strange game?",
      ru: "Ты когда-либо придумывал(а) свою странную игру?",
    },
  },
  {
    id: 147,
    category: "quirky",
    translations: {
      en: "If you had a title like a knight, what would it be?",
      ru: "Если бы у тебя был титул, как у рыцаря, каким бы он был?",
    },
  },
  {
    id: 148,
    category: "quirky",
    translations: {
      en: "What is your 'hardcore' record in laziness?",
      ru: "Какой твой «жесткий» рекорд в лени?",
    },
  },
  {
    id: 149,
    category: "quirky",
    translations: {
      en: "What element of everyday life would you replace with magic?",
      ru: "Какой элемент повседневной жизни ты бы заменил(а) на магию?",
    },
  },
  {
    id: 150,
    category: "quirky",
    translations: {
      en: "What fictional gadget would you like to bring to life?",
      ru: "Какой вымышленный гаджет ты бы хотел(а) воплотить в жизнь?",
    },
  },
  {
    id: 151,
    category: "quirky",
    translations: {
      en: "What day would you loop like in the movie 'Groundhog Day'?",
      ru: 'Какой день ты бы зациклил как в фильме "День сурка"?',
    },
  },
  {
    id: 152,
    category: "quirky",
    translations: {
      en: "What would be the first thing you do on the Moon?",
      ru: "Что ты сделал(а) бы первым делом на Луне?",
    },
  },
  {
    id: 153,
    category: "quirky",
    translations: {
      en: "What would you rename in the world just because you can?",
      ru: "Что бы ты переименовал(а) в мире просто потому, что можешь?",
    },
  },
  {
    id: 154,
    category: "quirky",
    translations: {
      en: "If you were offered to open a museum — what would it be dedicated to?",
      ru: "Если бы тебе предложили открыть музей — чему он был бы посвящён?",
    },
  },
  {
    id: 155,
    category: "quirky",
    translations: {
      en: "What phrase would you choose for street graffiti? Maybe something you've already seen stuck in your mind?",
      ru: "Какую фразу ты бы выбрал(а) для уличного граффити? Может, из уже увиденного запала в душу какая-то?",
    },
  },
  {
    id: 156,
    category: "quirky",
    translations: {
      en: "What would you do if your refrigerator suddenly spoke and asked for a vacation?",
      ru: "Что бы ты сделал(а), если бы твой холодильник вдруг заговорил и попросил отпуск?",
    },
  },
  {
    id: 157,
    category: "quirky",
    translations: {
      en: "If you became bread for a day — what kind of bread would you be and why?",
      ru: "Если бы на один день ты стал(а) хлебом — каким именно и почему?",
    },
  },
  {
    id: 158,
    category: "quirky",
    translations: {
      en: "What beer would you give to an alien to introduce them to Earth?",
      ru: "Какое пиво ты бы подарил(а) инопланетянину, чтобы познакомить его с Землёй?",
    },
  },
  {
    id: 159,
    category: "quirky",
    translations: {
      en: "What's the strangest beer snack you've ever tried?",
      ru: "Какая самая странная закуска под пиво, которую ты пробовал(а)?",
    },
  },
  {
    id: 160,
    category: "quirky",
    translations: {
      en: "If beer had a voice, what would it sound like?",
      ru: "Если бы у пива был голос, как бы он звучал?",
    },
  },
  {
    id: 161,
    category: "taboo",
    translations: {
      en: "Have you ever done anything illegal? What was it?",
      ru: "Ты хоть раз делал что-то противозаконное? Что это было?",
    },
  },
  {
    id: 162,
    category: "taboo",
    translations: {
      en: "Have you ever cheated on a test? Who from, what subject - maximum details",
      ru: "Ты когда-нибудь списывал? У кого, что за предмет - максимум подробностей",
    },
  },
  {
    id: 163,
    category: "taboo",
    translations: {
      en: "Have you ever re-gifted presents to other people? What was it? If not, could you?",
      ru: "Ты когда-нибудь передаривал подарки другим людям? Что это было? Если нет, то смог бы?",
    },
  },
  {
    id: 164,
    category: "taboo",
    translations: {
      en: "Have you ever had to tell such a big lie that it was impossible to back out of?",
      ru: "Приходилось ли вам когда-нибудь говорить настолько большую ложь, что от нее невозможно было отказаться?",
    },
  },
  {
    id: 165,
    category: "taboo",
    translations: {
      en: "Would you rather: have the ability to turn back time or see the future?",
      ru: "Вы бы предпочли: иметь возможность повернуть время вспять или увидеть будущее?",
    },
  },
  {
    id: 166,
    category: "taboo",
    translations: {
      en: "If you could only use swear words from one root for the rest of your life, which one would you choose?",
      ru: "Если бы вы могли использовать только мат от одного корня на всю оставшуюся жизнь, какой из них вы бы выбрали?",
    },
  },
  {
    id: 167,
    category: "taboo",
    translations: {
      en: "Have you ever lied to a police officer or other authority figure?",
      ru: "Ты когда-нибудь лгал/а сотруднику полиции или другому представителю власти?",
    },
  },
  {
    id: 168,
    category: "taboo",
    translations: {
      en: "Have you ever forged someone else's signature? Whose was it? Did the scam work?",
      ru: "Ты когда-нибудь подделывал/а чужую подпись? Чья она была? Удалось провернуть аферу?",
    },
  },
  {
    id: 169,
    category: "taboo",
    translations: {
      en: "Tell us about your longest hitchhiking route.",
      ru: "Расскажи про самый долгий маршрут автостопом",
    },
  },
  {
    id: 170,
    category: "taboo",
    translations: {
      en: "If you had the money for your own business, what would you do?",
      ru: "Если бы были деньги на собственный бизнес, чем бы занялся/лась?",
    },
  },
  {
    id: 171,
    category: "taboo",
    translations: {
      en: "If you had to participate in a reality show, which one would you choose?",
      ru: "Если бы ты должен(на)  был(а) участвовать в реалити-шоу, то какое выбрал(а) бы?",
    },
  },
  {
    id: 172,
    category: "ethics",
    translations: {
      en: "What is more important: truth or tact? Why?",
      ru: "Что важнее: правда или тактичность? Почему?",
    },
  },
  {
    id: 173,
    category: "ethics",
    translations: {
      en: "Are there situations where lying is for the good? Have you been in such situations?",
      ru: "Есть ли ситуации, в которых ложь — это добро? Оказывался ли в таких?",
    },
  },
  {
    id: 174,
    category: "ethics",
    translations: {
      en: "What would you choose: stability or freedom?",
      ru: "Что бы ты выбрал(а): стабильность или свободу?",
    },
  },
  {
    id: 175,
    category: "ethics",
    translations: {
      en: "Can one be happy without striving for success? At what point should one stop striving for success?",
      ru: "Можно ли быть счастливым, не стремясь к успеху? В какой момент нужно остановиться в стремлении к успеху?",
    },
  },
  {
    id: 176,
    category: "ethics",
    translations: {
      en: "What is more important to you — the opinion of others or your own peace of mind?",
      ru: "Что для тебя важнее — мнение окружающих или собственное спокойствие?",
    },
  },
  {
    id: 177,
    category: "ethics",
    translations: {
      en: "Should betrayal be forgiven if the person repents?",
      ru: "Нужно ли прощать предательство, если человек раскаивается?",
    },
  },
  {
    id: 178,
    category: "ethics",
    translations: {
      en: "What do you consider the main indicator of maturity?",
      ru: "Что ты считаешь главным показателем зрелости?",
    },
  },
  {
    id: 179,
    category: "ethics",
    translations: {
      en: "What is the difference between courage and stupidity?",
      ru: "Чем отличается смелость от глупости?",
    },
  },
  {
    id: 180,
    category: "ethics",
    translations: {
      en: "What mistake taught you more than a victory?",
      ru: "Какая ошибка научила тебя большему, чем победа?",
    },
  },
  {
    id: 181,
    category: "ethics",
    translations: {
      en: "What do you think shapes personality more: difficulties or luck?",
      ru: "Что ты считаешь — больше формирует личность: трудности или удача?",
    },
  },
  {
    id: 182,
    category: "ethics",
    translations: {
      en: "Does everyone have their own destiny?",
      ru: "Есть ли у каждого человека своё предназначение?",
    },
  },
  {
    id: 183,
    category: "ethics",
    translations: {
      en: "Do you believe that everyone deserves a second chance? Have you ever given someone such a chance?",
      ru: "Считаешь ли ты, что каждый заслуживает второго шанса? Давал ли кому-то такой шанс?",
    },
  },
  {
    id: 184,
    category: "ethics",
    translations: {
      en: "What is more important in friendship: honesty or support in any case?",
      ru: "Что важнее в дружбе: честность или поддержка в любом случае?",
    },
  },
  {
    id: 185,
    category: "ethics",
    translations: {
      en: "What is the difference between desires and goals?",
      ru: "Чем отличаются желания от целей?",
    },
  },
  {
    id: 186,
    category: "ethics",
    translations: {
      en: "Would you live in a utopia if it meant forgetting the past?",
      ru: "Ты бы стал(а) жить в утопии, если бы за это пришлось забыть прошлое?",
    },
  },
  {
    id: 187,
    category: "ethics",
    translations: {
      en: "Do you believe that everything in life is predetermined?",
      ru: "Считаешь ли ты, что всё в жизни предопределено?",
    },
  },
  {
    id: 188,
    category: "ethics",
    translations: {
      en: "Is it possible to be completely objective about oneself?",
      ru: "Можно ли быть полностью объективным в отношении к себе?",
    },
  },
  {
    id: 189,
    category: "ethics",
    translations: {
      en: "Is there any point in regrets?",
      ru: "Есть ли смысл в сожалениях?",
    },
  },
  {
    id: 190,
    category: "ethics",
    translations: {
      en: "How to distinguish the inner voice from fears?",
      ru: "Как отличить внутренний голос от страхов?",
    },
  },
  {
    id: 191,
    category: "ethics",
    translations: {
      en: "Should one always 'stay true to themselves' even if it hinders adaptation?",
      ru: 'Нужно ли всегда "оставаться собой", даже если это мешает адаптироваться?',
    },
  },
  {
    id: 192,
    category: "ethics",
    translations: {
      en: "What would you choose: influence or respect?",
      ru: "Что бы ты выбрал(а): влияние или уважение?",
    },
  },
  {
    id: 193,
    category: "ethics",
    translations: {
      en: "What is harder: learning to listen or to speak? Which one is more developed in you?",
      ru: "Что сложнее — научиться слушать или говорить? Что у тебя больше развито?",
    },
  },
  {
    id: 194,
    category: "ethics",
    translations: {
      en: "How to define the boundary between care and control?",
      ru: "Как определить границу между заботой и контролем?",
    },
  },
  {
    id: 195,
    category: "ethics",
    translations: {
      en: "What is harder: to apologize or to forgive?",
      ru: "Что сложнее — попросить прощения или простить?",
    },
  },
  {
    id: 196,
    category: "relationships",
    translations: {
      en: "What is more important in relationships: trust or understanding?",
      ru: "Что важнее в отношениях: доверие или понимание?",
    },
  },
  {
    id: 197,
    category: "relationships",
    translations: {
      en: "Is it worth telling the truth if you know it might hurt your partner?",
      ru: "Стоит ли говорить правду, если знаешь, что она может обидеть партнёра?",
    },
  },
  {
    id: 198,
    category: "relationships",
    translations: {
      en: "Should partners have common goals, or is a difference in interests normal?",
      ru: "Должны ли партнёры иметь общие цели, или разность интересов — это нормально?",
    },
  },
  {
    id: 199,
    category: "relationships",
    translations: {
      en: "Do you think a partner's past should be discussed?",
      ru: "Считаешь ли ты, что прошлое партнёра должно обсуждаться?",
    },
  },
  {
    id: 200,
    category: "relationships",
    translations: {
      en: "What destroys relationships faster: deception or silence?",
      ru: "Что разрушает отношения быстрее: обман или молчание?",
    },
  },
  {
    id: 201,
    category: "relationships",
    translations: {
      en: "What is the difference between respect in friendship and respect in love?",
      ru: "Чем отличается уважение в дружбе от уважения в любви?",
    },
  },
  {
    id: 202,
    category: "food",
    translations: {
      en: "What food evokes nostalgia in you?",
      ru: "Какая еда у тебя вызывает ностальгию?",
    },
  },
  {
    id: 203,
    category: "food",
    translations: {
      en: "What food combination do you like, but others find strange?",
      ru: "Какое сочетание продуктов тебе нравится, но другие считают странным?",
    },
  },
  {
    id: 204,
    category: "food",
    translations: {
      en: "What drink would you ban forever?",
      ru: "Какой напиток ты бы запретил(а) навсегда?",
    },
  },
  {
    id: 205,
    category: "food",
    translations: {
      en: "What is more important: taste or presentation?",
      ru: "Что важнее: вкус или подача?",
    },
  },
  {
    id: 206,
    category: "food",
    translations: {
      en: "Can you remember the first time you cooked something yourself? What was it?",
      ru: "Можешь ли ты вспомнить, когда впервые приготовил(а) что-то самостоятельно? Что это было?",
    },
  },
  {
    id: 207,
    category: "food",
    translations: {
      en: "Which cuisine of the world would you dedicate a vacation to?",
      ru: "Какой кухне мира ты бы посвятил(а отпуск)?",
    },
  },
  {
    id: 208,
    category: "food",
    translations: {
      en: "Have you ever pretended to like food so as not to offend the cook?",
      ru: "Ты когда-нибудь делал(а) вид, что тебе нравится еда, чтобы не обидеть повара?",
    },
  },
  {
    id: 209,
    category: "food",
    translations: {
      en: "What drink do you associate with summer?",
      ru: "Какой напиток ассоциируется у тебя с летом?",
    },
  },
  {
    id: 210,
    category: "food",
    translations: {
      en: "If you were brought food on a date that you can't stand — what would you do?",
      ru: "Если бы на свидании тебе принесли еду, которую ты терпеть не можешь — что бы ты сделал(а)?",
    },
  },
  {
    id: 211,
    category: "food",
    translations: {
      en: "Do you have 'comfort food' — a dish that helps you feel better?",
      ru: "Есть ли у тебя “комфортная еда” — блюдо, которое помогает тебе чувствовать себя лучше?",
    },
  },
  {
    id: 212,
    category: "food",
    translations: {
      en: "Is there a drink that you are ashamed to admit you like?",
      ru: "Есть ли напиток, от которого тебе стыдно, что он тебе нравится?",
    },
  },
  {
    id: 213,
    category: "food",
    translations: {
      en: "If you had a personal chef, what would they cook every day?",
      ru: "Если бы у тебя был личный повар, что бы он готовил каждый день?",
    },
  },
  {
    id: 214,
    category: "food",
    translations: {
      en: "What is more important: to try everything or to find your thing and enjoy it?",
      ru: "Что важнее: попробовать всё или найти своё и наслаждаться этим?",
    },
  },
  {
    id: 215,
    category: "food",
    translations: {
      en: "What drink should always be in the fridge?",
      ru: "Какой напиток всегда должен быть в холодильнике?",
    },
  },
  {
    id: 216,
    category: "food",
    translations: {
      en: "What drink do you consider overrated?",
      ru: "Какой напиток ты считаешь переоценённым?",
    },
  },
  {
    id: 217,
    category: "food",
    translations: {
      en: "Is there a dish that is better to eat alone than with someone?",
      ru: "Существует ли блюдо, которое лучше есть в одиночестве, чем с кем-то?",
    },
  },
  {
    id: 218,
    category: "entertainment",
    translations: {
      en: "If you ended up in a horror movie — how quickly would you die?",
      ru: "Если бы ты попал(а) в фильм ужасов — как быстро ты бы погиб(ла)?",
    },
  },
  {
    id: 219,
    category: "entertainment",
    translations: {
      en: "What annoys you in modern movies?",
      ru: "Что раздражает тебя в современных фильмах?",
    },
  },
  {
    id: 220,
    category: "entertainment",
    translations: {
      en: "What's worse — a spoiler or a bad remake?",
      ru: "Что хуже — спойлер или плохой ремейк?",
    },
  },
  {
    id: 221,
    category: "entertainment",
    translations: {
      en: "What movie is best to watch under a blanket with pizza?",
      ru: "Какой фильм лучше всего смотреть под одеялом с пиццей?",
    },
  },
  {
    id: 222,
    category: "entertainment",
    translations: {
      en: "If you could change the ending of one movie — which one would it be?",
      ru: "Если бы ты мог(ла) изменить конец одного фильма — какой бы это был?",
    },
  },
  {
    id: 223,
    category: "entertainment",
    translations: {
      en: "Which book adaptation can you still not come to terms with?",
      ru: "С какой экранизацией книги ты до сих пор не можешь смириться?",
    },
  },
  {
    id: 224,
    category: "entertainment",
    translations: {
      en: "What movie did you never finish watching — and don't regret it?",
      ru: "Какой фильм ты никогда не досмотрел(а) — и не жалеешь?",
    },
  },
  {
    id: 225,
    category: "entertainment",
    translations: {
      en: "What movie would you show a child to cultivate a taste for cinema?",
      ru: "Какой фильм ты бы показал(а) ребёнку, чтобы воспитать вкус к кино?",
    },
  },
  {
    id: 226,
    category: "travel",
    translations: {
      en: "In which country would you like to wake up tomorrow morning?",
      ru: "В какой стране ты бы хотел(а) проснуться завтра утром?",
    },
  },
  {
    id: 227,
    category: "travel",
    translations: {
      en: "What city do you dream of seeing from a height?",
      ru: "Какой город ты мечтаешь увидеть с высоты?",
    },
  },
  {
    id: 228,
    category: "travel",
    translations: {
      en: "What trip changed your outlook on life?",
      ru: "Какая поездка изменила твой взгляд на жизнь?",
    },
  },
  {
    id: 229,
    category: "travel",
    translations: {
      en: "What is the most ridiculous souvenir you have ever brought back?",
      ru: "Какой самый нелепый сувенир ты когда-либо привозил(а)?",
    },
  },
  {
    id: 230,
    category: "travel",
    translations: {
      en: "What dish did you eat in another country and still remember?",
      ru: "Какое блюдо ты ел(а) в другой стране и до сих пор вспоминаешь?",
    },
  },
  {
    id: 231,
    category: "travel",
    translations: {
      en: "Have you ever lost your luggage or gotten lost yourself in a foreign city? How did you handle the situation?",
      ru: "Ты когда-нибудь терял(а) багаж или сам(а) терялся в чужом городе? Как справился с этой ситуацией?",
    },
  },
  {
    id: 232,
    category: "travel",
    translations: {
      en: "What trip was the most spontaneous?",
      ru: "Какое путешествие было самым спонтанным?",
    },
  },
  {
    id: 233,
    category: "travel",
    translations: {
      en: "What mode of transport do you prefer — plane, train, car, walking?",
      ru: "Какой способ передвижения тебе больше по душе — самолёт, поезд, авто, пешком?",
    },
  },
  {
    id: 234,
    category: "travel",
    translations: {
      en: "What is the strangest animal you saw during a trip?",
      ru: "Какое самое странное животное ты видел(а) во время поездки?",
    },
  },
  {
    id: 235,
    category: "travel",
    translations: {
      en: "Which country surprised you the most?",
      ru: "Какая страна тебя удивила больше всего?",
    },
  },
  {
    id: 236,
    category: "travel",
    translations: {
      en: "What place would you not recommend to anyone?",
      ru: "Какое место ты бы никому не советовал(а)?",
    },
  },
  {
    id: 237,
    category: "travel",
    translations: {
      en: "What was your most unusual overnight stay on a trip?",
      ru: "Какой у тебя был самый необычный ночлег в поездке?",
    },
  },
  {
    id: 238,
    category: "travel",
    translations: {
      en: "What travel mistake cost you dearly (literally or figuratively)?",
      ru: "Какая ошибка в путешествии стоила тебе дорого (буквально или образно)?",
    },
  },
  {
    id: 239,
    category: "travel",
    translations: {
      en: "What did you do for the first time specifically on a trip?",
      ru: "Что ты впервые сделал(а) именно в поездке?",
    },
  },
  {
    id: 240,
    category: "travel",
    translations: {
      en: "What natural place impressed you the most?",
      ru: "Какое природное место произвело на тебя наибольшее впечатление?",
    },
  },
  {
    id: 241,
    category: "travel",
    translations: {
      en: "Would you risk going on a trip without a phone?",
      ru: "Ты бы рискнул(а) отправиться в путешествие без телефона?",
    },
  },
  {
    id: 242,
    category: "travel",
    translations: {
      en: "Do you prefer cities, nature, or a mixed style of travel?",
      ru: "Ты больше любишь города, природу или смешанный стиль путешествий?",
    },
  },
  {
    id: 243,
    category: "travel",
    translations: {
      en: "Could you go on a trip alone?",
      ru: "Ты бы смог(ла) уехать в путешествие один(одна)?",
    },
  },
  {
    id: 244,
    category: "travel",
    translations: {
      en: "If you were a guide, which city would you guide tours in?",
      ru: "Если бы ты был(а) гидом, то по какому городу?",
    },
  },
  {
    id: 245,
    category: "travel",
    translations: {
      en: "Have you ever tried local street food — and regretted it?",
      ru: "Ты когда-нибудь пробовал(а) местное уличное блюдо — и пожалел(а)?",
    },
  },
  {
    id: 246,
    category: "travel",
    translations: {
      en: "Would you go on a hot air balloon trip?",
      ru: "Ты бы поехал(а) в путешествие на воздушном шаре?",
    },
  },
  {
    id: 247,
    category: "travel",
    translations: {
      en: "What inspires you to take new trips?",
      ru: "Что тебя вдохновляет на новые поездки?",
    },
  },
  {
    id: 248,
    category: "animals",
    translations: {
      en: "What animal would you like to have as a pet if there were no restrictions?",
      ru: "Какое животное ты хотел(а) бы завести, если бы не было ограничений?",
    },
  },
  {
    id: 249,
    category: "animals",
    translations: {
      en: "What wild animal would you like to tame (and have it love you)?",
      ru: "Какое дикое животное ты бы хотел(а) приручить (и чтобы оно тебя любило)?",
    },
  },
  {
    id: 250,
    category: "animals",
    translations: {
      en: "Are you more of a cat or a dog person in terms of character?",
      ru: "Ты больше кот или собака по характеру?",
    },
  },
  {
    id: 251,
    category: "animals",
    translations: {
      en: "What would your cat (or dog) say if it could talk?",
      ru: "Что бы сказала твоя кошка (или собака), если бы умела говорить?",
    },
  },
  {
    id: 252,
    category: "animals",
    translations: {
      en: "Which animal do you consider the most 'intelligent'?",
      ru: "Какое животное ты считаешь самым «интеллигентным»?",
    },
  },
  {
    id: 253,
    category: "animals",
    translations: {
      en: "If all animals started talking, who would be the most talkative?",
      ru: "Если бы все животные начали говорить, кто был бы самым болтливым?",
    },
  },
  {
    id: 254,
    category: "animals",
    translations: {
      en: "What animal seems too strange to be real?",
      ru: "Какое животное тебе кажется слишком странным, чтобы быть настоящим?",
    },
  },
  {
    id: 255,
    category: "animals",
    translations: {
      en: "Have you ever dreamed of riding an elephant, camel, or llama?",
      ru: "Ты когда-нибудь мечтал(а) прокатиться на слоне, верблюде или ламе?",
    },
  },
  {
    id: 256,
    category: "animals",
    translations: {
      en: "What was the cutest animal encounter in your life?",
      ru: "Какая самая милая животная встреча была в твоей жизни?",
    },
  },
  {
    id: 257,
    category: "animals",
    translations: {
      en: "What would you ask a dolphin if it could answer?",
      ru: "Что бы ты спросил(а) у дельфина, если бы он отвечал?",
    },
  },
  {
    id: 258,
    category: "animals",
    translations: {
      en: "Which animal do you think has the best parties?",
      ru: "Как думаешь, у какого животного лучшие вечеринки?",
    },
  },
  {
    id: 259,
    category: "animals",
    translations: {
      en: "Which animal would you send to negotiate with aliens?",
      ru: "Какое животное ты бы отправил(а) на переговоры с инопланетянами?",
    },
  },
  {
    id: 260,
    category: "world",
    translations: {
      en: "What would your ideal city look like?",
      ru: "Как бы выглядел идеальный город по твоим представлениям?",
    },
  },
  {
    id: 261,
    category: "world",
    translations: {
      en: "What in the world seems unfair to you, but you don't know how to fix it?",
      ru: "Что в мире кажется тебе несправедливым, но ты не знаешь, как это исправить?",
    },
  },
  {
    id: 262,
    category: "world",
    translations: {
      en: "If you could solve one global problem forever, what would it be?",
      ru: "Если бы ты мог(ла) навсегда решить одну глобальную проблему, что бы это было?",
    },
  },
  {
    id: 263,
    category: "world",
    translations: {
      en: "What technology do you admire the most?",
      ru: "Какой технологией ты восхищаешься больше всего?",
    },
  },
  {
    id: 264,
    category: "world",
    translations: {
      en: "What invented item do you consider the most useful for humanity?",
      ru: "Какой изобретённый предмет ты считаешь самым полезным для человечества?",
    },
  },
  {
    id: 265,
    category: "world",
    translations: {
      en: "Which country seems the most mysterious to you?",
      ru: "Какая страна тебе кажется самой загадочной?",
    },
  },
  {
    id: 266,
    category: "world",
    translations: {
      en: "How do you feel about artificial intelligence?",
      ru: "Как ты относишься к искусственному интеллекту?",
    },
  },
  {
    id: 267,
    category: "world",
    translations: {
      en: "What would you cancel with a snap of your fingers if you could?",
      ru: "Что бы ты отменил(а) по щелчку пальцев, если бы мог(ла)?",
    },
  },
  {
    id: 268,
    category: "world",
    translations: {
      en: "Do you believe that humanity will ever colonize other planets?",
      ru: "Веришь ли ты, что человечество когда-нибудь колонизирует другие планеты?",
    },
  },
  {
    id: 269,
    category: "world",
    translations: {
      en: "What would you change in the education system on a global level?",
      ru: "Что бы ты изменил(а) в системе образования на глобальном уровне?",
    },
  },
  {
    id: 270,
    category: "world",
    translations: {
      en: "What cultural tradition of another nation do you admire?",
      ru: "Какая культурная традиция другого народа тебя восхищает?",
    },
  },
  {
    id: 271,
    category: "world",
    translations: {
      en: "What profession of the future intrigues you?",
      ru: "Какая профессия будущего тебя интригует?",
    },
  },
  {
    id: 272,
    category: "world",
    translations: {
      en: "If you could live in any era of humanity, which one would you choose? Why?",
      ru: "Если бы ты мог(ла) жить в любой эпохе человечества, какую бы выбрал(а)? Почему?",
    },
  },
  {
    id: 273,
    category: "world",
    translations: {
      en: "How do you feel about borders between countries?",
      ru: "Как ты относишься к границам между странами?",
    },
  },
  {
    id: 274,
    category: "world",
    translations: {
      en: "What custom seems strange but interesting to you?",
      ru: "Какой обычай тебе кажется странным, но интересным?",
    },
  },
  {
    id: 275,
    category: "world",
    translations: {
      en: "What would you build in your city if you became mayor for a week?",
      ru: "Что бы ты построил(а) в своём городе, если бы стал(а) мэром на неделю?",
    },
  },
  {
    id: 276,
    category: "world",
    translations: {
      en: "Is there a country in the world where you would never want to live?",
      ru: "Есть ли в мире страна, в которой ты бы никогда не захотел(а) жить?",
    },
  },
  {
    id: 277,
    category: "world",
    translations: {
      en: "What future technology seems scary to you?",
      ru: "Какая технология будущего кажется тебе пугающей?",
    },
  },
  {
    id: 278,
    category: "world",
    translations: {
      en: "Which country would you like to explore on foot?",
      ru: "Какую страну ты бы хотел(а) исследовать пешком?",
    },
  },
  {
    id: 279,
    category: "world",
    translations: {
      en: "If the whole world spoke one language — what would change?",
      ru: "Если бы весь мир говорил на одном языке — что бы это изменило?",
    },
  },
  {
    id: 280,
    category: "world",
    translations: {
      en: "How do you want to see the world in 100 years?",
      ru: "Каким ты хочешь видеть мир через 100 лет?",
    },
  },
  {
    id: 281,
    category: "random",
    translations: {
      en: "Which meme describes you best?",
      ru: "Какой мем описывает тебя лучше всего?",
    },
  },
  {
    id: 282,
    category: "random",
    translations: {
      en: "Which musical group from the past deserves a comeback?",
      ru: "Какая музыкальная группа из прошлого заслуживает возвращения?",
    },
  },
  {
    id: 283,
    category: "random",
    translations: {
      en: "What did you watch as a child that now seems strange?",
      ru: "Что ты смотрел(а) в детстве, что сейчас кажется странным?",
    },
  },
  {
    id: 284,
    category: "random",
    translations: {
      en: "What cartoon are you ready to watch even as an adult?",
      ru: "Какой мультфильм ты готов(а) смотреть даже во взрослом возрасте?",
    },
  },
  {
    id: 285,
    category: "random",
    translations: {
      en: "Which superhero seems overrated to you?",
      ru: "Какой супергерой тебе кажется переоценённым?",
    },
  },
  {
    id: 286,
    category: "random",
    translations: {
      en: "What clichés in movies annoy you?",
      ru: "Какие клише в фильмах тебя раздражают?",
    },
  },
  {
    id: 287,
    category: "random",
    translations: {
      en: "What show or series do you not understand why everyone loves?",
      ru: "Какое шоу или сериал ты не понимаешь, почему все любят?",
    },
  },
  {
    id: 288,
    category: "random",
    translations: {
      en: "In what art form would you like to try yourself?",
      ru: "В каком виде искусства ты бы хотел(а) себя попробовать?",
    },
  },
  {
    id: 289,
    category: "random",
    translations: {
      en: "Which advertisement really impressed and stuck in your memory?",
      ru: "Какая реклама тебе реально понравилась и запомнилась?",
    },
  },
  {
    id: 290,
    category: "random",
    translations: {
      en: "What captivates you more: cinema, theater, music, or books?",
      ru: "Что тебя больше захватывает: кино, театр, музыка или книги?",
    },
  },
  {
    id: 291,
    category: "random",
    translations: {
      en: "Would you like to act in a theater? What role?",
      ru: "Ты бы хотел(а) сыграть в театре? Какую роль?",
    },
  },
  {
    id: 292,
    category: "random",
    translations: {
      en: "Which type of pasta do you associate yourself with and why?",
      ru: "С каким видом макарон ты себя ассоциируешь и почему?",
    },
  },
  {
    id: 293,
    category: "random",
    translations: {
      en: "If you had a tail, how would you use it?",
      ru: "Если бы у тебя был хвост, как бы ты его использовал(а)?",
    },
  },
  {
    id: 294,
    category: "random",
    translations: {
      en: "What would you choose: a million dollars or the opportunity to go back a year?",
      ru: "Что бы ты выбрал(а): миллион долларов или возможность вернуться на год назад?",
    },
  },
  {
    id: 295,
    category: "random",
    translations: {
      en: "What would you do if all the people on the planet disappeared for a day?",
      ru: "Что бы ты делал(а), если бы все люди на планете на день исчезли?",
    },
  },
  {
    id: 296,
    category: "random",
    translations: {
      en: "What word do you like purely for its sound?",
      ru: "Какое слово тебе нравится чисто по звучанию?",
    },
  },
  {
    id: 297,
    category: "random",
    translations: {
      en: "What trait in people instantly irritates you?",
      ru: "Какая черта в людях тебя мгновенно раздражает?",
    },
  },
];

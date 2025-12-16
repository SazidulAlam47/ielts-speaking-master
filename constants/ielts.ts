// don't touch this file ever. it will always contain the same content for consistency across the app

import { TestContent } from '@/types';

export const IELTS_SPEAKING_BAND_DESCRIPTORS = `
**IELTS Speaking Band Descriptors:**

**1. Fluency and Coherence (FC)**
- **Band 9**: Speaks fluently with only rare repetition or self-correction. Any hesitation is content-related rather than to find words or grammar. Speaks coherently with fully appropriate cohesive features. Topic development is fully coherent and appropriately extended.
- **Band 8**: Speaks fluently with only occasional repetition or self-correction; hesitation is usually content-related and only rarely to search for language. Develops topics coherently and appropriately.
- **Band 7**: Speaks at length without noticeable effort or loss of coherence. May demonstrate language-related hesitation at times, or some repetition and/or self-correction. Uses a range of connectives and discourse markers with some flexibility.
- **Band 6**: Is willing to speak at length, though may lose coherence at times due to occasional repetition, self-correction or hesitation. Uses a range of connectives and discourse markers but not always appropriately.
- **Band 5**: Usually maintains flow of speech but uses repetition, self-correction and/or slow speech to keep going. May over-use certain connectives and discourse markers. Produces simple speech fluently, but more complex communication causes fluency problems.
- **Band 4**: Cannot respond without noticeable pauses and may speak slowly, with frequent repetition and self-correction. Links basic sentences but with repetitious use of simple connectives and some breakdowns in coherence.
- **Band 3**: Speaks with long pauses. Has limited ability to link simple sentences. Gives only simple responses and is frequently unable to convey basic message.
- **Band 2**: Pauses for lengthy periods before most words. Little communication possible.
- **Band 1**: No communication possible or speech is totally incoherent.
- **Band 0**: Does not attend.

**2. Lexical Resource (LR)**
- **Band 9**: Uses vocabulary with full flexibility and precision in all topics. Uses idiomatic language naturally and accurately.
- **Band 8**: Uses a wide vocabulary resource readily and flexibly to convey precise meaning. Uses less common and idiomatic vocabulary skilfully, with occasional inaccuracies. Uses paraphrase effectively as required.
- **Band 7**: Uses vocabulary resource flexibly to discuss a variety of topics. Uses some less common and idiomatic vocabulary and shows some awareness of style and collocation, with some inappropriate choices. Uses paraphrase effectively.
- **Band 6**: Has a wide enough vocabulary to discuss topics at length and make meaning clear in spite of inappropriacies. Generally uses paraphrase successfully.
- **Band 5**: Manages to talk about familiar and unfamiliar topics but uses vocabulary with limited flexibility. Attempts to use paraphrase but with mixed success.
- **Band 4**: Uses basic vocabulary for familiar topics but has limited vocabulary for unfamiliar topics. Frequent errors in word choice. Rarely attempts paraphrase.
- **Band 3**: Uses simple vocabulary to convey personal information. Has insufficient vocabulary for less familiar topics.
- **Band 2**: Only produces isolated words or memorised utterances.
- **Band 1**: No resource except a few isolated words.
- **Band 0**: Does not attend.

**3. Grammatical Range and Accuracy (GRA)**
- **Band 9**: Uses a full range of structures naturally and appropriately. Produces consistently accurate structures apart from 'slips' characteristic of native speaker speech.
- **Band 8**: Uses a wide range of structures flexibly. Produces a majority of error-free sentences with only very occasional inappropriacies or basic/non-systematic errors.
- **Band 7**: Uses a range of complex structures with some flexibility. Frequently produces error-free sentences, though some grammatical mistakes persist.
- **Band 6**: Uses a mix of simple and complex structures, but with limited flexibility. May make frequent mistakes with complex structures though these rarely cause comprehension problems.
- **Band 5**: Produces basic sentence forms with reasonable accuracy. Uses a limited range of more complex structures, but these usually contain errors and may cause some comprehension problems.
- **Band 4**: Produces basic sentence forms and some correct simple sentences but subordinate structures are rare. Errors are frequent and may lead to misunderstanding.
- **Band 3**: Attempts basic sentence forms but with very limited success, or relies on apparently memorised utterances. Makes numerous errors except in memorised expressions.
- **Band 2**: Cannot produce basic sentence forms.
- **Band 1**: No rateable language.
- **Band 0**: Does not attend.

**4. Pronunciation (P)**
- **Band 9**: Uses a full range of phonological features to convey precise and subtle meaning. Sustains flexible use of features throughout. Is effortless to understand.
- **Band 8**: Uses a wide range of phonological features. Sustains flexible use of features, with only occasional lapses. Is easy to understand throughout; L1 accent has minimal effect on intelligibility.
- **Band 7**: Shows all the positive features of Band 6 and some, but not all, of the positive features of Band 8.
- **Band 6**: Uses a range of phonological features with mixed control. Shows some effective use of features but this is not sustained. Can generally be understood throughout, though mispronunciation of individual words or sounds may reduce clarity at times.
- **Band 5**: Shows all the positive features of Band 4 and some, but not all, of the positive features of Band 6.
- **Band 4**: Uses a limited range of phonological features. Attempts to control features but lapses are frequent. Mispronunciations are frequent and cause some difficulty for the listener.
- **Band 3**: Shows some of the features of Band 2 and some, but not all, of the positive features of Band 4.
- **Band 2**: Speech is often unintelligible.
- **Band 1**: Speech is unintelligible.
- **Band 0**: Does not attend.
`;

export const TESTS: TestContent[] = [
  {
    part1: {
      id: '1',
      topic: 'International food',
      questions: [
        'Can you find food from many different countries where you live? Why/Why not?',
        'How often do you eat typical food from other countries? Why/Why not?',
        'Have you ever tried making food from another country? Why/Why not?',
        'What food from your country would you recommend to people from other countries?',
      ],
    },
    part2: {
      topic:
        'Describe a law that was introduced in your country and that you thought was a very good idea.',
      bullets: [
        'what the law was',
        'who introduced it',
        'when and why it was introduced',
        'explain why you thought it was a good idea',
      ],
    },
    part3: [
      {
        topic: 'School rules',
        questions: [
          'What kinds of rules are common in a school?',
          'How important is it to have rules in a school?',
          'What do you recommend should happen if children break school rules?',
        ],
      },
      {
        topic: 'Working in the legal profession',
        questions: [
          'Why might many students decide to study law at university?',
          'What personal qualities are needed to be a successful lawyer?',
          'Do you agree that working in the legal profession is very stressful?',
        ],
      },
    ],
  },
  {
    part1: {
      id: '2',
      topic: 'Travelling by plane',
      questions: [
        'Have you travelled a lot by plane? To where? Why/Why not?',
        'Why do you think some people enjoy travelling by plane?',
        'Would you like to live near an airport? Why/Why not?',
        'In the future, do you think that you will travel by plane more often?',
      ],
    },
    part2: {
      topic:
        'Describe a person from your country who has won a prize, award or medal.',
      bullets: [
        'who this person is',
        'which prize, award or medal they received',
        'what they did to win this',
        'explain whether you think it was right that they received it',
      ],
    },
    part3: [
      {
        topic: 'Rewards for children at school',
        questions: [
          'What types of school prizes do children in your country receive?',
          'What are the advantages of rewarding schoolchildren for good work?',
          "Do you agree it's more important for children to receive rewards from parents than teachers?",
        ],
      },
      {
        topic: 'Rewards for sportspeople',
        questions: [
          'Do you think some sportspeople are paid too much?',
          'Should everyone on a team get the same prize money when they win?',
          'Do you agree that taking part is more important than winning?',
        ],
      },
    ],
  },
  {
    part1: {
      id: '3',
      topic: 'Holidays',
      questions: [
        'Do you prefer spending holidays with friends or family? Why?',
        'What kind of holiday accommodation do you like to stay in? Why?',
        'What plans do you have for your next holiday?',
        'Is your city/region a good place for other people to visit on holiday?',
      ],
    },
    part2: {
      topic: 'Describe a car journey you made that took longer than expected.',
      bullets: [
        'where you were going',
        'who you were with',
        'how you felt during the journey',
        'explain why the journey took longer than expected',
      ],
    },
    part3: [
      {
        topic: 'Driving a car',
        questions: [
          'How interested are young people in learning to drive?',
          'What are the differences between driving in the countryside and in the city?',
          'Do you consider most drivers where you live to be good drivers?',
        ],
      },
      {
        topic: 'Electric cars',
        questions: [
          'How popular are electric cars in your country?',
          'In what ways could people be persuaded to buy electric cars?',
          'Do you think all cars will be electric one day?',
        ],
      },
    ],
  },
  {
    part1: {
      id: '4',
      topic: 'Cafés',
      questions: [
        'Do you have a favourite café? Why/Why not?',
        'Do you often go to cafés by yourself? Why/Why not?',
        'What helps to make a café popular?',
        'Why do some people prefer cafés that are part of large chains?',
      ],
    },
    part2: {
      topic: 'Describe a place you visited that has beautiful views.',
      bullets: [
        'where this place is',
        'when and why you visited',
        'what views you can see from this place',
        'explain why these views are so beautiful',
      ],
    },
    part3: [
      {
        topic: 'The beauty industry',
        questions: [
          'Do you agree that beauty products are a waste of money?',
          'How does the beauty industry advertise so successfully?',
          'Should beauty products be advertised to children?',
        ],
      },
      {
        topic: 'Beauty and culture',
        questions: [
          'Why do many people equate youth with beauty?',
          "Could being beautiful affect a person's success in life?",
          "Why might society's ideas about beauty change over time?",
        ],
      },
    ],
  },
  {
    part1: {
      id: '5',
      topic: 'Paying bills',
      questions: [
        'What kinds of bills do you have to pay?',
        'How do you usually pay your bills?',
        'Have you ever forgotten to pay a bill?',
        'Is there anything you could do to make your bills cheaper?',
      ],
    },
    part2: {
      topic: 'Describe some food or drink that you learned to prepare.',
      bullets: [
        'what food or drink you learned to prepare',
        'when and where you learned to prepare it',
        'how you learned to prepare it',
        'explain how you felt about learning to prepare this food or drink',
      ],
    },
    part3: [
      {
        topic: 'Young people and cooking',
        questions: [
          'What kinds of things can children learn to cook?',
          'Is it important for children to learn to cook?',
          'Do you think young people should learn to cook at home or at school?',
        ],
      },
      {
        topic: 'Working as a chef',
        questions: [
          'How enjoyable is it to work as a professional chef?',
          'What skills does someone need to be a great chef?',
          'How much influence do celebrity/TV chefs have?',
        ],
      },
    ],
  },
  {
    part1: {
      id: '6',
      topic: 'Science',
      questions: [
        'Did you like studying science at school?',
        'What do you remember about your science teachers?',
        'How interested are you in science now?',
        'What has been an important recent scientific development?',
      ],
    },
    part2: {
      topic:
        'Describe a tourist attraction in your country that you would recommend.',
      bullets: [
        'what the tourist attraction is',
        'where it is',
        'what visitors can see and do',
        'explain why you would recommend it',
      ],
    },
    part3: [
      {
        topic: 'Museums and art galleries',
        questions: [
          'What are the most popular museums in your area?',
          'Should museums and art galleries be free?',
          'What makes a museum interesting to visit?',
        ],
      },
      {
        topic: 'The holiday industry',
        questions: [
          'Why do some people prefer package holidays?',
          'Do large numbers of tourists cause problems for locals?',
          'What impact do large holiday resorts have on the environment?',
        ],
      },
    ],
  },
  {
    part1: {
      id: '7',
      topic: 'Online shopping',
      questions: [
        'How often do you buy things online?',
        'What was the last thing you bought online?',
        'Do you ever see things in shops and then buy them online?',
        'Is online shopping changing your town or city centre?',
      ],
    },
    part2: {
      topic:
        'Describe a time when you enjoyed visiting a member of your family in their home.',
      bullets: [
        'who you visited and where they lived',
        'why you made this visit',
        'what happened during this visit',
        'explain what you enjoyed about the visit',
      ],
    },
    part3: [
      {
        topic: 'Family occasions',
        questions: [
          'When do families celebrate together in your country?',
          'How often do all generations come together?',
          'Why might some people not enjoy attending family occasions?',
        ],
      },
      {
        topic: 'Everyday life in families',
        questions: [
          "Is it good for parents to help with children's schoolwork?",
          'How important is it for families to eat together daily?',
          'Should everyone in a family share household tasks?',
        ],
      },
    ],
  },
  {
    part1: {
      id: '8',
      topic: 'Sleep',
      questions: [
        'How many hours do you usually sleep at night?',
        'Do you sometimes sleep during the day?',
        "What do you do if you can't get to sleep at night?",
        'Do you remember dreams you had while asleep?',
      ],
    },
    part2: {
      topic:
        'Describe a time when you met someone who you became good friends with.',
      bullets: [
        'who you met',
        'where and when you met them',
        'what you thought about them at first',
        'explain why you became good friends',
      ],
    },
    part3: [
      {
        topic: 'Friends at school',
        questions: [
          'How important is it for children to have lots of friends?',
          'Is it wrong for parents to influence who their children befriend?',
          'Why do children choose different friends as they get older?',
        ],
      },
      {
        topic: 'Making new friends',
        questions: [
          "What's a good way to make friends in a new town?",
          'Can you move and easily make new friends?',
          'Is it harder to make friends as you get older?',
        ],
      },
    ],
  },
  {
    part1: {
      id: '9',
      topic: 'History',
      questions: [
        'What did you study in history lessons at school?',
        'Did you enjoy studying history? Why/Why not?',
        'How often do you watch TV programmes about history now?',
        'What period in history would you like to learn more about?',
      ],
    },
    part2: {
      topic: 'Describe the neighbourhood you lived in when you were a child.',
      bullets: [
        'where in your town/city the neighbourhood was',
        'what kind of people lived there',
        'what it was like to live there',
        "explain whether you'd like to live there in the future",
      ],
    },
    part3: [
      {
        topic: 'Neighbours',
        questions: [
          'What sort of things can neighbours do to help each other?',
          'How well do people know their neighbours in your country?',
          'How important is it to have good neighbours?',
        ],
      },
      {
        topic: 'Facilities in cities',
        questions: [
          'Which facilities are most important in cities?',
          'How does shopping in small local shops differ from large city centre shops?',
          'Should children always go to the school nearest to where they live?',
        ],
      },
    ],
  },
  {
    part1: {
      id: '10',
      topic: 'Reading',
      questions: [
        'Did you have a favourite book when you were a child?',
        'How much reading do you do for work/studies?',
        'What kinds of books do you read for pleasure?',
        'Do you prefer to read online or buy a copy?',
      ],
    },
    part2: {
      topic: 'Describe a big city you would like to visit.',
      bullets: [
        'which big city you would like to visit',
        'how you would travel there',
        'what you would do there',
        "explain why you'd like to visit",
      ],
    },
    part3: [
      {
        topic: 'Visiting cities on holiday',
        questions: [
          'What are the most interesting things to do in cities on holiday?',
          'Why can it be expensive to visit cities?',
          'Is it better to visit cities alone or with friends?',
        ],
      },
      {
        topic: 'The growth of cities',
        questions: [
          'Why have cities increased in size?',
          'What challenges do growing cities create?',
          'How will cities of the future be different?',
        ],
      },
    ],
  },
  {
    part1: {
      id: '11',
      topic: 'Drinks',
      questions: [
        'What do you like to drink with dinner?',
        'Do you drink a lot of water every day?',
        'Do you prefer tea or coffee?',
        'If people visit your home, what do you offer them to drink?',
      ],
    },
    part2: {
      topic: 'Describe a monument that you like.',
      bullets: [
        'what the monument is',
        'where it is',
        'what it looks like',
        'explain why you like it',
      ],
    },
    part3: [
      {
        topic: 'Public monuments',
        questions: [
          'What kinds of monuments do tourists enjoy?',
          'Why are there often statues of famous people?',
          'Should old monuments always be preserved?',
        ],
      },
      {
        topic: 'Architecture',
        questions: [
          'Why is architecture a popular university subject?',
          'How has home design changed in recent years?',
          "Does building design affect people's moods?",
        ],
      },
    ],
  },
  {
    part1: {
      id: '12',
      topic: 'Maps',
      questions: [
        'Is it better to use a paper map or phone map?',
        'When was the last time you used a map?',
        'Do you use a map in a new city?',
        'Do you find maps easy to read?',
      ],
    },
    part2: {
      topic: 'Describe an occasion when you had to do something in a hurry.',
      bullets: [
        'what you had to do',
        'why it was in a hurry',
        'how well you did it',
        'explain how you felt about it',
      ],
    },
    part3: [
      {
        topic: 'Arriving late',
        questions: [
          'Is it OK to arrive late when meeting a friend?',
          'What should happen to people who arrive late for work?',
          'How can people avoid arriving late?',
        ],
      },
      {
        topic: 'Managing study time',
        questions: [
          'Better to study for long periods or shorter blocks?',
          'Effects of not managing study time well?',
          'How important is leisure time for students?',
        ],
      },
    ],
  },
  {
    part1: {
      id: '13',
      topic: 'Future',
      questions: [
        'What job would you like to have in ten years?',
        'How useful will English be for your future?',
        'How much travelling do you hope to do?',
        'How do you think your life will change in the future?',
      ],
    },
    part2: {
      topic: 'Describe a book that you enjoyed because you had to think a lot.',
      bullets: [
        'what the book was',
        'why you decided to read it',
        'what reading it made you think about',
        'explain why you enjoyed it',
      ],
    },
    part3: [
      {
        topic: 'Children and reading',
        questions: [
          "Most popular types of children's books in your country?",
          'Benefits of parents reading to children?',
          'Should parents always let children choose the books?',
        ],
      },
      {
        topic: 'Electronic books',
        questions: [
          'How popular are e-books?',
          'Advantages of electronic books vs printed?',
          'Will e-books replace printed books?',
        ],
      },
    ],
  },
  {
    part1: {
      id: '14',
      topic: 'Social media',
      questions: [
        'Which social media sites do you use?',
        'How much time do you spend on social media?',
        'What information about yourself have you put on social media?',
        "Is there anything you don't like about social media?",
      ],
    },
    part2: {
      topic:
        'Describe something you liked very much which you bought for your home.',
      bullets: [
        'what you bought',
        'when and where you bought it',
        'why you chose it',
        'explain why you liked it so much',
      ],
    },
    part3: [
      {
        topic: 'Creating a nice home',
        questions: [
          'Why do some people buy lots of things for their home?',
          'Is it expensive to make a home look nice?',
          "Why don't some people care about how their home looks?",
        ],
      },
      {
        topic: 'Different types of home',
        questions: [
          'Is living in a flat better than living in a house?',
          'Will homes look different in the future?',
          "Do people's home preferences change as they get older?",
        ],
      },
    ],
  },
  {
    part1: {
      id: '15',
      topic: 'Neighbours',
      questions: [
        'How often do you see your neighbours?',
        'Do you invite your neighbours to your home?',
        'Do you think you are a good neighbour?',
        'Has a neighbour ever helped you?',
      ],
    },
    part2: {
      topic:
        'Describe a very difficult task that you succeeded in doing as part of your work or studies.',
      bullets: [
        'what task you did',
        'why it was very difficult',
        'how you worked on it',
        'explain how you felt when you completed it',
      ],
    },
    part3: [
      {
        topic: 'Difficult jobs',
        questions: [
          'What are the most difficult jobs people do?',
          'Why do some people choose difficult jobs?',
          'Do you agree all jobs are difficult sometimes?',
        ],
      },
      {
        topic: 'Personal and career success',
        questions: [
          'How important is having goals in personal life?',
          'Is hard work always necessary for career success?',
          'Are successful people always happy?',
        ],
      },
    ],
  },
  {
    part1: {
      id: '16',
      topic: 'Your neighbourhood',
      questions: [
        'Do you like the neighbourhood you live in? Why/Why not?',
        'What do you do in your neighbourhood in your free time?',
        'What new things would you like to have in your neighbourhood?',
        'Would you like to live in another neighbourhood in your town?',
      ],
    },
    part2: {
      topic: 'Describe a website you have bought something from.',
      bullets: [
        'what the website is',
        'what you bought',
        'how satisfied you were',
        'explain what you liked and disliked about using the website',
      ],
    },
    part3: [
      {
        topic: 'Shopping online',
        questions: [
          'What kinds of things do people often buy online?',
          'Why has online shopping become so popular?',
          'What are some disadvantages of buying online?',
        ],
      },
      {
        topic: 'Online retail businesses',
        questions: [
          'Should online prices always be lower than in shops?',
          'Will large shopping malls remain popular despite online shopping?',
          'Will some businesses operate only online in the future?',
        ],
      },
    ],
  },
  {
    part1: {
      id: '17',
      topic: 'Email',
      questions: [
        'What kinds of emails do you receive about your work/studies?',
        'Do you prefer to email, phone or text your friends?',
        'Do you reply to emails and messages as soon as you receive them?',
        'Are you happy to receive emails that are advertising things?',
      ],
    },
    part2: {
      topic: 'Describe a hotel that you know.',
      bullets: [
        'where this hotel is',
        'what it looks like',
        'what facilities the hotel has',
        "explain whether you think it's a nice hotel to stay in",
      ],
    },
    part3: [
      {
        topic: 'Staying in hotels',
        questions: [
          'What things are important when choosing a hotel?',
          'Why do some people like staying in hotels?',
          'Do you think staying in a luxury hotel is a waste of money?',
        ],
      },
      {
        topic: 'Working in a hotel',
        questions: [
          'Is hotel work a good career for life?',
          'How does working in a big hotel compare to a small hotel?',
          'What skills are needed to be a successful hotel manager?',
        ],
      },
    ],
  },
  {
    part1: {
      id: '18',
      topic: 'Languages',
      questions: [
        'How many languages can you speak?',
        'How useful will English be for you in your future?',
        'What do you remember about learning languages at school?',
        'What do you think would help you learn languages better?',
      ],
    },
    part2: {
      topic: 'Describe a website you bought something from.',
      bullets: [
        'what the website is',
        'what you bought',
        'how satisfied you were',
        'explain what you liked and disliked about using the website',
      ],
    },
    part3: [
      {
        topic: 'Shopping online / The culture of consumerism',
        questions: [
          'What kinds of things do people buy online?',
          'Why do many people buy things they do not need?',
          'Do the benefits of consumer society outweigh the disadvantages?',
        ],
      },
    ],
  },
  {
    part1: {
      id: '19',
      topic: 'Swimming',
      questions: [
        'Did you learn to swim when you were a child?',
        'How often do you go swimming now?',
        'What places are there for swimming where you live?',
        'Would you prefer outdoor or indoor swimming?',
      ],
    },
    part2: {
      topic: 'Describe a famous business person you know about.',
      bullets: [
        'who this person is',
        'what kind of business they are in',
        'what you know about their business',
        'explain what you think of this business person',
      ],
    },
    part3: [
      {
        topic: 'Famous people today',
        questions: [
          'What kinds of people are most famous in your country?',
          'Why are there many stories about famous people in the news?',
          'Do you agree many young people want to be famous?',
        ],
      },
      {
        topic: 'Advantages of being famous',
        questions: [
          'Is it easy for famous people to earn a lot of money?',
          'Why might famous people enjoy having fans?',
          'How could famous people use their influence to do good?',
        ],
      },
    ],
  },
  {
    part1: {
      id: '20',
      topic: 'Jewellery',
      questions: [
        'How often do you wear jewellery?',
        'What type of jewellery do you like to wear?',
        'When do people like to give jewellery as gifts?',
        'Have you ever given jewellery as a gift?',
      ],
    },
    part2: {
      topic:
        'Describe an interesting TV programme about a science topic that you watched.',
      bullets: [
        'what the science topic was',
        'when you saw the programme',
        'what you learned from it',
        'explain why you found it interesting',
      ],
    },
    part3: [
      {
        topic: 'Science and the public',
        questions: [
          'How interested are people in science in your country?',
          'Why might children be better at science than their parents?',
          'Should the public learn more about scientific developments?',
        ],
      },
      {
        topic: 'Scientific discoveries',
        questions: [
          'What are the important scientific discoveries in the last 100 years?',
          'Do you agree there are no major discoveries left to make?',
          'Who should pay for scientific research?',
        ],
      },
    ],
  },
  {
    part1: {
      id: '21',
      topic: 'Fast food',
      questions: [
        'What kinds of fast food have you tried?',
        'Do you ever use a microwave to cook quickly?',
        'How popular are fast-food restaurants where you live?',
        'When would you go to a fast-food restaurant?',
      ],
    },
    part2: {
      topic:
        'Describe some technology (e.g. an app, phone, software program) that you decided to stop using.',
      bullets: [
        'what technology it was',
        'when and where you got this technology',
        'why you decided to stop using it',
        'explain how you feel about the decision you made',
      ],
    },
    part3: [
      {
        topic: 'Computer games',
        questions: [
          'What kinds of computer games do people play in your country?',
          'Why do people enjoy computer games?',
          'Should computer games have a minimum age for players?',
        ],
      },
      {
        topic: 'Technology in the classroom',
        questions: [
          'In what ways can technology in the classroom be helpful?',
          'Do you agree that students are often better at using technology than their teachers?',
          'Do you believe that computers will ever replace human teachers?',
        ],
      },
    ],
  },
  {
    part1: {
      id: '22',
      topic: 'Television programmes',
      questions: [
        'Where do you usually watch TV programmes/shows?',
        "What's your favourite TV programme/show?",
        "Are there any programmes/shows you don't like watching?",
        'Do you think you will watch more TV or fewer TV programmes/shows in the future?',
      ],
    },
    part2: {
      topic: 'Describe someone you know who has started a business.',
      bullets: [
        'who this person is',
        'what work this person does',
        'why this person decided to start a business',
        'and explain whether you would like to do the same kind of work as this person',
      ],
    },
    part3: [
      {
        topic: 'Choosing work',
        questions: [
          'What kinds of jobs do young people not want to do in your country?',
          'Who is best at advising young people about choosing a job: teachers or parents?',
          'Is money the most important thing when choosing a job?',
        ],
      },
      {
        topic: 'Work–life balance',
        questions: [
          'Do you agree that many people nowadays are under pressure to work longer hours and take less holiday?',
          'What is the impact on society of people having a poor work–life balance?',
          'Could you recommend some effective strategies for governments and employers to ensure people have a good work–life balance?',
        ],
      },
    ],
  },
  {
    part1: {
      id: '23',
      topic: 'Age',
      questions: [
        'Are you happy to be the age you are now?',
        'When you were a child, did you think a lot about your future?',
        'Do you think you have changed as you have got older?',
        'What will be different about your life in the future?',
      ],
    },
    part2: {
      topic:
        'Describe a time when you started using a new technological device (e.g. a new computer or phone).',
      bullets: [
        'what device you started using',
        'why you started using this device',
        'how easy or difficult it was to use',
        'and explain how helpful this device was to you',
      ],
    },
    part3: [
      {
        topic: 'Technology and education',
        questions: [
          'What is the best age for children to start computer lessons?',
          'Do you think that schools should use more technology to help children learn?',
          'Do you agree or disagree that computers will replace teachers one day?',
        ],
      },
      {
        topic: 'Technology and society',
        questions: [
          'How much has technology improved how we communicate with each other?',
          'Do you agree that there are still many more major technological innovations to be made?',
          'Could you suggest some reasons why some people are deciding to reduce their use of technology?',
        ],
      },
    ],
  },
  {
    part1: {
      id: '24',
      topic: 'Money',
      questions: [
        'When you go shopping, do you prefer to pay for things in cash or by card? [Why?]',
        'Do you ever save money to buy special things? [Why/Why not?]',
        'Would you ever take a job which had low pay? [Why/Why not?]',
        'Would winning a lot of money make a big difference to your life? [Why/Why not?]',
      ],
    },
    part2: {
      topic:
        'Describe an interesting discussion you had as part of your work or studies.',
      bullets: [
        'what the subject of the discussion was',
        'who you discussed the subject with',
        'what opinions were expressed',
        'and explain why you found the discussion interesting',
      ],
    },
    part3: [
      {
        topic: 'Discussing problems with others',
        questions: [
          'Why is it good to discuss problems with other people?',
          'Do you think that it’s better to talk to friends and not family about problems?',
          'Is it always a good idea to tell lots of people about a problem?',
        ],
      },
      {
        topic: 'Communication skills at work',
        questions: [
          'Which communication skills are most important when taking part in meetings with colleagues?',
          'What are the possible effects of poor written communication skills at work?',
          'What do you think will be the future impact of technology on communication in the workplace?',
        ],
      },
    ],
  },

  {
    part1: {
      id: '25',
      topic: 'Animals',
      questions: [
        'Are there many animals or birds where you live? [Why/Why not?]',
        'How often do you watch programmes or read articles about wild animals? [Why?]',
        'Have you ever been to a zoo or a wildlife park? [Why/Why not?]',
        'Would you like to have a job working with animals? [Why/Why not?]',
      ],
    },
    part2: {
      topic:
        'Describe a website you use that helps you a lot in your work or studies.',
      bullets: [
        'what the website is',
        'how often you use the website',
        'what information the website gives you',
        "and explain how your work or studies would change if this website didn't exist",
      ],
    },
    part3: [
      {
        topic: 'The internet',
        questions: [
          'Why do some people find the internet addictive?',
          'What would the world be like without the internet?',
          'Do you think that the way people use the internet may change in the future?',
        ],
      },
      {
        topic: 'Social media websites',
        questions: [
          'What are the ways that social media can be used for positive purposes?',
          'Why do some individuals post highly negative comments about other people on social media?',
          "Do you think that companies' main form of advertising will be via social media in the future?",
        ],
      },
    ],
  },

  {
    part1: {
      id: '26',
      topic: 'Health',
      questions: [
        'Is it important to you to eat healthy food? [Why/Why not?]',
        'If you catch a cold, what do you do to help you feel better? [Why?]',
        'Do you pay attention to public information about health? [Why/Why not?]',
        'What could you do to have a healthier lifestyle?',
      ],
    },
    part2: {
      topic:
        'Describe an occasion when you had to wait a long time for someone or something to arrive.',
      bullets: [
        'who or what you were waiting for',
        'how long you had to wait',
        'why you had to wait a long time',
        'and explain how you felt about waiting a long time',
      ],
    },
    part3: [
      {
        topic: 'Arriving early',
        questions: [
          'In what kinds of situations should people always arrive early?',
          'How important is it to arrive early in your country?',
          'How can modern technology help people to arrive early?',
        ],
      },
      {
        topic: 'Being patient',
        questions: [
          'What kinds of jobs require the most patience?',
          'Is it always better to be patient in work (or studies)?',
          'Do you agree or disagree that the older people are, the more patient they are?',
        ],
      },
    ],
  },

  {
    part1: {
      id: '27',
      topic: 'Songs and singing',
      questions: [
        'Did you enjoy singing when you were younger? [Why?/Why not?]',
        'How often do you sing now? [Why?]',
        'Do you have a favourite song you like listening to? [Why?/Why not?]',
        'How important is singing in your culture? [Why?]',
      ],
    },
    part2: {
      topic:
        'Describe a film/movie actor from your country who is very popular.',
      bullets: [
        'who this actor is',
        'what kinds of films/movies he/she acts in',
        "what you know about this actor's life",
        'and explain why this actor is so popular',
      ],
    },
    part3: [
      {
        topic: 'Watching films/movies',
        questions: [
          'What are the most popular types of films in your country?',
          'What is the difference between watching a film in the cinema and watching a film at home?',
          'Do you think cinemas will close in the future?',
        ],
      },
      {
        topic: 'Theatre',
        questions: [
          "How important is the theatre in your country's history?",
          'How strong a tradition is it today in your country to go to the theatre?',
          'Do you think the theatre should be run as a business or as a public service?',
        ],
      },
    ],
  },

  {
    part1: {
      id: '28',
      topic: 'Clothes',
      questions: [
        'Where do you buy most of your clothes? [Why?]',
        'How often do you buy new clothes for yourself? [Why?]',
        'How do you decide which clothes to buy? [Why?]',
        'Have the kinds of clothes you like changed in recent years? [Why?/Why not?]',
      ],
    },
    part2: {
      topic:
        'Describe an interesting discussion you had about how you spend your money.',
      bullets: [
        'who you had the discussion with',
        'why you discussed this topic',
        'what the result of the discussion was',
        'and explain why this discussion was interesting for you',
      ],
    },
    part3: [
      {
        topic: 'Money and young people',
        questions: [
          'Why do some parents give their children money to spend each week?',
          'Do you agree that schools should teach children how to manage money?',
          'Do you think it is a good idea for students to earn money while studying?',
        ],
      },
      {
        topic: 'Money and society',
        questions: [
          "Do you think it is true that in today's society money cannot buy happiness?",
          'What disadvantages are there in a society where the gap between rich and poor is very large?',
          'Do you think richer countries have a responsibility to help poorer countries?',
        ],
      },
    ],
  },

  {
    part1: {
      id: '29',
      topic: 'Art',
      questions: [
        'Did you enjoy doing art lessons when you were a child? [Why?/Why not?]',
        'Do you ever draw or paint pictures now? [Why?/Why not?]',
        'When was the last time you went to an art gallery or exhibition? [Why?]',
        'What kind of pictures do you like having in your home? [Why?]',
      ],
    },
    part2: {
      topic:
        'Describe a time when you visited a friend or family member at their workplace.',
      bullets: [
        'who you visited',
        'where this person worked',
        "why you visited this person's workplace",
        "and explain how you felt about visiting this person's workplace",
      ],
    },
    part3: [
      {
        topic: 'Different kinds of workplaces',
        questions: [
          'What things make an office comfortable to work in?',
          'Why do some people prefer to work outdoors?',
          'Do you agree that the building people work in is more important than the colleagues they work with?',
        ],
      },
      {
        topic: 'The importance of work',
        questions: [
          "What would life be like if people didn't have to work?",
          'Are all jobs of equal importance?',
          'Why do some people become workaholics?',
        ],
      },
    ],
  },
  {
    part1: {
      id: '30',
      topic: 'Weekends',
      questions: [
        'How do you usually spend your weekends?',
        'Which is your favourite part of the weekend?',
        'Do you think your weekends are long enough?',
        'How important is it to have free time at the weekends?',
      ],
    },
    part2: {
      topic: 'Describe someone you know who does something well.',
      bullets: [
        'who this person is',
        'how you know this person',
        'what they do well',
        'and explain why you think this person is so good at this',
      ],
    },
    part3: [
      {
        topic: 'Skills and abilities',
        questions: [
          'What skills and abilities do people most want to have today?',
          'Which skills should children learn at school?',
          'Which skills do you think will be important in the future?',
        ],
      },
      {
        topic: 'Salaries for skilled people',
        questions: [
          'Which kinds of jobs have the highest salaries in your country?',
          'Are there other jobs that you think should have high salaries?',
          'Would it be better for society if everyone had the same salary?',
        ],
      },
    ],
  },

  {
    part1: {
      id: '31',
      topic: 'Music',
      questions: [
        'What types of music do you like to listen to?',
        'At what times of day do you listen to music?',
        'Did you learn to play a musical instrument when you were a child?',
        'Do you think all children should learn to play a musical instrument?',
      ],
    },
    part2: {
      topic: 'Describe a shop near where you live that you sometimes use.',
      bullets: [
        'what sort of product or service it sells',
        'what the shop looks like',
        'where it is located',
        'and explain why you use this shop',
      ],
    },
    part3: [
      {
        topic: 'Local business',
        questions: [
          'What types of local business are there in your neighbourhood?',
          'Are local shops important for a neighbourhood?',
          'How do large shopping malls affect small local businesses?',
        ],
      },
      {
        topic: 'People and business',
        questions: [
          'Why do some people want to start their own business?',
          'What are the most important qualities for a good business person?',
          'What difficulties do new businesses often face?',
        ],
      },
    ],
  },

  {
    part1: {
      id: '32',
      topic: 'Photographs',
      questions: [
        'What type of photos do you like taking?',
        'What do you do with photos you take?',
        'When you visit other places, do you take photos or buy postcards?',
        'Do you like people taking photos of you?',
      ],
    },
    part2: {
      topic: 'Describe a day when you thought the weather was perfect.',
      bullets: [
        'where you were on this day',
        'what the weather was like on this day',
        'what you did during the day',
        'and explain why you thought the weather was perfect on this day',
      ],
    },
    part3: [
      {
        topic: 'Types of weather',
        questions: [
          'What types of weather do people in your country dislike most?',
          'What jobs can be affected by different weather conditions?',
          'Are there important festivals that celebrate a season or type of weather?',
        ],
      },
      {
        topic: 'Weather forecasts',
        questions: [
          "How important is it for everyone to check the next day's weather?",
          'What is the best way to get accurate weather information?',
          'How easy is it to predict the weather in your country?',
        ],
      },
    ],
  },

  {
    part1: {
      id: '33',
      topic: 'Names',
      questions: [
        'How did your parents choose your name(s)?',
        'Does your name have any special meaning?',
        'Is your name common or unusual in your country?',
        'If you could change your name, would you? Why/Why not?',
      ],
    },
    part2: {
      topic:
        'Describe a TV documentary you watched that was particularly interesting.',
      bullets: [
        'what the documentary was about',
        'why you decided to watch it',
        'what you learnt during the documentary',
        'and explain why the documentary was interesting',
      ],
    },
    part3: [
      {
        topic: 'Different types of TV programmes',
        questions: [
          'What are the most popular kinds of TV programmes in your country?',
          'Do you think there are too many game shows on TV nowadays?',
          'How easy is it for people to get news in your country?',
        ],
      },
      {
        topic: 'TV advertising',
        questions: [
          'What types of products are advertised most on TV?',
          'Do people pay attention to adverts on TV?',
          'How important are regulations on TV advertising?',
        ],
      },
    ],
  },

  {
    part1: {
      id: '34',
      topic: 'Friends',
      questions: [
        'How often do you go out with friends?',
        'Tell me about your best friend at school.',
        'How friendly are you with your neighbours?',
        'Which is more important to you, friends or family?',
      ],
    },
    part2: {
      topic: 'Describe a writer you would like to meet.',
      bullets: [
        'who the writer is',
        'what you know about this writer already',
        'what you would like to find out about him/her',
        'and explain why you would like to meet this writer',
      ],
    },
    part3: [
      {
        topic: 'Reading and children',
        questions: [
          'What kinds of books are popular with children in your country?',
          'Why do some children not read books very often?',
          'How can children be encouraged to read more?',
        ],
      },
      {
        topic: 'Reading for different purposes',
        questions: [
          'Are there any occasions when reading at speed is a useful skill?',
          'Are reading novels more interesting than factual books?',
          'Why do some people prefer specific types of reading?',
        ],
      },
    ],
  },

  {
    part1: {
      id: '35',
      topic: 'Travel',
      questions: [
        'Do you enjoy travelling?',
        'Have you done much travelling?',
        "Do you think it's better to travel alone or with other people?",
        'Where would you like to travel in the future?',
      ],
    },
    part2: {
      topic: 'Describe a child that you know.',
      bullets: [
        'who this child is and how often you see him/her',
        'how old this child is',
        'what he or she is like',
        'and explain what you feel about this child',
      ],
    },
    part3: [
      {
        topic: 'Relationships between parents and children',
        questions: [
          'How much time do children spend with their parents in your country?',
          'Has the relationship between parents and children changed in recent years?',
          'Why is spending time together important for relationships?',
        ],
      },
      {
        topic: "Children's free-time activities",
        questions: [
          'What are the most popular free-time activities with children today?',
          'Are these activities good for their health?',
          "How might children's activities change in the future?",
        ],
      },
    ],
  },

  {
    part1: {
      id: '36',
      topic: 'School',
      questions: [
        'Did you go to secondary/high school near where you lived?',
        'What did you like about your secondary/high school?',
        "Tell me about anything you didn't like at your school.",
        'How do you think your school could be improved?',
      ],
    },
    part2: {
      topic:
        "Describe something you don't have now but would like to own in the future.",
      bullets: [
        'what this thing is',
        'how long you have wanted to own it',
        'where you first saw it',
        'and explain why you would like to own it',
      ],
    },
    part3: [
      {
        topic: 'Owning things',
        questions: [
          'What types of things do young people most want to own today?',
          'Why do some people feel they need to own things?',
          'Do you think owning lots of possessions is a sign of success?',
        ],
      },
      {
        topic: 'Salaries for skilled people',
        questions: [
          'Do television and films make people want to get new possessions?',
          'Why do they have this effect?',
          'Are there benefits to society of people wanting new possessions?',
        ],
      },
    ],
  },

  {
    part1: {
      id: '37',
      topic: 'Games',
      questions: [
        'What games are popular in your country?',
        'Do you play any games?',
        'How do people learn to play games in your country?',
        "Do you think it's important for people to play games?",
      ],
    },
    part2: {
      topic:
        'Describe an open-air or street market which you enjoyed visiting.',
      bullets: [
        'where the market is',
        'what the market sells',
        'how big the market is',
        'and explain why you enjoyed visiting this market',
      ],
    },
    part3: [
      {
        topic: 'Shopping at markets',
        questions: [
          'Do people enjoy going to open-air markets in your country?',
          'Which type of market is more popular: food markets or clothes markets?',
          'Are markets more suitable for selling certain types of things?',
        ],
      },
      {
        topic: 'Shopping in general',
        questions: [
          'What are the advantages of buying things from shops rather than markets?',
          'How does advertising influence what people choose to buy?',
          'Have recent changes affected general shopping habits?',
        ],
      },
    ],
  },

  {
    part1: {
      id: '38',
      topic: 'Giving gifts',
      questions: [
        'When do people give gifts or presents in your country?',
        'Do you ever take a gift when you visit someone in their home?',
        'When did you last receive a gift? What was it?',
        'Do you enjoy looking for gifts for people?',
      ],
    },
    part2: {
      topic: 'Describe something you did that was new or exciting.',
      bullets: [
        'what you did',
        'where and when you did this activity',
        'who you shared this activity with',
        'and explain why this activity was new or exciting for you',
      ],
    },
    part3: [
      {
        topic: 'Doing new things',
        questions: [
          'Why do some people like doing new things?',
          'What problems can people have when they try new activities for the first time?',
          "Do you think it's best to do new things alone or with other people?",
        ],
      },
      {
        topic: 'Learning new things',
        questions: [
          'What kinds of things do children learn to do when they are young?',
          'Is it more important to be able to learn new things now than in the past?',
          'Do you agree that learning styles have changed?',
        ],
      },
    ],
  },

  {
    part1: {
      id: '39',
      topic: 'Telephoning',
      questions: [
        'How often do you make telephone calls?',
        'Who do you spend most time talking to on the telephone?',
        "When do you think you'll next make a telephone call?",
        'Do you sometimes prefer to send a text message instead of telephoning?',
      ],
    },
    part2: {
      topic:
        'Describe a journey (e.g., by car, plane, boat) that you remember well.',
      bullets: [
        'where you went',
        'how you travelled',
        'why you went on the journey',
        'and explain why you remember this journey well',
      ],
    },
    part3: [
      {
        topic: 'Reasons for daily travel',
        questions: [
          'Why do people need to travel every day?',
          'What problems can people have on their daily journey to work or school?',
          'Do you agree that daily journeys like these will be less common in the future?',
        ],
      },
      {
        topic: 'Benefits of international travel',
        questions: [
          'What do you think people can learn from travelling to other countries?',
          "Can travel make a positive difference to a country's economy?",
          'Do you think a society can benefit if members have experience of travelling to other countries?',
        ],
      },
    ],
  },

  {
    part1: {
      id: '40',
      topic: 'Bicycles',
      questions: [
        'How popular are bicycles in your hometown?',
        'How often do you ride a bicycle?',
        'Do you think bicycles are suitable for all ages?',
        'What are the advantages of a bicycle compared to a car?',
      ],
    },
    part2: {
      topic: 'Describe a person who has done a lot of work to help people.',
      bullets: [
        'who this person is/was',
        'where this person lives/lived',
        'what he/she has done to help people',
        'and explain how you know about this person',
      ],
    },
    part3: [
      {
        topic: 'Helping other people in the community',
        questions: [
          'What are some ways people can help others in the community?',
          'Why do some people like to help other people?',
          'Do you agree there are more people helping others now than in the past?',
        ],
      },
      {
        topic: 'Community services',
        questions: [
          'What types of services (e.g., libraries, health centres) are available in your area?',
          'Do you think there are enough services available?',
          'Who should pay for the services that are available to people in a community?',
        ],
      },
    ],
  },

  {
    part1: {
      id: '41',
      topic: 'Neighbours',
      questions: [
        'How well do you know the people who live next door to you?',
        'How often do you see them?',
        'Do you often interact with your neighbours?',
        'Have your neighbours ever helped you?',
      ],
    },
    part2: {
      topic: 'Describe a party that you enjoyed.',
      bullets: [
        'whose party it was and what it was celebrating',
        'where the party was held and who went to it',
        'what people did during the party',
        'and explain what you enjoyed about this party',
      ],
    },
    part3: [
      {
        topic: 'Family parties',
        questions: [
          'What are the main reasons why people organise family parties in your country?',
          'Is spending money on parties a good trend or a bad trend?',
          'Are there differences between family parties and parties given by friends?',
        ],
      },
      {
        topic: 'National celebrations',
        questions: [
          'What kinds of national celebrations do you have in your country?',
          'Who tends to enjoy national celebrations more: young or old people?',
          'Why do some people think national celebrations are a waste of government money?',
        ],
      },
    ],
  },

  {
    part1: {
      id: '42',
      topic: 'Newspapers and magazines',
      questions: [
        'Which magazines and newspapers do you read?',
        'What kinds of article are you most interested in?',
        'Do you read news online or buy a copy?',
        'Why do you prefer that format?',
      ],
    },
    part2: {
      topic:
        'Describe an idea you had for improving something at work or college.',
      bullets: [
        'when and where you had your idea',
        'what your idea was',
        'who you told about your idea',
        'and explain why you thought your idea would make an improvement',
      ],
    },
    part3: [
      {
        topic: 'Ideas and education',
        questions: [
          'Some people think education should be about memorising important ideas. Do you agree?',
          'Should education encourage students to have their own new ideas?',
          'How could teachers help students to develop and share their own ideas?',
        ],
      },
      {
        topic: 'Ideas in the workplace',
        questions: [
          'Should employers encourage workers to have new ideas about improving the company?',
          'Why do people sometimes dislike ideas just because they are new?',
          'Which is more important for a successful company: having new ideas or putting them into practice?',
        ],
      },
    ],
  },

  {
    part1: {
      id: '43',
      topic: 'Laughing',
      questions: [
        'What kinds of things make you laugh?',
        'Do you like making other people laugh?',
        "Do you think it's important for people to laugh?",
        'Is laughing the same as feeling happy?',
      ],
    },
    part2: {
      topic:
        'Describe an idea you had for improving something at work or college.',
      bullets: [
        'when and where you had your idea',
        'what your idea was',
        'who you told about your idea',
        'and explain why you thought your idea would make an improvement',
      ],
    },
    part3: [
      {
        topic: 'Ideas and education',
        questions: [
          'Should education encourage students to have their own new ideas?',
          'How do you think teachers could help students to develop and share ideas?',
          'Is it more difficult to accept new ideas or put them into practice?',
        ],
      },
      {
        topic: 'Ideas in the workplace',
        questions: [
          'Should employers encourage workers to have new ideas?',
          'Why might people dislike ideas simply because they are new?',
          'Which is more important: creating ideas or implementing them?',
        ],
      },
    ],
  },

  {
    part1: {
      id: '44',
      topic: 'Cold weather',
      questions: [
        'Have you ever been in very cold weather?',
        'How often is the weather cold where you come from?',
        'Are some parts of your country colder than others?',
        'Would you prefer to live in a hot place or a cold place?',
      ],
    },
    part2: {
      topic:
        'Describe a competition (e.g., TV, college, work or sports) that you took part in.',
      bullets: [
        'what kind of competition it was and how you found out about it',
        'what you had to do and what the prizes were',
        'and explain why you chose to take part in this competition',
      ],
    },
    part3: [
      {
        topic: 'Competitions in school',
        questions: [
          'Why do some school teachers use competitions as class activities?',
          "Do you think it's good to give prizes to children who do well at school?",
          'Would you say that schools for young children have become more or less competitive?',
        ],
      },
      {
        topic: 'Sporting competitions',
        questions: [
          'What are the advantages and disadvantages of intensive training for young sportspeople?',
          'Do you think competition leads to better performance from sports stars?',
          'Is it possible to become too competitive in sport?',
        ],
      },
    ],
  },

  {
    part1: {
      id: '45',
      topic: 'Keeping in contact with people',
      questions: [
        'How do you usually contact your friends?',
        'Do you prefer to contact different people in different ways?',
        'Do you find it easy to keep in contact with friends and family?',
        'In your country, did people in the past keep in contact in the same ways?',
      ],
    },
    part2: {
      topic: 'Describe a party you enjoyed.',
      bullets: [
        'whose party it was and what it was celebrating',
        'where the party was held and who went',
        'what people did during the party',
        'and explain what you enjoyed about this party',
      ],
    },
    part3: [
      {
        topic: 'Family parties',
        questions: [
          'What are the main reasons people organise family parties?',
          'Is it common to spend a lot of money on parties in your country?',
          'Are there differences between parties given by family and parties given by friends?',
        ],
      },
      {
        topic: 'National celebrations',
        questions: [
          'Who tends to enjoy national celebrations more: young people or old people?',
          'Why do some people think national celebrations are a waste of government money?',
          'Would you agree or disagree with that view?',
        ],
      },
    ],
  },

  {
    part1: {
      id: '46',
      topic: 'Keeping in contact with people (alt)',
      questions: [
        'How do you keep contact with friends?',
        'Do you prefer to contact people in different ways?',
        'Do you think keeping in contact is easier now than before?',
      ],
    },
    part2: {
      topic: 'Describe a party that you enjoyed.',
      bullets: [
        'whose party it was',
        'what it was celebrating',
        'what happened at the party',
        'and explain why you enjoyed it',
      ],
    },
    part3: [
      {
        topic: 'Family parties',
        questions: [
          'Why do people organise family parties?',
          'Are family parties more common now than before?',
          'How important are family parties culturally?',
        ],
      },
    ],
  },

  {
    part1: {
      id: '47',
      topic: 'Laughing (alt)',
      questions: [
        'What kinds of things make you laugh?',
        'Do you like making other people laugh?',
        'Is laughing important in daily life?',
      ],
    },
    part2: {
      topic:
        'Describe an idea you had for improving something at work or college.',
      bullets: [
        'what the idea was',
        'when and where you had it',
        'who you told',
        'and explain why it would help',
      ],
    },
    part3: [
      {
        topic: 'Ideas and education',
        questions: [
          'Should education encourage new ideas?',
          'How can teachers help students develop ideas?',
          'Is it harder to accept new ideas nowadays?',
        ],
      },
    ],
  },

  {
    part1: {
      id: '48',
      topic: 'Competitions',
      questions: [
        'Did you take part in competitions at school?',
        'Do you think competitions are useful?',
        'What kind of competitions are common in your area?',
      ],
    },
    part2: {
      topic: 'Describe a competition you took part in.',
      bullets: [
        'what kind of competition it was',
        'how you prepared',
        'what happened during the competition',
        'and explain why you took part',
      ],
    },
    part3: [
      {
        topic: 'Competitions in school',
        questions: [
          'Why do teachers use competitions in class?',
          'Do competitions motivate students?',
          'Can competitions have negative effects?',
        ],
      },
    ],
  },

  {
    part1: {
      id: '49',
      topic: 'Bicycles (alt)',
      questions: [
        'Are bicycles common where you live?',
        'Who mostly rides bicycles in your town?',
        'Should cities be more bicycle-friendly?',
      ],
    },
    part2: {
      topic: 'Describe a person who has helped many people.',
      bullets: [
        'who this person is',
        'what they did to help people',
        'how long they have been helping',
        'and explain how you know about this person',
      ],
    },
    part3: [
      {
        topic: 'Helping other people',
        questions: [
          'What ways can people help their communities?',
          'Do you think community volunteering is valued?',
          'Who should support community services?',
        ],
      },
    ],
  },

  {
    part1: {
      id: '50',
      topic: 'Television',
      questions: [
        'How often do you watch television?',
        'Which television channel do you usually watch?',
        'Do you watch many programmes on TV?',
      ],
    },
    part2: {
      topic: 'Describe a shop near where you live that you sometimes use.',
      bullets: [
        'what the shop sells',
        'what the shop looks like',
        'where it is located',
        'and explain why you use it',
      ],
    },
    part3: [
      {
        topic: 'Local business',
        questions: [
          'Why are local businesses important?',
          'How do shopping malls affect small shops?',
          'Will local shops continue to exist?',
        ],
      },
    ],
  },

  {
    part1: {
      id: '51',
      topic: 'Flowers',
      questions: [
        'Do you like to have flowers in your home?',
        'Where would you go to buy flowers?',
        'Do you give flowers as gifts?',
      ],
    },
    part2: {
      topic: 'Describe an idea you had for improving something.',
      bullets: [
        'what the idea was',
        'when you had it',
        'what you did with the idea',
        'and explain why it would make an improvement',
      ],
    },
    part3: [
      {
        topic: 'Ideas and education',
        questions: [
          'Should schools focus on memorising facts or developing ideas?',
          'How can students be encouraged to think creatively?',
          'Do adults learn new things in the same way as children?',
        ],
      },
    ],
  },

  {
    part1: {
      id: '52',
      topic: 'Cold weather (alt)',
      questions: [
        'Have you been in very cold weather?',
        'Is the weather cold where you come from?',
        'Would you prefer to live in a cold or hot place?',
      ],
    },
    part2: {
      topic: 'Describe a journey you remember well.',
      bullets: [
        'where you went',
        'how you travelled',
        'what happened on the journey',
        'and explain why you remember it',
      ],
    },
    part3: [
      {
        topic: 'Benefits of travel',
        questions: [
          'What can people learn from travelling?',
          'How does travel help people understand other cultures?',
          'Do you think travel will become easier in the future?',
        ],
      },
    ],
  },
  {
    part1: {
      id: '53',
      topic: 'Your country',
      questions: [
        'Which part of your country do most people live in?',
        'Tell me about the main industries there.',
        'How easy is it to travel around your country?',
        'Has your country changed much since you were a child?',
      ],
    },
    part2: {
      topic: 'Describe a well-known person you like or admire.',
      bullets: [
        'who this person is',
        'what this person has done',
        'why this person is well known',
        'and explain why you admire this person',
      ],
    },
    part3: [
      {
        topic: 'Famous people in your country',
        questions: [
          'What kind of people become famous people these days?',
          'Is this different from the kind of achievement that made people famous in the past? In what way?',
          'How do you think people will become famous in the future?',
        ],
      },
      {
        topic: 'Being in the public eye',
        questions: [
          'What are the good things about being famous? Are there any disadvantages?',
          'How does the media in your country treat famous people?',
          'Why do you think ordinary people are interested in the lives of famous people?',
        ],
      },
    ],
  },

  {
    part1: {
      id: '54',
      topic: 'Colour',
      questions: [
        'What’s your favourite colour? Why?',
        'Do you like the same colours now as you did when you were younger? Why/Why not?',
        'What can you learn about a person from the colours they like?',
        'Do any colours have a special meaning in your culture?',
      ],
    },
    part2: {
      topic: 'Describe a song or a piece of music you like.',
      bullets: [
        'what the song or music is',
        'what kind of song or music it is',
        'where you first heard it',
        'and explain why you like it',
      ],
    },
    part3: [
      {
        topic: 'Music and young people',
        questions: [
          'What kinds of music are popular with young people in your culture?',
          'What do you think influences a young person’s taste in music?',
          'How has technology affected the kinds of music popular with young people?',
        ],
      },
      {
        topic: 'Music and society',
        questions: [
          'Tell me about any traditional music in your culture.',
          'How important is it for a culture to have musical traditions?',
          'Why do you think countries have national anthems or songs?',
        ],
      },
    ],
  },

  {
    part1: {
      id: '55',
      topic: 'Entertainment',
      questions: [
        'Do you prefer relaxing at home or going out in the evening? Why?',
        'When you go out for an evening, what do you like to do?',
        'How popular is this with other people in your country?',
        'Is there any kind of entertainment you do not like? Why/Why not?',
      ],
    },
    part2: {
      topic: 'Describe one of your friends.',
      bullets: [
        'how you met',
        'how long you have known each other',
        'how you spend time together',
        'and explain why you like this person',
      ],
    },
    part3: [
      {
        topic: 'Qualities of friends',
        questions: [
          'What do you think are the most important qualities for friends to have?',
          'Which are more important to people, their family or their friends? Why?',
          'What do you think causes friendships to break up?',
        ],
      },
      {
        topic: 'Other relationships',
        questions: [
          'What other types of relationship, apart from friends or family, are important today?',
          'Have relationships with neighbours changed in recent years? How?',
          'How important is it for a person to spend some time alone? Why/Why not?',
        ],
      },
    ],
  },

  {
    part1: {
      id: '56',
      topic: 'Clothes',
      questions: [
        'How important are clothes and fashion to you? Why/Why not?',
        'What kind of clothes do you dislike? Why?',
        'How different are the clothes you wear now from those you wore 10 years ago?',
        'What do you think the clothes we wear say about us?',
      ],
    },
    part2: {
      topic: 'Describe a festival that is important in your country.',
      bullets: [
        'when the festival occurs',
        'what you did during it',
        'what you like or dislike about it',
        'and explain why this festival is important',
      ],
    },
    part3: [
      {
        topic: 'Purpose of festivals and celebrations',
        questions: [
          'Why do you think festivals are important events in the working year?',
          'Has the original significance of festivals been lost today? Is that good or bad?',
          'Do you think new festivals will be introduced in the future? What kind?',
        ],
      },
      {
        topic: 'Festivals and the media',
        questions: [
          'What role does the media play in festivals?',
          "Do you think it's good or bad to watch festivals on TV? Why?",
          'How may globalisation affect different festivals around the world?',
        ],
      },
    ],
  },

  {
    part1: {
      id: '57',
      topic: 'Friends',
      questions: [
        'Are your friends mostly your age or different ages? Why?',
        'Do you usually see your friends during the week or at weekends? Why?',
        'The last time you saw your friends, what did you do together?',
        'In what ways are your friends important to you?',
      ],
    },
    part2: {
      topic: 'Describe an interesting historic place.',
      bullets: [
        'what it is',
        'where it is located',
        'what you can see there now',
        'and explain why this place is interesting',
      ],
    },
    part3: [
      {
        topic: 'Looking after historic places',
        questions: [
          'How do people in your country feel about protecting historic buildings?',
          'Can an area benefit from having an interesting historic place locally? In what way?',
          'What do you think will happen to historic places in the future? Why?',
        ],
      },
      {
        topic: 'The teaching of history at school',
        questions: [
          'How were you taught history when you were at school?',
          'Are there other ways people can learn about history, apart from at school?',
          'Do you think history will still be a school subject in the future? Why?',
        ],
      },
    ],
  },

  {
    part1: {
      id: '58',
      topic: 'Food and cooking',
      questions: [
        'What kinds of food do you like to eat?',
        'What kind of new food would you like to try? Why?',
        'Do you like cooking? Why/Why not?',
        'What was the last meal you cooked?',
        'Do you prefer home-cooked food or food from restaurants? Why?',
      ],
    },
    part2: {
      topic: 'Describe an interest or hobby that you enjoy.',
      bullets: [
        'how you became interested in it',
        'how long you have been doing it',
        'why you enjoy it',
        'and explain what benefits you get from this interest or hobby',
      ],
    },
    part3: [
      {
        topic: 'The social benefits of hobbies',
        questions: [
          "Do you think having a hobby is good for people's social life? In what way?",
          'Are there any negative effects of spending too much time on a hobby?',
          'Why do people need to have an interest or hobby?',
        ],
      },
      {
        topic: 'Leisure time',
        questions: [
          'How much time do people spend on work vs leisure in your country?',
          'Has the amount of free time changed in the last fifty years?',
          'Do you think people will have more or less free time in the future? Why?',
        ],
      },
    ],
  },

  {
    part1: {
      id: '59',
      topic: 'Leisure',
      questions: [
        'Do you have any hobbies or interests?',
        'How did you become interested in that hobby?',
        'What is there to do in your free time in your hometown?',
        'How do you usually spend your holidays?',
        'Is there anywhere you would particularly like to visit? Why?',
      ],
    },
    part2: {
      topic: 'Describe a river, lake or sea which you like.',
      bullets: [
        'what the river, lake or sea is called',
        'where it is',
        'what the land near it is like',
        'and explain why you like this river, lake or sea',
      ],
    },
    part3: [
      {
        topic: 'Water-based leisure activities',
        questions: [
          'What do people enjoy doing when they visit rivers, lakes or the sea?',
          'What benefits do people get from activities in the water?',
          'What are the advantages and disadvantages of going to the sea vs a swimming pool?',
        ],
      },
      {
        topic: 'Economic importance of rivers, lakes and the sea',
        questions: [
          'How does water transport compare with other kinds of transport?',
          'How important is it for a town or city to be located near water? Why?',
          'Have jobs in fishing or water transport changed recently? Why?',
        ],
      },
    ],
  },

  {
    part1: {
      id: '60',
      topic: 'Your favourite place',
      questions: [
        'What place do you most like to visit?',
        'How often do you visit this place?',
        'Why do you like it so much?',
        'Is it popular with many other people?',
        'Has it changed very much since you first went there? In what way?',
      ],
    },
    part2: {
      topic: 'Describe a useful website you have visited.',
      bullets: [
        'what the website was',
        'how you found the address for this website',
        'what the website contained',
        'and explain why it was useful to you',
      ],
    },
    part3: [
      {
        topic: 'The Internet and communication',
        questions: [
          'What effect has the Internet had on how people communicate?',
          'Why is the Internet used more and more for communication?',
          'How reliable is information from the Internet? What about Internet news?',
        ],
      },
      {
        topic: 'The Internet and shopping',
        questions: [
          'Why do some people use the Internet for shopping? Why doesn’t everyone?',
          'What kinds of things are easy to buy and sell online? Examples?',
          'Will Internet shopping become more or less popular in the future? Why?',
        ],
      },
    ],
  },

  {
    part1: {
      id: '61',
      topic: 'Festivals',
      questions: [
        'Tell me about the most important festival in your country.',
        'What special food and activities are connected with this festival?',
        'What do you most enjoy about it?',
        'Do you think festivals are important for a country? Why?',
      ],
    },
    part2: {
      topic:
        'Describe a film or TV programme which has made a strong impression on you.',
      bullets: [
        'what kind of film or programme it was',
        'when you saw it',
        'what it was about',
        'and explain why it made such an impression on you',
      ],
    },
    part3: [
      {
        topic: 'Cinema-going habits',
        questions: [
          'Has the cinema increased or decreased in popularity recently?',
          'Will this trend continue in the future?',
        ],
      },
      {
        topic: 'Real vs fictional stories on screen',
        questions: [
          'What are the advantages and disadvantages of making films of real-life events?',
          'How important is it for the filmmaker to remain true to the original story?',
        ],
      },
      {
        topic: 'Censorship and freedom',
        questions: [
          'Should films and TV be censored or should people choose freely?',
          'How will censorship laws change in the next 20 years?',
        ],
      },
    ],
  },

  {
    part1: {
      id: '62',
      topic: 'Visitors',
      questions: [
        'What would you suggest a visitor should see and do in your country?',
        'Are there any traditional arts or music you would recommend?',
        'Tell me about the kinds of foreign visitors who go to your country.',
        'In what ways has tourism changed your country?',
      ],
    },
    part2: {
      topic: 'Describe a memorable event in your life.',
      bullets: [
        'when the event took place',
        'where the event took place',
        'what happened exactly',
        'and explain why this event was memorable for you',
      ],
    },
    part3: [
      {
        topic: 'The role of ceremony',
        questions: [
          'How important are ceremonies in our lives?',
          'Do you think private or public ceremonies will change in the future?',
        ],
      },
      {
        topic: 'Attitudes to marriage',
        questions: [
          'Have attitudes to marriage changed in recent years?',
          'How do men and women feel differently about marriage?',
        ],
      },
      {
        topic: 'Events of national/global significance',
        questions: [
          'What kinds of national events make headlines in your country?',
          'Does your media focus more on global or national events?',
        ],
      },
    ],
  },
  {
    part1: {
      id: '63',
      topic: 'Walking',
      questions: [
        'How much walking do you do in your daily life?',
        'Did you walk more when you were at school than now?',
        'What places are there to go for a walk near where you live?',
        'Would you ever like to go on a walking holiday?',
      ],
    },
    part2: {
      topic:
        'Describe a play or a film you have seen that you would like to see again with friends.',
      bullets: [
        "what play or film you'd like to go to see again",
        'who you would go with',
        'what other people have said about this play or film',
        'and explain why you would like to see this play or film again with friends',
      ],
    },
    part3: [
      {
        topic: 'Theatre and performances',
        questions: [
          'What are the most popular kinds of plays or shows at theatres in your country?',
          'How easy is it to get tickets to the theatre?',
          'Do you think theatres need to do more to attract younger audiences?',
        ],
      },
      {
        topic: 'Acting as a profession',
        questions: [
          'What do you think attracts people to working as an actor?',
          'What are some of the qualities that a person needs to have if they want to become an actor?',
          'Can you think of any disadvantages of working as an actor?',
        ],
      },
    ],
  },

  {
    part1: {
      id: '64',
      topic: 'Museums',
      questions: [
        'Did you enjoy going to museums when you were a child?',
        'Are there any interesting museums near where you live now?',
        'Do you think it is best to go to museums by yourself or with friends?',
        "When you visit another city or country, do you think it's important to go to a museum there?",
      ],
    },
    part2: {
      topic:
        'Describe a piece of work you did for your job or your studies that you felt very satisfied with.',
      bullets: [
        'what this piece of work was',
        'why you did this piece of work',
        'who or what helped you to do this work',
        'and explain why you felt so satisfied with this piece of work',
      ],
    },
    part3: [
      {
        topic: 'Life satisfaction',
        questions: [
          "What are some aspects of people's lives that they can often be dissatisfied with?",
          'Would you say that having ambitions in life is always a positive thing?',
          'What do you believe are the most important components of a satisfying life?',
        ],
      },
      {
        topic: 'Job satisfaction',
        questions: [
          'What makes a job more satisfying: a high salary or having good colleagues?',
          'Do you think people need to change jobs regularly if they want to stay satisfied at work?',
          'Is it possible to find job satisfaction in all types of work?',
        ],
      },
    ],
  },

  {
    part1: {
      id: '65',
      topic: 'Fruit',
      questions: [
        "What's your favourite fruit?",
        "Are there any kinds of fruit that you don't like eating?",
        'Do you like eating cooked food that has fruit in it?',
        "Where's the best place to buy fruit where you live?",
      ],
    },
    part2: {
      topic: 'Describe a time when you changed a plan you had made.',
      bullets: [
        'what your original plan was',
        'why you changed it',
        'what new plan you made',
        'and explain how you felt about changing your plan',
      ],
    },
    part3: [
      {
        topic: 'Making plans',
        questions: [
          'What kinds of plans do friends make together?',
          "Do you think it's better to discuss future plans with friends or with family?",
          'When making plans for the future, is it important not to copy friends?',
        ],
      },
      {
        topic: 'Choosing a career',
        questions: [
          'When people are choosing what to study, how important is it that their course should lead directly to a career?',
          'Why is it a good idea to get some work experience before deciding on a future career?',
          'How easy do you think it is for people to change from one career to another?',
        ],
      },
    ],
  },

  {
    part1: {
      id: '66',
      topic: 'Personal qualities',
      questions: [
        'What do you think your best personal qualities are?',
        'Do you have the same personal qualities as your parents? Why/Why not?',
        'What personal qualities are important to you in a friend? Why?',
        'Do you think you have the personal qualities to be a good/successful leader? Why/Why not?',
      ],
    },
    part2: {
      topic:
        'Describe a time when you had a long discussion about a news story.',
      bullets: [
        'what the news story was about',
        'who you discussed this news story with',
        "what people's opinions were",
        'and explain why you had such a long discussion about this news story',
      ],
    },
    part3: [
      {
        topic: 'News consumption',
        questions: [
          'How do most people find out about the news in your country?',
          'Are people more interested in local news than national news?',
          'How important is it to know about international news?',
        ],
      },
      {
        topic: 'Discussion programmes',
        questions: [
          'Why are discussion programmes involving members of the public popular on TV and radio?',
          'What kinds of people want to take part in discussion programmes?',
          'Do discussion programmes influence people in a good or bad way?',
        ],
      },
    ],
  },
];

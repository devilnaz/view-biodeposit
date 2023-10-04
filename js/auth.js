(()=>{var e={559:()=>{function e(){console.log("click");let e=document.querySelector(".dropdown-menu"),t=document.querySelector("#menu-ground"),n=document.querySelector("#menu-btn");document.querySelector("body");n.classList.toggle("menu__btn_open"),t.classList.toggle("header__ground_hide"),"hide"===e.getAttribute("data-visible")?e.setAttribute("data-visible","show"):e.setAttribute("data-visible","hide")}(()=>{document.querySelector("#menu-btn").addEventListener("click",e),document.querySelector("#menu-ground").addEventListener("click",e);let t=document.querySelectorAll("a.dropdown-menu__link");for(let n of t)n.addEventListener("click",e);document.querySelector(".dropdown-menu__btn-link").addEventListener("click",e)})();document.addEventListener("scroll",((e,t)=>{let n,o;return function(){const a=this,i=arguments;o?(clearTimeout(n),n=setTimeout((function(){Date.now()-o>=t&&(e.apply(a,i),o=Date.now())}),t-(Date.now()-o))):(e.apply(a,i),o=Date.now())}})((function(){let e=document.querySelector(".wrap-header"),t=e.offsetHeight,n=document.querySelector(".box-header");document.querySelector(".feature-section");window.pageYOffset>=700?(n.style.height=t+"px",e.classList.add("wrap-header_sticky")):(e.classList.remove("wrap-header_sticky"),n.style.height="auto")}),200))}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}(()=>{"use strict";n(559);const e={nav:{roi:"ROI",yieldCalculator:"Yield Calculator",faq:"FAQ",contactUs:"Contact us"},btns:{invest:"Invest",buy:"Buy Olive Trees"},auth:{logIn:"Log in",registration:"Registration",signUp:"Sign Up",forgot:"Forgot your password?",wrongPassword:'Wrong password, please enter the correct password, or <a href="#" class="def-link">reset your password</a>',name:"Name",surname:"Surname",phone:"Phone number",email:"Email",password:"Password",confirm:"Password confirmation",code:"Code",privacyPolicy:"Privacy Policy"},banner:{text1:"How to create <br>a stable pension <br>of $5,000 per/mo?",text2:"How to create <br>$64,000 worth  of capital for your children by investing $1,180?",text3:"Investments <br>with a yield of 39% per annum for large investors"},main:{title:"Investment <span>In Olive Business</span>",desc:"We offer to invest in one of the most profitable and reliable bio-assets — <strong><i>olive trees — with a constant income for more than 100 years</i></strong>",btn:"Invest",feature:{desc1:"avrg expected ROI for the first 10 years",title1:"more than 27% per annum",desc2:"expected  ROI from year 10 ",title2:"more than 58% per annum",desc3:"as the value of an olive tree increases, it increases on avrg",title3:"more than 5 times"}},feature:{title:"<span>BioDeposit</span> — Is A Revolutionary Project That Combines Traditional Business With Modern Technologies",card1:{title:"Stable Income",desc:"by investing in olive trees, you can provide yourself and your descendants with a stable income"},card2:{title:"Eco-Investor Status",desc:"get the prestigious status of an eco-investor"},card3:{title:"Family Capital",desc:"create wealth for your children and grandchildren"},card4:{title:"Savings Protection",desc:"protect and increase your savings"}},explanation:{title:"OLIVE TREE – <span>HIGHLY PROFITABLE  BIO ASSET</span>",container:{title:"What Explains The High ROI In The Olive Business?",item1:"Low land costs compared to Europe",item2:"Low cost of cultivation, processing and labor",item3:"State support for agriculture",item4:"Preferential taxation for agricultural producers",item5:"Application of modern technologies",item6:"The Kakhetia region is geographically wetter than the best regions of Spain",item7:"Favorable economic climate in Georgia"}},income:{title:"How is the investor's income formed?",desc1:"Olive trees of the Oliva European variety (Gemlik, Ayvalik, etc.) have been planted on the plantation. This variety of olives can produce up to 120-150 kg of olives in the 10th year and beyond. To calculate the yield, we took a yield of 80 kg per tree",desc2:"From 80 kg of olives, 16-20 liters of oil can be produced. Olive oil is sold in bulk at the exchange price, averaging ~$5 per liter (Current price $8.6/liter)",desc3:"The service company takes 40% of the total amount\n    Thus, income is formed as follows: 80kg -> 16l of olive oil x $5 = $80 x 60% = $48 per 1 tree",desc4:"* An important point: the yield in a particular year may differ from the calculated yield"},howItWorks:{title:"How The Olive Business Works",item1:{title:"Planting",desc:"A plantation is being planted in a mild temperate climate"},item2:{title:"Growing",desc:"The olive tree grows for the first three years, and begins to bear fruit from the age of 4"},item3:{title:"Service",desc:"Trees are looked after by a service company"},item4:{title:"Income",desc:"Starting from the 4th year, Investors receive income after the sale of the harvest by the service company"}},expected:{title:"Expected Investor <br />Income From 1 Tree",shortTitle:"Expected Investor Income:",desc1:"At the current price of $9 per liter of olive oil",desc2:"At an average price of $5 per liter of olive oil",year:"years",year2:"years",yearLast:"years and beyond"},calculate:{title:"Calculate Your Income:",desc:"Choose the purpose of investment:",card1:{title:"Stable Long-Term Income",desc:"Stable long-term investment in the olive business with predictable high expected ROI in the long term through the purchase of young trees with a 4-year harvest"},card2:{title:"Build Capital For Your Kids And Grandchildren",desc:"Long-term investment in olive trees to generate a stable annual income after a period of accumulation or full / partial sale of the asset:<br>\n      •    Capital accumulation period of 18 years: purchase of trees and reinvestment of income in new young trees during the accumulation period<br>\n      •    Income period after accumulation period or sale of some or all trees\n      "},btn:"Calculate"},whatIncluded:{title:"What Is Included In The Price Of The Tree?",block1:{title:"Service",desc:"Full service cycle for the first three years, including plantation protection, land cultivation, irrigation, pest control, tree pruning, fertilization, etc."},block2:{title:"Tree replacement",desc:"A guarantee for the first three years of the tree's life: in the event of the death of the tree, it will be replaced with a similar one from the company's fund"},block3:{title:"Harvesting",desc:"The service company carries out the harvesting, processing into olive oil and the sale of oil at the exchange price"},block4:{title:"Audit",desc:"Annual harvest audit"}},team:{title:"Experienced Project Team",desc:'We have been growing olive trees for <span style="white-space: nowrap;">over 8 years</span><br>\n    Our team includes many specialists from various fields, such as agronomists, irrigation specialists and agricultural equipment operators, and many others. We also buy new John Deere tractors, which allows us to optimize processes in the fields.\n    ',card1:{name:"Alexander Savin",desc:"CEO and Founder of the project\n      More than 8 years in the olive business, managing over 300,000 olive trees.\n      More than 10 years of experience in business management and marketing.\n      "},card2:{name:"Merab Liparteliani",desc:"Coordinator of the processes of creating olive plantations.\n      Graduate of Tbilisi Higher Agrarian University. Operations Officer at the Agricultural Research Center under the Ministry of Agriculture of Georgia. 17 years of experience in the agro-industrial complex, specializing in soil science, fertilizers, mechanization, agronomic services, organization of logistics of agricultural machinery."},card3:{name:"Pedro Lechuga Lechuga (Spain)",desc:"Project consultant.\n      More than 50 years of experience in olive growing, new plantations setup, olive processing and olive trading in Spain, Canada and the USA.\n      Farmer, owner of olive plantations and own brand of olive oil"},card4:{name:"Zhikiria Tiker (Türkiye)",desc:"Project consultant for relations with farmers and participants in the Turkish olive industry. He has international experience (including in the production of cosmetics from olives). Lives and works in Turkey, the country with the most actively developing olive industry."},card5:{name:"Ahmad Hasan Sobeikh (Egypt)",desc:"10 years of experience in the development of international wholesale trade in agricultural products. Advises the project on international trade issues, provides communication between the project, Egyptian olive farmers and owners of olive processing plants."}},form:{name:"Your name",email:"Email or Telegram",btn:"Buy Olive Trees",btnPartner:"Become a partner"},treeForm:{title:"By Buying Olive Trees, <span>You Are Investing In Your Future And The Future Of The Planet!</span>",desc:"Do you want to buy a tree or a whole plantation?\n    Leave your contacts and we will contact you:",telegram:{title:"Or contact us on Telegram:",btn:"Write to Telegram"}},partnerForm:{title:"Become <span>a partner</span>",desc1:"Our team is constantly developing and expanding its staff of partners around the world.",desc2:"We pay a transparent and honest commission at the time of a transaction with an investor. And the best partners receive very attractive and interesting bonuses!\n    Our partners undergo professional training so that clients experience pleasure at all stages of cooperation."},faq:{title:"FAQ",card1:{title:"What is BioDeposit?",content:'<p class="faq-card__desc">BioDeposit is a revolutionary project that combines traditional business with modern technologies.</p>\n      <p class="faq-card__desc">\n      We work with a bio-asset, the most environmentally friendly type of global investment, which allows us not only to provide for ourselves for many years to come, but also to leave a legacy of a green planet. The current activity of the BioDeposit project is related to the planting of olive plantations.</p>\n      <p class="faq-card__desc">\n      The olive business is highly profitable, although it has remained closed for many years. Until now, it was not available to ordinary investors. The BioDeposit project provides access to it to any investor, regardless of the geography of residence and regardless of the amount of investment.\n      </p>\n      <p class="faq-card__desc">\n      The essence of the BioDeposit project is that anyone anywhere in the world, regardless of their country of residence, can become the owner of an olive tree growing in Georgia and receive a harvest every year.\n      </p>'},card2:{title:"Why did we choose olives?",content:"Today, olive trees are recognized as one of the most profitable types of bio asset. They are able to live and bear fruit for hundreds of years. It is logical that the BioDeposit project was decided to be built around olives."},card3:{title:"Who is in charge of the project?",content:"BioDeposit is a project of Agromine JSC. The company is based in Georgia, where the project team has been planting olive plantations for more than 8 years."},card4:{title:"Why was not chosen Spain, Greece or some other country for which olives are a traditional crop?",content:"In Georgia, in addition to a suitable climate and fertile soil, there is also a favorable economic component: state support, preferential taxation for agricultural producers, as well as lower costs for cultivation, care and processing."},card5:{title:"Why did the project come into being right now?",content:"As already mentioned, thanks to the rapid growth of the economy and the program of state support, there are especially favorable conditions for the olive business in Georgia today. But no less important here is the role of new digital technologies that have become widespread in recent years, have significantly expanded the possibilities of online business and made it possible to implement our idea technically."},card6:{title:"What are the business prospects?",content:"Demand for quality olive oil exceeds supply, and the amount that can be grown in Georgia is a drop in the bucket compared to global consumption. So there are no sales issues."},card7:{title:"What is the minimum investment amount?",content:"The base price of one young olive tree (which should be considered a seedling that has not reached 12 months from the date of planting) is $118. As the tree grows, so does its price."},card8:{title:"How can I become a plantation owner?",content:'<p class="faq-card__desc">\n      To own a tree or even an entire plantation in Georgia, you do not need to be a citizen of this country. Becoming our partner is easy: just Sign up on our website, or, if you have already done so, go to your personal account and pay for the required number of trees. \n      </p>\n    <p class="faq-card__desc">\n      We also provide the opportunity to organize your own plantation through an partner program. You can get more details about it by sending us a request in Telegram @ or by filling out the form above.\n      </p>'},card9:{title:"How safe are such investments? What happens if my tree dies?",content:'<p class="faq-card__desc">\n      Very rare It happens that young trees do not take root. The risks identified by our consultants (international experts with many years of experience) do not exceed 2-3%. As for our investors, they do not risk anything, because for each plantation we form a special guarantee fund - additional trees with a threefold margin.\n      </p>\n    <p class="faq-card__desc">\n      Each of our plantations is 20 hectares planted with 12,000 olives. 11 thousand trees go on sale, another thousand constitute the reserve fund. If something happens to your tree, you will get exactly the same from the fund. It will be an olive of the same age and harvest. The only thing that will change for you is the coordinates of the tree inside the plantation.\n      </p>\n    <p class="faq-card__desc">\n      We take full responsibility for the safety of the tree during the first three years (insurance and tree care included in the base price). Starting from the fourth year, when the tree begins to bear fruit, you can insure the tree against any force majeure with an independent insurance company.\n      </p>'},card10:{title:"What determines the value of a tree?",content:"The older the tree, the higher its value. In the period from the 4th to the 10th year, the amount of profit increases due to the harvest brought by the tree. Accordingly, the cost of the bio asset also increases. When the tree reaches 10 years of age, the growth in value stops."},card11:{title:"What is BioDeposit's benefit?",content:"By selling trees, we pursue several goals:\n      - Expansion of the plantation to obtain a raw material base and the production of olive products;\n      - Providing our own service company with a constant income (because we get part of your harvest);\n      - Greening the planet (thanks to one tree, two people can breathe);\n      - Promotion of olive oil.\n      "},card12:{title:"Are olives the only bio asset that brings big profits?",content:"Not the only one. We are exploring all types of profitable bio-assets and it is possible that in the future we will also include them in the BioDeposit project."},card13:{title:"Have the trees already been planted or is this still to be done?",content:"The trees have already been planted. This is done for the convenience of investors. By purchasing not a seedling, but a young tree, you will quickly begin to receive a harvest from it."},card14:{title:"Can I give my tree to someone as a present?",content:"Certainly. And not just as a gift. For the Biodeposit project, we have developed a number of legally protected options, which, in addition to gifting, also include the possibility of donation (charity) and inheritance."},card15:{title:"Can I pick up my tree?",content:"Plantation sites were carefully selected by agricultural specialists so that each tree would grow where nature and man created the best conditions for this. But if the owner of an olive tree wants to dig it up and transplant it, say, to his summer cottage, then there are no technical obstacles for this."},card16:{title:"If I want to buy many trees at once, can I count on the wholesale price?",content:"If you are ready to buy more than 3 thousand olive trees, then special conditions apply to you, which you can find out about by filling out the form on this page."}},difference:{title:"A NOBLE BUSINESS <span>YOU WILL LEAVE </span>TO YOUR DESCENDANTS",yearFoundation:"BioDeposit <span>since 2017</span>"},copyright:"©2023 BioDeposit. All rights reserved",modal:{title:"Expected <br />Income Calculator",numberTrees:"Number of trees:",investmentAmount:"Investment amount",additionalParameters:"Additional parameters:",btn:"Buy Olive Trees",oilDesc:"The cost of olive oil, 1 liter:",oil:"The cost of olive oil",productivityDesc:"Yield per 1 tree: kg of olives from the 10th year",productivity:"Yield per 1 tree",kg:"kg",things:"",invest:{title:"Avrg expected income per year:",card1:"Expected income for 10 years:",card2:"Income per year for the first 10 years",year:"year",yearLast:"year and beyong"},capital:{title:"Expected income per year when the child",card1:"Number of trees in year 18",card2:"Average expected income on the 18th of the year:",year1:"y.o.",year2:"y.o.",year3:"y.o.",yearLast:"y.o. and older"}}},t={nav:{roi:"Доходность",yieldCalculator:"Калькулятор",faq:"FAQ",contactUs:"Контакты"},btns:{invest:"Инвестировать",buy:"Купить дерево"},auth:{logIn:"Вход",registration:"Регистрация",signUp:"Регистрация",forgot:"Забыли пароль?",wrongPassword:'Неправильный пароль, введите корректный пароль, либо <a href="#" class="def-link">восстановите пароль</a>',name:"Имя",surname:"Фамилия",phone:"Номер телефона",email:"Электронная почта",password:"Пароль",confirm:"Подтверждение пароля",code:"Код",privacyPolicy:"Политика Конфиденциальности"},banner:{text1:"Как создать <br>стабильную <br>пенсию в $5 000?",text2:"Как создать капитал <br>\n    в $64 000 своим детям,  <br>\n    проинвестировав $1180?",text3:"Инвестиции  <br>\n    с доходностью  <br>\n    от 39% годовых для<br>\n    крупных инвесторов"},main:{title:"Инвестиции <span>в оливковый бизнес</span>",desc:"Мы предлагаем инвестировать в один из самых прибыльных и надежных биоактивов —\n    <strong><i>оливковые деревья — с постоянным доходом более 100 лет</i></strong>",btn:"Начать инвестировать",feature:{desc1:"средняя ожидаемая <br />\n      доходность в течении <br />\n      первых 10 лет",title1:"более 27% годовых",desc2:"ожидаемая <br />\n      доходность инвестора <br />\n      с 10-го года",title2:"более 58% годовых",desc3:"по мере роста стоимость <br />\n      оливкового дерева <br />\n      увеличивается в среднем",title3:"более 5-ти раз"}},feature:{title:"<span>BioDeposit</span> — революционный проект, соединяющий традиционный бизнес с современными технологиями",card1:{title:"Стабильный доход",desc:"инвестируя в оливковые деревья вы можете обеспечить себе и своим потомкам стабильный доход"},card2:{title:"Cтатус эко инвестора",desc:"получить престижный статус <br />эко инвестора"},card3:{title:"Родовой капитал",desc:"создать капитал своим <br />детям и внукам"},card4:{title:"Защита накоплений",desc:"Защитить и преумножить <br />свои накопления"}},explanation:{title:"Оливковое дерево - <span>высокодоходный актив</span>",container:{title:"За счет чего формируется высокая доходность инвестиций в оливковый бизнес?",item1:"Низкая стоимость плодородной земли по сравнению с Европой",item2:"Низкая себестоимость выращивания, переработки и рабочей силы",item3:"Поддержка государства, оказывающее поддержку сельскому хозяйству в виде инфраструктуры",item4:"Льготное налогообложение для сельхозпроизводителей",item5:"Применение современных технологий",item6:"\n      Регион Кахетия географически влажнее самых лучших регионов Испании, которая является мировым лидером в производстве оливок\n    ",item7:"Благоприятный экономический климат в Грузии"}},income:{title:"Как формируется доход инвестора?",desc1:"\n    На плантация посажены оливковые деревья сорта Олива Европейская (Gemlik, Ayvalik, т.п.). Данный сорт оливок может давать до 120-150 кг оливок\n    на 10-й год и далее. Для расчета доходность мы брали урожайность 80 кг с дерева\n  ",desc2:"\n    Из 80 кг оливок можно произвести 16-20 л масла. Оливковое масло оптом продается по биржевой цене, в среднем ~$5 за литр (Текущая цена\n    $7,2/литр).\n  ",desc3:"Сервисная компания забирает себе 40% от итоговой суммы. <br>\n    Таким образом доход формируется следующим образом: 80кг -> 16л масла x $5 = $80 x 60%\n    = $48 с 1 дерева",desc4:"\n    * Важный момент: урожайность в конкретный год может отличаться от расчетной урожайности\n  "},howItWorks:{title:"Как устроен оливковый бизнес",item1:{title:"Посадка",desc:"Засаживается плантация <br />в мягком умеренном <br />климате"},item2:{title:"Выращивание",desc:"Первые три года олива <br />растет, с 4-го года <br />начинает плодоносить"},item3:{title:"Уход",desc:"За деревьями ухаживает <br />сервисная компания"},item4:{title:"Получение дохода",desc:"С 4-го года инвесторы начинают получать доход после реализации урожая сервисной компанией"}},expected:{title:"Ожидаемый доход <br />инвестора c 1 дерева",shortTitle:"Ожидаемый доход инвестора:",desc1:"при текущей цене $9 за литр оливкого масла",desc2:"при средней цене $5 за литр оливкого масла",year:"лет",year2:"года",yearLast:"лет и далее"},calculate:{title:"Рассчитайте свой доход:",desc:"Выберите цель инвестирования:",card1:{title:"Создание стабильного <br />инвестиционного дохода",desc:"\n      Стабильные долгосрочные инвестиции в оливковый бизнес с прогнозируемой высокой ожидаемой доходностью в длительном периоде времени за счет\n      покупки молодых деревьев с выходом на урожай в 4-ый год\n    "},card2:{title:"Сформировать капитал <br />для своих детей и внуков",desc:"Долгосрочные инвестиции в оливковые деревья для получения стабильного ежегодного дохода после периода накопления или полной/частичной\n      продаже актива: <br>\n      • Период накопления капитала – до достижения 18 лет ребенку: покупка деревьев и реинвестирование дохода в новые молодые\n      деревья в период накопления <br>\n      • Период получения дохода после периода накопления или продажа части или всех деревьев"},btn:"Выбрать"},whatIncluded:{title:"Что входит в стоимость дерева?",block1:{title:"Обслуживание",desc:"\n      Полный цикл обслуживания на первые три года, включающий в себя охрану плантации, обработку земли, орошение, борьбу с вредителями, обрезку\n      деревьев, внесение удобрений и т. д.\n    "},block2:{title:"Замена дерева",desc:"\n      Гарантия в первые три года жизни дерева: в случае гибели дерева, оно будет заменено на аналогичное из фонда компании\n    "},block3:{title:"Сбор урожая",desc:"Сервисная компания проводит сбор урожая, переработку в оливковое масло и продажу масла по биржевой цене"},block4:{title:"Аудит",desc:"Ежегодный аудит сбора урожая"}},team:{title:"Опытная команда проекта",desc:'Мы выращиваем оливковые деревья уже <span style="white-space: nowrap;">более 8 лет </span><br />В нашей команде много специалистов различных сфер, таких как агрономы, специалисты по\n    орошению, операторы сельхозоборудования <br />и многие другие. Так же мы закупаем новые тракторы John Deere, что позволяет оптимизировать процессы\n    на полях.',card1:{name:"Александр Савин",desc:"\n      CEO и основатель проекта Более 8 лет в оливковом бизнесе, где под управлением более 300 000 оливковых деревьев. Более 10 лет опыта\n      управления бизнесом и в маркетинге.\n    "},card2:{name:"Мераб Липартелиани",desc:"\n      Координатор процессов создания оливковых плантаций. Выпускник Высшего Сельскохозяйственного университета Тбилиси. Операционный\n      сотрудник сельскохозяйственного научно-исследовательского центра при министерстве сельского хозяйства Грузии. 17-летний опыт работы в\n      сельхозиндустрии, специализация – почвоведенье, удобрение, механизация, агрономическое сервисное обслуживание, организация логистики\n      сельхозтехники.\n    "},card3:{name:"Педро Лечуга(Испания)",desc:"\n      Консультант проекта. Более 50 лет опыта в выращивании оливок, создании новых плантаций, переработке оливки и торговле готовой\n      продукцией в Испании, Канаде и США. Фермер, владелец оливковых плантаций и собственного бренда оливкового масла\n    "},card4:{name:"Ахмад Хасан Собейх (Египет)",desc:"\n      10-летний опыт в развитии международной оптовой торговли продуктами сельскохозяйственной деятельности. Консультирует проект по\n      вопросам международной торговли, обеспечивает коммуникацию между проектом, египетскими фермерами оливковой отрасли и владельцами\n      заводов по переработке оливы.\n    "},card5:{name:"Жикирия Тикер (Турция)",desc:"\n      Консультант проекта по связям с фермерами и участниками турецкой оливковой индустрии. Имеет международный опыт работы (в том числе в\n      сфере производства косметики из оливки). Живет и работает в Турции – стране с наиболее активно развивающейся оливковой индустрией.\n    "}},form:{name:"Ваше имя",email:"Email или Telegram",btn:"Купить деревья",btnPartner:"Отправить заявку"},treeForm:{title:"Покупая оливковые деревья – <span>вы инвестируете в свое будущее и в будущее планеты!</span>",desc:"Хотите купить дерево или целую плантацию? Оставьте свои контакты и мы свяжемся с вами:",telegram:{title:"Или напишите <br />нам в Telegram:",btn:"<span>Написать в Telegram</span>"}},partnerForm:{title:"Стать <span>партнером</span>",desc1:"\n    Наша компания постоянно развивается и расширяет свой штат партнеров по всему миру. Мы платим прозрачную и честную комиссию в момент сделки с\n    инвестором. А лучшие партнеры получают весьма привлекательные и интересные бонусы\n  ",desc2:"\n    Наши партнеры проходят профессиональное обучение, чтобы наши клиенты испытывали удовольствие на всех этапах сотрудничества\n  "},faq:{title:"FAQ",card1:{title:"Что такое BioDeposit?",content:'<p class="faq-card__desc">BioDeposit — революционный проект, соединяющий традиционный бизнес с современными технологиями.</p>\n      <p class="faq-card__desc">\n        Мы работаем с биоактивом — наиболее экологичным видом глобальных инвестиций, позволяющим не только обеспечить себя на много лет вперед,\n        но и оставить потомкам в наследство зеленую планету. Текущая деятельность проекта BioDeposit связана с посадкой оливковых плантаций.\n      </p>\n      <p class="faq-card__desc">\n        Оливковый бизнес приносит большие прибыли, много лет оставаясь закрытым. До сих пор он был недоступен обычным инвесторам. Проект\n        BioDeposit открывает к нему доступ для любого инвестора независимо от географии проживания и не зависимо то объема инвестиций\n      </p>\n      <p class="faq-card__desc">\n        Суть проекта BioDepsoit заключается в том, что каждый желающий в любой точке планеты вне зависимости от страны проживания может стать\n        владельцем оливкового дерева, растущего в Грузии, и ежегодно получать урожай.\n      </p>'},card2:{title:"Почему выбраны оливки?",content:"На сегодня оливковые деревья признаны как один из самых прибыльных видов биоактива. Они способны жить и плодоносить на протяжении сотен\n      лет. Логично, что именно вокруг оливок было решено построить проект BioDeposit."},card3:{title:"Кто делает проект?",content:"BioDeposit — проект компании Agromine. Компания базируется в Грузии, где команда проекта занимается посадкой оливковых плантаций уже\n      более 8 лет."},card4:{title:"Почему выбрана не Испания, Греция или еще какая-нибудь страна, для которой олива является традиционной культурой?",content:"\n      В Грузии, помимо подходящего климата и плодородной почвы, также присутствует благоприятная экономическая составляющая: поддержка\n      государства, льготное налогообложение для сельхозпроизводителей, а также более низкая себестоимость выращивания, ухода и переработки.\n    "},card5:{title:"Почему проект возник именно сейчас?",content:"\n      Как уже говорилось, благодаря стремительному росту экономики и программе государственной поддержки, в Грузии сегодня сложились особо\n      благоприятные условия для оливкового бизнеса. Но не менее важна здесь и роль новых цифровых технологий, которые получили распространение\n      в последние годы, значительно расширили возможности онлайн-бизнеса и позволили реализовать нашу задумку технически.\n    "},card6:{title:"Каковы перспективы бизнеса?",content:"\n      Спрос на качественное масло превышает предложение, а объёмы, которые можно вырастить в Грузии, — это капля в море в сравнении с\n      общемировым потреблением. Так что проблем со сбытом не ожидается.\n    "},card7:{title:"Какой минимальный размер инвестиций?",content:"\n      Базовая цена одного молодого дерева (каковым следует считать саженец, который не достиг 12 месяцев с момента посадки) — $118. По мере\n      роста дерева растет и его цена.\n    "},card8:{title:"Как я могу стать владельцем плантации?",content:'<p class="faq-card__desc">\n      Чтобы владеть деревом или даже целой плантацией в Грузии, вам необязательно быть гражданином этой страны. Стать нашим партнером легко:\n      достаточно пройти регистрацию на сайте проекта BioDeposit, или, если вы уже это сделали, перейти в личный кабинет и оплатить нужное\n      количество деревьев.\n    </p>\n    <p class="faq-card__desc">\n      Также мы предоставляем возможность организации собственной плантации по партнерской программе. Подробности о ней можно отправив нам\n      запрос в Телеграм @ или заполнив форму выше.\n    </p>'},card9:{title:"Насколько сохранна такая инвестиция? Что будет, если мое дерево погибнет?",content:'<p class="faq-card__desc">\n      Бывает, что молодые деревья не приживаются. Подобное случается редко: риски, называемые нашими эдвайзорами (международными экспертами с\n      многолетним опытом), не превышают 2-3%. Что касается наших партнеров, то они не рискуют ничем, т.к. для каждой плантации мы формируем\n      специальный гарантийный фонд — дополнительные деревья с трехкратным запасом.\n    </p>\n    <p class="faq-card__desc">\n      Каждая наша плантация — это 20 гектаров, на которых высаживается 11 000 олив. 10 000 деревьев идут в продажу, а дополнительная тысяча\n      составляет резервный фонд. Если с вашим деревом что-нибудь случится, вы получите из фонда точно такое же. Это будет олива аналогичного\n      возраста и урожайности. Единственное, что для вас изменится, — это координаты дерева внутри плантации.\n    </p>\n    <p class="faq-card__desc">\n      Мы берем на себя всю ответственность за сохранность дерева в течении первых трех лет (страховка и уход за деревом входят в его базовую\n      стоимость). Начиная с четвертого года, когда дерево начнет плодоносить, вы можете застраховать дерево от любых форс-мажорных\n      обстоятельств в независимой страховой компании.\n    </p>'},card10:{title:"От чего зависит стоимость дерева?",content:"\n      Чем старше дерево, тем выше его стоимость. В период с 4-го по 10-й год количество прибыли растет за счет приносимого деревом урожая.\n      Соответственно, повышается и стоимость биоактива. По достижению деревом 10-летнего возраста рост стоимости останавливается.\n    "},card11:{title:"В чем наша выгода?",content:"Продавая деревья, мы преследуем несколько целей: \n      - Масштабирование плантации, для получения сырьевой базы и производства продуктов из оливки; <br>\n      - Обеспечение собственной обслуживающей компании постоянным доходом (ведь мы получаем часть вашего урожая); <br>\n      - Озеленение планеты\n      (благодаря одному дереву могут дышать два человека); <br>\n      - Популяризация оливкового масла.<br>"},card12:{title:"Олива – единственный биоактив, приносящий большую прибыль?",content:"\n      Не единственный. Мы изучаем все виды прибыльных биоактивов, и не исключено, что также включим их в проект BioDeposit в будущем.\n    "},card13:{title:"Деревья уже посажены, или это еще только предстоит сделать?",content:"\n      Деревья уже посажены. Это сделано для удобства инвесторов. Приобретая не саженец, а молодое дерево, вы быстрее начнете получать с него\n      урожай.\n    "},card14:{title:"Смогу ли я свое дерево кому-то подарить?",content:"\n      Разумеется. И не только подарить. Для проекта BioDeposit нами разработан ряд юридически защищенных опций, куда кроме дарения также\n      входит возможность жертвования (благотворительности) и передачи в наследство.\n    "},card15:{title:"Могу ли я забрать свое дерево?",content:"\n      Места под посадку плантаций тщательно выбирались агроспециалистами, чтобы каждое дерево росло там, где для этого природой и человеком\n      созданы наилучшие условия. Но если владельцу оливы захочется выкопать ее и пересадить, допустим, на свой дачный участок, то для этого\n      нет никаких технических преград.\n    "},card16:{title:"Если я захочу купить сразу много деревьев, можно ли рассчитывать на оптовую цену?",content:"\n      Если Вы готовы купить более 3 тысяч оливковых деревьев, то для вас действуют специальные условия, о которых вы можете узнать, заполнив\n      форму на этой странице.\n    "}},difference:{title:"Благородный бизнес<span>, который вы оставите </span>в наследство своим потомкам",yearFoundation:"BioDeposit <span>since 2017</span>"},copyright:"©2023 BioDeposit. Все права защищены",modal:{title:"Калькулятор <br />ожидаемого дохода",numberTrees:"Количество деревьев:",investmentAmount:"Размер инвестиций",additionalParameters:"Дополнительные параметры:",btn:"Купить деревья",oilDesc:"Стоимость оливкого масла, 1л:",oil:"Стоимость оливкого масла",productivityDesc:"Урожайность на 1 дерево, кг оливок с 10-го года:",productivity:"Урожайность на 1 дерево",kg:"кг",things:"шт",invest:{title:"Доход в год в первые 10 лет",card1:"Средний ожидаемый доход в год:",card2:"Ожидаемый доход за первые 10 лет:",year:"год",yearLast:"год и далее"},capital:{title:"Ожидаемый доход в год, когда ребенку",card1:"Кол-во деревьев в 18-й год",card2:"Ожидаемый доход в 18-й год",year1:"лет",year2:"год",year3:"года",yearLast:"лет и далее"}}};!function(){let e=document.querySelector('button[data-lang="ru"]'),t=document.querySelector('button[data-lang="en"]');a(e),a(t)}(),i18next.init({lng:"ru",debug:!0,resources:{ru:{translation:t},en:{translation:e}}});const o=locI18next.init(i18next,{selectorAttr:"data-i18n",targetAttr:"i18n-target",optionsAttr:"i18n-options",useOptionsAttr:!1,parseDefaultValueFromContent:!0,document:window.document});function a(e){e.addEventListener("click",(function(e){e.preventDefault();let t=document.querySelectorAll("button[data-lang]");for(let e of t)e.classList.remove("localization__btn_active");e.target.classList.toggle("localization__btn_active");let n=e.target.getAttribute("data-lang");i18next.changeLanguage(n,((e,t)=>{if(e)return console.log("something went wrong loading",e);window.localize("[data-i18n]")})),document.querySelector("#faq")&&window.initAccordion()}))}window.localize=o})()})();
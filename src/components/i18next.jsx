import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        logoName: "Davit Gorgiladze Law Office",
        logoOffer: "Make your best deals work in here!",
        home: "Home",
        about: "About",
        services: "Services",
        contact: "Contact",

        //

        matsne: "Matsne",
        parliament: "Parliament of Georgia",
        government: "Government of Georgia",
        court: "Supreme Court of Georgia",
        registry: "Public Registry of Georgia",
        case: "Find Your Case",

        //

        namesurname: "Davit Gorgiladze",
        field: "Lawyer on Civil and Administrative Cases",
        call: "Need Assistance ? CALL ME (+995) 577 382 997",
        consultation: "Consultation is FREE OF CHARGE",
        principles: "Principles are Loyalty, Quality, Effectiveness",

        //

        nameDavit: "Davit Gorgiladze",
        job: "LAWYER",
        description: ` Davit Gorgiladze is an active licensed lawyer with 7 years of
        experience in civil and administrative law. His distinctive side is
        representation in court and knowledge of judicial law. You may be
        wondering why? David familiarized himself with all the decisions
        issued by the Supreme Court of Georgia in the form of collections on
        civil and administrative cases. Taking this into account, he can make
        a preliminary conclusion with maximum accuracy, and on the other hand,
        the court regulations used by him are often the basis for satisfying
        the claim and setting the appropriate result for the interests of the
        client.`,
        exp2022: `  In 2022-2024, Davit was the lawyer of Batumi International
              Airport, namely TAV Georgia, where he ensured consultation and
              preparation of various types of legal documents needed by the
              company on a daily basis.`,
        exp2021: `In 2021, he worked as a lawyer for "Three Ocean" LLC, which was
              engaged in the transportation of vehicles in Georgia.`,
        expo2020: ` In 2020-2021, he was a practicing lawyer at Temur Kavshbaia's law
              office, where he prepared legal documents for the office's
              clients.`,
        exp2019a: `In 2019, he was an intern in the Civil Affairs Chamber of the
              Tbilisi Court of Appeals, where he dealt with ongoing civil cases
              and prepared drafts of Judge's acts.`,
        expo2019b: ` In 2019, he was an intern at the Ethics Commission of the Bar
              Association of Georgia, where he discussed and prepared drafts of
              the decisions of the relevant commission on various cases.`,
        expo2018: ` In 2018-2021, He was the CEO of "DN Shop" LLC (publicly known as
              "Universam"), where he managed the business and arranged legal
              issues.`,
        exp2017: `In 2017, he was an intern at Revaz Futkaradze's law office, where
              he learned about a number of cases and discussed them together
              with other members of the group, as well as drawing up various
              types of documents.`,

        university2: `Davit is a Master of Private Law at Ivane Javakhishvili Tbilisi State
          University, 2019-2021.`,

        university1: `David studied at the Caucasus University in 2015-2019, where he was
          awarded a bachelor's degree in law.`,
      },
    },

    ge: {
      translation: {
        logoName: "დავით გორგილაძის საადვოკატო ოფისი",
        logoOffer: "მოაწესრიგე საქმე საუკეთესოდ აქ",
        home: "მთავარი",
        about: "შესახებ",
        services: "სერვისები",
        contact: "კონტაქტი",

        //

        matsne: "მაცნე",
        parliament: "საქართველოს პარლამენტი",
        government: "საქართველოს მთავრობა",
        court: "საქართველოს უზენაესი სასამართლო",
        registry: "საჯარო რეესტრის ეროვნული სააგენტო",
        case: "იპოვე შენი საქმე",

        //

        namesurname: "დავით გორგილაძე",
        field: "სამოქალაქო/ადმინისტრაციული ადვოკატი",
        call: "პრობლემა გაქვთ? დამირეკე(+995)577 382 997",
        consultation: "კონსულტაცია უფასოა",
        principles: "ჩემი პრინციპია ნდობა, ხარისხი, ეფექტურობა",

        //

        nameDavit: "დავით გორგილაძე",
        job: "ადვოკატი",
        description: ` დავით გორგილაძე არის მოქმედი ლიცენზირებული ადვოკატი სამოქალაქო და ადმინისტრაციულ დავებზე
         7 წლიანი გამოცდილებით. მისი გამორჩეული მხარეა სასამართლოში წარმომადგენლობა და სამოსამართლო სამართლის ცოდნა. 
         ალბათ, კითხვა გექნებათ, თუ რატომ? დავითი გაეცნო საქართველოს უზენაესი სასამართლოს კრებულის სახით გამოცემულ ყველა 
         გადაწყვეტილებას სამოქალაქო და ადმინისტრაციულ საქმეებზე. ამის გათვალისწინებით, მას შეუძლია წინასწარ დასკვნის მაქსიმალური
          სიზუსტით გაკეთება, ხოლო მეორე მხრივ, მის მიერ გამოყენებული სამოსამართლო დებულებები ხშირად უდევს საფუძვლად სარჩელის
           დაკმაყოფილებას და კლიენტის ინტერესებისათვის შესაბამისი შედეგის დადებას. `,
        exp2022: `  2022-2024 წლებში დავითი იყო ბათუმის საერთაშორისო აეროპორტის, კერძოდ, TAV Georgia იურისტი, სადაც უზრუნველყოფდა 
        კომპანიის ყოველდღიურად საჭირო სხვადასხვა სახის იურიდიული დოკუმენტაციის მომზადებას, კონსულტაციას.`,
        exp2021: `2021 წელს ის მუშაობდა იურისტად შპს „სამი ოკეანე“, რომელიც საქმიანობდა საქართველოში  ავტომობილების ტრანსპორტირებით. `,
        expo2020: ` 2020-2021 წლებში იყო პრაქტიკოსი იურისტი თემურ ქავშბაიას საადვოკატო ოფისში, სადაც ამზადებდა იურიდიულ დოკუმენტაციას ოფისის კლიენტებისთვის.`,
        exp2019a: `2019 წელს იყო თბილისის სააპელაციო სასამართლოს სამოქალაქო საქმეთა პალატის სტაჟიორი, სადაც შემხებლობა ჰქონდა მიმდინარე სამოქალაქო საქმეებზე, ამზადებდა მოსამართლის აქტების პროექტებს.`,
        expo2019b: ` 2019 წელს იყო ადვოკატთა ასოციაციის ეთიკის კომისიის სტაჟიორი, სადაც განიხილავდა და ამზადებდა შესაბამის კომისიის მისაღები გადაწყვეტილების პროექტებს მიმდინარე საქმეებზე.`,
        expo2018: ` 2018-2021 წლებში, იყო შპს „დი ენ შოპი“ (იგივე უნივერსამი) დირექტორი, სადაც მართავდა ბიზნესს და აწესრიგდებდა იურიდიულ საკითხებს.`,
        exp2017: `2017 წელს იყო რევაზ ფუტკარაძის საადვოკატო ოფისის სტაჟიორი, სადაც გაეცნო არაერთ საქმეს და ჯგუფის სხვა წევრებთან ერთად განიხილავდა მათ, ასევე ამზებდა სხვადასხვა სახის დოკუმენტებს. `,
        university2: `დავითი არის ივანე ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეტის მაგისტრი კერძო სამართლის მიმართულებით, 2019-2021.`,
        university1: `დავითი სწავლობდა კავკასიის უნივერსიტეტში 2015-2019 წლებში, სადაც მიენიჭა სამართლის ბაკალავრის ხარისხი.`,
      },
    },

    ru: {
      translation: {
        logoName: "Давит Горгиладзе Адвокатское бюро",
        logoOffer: "Сделайте так, чтобы ваши лучшие предложения работали здесь",
        home: "Дом",
        about: "Биография",
        services: "Услуги",
        contact: "Контакт",

        //
        matsne: "Мацне",
        parliament: "Парламент Грузии",
        government: "Правительство Грузии",
        court: "Верховный суд Грузии",
        registry: "Публичный реестр Грузии",
        case: "Найдите свой случай",

        //

        namesurname: "Давид Горгиладзе",
        field: "гражданским/административным Адвокат",
        call: "Нужна помощь? ПОЗВОНИТЕ МНЕ(+995)577 382 997",
        consultation: "Консультация БЕСПЛАТНАЯ",
        principles: "Принципы: Лояльность, Качество, Эффективность",

        //

        nameDavit: "Давид Горгиладзе",
        job: "АДВОКАТ",
        description: ` Давид Горгиладзе — действующий лицензированный юрист с 7-летним
опытом работы в сфере гражданского и административного права. Его отличительной стороной является
представительство в суде и знание судебного права. Вы можете
задаться вопросом, почему? Давид ознакомился со всеми решениями,
вынесенными Верховным судом Грузии в виде сборников по
гражданским и административным делам. Учитывая это, он может
сделать предварительный вывод с максимальной точностью, а с другой стороны,
используемые им судебные постановления часто являются основой для удовлетворения
иска и установления соответствующего результата в интересах
клиента.`,
        exp2022: `  В 2022-2024 годах Давид был юристом Батумского международного аэропорта, 
        а именно TAV Georgia, где он обеспечивал консультации и подготовку различных видов юридических документов, необходимых компании на ежедневной основе.`,
        exp2021: `В 2021 году работал юристом в компании ООО «Три океана», которая занималась перевозкой транспортных средств в Грузии.`,
        expo2020: ` В 2020-2021 годах он был практикующим юристом в юридической
конторе Темура Кавшбая, где готовил юридические документы для клиентов конторы.`,
        exp2019a: `В 2019 году он проходил стажировку в Палате по гражданским делам Тбилисского
         апелляционного суда, где занимался текущими гражданскими делами и готовил проекты судебных актов.`,
        expo2019b: ` В 2019 году проходил стажировку в Комиссии по этике Коллегии адвокатов Грузии, где обсуждал и готовил
         проекты решений соответствующей комиссии по различным делам.`,
        expo2018: ` В 2018-2021 годах он был генеральным директором ООО «DN Shop» (публично известного как «Universam»), где он управлял бизнесом и решал юридические
вопросы.`,
        exp2017: `В 2017 году он проходил стажировку в юридической конторе Реваза Футкарадзе, где
он узнал о ряде дел и обсуждал их вместе
с другими членами группы, а также составлял различные
виды документов.`,
        university2: `Давид — магистр частного права в Тбилисском государственном университете имени Иване Джавахишвили, 2019–2021.`,
        university1: `В 2015-2019 годах Дэвид учился в Кавказском университете, где ему была присвоена степень бакалавра права.`,
      },
    },
  },
});

import { getCurrentDateString } from "@/lib/utils"

export const headerLinks = [
    {
      label: 'Home',
      route: '/',
    },
    {
      label: 'Solutions',
      route: '#',
    },
    {
      label: 'Advisory Board',
      route: '/advisory/board',
    },
    {
      label: 'Blog',
      route: '/blogs',
    },
    {
      label: 'Events',
      route: '/events',
    },
    {
      label: 'Contact Us',
      route: '/contact',
    },
  ]

  export const clients = [
    {
      'label': 'Letshego',
      'icon': '/assets/images/client1.png'
    },
    {
      'label': 'Tonaton',
      'icon': '/assets/images/client2.png'
    },
    {
      'label': 'CenturyLink',
      'icon': '/assets/images/client3.png'
    },
    {
      'label': 'Experian',
      'icon': '/assets/images/client4.png'
    },
    {
      'label': 'Hodge',
      'icon': '/assets/images/client5.png'
    },
    {
      'label': 'KPMG',
      'icon': '/assets/images/client6.png'
    },
    {
      'label': 'Philips',
      'icon': '/assets/images/client7.png'
    },
    {
      'label': 'Domino',
      'icon': '/assets/images/client8.png'
    },
    {
      'label': 'Kosmos',
      'icon': '/assets/images/client9.png'
    },
    {
      'label': 'Telecel',
      'icon': '/assets/images/client10.png'
    },
  ]
  
  export const eventDefaultValues = {
    title: '',
    description: '',
    location: '',
    imageUrl: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: '',
    price: '',
    isFree: false,
    url: '',
  }

  export const blogDefaultValues = {
    title: '',
    description: '',
    content: '',
    imageUrl: '',
    createdAt: new Date(),
    createdBy: '',
    categoryId: '',
    published: false,
  }

  export const articles = [
    {
      title: 'Attentive Science Offers fast histology Turnaround',
      content: 'The field of histology is crucial in areas such as safety research, pharmaceutical development, and medical diagnosis, among others. Understandably, the creation of a high-quality histology slides beg...',
      description: 'The field of histology is crucial in areas such as safety research, pharmaceutical development, and medical diagnosis, among others. Understandably, the creation of a high-quality histology slides beg',
      date: getCurrentDateString(),
      image: '/assets/images/article.png',
      _id: '1',
    },
    {
      title: 'Attentive Science Offers fast histology Turnaround ',
      content: 'The field of histology is crucial in areas such as safety research, pharmaceutical development, and medical diagnosis, among others. Understandably, the creation of a high-quality histology slides beg...',
      description: 'The field of histology is crucial in areas such as safety research, pharmaceutical development, and medical diagnosis, among others. Understandably, the creation of a high-quality histology slides beg',
      date: getCurrentDateString(),
      image: '/assets/images/article.png',
      _id: '2',
    },
    {
      title: 'Attentive Science Offers fast histology Turnaround',
      content: 'The field of histology is crucial in areas such as safety research, pharmaceutical development, and medical diagnosis, among others. Understandably, the creation of a high-quality histology slides beg...',
      description: 'The field of histology is crucial in areas such as safety research, pharmaceutical development, and medical diagnosis, among others. Understandably, the creation of a high-quality histology slides beg',
      date: getCurrentDateString(),
      image: '/assets/images/article.png',
      _id: '3',
    },

  ]

  export const team = [
    {
      id: '1',
      name: "Alfred Botchway",
      title: "PhD, DSP",
      position: "Chief Executive Officer",
      photo: "/assets/images/Alfred.svg",
      about: 'Dr. Alfred Botchway has over 25 years’ experience including academic, pharmaceutical and contract research organization tenure performing research studies designed to; investigate pharmacokinetic / pharmacodynamics profiles, minimize potential toxic and/or undesirable effects of agrochemical, biotechnological and pharmaceutical products on physiological functions prior to administration to the intended population.Dr. Botchway was the founder of Xenometrics a non-clinical contract research organization that provided pharmacokinetic, toxicological and safety pharmacology services to the biopharmaceutical and agrochemical industry. Subsequent to 12 years of successfully operating Xenometrics, Alfred exited Xenometrics a year after its sale to a multinational contract research organization. Alfred is an active member of several international scholastic professional scientific organizations. Alfred served as the President of the International Safety Pharmacology Society and continues to be an active Past President. Most recently, Alfred served as the interim President and Board Chair of BioKansas, a state trade organization for bioscience companies.Dr. Botchway holds a Ph.D. in Cardiovascular Physiology from Imperial College of Science, Technology and Medicine, University of London, UK., and a Diplomate in Safety Pharmacology from the Society of Safety Pharmacology'
    },
    {
      id: '2',
      name: "Phil Atterson",
      title: "BSc., Msc.",
      position: "Chief Operation Officer",
      photo: "/assets/images/phil.svg",
      about: 'Phil Atterson has over forty years of experience in non-clinical contract research organizations specializing primarily in toxicology and pharmacology. He has held an increasing number of senior managerial positions at a number of global CRO’s including Huntingdon Research Centre, Quintiles, WIL Research, Xenometrics, Citoxlab USA. Phil received his BSc and MSc in Pharmacology from the University of East London in the UK. He is a member of the Safety Pharmacology Society, Society of Toxicology, American College of Toxicology and the Japanese Society of Toxicology.'
    },
    {
      id: '3',
      name: "Belinda Waggoner",
      title: "",
      position: "Chief Culture Officer",
      photo: "/assets/images/Belinda.svg",
      about: 'Belinda serves as the Chief Culture Officer of Attentive Science and has over three decades of human resources experience. Belinda is the CEO and founder of People People, a company that provides outsourced back-office HR services and has enabled several companies to scale and grow their business. Before starting her own company, she spent years handling human resources for a series of large, prestigious law firms.'
    },

  ]

  export const testimonials = [
    {
      content: 'Start an exciting journey with an agile team! We are Go Getters - we live our values and share a vision for building an exciting technology business that delivers on improving how people access clean and affordable energy, whilst making a serious impact on climate change and many other inequalities. To achieve this we place great emphasis on making sure our culture allows for risk taking and failure to support extreme innovation. All whilst making sure we enjoy and take time to have fun!',
      imageUrl: '/assets/images/logo.svg',
      name: '0',
    },
    {
      content: 'Start an exciting journey with an agile team! We are Go Getters - we live our values and share a vision for building an exciting technology business that delivers on improving how people access clean and affordable energy, whilst making a serious impact on climate change and many other inequalities. To achieve this we place great emphasis on making sure our culture allows for risk taking and failure to support extreme innovation. All whilst making sure we enjoy and take time to have fun!',
      imageUrl: '/assets/images/logo.svg',
      name: '1',
    },
    {
      content: 'Start an exciting journey with an agile team! We are Go Getters - we live our values and share a vision for building an exciting technology business that delivers on improving how people access clean and affordable energy, whilst making a serious impact on climate change and many other inequalities. To achieve this we place great emphasis on making sure our culture allows for risk taking and failure to support extreme innovation. All whilst making sure we enjoy and take time to have fun!',
      imageUrl: '/assets/images/logo.svg',
      name: '2',
    },
    {
      content: 'Start an exciting journey with an agile team! We are Go Getters - we live our values and share a vision for building an exciting technology business that delivers on improving how people access clean and affordable energy, whilst making a serious impact on climate change and many other inequalities. To achieve this we place great emphasis on making sure our culture allows for risk taking and failure to support extreme innovation. All whilst making sure we enjoy and take time to have fun!',
      imageUrl: '/assets/images/logo.svg',
      name: '3',
    },
    {
      content: 'Start an exciting journey with an agile team! We are Go Getters - we live our values and share a vision for building an exciting technology business that delivers on improving how people access clean and affordable energy, whilst making a serious impact on climate change and many other inequalities. To achieve this we place great emphasis on making sure our culture allows for risk taking and failure to support extreme innovation. All whilst making sure we enjoy and take time to have fun!',
      imageUrl: '/assets/images/logo.svg',
      name: '4',
    },
    {
      content: 'Start an exciting journey with an agile team! We are Go Getters - we live our values and share a vision for building an exciting technology business that delivers on improving how people access clean and affordable energy, whilst making a serious impact on climate change and many other inequalities. To achieve this we place great emphasis on making sure our culture allows for risk taking and failure to support extreme innovation. All whilst making sure we enjoy and take time to have fun!',
      imageUrl: '/assets/images/logo.svg',
      name: '5',
    },
  ]

  export const solutions = [
    {
      name: 'Pharmacokinetics',
      route: '/pharmaco/kinetics'
    },
    {
      name: 'Toxicology',
      route: '/toxicology',
    },
    {
      name: 'Safety Pharmacology',
      route: '/safety/pharmacology',
    }
  ]

  export const pharmacokinetics = {
    bannerImageUrl: '/assets/images/banner1.svg',
    imageUrl: '/assets/images/pharmcoimage.png',
    title1: "Pharmacokinetics",
    content1: 'Knowledge of the fate (Absorption, Distribution, Metabolism, Elimination) of a test substance is necessary to predict its action on a test subject. With Attentive, you have at your disposal a wide range of in-vivo test systems as well as protocols and reporting infrastructure to ensure you receive quality data in a timely manner to select the best test substance and doses for your programs. Attentive Scientists bring the experience necessary to excel at executing these studies to assist you by performing in-vivo studies during the discovery and lead optimization phases of your research',

    title2: 'High Throughput PK',
    content2: 'A test substance/compound that is going to be used to treat a disease needs to be biologically active, absorbed, distributed, metabolized and excreted. In-vivo dose formulations that will be administered to a test system require testing. Attentive Science can execute the pharmacokinetic assessment of your compound/test substance to allow you to get a quick read on if you have a “druggable” product.',

    title3: 'Long Term PK',
    content3: 'During the early discovery phases of development, characterization of relatively longer half-life substances, be it a small molecule, biologic or an extended-release formulation, may be incomplete due to the extended absorption or elimination phases. It is critical to fully characterize any long-term pharmacokinetic profiles to fully understand how the test substance behaves In-vivo.',

    title4: 'Comprehensive Dosing Routes',
    content4: "Standard and specialty dose routes are selected to mimic your intended clinical route of administration and alignment with your future clinical programs: PO (Oral); IV (Intravenous); SC (Subcutaneous); IM (Intramuscular); IP (Intraperitoneal Dermal); Intra-cerebral, Intra-thecal, Intra-articular etc. Partner Workflow Streams Scientific integrity, quality, cost-effectiveness and regulatory compliance are essential considerations when you are selecting an outsourcing partner. Attentive Science partners with carefully selected specialty organizations for any nonclinical functions such as histopathology that are not performed in-house. Being experts, we like to work with other expert organizations.",

    title5: 'Formulation Screening',
    content5: 'Upon administration of a test substance to a test system, the pharmacokinetic and toxicity profile can also be dependent on the varying formulation that was used during discovery. Attentive Science will take your compound/test substance and formulate it in several vehicles (based on the type of molecule and utilizing our collective experience), and will administer it directly into a test system, collect blood samples in a timely fashion to determine if the test substance is present or not, as well as provide pharmacokinetic data endpoints.',
  }

  export const toxicology = {
    bannerImageUrl: '/assets/images/banner2.svg',
    imageUrl: '/assets/images/toxicoimg.png',
    title1: "Toxicology",
    content1: 'Regulatory toxicology studies to evaluate the relationship between various doses of your drug molecule and adverse events require close collaboration between scientists with multiple levels of expertise from the development company and the contract research organization (CRO). Attentive’s processes ensure transparent communication, collaboration and dialogue that will keep up with your ever-changing needs for lead optimization, candidate selection as well as regulatory-enabling studies',

    title2: 'Discovery',
    content2: 'We partner with our clients during the early phase of Discovery to assess exposure of your test substance/compounds within the body and get an idea of potential toxicity of the compound. The discovery toxicology studies are designed to assess any adverse effects that occur after a single or multiple administrations of the test substance.',

    title3: 'Maximum Tolerated Dose',
    content3: 'Typically, doses are increased in these study types to help identify correlating toxicity. The highest possible repeat dosage level can be identified during a 7 – 14 day study, which in turn is used to extrapolate dosage levels for your subsequent regulatory toxicological study. The Maximum Tolerated Dose (MTD) is the maximum dose that can be given over a specified study period that will not compromise the survival of the test system.',

    title4: 'Dose Range Finding',
    content4: "The Attentive Science team routinely conducts preliminary in-vivo toxicity studies to determine appropriate doses for your single and multiple dose studies. We provide flexible study designs during these test substance tolerance assays, to help ascertain relevant multiples of the efficacious dose.",

    title5: 'Acute/Chronic/Subchronic',
    content5: 'Prediction of acute effects on target organs subsequent to administration of your test substance is an essential data point. The data obtained helps guide your design and dose selection for subsequent sub-chronic and chronic studies. With Attentive, you have additional repertoire of in-vivo test systems to help you evaluate potential acute effects.',

    title6: 'SEND',
    content6: 'In order to provide a standardized electronic dataset for your nonclinical data which will fulfill regulatory electronic common technical document (eCTD) submission requirements, a SEND dataset is required. Use of SEND enhances data review, enables data warehousing, data analysis and data visualization in addition to having a set of controlled terminology for our industry. The FDA requires a SEND dataset for non-GLP studies if those studies are part of your submission, as well as for the customary GLP studies.',
  }

  export const pharmachology = {
    bannerImageUrl: '/assets/images/banner1.svg',
    imageUrl: '/assets/images/safetyimg.png',
    title1: "Safety Pharmachology",
    content1: 'Safety Pharmacology studies are designed to detect the potential undesirable pharmacodynamic effects of new chemical entities on physiological functions in relation to exposure in the therapeutic range and above. In addition to you obtaining scientifically robust data, you have access to a vast network of experts at Attentive',

    title2: 'Cardiovascular',
    content2: 'Prior to phase I clinical trials, the effects of a therapeutic on the cardiovascular (CV) system, which is a vital organ system, should be evaluated and characterized. The Attentive Science safety pharmacologist combines his/her knowledge from Physiology, Pharmacology and Toxicology to evaluate effects on the electrocardiogram (ECG), with particular emphasis on ventricular depolarization and repolarization, as well as any potential effects on blood pressure (BP) and heart rate (HR).',

    title3: 'Central Nervous System',
    content3: "Central Nervous System (CNS) studies are conducted in a controlled environment (e.g., limiting extraneous noise, excessive entering and exiting the room, etc.) with a limited number of test systems to allow the observer time to make a number of post dose observations during the day. The ICH S7A Safety Pharmacology (Studies for Human Pharmaceuticals) guidance document states that motor activity, behavioral changes, coordination, sensory/motor reflex responses and body temperature should be evaluated",

    title4: 'Respiratory',
    content4: 'The ICH S7A Safety Pharmacology (Studies for Human Pharmaceuticals) guidance document states that the effects of the test substance on the respiratory system should be assessed appropriately. Respiratory rate and other measures of respiratory function (e.g., tidal volume or hemoglobin oxygen saturation) should be evaluated. Respiratory assessments focus on measures of pulmonary ventilation. Respiratory rate, tidal volume and/or a measure of arterial blood gases as the recommended ventilatory measurement parameters.',
  }


  export const advisory = [
    {
      name: 'Jeff Hargroves',
      about: 'As the founder of ProPharma Group, Mr. Hargroves successfully executed operations for over 20 years. Jeff is an astute life science entrepreneur with deep roots across the Kansas City Life Science industry.',
      title: '',
      imageUrl: '/assets/images/hargroves.png',
    },
    {
      name: 'Andrew Parkinson',
      about: 'The founder of XPD Consulting, Dr. Andrew Parkinson has over 25 years of academic experience and over 16 years of industrial experience in the area of in-vitro metabolism and safety testing.',
      title: 'PhD',
      imageUrl: '/assets/images/parkinson.png',
    },
    {
      name: 'Maria Flynn',
      about: 'Mrs. Flynn previously served as the Managing Director at Techstars and prior to that, was the Strategic Business Development Leader at Adare Pharmaceuticals. Maria brings a wealth of biotech experience to the Board.',
      title: '',
      imageUrl: '/assets/images/flynn.png',
    },
  ]

  export const contactFormInitialValue = {
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  }

  export const adminNav = [
    {
      name: 'Blogs',
      route: '/admin',
    },
    {
      name: 'Events',
      route: '/admin/events',
    },
  ]

  export const socialNetworks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/attentivescience/',
      icon: '/assets/icons/linkedin.svg',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/attentivescience',
      icon: '/assets/icons/x.svg',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/attentivescience',
      icon: '/assets/icons/facebook.svg',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/attentivescience',
      icon: '/assets/icons/instagram.svg',
    },
  ]

export const policy = `# Privacy Policy  
Effective Date: 22nd July, 2024 
  

**1. Introduction**.

Attentive Science ("We," "Us," or "Our") is committed to protecting the privacy and security of the personal information we collect, use, and share. This Privacy Policy explains how we handle personal information in connection with our services as a contract research organization (CRO).


**2. Information We Collect**

We may collect the following types of personal information:  
Personal Identification Information: Name, email address, phone number, and job title.  
Professional Information: Employment details, qualifications, and professional experience.  
Research Data: Information related to preclinical studies, and other research activities, including study results.  
Usage Data: Information about how you use our website and services, including IP addresses, browser type, and browsing history.

**3. How We Use Your Information**.

We use the collected information for various purposes, including:  
To provide and manage our research services.  
To communicate with you about our services, updates, and other information.  
To comply with legal and regulatory requirements.  
To improve our services and website functionality

**4. Sharing Your Information**  

We may share your personal information, after obtaining your permission with:  
Research Partners: Collaborators and subcontractors who are bound by confidential disclosure agreements if they are involved in your research projects.  
Regulatory Authorities: Government agencies and regulatory bodies as required by law.

**5. Data Security**.

We implement appropriate technical and organizational measures to protect personal information against unauthorized access, alteration, disclosure, or destruction. However, no data transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.  

**6. Your Rights**  

Depending on your location, you may have certain rights regarding your personal information, including:  
The right to access, correct, or delete your personal information.  
The right to object to or restrict the processing of your information.  
The right to data portability.  
The right to withdraw consent, where consent is the basis for processing.  
To exercise these rights, please contact us at  [info@attentivescience.com](https://info@attentivescience.com/)

**7. Cookies and Tracking Technologies**.

We use cookies and similar tracking technologies to enhance your experience on our website. You can manage your cookie preferences through your browser settings.  

**8. Changes to This Privacy Policy**  

We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website and updating the effective date.

**9. Contact Us**.

If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:  
Attentive Science, LLC  
P O Box 417  
Stilwell, KS 66085  
[info@attentivescience.com](https://info@attentivescience.com/)  
+1 913 308 0700

StackEdit stores your files in your browser, which means all your files are automatically saved locally and are accessible **offline!**
`
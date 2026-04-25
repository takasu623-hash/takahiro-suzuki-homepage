export type Locale = 'en' | 'ja';

export const dictionaries = {
    en: {
        nav: {
            about: 'About',
            news: 'News',
            career: 'Career',
            research: 'Research',
        },
        news: {
            title: 'News',
            subtitle: 'Recent Updates and Publications',
            items: [
                {
                    date: 'March 2026',
                    category: 'Publication',
                    headline: 'New paper published in JACC: Cardiovascular Interventions',
                    description: 'Nonfatal Adverse Events and Risk for Subsequent Mortality in Patients Undergoing Percutaneous Coronary Intervention.',
                    link: 'https://pubmed.ncbi.nlm.nih.gov/41837917/',
                },
                {
                    date: 'March 2026',
                    category: 'Publication',
                    headline: 'New paper published in Circulation: Cardiovascular Interventions',
                    description: 'Prognostic Implications of Bleeding and Ischemic Complications in Acute Myocardial Infarction-Related Cardiogenic Shock Managed With Microaxial Flow Pump.',
                    link: 'https://pubmed.ncbi.nlm.nih.gov/41904791/',
                },
            ],
        },
        hero: {
            greeting: 'Welcome to the portfolio of',
            name: 'Takahiro Suzuki',
            title: 'Takahiro Suzuki, MD, MPH',
            affiliation1: 'Department of Cardiovascular Medicine',
            affiliation2: "St. Luke's International Hospital",
            keywords: [
                'Health Checkup Data',
                'Big Data Analysis',
                'Coronary Artery Disease',
                'Ischemic Heart Disease',
                'Social Determinants of Health',
                'Cardiovascular Intensive Care',
            ],
            description: 'I am engaged in clinical practice in cardiovascular medicine, while conducting clinical research on cardiovascular disease prevention, acute kidney injury, and prognosis after interventional treatments. I am also exploring approaches from the perspective of health disparities in society and public health.',
            btnResearch: 'View Research',
            btnCareer: 'Career Timeline',
        },
        career: {
            title: 'Career',
            subtitle: 'Professional Background and Academic Trajectory',
            items: [
                {
                    year: 'Apr 2010 - Mar 2016',
                    title: 'School of Medicine',
                    institution: 'Tokyo Medical and Dental University',
                },
                {
                    year: 'Apr 2016 - Present',
                    title: 'Resident in Internal Medicine To Attending in Cardiovascular Medicine',
                    institution: "St. Luke's International Hospital",
                },
                {
                    year: 'Apr 2021 - Mar 2023',
                    title: 'MPH (Master of Public Health)',
                    institution: 'Johns Hopkins Bloomberg School of Public Health',
                },
                {
                    year: 'Apr 2023 - Present',
                    title: 'Joint Researcher, Department of Cardiovascular Medicine',
                    institution: 'Keio University',
                },
                {
                    year: 'Apr 2024 - Present',
                    title: 'Department of Public Health',
                    institution: 'Institute of Science Tokyo (formerly TMDU)',
                },
            ],
        },
        research: {
            title: 'Research & Publications',
            subtitle: 'Clinical research focusing on cardiovascular prognosis, social disparities, and public health data analysis.',
            storyline: 'My research spans the entire continuum of cardiovascular health. It begins with Preventive Cardiology, utilizing large-scale data to identify risks before disease occurs. When diseases do manifest, my focus shifts to Acute Cardiovascular Care & Intervention, seeking to optimize outcomes in critical, life-threatening scenarios. Finally, zooming out from individual patient care, I explore Public Health and Social Determinants of Health (SDOH) to address the underlying societal structures and health inequities that shape these outcomes. This comprehensive approach—from individual prevention to acute intervention, and ultimately to global societal well-being—drives my academic pursuits.',
            tab1st: '1st Author',
            tabCo: 'Co-Author',
            themes: {
                sdoh: {
                    title: 'Public Health & Social Determinants of Health (SDOH)',
                    desc: 'Research focusing on health inequities, the impact of social networks during COVID-19, and systemic digit bias in medical records.'
                },
                acute: {
                    title: 'Acute Cardiovascular Care & Intervention',
                    desc: 'Investigating prognostic implications following Percutaneous Coronary Intervention (PCI) including acute kidney injury and hemoglobin drop, as well as strategies for out-of-hospital cardiac arrest and Impella management.'
                },
                preventive: {
                    title: 'Preventive Cardiology & Epidemiology',
                    desc: 'Utilizing large-scale longitudinal health checkup data to analyze trends in alcohol consumption, lung function, serum urate levels, and factors influencing genetic testing adoption.'
                }
            }
        },
        footer: {
            title: 'Takahiro Suzuki',
            subtitle: 'Takahiro Suzuki, MD, MPH',
            affiliation1: "St. Luke's International Hospital",
            affiliation2: 'Department of Cardiovascular Medicine',
            pubmed: 'PubMed Profile',
            hospital: "St. Luke's International Hospital",
            rights: 'All Rights Reserved.',
        },
    },
    ja: {
        nav: {
            about: 'About',
            news: 'News',
            career: 'Career',
            research: 'Research',
        },
        news: {
            title: 'News',
            subtitle: '最新の研究・発表',
            items: [
                {
                    date: '2026年3月',
                    category: '論文公開',
                    headline: 'JACC: Cardiovascular Interventions に論文が掲載されました',
                    description: 'Nonfatal Adverse Events and Risk for Subsequent Mortality in Patients Undergoing Percutaneous Coronary Intervention.',
                    link: 'https://pubmed.ncbi.nlm.nih.gov/41837917/',
                },
                {
                    date: '2026年3月',
                    category: '論文公開',
                    headline: 'Circulation: Cardiovascular Interventions に論文が掲載されました',
                    description: 'Prognostic Implications of Bleeding and Ischemic Complications in Acute Myocardial Infarction-Related Cardiogenic Shock Managed With Microaxial Flow Pump.',
                    link: 'https://pubmed.ncbi.nlm.nih.gov/41904791/',
                },
            ],
        },
        hero: {
            greeting: 'Welcome to the portfolio of',
            name: '鈴木 隆宏',
            title: 'Takahiro Suzuki, MD, MPH',
            affiliation1: '聖路加国際病院 循環器内科 医員',
            affiliation2: "St. Luke's International Hospital",
            keywords: [
                '健診データ',
                'ビッグデータ解析',
                '冠動脈疾患',
                '虚血性心疾患',
                'Social determinant of health',
                '循環器集中治療',
            ],
            description: '循環器診療に従事するとともに、心血管疾患の予防、急性腎障害、介入的治療後の予後に関する臨床研究を行っています。社会における健康格差や公衆衛生の観点からもアプローチを模索しています。',
            btnResearch: 'View Research',
            btnCareer: 'Career Timeline',
        },
        career: {
            title: 'Career',
            subtitle: '専門医としての歩みと経歴',
            items: [
                {
                    year: '2010年4月 - 2016年3月',
                    title: '医学部',
                    institution: '東京医科歯科大学',
                },
                {
                    year: '2016年4月 - 現在',
                    title: '内科初期研修医〜循環器内科医員',
                    institution: '聖路加国際病院',
                },
                {
                    year: '2021年4月 - 2023年3月',
                    title: 'MPH (Master of Public Health)',
                    institution: 'Johns Hopkins Bloomberg School of Public Health',
                },
                {
                    year: '2023年4月 - 現在',
                    title: '循環器内科 共同研究員',
                    institution: '慶應義塾大学',
                },
                {
                    year: '2024年4月 - 現在',
                    title: '公衆衛生分野',
                    institution: '東京科学大学（旧 東京医科歯科大学）',
                },
            ],
        },
        research: {
            title: 'Research & Publications',
            subtitle: '循環器疾患の予後、急性腎障害、また社会格差や公衆衛生に関する臨床研究を行っています。',
            storyline: '私の研究は、心血管疾患の予防から社会への還元まで、一連の連続したプロセスを網羅しています。まず予防医学・疫学（Preventive Cardiology）から始まり、ビッグデータを用いて発症前のリスク要因を特定します。次に、実際に疾患が発症した際には急性期心血管治療・インターベンション（Acute Cardiovascular Care & Intervention）へと焦点を移し、一刻を争う重症病態における予後改善を目指します。そして最後に、個人の診療の枠組みを超え、公衆衛生・健康の社会的決定要因（Public Health & SDOH）の観点から、これら健康状態を根本から形作る社会構造や格差の問題にアプローチします。個人の予防から救急・集中治療、ひいては社会全体のウェルビーイングの向上を目指す、この包括的かつ多角的な視点こそが私の研究全体の原動力です。',
            tab1st: '1st Author',
            tabCo: 'Co-Author',
            themes: {
                sdoh: {
                    title: 'Public Health & Social Determinants of Health (SDOH)',
                    desc: '健康格差、COVID-19とネットワーク多様性の関係、電子カルテにおけるDigit Biasなど、公衆衛生や社会構造が健康に与える影響に関する研究。'
                },
                acute: {
                    title: 'Acute Cardiovascular Care & Intervention',
                    desc: 'PCI（経皮的冠動脈形成術）後の予後（ヘモグロビンの低下や急性腎障害など）、院外心停止の予後予測（JCS-ReSS）、および心原性ショックにおけるImpella管理（J-PVAD）などの急性期循環器診療に関する研究。'
                },
                preventive: {
                    title: 'Preventive Cardiology & Epidemiology',
                    desc: '健診ビッグデータを用いた大規模縦断的解析。アルコール摂取量、更年期前後の肺機能・尿酸値の変化、心血管疾患の遺伝子検査導入の決定要因などの予防医学・疫学研究。'
                }
            }
        },
        footer: {
            title: '鈴木 隆宏',
            subtitle: 'Takahiro Suzuki, MD, MPH',
            affiliation1: '聖路加国際病院 循環器内科',
            affiliation2: "St. Luke's International Hospital",
            pubmed: 'PubMed Profile',
            hospital: '聖路加国際病院',
            rights: 'All Rights Reserved.',
        },
    },
};

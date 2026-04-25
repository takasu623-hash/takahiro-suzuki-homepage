export type Locale = 'en' | 'ja';

export const dictionaries = {
    en: {
        nav: {
            about: 'About',
            career: 'Career',
            research: 'Research',
            presentations: 'Presentations',
        },
        news: {
            title: 'News & Announcements',
            items: [
                {
                    date: '2026-03-29',
                    title: 'New paper published in Circulation: Cardiovascular Interventions on bleeding and ischemic complications in AMI-related cardiogenic shock managed with microaxial flow pump (J-PVAD)',
                    link: 'https://pubmed.ncbi.nlm.nih.gov/41904791/'
                },
                {
                    date: '2026-03-10',
                    title: 'New paper published in JACC: Cardiovascular Interventions on nonfatal adverse events and subsequent mortality risk after PCI',
                    link: 'https://pubmed.ncbi.nlm.nih.gov/41837917/'
                },
                {
                    date: '2026-01-19',
                    title: 'Featured in m3.com: Study on alcohol consumption and blood pressure',
                    link: 'https://www.m3.com/clinical/open/news/1315615'
                }
            ]
        },
        books: {
            title: 'Books',
            items: [
                {
                    year: '2023',
                    title: '内科レジデントの鉄則 第4版 (Rules for Internal Medicine Residents, 4th Ed.)',
                    publisher: '医学書院 (Igaku-Shoin)',
                    link: 'https://www.igaku-shoin.co.jp/book/detail/111811'
                },
                {
                    year: '2022',
                    title: '心不全の緩和ケア (Palliative Care for Heart Failure)',
                    publisher: '南江堂',
                    link: 'https://www.nankodo.co.jp/'
                }
            ]
        },
        hero: {
            greeting: 'Welcome to the portfolio of',
            name: 'Takahiro Suzuki',
            title: 'Takahiro Suzuki, MD, MPH',
            affiliation1: 'Department of Cardiovascular Medicine',
            affiliation2: "St. Luke's International Hospital",
            keywords: [
                { label: 'Health Checkup Data', link: '#theme-preventive' },
                { label: 'Big Data Analysis', link: '#theme-preventive' },
                { label: 'Quality Metrics & Behavioral Economics', link: '#theme-quality' },
                { label: 'National Registry Data', link: '#theme-registry' },
                { label: 'Coronary Artery Disease', link: '#theme-acute' },
                { label: 'Ischemic Heart Disease', link: '#theme-acute' },
                { label: 'Social Determinants of Health', link: '#theme-sdoh' },
                { label: 'Cardiovascular Intensive Care', link: '#theme-acute' }
            ],
            description: 'I am engaged in clinical practice in cardiovascular medicine, while conducting clinical research on cardiovascular disease prevention and developing quality metrics for perioperative complications of interventional treatments. I am also exploring approaches from the perspective of health disparities in society and public health.',
            btnResearch: 'View Research',
            btnCareer: 'Career Timeline',
            btnCV: 'Download CV',
        },
        career: {
            title: 'Career',
            subtitle: 'Professional Background and Academic Trajectory',
            items: [
                {
                    year: '2010 - 2016',
                    title: 'Doctor of Medicine (MD)',
                    institution: 'Institute of Science Tokyo (formerly TMDU)',
                },
                {
                    year: '2016 - Present',
                    title: 'Department of Cardiovascular Medicine',
                    institution: "St. Luke's International Hospital",
                },
                {
                    year: '2021 - 2023',
                    title: 'MPH (Master of Public Health)',
                    institution: 'Johns Hopkins Bloomberg School of Public Health',
                },
                {
                    year: '2023 - Present',
                    title: 'Joint Researcher, Department of Cardiovascular Medicine',
                    institution: 'Keio University',
                },
                {
                    year: '2024 - Present',
                    title: 'PhD Candidate, Department of Public Health',
                    institution: 'Institute of Science Tokyo (formerly TMDU)',
                },
            ],
        },
        research: {
            title: 'Research & Publications',
            subtitle: 'Clinical research focusing on cardiovascular disease prevention, quality metrics for perioperative complications of interventions, social disparities, and public health data analysis.',
            storyline: 'My research spans the entire continuum of cardiovascular health. It begins with Preventive Cardiology, utilizing large-scale data to approach cardiovascular care fundamentally. When diseases do manifest, my focus shifts to Acute Cardiovascular Care & Intervention, seeking to optimize outcomes in critical, life-threatening scenarios. Finally, zooming out from individual patient care, I explore Public Health and Social Determinants of Health (SDOH) to address the underlying societal structures and health inequities that shape these outcomes. This comprehensive approach - from individual prevention to acute intervention, and ultimately to global societal well-being - drives my academic pursuits.',
            tab1st: '1st Author',
            tabCo: 'Co-Author',
            themes: {
                sdoh: {
                    title: 'Public Health & Social Determinants of Health (SDOH)',
                    desc: 'Research focusing on health inequities, the impact of social structures on health, and systemic digit bias in medical records.'
                },
                acute: {
                    title: 'Intensive Care & Ischemic Heart Disease',
                    desc: 'Investigating perioperative complications following Percutaneous Coronary Intervention (PCI) and establishing quality metrics, along with assessing strategies for out-of-hospital cardiac arrest and Impella management.'
                },
                preventive: {
                    title: 'Preventive Medicine & Epidemiology',
                    desc: 'Utilizing large-scale longitudinal health checkup data to analyze trends in alcohol consumption, lung function, serum urate levels, and factors influencing genetic testing adoption.'
                },
                quality: {
                    title: 'Quality Metrics and Behavioral Economics',
                    desc: 'Developing guideline-driven indicators, assessing behavioral economics interventions like the FOOTSTEPS trial, and utilizing text-mining for clinical applications.'
                },

                others: {
                    title: 'Case Reports & Other Publications',
                    desc: 'Selected case reports and various other peer-reviewed contributions reflecting rare clinical findings and further academic pursuits.'
                }
            }
        },
        presentations: {
            title: 'Presentations',
            subtitle: 'Selected presentations at international and domestic cardiovascular conferences, including invited symposium talks.',
            tabInternational: 'International',
            tabDomestic: 'Domestic',
            tabInvited: 'Invited Lectures',
            countSuffix: 'presentations',
        },
        contact: {
            title: 'Contact',
            subtitle: 'Have a question or want to collaborate? Send a message below.',
            nameLabel: 'Name',
            namePlaceholder: 'Your Name',
            emailLabel: 'Email Address',
            emailPlaceholder: 'you@example.com',
            messageLabel: 'Message',
            messagePlaceholder: 'How can I help you?',
            sendText: 'Send Message',
            sendingText: 'Sending...',
            successTitle: 'Message Sent!',
            successMessage: 'Thank you for reaching out. I will get back to you as soon as possible.',
            sendAnother: 'Send another message',
            errorMessage: 'There was an error sending your message. Please try again later.'
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
            career: 'Career',
            research: 'Research',
            presentations: 'Presentations',
        },
        news: {
            title: 'News & Announcements',
            items: [
                {
                    date: '2026-03-29',
                    title: 'Circulation: Cardiovascular Interventions に論文が掲載されました（J-PVAD：心原性ショックにおけるmicroaxial flow pump管理での出血・虚血性合併症と予後）',
                    link: 'https://pubmed.ncbi.nlm.nih.gov/41904791/'
                },
                {
                    date: '2026-03-10',
                    title: 'JACC: Cardiovascular Interventions に論文が掲載されました（PCI後の非致死的有害事象と長期予後）',
                    link: 'https://pubmed.ncbi.nlm.nih.gov/41837917/'
                },
                {
                    date: '2026-01-19',
                    title: 'm3.comに研究内容が紹介されました：「最新推奨『1日1-2杯なら…』が早くも覆る？研究」',
                    link: 'https://www.m3.com/clinical/open/news/1315615'
                }
            ]
        },
        books: {
            title: 'Books',
            items: [
                {
                    year: '2023',
                    title: '内科レジデントの鉄則 第4版',
                    publisher: '医学書院',
                    link: 'https://www.igaku-shoin.co.jp/book/detail/111811'
                },
                {
                    year: '2022',
                    title: '心不全の緩和ケア',
                    publisher: '南江堂',
                    link: 'https://www.nankodo.co.jp/'
                }
            ]
        },
        hero: {
            greeting: 'Welcome to the portfolio of',
            name: '鈴木 隆宏',
            title: 'Takahiro Suzuki, MD, MPH',
            affiliation1: '聖路加国際病院 循環器内科 医員',
            affiliation2: "St. Luke's International Hospital",
            keywords: [
                { label: '健診データ', link: '#theme-preventive' },
                { label: 'ビッグデータ解析', link: '#theme-preventive' },
                { label: 'Quality Metrics & Behavioral Economics', link: '#theme-quality' },
                { label: 'National Registry Data', link: '#theme-registry' },
                { label: '冠動脈疾患', link: '#theme-acute' },
                { label: '虚血性心疾患', link: '#theme-acute' },
                { label: 'Social determinant of health', link: '#theme-sdoh' },
                { label: '循環器集中治療', link: '#theme-acute' }
            ],
            description: '循環器診療に従事するとともに、心血管疾患の予防や、介入的治療の周術期合併症に対するQuality Metricsの取り組みに関する臨床研究を行っています。社会における健康格差や公衆衛生の観点からもアプローチを模索しています。',
            btnResearch: 'View Research',
            btnCareer: 'Career Timeline',
            btnCV: 'CV ダウンロード',
        },
        career: {
            title: 'Career',
            subtitle: '専門医としての歩みと経歴',
            items: [
                {
                    year: '2010 - 2016',
                    title: 'Doctor of Medicine (MD)',
                    institution: '東京科学大学（旧 東京医科歯科大学）',
                },
                {
                    year: '2016 - 現在',
                    title: '循環器内科',
                    institution: '聖路加国際病院',
                },
                {
                    year: '2021 - 2023',
                    title: 'MPH (Master of Public Health)',
                    institution: 'Johns Hopkins Bloomberg School of Public Health',
                },
                {
                    year: '2023 - 現在',
                    title: '循環器内科 共同研究員',
                    institution: '慶應義塾大学',
                },
                {
                    year: '2024 - 現在',
                    title: 'PhD Candidate, 公衆衛生分野',
                    institution: '東京科学大学（旧 東京医科歯科大学）',
                },
            ],
        },
        research: {
            title: 'Research & Publications',
            subtitle: '心血管疾患の予防、介入的治療の周術期合併症に対するQuality Metricsの取り組み、また社会格差や公衆衛生に関する臨床研究を行っています。',
            storyline: '私の研究は、心血管疾患の予防から社会への還元まで、一連の連続したプロセスを網羅しています。まず予防医学・疫学（Preventive Cardiology）から始まり、ビッグデータを用いた縦断的解析などを通じて疾患の本質に迫ります。次に、実際に疾患が発症した際には急性期心血管治療・インターベンション（Acute Cardiovascular Care & Intervention）へと焦点を移し、一刻を争う重症病態における予後改善を目指します。そして最後に、個人の診療の枠組みを超え、公衆衛生・健康の社会的決定要因（Public Health & SDOH）の観点から、これら健康状態を根本から形作る社会構造や格差の問題にアプローチします。個人の予防から救急・集中治療、ひいては社会全体のウェルビーイングの向上を目指す、この包括的かつ多角的な視点こそが私の研究全体の原動力です。',
            tab1st: '1st Author',
            tabCo: 'Co-Author',
            themes: {
                sdoh: {
                    title: 'Public Health & Social Determinants of Health (SDOH)',
                    desc: '健康格差、電子カルテにおけるDigit Biasなど、公衆衛生や社会構造が健康に与える影響に関する研究。'
                },
                acute: {
                    title: 'Acute Cardiovascular Care & Intervention',
                    desc: 'PCI（経皮的冠動脈形成術）の周術期合併症に対するQuality Metricsとしての取り組みや、院外心停止の予後予測（JCS-ReSS）、心原性ショックにおけるImpella管理（J-PVAD）などの急性期循環器診療に関する研究。'
                },
                preventive: {
                    title: 'Preventive Cardiology & Epidemiology',
                    desc: '健診ビッグデータを用いた大規模縦断的解析。アルコール摂取量、更年期前後の肺機能・尿酸値の変化、心血管疾患の遺伝子検査導入の決定要因などの予防医学・疫学研究。'
                },
                quality: {
                    title: 'Quality Metrics and Behavioral Economics',
                    desc: 'ガイドラインに基づく医療の質指標（Quality Indicator）の開発、行動経済学を用いた介入（FOOTSTEPS試験など）、やテキストマイニング技術の臨床応用に関する研究。'
                },
                registry: {
                    title: 'National Registry Data & Epidemiological Analysis',
                    desc: '多施設共同レジストリや全国規模のデータベースを活用し、循環器疾患の全国的な動向や最適な治療戦略の解明を目指す研究。'
                },
                others: {
                    title: '症例報告・その他',
                    desc: '日々の臨床から得られた知見や稀な症例に関する報告、およびその他の学術的貢献についての論文。'
                }
            }
        },
        presentations: {
            title: 'Presentations',
            subtitle: '国際学会・国内学会での発表およびシンポジウム招待講演の一覧です。',
            tabInternational: '国際学会',
            tabDomestic: '国内学会',
            tabInvited: '招待講演',
            countSuffix: '件',
        },
        contact: {
            title: 'Contact',
            subtitle: 'お問い合わせや共同研究のご相談など、お気軽にご連絡ください。',
            nameLabel: 'お名前',
            namePlaceholder: '山田 太郎',
            emailLabel: 'メールアドレス',
            emailPlaceholder: 'your@email.com',
            messageLabel: 'メッセージ',
            messagePlaceholder: 'お問い合わせ内容をご記入ください。',
            sendText: '送信する',
            sendingText: '送信中...',
            successTitle: '送信完了しました',
            successMessage: 'お問い合わせありがとうございます。内容を確認次第、折り返しご連絡いたします。',
            sendAnother: '新しくメッセージを送る',
            errorMessage: '送信に失敗しました。時間をおいて再度お試しください。'
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

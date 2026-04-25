export type PresentationFormat =
    | 'Symposium'
    | 'Oral'
    | 'Poster'
    | 'Moderated Poster'
    | 'Invited Lecture';

export interface Presentation {
    year: string;
    format: PresentationFormat;
    title: string;
    conference: string;
    location?: string;
}

export const presentationsData = {
    international: [
        {
            year: '2026',
            format: 'Poster',
            title: 'Nonfatal adverse events and risk for subsequent mortality in patients undergoing percutaneous coronary intervention',
            conference: 'ACC (American College of Cardiology) Scientific Sessions',
        },
        {
            year: '2026',
            format: 'Poster',
            title: 'Prognostic implications of bleeding and ischemic complications in acute myocardial infarction-related cardiogenic shock with Impella',
            conference: 'ACC (American College of Cardiology) Scientific Sessions',
        },
        {
            year: '2025',
            format: 'Moderated Poster',
            title: 'Left-digit bias in serum creatinine levels and contrast administration: a nationwide cohort study using a Japanese percutaneous coronary intervention registry',
            conference: 'ESC (European Society of Cardiology)',
            location: 'Madrid, Spain',
        },
        {
            year: '2024',
            format: 'Poster',
            title: 'Prognostic implications of contrast-associated acute kidney injury after percutaneous coronary intervention: a stratified risk score assessment',
            conference: 'ACC (American College of Cardiology) Scientific Sessions',
            location: 'Atlanta, USA',
        },
        {
            year: '2024',
            format: 'Moderated Poster',
            title: 'Association between in-hospital haemoglobin drop with or without overt bleeding and long-term clinical outcomes after percutaneous coronary intervention',
            conference: 'ESC (European Society of Cardiology)',
            location: 'London, UK',
        },
        {
            year: '2023',
            format: 'Poster',
            title: 'A systematic review of screening and assessment tools for social determinants of health in the field of cardiovascular disease',
            conference: 'Asian Pacific Society of Cardiology (APSC)',
            location: 'Singapore',
        },
        {
            year: '2023',
            format: 'Moderated Poster',
            title: 'Coronary artery calcium and all-cause mortality in the Multicenter AIDS Cohort Study (MACS)',
            conference: 'AHA (American Heart Association) Scientific Sessions',
            location: 'Philadelphia, USA',
        },
        {
            year: '2023',
            format: 'Poster',
            title: 'The off-hour effect on clinical outcomes of ST-segment elevation myocardial infarction complicated by cardiogenic shock patients treated with Impella: insights from J-PVAD',
            conference: 'AHA (American Heart Association) Scientific Sessions',
        },
        {
            year: '2022',
            format: 'Poster',
            title: 'The time trend of information seeking behavior about salt reduction in Japan',
            conference: 'International Society of Hypertension',
            location: 'Kyoto, Japan',
        },
        {
            year: '2022',
            format: 'Poster',
            title: 'Nationwide trend analysis of adding salt to meals in Japan: Cookpad data, 2010–2014',
            conference: 'International Society of Hypertension',
            location: 'Kyoto, Japan',
        },
        {
            year: '2022',
            format: 'Poster',
            title: 'Left-digit bias in out-of-hospital cardiac arrest — JCS-ReSS',
            conference: 'AHA Resuscitation Science Symposium',
            location: 'Chicago, USA',
        },
    ] as Presentation[],

    domestic: [
        {
            year: '2025',
            format: 'Symposium',
            title: 'Practice and challenges of heart team–based care for acute coronary syndrome complicated by cardiogenic shock',
            conference: 'Japanese Society for Coronary Artery Surgery',
            location: 'Utsunomiya, Japan',
        },
        {
            year: '2025',
            format: 'Symposium',
            title: 'Reconsidering PCI strategies for coronary artery disease in Japan: insights from major landmark trials and real-world practice at our institution',
            conference: 'Japanese Association of Cardiovascular Intervention and Therapeutics',
            location: 'Osaka, Japan',
        },
        {
            year: '2025',
            format: 'Symposium',
            title: 'A collaborative project linking the National Clinical Database and quality indicators: exploratory attempts at nudge-based feedback in future J-PCI reporting',
            conference: 'Japanese Association of Cardiovascular Intervention and Therapeutics',
            location: 'Osaka, Japan',
        },
        {
            year: '2025',
            format: 'Oral',
            title: 'Association of in-hospital haemoglobin drop with or without overt bleeding and long-term clinical outcomes after percutaneous coronary intervention',
            conference: 'Japanese Association of Cardiovascular Intervention and Therapeutics',
            location: 'Osaka, Japan',
        },
        {
            year: '2025',
            format: 'Oral',
            title: 'Understanding the real-world landscape of out-of-hospital cardiac arrest from data, and efforts to improve resuscitation systems',
            conference: 'Tokyo CCU Conference',
            location: 'Tokyo, Japan',
        },
        {
            year: '2025',
            format: 'Oral',
            title: 'Potential and limitations of AI prediction models in the management of complications during percutaneous coronary intervention',
            conference: 'The 38th Annual Meeting of the Japanese Coronary Artery Disease',
            location: 'Nagoya, Japan',
        },
        {
            year: '2024',
            format: 'Symposium',
            title: 'Examining the clinical-evidence gap in the ISCHEMIA / ORBITA-2 trials',
            conference: 'Japanese College of Cardiology',
            location: 'Sendai, Japan',
        },
        {
            year: '2024',
            format: 'Symposium',
            title: 'Global landscape of quality improvement initiatives in percutaneous coronary intervention',
            conference: 'Japanese Association of Cardiovascular Intervention and Therapeutics',
            location: 'Sapporo, Japan',
        },
        {
            year: '2024',
            format: 'Symposium',
            title: 'Quantifying physical activity through wearable technology',
            conference: 'Japanese Association of Cardiac Rehabilitation',
            location: 'Kobe, Japan',
        },
        {
            year: '2024',
            format: 'Oral',
            title: 'Prognostic implications of contrast-associated acute kidney injury after percutaneous coronary intervention: a stratified risk score assessment',
            conference: 'Japanese Association of Cardiovascular Intervention and Therapeutics',
            location: 'Sapporo, Japan',
        },
        {
            year: '2023',
            format: 'Symposium',
            title: 'Social determinants of health and cardiovascular disease',
            conference: 'Japanese Circulation Society',
            location: 'Fukuoka, Japan',
        },
        {
            year: '2023',
            format: 'Symposium',
            title: 'Risk stratification for renal dysfunction and bleeding in percutaneous coronary intervention — future approaches for perioperative complications',
            conference: 'Japanese Association of Cardiovascular Intervention and Therapeutics',
            location: 'Fukuoka, Japan',
        },
        {
            year: '2023',
            format: 'Oral',
            title: 'The association of economic status and preoperative status before percutaneous coronary interventions in chronic coronary syndrome setting',
            conference: 'Japanese Association of Cardiovascular Intervention and Therapeutics',
            location: 'Fukuoka, Japan',
        },
        {
            year: '2023',
            format: 'Oral',
            title: 'Feedbacks using behavioral economic theories on STEP counts in cardiovascular disease patients (FOOTSTEPS): a pilot study',
            conference: 'Japanese College of Cardiology',
            location: 'Tokyo, Japan',
        },
        {
            year: '2022',
            format: 'Oral',
            title: 'The impact of Impella 5.0 for severe heart failure',
            conference: 'Japanese College of Cardiology',
        },
        {
            year: '2021',
            format: 'Oral',
            title: 'Pacemaker infection and endocarditis due to Parvimonas micra: a case report',
            conference: 'Japanese Society of Intensive Care Medicine',
            location: 'Kobe, Japan',
        },
        {
            year: '2021',
            format: 'Oral',
            title: 'Acute heart failure associated with toxic shock syndrome due to methicillin-susceptible Staphylococcus aureus during the postpartum period',
            conference: 'Japanese Society of Intensive Care Medicine',
            location: 'Kobe, Japan',
        },
        {
            year: '2021',
            format: 'Oral',
            title: 'The impact of coronary computed tomography angiography on medical treatment modification and prognosis in patients with suspected coronary artery disease',
            conference: 'Japanese Circulation Society',
            location: 'Yokohama, Japan',
        },
        {
            year: '2021',
            format: 'Oral',
            title: 'Acute mitral valve regurgitation due to early structural valve deterioration following mitral valve replacement surgery: a case report',
            conference: 'Japanese Circulation Society',
            location: 'Matsuyama, Japan',
        },
        {
            year: '2021',
            format: 'Oral',
            title: 'Successful percutaneous coronary intervention (PCI) for plaque rupture in three branches and simultaneous occlusion in two branches: a case report',
            conference: 'Japanese Association of Cardiovascular Intervention and Therapeutics',
        },
        {
            year: '2020',
            format: 'Oral',
            title: 'Amoebic pericarditis that preceded a liver abscess and developed alone: a case report',
            conference: 'Japanese Circulation Society',
            location: 'Tokyo, Japan',
        },
        {
            year: '2019',
            format: 'Oral',
            title: 'Rapidly progressive glomerulonephritis and a renal biopsy with a diagnosis of intravascular large B-cell lymphoma',
            conference: 'Japanese Society of Internal Medicine',
            location: 'Tokyo, Japan',
        },
        {
            year: '2016',
            format: 'Oral',
            title: 'Pure red cell aplasia and hemolytic anemia have developed simultaneously after acute B hepatitis: a rare case report',
            conference: 'Japanese Society of Internal Medicine',
            location: 'Tokyo, Japan',
        },
    ] as Presentation[],

    invited: [
        {
            year: '2025',
            format: 'Invited Lecture',
            title: 'A collaborative project linking the National Clinical Database and quality indicators: exploratory attempts at nudge-based feedback in future J-PCI reporting',
            conference: 'Japanese Association of Cardiovascular Intervention and Therapeutics',
            location: 'Osaka, Japan',
        },
        {
            year: '2025',
            format: 'Invited Lecture',
            title: 'Reconsidering PCI strategies for coronary artery disease in Japan: insights from major landmark trials and real-world practice at our institution',
            conference: 'Japanese Association of Cardiovascular Intervention and Therapeutics',
            location: 'Osaka, Japan',
        },
        {
            year: '2025',
            format: 'Invited Lecture',
            title: 'Practice and challenges of heart team–based care for acute coronary syndrome complicated by cardiogenic shock',
            conference: 'Japanese Society for Coronary Artery Surgery',
            location: 'Utsunomiya, Japan',
        },
        {
            year: '2024',
            format: 'Invited Lecture',
            title: 'Examining the clinical-evidence gap in the ISCHEMIA / ORBITA-2 trials',
            conference: 'Japanese College of Cardiology',
            location: 'Sendai, Japan',
        },
        {
            year: '2024',
            format: 'Invited Lecture',
            title: 'Global landscape of quality improvement initiatives in percutaneous coronary intervention',
            conference: 'Japanese Association of Cardiovascular Intervention and Therapeutics',
            location: 'Sapporo, Japan',
        },
        {
            year: '2024',
            format: 'Invited Lecture',
            title: 'Quantifying physical activity through wearable technology',
            conference: 'Japanese Association of Cardiac Rehabilitation',
            location: 'Kobe, Japan',
        },
        {
            year: '2023',
            format: 'Invited Lecture',
            title: 'Risk stratification for renal dysfunction and bleeding in percutaneous coronary intervention — future approaches for perioperative complications',
            conference: 'Japanese Association of Cardiovascular Intervention and Therapeutics',
            location: 'Fukuoka, Japan',
        },
        {
            year: '2023',
            format: 'Invited Lecture',
            title: 'Social determinants of health and cardiovascular disease',
            conference: 'Japanese Circulation Society',
            location: 'Fukuoka, Japan',
        },
    ] as Presentation[],
};

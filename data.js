const portfolioData = {
  contexts: [
    {
      id: "economic",
      title: "Economic Context",
      icon: "💰",
      desc: "Poverty, housing stress, and financial hardship in early childhood education.",
      image: "assets/economic_placeholder.png",
      A: {
        title: "Understanding the Context",
        definition: "The economic context refers to the financial stability and material resources available to families, encompassing issues such as poverty, unemployment, and housing stress. This deeply influences a child's early developmental trajectory.",
        relevance: "In Early Childhood Education and Care (ECEC), recognizing economic hardship is critical because socioeconomic status (SES) remains one of the strongest predictors of educational outcomes.",
        theories: "Bronfenbrenner’s Ecological Systems Theory highlights how macro-level economic conditions (exosystem/macrosystem) cascade down to affect the microsystem of the family home. Bourdieu’s concept of 'Cultural Capital' explains how economic resources translate into educational advantages.",
        australian: "In Australia, over 1 in 6 children live in poverty despite sustained national economic growth. The rising cost of living and housing crisis disproportionately affect vulnerable families, making intersectional ECEC support vital."
      },
      B: {
        title: "Impact on Children and Families",
        points: [
          "Cognitive Development: Limited access to educational resources, nutritious food, and stimulating environments can delay cognitive milestones and language acquisition.",
          "Emotional Well-being: Chronic financial stress in parents often transfers to children, leading to increased anxiety, dysregulation, and behavioral challenges.",
          "Social Engagement: Children may feel excluded from peer activities requiring financial contributions, impacting social integration.",
          "Family Relationships: Parental stress linked to housing or financial insecurity can strain parent-child interactions, reducing responsive caregiving."
        ]
      },
      C: {
        title: "Social Policy and Australian Responses",
        policies: [
          "Child Care Subsidy (CCS): Australian Government financial assistance to help families with the cost of childcare, featuring higher subsidies for lower-income brackets.",
          "Additional Child Care Subsidy (ACCS): Temporary extra support for families experiencing severe financial hardship or temporary vulnerability.",
          "National Early Childhood Education and Care Workforce Strategy: Aims to build a sustainable ECEC workforce to ensure affordable, accessible care."
        ],
        stats: "Approximately 760,000 children in Australia live below the poverty line (ACOSS, 2023).",
        impact: "These policies attempt to democratize access to ECEC, yet complexity in claiming subsidies can inadvertently exclude the most marginalized families. Educators play a role in navigating these systemic barriers."
      },
      D: [
        { title: "Subsidized Excursions", desc: "Removing financial barriers to participation.", example: "Educators allocate budget to fully subsidize centre excursions, ensuring no child is left out due to financial constraints." },
        { title: "Discreet Resource Sharing", desc: "Providing material support without stigma.", example: "Maintaining a community pantry and uniform swap near the entrance where families can take what they need anonymously." },
        { title: "Trauma-Informed Practice", desc: "Recognizing stress behaviors.", example: "When a child exhibits hoarding behaviors with food, educators gently provide extra snacks rather than punitive discipline." },
        { title: "Flexible Payment Options", desc: "Easing immediate financial burdens.", example: "Administrators working with families to setup manageable, interest-free payment plans for centre fees during crises." },
        { title: "Advocacy and Referrals", desc: "Connecting families to broader support.", example: "Educators actively refer families to services like Centrelink or local financial counseling when hardships are disclosed." }
      ],
      E: [
        { name: "The Smith Family", role: "Education Support Charity", collaboration: "Provides learning support programs and financial assistance for children's educational needs." },
        { name: "Services Australia (Centrelink)", role: "Government Agency", collaboration: "Assists families in accessing the Child Care Subsidy and emergency relief payments." },
        { name: "Local Housing Coalitions", role: "Housing Advocacy", collaboration: "Helps educators refer families experiencing housing stress to emergency accommodation." },
        { name: "Foodbank Australia", role: "Food Rescue Organization", collaboration: "Partners with centres to supply fresh produce for community pantries and breakfast clubs." },
        { name: "Financial Counselors", role: "Advisory Service", collaboration: "Educators invite counselors for free, confidential workshops with parents navigating severe debt." }
      ],
      F: {
        websites: [
          { title: "ACOSS (Australian Council of Social Service)", purpose: "Research on poverty and inequality.", empathy: "Provides educators with statistical grounding on the reality of poverty." },
          { title: "The Front Project", purpose: "Advocacy for early learning access.", empathy: "Highlights the systemic barriers to education for low-SES families." },
          { title: "Raising Children Network", purpose: "Parenting resources.", empathy: "Offers stress-reduction strategies for parents." },
          { title: "Early Childhood Australia (ECA)", purpose: "Professional development.", empathy: "Provides modules on inclusive practice." }
        ],
        books: [
          { title: "A Chair for My Mother by Vera B. Williams", purpose: "Understanding saving and hardship.", empathy: "Teaches resilience and community support." },
          { title: "Maddi's Fridge by Lois Brandt", purpose: "Exploring hidden poverty/hunger.", empathy: "Encourages empathy and breaking stigma around asking for help." },
          { title: "Those Shoes by Maribeth Boelts", purpose: "Wants vs. Needs.", empathy: "Helps children understand financial limitations gently." },
          { title: "The Can Man by Laura E. Williams", purpose: "Homelessness awareness.", empathy: "Builds compassion for marginalized community members." }
        ],
        videos: [
          { title: "Sesame Street in Communities: Financial Education", purpose: "Basic financial literacy.", empathy: "Normalizes talking about money constraints." },
          { title: "Play School: Community Helpers", purpose: "Understanding support networks.", empathy: "Shows children who to ask for help." },
          { title: "ABC Kids: Being Resourceful", purpose: "Encourages creativity without money.", empathy: "Values imagination over material goods." },
          { title: "TEDx: The Reality of Childhood Poverty", purpose: "Educator professional development.", empathy: "Deepens structural understanding." }
        ]
      }
    },
    {
      id: "social",
      title: "Social Context",
      icon: "🤝",
      desc: "Isolation, divorce, family structures, and out-of-home care.",
      image: "assets/hero-bg.jpg",
      A: {
        title: "Understanding the Context",
        definition: "The social context involves the relationships, family structures, and social networks that surround a child. This includes single-parent households, blended families, divorce, geographic isolation, and children in out-of-home care (foster care).",
        relevance: "Educators must build inclusive environments that validate every family structure. A child's sense of belonging relies heavily on seeing their specific social reality reflected in their learning space.",
        theories: "Vygotsky’s Sociocultural Theory emphasizes that cognitive development is inherently a social process. Bowlby’s Attachment Theory is crucial here, particularly for children experiencing separation through divorce or foster care.",
        australian: "Australia has a diverse landscape of family structures. Currently, over 1 million families are single-parent families. Additionally, the number of children in out-of-home care requires trauma-informed social practices in modern Australian ECEC."
      },
      B: {
        title: "Impact on Children and Families",
        points: [
          "Emotional Security: Navigating divorce or foster care can trigger severe separation anxiety and attachment disruptions in early years.",
          "Social Development: Children experiencing severe rural isolation may have limited peer interactions before commencing formal care, impacting social milestone acquisition.",
          "Identity Formation: Children in non-traditional families may feel alienated if educational materials only depict nuclear families.",
          "Parental Wellbeing: Social isolation for parents (especially new mothers or rural families) drastically increases the risk of postnatal depression and burnout."
        ]
      },
      C: {
        title: "Social Policy and Australian Responses",
        policies: [
          "National Framework for Protecting Australia’s Children: Focuses on early intervention and support for vulnerable families to prevent children entering out-of-home care.",
          "Family Law Act (Shared Parental Responsibility): Guides how families navigate separation, impacting how ECEC centres manage custody communications.",
          "Inclusion Support Program (ISP): Assists services to build their capacity to include children with diverse social and developmental needs."
        ],
        stats: "As of 2022, there were approximately 45,400 Australian children living in out-of-home care (AIHW).",
        impact: "Policies mandate that ECEC settings become protective sanctuaries. Educators must legally and ethically navigate complex custody arrangements and mandatory reporting while maintaining child wellbeing."
      },
      D: [
        { title: "Inclusive Language", desc: "Avoiding assumptions about family structures.", example: "Educators use terms like 'grown-ups' or 'families' instead of 'mums and dads' during group time." },
        { title: "Dual Communication", desc: "Ensuring divorced parents both receive info.", example: "Sending newsletters, developmental updates, and artwork copies to both parents in separated households." },
        { title: "Representation in Play", desc: "Reflecting diverse families in resources.", example: "Stocking the home corner with diverse family figures, including single-parent and same-sex parent play sets." },
        { title: "Transition Support for OOHC", desc: "Stabilizing transitions for foster children.", example: "Assigning a primary educator to build an intensive, secure attachment with a child entering residential/foster care." },
        { title: "Creating Parent Networks", desc: "Combating social isolation.", example: "Hosting monthly 'morning teas' at drop-off to help isolated parents connect with the local community." }
      ],
      E: [
        { name: "Relationships Australia", role: "Counseling Service", collaboration: "Provides family dispute resolution and counseling for navigating divorce." },
        { name: "CREATE Foundation", role: "OOHC Advocacy", collaboration: "Educates professionals on the voices and needs of children in the care system." },
        { name: "Playgroup Australia", role: "Community Hub", collaboration: "Partners with centres to run weekend playgroups, reducing parental isolation." },
        { name: "Child Protection Agencies", role: "Government Welfare", collaboration: "Liaises with educators for mandatory reporting and supporting at-risk youth." },
        { name: "Local Family Law Mediators", role: "Legal Support", collaboration: "Provides guidance to centre directors on interpreting complex custody and AVO documents." }
      ],
      F: {
        websites: [
          { title: "Emerging Minds", purpose: "Children's mental health.", empathy: "Guides educators on supporting children through family separation." },
          { title: "Foster Care Australia", purpose: "OOHC Resources.", empathy: "Builds understanding of the foster care system." },
          { title: "Raising Children (Blended Families)", purpose: "Advice for step-families.", empathy: "Provides practical tips for harmony." },
          { title: "Be You", purpose: "Educator mental health framework.", empathy: "Empowers educators to create socially inclusive spaces." }
        ],
        books: [
          { title: "The Family Book by Todd Parr", purpose: "Celebrating diverse families.", empathy: "Normalizes every type of family structure (two moms, single dads, etc)." },
          { title: "Two Homes by Claire Masurel", purpose: "Navigating divorce.", empathy: "Reassures children that they are loved in both households." },
          { title: "Maybe Days by Jennifer Wilgocki", purpose: "Understanding foster care.", empathy: "Helps children in care vocalize their feelings of uncertainty." },
          { title: "Invisible String by Patrice Karst", purpose: "Separation anxiety.", empathy: "Comforts children experiencing social isolation or separation." }
        ],
        videos: [
          { title: "Sesame Street: Divorce", purpose: "Explaining separation.", empathy: "Uses familiar characters to explain complex family changes." },
          { title: "Daniel Tiger: Grown-ups Come Back", purpose: "Managing separation anxiety.", empathy: "Builds absolute trust and routine." },
          { title: "Bluey: The Sign", purpose: "Navigating big transitions.", empathy: "Helps children process changes in home life." },
          { title: "Play School: Different Families", purpose: "Showcasing social diversity.", empathy: "Promotes social inclusion from a young age." }
        ]
      }
    },
    {
      id: "cultural",
      title: "Cultural & Diversity Context",
      icon: "🌍",
      desc: "First Nations, culturally and linguistically diverse (CALD) backgrounds, immigrants, and refugees.",
      image: "assets/cultural_placeholder.png",
      A: {
        title: "Understanding the Context",
        definition: "The cultural context encompasses the traditions, languages, values, and histories of varied populations. This specifically includes Aboriginal and Torres Strait Islander families, as well as immigrants, refugees, and CALD families settling in new communities.",
        relevance: "Culture forms the lens through which children understand the world. An educator’s cultural competence directly dictates a child’s sense of safety and identity validation.",
        theories: "Moll's 'Funds of Knowledge' theory argues that culturally diverse families possess abundant, historically accumulated knowledge that educators must draw into the classroom. Post-colonial theories highlight the necessity of dismantling Eurocentric curriculums.",
        australian: "Australia is one of the most multicultural nations globally. Furthermore, the commitment to reconciliation with First Nations peoples means embedding authentic Aboriginal perspectives is a mandated priority under the Early Years Learning Framework (EYLF V2.0)."
      },
      B: {
        title: "Impact on Children and Families",
        points: [
          "Identity and Belonging: Children from minority backgrounds may experience cultural dissonance if their home culture is ignored or marginalized at the centre.",
          "Language Development: Dual-language learners face immense cognitive loads. Lack of home language support can hinder overall linguistic confidence.",
          "Intergenerational Trauma: First Nations children and refugee children may carry historical and intergenerational trauma, requiring deeply sensitive pedagogy.",
          "Family Engagement: Language barriers and different cultural expectations of education can prevent CALD parents from actively participating in the centre community."
        ]
      },
      C: {
        title: "Social Policy and Australian Responses",
        policies: [
          "Early Years Learning Framework (EYLF V2.0): Explicitly mandates 'Aboriginal and Torres Strait Islander perspectives' and 'Cultural Responsiveness' as core principles.",
          "Closing the Gap: National framework aimed at reducing the disadvantage and educational gap between First Nations people and non-Indigenous Australians.",
          "Settlement Engagement and Transition Support (SETS): Government program assisting refugees and eligible migrants in their first five years in Australia."
        ],
        stats: "Over 300 languages are spoken in Australian homes, and 1 in 5 children speak a language other than English (ABS, 2021).",
        impact: "These policies require ECEC to heavily modify practices, moving beyond superficial 'tokenism' (like just celebrating Harmony Day) to deeply embedded, culturally safe daily practices."
      },
      D: [
        { title: "Daily Acknowledgement of Country", desc: "Embedding First Nations perspectives.", example: "Children participate in a daily, meaningful Acknowledgement of Country customized to the local traditional custodians." },
        { title: "Bilingual Signage", desc: "Creating a welcoming environment for CALD families.", example: "Labelling classroom areas and objects in English, the local Indigenous language, and dominant community languages." },
        { title: "Culturally Diverse Menus", desc: "Respecting dietary and cultural food traditions.", example: "Working with parents to construct menus that include Halal options, traditional meals, and avoiding culturally inappropriate foods." },
        { title: "Valuing Home Languages", desc: "Supporting linguistic diversity.", example: "Educators learn key greeting/comfort words in a child's home language to soothe them during transition times." },
        { title: "Anti-Bias Curriculum", desc: "Actively challenging stereotypes.", example: "When a child makes a racially biased comment, the educator immediately uses it as a gentle, constructive teaching moment about equity." }
      ],
      E: [
        { name: "Local Aboriginal Land Councils", role: "Cultural Authority", collaboration: "Consulting on local histories, appropriate language use, and inviting Elders for storytelling." },
        { name: "SNAICC", role: "First Nations Advocacy", collaboration: "Providing training and resources to ensure culturally safe environments for Indigenous children." },
        { name: "Translating and Interpreting Service (TIS)", role: "Communication Support", collaboration: "Used by directors to accurately communicate enrollment, policies, and development to non-English speaking parents." },
        { name: "Refugee Trauma Recovery Centre", role: "Mental Health", collaboration: "Guiding educators on trauma-informed practice for children fleeing war or persecution." },
        { name: "Community Language Schools", role: "Linguistic Network", collaboration: "Partnering to align ECEC learning with community-led language preservation efforts." }
      ],
      F: {
        websites: [
          { title: "Narragunnawali", purpose: "Reconciliation Action Plans (RAP).", empathy: "Guides centres in authentic reconciliation efforts." },
          { title: "SNAICC Resources", purpose: "Cultural safety.", empathy: "Helps educators understand First Nations child rearing." },
          { title: "Multicultural Centre for Women's Health", purpose: "CALD health.", empathy: "Supports educators in understanding immigrant maternal health." },
          { title: "Reconciliation Australia", purpose: "National advocacy.", empathy: "Fosters foundational respect for Indigenous histories." }
        ],
        books: [
          { title: "Welcome to Country by Aunty Joy Murphy", purpose: "Indigenous respect.", empathy: "Teaches children the deep significance of welcoming ceremonies." },
          { title: "Whoever You Are by Mem Fox", purpose: "Global diversity.", empathy: "Celebrates differences while highlighting our shared human emotions." },
          { title: "The Name Jar by Yangsook Choi", purpose: "Immigrant experience.", empathy: "Builds empathy for the immigrant child's struggle with identity." },
          { title: "I'm Australian Too by Mem Fox", purpose: "Multiculturalism.", empathy: "Shows that Australia is made up of many diverse backgrounds." }
        ],
        videos: [
          { title: "Little J & Big Cuz", purpose: "Indigenous representation.", empathy: "Normalizes First Nations culture in everyday childhood narratives." },
          { title: "Play School: Acknowledgement of Country", purpose: "Routine building.", empathy: "Shows how to embed respect daily." },
          { title: "Sesame Street: We're Different, We're the Same", purpose: "Anti-racism.", empathy: "A gentle introduction to racial diversity." },
          { title: "TED-Ed: The Danger of a Single Story", purpose: "Educator insight.", empathy: "Critical viewing for educators to avoid stereotyping." }
        ]
      }
    },
    {
      id: "health",
      title: "Health & Wellbeing Context",
      icon: "❤️",
      desc: "Mental health, chronic illness, trauma, and child abuse.",
      image: "assets/hero-bg.jpg",
      A: {
        title: "Understanding the Context",
        definition: "The health context involves the physical, mental, and nutritional wellbeing of children and their families. This deeply sensitive area encompasses chronic childhood illnesses, neurodivergence, parental mental health issues, domestic violence, and trauma.",
        relevance: "A child cannot learn if their basic physiological and psychological needs for safety and health are unmet (Maslow's Hierarchy). Educators are often the first line of observation for developmental delays or signs of abuse.",
        theories: "Maslow’s Hierarchy of Needs serves as the foundational theory—physiological safety must be secured before self-actualization (learning) occurs. The Neurosequential Model of Therapeutics (Perry) explains how trauma physically alters brain architecture.",
        australian: "In Australia, early childhood mental health is a growing concern. Approximately 1 in 7 children experience a mental disorder. Mandatory reporting laws severely dictate an educator’s legal and moral obligations in the context of abuse."
      },
      B: {
        title: "Impact on Children and Families",
        points: [
          "Brain Development: Toxic stress from abuse or domestic violence triggers persistent cortisol release, directly impairing executive functioning and memory.",
          "Physical Health: Poor nutritional environments or housing conditions lead to heightened asthma, obesity, and delayed motor skills.",
          "Socio-Emotional Dysregulation: Trauma often manifests as extreme 'acting out', aggression, or severe withdrawal, frequently mischaracterized as 'bad behavior'.",
          "Family Exhaustion: Parents managing a chronically ill or neurodivergent child face immense fatigue, requiring immense empathy from ECEC staff."
        ]
      },
      C: {
        title: "Social Policy and Australian Responses",
        policies: [
          "Mandatory Reporting Legislation: State-based laws legally requiring educators to report suspected child abuse or neglect to child protection authorities.",
          "National Quality Standard (NQS) Area 2: Children's Health and Safety: Mandates stringent policies on hygiene, sleep, nutrition, and child protection.",
          "NDIS (Early Childhood Approach): Provides vital early intervention funding for children under 9 with developmental delays or disabilities."
        ],
        stats: "AIHW reports that in 2021-22, 178,000 Australian children received child protection services.",
        impact: "Health and wellbeing dictate the absolute regulatory baseline of ECEC. Centres must meticulously document health plans, allergy protocols, and behavioral observations while acting as advocates for vulnerable children."
      },
      D: [
        { title: "Trauma-Informed De-escalation", desc: "Managing trauma responses securely.", example: "Using 'time-in' (sitting with the child to coregulate) rather than 'time-out' (isolation) when a child explodes in anger." },
        { title: "Safe Food Programs", desc: "Ensuring nutritional baselines are met.", example: "Providing highly nutritious, free breakfasts for children arriving hungry without questioning the parents." },
        { title: "Neurodiversity Affirming Spaces", desc: "Modifying the environment.", example: "Creating low-sensory ('quiet') zones equipped with weighted blankets and noise-canceling headphones for overwhelmed children." },
        { title: "Asthma & Anaphylaxis Protocols", desc: "Rigorous medical management.", example: "Displaying prominent, visual action plans and conducting regular staff drills with EpiPens." },
        { title: "Non-Judgmental Listening", desc: "Supporting parental mental health.", example: "Offering a private office space and a cup of tea to a parent who is visibly crying during morning drop-off." }
      ],
      E: [
        { name: "NDIS Early Childhood Partners", role: "Disability Support", collaboration: "Conducting observations at the centre to map out early intervention plans for neurodivergent children." },
        { name: "Maternal and Child Health Nurses", role: "Primary Health", collaboration: "Visiting centres to provide free screening for developmental milestones and maternal depression." },
        { name: "1800RESPECT / Orange Door", role: "Domestic Violence Support", collaboration: "Educators refer families experiencing family violence to these confidential triage services." },
        { name: "Dietitians Australia", role: "Nutritional Advice", collaboration: "Reviewing centre menu plans to ensure they meet the national dietary guidelines." },
        { name: "Child FIRST / Child Protection", role: "Welfare Authorities", collaboration: "Educators fulfill mandatory reporting duties and collaborate on safety plans." }
      ],
      F: {
        websites: [
          { title: "Be You (Beyond Blue)", purpose: "Mental health framework.", empathy: "Equips educators to handle complex emotional crises." },
          { title: "Kidsafe Australia", purpose: "Accident prevention.", empathy: "Ensures the physical environment is unconditionally safe." },
          { title: "1800RESPECT", purpose: "Family violence resources.", empathy: "Helps educators understand the signs of coercive control." },
          { title: "Allergy & Anaphylaxis Australia", purpose: "Medical safety.", empathy: "Removes the anxiety surrounding food allergies." }
        ],
        books: [
          { title: "The Huge Bag of Worries by V. Ironside", purpose: "Anxiety management.", empathy: "Helps children articulate invisible anxieties." },
          { title: "Some Brains by Nelly Thomas", purpose: "Neurodiversity.", empathy: "Celebrates autism and ADHD as different, not less." },
          { title: "All Are Welcome by Alexandra Penfold", purpose: "Safe spaces.", empathy: "Reassures a child fleeing trauma that the centre is safe." },
          { title: "How Are You Peeling? by Saxton Freymann", purpose: "Emotional literacy.", empathy: "Teaches vocabulary for complex health/emotional states." }
        ],
        videos: [
          { title: "Bluey: Bumpy and the Wise Old Wolfhound", purpose: "Hospitalization/Illness.", empathy: "Helps siblings and children process serious illness." },
          { title: "Sesame Street: Trauma", purpose: "Coping mechanisms.", empathy: "Models deep breathing and grounding techniques." },
          { title: "ABC Kids: Handwashing", purpose: "Physical hygiene.", empathy: "Creates fun around necessary health routines." },
          { title: "TEDx: Trauma-Informed Care in Classrooms", purpose: "Professional training.", empathy: "Transforms how educators view 'bad behavior'." }
        ]
      }
    },
    {
      id: "crisis",
      title: "Crisis & Emergency Context",
      icon: "🚨",
      desc: "Natural disasters, displacement, global pandemics, and community violence.",
      image: "assets/hero-bg.jpg",
      A: {
        title: "Understanding the Context",
        definition: "This context addresses sudden, catastrophic events that disrupt the fabric of the community. This includes acute trauma from natural disasters (bushfires, floods), public health emergencies (pandemics), and geopolitical displacement (war).",
        relevance: "During a crisis, ECEC services often transform from educational facilities into essential community anchor points—acting as sites for resource distribution, emotional triage, and restoring stability for children.",
        theories: "Erikson’s Psychosocial Stages indicate that maintaining 'Trust' during catastrophic chaos is vital for the infant/toddler. Systemic resilience theories highlight the role of community institutions in buffering acute trauma.",
        australian: "Australia is highly susceptible to extreme climate events. The recent Black Summer bushfires, catastrophic floods in NSW/QLD, and the COVID-19 pandemic have proven that modern educators must be trained in disaster-response pedagogy."
      },
      B: {
        title: "Impact on Children and Families",
        points: [
          "Loss of Routine and Safety: A sudden evacuation destroys a child's sense of predictability, leading to severe behavioral regression (e.g., bedwetting, loss of speech).",
          "Material Devastation: Families losing homes to floods or fires experience immediate, absolute poverty, lacking basic items like clothing and formula.",
          "Collective Community Trauma: Unlike isolated incidents, natural disasters traumatize the educators alongside the families, compounding the difficulty of delivering care.",
          "Information Overload: Children are deeply impacted by absorbing the panic from news media and traumatized adult conversations."
        ]
      },
      C: {
        title: "Social Policy and Australian Responses",
        policies: [
          "Emergency Management Policies (NQS): Stringent regulations dictating that every centre must have practiced, location-specific evacuation and lockdown procedures.",
          "Disaster Recovery Funding Arrangements (DRFA): Government grants that can help childcare centres rebuild rapidly to restore community normalcy.",
          "Community Trauma Toolkits (Emerging Minds): National frameworks deployed specifically to help ECEC settings support children post-natural disaster."
        ],
        stats: "Following the 2019-20 bushfires, over 500 early childhood services were located in heavily affected zones, deeply impacting community mental health.",
        impact: "Early childhood centres are legally recognized essential infrastructure. Keeping an ECEC centre open during or immediately after a crisis allows first-responders to work and parents to salvage their lives."
      },
      D: [
        { title: "Restoring Predictability", desc: "Using routine as an anchor.", example: "Immediately re-establishing the exact same visual timetable and meal routines to signal to the brain that 'we are safe now'." },
        { title: "Play-Based Trauma Processing", desc: "Allowing children to act out fears.", example: "Providing fire trucks, water tables, and doctor kits, allowing children to repeatedly reenact the disaster in a safe, controlled way." },
        { title: "Filtering Media Exposure", desc: "Protecting psychological boundaries.", example: "Banning news radios in the centre and advising parents to engage in 'news blackouts' around young children." },
        { title: "Drills as 'Games'", desc: "Reducing fear around evacuations.", example: "Practicing lockdown drills by calling it the 'Quiet Mouse Game', ensuring compliance without inducing panic." },
        { title: "Community Triage Hubs", desc: "Providing material aid.", example: "Turning the centre foyer into a donation hub for clothes and non-perishables for families who lost everything in a flood." }
      ],
      E: [
        { name: "Red Cross Australia", role: "Disaster Relief", collaboration: "Providing psychological first aid training to educators and material relief." },
        { name: "Local State Emergency Service (SES)", role: "First Responders", collaboration: "Conducting safety audits of the centre and engaging in community visits to build child trust in uniforms." },
        { name: "Emerging Minds", role: "Mental Health Specialists", collaboration: "Deploying post-disaster trauma modules specifically designed for early childhood practitioners." },
        { name: "Local Government Councils", role: "Infrastructure Planning", collaboration: "Coordinating with centre directors regarding safe evacuation routes and reopening protocols." },
        { name: "Grief Counselors", role: "Crisis Intervention", collaboration: "Brought in to support the educator team in processing their own trauma so they can hold space for the children." }
      ],
      F: {
        websites: [
          { title: "Emerging Minds (Disaster Toolkit)", purpose: "Actionable post-trauma steps.", empathy: "Provides scripts for educators explaining disasters to children." },
          { title: "Red Cross - Pillowcase Project", purpose: "Emergency preparedness.", empathy: "Empowers children by giving them agency in a crisis." },
          { title: "ACECQA Emergency Management", purpose: "Regulatory compliance.", empathy: "Ensures the physical safety of the environment." },
          { title: "Birdie's Tree (Children's Health QLD)", purpose: "Specifically for natural disasters.", empathy: "Highly specialized resources for bushfires, floods, and pandemics." }
        ],
        books: [
          { title: "Birdie and the Fire", purpose: "Bushfire processing.", empathy: "Helps children narrate their terrifying sensory experiences." },
          { title: "The Day the Lines Changed", purpose: "Understanding pandemics.", empathy: "Explains social distancing and invisible threats gently." },
          { title: "A Terrible Thing Happened by M. Holmes", purpose: "General crisis trauma.", empathy: "Validates the physical sensations of carrying trauma." },
          { title: "Flood by Jackie French", purpose: "Resilience storytelling.", empathy: "Highlights the power of community rebuilding." }
        ],
        videos: [
          { title: "Sesame Street: Emergencies", purpose: "Building safety awareness.", empathy: "Teaches who the 'helpers' are in a crisis." },
          { title: "Birdie's Tree Animations", purpose: "Post-disaster soothing.", empathy: "Specifically designed psychological first aid for toddlers." },
          { title: "Mr. Rogers: Look for the Helpers", purpose: "Reframing terror.", empathy: "Focuses a child's attention on the good people helping, not the destruction." },
          { title: "ABC Kids: First Responders", purpose: "Demystifying sirens/uniforms.", empathy: "Reduces panic when emergency services arrive." }
        ]
      }
    }
  ],
  references: [
    "Australian Bureau of Statistics. (2021). <em>Cultural diversity in Australia, 2021 Census</em>. ABS. https://www.abs.gov.au",
    "Australian Council of Social Service (ACOSS). (2023). <em>Poverty in Australia: Snapshot</em>. ACOSS/UNSW Poverty and Inequality Partnership.",
    "Australian Department of Education. (2022). <em>Belonging, Being and Becoming: The Early Years Learning Framework for Australia (V2.0)</em>. Australian Government.",
    "Australian Institute of Health and Welfare (AIHW). (2022). <em>Child protection Australia 2020–21</em>. AIHW.",
    "Emerging Minds. (2020). <em>Community Trauma Toolkit</em>. National Workforce Centre for Child Mental Health.",
    "Moll, L. C., Amanti, C., Neff, D., & Gonzalez, N. (1992). Funds of knowledge for teaching: Using a qualitative approach to connect homes and classrooms. <em>Theory into Practice, 31</em>(2), 132-141.",
    "Perry, B. D. (2009). Examining child maltreatment through a neurodevelopmental lens: Clinical applications of the Neurosequential Model of Therapeutics. <em>Journal of Loss and Trauma, 14</em>(4), 240-255.",
    "Vygotsky, L. S. (1978). <em>Mind in society: The development of higher psychological processes</em>. Harvard University Press."
  ]
};

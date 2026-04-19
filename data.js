const portfolioData = {
  contexts: [
    {
      id: "economic",
      title: "Economic Context",
      icon: "💰",
      desc: "Economic stress, poverty, and financial hardship in early childhood education.",
      image: "assets/economic_placeholder.png",
      A: {
        title: "Understanding the Context",
        definition: "The economic context refers to the level of financial stability and access to resources within a family, including challenges such as poverty, unemployment, and unstable housing. These conditions have a strong influence on a child’s early development and life opportunities.",
        relevance: "In Early Childhood Education and Care (ECEC), understanding socioeconomic disadvantage is crucial, as SES is one of the most reliable indicators of future educational success.",
        theories: "Bronfenbrenner’s Ecological Systems Theory explains how wider economic conditions (macro/exosystem) directly impact a child’s immediate home environment (microsystem). Likewise, Bourdieu’s concept of cultural capital shows how financial resources often translate into educational advantages.",
        australian: "In Australia, more than one in six children experience poverty despite overall economic growth. The ongoing cost-of-living and housing crisis continues to place extra pressure on already vulnerable families, reinforcing the need for inclusive and responsive ECEC practices."
      },
      B: {
        title: "Impact on Children and Families",
        points: [
          "Cognitive Development: Limited access to books, learning materials, nutritious food, and stimulating environments can hinder cognitive growth and language development.",
          "Emotional Wellbeing: Ongoing financial stress within the family can transfer to children, contributing to anxiety, emotional dysregulation, and behavioural challenges.",
          "Social Interaction: Financial limitations may prevent children from participating in activities, leading to feelings of exclusion and reduced social connection.",
          "Family Relationships: Stress related to housing or employment insecurity can strain parent-child relationships and impact the quality of responsive caregiving."
        ]
      },
      C: {
        title: "Social Policies and Australian Responses",
        policies: [
          "Child Care Subsidy (CCS): A government initiative that helps families cover childcare costs, with higher support provided to lower-income households.",
          "Additional Child Care Subsidy (ACCS): Provides extra assistance to families facing serious or temporary financial hardship.",
          "National Early Childhood Education and Care Workforce Strategy: Aims to strengthen and sustain the ECEC workforce to ensure access and affordability."
        ],
        stats: "Around 760,000 children in Australia live below the poverty line (ACOSS, 2023).",
        impact: "While these policies aim to improve access to early education, the complexity of applying for subsidies can unintentionally exclude the families who need them most. Educators often play an important role in helping families understand and access these supports."
      },
      D: [
        { title: "Subsidised Excursions", desc: "Removing financial barriers by covering costs.", example: "This ensures all children can participate equally." },
        { title: "Discreet Resource Sharing", desc: "Providing access to community pantries and uniform swaps.", example: "Doing so in a way that protects family dignity and avoids stigma." },
        { title: "Trauma-Informed Practice", desc: "Responding to stress-related behaviours (such as food hoarding).", example: "Providing understanding and support rather than punishment." },
        { title: "Flexible Payment Options", desc: "Offering manageable, interest-free payment plans.", example: "Supporting families appropriately during financial hardship." },
        { title: "Advocacy and Referrals", desc: "Connecting families with external supports.", example: "Referring to services such as Centrelink or financial counselling services." }
      ],
      E: [
        { name: "The Smith Family", role: "Education Support Charity", collaboration: "Provides educational support and financial assistance to children in need." },
        { name: "Services Australia (Centrelink)", role: "Government Agency", collaboration: "Helps families access subsidies and emergency financial support." },
        { name: "Local Housing Organisations", role: "Housing Advocacy", collaboration: "Assist families experiencing housing instability with accommodation options." },
        { name: "Foodbank Australia", role: "Food Rescue Organization", collaboration: "Supplies food for community pantries and centre-based meal programs." },
        { name: "Financial Counsellors", role: "Advisory Service", collaboration: "Offer free, confidential advice to families managing financial stress." }
      ],
      F: {
        websites: [
          { title: "ACOSS (Australian Council of Social Service)", purpose: "Provides data and research on poverty and inequality.", empathy: "Builds a foundation of empathy for economic realities." },
          { title: "The Front Project", purpose: "Advocates for equal access to early childhood education.", empathy: "Encourages advocacy for low-SES families." },
          { title: "Raising Children Network", purpose: "Offers practical parenting advice.", empathy: "Provides strategies for managing stress." },
          { title: "Early Childhood Australia (ECA)", purpose: "Provides professional development.", empathy: "Supports continuous learning for inclusive practice." }
        ],
        books: [
          { title: "A Chair for My Mother – Vera B. Williams", purpose: "Explores themes of saving and community support.", empathy: "Teaches resilience and empathy for those facing hardship." },
          { title: "Maddi’s Fridge – Lois Brandt", purpose: "Raises awareness of hidden hunger.", empathy: "Promotes empathy and reduces stigma." },
          { title: "Those Shoes – Maribeth Boelts", purpose: "Helps children understand wants versus needs.", empathy: "Gently addresses financial limitations." },
          { title: "The Can Man – Laura E. Williams", purpose: "Builds awareness of homelessness.", empathy: "Fosters compassion for marginalized individuals." }
        ],
        videos: [
          { title: "Sesame Street (Financial Education)", purpose: "Introduces basic financial concepts.", empathy: "Presents topics in a child-friendly way." },
          { title: "Play School (Community Helpers)", purpose: "Helps children understand support networks.", empathy: "Reduces anxiety about asking for help." },
          { title: "ABC Kids (Being Resourceful)", purpose: "Encourages creativity without relying on money.", empathy: "Values imagination over material wealth." },
          { title: "TEDx: The Reality of Childhood Poverty", purpose: "Supports educators in understanding systemic inequality.", empathy: "Deepens structural empathy for vulnerable populations." }
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
        definition: "The social context focuses on the relationships, family setups, and support systems that shape a child’s everyday life. This includes a wide range of experiences such as single-parent households, blended families, separation or divorce, geographic isolation, and children living in out-of-home care like foster care.",
        relevance: "For educators, this means creating spaces where every type of family is acknowledged and respected. A child’s sense of belonging is strongly influenced by whether they see their own family reflected in their environment.",
        theories: "Vygotsky’s sociocultural theory reminds us that children learn through social interaction, while Bowlby’s attachment theory is especially important for understanding the impact of separation in cases like divorce or foster care.",
        australian: "In Australia, family diversity is the norm, with over a million single-parent families. The number of children in out-of-home care also highlights the importance of trauma-informed approaches in ECEC settings."
      },
      B: {
        title: "Impact on Children and Families",
        points: [
          "Emotional Security: Experiences such as divorce or foster care can disrupt attachment and lead to separation anxiety, especially in early childhood.",
          "Social Development: Children in rural or isolated areas may have limited opportunities to interact with peers, which can delay social skill development.",
          "Identity Formation: When only traditional nuclear families are represented in learning materials, children from other family types may feel excluded or invisible.",
          "Parental Wellbeing: Social isolation, particularly for new parents or those in remote areas, can increase the risk of postnatal depression and emotional burnout."
        ]
      },
      C: {
        title: "Social Policy and Australian Responses",
        policies: [
          "National Framework for Protecting Australia’s Children: Focuses on early support and intervention to reduce the need for out-of-home care.",
          "Family Law Act (Shared Parental Responsibility): Guides how separated families manage responsibilities and informs how ECEC services communicate with both parents.",
          "Inclusion Support Program (ISP): Helps early learning services better support children with diverse social and developmental needs."
        ],
        stats: "As of 2022, around 45,400 children in Australia were living in out-of-home care (AIHW).",
        impact: "These policies position ECEC centres as safe and stable environments. Educators are responsible for managing complex family situations, maintaining clear communication, and meeting legal obligations such as mandatory reporting, all while keeping the child’s wellbeing at the centre."
      },
      D: [
        { title: "Inclusive Language", desc: "Using terms like 'families' or 'grown-ups'.", example: "Avoiding assuming 'mum and dad', ensuring all family types feel included." },
        { title: "Dual Communication", desc: "Sharing updates, newsletters, and children’s work.", example: "Ensuring both parents in separated families receive information." },
        { title: "Representation in Play", desc: "Providing toys and materials that reflect a variety of family structures.", example: "Including single-parent and same-sex families in resources." },
        { title: "Support for OOHC Transitions", desc: "Assigning a consistent educator to a child.", example: "Building a secure, trusting relationship for children entering foster care." },
        { title: "Building Parent Connections", desc: "Organising informal gatherings, such as morning teas.", example: "Helping reduce isolation and strengthen community ties." }
      ],
      E: [
        { name: "Relationships Australia", role: "Counseling Service", collaboration: "Offers counselling and mediation services for families experiencing separation." },
        { name: "CREATE Foundation", role: "OOHC Advocacy", collaboration: "Advocates for children in out-of-home care and supports professionals in understanding their needs." },
        { name: "Playgroup Australia", role: "Community Hub", collaboration: "Works with centres to run playgroups that help reduce isolation for families." },
        { name: "Child Protection Services", role: "Government Welfare", collaboration: "Collaborate with educators on safeguarding and supporting vulnerable children." },
        { name: "Family Law Mediators", role: "Legal Support", collaboration: "Provide guidance on custody arrangements and legal matters." }
      ],
      F: {
        websites: [
          { title: "Emerging Minds", purpose: "Supports educators in responding to children’s mental health.", empathy: "Guides responses during complex family changes." },
          { title: "Foster Care Australia", purpose: "Provides resources to understand the foster care system.", empathy: "Increases empathy for children in OOHC." },
          { title: "Raising Children Network (Blended Families)", purpose: "Offers practical advice for step and blended families.", empathy: "Encourages harmony and understanding." },
          { title: "Be You", purpose: "Helps educators create inclusive environments.", empathy: "Supports mentally healthy learning spaces." }
        ],
        books: [
          { title: "The Family Book – Todd Parr", purpose: "Celebrates all types of families.", empathy: "Normalizes diverse family structures." },
          { title: "Two Homes – Claire Masurel", purpose: "Helps children adjust to living in separate households.", empathy: "Provides reassurance and comfort." },
          { title: "Maybe Days – Jennifer Wilgocki", purpose: "Supports children in foster care.", empathy: "Helps children express their emotions and uncertainty." },
          { title: "The Invisible String – Patrice Karst", purpose: "Comforts children experiencing separation anxiety.", empathy: "Offers emotional security." }
        ],
        videos: [
          { title: "Sesame Street (Divorce)", purpose: "Explains family separation simply.", empathy: "Uses a child-friendly way to process changes." },
          { title: "Daniel Tiger: Grown-Ups Come Back", purpose: "Reinforces trust during separation.", empathy: "Provides reassurance and routine." },
          { title: "Bluey: The Sign", purpose: "Helps understand major family changes.", empathy: "Aids in emotional processing." },
          { title: "Play School: Different Families", purpose: "Promotes inclusion and understanding.", empathy: "Showcases diverse family structures." }
        ]
      }
    },
    {
      id: "cultural",
      title: "Cultural & Diversity Context",
      icon: "🌍",
      desc: "First Nations peoples, culturally and linguistically diverse (CALD) communities, immigrants, and refugees.",
      image: "assets/cultural_placeholder.png",
      A: {
        title: "Understanding the Context",
        definition: "The cultural context focuses on the traditions, languages, values, and histories that shape different communities. This includes Aboriginal and Torres Strait Islander families, as well as migrant, refugee, and CALD families who are settling into life in Australia.",
        relevance: "Culture plays a major role in how children interpret the world, so an educator’s ability to respond in culturally respectful ways directly affects a child’s sense of safety, identity, and belonging.",
        theories: "Moll’s “Funds of Knowledge” theory highlights that families bring rich cultural knowledge and lived experiences that should be recognised and included in learning. In addition, post-colonial perspectives encourage educators to move beyond Eurocentric teaching approaches and embrace more inclusive practices.",
        australian: "Australia is one of the most multicultural countries in the world, and there is a strong national commitment to reconciliation. As a result, embedding authentic Aboriginal and Torres Strait Islander perspectives is a required element of the Early Years Learning Framework (EYLF V2.0)."
      },
      B: {
        title: "Impact on Children and Families",
        points: [
          "Identity and Belonging: When a child’s culture is not recognised or valued, it can affect their sense of identity and belonging.",
          "Language Development: Children learning multiple languages often carry a higher cognitive load, and without support for their home language, their confidence in communication may decrease.",
          "Intergenerational Trauma: Some First Nations and refugee children may experience the effects of historical or ongoing trauma, requiring sensitive and trauma-informed approaches.",
          "Family Engagement: Language barriers and different cultural expectations about education can make it more difficult for some families to engage with the centre."
        ]
      },
      C: {
        title: "Social Policy and Australian Responses",
        policies: [
          "Early Years Learning Framework (EYLF V2.0): Highlights cultural responsiveness and the inclusion of Aboriginal and Torres Strait Islander perspectives as core principles.",
          "Closing the Gap: A national initiative aimed at reducing inequality and improving outcomes for First Nations communities.",
          "Settlement Engagement and Transition Support (SETS): Supports migrants and refugees during their early years of settlement in Australia."
        ],
        stats: "With over 300 languages spoken in Australian homes and one in five children speaking a language other than English (ABS, 2021).",
        impact: "These policies require ECEC services to move beyond surface-level inclusion and embed culturally safe, meaningful practices into everyday experiences."
      },
      D: [
        { title: "Acknowledgement of Country", desc: "Developing meaningful, locally relevant acknowledgements.", example: "Ensuring children can participate in daily routines with cultural respect." },
        { title: "Multilingual Environments", desc: "Displaying signs and labels in various languages.", example: "Creating an inclusive setting with English, Indigenous, and community languages." },
        { title: "Culturally Inclusive Menus", desc: "Collaborating with families for appropriate foods.", example: "Including Halal or traditional meals in the centre rotation." },
        { title: "Valuing Home Languages", desc: "Learning key words or phrases in a child’s home language.", example: "Supporting comfort and connection during transitions." },
        { title: "Anti-Bias Teaching", desc: "Responding to stereotypes or biased comments in the moment.", example: "Using these as opportunities to teach fairness and respect." }
      ],
      E: [
        { name: "Local Aboriginal Land Councils", role: "Cultural Authority", collaboration: "Provide cultural guidance, local knowledge, and connections with Elders." },
        { name: "SNAICC", role: "First Nations Advocacy", collaboration: "Offers training and resources to support culturally safe practices for First Nations children." },
        { name: "Translating and Interpreting Service (TIS)", role: "Communication Support", collaboration: "Assists with communication between educators and families who speak other languages." },
        { name: "Refugee Support Services", role: "Mental Health", collaboration: "Help educators support children who have experienced displacement or trauma." },
        { name: "Community Language Schools", role: "Linguistic Network", collaboration: "Support the maintenance and development of children’s home languages." }
      ],
      F: {
        websites: [
          { title: "Narragunnawali", purpose: "Guides centres in developing Reconciliation Action Plans.", empathy: "Supports authentic engagement with First Nations cultures." },
          { title: "SNAICC Resources", purpose: "Support understanding of culturally safe practices.", empathy: "Enhances empathy for Indigenous families." },
          { title: "Multicultural Centre for Women’s Health", purpose: "Provides insight into CALD family health.", empathy: "Holistically addresses wellbeing." },
          { title: "Reconciliation Australia", purpose: "Promotes respect for First Nations histories.", empathy: "Advances national reconciliation efforts." }
        ],
        books: [
          { title: "Welcome to Country – Aunty Joy Murphy", purpose: "Teaches the importance of welcoming traditions.", empathy: "Deepens foundational respect." },
          { title: "Whoever You Are – Mem Fox", purpose: "Celebrates diversity.", empathy: "Highlights our shared human experiences." },
          { title: "The Name Jar – Yangsook Choi", purpose: "Discusses cultural identity.", empathy: "Encourages empathy for immigrant experiences." },
          { title: "I’m Australian Too – Mem Fox", purpose: "Highlights multicultural identity.", empathy: "Validates all cultural backgrounds." }
        ],
        videos: [
          { title: "Little J & Big Cuz", purpose: "Offers authentic representation of First Nations culture.", empathy: "Normalizes Indigenous experiences." },
          { title: "Play School: Acknowledgement of Country", purpose: "Demonstrates embedding respect in routines.", empathy: "Creates a welcoming atmosphere." },
          { title: "Sesame Street: We’re Different, We’re the Same", purpose: "Introduces diversity and inclusion.", empathy: "Provides simple anti-bias foundations." },
          { title: "TED-Ed: The Danger of a Single Story", purpose: "Encourages critical thinking.", empathy: "Challenges stereotypes effectively." }
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
        definition: "This context focuses on the physical, emotional, nutritional, and psychological needs of children and their families. It includes complex and sensitive areas such as chronic illness, neurodivergence, parental mental health challenges, domestic violence, and trauma.",
        relevance: "According to Maslow’s Hierarchy of Needs, children cannot engage in learning unless their basic needs—particularly safety and wellbeing—are met. Educators are often in a key position to notice early signs of developmental delays or possible abuse, allowing for timely intervention.",
        theories: "Perry’s Neurosequential Model explains how trauma can disrupt brain development, making it harder for children to regulate emotions and behaviour.",
        australian: "In Australia, early childhood mental health is an increasing concern, with around one in seven children experiencing a mental health condition. Mandatory reporting laws also place clear legal responsibilities on educators to respond to any concerns about child safety."
      },
      B: {
        title: "Impact on Children and Families",
        points: [
          "Brain Development: Continuous exposure to stress, such as abuse or domestic violence, can increase cortisol levels, affecting memory, focus, and decision-making.",
          "Physical Health: Poor nutrition and unstable living conditions can contribute to health issues like asthma, obesity, and delayed physical development.",
          "Emotional and Behavioural Regulation: Trauma may show up as aggression, withdrawal, or distress, and can be misunderstood as “bad behaviour” instead of a response to unmet needs.",
          "Family Wellbeing: Families caring for children with chronic illnesses or neurodivergence often experience high levels of stress and fatigue, requiring empathy and support from educators."
        ]
      },
      C: {
        title: "Social Policy and Australian Responses",
        policies: [
          "Mandatory Reporting Legislation: Requires educators to report any reasonable suspicion of abuse or neglect to child protection services.",
          "National Quality Standard (NQS) Area 2 – Children’s Health and Safety: Establishes strict guidelines for hygiene, nutrition, sleep, and child protection.",
          "NDIS Early Childhood Approach: Provides funding and early intervention support for children under nine with developmental delays or disabilities."
        ],
        stats: "According to AIHW data (2021–22), approximately 178,000 children in Australia were involved with child protection services.",
        impact: "These policies highlight that health and safety are essential in ECEC, requiring strong documentation, clear medical procedures, and active advocacy for children."
      },
      D: [
        { title: "Trauma-Informed Approaches", desc: "Using “time-in” strategies.", example: "Educators stay with the child to support emotional regulation rather than isolating them." },
        { title: "Nutrition Support", desc: "Providing healthy meals or breakfast programs.", example: "Ensuring children’s basic needs are met without placing pressure on families." },
        { title: "Neurodiversity-Inclusive Environments", desc: "Creating calm, low-sensory spaces.", example: "Providing supports like weighted blankets and noise-cancelling headphones." },
        { title: "Medical Safety Practices", desc: "Clearly displaying asthma and anaphylaxis plans.", example: "Regularly practising emergency procedures to guarantee safety." },
        { title: "Supporting Families", desc: "Offering a private, safe space.", example: "Allowing parents a place where they can talk and receive emotional support." }
      ],
      E: [
        { name: "NDIS Early Childhood Partners", role: "Disability Support", collaboration: "Work with centres to assess children and create tailored support plans." },
        { name: "Maternal and Child Health Services", role: "Primary Health", collaboration: "Provide developmental checks and support for both children and parents." },
        { name: "1800RESPECT / Orange Door", role: "Domestic Violence Support", collaboration: "Offer confidential support for families experiencing domestic violence." },
        { name: "Dietitians Australia", role: "Nutritional Advice", collaboration: "Support centres in planning nutritionally balanced menus." },
        { name: "Child Protection Services", role: "Welfare Authorities", collaboration: "Assist educators in reporting concerns and ensuring child safety." }
      ],
      F: {
        websites: [
          { title: "Be You (Beyond Blue)", purpose: "Supports educators in promoting mental health.", empathy: "Empowers appropriate responses to challenges." },
          { title: "Kidsafe Australia", purpose: "Focuses on creating safe environments.", empathy: "Secures foundational physical safety." },
          { title: "1800RESPECT", purpose: "Provides information related to family violence.", empathy: "Offers crucial support and understanding." },
          { title: "Allergy & Anaphylaxis Australia", purpose: "Offers guidance on managing severe allergies.", empathy: "Reduces anxiety for affected families." }
        ],
        books: [
          { title: "The Huge Bag of Worries – V. Ironside", purpose: "Helps children express anxiety.", empathy: "Validates complex feelings." },
          { title: "Some Brains – Nelly Thomas", purpose: "Promotes understanding of neurodiversity.", empathy: "Breaks down stigmas around differences." },
          { title: "All Are Welcome – Alexandra Penfold", purpose: "Reinforces safety and inclusion.", empathy: "Creates a protective emotional environment." },
          { title: "How Are You Peeling? – Saxton Freymann", purpose: "Builds emotional vocabulary.", empathy: "Aids in emotional literacy and connection." }
        ],
        videos: [
          { title: "Bluey: Bumpy and the Wise Old Wolfhound", purpose: "Helps children understand illness.", empathy: "Demystifies hospitals and sickness." },
          { title: "Sesame Street (Trauma)", purpose: "Teaches coping and calming strategies.", empathy: "Maintains emotional stability." },
          { title: "ABC Kids (Handwashing)", purpose: "Encourages healthy hygiene habits.", empathy: "Promotes shared health practices." },
          { title: "TEDx: Trauma-Informed Care in Classrooms", purpose: "Supports professional learning.", empathy: "Reshapes understanding of distressed behavior." }
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
        definition: "This context looks at sudden events that disrupt entire communities, such as bushfires, floods, pandemics, war, or forced displacement. In these situations, early childhood centres often shift from being places of education to becoming important community hubs that provide stability, care, and practical support.",
        relevance: "For young children, maintaining a sense of trust and safety is critical, especially during uncertain times.",
        theories: "Theories like Erikson’s highlight how easily this sense of trust can be shaken, while resilience frameworks show how strong community systems can help reduce the impact of trauma.",
        australian: "In Australia, the increasing frequency of extreme events—like the Black Summer bushfires, major floods, and COVID-19—means educators need to be well-prepared to respond to crises."
      },
      B: {
        title: "Impact on Children and Families",
        points: [
          "Loss of Routine and Safety: Sudden disruptions can break a child’s sense of security, often leading to regression in behaviour, such as bedwetting or losing previously developed language skills.",
          "Material Loss: Families may lose homes and belongings, leaving them without basic necessities like food, clothing, or shelter.",
          "Shared Trauma: Disasters affect entire communities, including educators, which can make it more challenging to provide consistent care and support.",
          "Exposure to Distressing Information: Children can become overwhelmed by news reports and adult conversations, increasing feelings of fear and anxiety."
        ]
      },
      C: {
        title: "Social Policy and Australian Responses",
        policies: [
          "Emergency Management (NQS): Requires all early childhood centres to have clear, regularly practised evacuation and lockdown procedures.",
          "Disaster Recovery Funding Arrangements (DRFA): Government funding that helps rebuild services after disasters.",
          "Emerging Minds Frameworks: Provide guidance for supporting children’s mental health following traumatic events."
        ],
        stats: "After the 2019–2020 bushfires, more than 500 early learning services were located in affected areas.",
        impact: "ECEC centres are recognised as essential services, playing a key role in supporting families and maintaining community stability during and after emergencies."
      },
      D: [
        { title: "Re-establishing Routine", desc: "Bringing back familiar routines.", example: "Using visual schedules and mealtimes to help children feel safe again." },
        { title: "Play-Based Processing", desc: "Giving children opportunities to express and work through experiences.", example: "Using emergency-themed toys in a safe setting." },
        { title: "Limiting Media Exposure", desc: "Reducing children’s exposure to distressing news.", example: "Encouraging families to do the same at home." },
        { title: "Calm Emergency Drills", desc: "Turning drills into simple, non-threatening games.", example: "Preparing children without creating fear." },
        { title: "Providing Community Support", desc: "Setting up donation areas.", example: "Supporting families who have been affected directly from the centre." }
      ],
      E: [
        { name: "Australian Red Cross", role: "Disaster Relief", collaboration: "Provides emergency relief and psychological first aid training." },
        { name: "State Emergency Service (SES)", role: "First Responders", collaboration: "Supports safety planning and helps children become familiar with emergency responders." },
        { name: "Emerging Minds", role: "Mental Health Specialists", collaboration: "Offers specialised mental health support and resources after crises." },
        { name: "Local Government", role: "Infrastructure Planning", collaboration: "Assists with evacuation planning and safe reopening of centres." },
        { name: "Grief Counsellors", role: "Crisis Intervention", collaboration: "Support educators and families in processing trauma and loss." }
      ],
      F: {
        websites: [
          { title: "Emerging Minds Disaster Toolkit", purpose: "Offers strategies and scripts for emergencies.", empathy: "Provides emotional grounding tools." },
          { title: "Red Cross Pillowcase Project", purpose: "Helps children learn preparedness.", empathy: "Empowers a child-friendly approach." },
          { title: "ACECQA Emergency Management", purpose: "Supports compliance with safety requirements.", empathy: "Ensures systemic safety." },
          { title: "Birdie’s Tree (Children’s Health QLD)", purpose: "Provides specialised resources for disasters.", empathy: "Highly tailored trauma support." }
        ],
        books: [
          { title: "Birdie and the Fire", purpose: "Supports children in understanding bushfire experiences.", empathy: "Validates frightening experiences." },
          { title: "The Day the Lines Changed", purpose: "Explains pandemics and social distancing.", empathy: "Gently addresses invisible threats." },
          { title: "A Terrible Thing Happened – M. Holmes", purpose: "Helps children process trauma.", empathy: "Aids emotional articulation." },
          { title: "Flood – Jackie French", purpose: "Focuses on resilience and recovery.", empathy: "Highlights community rebuilding." }
        ],
        videos: [
          { title: "Sesame Street (Emergencies)", purpose: "Teaches safety and introduces helpers.", empathy: "Demystifies crises gently." },
          { title: "Birdie’s Tree Animations", purpose: "Provides calming, trauma-informed support.", empathy: "Reduces acute distress." },
          { title: "Mr. Rogers: Look for the Helpers", purpose: "Encourages focusing on people helping.", empathy: "Reframes disaster perspectives." },
          { title: "ABC Kids (First Responders)", purpose: "Helps children feel comfortable with emergency services.", empathy: "Reduces panic toward uniforms." }
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

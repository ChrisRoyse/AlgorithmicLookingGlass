

import { SlideContent, SlideType } from './types';

export const SLIDES: SlideContent[] = [
  {
    id: 1,
    type: SlideType.TITLE,
    title: "The Algorithmic Looking Glass",
    subtitle: "How Social Media Algorithms Impact Identity Exploration in Adolescents Ages 12-16",
    footer: "Chris Royse | Kansas State University | December 8, 2025",
    bullets: [
      "Master of Science in Mass Communications",
      "A.Q. Miller School of Media and Communication"
    ]
  },
  {
    id: 2,
    type: SlideType.SPLIT_IMAGE,
    title: "The Problem: Digital Identity",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", 
    bullets: [
      "95% of U.S. adolescents (13-17) have smartphone access.",
      "First generation developing identity in fully algorithmically-curated environments.",
      "Shift from chronological feeds to engagement-based recommendations.",
      "The 'Psychosocial Moratorium' (Erikson) is being narrowed by invisible filtering."
    ]
  },
  {
    id: 3,
    type: SlideType.BULLET,
    title: "The Gap: Filter Bubbles & Development",
    bullets: [
      "Algorithms shape what is seen, when it is seen, and what remains hidden.",
      "Filter Bubble Effect: Creates 'intellectual isolation' (Pariser, 2011).",
      "Current Gap: Research exists on political polarization, but NOT on adolescent identity formation.",
      "Key Issue: Does algorithmic filtering suppress the exploration necessary for healthy development?"
    ]
  },
  {
    id: 4,
    type: SlideType.THEORY_VISUAL,
    title: "Theoretical Framework: Foundations",
    subtitle: "Erikson (1968) & Marcia (1966)",
    bullets: [
      "Identity vs. Role Confusion (Ages 12-18).",
      "Four Identity Statuses based on Exploration & Commitment.",
      "The goal: Achievement (High Exploration + High Commitment).",
      "The risk: Foreclosure (High Commitment + Low Exploration)."
    ],
    visualVariant: 'SCATTER',
    visualData: [
      { name: 'Diffusion', x: 25, y: 25, value: 100, label: 'Low Exp / Low Com' },
      { name: 'Foreclosure', x: 25, y: 75, value: 100, label: 'Low Exp / High Com' },
      { name: 'Moratorium', x: 75, y: 25, value: 100, label: 'High Exp / Low Com' },
      { name: 'Achievement', x: 75, y: 75, value: 100, label: 'High Exp / High Com' },
    ]
  },
  {
    id: 5,
    type: SlideType.SPLIT_IMAGE,
    title: "New Construct: Algorithmic Foreclosure",
    image: "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    bullets: [
      "Extending Marcia's paradigm to the digital age.",
      "Definition: Premature identity commitment based on algorithmically-narrowed exposure.",
      "The Illusion: Adolescents perceive exploration, but experience invisible filtering.",
      "Result: A 'false' sense of identity achievement."
    ]
  },
  {
    id: 6,
    type: SlideType.SECTION_HEADER,
    title: "Research Questions",
    bullets: [
      "RQ1: How do algorithmic social media feeds impact identity exploration in adolescents ages 12-16?",
      "RQ2: Does adolescents' awareness of how algorithms function moderate the relationship between feed diversity and exploration?",
      "RQ3: Do adolescents in 2026 demonstrate different exploration patterns compared to pre-algorithm cohorts (CONAMORE, 2006-2011)?"
    ]
  },
  {
    id: 7,
    type: SlideType.BULLET,
    title: "Hypotheses",
    bullets: [
      "H1a & H1b: Higher perceived feed diversity will predict higher in-depth exploration and reconsideration.",
      "H1c: High 'Perceived Algorithmic Responsiveness' will weaken the positive effect of diversity.",
      "H2: High algorithmic awareness (meta-cognition) will strengthen the positive effect of diversity.",
      "H3: 2026 cohort will show higher Commitment but lower Reconsideration than 2006 baseline (Premature Consolidation)."
    ]
  },
  {
    id: 8,
    type: SlideType.SPLIT_IMAGE,
    title: "Methodology",
    image: "https://images.unsplash.com/photo-1556741533-974f8e62a92d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", 
    bullets: [
      "Design: Cross-sectional survey with historical cohort comparison.",
      "Sample: N=300-400 U.S. adolescents (Ages 12-16).",
      "Recruitment: School-based systems and community outreach.",
      "Ethics: Parental consent + Youth assent (IRB Expedited)."
    ]
  },
  {
    id: 9,
    type: SlideType.BULLET,
    title: "Measures",
    bullets: [
      "Identity: U-MICS (Utrecht-Management of Identity Commitments Scale) - 26 items.",
      "Algorithmic Feed Diversity Scale (AFDS): New 7-item scale measuring topical and ideological variety.",
      "Perceived Algorithmic Responsiveness Scale (PARS): New 6-item scale measuring belief that algorithms 'know' the user.",
      "Algorithmic Awareness Quiz: Objective knowledge of platform mechanisms."
    ]
  },
  {
    id: 10,
    type: SlideType.BULLET,
    title: "Expected Contributions",
    bullets: [
      "Theory: Establishes 'Algorithmic Foreclosure' as a 5th identity status.",
      "Developmental Psych: Tests measurement invariance across technological eras (2006 vs 2026).",
      "Practice: Evidenced-based policy recommendations for algorithmic transparency.",
      "Literacy: Interventions focusing on 'Developmental Appropriateness' of feed design."
    ]
  },
  {
    id: 11,
    type: SlideType.SECTION_HEADER,
    title: "World-Level Implications",
    subtitle: "What if the hypotheses hold true?",
    bullets: [
      "1. Validated Emergence of a Fifth Identity Status",
      "2. Erosion of the Psychosocial Moratorium",
      "3. The Responsiveness Trap & Brittle Identities",
      "4. Differential Impacts on Marginalized Groups",
      "5. A Mandate for Algorithmic Literacy"
    ]
  },
  {
    id: 12,
    type: SlideType.SPLIT_IMAGE,
    title: "The Fifth Status: Algorithmic Foreclosure",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    bullets: [
      "Conceptually distinct from traditional foreclosure: Invisible vs. Visible authority.",
      "Mechanism: Perception of comprehensive exploration + Actual narrowed exposure.",
      "Prediction: 'Brittle Identities' that appear achieved but collapse when filters are removed.",
      "Revises Identity Theory: Must now measure 'Exploration Awareness'."
    ]
  },
  {
    id: 13,
    type: SlideType.BULLET,
    title: "Erosion of the Moratorium",
    bullets: [
      "The 'Premature Certainty' Paradox: 2026 adolescents may show higher commitment with lower reconsideration.",
      "Acceleration: Identity 'achievement' reached 2-3 years earlier than pre-algorithm cohorts.",
      "The Feedback Loop: User preferences → Personalization → Identity Commitment → Narrower Preferences.",
      "Result: Efficient Stagnation. Adolescents settle into roles without genuine trial and error."
    ]
  },
  {
    id: 14,
    type: SlideType.SPLIT_IMAGE,
    title: "The Responsiveness Trap",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    bullets: [
      "If H1c holds: High 'Perceived Responsiveness' predicts WEAKER exploration.",
      "Yielding Agency: Adolescents trust the algorithm to 'know' them better than they know themselves.",
      "Engagement ≠ Development: Algorithms optimize for watch time, not healthy identity growth.",
      "The Doom Loop: Dopamine-driven validation replaces internal consolidation."
    ]
  },
  {
    id: 15,
    type: SlideType.BULLET,
    title: "Differential Impacts: Double Foreclosure",
    bullets: [
      "Intersection of Systemic Inequality and Algorithmic Filtering.",
      "Higher Exposure: Marginalized youth report higher social media usage intensity.",
      "Identity Gatekeeping: Algorithms may 'box in' users to stereotype-based niches.",
      "Equity Issue: Lack of algorithmic literacy access exacerbates the divide.",
      "Result: Structural suppression of identity exploration for vulnerable populations."
    ]
  },
  {
    id: 16,
    type: SlideType.SPLIT_IMAGE,
    title: "Mandate for Algorithmic Literacy",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    bullets: [
      "Hypothesis 2 is the 'Smoking Gun' for policy.",
      "If awareness strengthens exploration, education becomes a developmental intervention.",
      "Shift from Media Literacy (Source Credibility) to Algorithmic Literacy (Mechanism Awareness).",
      "Timing: Interventions must occur in Grades 5-6 (Ages 10-12), before peak adoption."
    ]
  },
  {
    id: 17,
    type: SlideType.BULLET,
    title: "Autonomy Under Siege: Raz's Framework",
    bullets: [
      "Joseph Raz's (1986) Conditions for Autonomy:",
      "1. Rational Deliberation: Bypassed by 'Hyper-Nudges' and passive consumption.",
      "2. Adequate Range of Options: Violated by Filter Bubbles (The 'Man in the Pit').",
      "3. Independence from Manipulation: Undermined by profit-driven optimization.",
      "Conclusion: Algorithmic environments systematically violate the conditions for autonomous selfhood."
    ]
  },
  {
    id: 18,
    type: SlideType.THEORY_VISUAL,
    title: "Phenomenology of Brittle Identities",
    visualVariant: 'CYCLE',
    visualData: [
      { label: "Performance", desc: "Post Content" },
      { label: "Validation", desc: "Likes & Views" },
      { label: "Dopamine", desc: "Neuro-Reward" },
      { label: "Craving", desc: "Need for More" },
      { label: "Optimization", desc: "Modify Identity" }
    ],
    bullets: [
      "Context Collapse: Flattening of multiple audiences creates a 'lowest common denominator' self.",
      "The Doom Loop: Dopamine-driven validation loops replace internal identity consolidation.",
      "Split Self: Gap between digital projections and authentic selves creates inauthenticity.",
      "Result: Identities dependent on continuous algorithmic reinforcement that fracture when validation stops."
    ]
  },
  {
    id: 19,
    type: SlideType.SECTION_HEADER,
    title: "Somatic Markers of Disruption",
    subtitle: "From Psychological Theory to Embodied Reality",
    bullets: [
      "1. Filter Face",
      "2. Main Character Syndrome",
      "3. TikTok Voice & Algo-Speak",
      "4. The iPad Kid Fidget",
      "5. Tech Neck Turtling",
      "6. Bed Rotting & Digital Anhedonia"
    ]
  },
  {
    id: 20,
    type: SlideType.SPLIT_IMAGE,
    title: "The Face of the Algorithm",
    image: "https://images.unsplash.com/photo-1616091093747-4d80d2252479?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    bullets: [
      "Filter Face: 80% of girls use beauty filters by age 13 (ASPS, 2024).",
      "Mechanism: Visual Habituation. The filtered self becomes the perceptual baseline.",
      "Result: Premature aesthetic foreclosure before physical development is complete."
    ]
  },
  {
    id: 21,
    type: SlideType.BULLET,
    title: "Embodied & Linguistic Colonization",
    bullets: [
      "TikTok Voice: Vocal fry, uptalk, and rapid delivery optimized for engagement algorithms.",
      "Algo-Speak: Language colonized by censorship evasion (e.g., 'unalive' for suicide).",
      "Tech Neck Turtling: A defensive posture of the 'Responsiveness Trap'—curling around the device.",
      "iPad Kid Fidget: Withdrawal symptoms from variable ratio reinforcement schedules."
    ]
  },
  {
    id: 22,
    type: SlideType.SPLIT_IMAGE,
    title: "Motivational Erosion: Bed Rotting",
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    bullets: [
      "24% of Gen Z actively practice 'Bed Rotting' (AASM, 2024).",
      "Digital Anhedonia: Selective blunting of reward responses to real-world stimuli.",
      "Moratorium Compression: Exploration shrinks to a screen-sized space requiring minimal energy.",
      "The body conserves energy while the algorithm provides all cognitive stimulation."
    ]
  },
  {
    id: 23,
    type: SlideType.BULLET,
    title: "Evidence-Based Policy Recommendations",
    bullets: [
      "Right to Reset: Allow adolescents to wipe algorithmic history and start fresh.",
      "Diversification by Default: Mandate 'serendipity' quotas for users under 18.",
      "Transparency Disclosures: Clearly label 'Recommended for You' vs. Chronological content.",
      "Active Design: Push for creation-based features over passive scrolling loops."
    ]
  },
  {
    id: 24,
    type: SlideType.BULLET,
    title: "A Four-Pillar Policy Framework",
    bullets: [
      "1. Transparency & Rights: 'Right to Reset' history & 'Serendipity Quotas' to break filter bubbles.",
      "2. Platform Design: Mandate active creation over passive scroll; ban variable reward schedules.",
      "3. Critical Literacy: K-12 curriculum focusing on algorithmic awareness, not just source credibility.",
      "4. Accountability: Required algorithmic bias audits and developmental impact assessments."
    ]
  },
  {
    id: 25,
    type: SlideType.SPLIT_IMAGE,
    title: "Closing Vision: Reclaiming Agency",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    bullets: [
      "The Algorithmic Looking Glass reflects a distorted reality.",
      "Goal: Move from 'Efficient Stagnation' to 'Democratic Capacity'.",
      "The Moratorium can be reclaimed through design, policy, and literacy.",
      "Future Research: Longitudinal tracking and experimental literacy interventions."
    ]
  },
  {
    id: 26,
    type: SlideType.TITLE,
    title: "Thank You",
    subtitle: "Questions & Discussion",
    footer: "Chris Royse | Thesis Committee Chair: Dr. Jacob Groshek",
    bullets: []
  }
];
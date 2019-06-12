export interface IValueFilterGroup {
  name: string;
  color: string;
  filters: IFilter[];
}

export interface IFilter {
  name: string;
  description: string;
  id: string;
}

export type IValueFilters = IValueFilterGroup[]

export const valueFilters: IValueFilters = [{
  name: 'team values',
  color: 'red',
  filters: [
    {
      name: 'ENGAGES WITH COMMUNITY',
      description: '',
      id: 'engages_with_community'
    }, {
      name: 'TEAM IS DIVERSE',
      description: 'Members of your team are diverse in gender, race, age, or professional background.',
      id: 'team_is_diverse'
    }, {
      name: 'IMPRESSIVE TEAM MEMBERS',
      description: '',
      id: 'impressive_team_members'
    }, {
      name: 'BONDED BY LOVE FOR PRODUCT',
      description: '',
      id: 'bonded_by_love_for_product'
    }, {
      name: 'CREATIVE + INNOVATIVE',
      description: '',
      id: 'creative_innovative'
    }, {
      name: 'CROSS-DEPARTMENT COLLABORATION',
      description: 'Engineers work directly alongside peers from other departments',
      id: 'cross_department_collaboration'
    }, {
      name: 'OPEN COMMUNICATION',
      description: '',
      id: 'open_communication'
    }, {
      name: 'EQ > IQ',
      description: "An individual's emotional quotient (ability to identify, evaluate, control, and express emotions) is of greater importance than their intelligence quotient (IQ).",
      id: 'eq_iq'
    }, {
      name: 'FLAT ORGANIZATION',
      description: 'The company is structured with few or no levels of middle management between employees and executives.',
      id: 'flat_organization'
    }, {
      name: 'RISK-TAKING > STABILITY',
      description: '',
      id: 'risk_taking_stability'
    }, {
      name: 'WEARS MANY HATS',
      description: 'Engineers have a broad set of responsibilities and can take on additional roles in addition to writing and pushing code.',
      id: 'wears_many_hats'
    }, {
      name: 'HEAVILY TEAM ORIENTED',
      description: '',
      id: 'heavily_team_oriented'
    },
  ]
},
{
  name: 'personal health',
  color: 'green',
  filters: [
    {
      name: 'ACTIVELY PRACTICES INCLUSION',
      description: 'Executives and managers are committed to building a diverse, equal, and inclusive workplace. From recruiting to training and advancement, the emphasis is on providing a supportive environment for all individuals, regardless of sexual orientation, gender, race, religion, disability, or ethnicity.',
      id: 'actively_practices_inclusion'
    }, {
      name: 'WORK/LIFE BALANCE',
      description: 'Engineers have the flexibility, freedom, and support to achieve fulfillment and enjoyment in both their personal and professional lives',
      id: 'work_life_balance'
    }, {
      name: 'COMMITTED TO PERSONAL GROWTH',
      description: '',
      id: 'commited_to_personal_growth'
    }, {
      name: 'IDEAL FOR PARENTS',
      description: 'Working parents are supported by coworkers and the company, which can be demonstrated through flexible hours, generous paid family leave, childcare benefits, and/or a lactation room at the office',
      id: 'ideal_for_parents'
    }, {
      name: 'SAFE ENVIRONMENT TO FAIL',
      description: 'Team members hold, socialize, and apply the attitude that it is the idea or its execution that falls short of expectations, not those associated with it',
      id: 'safe_environment_to_fail'
    }, {
      name: 'SUPPORTS PHYSICAL WELLNESS',
      description: 'The team promotes physical activity and/or nutritional eating habits for its members making it easy for engineers to invest in their own health.',
      id: 'supports_physical_wellness'
    }, {
      name: 'FOSTERS PSYCHOLOGICAL SAFETY',
      description: 'Team members feel comfortable expressing conflicting opinions and taking risks, without fear of negative consequences of self-image, status, or career.',
      id: 'fosters_psychological_safty'
    }
  ]
}, //   Daily routines, engineering, career growth, strategy, company properties
]
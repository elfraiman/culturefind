interface IValueFilterGroup {
  name: string;
  color: string;
  filters: IFilter[];
}

interface IFilter {
  name: string;
  description: string;
}

type IValueFilters = IValueFilterGroup[]

export const valueFilters: IValueFilters = [{
  name: 'team values',
  color: 'red',
  filters: [
    {
      name: 'ENGAGES WITH COMMUNITY',
      description: ''
    }, {
      name: 'TEAM IS DIVERSE',
      description: 'Members of your team are diverse in gender, race, age, or professional background.'
    }, {
      name: 'IMPRESSIVE TEAM MEMBERS',
      description: ''
    }, {
      name: 'BONDED BY LOVE FOR PRODUCT',
      description: ''
    }, {
      name: 'CREATIVE + INNOVATIVE',
      description: '',
    }, {
      name: 'CROSS-DEPARTMENT COLLABORATION',
      description: 'Engineers work directly alongside peers from other departments'
    }, {
      name: 'OPEN COMMUNICATION',
      description: ''
    }, {
      name: 'EQ > IQ',
      description: "An individual's emotional quotient (ability to identify, evaluate, control, and express emotions) is of greater importance than their intelligence quotient (IQ)."
    }, {
      name: 'FLAT ORGANIZATION',
      description: 'The company is structured with few or no levels of middle management between employees and executives.'
    }, {
      name: 'RISK-TAKING > STABILITY',
      description: ''
    }, {
      name: 'WEARS MANY HATS',
      description: 'Engineers have a broad set of responsibilities and can take on additional roles in addition to writing and pushing code.'
    }, {
      name: 'HEAVILY TEAM ORIENTED',
      description: ''
    },
  ]
},
{
  name: 'personal health',
  color: 'green',
  filters: [
    {
      name: 'ACTIVELY PRACTICES INCLUSION',
      description: 'Executives and managers are committed to building a diverse, equal, and inclusive workplace. From recruiting to training and advancement, the emphasis is on providing a supportive environment for all individuals, regardless of sexual orientation, gender, race, religion, disability, or ethnicity.'
    }, {
      name: 'WORK/LIFE BALANCE',
      description: 'Engineers have the flexibility, freedom, and support to achieve fulfillment and enjoyment in both their personal and professional lives'
    }, {
      name: 'COMMITTED TO PERSONAL GROWTH',
      description: ''
    }, {
      name: 'IDEAL FOR PARENTS',
      description: 'Working parents are supported by coworkers and the company, which can be demonstrated through flexible hours, generous paid family leave, childcare benefits, and/or a lactation room at the office'
    }, {
      name: 'SAFE ENVIRONMENT TO FAIL',
      description: 'Team members hold, socialize, and apply the attitude that it is the idea or its execution that falls short of expectations, not those associated with it'
    }, {
      name: 'SUPPORTS PHYSICAL WELLNESS',
      description: 'The team promotes physical activity and/or nutritional eating habits for its members making it easy for engineers to invest in their own health.'
    }, {
      name: 'FOSTERS PSYCHOLOGICAL SAFETY',
      description: 'Team members feel comfortable expressing conflicting opinions and taking risks, without fear of negative consequences of self-image, status, or career.'
    }
  ]
}, //   Daily routines, engineering, career growth, strategy, company properties
]
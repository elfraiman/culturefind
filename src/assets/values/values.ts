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

export type IValueFilters = IValueFilterGroup[];

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
},
{
  name: 'daily routines',
  color: 'light blue',
  filters: [
    {
      name: 'EATS LUNCH TOGETHER',
      description: '',
      id: 'eats_lunch_together'
    },
    {
      name: 'FLEXIBLE WORK ARRANGEMENTS',
      description: 'The team uses an alternate to the traditional in-person, 9am to 5pm, 40-hour work week. Engineers have flexibility in their work hours and/or locations.',
      id: 'flexible_work_arrangements'
    },
    {
      name: 'LIGHT MEETINGS',
      description: 'Engineers are expected to attend very few meetings each week in recognition that their productivity requires long, uninterrupted time blocks.',
      id: 'light_meetings'
    },
    {
      name: 'FRIENDS OUTSIDE OF WORK',
      description: '',
      id: 'friends_outside_work'
    },
  ]
},
{
  name: 'engineering',
  color: 'green',
  filters: [
    {
      name: 'HIGH QUALITY CODE BASE',
      description: '',
      id: 'high_quality_codebase'
    },
    {
      name: 'PAIR PROGRAMS',
      description: 'Members commonly program in pairs.',
      id: 'pair_programs'
    },
    {
      name: 'OPEN SOURCE CONTRIBUTOR',
      description: '',
      id: 'open_source_contributor'
    },
    {
      name: 'START TO FINISH OWNERSHIP',
      description: '',
      id: 'start_to_finish_ownership'
    },
    {
      name: 'USES AGILE',
      description: '',
      id: 'uses_agile'
    },
    {
      name: 'CUTTING-EDGE TECHNOLOGIES',
      description: 'Company that uses up to date tech stack and always looking for the next big thing',
      id: 'cutting_edge_tech'
    },
    {
      name: 'FAST PACED ENVIRONMENT',
      description: 'A work environment that is best suited for engineers who want to learn a broad set of skills in a short period of time, enjoy working under a deadline, and/or are energized by changing requirements and technological challenges.',
      id: 'fast_paced_environment'
    },
    {
      name: 'CONTINUOUS DELIVERY',
      description: '',
      id: 'continous_delivery'
    }
  ]
},
{
  name: 'career growth',
  color: 'magenta',
  filters: [
    {
      name: 'PROMOTES FROM WITHIN',
      description: 'The company considers current employees for promotion opportunities before hiring candidates from outside of the organization.',
      id: 'promotes_from_within'
    },
    {
      name: 'INTERNAL MOBILITY',
      description: 'Opportunities for multi-directional career transitions.',
      id: 'internal_mobility'
    },
    {
      name: 'GOOD FOR JUNIOR DEVS',
      description: 'Junior developers with <1 year of experience are encouraged to apply and can expect mentorship.',
      id: 'good_for_juniors'
    },
    {
      name: 'HAS INTERNSHIP PROGRAM',
      description: '',
      id: 'has_internship_program'
    },
    {
      name: 'HIGH EMPLOYEE RETENTION',
      description: '',
      id: 'high_employee_retention'
    }
  ]
},
{
  name: 'strategy',
  color: 'purple',
  filters: [
    {
      name: 'CUSTOMER COMES FIRST',
      description: '',
      id: 'customer_comes_first'
    },
    {
      name: 'ENGINEERING-DRIVEN',
      description: '',
      id: 'engineering_driven'
    },
    {
      name: 'PRODUCT-DRIVEN',
      description: '',
      id: 'product_driven'
    },
    {
      name: 'DESIGN-DRIVEN',
      description: '',
      id: 'design_driven'
    },
    {
      name: 'DATA-DRIVEN',
      description: '',
      id: 'data_driven'
    },
    {
      name: 'RAPIDLY GROWING TEAM',
      description: '',
      id: 'rapidly_growing_team'
    }
  ]
},
{
  name: 'company properties',
  color: 'indigo',
  filters: [
    {
      name: 'B2B',
      description: 'Business-to-business.',
      id: 'b2b'
    },
    {
      name: 'B2C',
      description: 'Business-to-consumer.',
      id: 'b2c'
    },
    {
      name: 'SELF-FUNDED',
      description: 'The company is bootstrapped and relies on profits rather than outside investments to finance their operations.',
      id: 'self_funded'
    },
    {
      name: 'TECHNICAL FOUNDER(S)',
      description: 'At least one founder had a background in software engineering.',
      id: 'techincal_founders'
    },
    {
      name: 'REMOTE-OK',
      description: 'Team is either entirely remote or open to hiring remote engineers.',
      id: 'remote_ok'
    }
  ]
} //   Daily routines, engineering, career growth, strategy, company properties
]
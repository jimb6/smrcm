import {Content} from "../../models/Content";

let contentsData: Content[] = [
  {
    id: 1,
    title: 'Pag-andam sa Uma',
    subtitle: 'Land preparation',
    highlight: '',
    url: '/pages/land-preparation',
    fragment: ''
  },
  {
    id: 2,
    title: 'Patag nga basakan',
    subtitle: 'Land preparation',
    highlight: 'Ang maayo pagkapatag nga basakan gikinahanglan alang sa maayong pagtubo sa tanum ug pagdumala niini.\n' +
      '        Makatabang kini sa mga musnod',
    url: '/pages/land-preparation',
    fragment: '#patag'
  },
  {
    id: 3,
    title: 'Assessment of Key Check',
    subtitle: 'Walay taas o ubos nga parte human sa katapusang pagpatag:',
    highlight: 'Walay bahin nga mas lalom pa sa 5 sentimetro(sm) nga tubig (usa ka kumagko sa kamot)\n' +
      'gamay ra ang sagbot\n' +
      'sayon nga pagduamala sa mga kohol\n' +
      'episyente nga paggamit sa nutrina\n' +
      'pareho o dungan ang pagtubo ug pagkagulang sa tanum\n' +
      'episytente nga paggamit sa makinarya sa pagpanguma',
    url: '/pages/land-preparation',
    fragment: '#assessment'
  },
];

export default contentsData;

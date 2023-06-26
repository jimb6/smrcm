import {Content} from "../../models/Content";

let contentsData: Content[] = [
  {
    id: 1,
    title: 'Pag-andam sa Uma',
    subtitle: 'Land preparation',
    highlight: 'Land preparation',
    url: '/pages/land-preparation',
    fragment: 'index'
  },
  {
    id: 2,
    title: 'Patag nga basakan',
    subtitle: 'Land preparation',
    highlight: 'Ang maayo pagkapatag nga basakan gikinahanglan alang sa maayong pagtubo sa tanum ug pagdumala niini.\n' +
      '        Makatabang kini sa mga musnod',
    url: '/pages/land-preparation',
    fragment: 'patag'
  },
  {
    id: 3,
    title: 'Assessment of Key Check',
    subtitle: 'Pag-andam sa Uma. Walay taas o ubos nga parte human sa katapusang pagpatag:',
    highlight: 'Walay bahin nga mas lalom pa sa 5 sentimetro(sm) nga tubig (usa ka kumagko sa kamot)\n' +
      'gamay ra ang sagbot\n' +
      'sayon nga pagduamala sa mga kohol\n' +
      'episyente nga paggamit sa nutrina\n' +
      'pareho o dungan ang pagtubo ug pagkagulang sa tanum\n' +
      'episytente nga paggamit sa makinarya sa pagpanguma',
    url: '/pages/land-preparation',
    fragment: 'assessment'
  },
  {
    id: 4,
    title: ' Pagdumala sa Nutrina',
    subtitle: 'Use of Fertilizer',
    highlight: 'Supisyente nga nutrina gikan sa tillering hangtod sa early panicle initiation (EPI) ug pagpamulak, Ang pagbutang ug mga nutrina sama sa abono maoy mapuno sa kal-ang tali sa kung unsa ang gikinahanglan\n' +
      '        sa tanum ug kung unsa ang anaa sa yuta, tubig ug hangin sa pagkakaron. Supisyente nga nutrina gikan sa pgasaha ngadto sa sayo nga pagbuswak ug pagpamulak masiguro ang\n' +
      '        maayong tubo ug pareho ang pagdebelop sa uhay sa tanum. Masiguro usab niini nga makuha ang potensyal nga abot sa tanum. Kung ang nutrina dili supisytente atol niining panahona, mamahimong hinay ang pagtubo, mas gamay ang saha ug uhay,\n' +
      '        mas gamay ra ang liso, ug mas gaan ang lugas. Kung manghinobra ang nutrina mahimo usab kini nga hinungdan sa\n' +
      '        kadaot tungod sa peste, paghapla, ug polusyon sa yuta.',
    url: '/pages/fertilizer',
    fragment: 'pagdumalasanutrina'
  },
  {
    id: 5,
    title: 'Assessment of Key Check',
    subtitle: 'Pagdumala sa Nutrina',
    highlight: 'Walay sintomas sa kakulang sa nutrina o toxicity gikan sa pagsaka ngadto sa sayo nga pagbuswak (EPI) ug pagpamulak. Makab-ot ang dili momenus sa 300 ka uhay/m? (kung gitanum)\n' +
      '            (300 panicles/m? (TPR) o 350 ka uhay/m? direct wet-seeded rice (DWSR) at dough stage.',
    url: '/pages/fertilizer',
    fragment: 'assessment'
  }
];

export default contentsData;

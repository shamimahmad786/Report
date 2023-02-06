import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

export class PdfGeneration {

  universalAgGridColumnDefs: any;
  reportCode: any;
  jsonColumnName: any;
  gridColumnApi: any;
  agChange: any;
  pdfRowData: any;
  rowData: any;
  gridApi: any;
  finalJSONNew: any;
  uniHeader: any;
  uniYear: any;
  uniState: any;
  uniDist: any;
  uniBlock: any;
  thableNote: any;
  reportDate: any;
  reportDescription: any;
  reportDescriptionName: any;

  pdfGenrator(test: any, universalAgGridColumnDefs, rc, jcn, gca, ac, prd, rd, ga, fjn, uh, uy, us, ud, ub, tan, rdate) {

    this.universalAgGridColumnDefs = universalAgGridColumnDefs;
    this.reportCode = rc;
    this.jsonColumnName = jcn;
    this.gridColumnApi = gca;
    this.agChange = ac;
    this.pdfRowData = prd;
    this.rowData = rd;
    this.gridApi = ga;
    this.finalJSONNew = fjn;
    this.uniHeader = uh;
    this.uniYear = uy;
    this.uniState = us;
    this.uniDist = ud;
    this.uniBlock = ub;
    this.thableNote = tan;
    this.reportDate = rdate;

    if (this.reportCode == 'R146' || this.reportCode == 'R100' || this.reportCode == 'R107' || this.reportCode == 'R106' || this.reportCode == 'R105' || this.reportCode == 'R99' || this.reportCode == 'R141' || this.reportCode == 'R124' || this.reportCode == 'R123' || this.reportCode == 'R137' || this.reportCode == 'R101' || this.reportCode == 'R48' || this.reportCode == 'R97' || this.reportCode == 'R113' || this.reportCode == 'R43' || this.reportCode == 'R96' || this.reportCode == 'R95' || this.reportCode == 'R98') {
      var doc = new jsPDF('l', 'mm', 'a0');
    } else if (this.reportCode == 'R143' || this.reportCode == 'R147') {
      var doc = new jsPDF('l', 'mm', [1000, 3000]);
    } else {
      var doc = new jsPDF('l', 'mm', [297, 210]);
    }


    var reportnumber = test.toString();


    var col = [];
    var col1 = [];
    var columnKey = [];
    var temps = [];
    this.jsonColumnName = "";


    var headMain;

    let head101 = [
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Primary (I-V)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Upper Primary (VI-VIII)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Elementary (I-VIII)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Secondary (IX-X )', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Higher Secondary (XI-XII)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'SC Primary (I-V)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'SC Upper Primary (VI-VIII)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'SC Elementary (I-VIII)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'SC Secondary (IX-X )', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'SC Higher Secondary (XI-XII)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'ST Primary (I-V)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'ST Upper Primary (VI-VIII)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'ST Elementary (I-VIII)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'ST Secondary (IX-X )', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'ST Higher Secondary (XI-XII)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } }
      ],
      col,
    ];

    let head1011 = [
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Primary (I-V)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Upper Primary (VI-VIII)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Elementary (I-VIII)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Secondary (IX-X )', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Higher Secondary (XI-XII)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } }
      ],
      col,
    ];

    let head104 = [
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Age 6-10 years', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Age 11-13 years', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Age 6-13 years', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Age 14-15 years', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Age 16-17 years', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } }
      ],
      col,
    ];

    let head116 = [
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repetition Rate Primary (I-V)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repetition Rate Upper Primary (VI-VIII)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repetition Rate Secondary (IX-X)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } }
      ],
      col,
    ];

    let head115 = [
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Promotion Rate Primary (I-V)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Promotion Rate Upper Primary (VI-VIII)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Promotion Rate Secondary (IX-X)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } }
      ],
      col,
    ];

    let head117 = [
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Dropout Rate Primary (I-V)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Dropout Rate Upper Primary (VI-VIII)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Dropout Rate Secondary (IX-X) ', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } }
      ],
      col,
    ];
    let head119 = [
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Transition Rate', colSpan: 9, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      ],
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Primary to Upper Primary (5 to 6)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Elementary to Secondary (8 to 9)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Secondary to Higher Secondary (10 to 11)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } }
      ],
      col,
    ];
    let head123 = [
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Pre Primary Enrolment', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-I', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-II', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-III', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-IV', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-V', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-VI', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-VII', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-VIII', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-IX', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-X', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-XI', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-XII', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Total Without Pre-Primary', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Total With Pre-Primary', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      ],
      col,
    ];

    let head96 = [
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Pre Primary Enrolment', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-I', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-II', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-III', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-IV', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-V', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-VI', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-VII', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-VIII', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-IX', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-X', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-XI', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-XII', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Total Without Pre-Primary', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Total With Pre-Primary', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      ],
      col,
    ];


    let head125 = [
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Retention Rate', colSpan: 12, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      ],
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Primary (1 to 5)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Elementary (1 to 8)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Secondary (1 to 10)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Higher Secondary (1 to 12)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      ],
      col,
    ];

    let head135 = [
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-I', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-II', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-III', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-IV', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-V', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-VI', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-VII', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-VIII', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-IX', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-X', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-XI', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-XII', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      ],
      col,
    ];

    let head137 = [
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Primary', colSpan: 24, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Upper Primary', colSpan: 24, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Secondary', colSpan: 24, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      ],
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },

        { content: 'Enrolment II to VI', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater II to VI', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Fresh Enrolment', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater I to V', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Enrolment Previous Year I-V', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Promotion Rate', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repetition Rate', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Drop Out Rate', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },


        { content: 'Enrolment VII to IX', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater VII to IX ', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Fresh Enrolment', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater VI to VIII', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Enrolment Previous Year VI-VII', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Promotion Rate', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repetition Rate', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Drop Out Rate', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },


        { content: 'Enrolment X to XI', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater X to XI ', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Fresh Enrolment X to XI', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater IX to X', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Enrolment Previous Year IX-X', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Promotion Rate', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repetition Rate', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Drop Out Rate', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },

      ],
      col,
    ];

    let head138 = [
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Promotion Rate Primary (I-V)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Promotion Rate Upper Primary (VI-VIII)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Promotion Rate Secondary (IX-X)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      ],
      col,
    ];

    let head136 = [
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class -I', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class -II', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class -III', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class -IV', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class -V', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class -VI', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class -VII', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class -VIII', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class -IX', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class -X', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class -XI', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class -XII', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      ],
      col,
    ];

    let head139 = [
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repetition Rate Primary (I-V)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repetition Rate Upper Primary (VI-VIII)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repetition Rate Secondary (IX-X)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      ],
      col,
    ];


    let head140 = [
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Drop Out Rate Primary (I-V)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Drop Out Rate Upper Primary (VI-VIII)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Drop Out Rate Secondary (IX-X)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      ],
      col,
    ];

    let head143 = [
      // [
      //   { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      //   { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      //   { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      //   { content: 'Primary', colSpan: 80, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      //   { content: 'Upper Primary', colSpan: 48, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      //   { content: 'Secondary', colSpan: 32, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      //   { content: 'Higher Secondary', colSpan: 16, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      // ],
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },

        { content: 'Enrolment Class II', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater Class II', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Fresh Enrolment Class II', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater Class I', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Enrolment Previous Year I', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Prmotion Rate - I', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repetition Rate - I', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Dropout Rate - I', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },

        { content: 'Enrolment Class III', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater Class III', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Fresh Enrolment Class III', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater Class II', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Enrolment Previous Year II', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Prmotion Rate - II', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repetition Rate - II', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Dropout Rate - II', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },

        { content: 'Enrolment Class IV', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater Class IV', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Fresh Enrolment Class IV', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater Class III', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Enrolment Previous Year III', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Prmotion Rate - III', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repetition Rate - III', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Dropout Rate - III', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },

        { content: 'Enrolment Class V', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater Class V', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Fresh Enrolment Class V', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater Class IV', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Enrolment Previous Year IV', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Prmotion Rate - IV', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repetition Rate - IV', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Dropout Rate - IV', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },

        { content: 'Enrolment Class VI', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater Class VI', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Fresh Enrolment Class VI', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater Class V', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Enrolment Previous Year V', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Prmotion Rate - V', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repetition Rate - V', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Dropout Rate - V', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },

        { content: 'Enrolment Class VII', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater Class VII', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Fresh Enrolment Class VII', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater Class VI', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Enrolment Previous Year VI', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Prmotion Rate - VI', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repetition Rate - VI', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Dropout Rate - VI', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },

        { content: 'Enrolment Class VIII', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater Class VIII', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Fresh Enrolment Class VIII', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater Class VII', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Enrolment Previous Year II', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Prmotion Rate - VII', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repetition Rate - VII', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Dropout Rate - VII', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },

        { content: 'Enrolment Class IX', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater Class IX', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Fresh Enrolment Class IX', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater Class VIII', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Enrolment Previous Year VIII', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Prmotion Rate - VIII', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repetition Rate - VIII', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Dropout Rate - VIII', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },

        { content: 'Enrolment Class X', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater Class X', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Fresh Enrolment Class X', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater Class IX', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Enrolment Previous Year IX', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Prmotion Rate - IX', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repetition Rate - IX', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Dropout Rate - IX', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },

        { content: 'Enrolment Class XI', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater Class XI', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Fresh Enrolment Class XI', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater Class X', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Enrolment Previous Year X', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Prmotion Rate - X', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repetition Rate - X', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Dropout Rate - X', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },

        { content: 'Enrolment Class XII', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater Class XII', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Fresh Enrolment Class XII', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater Class XI', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Enrolment Previous Year XI', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Prmotion Rate - XI', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repetition Rate - XI', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Dropout Rate - XI', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      ],

      col,
    ]

    let head1431 = [
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },

        { content: 'Enrolment Class II', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater Class II', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Fresh Enrolment Class II', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater Class I', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Enrolment Previous Year I', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Prmotion Rate - I', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repetition Rate - I', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Dropout Rate - I', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },

        { content: 'Enrolment Class III', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater Class III', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Fresh Enrolment Class III', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater Class II', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Enrolment Previous Year II', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Prmotion Rate - II', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repetition Rate - II', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Dropout Rate - II', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },

        { content: 'Enrolment Class IV', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater Class IV', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Fresh Enrolment Class IV', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater Class III', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Enrolment Previous Year III', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Prmotion Rate - III', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repetition Rate - III', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Dropout Rate - III', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },

        { content: 'Enrolment Class V', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater Class V', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Fresh Enrolment Class V', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater Class IV', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Enrolment Previous Year IV', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Prmotion Rate - IV', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repetition Rate - IV', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Dropout Rate - IV', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },

        { content: 'Enrolment Class VI', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater Class VI', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Fresh Enrolment Class VI', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater Class V', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Enrolment Previous Year V', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Prmotion Rate - V', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repetition Rate - V', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Dropout Rate - V', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },

        { content: 'Enrolment Class VII', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater Class VII', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Fresh Enrolment Class VII', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater Class VI', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Enrolment Previous Year VI', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Prmotion Rate - VI', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repetition Rate - VI', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Dropout Rate - VI', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },

        { content: 'Enrolment Class VIII', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater Class VIII', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Fresh Enrolment Class VIII', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater Class VII', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Enrolment Previous Year II', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Prmotion Rate - VII', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repetition Rate - VII', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Dropout Rate - VII', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },

        { content: 'Enrolment Class IX', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater Class IX', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Fresh Enrolment Class IX', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater Class VIII', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Enrolment Previous Year VIII', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Prmotion Rate - VIII', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repetition Rate - VIII', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Dropout Rate - VIII', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },

        { content: 'Enrolment Class X', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater Class X', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Fresh Enrolment Class X', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater Class IX', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Enrolment Previous Year IX', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Prmotion Rate - IX', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repetition Rate - IX', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Dropout Rate - IX', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },

        { content: 'Enrolment Class XI', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater Class XI', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Fresh Enrolment Class XI', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater Class X', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Enrolment Previous Year X', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Prmotion Rate - X', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repetition Rate - X', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Dropout Rate - X', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },

        { content: 'Enrolment Class XII', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater Class XII', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Fresh Enrolment Class XII', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater Class XI', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Enrolment Previous Year XI', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Prmotion Rate - XI', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repetition Rate - XI', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Dropout Rate - XI', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      ],

      col,
    ]

    let head144 = [
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Primary', colSpan: 10, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Upper Primary', colSpan: 6, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Secondary', colSpan: 4, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Higher Secondary', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      ],
      [{ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: 'Prmotion Rate - I', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: 'Prmotion Rate - II', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: 'Prmotion Rate - III', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: 'Prmotion Rate - IV', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: 'Prmotion Rate - V', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: 'Prmotion Rate - VI', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: 'Prmotion Rate - VII', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: 'Prmotion Rate - VIII', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: 'Prmotion Rate - IX', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: 'Prmotion Rate - X', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: 'Prmotion Rate - XI', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      ],

      col,
    ]

    let head148 = [
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Primary', colSpan: 10, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Upper Primary', colSpan: 6, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Secondary', colSpan: 4, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Higher Secondary', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      ],
      [{ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: 'Prmotion Rate - I', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: 'Prmotion Rate - II', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: 'Prmotion Rate - III', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: 'Prmotion Rate - IV', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: 'Prmotion Rate - V', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: 'Prmotion Rate - VI', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: 'Prmotion Rate - VII', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: 'Prmotion Rate - VIII', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: 'Prmotion Rate - IX', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: 'Prmotion Rate - X', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: 'Prmotion Rate - XI', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      ],

      col,
    ]

    let head145 = [
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Primary', colSpan: 10, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Upper Primary', colSpan: 6, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Secondary', colSpan: 4, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Higher Secondary', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      ],
      [{ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: 'Repetition Rate - I', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: 'Repetition Rate - II', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: 'Repetition Rate - III', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: 'Repetition Rate - IV', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: 'Repetition Rate - V', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: 'Repetition Rate - VI', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: 'Repetition Rate - VII', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: 'Repetition Rate - VIII', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: 'Repetition Rate - IX', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: 'Repetition Rate - X', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: 'Repetition Rate - XI', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      ],

      col,
    ]

    let head146 = [
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Primary', colSpan: 10, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Upper Primary', colSpan: 6, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Secondary', colSpan: 4, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Higher Secondary', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      ],
      [{ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: 'Dropout Rate - I', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: 'Dropout Rate - II', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: 'Dropout Rate - III', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: 'Dropout Rate - IV', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: 'Dropout Rate - V', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: 'Dropout Rate - VI', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: 'Dropout Rate - VII', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: 'Dropout Rate - VIII', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: 'Dropout Rate - IX', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: 'Dropout Rate - X', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      { content: 'Dropout Rate - XI', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      ],

      col,
    ]

    let head43 = [
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Pre Primary', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-I', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-II', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-III', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-IV', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-V', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-VI', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-VII', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-VIII', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-IX', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-X', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-XI', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-XII', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Primary (I-V)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Upper Primary (VI-VIII)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Secondary (IX-X)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Higher Secondary (XI-XII)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Total Without Pre-Primary', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Total With Pre-Primary', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      ],
      col,
    ];

    let head95 = [
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-I', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-II', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-III', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-IV', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-V', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-VI', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-VII', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-VIII', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-IX', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-X', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-XI', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-XII', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } }
      ],
      col,
    ];

    let head98 = [
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-I', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-II', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-III', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-IV', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-V', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-VI', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-VII', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-VIII', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-IX', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-X', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-XI', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Class-XII', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Total', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } }
      ],
      col,
    ];
    /////
    let head113 = [
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 13, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Primary', colSpan: 24, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Upper Primary', colSpan: 24, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Secondary', colSpan: 24, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      ],
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Enrolment II to VI', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater II to VI', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Fresh Enrolment', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater I to V', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Enrolment Previous Year I-V', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Promotion rate', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repetition Rate', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Drop Out Rate', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Enrolment VII to IX', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater VII to IX', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Fresh Enrolment', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater VI to VIII', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Enrolment Previous Year VI-VII', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Promotion rate', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repetition Rate', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Drop Out Rate', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Enrolment X to XI', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater X to XI', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Fresh Enrolment X to XI', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repeater IX to X', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Enrolment Previous Year IX-X', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Promotion rate', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Repetition Rate', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Drop Out Rate', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } }
      ],
      col,
    ];

    let head153 = [
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'New Admission in Class 1 - All types of management', colSpan: 12, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      ],
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Total', colSpan: 4, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Boys', colSpan: 4, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Girls', colSpan: 4, styles: { halign: 'center', fillColor: [22, 160, 133] } },

      ],
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'With Pre-school experience in', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'With Pre-school experience in', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'With Pre-school experience in', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },

      ],
      col,
    ];
    //////
    let head94 = [
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Affiliation Board', colSpan: 7, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      ],
      col,
    ];

    let head131 = [
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Number of Secondary and Higher Secondary Schools', colSpan: 5, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Number of Secondary and Higher Secondary schools having vocational courses under NSQF at secondary/ higher secondary level', colSpan: 5, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Total enrolment under NSQF at secondary/ higher secondary level', colSpan: 5, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      ],
      col,
    ];

    let head132 = [
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Laboratory at Higher Secondary Level', colSpan: 8, styles: { halign: 'center', fillColor: [22, 160, 133] } }
      ],
      col,
    ];

    let head133 = [
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Academic Streams', colSpan: 6, styles: { halign: 'center', fillColor: [22, 160, 133] } }
      ],
      col,
    ];

    let head97 = [
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Pre-Primary Only(A)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Pre-Primary & Primary(I-V)(B)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Pre-Primary Total(A+B)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Primary Only (I-V)(C)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Primary(I-V) & Upper Primary(VI-VIII)(D)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Primary Total(I-V)(B+C+D)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Primary(I-V) & Upper Primary(VI-VIII)(E)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Upper Primary Only (VI-VIII)(F)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Upper primary(VI-VIII) & Secondary(IX-X)(G)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Upper Primary Total (VI-VIII)(E+F+G)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Upper primary(VI-VIII) & Secondary(IX-X)(H)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Secondary only (IX-X)(I)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Secondary(IX-X) & Higher Secondary(XI-XII)(J)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Secondary Total (IX-X)(H+I+J)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Secondary(IX-X) & Higher Secondary(XI-XII)(K)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Higher Secondary only (XI-XII)(L)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Higher Secondary Total (XI-XII)(K+L)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      ],
      col,
    ];


    let head99 = [
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Pre-Primary Only_(A)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Pre-Primary & Primary(I-V)_(B)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Pre-Primary Total_(A+B)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Primary Only (I-V)(C)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Primary(I-V) & Upper Primary(VI-VIII)_(D)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Primary Total(I-V)_(B+C+D)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Primary(I-V) & Upper Primary(VI-VIII)_(E)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Upper Primary Only (VI-VIII)_(F)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Upper primary(VI-VIII) & Secondary(IX-X)_(G)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Upper Primary Total (VI-VIII)_(E+F+G)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Upper primary(VI-VIII) & Secondary(IX-X)_(H)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Secondary only (IX-X)_(I)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Secondary(IX-X) & Higher Secondary(XI-XII)_(J)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Secondary Total (IX-X)_(H+I+J)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Secondary(IX-X) & Higher Secondary(XI-XII)_(K)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Higher Secondary only (XI-XII)_(L)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Higher Secondary Total (XI-XII)_(K+L)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      ],
      col,
    ];

    let head100 = [
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Total Age Group', colSpan: 7, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'SC Age Group', colSpan: 7, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'ST Age Group', colSpan: 7, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      ],
      col,
    ];

    let head44 = [
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Status of School Building', colSpan: 11, styles: { halign: 'center', fillColor: [22, 160, 133] } }
      ],
      col,
    ];

    let head45 = [
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Status of Boundary Wall', colSpan: 10, styles: { halign: 'center', fillColor: [22, 160, 133] } }
      ],
      col,
    ];

    let head46 = [
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Number of Classrooms', colSpan: 7, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } }
      ],
      col,
    ];

    let head47 = [
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Classrooms in Good Condition', colSpan: 4, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Classrooms Require Major Repair', colSpan: 4, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Classrooms Require Minor Repair', colSpan: 4, styles: { halign: 'center', fillColor: [22, 160, 133] } }
      ],
      col,
    ];

    let head105 = [
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Pre Primary only(A)', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Pre Primary and Primary(IV)(B)', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Pre Primary Total(A+B)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Primary Only (I-V)(C)', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Primary(I-V) and Upper Primary(VI-VIII)(D)', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Primary Total (I-V)(B+C+D)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Upper Primary Only (VI-VIII)(E)', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Upper Primary(VI-VIII) and Secondary(IX-X)(F)', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Upper Primary Total (VI-VIII)(D+E+F)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Secondary Only (IX-X)(G)', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Secondary(IX-X) and Higher Secondary(XI-XII)(H)', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Secondary Total (IX-X)(F+G+H)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Higher Secondary Only (XI-XII)(I)', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Higher Secondary Total (XI-XII)(H+I)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      ],
      col,
    ];

    let head106 = [
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Pre Primary only(A)', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Pre Primary and Primary(IV)(B)', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Pre Primary Total(A+B)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Primary Only (I-V)(C)', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Primary(I-V) and Upper Primary(VI-VIII)(D)', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Primary Total (I-V)(B+C+D)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Upper Primary Only (VI-VIII)(E)', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Upper Primary(VI-VIII) and Secondary(IX-X)(F)', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Upper Primary Total (VI-VIII)(D+E+F)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Secondary Only (IX-X)(G)', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Secondary(IX-X) and Higher Secondary(XI-XII)(H)', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Secondary Total (IX-X)(F+G+H)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Higher Secondary Only (XI-XII)(I)', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Higher Secondary Total (XI-XII)(H+I)', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      ],
      col,
    ];

    let head126 = [
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Social Category', colSpan: 12, styles: { halign: 'center', fillColor: [22, 160, 133] } }
      ],
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'General', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'SC', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'ST', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'OBC', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'ORC', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Others', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } }
      ],
      col,
    ];

    let head127 = [
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Disability Type', colSpan: 12, styles: { halign: 'center', fillColor: [22, 160, 133] } }
      ],
      col,
    ];

    let head128 = [
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Nature of Appointment', colSpan: 9, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      ],
      col,
    ];

    let head129 = [
      [
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        { content: 'Teacher Trained for CWSN', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
      ],
      col,
    ];

    for (let i = 0; i < this.universalAgGridColumnDefs.length; i++) {
      if (this.universalAgGridColumnDefs[i].field === undefined) {
        for (let j = 0; j < this.universalAgGridColumnDefs[i].children.length; j++) {
          if (this.universalAgGridColumnDefs[i].children[j].field == null) {
            for (let k = 0; k < this.universalAgGridColumnDefs[i].children[j].children.length; k++) {
              if (this.universalAgGridColumnDefs[i].children[j].children[k].field === undefined) {
                for (let l = 0; l < this.universalAgGridColumnDefs[i].children[j].children[k].children.length; l++) {
                  if (this.gridColumnApi.getColumn(this.universalAgGridColumnDefs[i].children[j].children[k].children[l].field).visible) {
                    this.jsonColumnName += this.universalAgGridColumnDefs[i].children[j].children[k].children[l].field + ",";
                    col.push(this.universalAgGridColumnDefs[i].children[j].children[k].children[l].headerName);
                    columnKey.push(this.universalAgGridColumnDefs[i].children[j].children[k].children[l].field);
                  }
                }
              } else {
                if (this.gridColumnApi.getColumn(this.universalAgGridColumnDefs[i].children[j].children[k].field).visible) {
                  this.jsonColumnName += this.universalAgGridColumnDefs[i].children[j].children[k].field + ",";
                  col.push(this.universalAgGridColumnDefs[i].children[j].children[k].headerName);
                  columnKey.push(this.universalAgGridColumnDefs[i].children[j].children[k].field);
                }
              }
            }
          } else {
            if (this.gridColumnApi.getColumn(this.universalAgGridColumnDefs[i].children[j].field).visible && (this.universalAgGridColumnDefs[i].children[j].type == "numericColumn" || this.universalAgGridColumnDefs[i].children[j].type == "nonEditableColumn")) {
              this.jsonColumnName += this.universalAgGridColumnDefs[i].children[j].field + ",";
              col.push(this.universalAgGridColumnDefs[i].children[j].headerName);
              columnKey.push(this.universalAgGridColumnDefs[i].children[j].field);
            }
          }
        }
      } else {
        if (this.gridColumnApi.getColumn(this.universalAgGridColumnDefs[i].field).visible && (this.universalAgGridColumnDefs[i].type == "numericColumn" || this.universalAgGridColumnDefs[i].type == "nonEditableColumn")) {
          this.jsonColumnName += this.universalAgGridColumnDefs[i].field + ",";
          col.push(this.universalAgGridColumnDefs[i].headerName);
          columnKey.push(this.universalAgGridColumnDefs[i].field);
        }
        else if (this.gridColumnApi.getColumn(this.universalAgGridColumnDefs[i].field).visible) {
          this.jsonColumnName += this.universalAgGridColumnDefs[i].field + ",";
          col.push(this.universalAgGridColumnDefs[i].headerName);
          columnKey.push(this.universalAgGridColumnDefs[i].field);
        }
      }
    }
    var rows = [];

    var itemNew;
    if (this.agChange) {
      itemNew = this.pdfRowData;
    } else {
      itemNew = this.rowData;
    }

    itemNew = this.gridApi.getModel().gridOptionsWrapper.gridOptions.rowData;

    if (this.reportCode == 'R100') {
      var colspan1 = 0;
      var colspan2 = 0;
      var colspan3 = 0;
      for (let k = 0; k < columnKey.length; k++) {
        //Total Age Group
        if (columnKey[k] == "age_group_gen3_5" || columnKey[k] == "age_group_gen6_10" || columnKey[k] == "age_group_gen11_13" ||
          columnKey[k] == "age_group_gen14_15" || columnKey[k] == "age_group_gen16_17" || columnKey[k] == "age_group_gen18_22" ||
          columnKey[k] == "age_group_gen18_23") {
          colspan1 = colspan1 + 1;
        }
        //SC Age Group
        if (columnKey[k] == "age_group_sc3_5" || columnKey[k] == "age_group_sc6_10" || columnKey[k] == "age_group_sc11_13" ||
          columnKey[k] == "age_group_sc14_15" || columnKey[k] == "age_group_sc16_17" || columnKey[k] == "age_group_sc18_22" ||
          columnKey[k] == "age_group_sc18_23") {
          colspan2 = colspan2 + 1;
        }
        //ST Age Group
        if (columnKey[k] == "age_group_st3_5" || columnKey[k] == "age_group_st6_10" || columnKey[k] == "age_group_st11_13" ||
          columnKey[k] == "age_group_st14_15" || columnKey[k] == "age_group_st16_17" || columnKey[k] == "age_group_st18_22" ||
          columnKey[k] == "age_group_st18_23") {
          colspan3 = colspan3 + 1;
        }
      }
    }


    if (this.reportCode == 'R100') {
      var headerColumns = [];
      for (let k = 0; k < columnKey.length; k++) {

        var loc;
        if (loc != 1 && columnKey[k] == "loc_name") {
          loc = 1;
          headerColumns.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
        }
        var year;
        if (year != 1 && columnKey[k] == "ac_year") {
          headerColumns.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          year = 1;
        }
        var gender;
        if (gender != 1 && columnKey[k] == "gender") {
          headerColumns.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          gender = 1;
        }
        var nocast;
        if ((nocast != 1) && (columnKey[k] == "age_group_gen3_5" || columnKey[k] == "age_group_gen6_10" || columnKey[k] == "age_group_gen11_13" || columnKey[k] == "age_group_gen14_15" || columnKey[k] == "age_group_gen16_17" || columnKey[k] == "age_group_gen18_22" || columnKey[k] == "age_group_gen18_23")) {
          headerColumns.push({ content: 'Total Age Group', colSpan: colspan1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          nocast = 1;
        }
        var sc;
        if ((sc != 1) && (columnKey[k] == "age_group_sc3_5" || columnKey[k] == "age_group_sc6_10" || columnKey[k] == "age_group_sc11_13" || columnKey[k] == "age_group_sc14_15" || columnKey[k] == "age_group_sc16_17" || columnKey[k] == "age_group_sc18_22" || columnKey[k] == "age_group_sc18_23")) {
          headerColumns.push({ content: 'SC Age Group', colSpan: colspan2, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          sc = 1;
        }
        var st;
        if ((st != 1) && (columnKey[k] == "age_group_st3_5" || columnKey[k] == "age_group_st6_10" || columnKey[k] == "age_group_st11_13" || columnKey[k] == "age_group_st14_15" || columnKey[k] == "age_group_st16_17" || columnKey[k] == "age_group_st18_22" || columnKey[k] == "age_group_st18_23")) {
          headerColumns.push({ content: 'ST Age Group', colSpan: colspan3, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          st = 1;
        }
      }
    }


    if (this.reportCode == 'R98') {

      var colspan2 = 0;
      var colspan3 = 0;
      var colspan4 = 0;
      var colspan5 = 0;
      var colspan6 = 0;
      var colspan7 = 0;
      var colspan8 = 0;
      var colspan9 = 0;
      var colspan10 = 0;
      var colspan11 = 0;
      var colspan12 = 0;
      var colspan13 = 0;
      var colspan14 = 0;


      for (let k = 0; k < columnKey.length; k++) {


        if (columnKey[k] == "c1_g" || columnKey[k] == "c1_b" || columnKey[k] == "c1") {
          colspan2 = colspan2 + 1;
        }
        if (columnKey[k] == "c2_g" || columnKey[k] == "c2_b" || columnKey[k] == "c2") {
          colspan3 = colspan3 + 1;
        }
        if (columnKey[k] == "c3_g" || columnKey[k] == "c3_b" || columnKey[k] == "c3") {
          colspan4 = colspan4 + 1;
        }
        if (columnKey[k] == "c4_g" || columnKey[k] == "c4_b" || columnKey[k] == "c4") {
          colspan5 = colspan5 + 1;
        }
        if (columnKey[k] == "c5_g" || columnKey[k] == "c5_b" || columnKey[k] == "c5") {
          colspan6 = colspan6 + 1;
        }
        if (columnKey[k] == "c6_g" || columnKey[k] == "c6_b" || columnKey[k] == "c6") {
          colspan7 = colspan7 + 1;
        }
        if (columnKey[k] == "c7_g" || columnKey[k] == "c7_b" || columnKey[k] == "c7") {
          colspan8 = colspan8 + 1;
        }
        if (columnKey[k] == "c8_g" || columnKey[k] == "c8_b" || columnKey[k] == "c8") {
          colspan9 = colspan9 + 1;
        }
        if (columnKey[k] == "c9_g" || columnKey[k] == "c9_b" || columnKey[k] == "c9") {
          colspan10 = colspan10 + 1;
        }
        if (columnKey[k] == "c10_g" || columnKey[k] == "c10_b" || columnKey[k] == "c10") {
          colspan11 = colspan11 + 1;
        }
        if (columnKey[k] == "c11_g" || columnKey[k] == "c11_b" || columnKey[k] == "c11") {
          colspan12 = colspan12 + 1;
        }
        if (columnKey[k] == "c12_g" || columnKey[k] == "c12_b" || columnKey[k] == "c12") {
          colspan13 = colspan13 + 1;
        }
        if (columnKey[k] == "total_g" || columnKey[k] == "total_b" || columnKey[k] == "total_enrol") {
          colspan14 = colspan14 + 1;
        }
      }
    }


    if (this.reportCode == 'R98') {
      var headerColumns = [];
      for (let k = 0; k < columnKey.length; k++) {

        var loc;
        if (loc != 1 && columnKey[k] == "loc_name") {
          loc = 1;
          headerColumns.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
        }
        var year;
        if (year != 1 && columnKey[k] == "category_name") {
          headerColumns.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          year = 1;
        }
        var gender;
        if (gender != 1 && columnKey[k] == "sch_mgmt_name") {
          headerColumns.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          gender = 1;
        }
        var gender1;
        if (gender1 != 1 && columnKey[k] == "medinstr_name") {
          headerColumns.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          gender1 = 1;
        }
        var gender2;
        if (gender2 != 1 && columnKey[k] == "number_of_school") {
          headerColumns.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          gender2 = 1;
        }
        var data2;
        if ((data2 != 1) && (columnKey[k] == "c1_g" || columnKey[k] == "c1_b" || columnKey[k] == "c1")) {
          headerColumns.push({ content: 'Class-I', colSpan: colspan2, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data2 = 1;
        }
        var data3;
        if ((data3 != 1) && (columnKey[k] == "c2_g" || columnKey[k] == "c2_b" || columnKey[k] == "c2")) {
          headerColumns.push({ content: 'Class-II', colSpan: colspan3, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data3 = 1;
        }
        var data4;
        if ((data4 != 1) && (columnKey[k] == "c3_g" || columnKey[k] == "c3_b" || columnKey[k] == "c3")) {
          headerColumns.push({ content: 'Class-III', colSpan: colspan4, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data4 = 1;
        }
        var data5;
        if ((data5 != 1) && (columnKey[k] == "c4_g" || columnKey[k] == "c4_b" || columnKey[k] == "c4")) {
          headerColumns.push({ content: 'Class-IV', colSpan: colspan5, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data5 = 1;
        }
        var data6;
        if ((data6 != 1) && (columnKey[k] == "c5_g" || columnKey[k] == "c5_b" || columnKey[k] == "c5")) {
          headerColumns.push({ content: 'Class-V', colSpan: colspan6, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data6 = 1;
        }
        var data7;
        if ((data7 != 1) && (columnKey[k] == "c6_g" || columnKey[k] == "c6_b" || columnKey[k] == "c6")) {
          headerColumns.push({ content: 'Class-VI', colSpan: colspan7, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data7 = 1;
        }
        var data8;
        if ((data8 != 1) && (columnKey[k] == "c7_g" || columnKey[k] == "c7_b" || columnKey[k] == "c7")) {
          headerColumns.push({ content: 'Class-VII', colSpan: colspan8, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data8 = 1;
        }
        var data9;
        if ((data9 != 1) && (columnKey[k] == "c8_g" || columnKey[k] == "c8_b" || columnKey[k] == "c8")) {
          headerColumns.push({ content: 'Class-VIII', colSpan: colspan9, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data9 = 1;
        }
        var data10;
        if ((data10 != 1) && (columnKey[k] == "c9_g" || columnKey[k] == "c9_b" || columnKey[k] == "c9")) {
          headerColumns.push({ content: 'Class-IX', colSpan: colspan10, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data10 = 1;
        }
        var data11;
        if ((data11 != 1) && (columnKey[k] == "c10_g" || columnKey[k] == "c10_b" || columnKey[k] == "c10")) {
          headerColumns.push({ content: 'Class-X', colSpan: colspan11, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data11 = 1;
        }
        var data12;
        if ((data12 != 1) && (columnKey[k] == "c11_g" || columnKey[k] == "c11_b" || columnKey[k] == "c11")) {
          headerColumns.push({ content: 'Class-XI', colSpan: colspan12, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data12 = 1;
        }
        var data13;
        if ((data13 != 1) && (columnKey[k] == "c12_g" || columnKey[k] == "c12_b" || columnKey[k] == "c12")) {
          headerColumns.push({ content: 'Class-XII', colSpan: colspan13, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data13 = 1;
        }
        var data14;
        if ((data14 != 1) && (columnKey[k] == "total_g" || columnKey[k] == "total_b" || columnKey[k] == "total_enrol")) {
          headerColumns.push({ content: 'Total', colSpan: colspan14, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data14 = 1;
        }
      }
    }


    if (this.reportCode == 'R141') {
      var colspan1 = 0;
      var colspan2 = 0;
      var colspan3 = 0;
      var colspan4 = 0;
      var colspan5 = 0;
      var colspan6 = 0;
      var colspan7 = 0;
      var colspan8 = 0;
      var colspan9 = 0;
      var colspan10 = 0;
      var colspan11 = 0;
      var colspan12 = 0;
      var colspan13 = 0;
      var colspan14 = 0;
      var colspan15 = 0;
      var colspan16 = 0;
      var colspan17 = 0;
      var colspan18 = 0;
      var colspan19 = 0;

      for (let k = 0; k < columnKey.length; k++) {

        if (columnKey[k] == "cpp_g" || columnKey[k] == "cpp_b" || columnKey[k] == "cpp") {
          colspan1 = colspan1 + 1;
        }
        if (columnKey[k] == "c1_g" || columnKey[k] == "c1_b" || columnKey[k] == "c1") {
          colspan2 = colspan2 + 1;
        }
        if (columnKey[k] == "c2_g" || columnKey[k] == "c2_b" || columnKey[k] == "c2") {
          colspan3 = colspan3 + 1;
        }
        if (columnKey[k] == "c3_g" || columnKey[k] == "c3_b" || columnKey[k] == "c3") {
          colspan4 = colspan4 + 1;
        }
        if (columnKey[k] == "c4_g" || columnKey[k] == "c4_b" || columnKey[k] == "c4") {
          colspan5 = colspan5 + 1;
        }
        if (columnKey[k] == "c5_g" || columnKey[k] == "c5_b" || columnKey[k] == "c5") {
          colspan6 = colspan6 + 1;
        }
        if (columnKey[k] == "c6_g" || columnKey[k] == "c6_b" || columnKey[k] == "c6") {
          colspan7 = colspan7 + 1;
        }
        if (columnKey[k] == "c7_g" || columnKey[k] == "c7_b" || columnKey[k] == "c7") {
          colspan8 = colspan8 + 1;
        }
        if (columnKey[k] == "c8_g" || columnKey[k] == "c8_b" || columnKey[k] == "c8") {
          colspan9 = colspan9 + 1;
        }
        if (columnKey[k] == "c9_g" || columnKey[k] == "c9_b" || columnKey[k] == "c9") {
          colspan10 = colspan10 + 1;
        }
        if (columnKey[k] == "c10_g" || columnKey[k] == "c10_b" || columnKey[k] == "c10") {
          colspan11 = colspan11 + 1;
        }
        if (columnKey[k] == "c11_g" || columnKey[k] == "c11_b" || columnKey[k] == "c11") {
          colspan12 = colspan12 + 1;
        }
        if (columnKey[k] == "c12_g" || columnKey[k] == "c12_b" || columnKey[k] == "c12") {
          colspan13 = colspan13 + 1;
        }
        if (columnKey[k] == "primary_g" || columnKey[k] == "primary_b" || columnKey[k] == "primary_total") {
          colspan14 = colspan14 + 1;
        }
        if (columnKey[k] == "upper_primary_g" || columnKey[k] == "upper_primary_b" || columnKey[k] == "upper_primary_total") {
          colspan15 = colspan15 + 1;
        }
        if (columnKey[k] == "secondary_g" || columnKey[k] == "secondary_b" || columnKey[k] == "secondary_total") {
          colspan16 = colspan16 + 1;
        }
        if (columnKey[k] == "higher_secondary_g" || columnKey[k] == "higher_secondary_b" || columnKey[k] == "higher_secondary_total") {
          colspan17 = colspan17 + 1;
        }
        if (columnKey[k] == "total_g" || columnKey[k] == "total_b" || columnKey[k] == "total_enrol") {
          colspan18 = colspan18 + 1;
        }
        if (columnKey[k] == "total_pre_g" || columnKey[k] == "total_pre_b" || columnKey[k] == "total_pre_enrol") {
          colspan19 = colspan19 + 1;
        }
      }
    }


    if (this.reportCode == 'R141') {
      var headerColumns = [];
      for (let k = 0; k < columnKey.length; k++) {

        var loc;
        if (loc != 1 && columnKey[k] == "location_name") {
          loc = 1;
          headerColumns.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
        }
        var year;
        if (year != 1 && columnKey[k] == "item_name") {
          headerColumns.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          year = 1;
        }
        var gender;
        if (gender != 1 && columnKey[k] == "loc_name") {
          headerColumns.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          gender = 1;
        }
        var gender1;
        if (gender1 != 1 && columnKey[k] == "category_name") {
          headerColumns.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          gender1 = 1;
        }
        var gender2;
        if (gender2 != 1 && columnKey[k] == "sch_mgmt_name") {
          headerColumns.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          gender2 = 1;
        }
        var data1;
        if ((data1 != 1) && (columnKey[k] == "cpp_g" || columnKey[k] == "cpp_b" || columnKey[k] == "cpp")) {
          headerColumns.push({ content: 'Pre-Primary', colSpan: colspan1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data1 = 1;
        }
        var data2;
        if ((data2 != 1) && (columnKey[k] == "c1_g" || columnKey[k] == "c1_b" || columnKey[k] == "c1")) {
          headerColumns.push({ content: 'Class-I', colSpan: colspan2, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data2 = 1;
        }
        var data3;
        if ((data3 != 1) && (columnKey[k] == "c2_g" || columnKey[k] == "c2_b" || columnKey[k] == "c2")) {
          headerColumns.push({ content: 'Class-II', colSpan: colspan3, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data3 = 1;
        }
        var data4;
        if ((data4 != 1) && (columnKey[k] == "c3_g" || columnKey[k] == "c3_b" || columnKey[k] == "c3")) {
          headerColumns.push({ content: 'Class-III', colSpan: colspan4, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data4 = 1;
        }
        var data5;
        if ((data5 != 1) && (columnKey[k] == "c4_g" || columnKey[k] == "c4_b" || columnKey[k] == "c4")) {
          headerColumns.push({ content: 'Class-IV', colSpan: colspan5, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data5 = 1;
        }
        var data6;
        if ((data6 != 1) && (columnKey[k] == "c5_g" || columnKey[k] == "c5_b" || columnKey[k] == "c5")) {
          headerColumns.push({ content: 'Class-V', colSpan: colspan6, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data6 = 1;
        }
        var data7;
        if ((data7 != 1) && (columnKey[k] == "c6_g" || columnKey[k] == "c6_b" || columnKey[k] == "c6")) {
          headerColumns.push({ content: 'Class-VI', colSpan: colspan7, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data7 = 1;
        }
        var data8;
        if ((data8 != 1) && (columnKey[k] == "c7_g" || columnKey[k] == "c7_b" || columnKey[k] == "c7")) {
          headerColumns.push({ content: 'Class-VII', colSpan: colspan8, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data8 = 1;
        }
        var data9;
        if ((data9 != 1) && (columnKey[k] == "c8_g" || columnKey[k] == "c8_b" || columnKey[k] == "c8")) {
          headerColumns.push({ content: 'Class-VIII', colSpan: colspan9, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data9 = 1;
        }
        var data10;
        if ((data10 != 1) && (columnKey[k] == "c9_g" || columnKey[k] == "c9_b" || columnKey[k] == "c9")) {
          headerColumns.push({ content: 'Class-IX', colSpan: colspan10, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data10 = 1;
        }
        var data11;
        if ((data11 != 1) && (columnKey[k] == "c10_g" || columnKey[k] == "c10_b" || columnKey[k] == "c10")) {
          headerColumns.push({ content: 'Class-X', colSpan: colspan11, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data11 = 1;
        }
        var data12;
        if ((data12 != 1) && (columnKey[k] == "c11_g" || columnKey[k] == "c11_b" || columnKey[k] == "c11")) {
          headerColumns.push({ content: 'Class-XI', colSpan: colspan12, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data12 = 1;
        }
        var data13;
        if ((data13 != 1) && (columnKey[k] == "c12_g" || columnKey[k] == "c12_b" || columnKey[k] == "c12")) {
          headerColumns.push({ content: 'Class-XII', colSpan: colspan13, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data13 = 1;
        }
        var data14;
        if ((data14 != 1) && (columnKey[k] == "primary_g" || columnKey[k] == "primary_b" || columnKey[k] == "primary_total")) {
          headerColumns.push({ content: 'Primary (I-V)', colSpan: colspan14, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data14 = 1;
        }
        var data15;
        if ((data15 != 1) && (columnKey[k] == "upper_primary_g" || columnKey[k] == "upper_primary_b" || columnKey[k] == "upper_primary_total")) {
          headerColumns.push({ content: 'Upper Primary (VI-VIII)', colSpan: colspan15, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data15 = 1;
        }
        var data16;
        if ((data16 != 1) && (columnKey[k] == "secondary_g" || columnKey[k] == "secondary_b" || columnKey[k] == "secondary_total")) {
          headerColumns.push({ content: 'Secondary (IX-X)', colSpan: colspan16, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data16 = 1;
        }
        var data17;
        if ((data17 != 1) && (columnKey[k] == "higher_secondary_g" || columnKey[k] == "higher_secondary_b" || columnKey[k] == "higher_secondary_total")) {
          headerColumns.push({ content: 'Higher Secondary (XI-XII)', colSpan: colspan17, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data17 = 1;
        }
        var data18;
        if ((data18 != 1) && (columnKey[k] == "total_g" || columnKey[k] == "total_b" || columnKey[k] == "total_enrol")) {
          headerColumns.push({ content: 'Total Without Pre-Primary', colSpan: colspan18, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data18 = 1;
        }
        var data19;
        if ((data19 != 1) && (columnKey[k] == "total_pre_g" || columnKey[k] == "total_pre_b" || columnKey[k] == "total_pre_enrol")) {
          headerColumns.push({ content: 'Total With Pre-Primary', colSpan: colspan19, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data19 = 1;
        }
      }
    }


    if (this.reportCode == 'R43') {
      var colspan1 = 0;
      var colspan2 = 0;
      var colspan3 = 0;
      var colspan4 = 0;
      var colspan5 = 0;
      var colspan6 = 0;
      var colspan7 = 0;
      var colspan8 = 0;
      var colspan9 = 0;
      var colspan10 = 0;
      var colspan11 = 0;
      var colspan12 = 0;
      var colspan13 = 0;
      var colspan14 = 0;
      var colspan15 = 0;
      var colspan16 = 0;
      var colspan17 = 0;
      var colspan18 = 0;
      var colspan19 = 0;

      for (let k = 0; k < columnKey.length; k++) {

        if (columnKey[k] == "cpp_g" || columnKey[k] == "cpp_b" || columnKey[k] == "cpp") {
          colspan1 = colspan1 + 1;
        }
        if (columnKey[k] == "c1_g" || columnKey[k] == "c1_b" || columnKey[k] == "c1") {
          colspan2 = colspan2 + 1;
        }
        if (columnKey[k] == "c2_g" || columnKey[k] == "c2_b" || columnKey[k] == "c2") {
          colspan3 = colspan3 + 1;
        }
        if (columnKey[k] == "c3_g" || columnKey[k] == "c3_b" || columnKey[k] == "c3") {
          colspan4 = colspan4 + 1;
        }
        if (columnKey[k] == "c4_g" || columnKey[k] == "c4_b" || columnKey[k] == "c4") {
          colspan5 = colspan5 + 1;
        }
        if (columnKey[k] == "c5_g" || columnKey[k] == "c5_b" || columnKey[k] == "c5") {
          colspan6 = colspan6 + 1;
        }
        if (columnKey[k] == "c6_g" || columnKey[k] == "c6_b" || columnKey[k] == "c6") {
          colspan7 = colspan7 + 1;
        }
        if (columnKey[k] == "c7_g" || columnKey[k] == "c7_b" || columnKey[k] == "c7") {
          colspan8 = colspan8 + 1;
        }
        if (columnKey[k] == "c8_g" || columnKey[k] == "c8_b" || columnKey[k] == "c8") {
          colspan9 = colspan9 + 1;
        }
        if (columnKey[k] == "c9_g" || columnKey[k] == "c9_b" || columnKey[k] == "c9") {
          colspan10 = colspan10 + 1;
        }
        if (columnKey[k] == "c10_g" || columnKey[k] == "c10_b" || columnKey[k] == "c10") {
          colspan11 = colspan11 + 1;
        }
        if (columnKey[k] == "c11_g" || columnKey[k] == "c11_b" || columnKey[k] == "c11") {
          colspan12 = colspan12 + 1;
        }
        if (columnKey[k] == "c12_g" || columnKey[k] == "c12_b" || columnKey[k] == "c12") {
          colspan13 = colspan13 + 1;
        }
        if (columnKey[k] == "primary_g" || columnKey[k] == "primary_b" || columnKey[k] == "primary_total") {
          colspan14 = colspan14 + 1;
        }
        if (columnKey[k] == "upper_primary_g" || columnKey[k] == "upper_primary_b" || columnKey[k] == "upper_primary_total") {
          colspan15 = colspan15 + 1;
        }
        if (columnKey[k] == "secondary_g" || columnKey[k] == "secondary_b" || columnKey[k] == "secondary_total") {
          colspan16 = colspan16 + 1;
        }
        if (columnKey[k] == "higher_secondary_g" || columnKey[k] == "higher_secondary_b" || columnKey[k] == "higher_secondary_total") {
          colspan17 = colspan17 + 1;
        }
        if (columnKey[k] == "total_g" || columnKey[k] == "total_b" || columnKey[k] == "total_enrol") {
          colspan18 = colspan18 + 1;
        }
        if (columnKey[k] == "total_pre_g" || columnKey[k] == "total_pre_b" || columnKey[k] == "total_pre_enrol") {
          colspan19 = colspan19 + 1;
        }
      }
    }


    if (this.reportCode == 'R43') {
      var headerColumns = [];
      for (let k = 0; k < columnKey.length; k++) {

        var loc;
        if (loc != 1 && columnKey[k] == "location_name") {
          loc = 1;
          headerColumns.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
        }
        var year;
        if (year != 1 && columnKey[k] == "loc_name") {
          headerColumns.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          year = 1;
        }
        var gender;
        if (gender != 1 && columnKey[k] == "category_name") {
          headerColumns.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          gender = 1;
        }
        var gender1;
        if (gender1 != 1 && columnKey[k] == "sch_mgmt_name") {
          headerColumns.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          gender1 = 1;
        }
        var data1;
        if ((data1 != 1) && (columnKey[k] == "cpp_g" || columnKey[k] == "cpp_b" || columnKey[k] == "cpp")) {
          headerColumns.push({ content: 'Pre-Primary', colSpan: colspan1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data1 = 1;
        }
        var data2;
        if ((data2 != 1) && (columnKey[k] == "c1_g" || columnKey[k] == "c1_b" || columnKey[k] == "c1")) {
          headerColumns.push({ content: 'Class-I', colSpan: colspan2, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data2 = 1;
        }
        var data3;
        if ((data3 != 1) && (columnKey[k] == "c2_g" || columnKey[k] == "c2_b" || columnKey[k] == "c2")) {
          headerColumns.push({ content: 'Class-II', colSpan: colspan3, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data3 = 1;
        }
        var data4;
        if ((data4 != 1) && (columnKey[k] == "c3_g" || columnKey[k] == "c3_b" || columnKey[k] == "c3")) {
          headerColumns.push({ content: 'Class-III', colSpan: colspan4, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data4 = 1;
        }
        var data5;
        if ((data5 != 1) && (columnKey[k] == "c4_g" || columnKey[k] == "c4_b" || columnKey[k] == "c4")) {
          headerColumns.push({ content: 'Class-IV', colSpan: colspan5, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data5 = 1;
        }
        var data6;
        if ((data6 != 1) && (columnKey[k] == "c5_g" || columnKey[k] == "c5_b" || columnKey[k] == "c5")) {
          headerColumns.push({ content: 'Class-V', colSpan: colspan6, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data6 = 1;
        }
        var data7;
        if ((data7 != 1) && (columnKey[k] == "c6_g" || columnKey[k] == "c6_b" || columnKey[k] == "c6")) {
          headerColumns.push({ content: 'Class-VI', colSpan: colspan7, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data7 = 1;
        }
        var data8;
        if ((data8 != 1) && (columnKey[k] == "c7_g" || columnKey[k] == "c7_b" || columnKey[k] == "c7")) {
          headerColumns.push({ content: 'Class-VII', colSpan: colspan8, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data8 = 1;
        }
        var data9;
        if ((data9 != 1) && (columnKey[k] == "c8_g" || columnKey[k] == "c8_b" || columnKey[k] == "c8")) {
          headerColumns.push({ content: 'Class-VIII', colSpan: colspan9, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data9 = 1;
        }
        var data10;
        if ((data10 != 1) && (columnKey[k] == "c9_g" || columnKey[k] == "c9_b" || columnKey[k] == "c9")) {
          headerColumns.push({ content: 'Class-IX', colSpan: colspan10, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data10 = 1;
        }
        var data11;
        if ((data11 != 1) && (columnKey[k] == "c10_g" || columnKey[k] == "c10_b" || columnKey[k] == "c10")) {
          headerColumns.push({ content: 'Class-X', colSpan: colspan11, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data11 = 1;
        }
        var data12;
        if ((data12 != 1) && (columnKey[k] == "c11_g" || columnKey[k] == "c11_b" || columnKey[k] == "c11")) {
          headerColumns.push({ content: 'Class-XI', colSpan: colspan12, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data12 = 1;
        }
        var data13;
        if ((data13 != 1) && (columnKey[k] == "c12_g" || columnKey[k] == "c12_b" || columnKey[k] == "c12")) {
          headerColumns.push({ content: 'Class-XII', colSpan: colspan13, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data13 = 1;
        }
        var data14;
        if ((data14 != 1) && (columnKey[k] == "primary_g" || columnKey[k] == "primary_b" || columnKey[k] == "primary_total")) {
          headerColumns.push({ content: 'Primary (I-V)', colSpan: colspan14, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data14 = 1;
        }
        var data15;
        if ((data15 != 1) && (columnKey[k] == "upper_primary_g" || columnKey[k] == "upper_primary_b" || columnKey[k] == "upper_primary_total")) {
          headerColumns.push({ content: 'Upper Primary (VI-VIII)', colSpan: colspan15, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data15 = 1;
        }
        var data16;
        if ((data16 != 1) && (columnKey[k] == "secondary_g" || columnKey[k] == "secondary_b" || columnKey[k] == "secondary_total")) {
          headerColumns.push({ content: 'Secondary (IX-X)', colSpan: colspan16, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data16 = 1;
        }
        var data17;
        if ((data17 != 1) && (columnKey[k] == "higher_secondary_g" || columnKey[k] == "higher_secondary_b" || columnKey[k] == "higher_secondary_total")) {
          headerColumns.push({ content: 'Higher Secondary (XI-XII)', colSpan: colspan17, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data17 = 1;
        }
        var data18;
        if ((data18 != 1) && (columnKey[k] == "total_g" || columnKey[k] == "total_b" || columnKey[k] == "total_enrol")) {
          headerColumns.push({ content: 'Total Without Pre-Primary', colSpan: colspan18, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data18 = 1;
        }
        var data19;
        if ((data19 != 1) && (columnKey[k] == "total_pre_g" || columnKey[k] == "total_pre_b" || columnKey[k] == "total_pre_enrol")) {
          headerColumns.push({ content: 'Total With Pre-Primary', colSpan: colspan19, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          data19 = 1;
        }
      }
    }


    if (this.reportCode == 'R128') {
      // var headerColumns = [];
      var colspan1 = 0;

      for (let k = 0; k < columnKey.length; k++) {
        if (columnKey[k] == "regular_m" || columnKey[k] == "regular_f" || columnKey[k] == "regular" || columnKey[k] == "contract_m" || columnKey[k] == "contract_f" || columnKey[k] == "contract" || columnKey[k] == "partime_m" || columnKey[k] == "partime_f" || columnKey[k] == "partime") {
          colspan1 = colspan1 + 1;
        }
      }
    }

    if (this.reportCode == 'R128') {
      var headerColumns = [];
      var check1 = 0;
      var check2 = 0;
      var check3 = 0;
      var check4 = 0;

      for (let k = 0; k < columnKey.length; k++) {


        if (check2 != 1 && columnKey[k] == "location_name") {
          check2 = 1;
          headerColumns.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
        }
        if (check3 != 1 && columnKey[k] == "sch_mgmt_name") {
          check3 = 1;
          headerColumns.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
        }
        if (check4 != 1 && columnKey[k] == "sch_category_name") {
          check4 = 1;
          headerColumns.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
        }
        if ((check1 != 1) && (columnKey[k] == "regular_m" || columnKey[k] == "regular_f" || columnKey[k] == "regular" || columnKey[k] == "contract_m" || columnKey[k] == "contract_f" || columnKey[k] == "contract" || columnKey[k] == "partime_m" || columnKey[k] == "partime_f" || columnKey[k] == "partime")) {
          check1 = 1;
          headerColumns.push({ content: 'Nature of Appointment', colSpan: colspan1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
        }
      }
    }

    if (this.reportCode == 'R115') {
      // var headerColumns = [];
      var colspan1 = 0;
      var colspan2 = 0;
      var colspan3 = 0;
      for (let k = 0; k < columnKey.length; k++) {

        //Primary
        if (columnKey[k] == "pri_girls_promotionRate" || columnKey[k] == "pri_boys_promotionRate" || columnKey[k] == "pri_promotionRate_all") {
          colspan1 = colspan1 + 1;
        }
        //Upper Primary
        if (columnKey[k] == "upperPri_girls_promotionRate" || columnKey[k] == "upperPri_boys_promotionRate" || columnKey[k] == "upperPri_promotionRate_all") {
          colspan2 = colspan2 + 1;
        }
        //Secondary
        if (columnKey[k] == "sec_girls_promotionRate" || columnKey[k] == "sec_boys_promotionRate" || columnKey[k] == "sec_promotionRate_all") {
          colspan3 = colspan3 + 1;
        }
      }
    }

    if (this.reportCode == 'R115') {
      var headerColumns = [];
      for (let k = 0; k < columnKey.length; k++) {

        var loc1;
        if (loc1 != 1 && columnKey[k] == "location_name") {
          loc1 = 1;
          headerColumns.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
        }
        var year8;
        if (year8 != 1 && columnKey[k] == "caste_name") {
          headerColumns.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          year8 = 1;
        }
        var year1;
        if ((year1 != 1) && (columnKey[k] == "pri_girls_promotionRate" || columnKey[k] == "pri_boys_promotionRate" || columnKey[k] == "pri_promotionRate_all")) {
          headerColumns.push({ content: 'Promotion Rate Primary (I-V)', colSpan: colspan1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          year1 = 1;
        }
        var year2;
        if ((year2 != 1) && (columnKey[k] == "upperPri_girls_promotionRate" || columnKey[k] == "upperPri_boys_promotionRate" || columnKey[k] == "upperPri_promotionRate_all")) {
          headerColumns.push({ content: 'Promotion Rate Upper Primary (VI-VIII)', colSpan: colspan2, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          year2 = 1;
        }
        var year3;
        if ((year3 != 1) && (columnKey[k] == "sec_girls_promotionRate" || columnKey[k] == "sec_boys_promotionRate" || columnKey[k] == "sec_promotionRate_all")) {
          headerColumns.push({ content: 'Promotion Rate Secondary (IX-X)', colSpan: colspan3, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          year3 = 1;
        }
      }
    }

    if (this.reportCode == 'R127') {
      // var headerColumns = [];
      var colspan1 = 0;

      for (let k = 0; k < columnKey.length; k++) {
        if (columnKey[k] == "loco_motor_m" || columnKey[k] == "loco_motor_f" || columnKey[k] == "loco_motor" || columnKey[k] == "visuals_m" || columnKey[k] == "visuals_f" || columnKey[k] == "visuals" || columnKey[k] == "hearing_impaired_m" || columnKey[k] == "hearing_impaired_f" || columnKey[k] == "hearing_impaired" || columnKey[k] == "other_m" || columnKey[k] == "other_f" || columnKey[k] == "other") {
          colspan1 = colspan1 + 1;
        }
      }
    }	
	
    if (this.reportCode == 'R127') {
      var headerColumns = [];
      var check1 = 0;
      var check2 = 0;
      var check3 = 0;
      var check4 = 0;

      for (let k = 0; k < columnKey.length; k++) {


        if (check2 != 1 && columnKey[k] == "location_name") {
          check2 = 1;
          headerColumns.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
        }
        if (check3 != 1 && columnKey[k] == "sch_mgmt_name") {
          check3 = 1;
          headerColumns.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
        }
        if (check4 != 1 && columnKey[k] == "sch_category_name") {
          check4 = 1;
          headerColumns.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
        }
        if ((check1 != 1) && (columnKey[k] == "loco_motor_m" || columnKey[k] == "loco_motor_f" || columnKey[k] == "loco_motor" || columnKey[k] == "visuals_m" || columnKey[k] == "visuals_f" || columnKey[k] == "visuals" || columnKey[k] == "hearing_impaired_m" || columnKey[k] == "hearing_impaired_f" || columnKey[k] == "hearing_impaired" || columnKey[k] == "other_m" || columnKey[k] == "other_f" || columnKey[k] == "other")) {
          check1 = 1;
          headerColumns.push({ content: 'Disability Type', colSpan: colspan1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
        }
      }
    }

    
    if (this.reportCode == 'R119') {
      // var headerColumns = [];
      var colspan1 = 0;
      var colspan2 = 0;
      var colspan3 = 0;
      var colspan4 = 0;
      for (let k = 0; k < columnKey.length; k++) {

        //Primary
        if (columnKey[k] == "transition_rate_pri_to_upperPrimary_g" || columnKey[k] == "transition_rate_pri_to_upperPrimary_b" || columnKey[k] == "transition_rate_pri_to_upperPrimary_t") {
          colspan1 = colspan1 + 1;
        }
        //Upper Primary
        if (columnKey[k] == "transition_rate_elem_to_sec_g" || columnKey[k] == "transition_rate_elem_to_sec_b" || columnKey[k] == "transition_rate_elem_to_sec_t") {
          colspan2 = colspan2 + 1;
        }
        //Secondary
        if (columnKey[k] == "transition_rate_sec_to_hsec_g" || columnKey[k] == "transition_rate_sec_to_hsec_b" || columnKey[k] == "transition_rate_sec_to_hsec_t") {
          colspan3 = colspan3 + 1;
        }
        if (columnKey[k] == "transition_rate_pri_to_upperPrimary_g" || columnKey[k] == "transition_rate_pri_to_upperPrimary_b" || 
        columnKey[k] == "transition_rate_pri_to_upperPrimary_t" || columnKey[k] == "transition_rate_elem_to_sec_g" || 
        columnKey[k] == "transition_rate_elem_to_sec_b" || columnKey[k] == "transition_rate_elem_to_sec_t" || 
        columnKey[k] == "transition_rate_sec_to_hsec_g" || columnKey[k] == "transition_rate_sec_to_hsec_b" || 
        columnKey[k] == "transition_rate_sec_to_hsec_t") {
                colspan4 = colspan4 + 1;
              }
      }
    }

    if (this.reportCode == 'R119') {
      var headerColumns = [];
      var headerColumns1 = [];
      for (let k = 0; k < columnKey.length; k++) {

        var loc1;
        if (loc1 != 1 && columnKey[k] == "location_name") {
          loc1 = 1;
          headerColumns.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          headerColumns1.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
        }
        var loc2;
        if (loc2 != 1 && columnKey[k] == "broad_mgmt_name") {
          loc2 = 1;
          headerColumns.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          headerColumns1.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
        }
        var loc3;
        if (loc3 != 1 && columnKey[k] == "caste_name") {
          loc3 = 1;
          headerColumns.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          headerColumns1.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
        }
        var year1;
        if ((year1 != 1) && (columnKey[k] == "transition_rate_pri_to_upperPrimary_g" || columnKey[k] == "transition_rate_pri_to_upperPrimary_b" || columnKey[k] == "transition_rate_pri_to_upperPrimary_t")) {
          headerColumns.push({ content: 'Primary to Upper Primary (5 to 6)', colSpan: colspan1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          year1 = 1;
        }
        var year2;
        if ((year2 != 1) && (columnKey[k] == "transition_rate_elem_to_sec_g" || columnKey[k] == "transition_rate_elem_to_sec_b" || columnKey[k] == "transition_rate_elem_to_sec_t")) {
          headerColumns.push({ content: 'Elementary To Secondary (8 to 9)', colSpan: colspan2, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          year2 = 1;
        }
        var year3;
        if ((year3 != 1) && (columnKey[k] == "transition_rate_sec_to_hsec_g" || columnKey[k] == "transition_rate_sec_to_hsec_b" || columnKey[k] == "transition_rate_sec_to_hsec_t")) {
          headerColumns.push({ content: 'Secondary to Higher Secondary (10 to 11)', colSpan: colspan3, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          year3 = 1;
        }
        var reten;
        if ((reten != 1) && (columnKey[k] == "transition_rate_pri_to_upperPrimary_g" || columnKey[k] == "transition_rate_pri_to_upperPrimary_b" || 
        columnKey[k] == "transition_rate_pri_to_upperPrimary_t" || columnKey[k] == "transition_rate_elem_to_sec_g" || 
        columnKey[k] == "transition_rate_elem_to_sec_b" || columnKey[k] == "transition_rate_elem_to_sec_t" || 
        columnKey[k] == "transition_rate_sec_to_hsec_g" || columnKey[k] == "transition_rate_sec_to_hsec_b" || 
        columnKey[k] == "transition_rate_sec_to_hsec_t")) {
          headerColumns1.push({ content: 'Transition Rate', colSpan: colspan4, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          reten = 1
              }
      }
    }

    if (this.reportCode == 'R116') {
      // var headerColumns = [];
      var colspan1 = 0;
      var colspan2 = 0;
      var colspan3 = 0;
      for (let k = 0; k < columnKey.length; k++) {

        //Primary
        if (columnKey[k] == "pri_girls_repetitionRate" || columnKey[k] == "pri_boys_repetitionRate" || columnKey[k] == "pri_repetitionRate_all") {
          colspan1 = colspan1 + 1;
        }
        //Upper Primary
        if (columnKey[k] == "upperPri_girls_repetitionRate" || columnKey[k] == "upperPri_boys_repetitionRate" || columnKey[k] == "upperPri_repetitionRate_all") {
          colspan2 = colspan2 + 1;
        }
        //Secondary
        if (columnKey[k] == "sec_girls_repetitionRate" || columnKey[k] == "sec_boys_repetitionRate" || columnKey[k] == "sec_repetitionRate_all") {
          colspan3 = colspan3 + 1;
        }
      }
    }

    if (this.reportCode == 'R116') {
      var headerColumns = [];
      for (let k = 0; k < columnKey.length; k++) {

        var loc2;
        if (loc2 != 1 && columnKey[k] == "location_name") {
          loc2 = 1;
          headerColumns.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
        }
        var year7;
        if (year7 != 1 && columnKey[k] == "caste_name") {
          headerColumns.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          year7 = 1;
        }
        var year4;
        if ((year4 != 1) && (columnKey[k] == "pri_girls_repetitionRate" || columnKey[k] == "pri_boys_repetitionRate" || columnKey[k] == "pri_repetitionRate_all")) {
          headerColumns.push({ content: 'Repetition Rate Primary (I-V)', colSpan: colspan1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          year4 = 1;
        }
        var year5;
        if ((year5 != 1) && (columnKey[k] == "upperPri_girls_repetitionRate" || columnKey[k] == "upperPri_boys_repetitionRate" || columnKey[k] == "upperPri_repetitionRate_all")) {
          headerColumns.push({ content: 'Repetition Rate Upper Primary (VI-VIII)', colSpan: colspan2, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          year5 = 1;
        }
        var year6;
        if ((year6 != 1) && (columnKey[k] == "sec_girls_repetitionRate" || columnKey[k] == "sec_boys_repetitionRate" || columnKey[k] == "sec_repetitionRate_all")) {
          headerColumns.push({ content: 'Repetition Rate Secondary (IX-X)', colSpan: colspan3, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          year6 = 1;
        }
      }
    }

    if (this.reportCode == 'R117') {
      // var headerColumns = [];
      var colspan1 = 0;
      var colspan2 = 0;
      var colspan3 = 0;
      for (let k = 0; k < columnKey.length; k++) {

        //Primary
        if (columnKey[k] == "pri_girls_dropoutRate" || columnKey[k] == "pri_boys_dropoutRate" || columnKey[k] == "pri_dropoutRate_all") {
          colspan1 = colspan1 + 1;
        }
        //Upper Primary
        if (columnKey[k] == "upperPri_girls_dropoutRate" || columnKey[k] == "upperPri_boys_dropoutRate" || columnKey[k] == "upperPri_dropoutRate_all") {
          colspan2 = colspan2 + 1;
        }
        //Secondary
        if (columnKey[k] == "sec_girls_dropoutRate" || columnKey[k] == "sec_boys_dropoutRate" || columnKey[k] == "sec_dropoutRate_all") {
          colspan3 = colspan3 + 1;
        }
      }
    }

    if (this.reportCode == 'R117') {
      var headerColumns = [];
      for (let k = 0; k < columnKey.length; k++) {

        var loc21;
        if (loc21 != 1 && columnKey[k] == "location_name") {
          loc21 = 1;
          headerColumns.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
        }
        var year71;
        if (year71 != 1 && columnKey[k] == "caste_name") {
          headerColumns.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          year71 = 1;
        }
        var year41;
        if ((year41 != 1) && (columnKey[k] == "pri_girls_dropoutRate" || columnKey[k] == "pri_boys_dropoutRate" || columnKey[k] == "pri_dropoutRate_all")) {
          headerColumns.push({ content: 'Dropout Rate Primary (I-V)', colSpan: colspan1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          year41 = 1;
        }
        var year51;
        if ((year51 != 1) && (columnKey[k] == "upperPri_girls_dropoutRate" || columnKey[k] == "upperPri_boys_dropoutRate" || columnKey[k] == "upperPri_dropoutRate_all")) {
          headerColumns.push({ content: 'Droupout Rate Upper Primary (VI-VIII)', colSpan: colspan2, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          year51 = 1;
        }
        var year61;
        if ((year61 != 1) && (columnKey[k] == "sec_girls_dropoutRate" || columnKey[k] == "sec_boys_dropoutRate" || columnKey[k] == "sec_dropoutRate_all")) {
          // var colSpantest = 34
          headerColumns.push({ content: 'Droupout Rate Secondary (IX-X)', colSpan: colspan3, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          year61 = 1;
        }
      }
    }


    if (this.reportCode == 'R144' || this.reportCode == 'R145' || this.reportCode == 'R146') {

      var colspan1 = 0;
      var colspan2 = 0;
      var colspan3 = 0;
      var colspan4 = 0;
      var colspan5 = 0;
      var colspan6 = 0;
      var colspan7 = 0;
      var colspan8 = 0;
      var colspan9 = 0;
      var colspan10 = 0;
      var colspan11 = 0;
      var colspan12 = 0;
      var colspan13 = 0;
      var colspan14 = 0;
      var colspan15 = 0;
      var colspan16 = 0;
      var colspan17 = 0;
      var colspan18 = 0;
      var colspan19 = 0;
      var colspan20 = 0;
      var colspan21 = 0;
      var colspan22 = 0;
      var colspan23 = 0;
      var colspan24 = 0;
      var colspan25 = 0;
      var colspan26 = 0;
      var colspan27 = 0;
      var colspan28 = 0;
      var colspan29 = 0;
      var colspan30 = 0;
      var colspan31 = 0;
      var colspan32 = 0;
      var colspan33 = 0;
      var colspan34 = 0;
      var colspan35 = 0;
      var colspan36 = 0;
      var colspan37 = 0;

      for (let k = 0; k < columnKey.length; k++) {

        if (columnKey[k] == "promotionRate_g" || columnKey[k] == "promotionRate_b") {
          colspan1 = colspan1 + 1;
        }
        if (columnKey[k] == "repetitionRate_g" || columnKey[k] == "repetitionRate_b") {
          colspan2 = colspan2 + 1;
        }
        if (columnKey[k] == "dropOutRate_g" || columnKey[k] == "dropOutRate_b") {
          colspan3 = colspan3 + 1;
        }
        if (columnKey[k] == "promotionRate_c2_g" || columnKey[k] == "promotionRate_c2_b") {
          colspan4 = colspan4 + 1;
        }
        if (columnKey[k] == "repetitionRate_c2_g" || columnKey[k] == "repetitionRate_c2_b") {
          colspan5 = colspan5 + 1;
        }
        if (columnKey[k] == "dropOutRate_c2_g" || columnKey[k] == "dropOutRate_c2_b") {
          colspan33 = colspan33 + 1;
        }
        if (columnKey[k] == "promotionRate_c3_g" || columnKey[k] == "promotionRate_c3_b") {
          colspan6 = colspan6 + 1;
        }
        if (columnKey[k] == "repetitionRate_c3_g" || columnKey[k] == "repetitionRate_c3_b") {
          colspan7 = colspan7 + 1;
        }
        if (columnKey[k] == "dropOutRate_c3_g" || columnKey[k] == "dropOutRate_c3_b") {
          colspan8 = colspan8 + 1;
        }
        if (columnKey[k] == "promotionRate_c4_g" || columnKey[k] == "promotionRate_c4_b") {
          colspan9 = colspan9 + 1;
        }
        if (columnKey[k] == "repetitionRate_c4_g" || columnKey[k] == "repetitionRate_c4_b") {
          colspan10 = colspan10 + 1;
        }
        if (columnKey[k] == "dropOutRate_c4_g" || columnKey[k] == "dropOutRate_c4_b") {
          colspan11 = colspan11 + 1;
        }
        if (columnKey[k] == "promotionRate_c5_g" || columnKey[k] == "promotionRate_c5_b") {
          colspan12 = colspan12 + 1;
        }
        if (columnKey[k] == "repetitionRate_c5_g" || columnKey[k] == "repetitionRate_c5_b") {
          colspan13 = colspan13 + 1;
        }
        if (columnKey[k] == "dropOutRate_c5_g" || columnKey[k] == "dropOutRate_c5_b") {
          colspan14 = colspan14 + 1;
        }
        if (columnKey[k] == "promotionRate_c6_g" || columnKey[k] == "promotionRate_c6_b") {
          colspan15 = colspan15 + 1;
        }
        if (columnKey[k] == "repetitionRate_c6_g" || columnKey[k] == "repetitionRate_c6_b") {
          colspan16 = colspan16 + 1;
        }
        if (columnKey[k] == "dropOutRate_c6_g" || columnKey[k] == "dropOutRate_c6_b") {
          colspan17 = colspan17 + 1;
        }
        if (columnKey[k] == "promotionRate_c7_g" || columnKey[k] == "promotionRate_c7_b") {
          colspan18 = colspan18 + 1;
        }
        if (columnKey[k] == "repetitionRate_c7_g" || columnKey[k] == "repetitionRate_c7_b") {
          colspan19 = colspan19 + 1;
        }
        if (columnKey[k] == "dropOutRate_c7_g" || columnKey[k] == "dropOutRate_c7_b") {
          colspan20 = colspan20 + 1;
        }
        if (columnKey[k] == "promotionRate_c8_g" || columnKey[k] == "promotionRate_c8_b") {
          colspan21 = colspan21 + 1;
        }
        if (columnKey[k] == "repetitionRate_c8_g" || columnKey[k] == "repetitionRate_c8_b") {
          colspan22 = colspan22 + 1;
        }
        if (columnKey[k] == "dropOutRate_c8_g" || columnKey[k] == "dropOutRate_c8_b") {
          colspan23 = colspan23 + 1;
        }
        if (columnKey[k] == "promotionRate_c9_g" || columnKey[k] == "promotionRate_c9_b") {
          colspan24 = colspan24 + 1;
        }
        if (columnKey[k] == "repetitionRate_c9_g" || columnKey[k] == "repetitionRate_c9_b") {
          colspan25 = colspan25 + 1;
        }
        if (columnKey[k] == "dropOutRate_c9_g" || columnKey[k] == "dropOutRate_c9_b") {
          colspan26 = colspan26 + 1;
        }
        if (columnKey[k] == "promotionRate_c10_g" || columnKey[k] == "promotionRate_c10_b") {
          colspan27 = colspan27 + 1;
        }
        if (columnKey[k] == "repetitionRate_c10_g" || columnKey[k] == "repetitionRate_c10_b") {
          colspan28 = colspan28 + 1;
        }
        if (columnKey[k] == "dropOutRate_c10_g" || columnKey[k] == "dropOutRate_c10_b") {
          colspan29 = colspan29 + 1;
        }
        if (columnKey[k] == "promotionRate_c11_g" || columnKey[k] == "promotionRate_c11_b") {
          colspan30 = colspan30 + 1;
        }
        if (columnKey[k] == "repetitionRate_c11_g" || columnKey[k] == "repetitionRate_c11_b") {
          colspan31 = colspan31 + 1;
        }
        if (columnKey[k] == "dropOutRate_c11_g" || columnKey[k] == "dropOutRate_c11_b") {
          colspan32 = colspan32 + 1;
        }

        if (columnKey[k] == "promotionRate_g" || columnKey[k] == "promotionRate_b" ||
          columnKey[k] == "repetitionRate_g" || columnKey[k] == "repetitionRate_b" ||
          columnKey[k] == "dropOutRate_g" || columnKey[k] == "dropOutRate_b" ||
          columnKey[k] == "promotionRate_c2_g" || columnKey[k] == "promotionRate_c2_b" ||
          columnKey[k] == "repetitionRate_c2_g" || columnKey[k] == "repetitionRate_c2_b" ||
          columnKey[k] == "dropOutRate_c2_g" || columnKey[k] == "dropOutRate_c2_b" ||
          columnKey[k] == "promotionRate_c3_g" || columnKey[k] == "promotionRate_c3_b" ||
          columnKey[k] == "repetitionRate_c3_g" || columnKey[k] == "repetitionRate_c3_b" ||
          columnKey[k] == "dropOutRate_c3_g" || columnKey[k] == "dropOutRate_c3_b" ||
          columnKey[k] == "promotionRate_c4_g" || columnKey[k] == "promotionRate_c4_b" ||
          columnKey[k] == "repetitionRate_c4_g" || columnKey[k] == "repetitionRate_c4_b" ||
          columnKey[k] == "dropOutRate_c4_g" || columnKey[k] == "dropOutRate_c4_b" ||
          columnKey[k] == "promotionRate_c5_g" || columnKey[k] == "promotionRate_c5_b" ||
          columnKey[k] == "repetitionRate_c5_g" || columnKey[k] == "repetitionRate_c5_b" ||
          columnKey[k] == "dropOutRate_c5_g" || columnKey[k] == "dropOutRate_c5_b") {
          colspan34 = colspan34 + 1;
        }

        if (columnKey[k] == "promotionRate_c6_g" || columnKey[k] == "promotionRate_c6_b" ||
          columnKey[k] == "repetitionRate_c6_g" || columnKey[k] == "repetitionRate_c6_b" ||
          columnKey[k] == "dropOutRate_c6_g" || columnKey[k] == "dropOutRate_c6_b" ||
          columnKey[k] == "promotionRate_c7_g" || columnKey[k] == "promotionRate_c7_b" ||
          columnKey[k] == "repetitionRate_c7_g" || columnKey[k] == "repetitionRate_c7_b" ||
          columnKey[k] == "dropOutRate_c7_g" || columnKey[k] == "dropOutRate_c7_b" ||
          columnKey[k] == "promotionRate_c8_g" || columnKey[k] == "promotionRate_c8_b" ||
          columnKey[k] == "repetitionRate_c8_g" || columnKey[k] == "repetitionRate_c8_b" ||
          columnKey[k] == "dropOutRate_c8_g" || columnKey[k] == "dropOutRate_c8_b") {
          colspan35 = colspan35 + 1;
        }

        if (columnKey[k] == "promotionRate_c9_g" || columnKey[k] == "promotionRate_c9_b" ||
          columnKey[k] == "repetitionRate_c9_g" || columnKey[k] == "repetitionRate_c9_b" ||
          columnKey[k] == "dropOutRate_c9_g" || columnKey[k] == "dropOutRate_c9_b" ||
          columnKey[k] == "promotionRate_c10_g" || columnKey[k] == "promotionRate_c10_b" ||
          columnKey[k] == "repetitionRate_c10_g" || columnKey[k] == "repetitionRate_c10_b" ||
          columnKey[k] == "dropOutRate_c10_g" || columnKey[k] == "dropOutRate_c10_b") {
          colspan36 = colspan36 + 1;
        }

        if (columnKey[k] == "promotionRate_c11_g" || columnKey[k] == "promotionRate_c11_b" ||
          columnKey[k] == "repetitionRate_c11_g" || columnKey[k] == "repetitionRate_c11_b" ||
          columnKey[k] == "dropOutRate_c11_g" || columnKey[k] == "dropOutRate_c11_b") {
          colspan37 = colspan37 + 1;
        }
      }
    }

    if (this.reportCode == 'R144' || this.reportCode == 'R145' || this.reportCode == 'R146') {
      var headerColumns = [];
      var headerColumns1 = [];
      var check1 = 0;
      var check2 = 0;
      var check3 = 0;
      var check4 = 0;
      var check5 = 0;
      var check6 = 0;
      var check7 = 0;
      var check8 = 0;
      var check9 = 0;
      var check10 = 0;
      var check11 = 0;
      var check12 = 0;
      var check13 = 0;
      var check14 = 0;
      var check15 = 0;
      var check16 = 0;
      var check17 = 0;
      var check18 = 0;
      var check19 = 0;
      var check20 = 0;
      var check21 = 0;
      var check22 = 0;
      var check23 = 0;
      var check24 = 0;
      var check25 = 0;
      var check26 = 0;
      var check27 = 0;
      var check28 = 0;
      var check29 = 0;
      var check30 = 0;
      var check31 = 0;
      var check32 = 0;
      var check33 = 0;
      var check34 = 0;
      var check35 = 0;
      var check36 = 0;
      var check37 = 0;
      var check38 = 0;
      var check39 = 0;
      var check40 = 0;
      var check41 = 0;

      for (let k = 0; k < columnKey.length; k++) {

        if (check1 != 1 && columnKey[k] == "location") {
          check1 = 1;
          headerColumns.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          headerColumns1.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
        }
        if (check2 != 1 && columnKey[k] == "broad_mgmt_name") {
          check2 = 1;
          headerColumns.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          headerColumns1.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
        }
        if (check3 != 1 && columnKey[k] == "caste_name") {
          check3 = 1;
          headerColumns.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          headerColumns1.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
        }

        if ((check4 != 1) && (columnKey[k] == "promotionRate_g" || columnKey[k] == "promotionRate_b")) {
          headerColumns.push({ content: 'Promotion Rate - I', colSpan: colspan1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check4 = 1;
        }
        if ((check5 != 1) && (columnKey[k] == "repetitionRate_g" || columnKey[k] == "repetitionRate_b")) {
          headerColumns.push({ content: 'Repetition Rate - I', colSpan: colspan2, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check5 = 1;
        }
        if ((check6 != 1) && (columnKey[k] == "dropOutRate_g" || columnKey[k] == "dropOutRate_b")) {
          headerColumns.push({ content: 'Dropout Rate - I', colSpan: colspan3, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check6 = 1;
        }
        if ((check7 != 1) && (columnKey[k] == "promotionRate_c2_g" || columnKey[k] == "promotionRate_c2_b")) {
          headerColumns.push({ content: 'Promotion Rate - II', colSpan: colspan4, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check7 = 1;
        }
        if ((check8 != 1) && (columnKey[k] == "repetitionRate_c2_g" || columnKey[k] == "repetitionRate_c2_b")) {
          headerColumns.push({ content: 'Repetition Rate - II', colSpan: colspan5, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check8 = 1;
        }
        if ((check9 != 1) && (columnKey[k] == "dropOutRate_c2_g" || columnKey[k] == "dropOutRate_c2_b")) {
          headerColumns.push({ content: 'Dropout Rate - II', colSpan: colspan33, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check9 = 1;
        }
        if ((check10 != 1) && (columnKey[k] == "promotionRate_c3_g" || columnKey[k] == "promotionRate_c3_b")) {
          headerColumns.push({ content: 'Promotion Rate - III', colSpan: colspan6, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check10 = 1;
        }
        if ((check11 != 1) && (columnKey[k] == "repetitionRate_c3_g" || columnKey[k] == "repetitionRate_c3_b")) {
          headerColumns.push({ content: 'Repetition Rate - III', colSpan: colspan7, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check11 = 1;
        }
        if ((check12 != 1) && (columnKey[k] == "dropOutRate_c3_g" || columnKey[k] == "dropOutRate_c3_b")) {
          headerColumns.push({ content: 'Dropout Rate - III', colSpan: colspan8, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check12 = 1;
        }
        if ((check13 != 1) && (columnKey[k] == "promotionRate_c4_g" || columnKey[k] == "promotionRate_c4_b")) {
          headerColumns.push({ content: 'Promotion Rate - IV', colSpan: colspan9, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check13 = 1;
        }
        if ((check14 != 1) && (columnKey[k] == "repetitionRate_c4_g" || columnKey[k] == "repetitionRate_c4_b")) {
          headerColumns.push({ content: 'Repetition Rate - IV', colSpan: colspan10, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check14 = 1;
        }
        if ((check15 != 1) && (columnKey[k] == "dropOutRate_c4_g" || columnKey[k] == "dropOutRate_c4_b")) {
          headerColumns.push({ content: 'Dropout Rate - IV', colSpan: colspan11, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check15 = 1;
        }
        if ((check16 != 1) && (columnKey[k] == "promotionRate_c5_g" || columnKey[k] == "promotionRate_c5_b")) {
          headerColumns.push({ content: 'Promotion Rate - V', colSpan: colspan12, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check16 = 1;
        }
        if ((check17 != 1) && (columnKey[k] == "repetitionRate_c5_g" || columnKey[k] == "repetitionRate_c5_b")) {
          headerColumns.push({ content: 'Repetition Rate - V', colSpan: colspan13, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check17 = 1;
        }
        if ((check18 != 1) && (columnKey[k] == "dropOutRate_c5_g" || columnKey[k] == "dropOutRate_c5_b")) {
          headerColumns.push({ content: 'Dropout Rate - V', colSpan: colspan14, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check18 = 1;
        } if ((check19 != 1) && (columnKey[k] == "promotionRate_c6_g" || columnKey[k] == "promotionRate_c6_b")) {
          headerColumns.push({ content: 'Promotion Rate - VI', colSpan: colspan15, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check19 = 1;
        }
        if ((check20 != 1) && (columnKey[k] == "repetitionRate_c6_g" || columnKey[k] == "repetitionRate_c6_b")) {
          headerColumns.push({ content: 'Repetition Rate - VI', colSpan: colspan16, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check20 = 1;
        }
        if ((check21 != 1) && (columnKey[k] == "dropOutRate_c6_g" || columnKey[k] == "dropOutRate_c6_b")) {
          headerColumns.push({ content: 'Dropout Rate - VI', colSpan: colspan17, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check21 = 1;
        }
        if ((check22 != 1) && (columnKey[k] == "promotionRate_c7_g" || columnKey[k] == "promotionRate_c7_b")) {
          headerColumns.push({ content: 'Promotion Rate - VII', colSpan: colspan18, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check22 = 1;
        }
        if ((check23 != 1) && (columnKey[k] == "repetitionRate_c7_g" || columnKey[k] == "repetitionRate_c7_b")) {
          headerColumns.push({ content: 'Repetition Rate - VII', colSpan: colspan19, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check23 = 1;
        }
        if ((check24 != 1) && (columnKey[k] == "dropOutRate_c7_g" || columnKey[k] == "dropOutRate_c7_b")) {
          headerColumns.push({ content: 'Dropout Rate - VII', colSpan: colspan20, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check24 = 1;
        }
        if ((check25 != 1) && (columnKey[k] == "promotionRate_c8_g" || columnKey[k] == "promotionRate_c8_b")) {
          headerColumns.push({ content: 'Promotion Rate - VIII', colSpan: colspan21, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check25 = 1;
        }
        if ((check26 != 1) && (columnKey[k] == "repetitionRate_c8_g" || columnKey[k] == "repetitionRate_c8_b")) {
          headerColumns.push({ content: 'Repetition Rate - VIII', colSpan: colspan22, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check26 = 1;
        }
        if ((check27 != 1) && (columnKey[k] == "dropOutRate_c8_g" || columnKey[k] == "dropOutRate_c8_b")) {
          headerColumns.push({ content: 'Dropout Rate - VIII', colSpan: colspan23, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check27 = 1;
        }
        if ((check28 != 1) && (columnKey[k] == "promotionRate_c9_g" || columnKey[k] == "promotionRate_c9_b")) {
          headerColumns.push({ content: 'Promotion Rate - IX', colSpan: colspan24, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check28 = 1;
        }
        if ((check29 != 1) && (columnKey[k] == "repetitionRate_c9_g" || columnKey[k] == "repetitionRate_c9_b")) {
          headerColumns.push({ content: 'Repetition Rate - IX', colSpan: colspan25, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check29 = 1;
        }
        if ((check30 != 1) && (columnKey[k] == "dropOutRate_c9_g" || columnKey[k] == "dropOutRate_c9_b")) {
          headerColumns.push({ content: 'Dropout Rate - IX', colSpan: colspan26, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check30 = 1;
        }
        if ((check31 != 1) && (columnKey[k] == "promotionRate_c10_g" || columnKey[k] == "promotionRate_c10_b")) {
          headerColumns.push({ content: 'Promotion Rate - X', colSpan: colspan27, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check31 = 1;
        }
        if ((check32 != 1) && (columnKey[k] == "repetitionRate_c10_g" || columnKey[k] == "repetitionRate_c10_b")) {
          headerColumns.push({ content: 'Repetition Rate - X', colSpan: colspan28, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check32 = 1;
        }
        if ((check33 != 1) && (columnKey[k] == "dropOutRate_c10_g" || columnKey[k] == "dropOutRate_c10_b")) {
          headerColumns.push({ content: 'Dropout Rate - X', colSpan: colspan29, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check33 = 1;
        }
        if ((check34 != 1) && (columnKey[k] == "promotionRate_c11_g" || columnKey[k] == "promotionRate_c11_b")) {
          headerColumns.push({ content: 'Promotion Rate - XI', colSpan: colspan30, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check34 = 1;
        }
        if ((check35 != 1) && (columnKey[k] == "repetitionRate_c11_g" || columnKey[k] == "repetitionRate_c11_b")) {
          headerColumns.push({ content: 'Repetition Rate - XI', colSpan: colspan31, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check35 = 1;
        }
        if ((check37 != 1) && (columnKey[k] == "dropOutRate_c11_g" || columnKey[k] == "dropOutRate_c11_b")) {
          headerColumns.push({ content: 'Dropout Rate - XI', colSpan: colspan32, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check37 = 1;
        }


        if ((check38 != 1) && (columnKey[k] == "promotionRate_g" || columnKey[k] == "promotionRate_b" ||
          columnKey[k] == "repetitionRate_g" || columnKey[k] == "repetitionRate_b" ||
          columnKey[k] == "dropOutRate_g" || columnKey[k] == "dropOutRate_b" ||
          columnKey[k] == "promotionRate_c2_g" || columnKey[k] == "promotionRate_c2_b" ||
          columnKey[k] == "repetitionRate_c2_g" || columnKey[k] == "repetitionRate_c2_b" ||
          columnKey[k] == "dropOutRate_c2_g" || columnKey[k] == "dropOutRate_c2_b" ||
          columnKey[k] == "promotionRate_c3_g" || columnKey[k] == "promotionRate_c3_b" ||
          columnKey[k] == "repetitionRate_c3_g" || columnKey[k] == "repetitionRate_c3_b" ||
          columnKey[k] == "dropOutRate_c3_g" || columnKey[k] == "dropOutRate_c3_b" ||
          columnKey[k] == "promotionRate_c4_g" || columnKey[k] == "promotionRate_c4_b" ||
          columnKey[k] == "repetitionRate_c4_g" || columnKey[k] == "repetitionRate_c4_b" ||
          columnKey[k] == "dropOutRate_c4_g" || columnKey[k] == "dropOutRate_c4_b" ||
          columnKey[k] == "promotionRate_c5_g" || columnKey[k] == "promotionRate_c5_b" ||
          columnKey[k] == "repetitionRate_c5_g" || columnKey[k] == "repetitionRate_c5_b" ||
          columnKey[k] == "dropOutRate_c5_g" || columnKey[k] == "dropOutRate_c5_b")) {
          headerColumns1.push({ content: 'Primary', colSpan: colspan34, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check38 = 1;
        }

        if ((check39 != 1) && (columnKey[k] == "promotionRate_c6_g" || columnKey[k] == "promotionRate_c6_b" ||
          columnKey[k] == "repetitionRate_c6_g" || columnKey[k] == "repetitionRate_c6_b" ||
          columnKey[k] == "dropOutRate_c6_g" || columnKey[k] == "dropOutRate_c6_b" ||
          columnKey[k] == "promotionRate_c7_g" || columnKey[k] == "promotionRate_c7_b" ||
          columnKey[k] == "repetitionRate_c7_g" || columnKey[k] == "repetitionRate_c7_b" ||
          columnKey[k] == "dropOutRate_c7_g" || columnKey[k] == "dropOutRate_c7_b" ||
          columnKey[k] == "promotionRate_c8_g" || columnKey[k] == "promotionRate_c8_b" ||
          columnKey[k] == "repetitionRate_c8_g" || columnKey[k] == "repetitionRate_c8_b" ||
          columnKey[k] == "dropOutRate_c8_g" || columnKey[k] == "dropOutRate_c8_b")) {
          headerColumns1.push({ content: 'Upper Primary', colSpan: colspan35, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check39 = 1;
        }

        if ((check40 != 1) && (columnKey[k] == "promotionRate_c9_g" || columnKey[k] == "promotionRate_c9_b" ||
          columnKey[k] == "repetitionRate_c9_g" || columnKey[k] == "repetitionRate_c9_b" ||
          columnKey[k] == "dropOutRate_c9_g" || columnKey[k] == "dropOutRate_c9_b" ||
          columnKey[k] == "promotionRate_c10_g" || columnKey[k] == "promotionRate_c10_b" ||
          columnKey[k] == "repetitionRate_c10_g" || columnKey[k] == "repetitionRate_c10_b" ||
          columnKey[k] == "dropOutRate_c10_g" || columnKey[k] == "dropOutRate_c10_b")) {
          headerColumns1.push({ content: 'Secondary', colSpan: colspan36, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check40 = 1;
        }

        if ((check41 != 1) && (columnKey[k] == "promotionRate_c11_g" || columnKey[k] == "promotionRate_c11_b" ||
          columnKey[k] == "repetitionRate_c11_g" || columnKey[k] == "repetitionRate_c11_b" ||
          columnKey[k] == "dropOutRate_c11_g" || columnKey[k] == "dropOutRate_c11_b")) {
          headerColumns1.push({ content: 'Higher Secondary', colSpan: colspan37, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check41 = 1;
        }
      }
    }

    if (this.reportCode == 'R113') {
      var headerColumns = [];
      var primary = 0;
      var upperPrimary = 0;
      var secondary = 0;
      var colspan1 = 0;
      var colspan2 = 0;
      var colspan3 = 0;
      var colspan4 = 0;
      var colspan5 = 0;
      var colspan6 = 0;
      var colspan7 = 0;
      var colspan8 = 0;
      var colspan9 = 0;
      var colspan10 = 0;
      var colspan11 = 0;
      var colspan12 = 0;
      var colspan13 = 0;
      var colspan14 = 0;
      var colspan15 = 0;
      var colspan16 = 0;
      var colspan17 = 0;
      var colspan18 = 0;
      var colspan19 = 0;
      var colspan20 = 0;
      var colspan21 = 0;
      var colspan22 = 0;
      var colspan23 = 0;
      var colspan24 = 0;
      for (let k = 0; k < columnKey.length; k++) {


        if (columnKey[k] == "pri_girl_c2_c6_current" || columnKey[k] == "pri_boy_c2_c6_current" || columnKey[k] == "pri_c2_c6_current" ||
          columnKey[k] == "pri_girl_c2_c6_current_rptr" || columnKey[k] == "pri_boy_c2_c6_current_rptr" || columnKey[k] == "pri_c2_c6_current_rptr" ||
          columnKey[k] == "pri_girl_c2_c6_current_fresh" || columnKey[k] == "pri_boy_c2_c6_current_fresh" || columnKey[k] == "pri_c2_c6_current_fresh" ||
          columnKey[k] == "pri_girl_c1_c5_current_rptr" || columnKey[k] == "pri_boy_c1_c5_current_rptr" || columnKey[k] == "pri_c1_c5_current_rptr" ||
          columnKey[k] == "pri_girl_c1_c5_previous" || columnKey[k] == "pri_boy_c1_c5_previous" || columnKey[k] == "pri_c1_c5_previous" ||
          columnKey[k] == "pri_girls_promotionRate" || columnKey[k] == "pri_boys_promotionRate" || columnKey[k] == "pri_promotionRate_all" ||
          columnKey[k] == "pri_girls_repetitionRate" || columnKey[k] == "pri_boys_repetitionRate" || columnKey[k] == "pri_repetitionRate_all" ||
          columnKey[k] == "pri_girls_dropoutRate" || columnKey[k] == "pri_boys_dropoutRate" || columnKey[k] == "pri_dropoutRate_all") {
          // headerColumns.push({ content: 'Primary', colSpan: 24, styles: { halign: 'center', fillColor: [22, 160, 133] } });        
          // year41 = 1;
          primary = primary + 1;
        }
        // var year51;

        if (columnKey[k] == "upper_pri_girl_c7_c9_current" || columnKey[k] == "upper_pri_boy_c7_c9_current" || columnKey[k] == "upper_pri_c7_c9_current" ||
          columnKey[k] == "upper_pri_girl_c7_c9_current_rptr" || columnKey[k] == "upper_pri_boy_c7_c9_current_rptr" || columnKey[k] == "upper_pri_c7_c9_current_rptr" ||
          columnKey[k] == "upper_pri_girl_c7_c9_current_fresh" || columnKey[k] == "upper_pri_boy_c7_c9_current_fresh" || columnKey[k] == "upper_pri_c7_c9_current_fresh" ||
          columnKey[k] == "upper_pri_girl_c6_c8_current_rptr" || columnKey[k] == "upper_pri_boy_c6_c8_current_rptr" || columnKey[k] == "upper_pri_c6_c8_current_rptr" ||
          columnKey[k] == "upper_pri_girl_c6_c8_previous" || columnKey[k] == "upper_pri_boy_c6_c8_previous" || columnKey[k] == "upper_pri_c6_c8_previous" ||
          columnKey[k] == "upperPri_girls_promotionRate" || columnKey[k] == "upperPri_boys_promotionRate" || columnKey[k] == "upperPri_promotionRate_all" ||
          columnKey[k] == "upperPri_girls_repetitionRate" || columnKey[k] == "upperPri_boys_repetitionRate" || columnKey[k] == "upperPri_repetitionRate_all" ||
          columnKey[k] == "upperPri_girls_dropoutRate" || columnKey[k] == "upperPri_boys_dropoutRate" || columnKey[k] == "upperPri_dropoutRate_all") {
          // headerColumns.push({ content: 'Upper Primary', colSpan: 24, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          upperPrimary = upperPrimary + 1;
          // year51 = 1;
        }
        // var year61;

        if (columnKey[k] == "secondary_girl_c10_c11_current" || columnKey[k] == "secondary_boy_c10_c11_current" || columnKey[k] == "secondary_c10_c11_current" ||
          columnKey[k] == "secondary_girl_c10_c11_current_rptr" || columnKey[k] == "secondary_boy_c10_c11_current_rptr" || columnKey[k] == "secondary_c10_c11_current_rptr" ||
          columnKey[k] == "secondary_girl_c10_c11_current_fresh" || columnKey[k] == "secondary_boy_c10_c11_current_fresh" || columnKey[k] == "secondary_c10_c11_current_fresh" ||
          columnKey[k] == "secondary_girl_c9_c10_current_rptr" || columnKey[k] == "secondary_boy_c9_c10_current_rptr" || columnKey[k] == "secondary_c9_c10_current_rptr" ||
          columnKey[k] == "secondary_girl_c9_c10_previous" || columnKey[k] == "secondary_boy_c9_c10_previous" || columnKey[k] == "secondary_c9_c10_previous" ||
          columnKey[k] == "sec_girls_promotionRate" || columnKey[k] == "sec_boys_promotionRate" || columnKey[k] == "sec_promotionRate_all" ||
          columnKey[k] == "sec_girls_repetitionRate" || columnKey[k] == "sec_boys_repetitionRate" || columnKey[k] == "sec_repetitionRate_all" ||
          columnKey[k] == "sec_girls_dropoutRate" || columnKey[k] == "sec_boys_dropoutRate" || columnKey[k] == "sec_dropoutRate_all") {
          // headerColumns.push({ content: 'Secondary', colSpan: 24, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          secondary = secondary + 1;
          // year61 = 1;
        }

        //Primary
        if (columnKey[k] == "pri_girl_c2_c6_current" || columnKey[k] == "pri_boy_c2_c6_current" || columnKey[k] == "pri_c2_c6_current") {
          colspan1 = colspan1 + 1;
        }
        if (columnKey[k] == "pri_girl_c2_c6_current_rptr" || columnKey[k] == "pri_boy_c2_c6_current_rptr" || columnKey[k] == "pri_c2_c6_current_rptr") {
          colspan2 = colspan2 + 1;
        }
        if (columnKey[k] == "pri_girl_c2_c6_current_fresh" || columnKey[k] == "pri_boy_c2_c6_current_fresh" || columnKey[k] == "pri_c2_c6_current_fresh") {
          colspan3 = colspan3 + 1;
        }
        if (columnKey[k] == "pri_girl_c1_c5_current_rptr" || columnKey[k] == "pri_boy_c1_c5_current_rptr" || columnKey[k] == "pri_c1_c5_current_rptr") {
          colspan4 = colspan4 + 1;
        }
        if (columnKey[k] == "pri_girl_c1_c5_previous" || columnKey[k] == "pri_boy_c1_c5_previous" || columnKey[k] == "pri_c1_c5_previous") {
          colspan5 = colspan5 + 1;
        }
        if (columnKey[k] == "pri_girls_promotionRate" || columnKey[k] == "pri_boys_promotionRate" || columnKey[k] == "pri_promotionRate_all") {
          colspan6 = colspan6 + 1;
        }
        if (columnKey[k] == "pri_girls_repetitionRate" || columnKey[k] == "pri_boys_repetitionRate" || columnKey[k] == "pri_repetitionRate_all") {
          colspan7 = colspan7 + 1;
        }
        if (columnKey[k] == "pri_girls_dropoutRate" || columnKey[k] == "pri_boys_dropoutRate" || columnKey[k] == "pri_dropoutRate_all") {
          colspan8 = colspan8 + 1;
        }


        //Upper Primary
        if (columnKey[k] == "upper_pri_girl_c7_c9_current" || columnKey[k] == "upper_pri_boy_c7_c9_current" || columnKey[k] == "upper_pri_c7_c9_current") {
          colspan9 = colspan9 + 1;
        }
        if (columnKey[k] == "upper_pri_girl_c7_c9_current_rptr" || columnKey[k] == "upper_pri_boy_c7_c9_current_rptr" || columnKey[k] == "upper_pri_c7_c9_current_rptr") {
          colspan10 = colspan10 + 1;
        }
        if (columnKey[k] == "upper_pri_girl_c7_c9_current_fresh" || columnKey[k] == "upper_pri_boy_c7_c9_current_fresh" || columnKey[k] == "upper_pri_c7_c9_current_fresh") {
          colspan11 = colspan11 + 1;
        }
        if (columnKey[k] == "upper_pri_girl_c6_c8_current_rptr" || columnKey[k] == "upper_pri_boy_c6_c8_current_rptr" || columnKey[k] == "upper_pri_c6_c8_current_rptr") {
          colspan12 = colspan12 + 1;
        }
        if (columnKey[k] == "upper_pri_girl_c6_c8_previous" || columnKey[k] == "upper_pri_boy_c6_c8_previous" || columnKey[k] == "upper_pri_c6_c8_previous") {
          colspan13 = colspan13 + 1;
        }
        if (columnKey[k] == "upperPri_girls_promotionRate" || columnKey[k] == "upperPri_boys_promotionRate" || columnKey[k] == "upperPri_promotionRate_all") {
          colspan14 = colspan14 + 1;
        }
        if (columnKey[k] == "upperPri_girls_repetitionRate" || columnKey[k] == "upperPri_boys_repetitionRate" || columnKey[k] == "upperPri_repetitionRate_all") {
          colspan15 = colspan15 + 1;
        }
        if (columnKey[k] == "upperPri_girls_dropoutRate" || columnKey[k] == "upperPri_boys_dropoutRate" || columnKey[k] == "upperPri_dropoutRate_all") {
          colspan16 = colspan16 + 1;
        }


        //Secondary
        if (columnKey[k] == "secondary_girl_c10_c11_current" || columnKey[k] == "secondary_boy_c10_c11_current" || columnKey[k] == "secondary_c10_c11_current") {
          colspan17 = colspan17 + 1;
        }
        if (columnKey[k] == "secondary_girl_c10_c11_current_rptr" || columnKey[k] == "secondary_boy_c10_c11_current_rptr" || columnKey[k] == "secondary_c10_c11_current_rptr") {
          colspan18 = colspan18 + 1;
        }
        if (columnKey[k] == "secondary_girl_c10_c11_current_fresh" || columnKey[k] == "secondary_boy_c10_c11_current_fresh" || columnKey[k] == "secondary_c10_c11_current_fresh") {
          colspan19 = colspan19 + 1;
        }
        if (columnKey[k] == "secondary_girl_c9_c10_current_rptr" || columnKey[k] == "secondary_boy_c9_c10_current_rptr" || columnKey[k] == "secondary_c9_c10_current_rptr") {
          colspan20 = colspan20 + 1;
        }
        if (columnKey[k] == "secondary_girl_c9_c10_previous" || columnKey[k] == "secondary_boy_c9_c10_previous" || columnKey[k] == "secondary_c9_c10_previous") {
          colspan21 = colspan21 + 1;
        }
        if (columnKey[k] == "sec_girls_promotionRate" || columnKey[k] == "sec_boys_promotionRate" || columnKey[k] == "sec_promotionRate_all") {
          colspan22 = colspan22 + 1;
        }
        if (columnKey[k] == "sec_girls_repetitionRate" || columnKey[k] == "sec_boys_repetitionRate" || columnKey[k] == "sec_repetitionRate_all") {
          colspan23 = colspan23 + 1;
        }
        if (columnKey[k] == "sec_girls_dropoutRate" || columnKey[k] == "sec_boys_dropoutRate" || columnKey[k] == "sec_dropoutRate_all") {
          colspan24 = colspan24 + 1;
        }
      }
    }


    if (this.reportCode == 'R102') {
      // var headerColumns = [];
      var colspan1 = 0;
      var colspan2 = 0;
      var colspan3 = 0;
      var colspan4 = 0;
      var colspan5 = 0;
      for (let k = 0; k < columnKey.length; k++) {

        if (columnKey[k] == "ner_primary_girl" || columnKey[k] == "ner_primary_boy" || columnKey[k] == "ner_primary_all") {
          colspan1 = colspan1 + 1;
        }
        if (columnKey[k] == "ner_upper_primary_girl" || columnKey[k] == "ner_upper_primary_boy" || columnKey[k] == "ner_upper_primary_all") {
          colspan2 = colspan2 + 1;
        }
        if (columnKey[k] == "ner_elementary_girl" || columnKey[k] == "ner_elementary_boy" || columnKey[k] == "ner_elementary_all") {
          colspan3 = colspan3 + 1;
        }
        if (columnKey[k] == "ner_secondary_girl" || columnKey[k] == "ner_secondary_boy" || columnKey[k] == "ner_secondary_all") {
          colspan4 = colspan4 + 1;
        }
        if (columnKey[k] == "ner_higher_secondary_girl" || columnKey[k] == "ner_higher_secondary_boy" || columnKey[k] == "ner_higher_secondary_all") {
          colspan5 = colspan5 + 1;
        }
      }
    }



    if (this.reportCode == 'R102') {
      var headerColumns = [];
      var check1 = 0;
      var check2 = 0;
      var check3 = 0;
      var check4 = 0;
      var check5 = 0;
      var check6 = 0;
      for (let k = 0; k < columnKey.length; k++) {


        if (check1 != 1 && columnKey[k] == "location_name") {
          check1 = 1;
          headerColumns.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
        }

        if ((check2 != 1) && (columnKey[k] == "ner_primary_girl" || columnKey[k] == "ner_primary_boy" || columnKey[k] == "ner_primary_all")) {
          headerColumns.push({ content: 'Primary (I-V)', colSpan: colspan1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check2 = 1;
        }

        if ((check3 != 1) && (columnKey[k] == "ner_upper_primary_girl" || columnKey[k] == "ner_upper_primary_boy" || columnKey[k] == "ner_upper_primary_all")) {
          headerColumns.push({ content: 'Upper Primary (VI-VIII)', colSpan: colspan2, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check3 = 1;
        }

        if ((check4 != 1) && (columnKey[k] == "ner_elementary_girl" || columnKey[k] == "ner_elementary_boy" || columnKey[k] == "ner_elementary_all")) {
          headerColumns.push({ content: 'Elementary (I-VIII)', colSpan: colspan3, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check4 = 1;
        }

        if ((check5 != 1) && (columnKey[k] == "ner_secondary_girl" || columnKey[k] == "ner_secondary_boy" || columnKey[k] == "ner_secondary_all")) {
          headerColumns.push({ content: 'Secondary (IX-X)', colSpan: colspan4, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check5 = 1;
        }

        if ((check6 != 1) && (columnKey[k] == "ner_higher_secondary_girl" || columnKey[k] == "ner_higher_secondary_boy" || columnKey[k] == "ner_higher_secondary_all")) {
          headerColumns.push({ content: 'Higher Secondary (XI-XII)', colSpan: colspan5, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check6 = 1;
        }
      }
    }

    if (this.reportCode == 'R113') {
      var headerColumns = [];
      var check1 = 0;
      var check2 = 0;
      var check3 = 0;
      var check4 = 0;
      var check5 = 0;

      for (let k = 0; k < columnKey.length; k++) {

        // var primary = 0;
        // var year411;
        if ((check1 != 1) && (columnKey[k] == "location_name")) {
          headerColumns.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check1 = 1;
        }

        if ((check2 != 1) && (columnKey[k] == "caste_name")) {
          headerColumns.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check2 = 1;
        }

        if ((check3 != 1) && (columnKey[k] == "pri_girl_c2_c6_current" || columnKey[k] == "pri_boy_c2_c6_current" || columnKey[k] == "pri_c2_c6_current" ||
          columnKey[k] == "pri_girl_c2_c6_current_rptr" || columnKey[k] == "pri_boy_c2_c6_current_rptr" || columnKey[k] == "pri_c2_c6_current_rptr" ||
          columnKey[k] == "pri_girl_c2_c6_current_fresh" || columnKey[k] == "pri_boy_c2_c6_current_fresh" || columnKey[k] == "pri_c2_c6_current_fresh" ||
          columnKey[k] == "pri_girl_c1_c5_current_rptr" || columnKey[k] == "pri_boy_c1_c5_current_rptr" || columnKey[k] == "pri_c1_c5_current_rptr" ||
          columnKey[k] == "pri_girl_c1_c5_previous" || columnKey[k] == "pri_boy_c1_c5_previous" || columnKey[k] == "pri_c1_c5_previous" ||
          columnKey[k] == "pri_girls_promotionRate" || columnKey[k] == "pri_boys_promotionRate" || columnKey[k] == "pri_promotionRate_all" ||
          columnKey[k] == "pri_girls_repetitionRate" || columnKey[k] == "pri_boys_repetitionRate" || columnKey[k] == "pri_repetitionRate_all" ||
          columnKey[k] == "pri_girls_dropoutRate" || columnKey[k] == "pri_boys_dropoutRate" || columnKey[k] == "pri_dropoutRate_all")) {
          headerColumns.push({ content: 'Primary', colSpan: primary, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check3 = 1;
          // primary = primary + 1;
        }
        // var year51;
        // var upperPrimary = 0;
        if ((check4 != 1) && (columnKey[k] == "upper_pri_girl_c7_c9_current" || columnKey[k] == "upper_pri_boy_c7_c9_current" || columnKey[k] == "upper_pri_c7_c9_current" ||
          columnKey[k] == "upper_pri_girl_c7_c9_current_rptr" || columnKey[k] == "upper_pri_boy_c7_c9_current_rptr" || columnKey[k] == "upper_pri_c7_c9_current_rptr" ||
          columnKey[k] == "upper_pri_girl_c7_c9_current_fresh" || columnKey[k] == "upper_pri_boy_c7_c9_current_fresh" || columnKey[k] == "upper_pri_c7_c9_current_fresh" ||
          columnKey[k] == "upper_pri_girl_c6_c8_current_rptr" || columnKey[k] == "upper_pri_boy_c6_c8_current_rptr" || columnKey[k] == "upper_pri_c6_c8_current_rptr" ||
          columnKey[k] == "upper_pri_girl_c6_c8_previous" || columnKey[k] == "upper_pri_boy_c6_c8_previous" || columnKey[k] == "upper_pri_c6_c8_previous" ||
          columnKey[k] == "upperPri_girls_promotionRate" || columnKey[k] == "upperPri_boys_promotionRate" || columnKey[k] == "upperPri_promotionRate_all" ||
          columnKey[k] == "upperPri_girls_repetitionRate" || columnKey[k] == "upperPri_boys_repetitionRate" || columnKey[k] == "upperPri_repetitionRate_all" ||
          columnKey[k] == "upperPri_girls_dropoutRate" || columnKey[k] == "upperPri_boys_dropoutRate" || columnKey[k] == "upperPri_dropoutRate_all")) {
          headerColumns.push({ content: 'Upper Primary', colSpan: upperPrimary, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check4 = 1;
          // upperPrimary = upperPrimary +1;
          // year51 = 1;
        }
        // var year61;
        // var secondary = 0;
        if ((check5 != 1) && (columnKey[k] == "secondary_girl_c10_c11_current" || columnKey[k] == "secondary_boy_c10_c11_current" || columnKey[k] == "secondary_c10_c11_current" ||
          columnKey[k] == "secondary_girl_c10_c11_current_rptr" || columnKey[k] == "secondary_boy_c10_c11_current_rptr" || columnKey[k] == "secondary_c10_c11_current_rptr" ||
          columnKey[k] == "secondary_girl_c10_c11_current_fresh" || columnKey[k] == "secondary_boy_c10_c11_current_fresh" || columnKey[k] == "secondary_c10_c11_current_fresh" ||
          columnKey[k] == "secondary_girl_c9_c10_current_rptr" || columnKey[k] == "secondary_boy_c9_c10_current_rptr" || columnKey[k] == "secondary_c9_c10_current_rptr" ||
          columnKey[k] == "secondary_girl_c9_c10_previous" || columnKey[k] == "secondary_boy_c9_c10_previous" || columnKey[k] == "secondary_c9_c10_previous" ||
          columnKey[k] == "sec_girls_promotionRate" || columnKey[k] == "sec_boys_promotionRate" || columnKey[k] == "sec_promotionRate_all" ||
          columnKey[k] == "sec_girls_repetitionRate" || columnKey[k] == "sec_boys_repetitionRate" || columnKey[k] == "sec_repetitionRate_all" ||
          columnKey[k] == "sec_girls_dropoutRate" || columnKey[k] == "sec_boys_dropoutRate" || columnKey[k] == "sec_dropoutRate_all")) {
          headerColumns.push({ content: 'Secondary', colSpan: secondary, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check5 = 1;
          // secondary = secondary+1;
          // year61 = 1;
        }
      }
    }

    if (this.reportCode == 'R113') {

      var headerColumns1 = [];
      var check1 = 0;
      var check2 = 0;
      var check3 = 0;
      var check4 = 0;
      var check5 = 0;
      var check6 = 0;
      var check7 = 0;
      var check8 = 0;
      var check9 = 0;
      var check10 = 0;
      var check11 = 0;
      var check12 = 0;
      var check13 = 0;
      var check14 = 0;
      var check15 = 0;
      var check16 = 0;
      var check17 = 0;
      var check18 = 0;
      var check19 = 0;
      var check20 = 0;
      var check21 = 0;
      var check22 = 0;
      var check23 = 0;
      var check24 = 0;
      var check25 = 0;
      var check26 = 0;


      for (let k = 0; k < columnKey.length; k++) {


        if ((check1 != 1) && (columnKey[k] == "location_name")) {
          headerColumns1.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } })
          check1 = 1;
        }
        if ((check2 != 1) && (columnKey[k] == "caste_name")) {
          headerColumns1.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } })
          check2 = 1;
        }

        //Primary
        if ((check3 != 1) && (columnKey[k] == "pri_girl_c2_c6_current" || columnKey[k] == "pri_boy_c2_c6_current" || columnKey[k] == "pri_c2_c6_current")) {
          headerColumns1.push({ content: 'Enrolment II to VI', colSpan: colspan1, styles: { halign: 'center', fillColor: [22, 160, 133] } })
          check3 = 1;
        }
        if ((check4 != 1) && (columnKey[k] == "pri_girl_c2_c6_current_rptr" || columnKey[k] == "pri_boy_c2_c6_current_rptr" || columnKey[k] == "pri_c2_c6_current_rptr")) {
          headerColumns1.push({ content: 'Repeater II to VI', colSpan: colspan2, styles: { halign: 'center', fillColor: [22, 160, 133] } })
          check4 = 1;
        }
        if ((check5 != 1) && (columnKey[k] == "pri_girl_c2_c6_current_fresh" || columnKey[k] == "pri_boy_c2_c6_current_fresh" || columnKey[k] == "pri_c2_c6_current_fresh")) {
          headerColumns1.push({ content: 'Fresh Enrolment', colSpan: colspan3, styles: { halign: 'center', fillColor: [22, 160, 133] } })
          check5 = 1;
        }
        if ((check6 != 1) && (columnKey[k] == "pri_girl_c1_c5_current_rptr" || columnKey[k] == "pri_boy_c1_c5_current_rptr" || columnKey[k] == "pri_c1_c5_current_rptr")) {
          headerColumns1.push({ content: 'Repeater I to V', colSpan: colspan4, styles: { halign: 'center', fillColor: [22, 160, 133] } })
          check6 = 1;
        }
        if ((check7 != 1) && (columnKey[k] == "pri_girl_c1_c5_previous" || columnKey[k] == "pri_boy_c1_c5_previous" || columnKey[k] == "pri_c1_c5_previous")) {
          headerColumns1.push({ content: 'Enrolment Previous Year I-V', colSpan: colspan5, styles: { halign: 'center', fillColor: [22, 160, 133] } })
          check7 = 1;
        }
        if ((check8 != 1) && (columnKey[k] == "pri_girls_promotionRate" || columnKey[k] == "pri_boys_promotionRate" || columnKey[k] == "pri_promotionRate_all")) {
          headerColumns1.push({ content: 'Promotion rate', colSpan: colspan6, styles: { halign: 'center', fillColor: [22, 160, 133] } })
          check8 = 1;
        }
        if ((check9 != 1) && (columnKey[k] == "pri_girls_repetitionRate" || columnKey[k] == "pri_boys_repetitionRate" || columnKey[k] == "pri_repetitionRate_all")) {
          headerColumns1.push({ content: 'Repetition Rate', colSpan: colspan7, styles: { halign: 'center', fillColor: [22, 160, 133] } })
          check9 = 1;
        }
        if ((check10 != 1) && (columnKey[k] == "pri_girls_dropoutRate" || columnKey[k] == "pri_boys_dropoutRate" || columnKey[k] == "pri_dropoutRate_all")) {
          headerColumns1.push({ content: 'Drop Out Rate', colSpan: colspan8, styles: { halign: 'center', fillColor: [22, 160, 133] } })
          check10 = 1;
        }


        //Upper Primary
        if ((check11 != 1) && (columnKey[k] == "upper_pri_girl_c7_c9_current" || columnKey[k] == "upper_pri_boy_c7_c9_current" || columnKey[k] == "upper_pri_c7_c9_current")) {
          headerColumns1.push({ content: 'Enrolment VII to IX', colSpan: colspan9, styles: { halign: 'center', fillColor: [22, 160, 133] } })
          check11 = 1;
        }
        if ((check12 != 1) && (columnKey[k] == "upper_pri_girl_c7_c9_current_rptr" || columnKey[k] == "upper_pri_boy_c7_c9_current_rptr" || columnKey[k] == "upper_pri_c7_c9_current_rptr")) {
          headerColumns1.push({ content: 'Repeater VII to IX', colSpan: colspan10, styles: { halign: 'center', fillColor: [22, 160, 133] } })
          check12 = 1;
        }
        if ((check13 != 1) && (columnKey[k] == "upper_pri_girl_c7_c9_current_fresh" || columnKey[k] == "upper_pri_boy_c7_c9_current_fresh" || columnKey[k] == "upper_pri_c7_c9_current_fresh")) {
          headerColumns1.push({ content: 'Fresh Enrolment', colSpan: colspan11, styles: { halign: 'center', fillColor: [22, 160, 133] } })
          check13 = 1;
        }
        if ((check14 != 1) && (columnKey[k] == "upper_pri_girl_c6_c8_current_rptr" || columnKey[k] == "upper_pri_boy_c6_c8_current_rptr" || columnKey[k] == "upper_pri_c6_c8_current_rptr")) {
          headerColumns1.push({ content: 'Repeater VI to VIII', colSpan: colspan12, styles: { halign: 'center', fillColor: [22, 160, 133] } })
          check14 = 1;
        }
        if ((check15 != 1) && (columnKey[k] == "upper_pri_girl_c6_c8_previous" || columnKey[k] == "upper_pri_boy_c6_c8_previous" || columnKey[k] == "upper_pri_c6_c8_previous")) {
          headerColumns1.push({ content: 'Enrolment Previous Year VI-VII', colSpan: colspan13, styles: { halign: 'center', fillColor: [22, 160, 133] } })
          check15 = 1;
        }
        if ((check16 != 1) && (columnKey[k] == "upperPri_girls_promotionRate" || columnKey[k] == "upperPri_boys_promotionRate" || columnKey[k] == "upperPri_promotionRate_all")) {
          headerColumns1.push({ content: 'Promotion rate', colSpan: colspan14, styles: { halign: 'center', fillColor: [22, 160, 133] } })
          check16 = 1;
        }
        if ((check17 != 1) && (columnKey[k] == "upperPri_girls_repetitionRate" || columnKey[k] == "upperPri_boys_repetitionRate" || columnKey[k] == "upperPri_repetitionRate_all")) {
          headerColumns1.push({ content: 'Repetition Rate', colSpan: colspan15, styles: { halign: 'center', fillColor: [22, 160, 133] } })
          check17 = 1;
        }
        if ((check18 != 1) && (columnKey[k] == "upperPri_girls_dropoutRate" || columnKey[k] == "upperPri_boys_dropoutRate" || columnKey[k] == "upperPri_dropoutRate_all")) {
          headerColumns1.push({ content: 'Drop Out Rate', colSpan: colspan16, styles: { halign: 'center', fillColor: [22, 160, 133] } })
          check18 = 1;
        }


        //Secondary
        if ((check19 != 1) && (columnKey[k] == "secondary_girl_c10_c11_current" || columnKey[k] == "secondary_boy_c10_c11_current" || columnKey[k] == "secondary_c10_c11_current")) {
          headerColumns1.push({ content: 'Enrolment X to XI', colSpan: colspan17, styles: { halign: 'center', fillColor: [22, 160, 133] } })
          check19 = 1;
        }
        if ((check20 != 1) && (columnKey[k] == "secondary_girl_c10_c11_current_rptr" || columnKey[k] == "secondary_boy_c10_c11_current_rptr" || columnKey[k] == "secondary_c10_c11_current_rptr")) {
          headerColumns1.push({ content: 'Repeater X to XI', colSpan: colspan18, styles: { halign: 'center', fillColor: [22, 160, 133] } })
          check20 = 1;
        }
        if ((check21 != 1) && (columnKey[k] == "secondary_girl_c10_c11_current_fresh" || columnKey[k] == "secondary_boy_c10_c11_current_fresh" || columnKey[k] == "secondary_c10_c11_current_fresh")) {
          headerColumns1.push({ content: 'Fresh Enrolment X to XI', colSpan: colspan19, styles: { halign: 'center', fillColor: [22, 160, 133] } })
          check21 = 1;
        }
        if ((check22 != 1) && (columnKey[k] == "secondary_girl_c9_c10_current_rptr" || columnKey[k] == "secondary_boy_c9_c10_current_rptr" || columnKey[k] == "secondary_c9_c10_current_rptr")) {
          headerColumns1.push({ content: 'Repeater IX to X', colSpan: colspan20, styles: { halign: 'center', fillColor: [22, 160, 133] } })
          check22 = 1;
        }
        if ((check23 != 1) && (columnKey[k] == "secondary_girl_c9_c10_previous" || columnKey[k] == "secondary_boy_c9_c10_previous" || columnKey[k] == "secondary_c9_c10_previous")) {
          headerColumns1.push({ content: 'Enrolment Previous Year IX-X', colSpan: colspan21, styles: { halign: 'center', fillColor: [22, 160, 133] } })
          check23 = 1;
        }
        if ((check24 != 1) && (columnKey[k] == "sec_girls_promotionRate" || columnKey[k] == "sec_boys_promotionRate" || columnKey[k] == "sec_promotionRate_all")) {
          headerColumns1.push({ content: 'Promotion rate', colSpan: colspan22, styles: { halign: 'center', fillColor: [22, 160, 133] } })
          check24 = 1;
        }
        if ((check25 != 1) && (columnKey[k] == "sec_girls_repetitionRate" || columnKey[k] == "sec_boys_repetitionRate" || columnKey[k] == "sec_repetitionRate_all")) {
          headerColumns1.push({ content: 'Repetition Rate', colSpan: colspan23, styles: { halign: 'center', fillColor: [22, 160, 133] } })
          check25 = 1;
        }
        if ((check26 != 1) && (columnKey[k] == "sec_girls_dropoutRate" || columnKey[k] == "sec_boys_dropoutRate" || columnKey[k] == "sec_dropoutRate_all")) {
          headerColumns1.push({ content: 'Drop Out Rate', colSpan: colspan24, styles: { halign: 'center', fillColor: [22, 160, 133] } })
          check26 = 1;
        }


      }
    }


    if (this.reportCode == 'R147') {

      var colspan1 = 0;
      var colspan2 = 0;
      var colspan3 = 0;
      var colspan4 = 0;
      var colspan5 = 0;
      var colspan6 = 0;
      var colspan7 = 0;
      var colspan8 = 0;
      var colspan9 = 0;
      var colspan10 = 0;
      var colspan11 = 0;
      var colspan12 = 0;
      var colspan13 = 0;
      var colspan14 = 0;
      var colspan15 = 0;
      var colspan16 = 0;
      var colspan17 = 0;
      var colspan18 = 0;
      var colspan19 = 0;
      var colspan20 = 0;
      var colspan21 = 0;
      var colspan22 = 0;
      var colspan23 = 0;
      var colspan24 = 0;
      var colspan25 = 0;
      var colspan26 = 0;
      var colspan27 = 0;
      var colspan28 = 0;
      var colspan29 = 0;
      var colspan30 = 0;
      var colspan31 = 0;
      var colspan32 = 0;
      var colspan33 = 0;
      var colspan34 = 0;
      var colspan35 = 0;
      var colspan36 = 0;
      var colspan37 = 0;
      var colspan38 = 0;
      var colspan39 = 0;
      var colspan40 = 0;
      var colspan41 = 0;
      var colspan42 = 0;
      var colspan43 = 0;
      var colspan44 = 0;
      var colspan45 = 0;
      var colspan46 = 0;
      var colspan47 = 0;
      var colspan48 = 0;
      var colspan49 = 0;
      var colspan50 = 0;
      var colspan51 = 0;
      var colspan52 = 0;
      var colspan53 = 0;
      var colspan54 = 0;
      var colspan55 = 0;
      var colspan56 = 0;
      var colspan57 = 0;
      var colspan58 = 0;
      var colspan59 = 0;
      var colspan60 = 0;
      var colspan61 = 0;
      var colspan62 = 0;
      var colspan63 = 0;
      var colspan64 = 0;
      var colspan65 = 0;
      var colspan66 = 0;
      var colspan67 = 0;
      var colspan68 = 0;
      var colspan69 = 0;
      var colspan70 = 0;
      var colspan71 = 0;
      var colspan72 = 0;
      var colspan73 = 0;
      var colspan74 = 0;
      var colspan75 = 0;
      var colspan76 = 0;
      var colspan77 = 0;
      var colspan78 = 0;
      var colspan79 = 0;
      var colspan80 = 0;
      var colspan81 = 0;
      var colspan82 = 0;
      var colspan83 = 0;
      var colspan84 = 0;
      var colspan85 = 0;
      var colspan86 = 0;
      var colspan87 = 0;
      var colspan88 = 0;
      var colspan89 = 0;
      var colspan90 = 0;
      var colspan91 = 0;
      var colspan92 = 0;


      for (let k = 0; k < columnKey.length; k++) {

        // 'Primary',

        // if(columnKey[k] == "c2_g" || columnKey[k] == "c2_b" || columnKey[k] == "r2_g" || columnKey[k] == "r2_b" || columnKey[k] == "freshEnrolment_c2_g" || columnKey[k] == "freshEnrolment_c2_b" ||
        // columnKey[k] == "r1_g" || columnKey[k] == "r1_b" ||	columnKey[k] == "ly1_g" || columnKey[k] == "ly1_b" ||	columnKey[k] == "promotionRate_g" || columnKey[k] == "promotionRate_b" ||
        // columnKey[k] == "repetitionRate_g" || columnKey[k] == "repetitionRate_b" ||	columnKey[k] == "dropOutRate_g" || columnKey[k] == "dropOutRate_b" ||	columnKey[k] == "c3_g" || columnKey[k] == "c3_b" ||
        // columnKey[k] == "r3_g" || columnKey[k] == "r3_b" ||	columnKey[k] == "freshEnrolment_c3_g" || columnKey[k] == "freshEnrolment_c3_b" ||	columnKey[k] == "r2_g" || columnKey[k] == "r2_b" ||
        // columnKey[k] == "ly2_g" || columnKey[k] == "ly2_b" ||	columnKey[k] == "promotionRate_c2_g" || columnKey[k] == "promotionRate_c2_b" ||	columnKey[k] == "repetitionRate_c2_g" || columnKey[k] == "repetitionRate_c2_b" ||
        // columnKey[k] == "dropOutRate_c2_g" || columnKey[k] == "dropOutRate_c2_b" ||	columnKey[k] == "c4_g" || columnKey[k] == "c4_b" ||	columnKey[k] == "r4_g" || columnKey[k] == "r4_b" ||
        // columnKey[k] == "freshEnrolment_c4_g" || columnKey[k] == "freshEnrolment_c4_b" ||	columnKey[k] == "r3_g" || columnKey[k] == "r3_b" ||	columnKey[k] == "ly3_g" || columnKey[k] == "ly3_b" ||
        // columnKey[k] == "promotionRate_c3_g" || columnKey[k] == "promotionRate_c3_b" ||	columnKey[k] == "repetitionRate_c3_g" || columnKey[k] == "repetitionRate_c3_b" ||	columnKey[k] == "dropOutRate_c3_g" || columnKey[k] == "dropOutRate_c3_b" ||
        // columnKey[k] == "c5_g" || columnKey[k] == "c5_b" ||	columnKey[k] == "r5_g" || columnKey[k] == "r5_b" ||	columnKey[k] == "freshEnrolment_c5_g" || columnKey[k] == "freshEnrolment_c5_b" ||
        // columnKey[k] == "r4_g" || columnKey[k] == "r4_b" ||	columnKey[k] == "ly4_g" || columnKey[k] == "ly4_b" ||	columnKey[k] == "promotionRate_c4_g" || columnKey[k] == "promotionRate_c4_b" ||
        // columnKey[k] == "repetitionRate_c4_g" || columnKey[k] == "repetitionRate_c4_b" ||	columnKey[k] == "dropOutRate_c4_g" || columnKey[k] == "dropOutRate_c4_b" ||	columnKey[k] == "c6_g" || columnKey[k] == "c6_b" ||
        // columnKey[k] == "r6_g" || columnKey[k] == "r6_b" ||	columnKey[k] == "freshEnrolment_c6_g" || columnKey[k] == "freshEnrolment_c6_b" ||	columnKey[k] == "r5_g" || columnKey[k] == "r5_b" ||
        // columnKey[k] == "ly5_g" || columnKey[k] == "ly5_b" ||	columnKey[k] == "promotionRate_c5_g" || columnKey[k] == "promotionRate_c5_b" ||	columnKey[k] == "repetitionRate_c5_g" || columnKey[k] == "repetitionRate_c5_b" ||
        // columnKey[k] == "dropOutRate_c5_g" || columnKey[k] == "dropOutRate_c5_b" )
        // {
        // colspan1 = colspan1 + 1;
        // }
        // //Upper Primary
        // if (columnKey[k] == "c7_g" || columnKey[k] == "c7_b" ||	columnKey[k] == "r7_g" || columnKey[k] == "r7_b" ||	columnKey[k] == "freshEnrolment_c7_g" || columnKey[k] == "freshEnrolment_c7_b" ||
        // columnKey[k] == "r6_g" || columnKey[k] == "r6_b" ||	columnKey[k] == "ly6_g" || columnKey[k] == "ly6_b" ||	columnKey[k] == "promotionRate_c6_g" || columnKey[k] == "promotionRate_c6_b" ||
        // columnKey[k] == "repetitionRate_c6_g" || columnKey[k] == "repetitionRate_c6_b" ||	columnKey[k] == "dropOutRate_c6_g" || columnKey[k] == "dropOutRate_c6_b" ||	columnKey[k] == "c8_g" || columnKey[k] == "c8_b" ||
        // columnKey[k] == "r8_g" || columnKey[k] == "r8_b" ||	columnKey[k] == "freshEnrolment_c8_g" || columnKey[k] == "freshEnrolment_c8_b" ||	columnKey[k] == "r7_g" || columnKey[k] == "r7_b" ||
        // columnKey[k] == "ly7_g" || columnKey[k] == "ly7_b" ||	columnKey[k] == "promotionRate_c7_g" || columnKey[k] == "promotionRate_c7_b" ||	columnKey[k] == "repetitionRate_c7_g" || columnKey[k] == "repetitionRate_c7_b" ||
        // columnKey[k] == "dropOutRate_c7_g" || columnKey[k] == "dropOutRate_c7_b" ||	columnKey[k] == "c9_g" || columnKey[k] == "c9_b" ||	columnKey[k] == "r9_g" || columnKey[k] == "r9_b" ||
        // columnKey[k] == "freshEnrolment_c9_g" || columnKey[k] == "freshEnrolment_c9_b" ||	columnKey[k] == "r8_g" || columnKey[k] == "r8_b" ||	columnKey[k] == "ly8_g" || columnKey[k] == "ly8_b" ||
        // columnKey[k] == "promotionRate_c8_g" || columnKey[k] == "promotionRate_c8_b" ||	columnKey[k] == "repetitionRate_c8_g" || columnKey[k] == "repetitionRate_c8_b" ||	columnKey[k] == "dropOutRate_c8_g" || columnKey[k] == "dropOutRate_c8_b" )
        // {
        // colspan2 = colspan2 + 1;
        // }
        // //Secondary
        // if (columnKey[k] == "c10_g" || columnKey[k] == "c10_b" ||	columnKey[k] == "r10_g" || columnKey[k] == "r10_b" ||	columnKey[k] == "freshEnrolment_c10_g" || columnKey[k] == "freshEnrolment_c10_b" ||
        // columnKey[k] == "r9_g" || columnKey[k] == "r9_b" ||	columnKey[k] == "ly9_g" || columnKey[k] == "ly9_b" ||	columnKey[k] == "promotionRate_c9_g" || columnKey[k] == "promotionRate_c9_b" ||
        // columnKey[k] == "repetitionRate_c9_g" || columnKey[k] == "repetitionRate_c9_b" ||	columnKey[k] == "dropOutRate_c9_g" || columnKey[k] == "dropOutRate_c9_b" ||	columnKey[k] == "c11_g" || columnKey[k] == "c11_b" ||
        // columnKey[k] == "r11_g" || columnKey[k] == "r11_b" ||	columnKey[k] == "freshEnrolment_c11_g" || columnKey[k] == "freshEnrolment_c11_b" ||columnKey[k] == "r10_g" || columnKey[k] == "r10_b" ||
        // columnKey[k] == "ly10_g" || columnKey[k] == "ly10_b" ||	columnKey[k] == "promotionRate_c10_g" || columnKey[k] == "promotionRate_c10_b" ||	columnKey[k] == "repetitionRate_c10_g" || columnKey[k] == "repetitionRate_c10_b" ||
        // columnKey[k] == "dropOutRate_c10_g" || columnKey[k] == "dropOutRate_c10_b" )
        // {
        // colspan3 = colspan3 + 1;
        // }
        // //Higher Secondary
        // if (columnKey[k] == "c12_g" || columnKey[k] == "c12_b" ||	columnKey[k] == "r12_g" || columnKey[k] == "r12_b" ||	columnKey[k] == "freshEnrolment_c12_g" || columnKey[k] == "freshEnrolment_c12_b" ||
        // columnKey[k] == "r11_g" || columnKey[k] == "r11_b" ||	columnKey[k] == "ly11_g" || columnKey[k] == "ly11_b" || columnKey[k] == "promotionRate_c11_g" || columnKey[k] == "promotionRate_c11_b" ||
        // columnKey[k] == "repetitionRate_c11_g" || columnKey[k] == "repetitionRate_c11_b" ||	columnKey[k] == "dropOutRate_c11_g" || columnKey[k] == "dropOutRate_c11_b"
        // ) 
        // {
        // colspan4 = colspan4 + 1;
        // }

        //Primary
        // 
        if (columnKey[k] == "c2_g" || columnKey[k] == "c2_b") {
          colspan5 = colspan5 + 1;
        }
        if ((colspan6 < 2) && (columnKey[k] == "r2_g" || columnKey[k] == "r2_b")) {
          colspan6 = colspan6 + 1;
        }
        if (columnKey[k] == "freshEnrolment_c2_g" || columnKey[k] == "freshEnrolment_c2_b") {
          colspan7 = colspan7 + 1;
        }
        if (columnKey[k] == "r1_g" || columnKey[k] == "r1_b") {
          colspan8 = colspan8 + 1;
        }
        if (columnKey[k] == "ly1_g" || columnKey[k] == "ly1_b") {
          colspan9 = colspan9 + 1;
        }
        if (columnKey[k] == "promotionRate_g" || columnKey[k] == "promotionRate_b") {
          colspan10 = colspan10 + 1;
        }
        if (columnKey[k] == "repetitionRate_g" || columnKey[k] == "repetitionRate_b") {
          colspan11 = colspan11 + 1;
        }
        if (columnKey[k] == "dropOutRate_g" || columnKey[k] == "dropOutRate_b") {
          colspan12 = colspan12 + 1;
        }
        if (columnKey[k] == "c3_g" || columnKey[k] == "c3_b") {
          colspan13 = colspan13 + 1;
        }
        if ((colspan14 < 2) && (columnKey[k] == "r3_g" || columnKey[k] == "r3_b")) {
          colspan14 = colspan14 + 1;
        }
        if (columnKey[k] == "freshEnrolment_c3_g" || columnKey[k] == "freshEnrolment_c3_b") {
          colspan15 = colspan15 + 1;
        }
        if ((colspan16 < 2) && (columnKey[k] == "r2_g" || columnKey[k] == "r2_b")) {
          colspan16 = colspan16 + 1;
        }
        if (columnKey[k] == "ly2_g" || columnKey[k] == "ly2_b") {
          colspan17 = colspan17 + 1;
        }
        if (columnKey[k] == "promotionRate_c2_g" || columnKey[k] == "promotionRate_c2_b") {
          colspan18 = colspan18 + 1;
        }
        if (columnKey[k] == "repetitionRate_c2_g" || columnKey[k] == "repetitionRate_c2_b") {
          colspan19 = colspan19 + 1;
        }
        if (columnKey[k] == "dropOutRate_c2_g" || columnKey[k] == "dropOutRate_c2_b") {
          colspan20 = colspan20 + 1;
        }
        if (columnKey[k] == "c4_g" || columnKey[k] == "c4_b") {
          colspan21 = colspan21 + 1;
        }
        if ((colspan22 < 2) && (columnKey[k] == "r4_g" || columnKey[k] == "r4_b")) {
          colspan22 = colspan22 + 1;
        }
        if (columnKey[k] == "freshEnrolment_c4_g" || columnKey[k] == "freshEnrolment_c4_b") {
          colspan23 = colspan23 + 1;
        }
        if ((colspan24 < 2) && (columnKey[k] == "r3_g" || columnKey[k] == "r3_b")) {
          colspan24 = colspan24 + 1;
        }
        if (columnKey[k] == "ly3_g" || columnKey[k] == "ly3_b") {
          colspan25 = colspan25 + 1;
        }
        if (columnKey[k] == "promotionRate_c3_g" || columnKey[k] == "promotionRate_c3_b") {
          colspan26 = colspan26 + 1;
        }
        if (columnKey[k] == "repetitionRate_c3_g" || columnKey[k] == "repetitionRate_c3_b") {
          colspan27 = colspan27 + 1;
        }
        if (columnKey[k] == "dropOutRate_c3_g" || columnKey[k] == "dropOutRate_c3_b") {
          colspan28 = colspan28 + 1;
        }
        if (columnKey[k] == "c5_g" || columnKey[k] == "c5_b") {
          colspan29 = colspan29 + 1;
        }
        if ((colspan30 < 2) && (columnKey[k] == "r5_g" || columnKey[k] == "r5_b")) {
          colspan30 = colspan30 + 1;
        }
        if (columnKey[k] == "freshEnrolment_c5_g" || columnKey[k] == "freshEnrolment_c5_b") {
          colspan31 = colspan31 + 1;
        }
        if ((colspan32 < 2) && (columnKey[k] == "r4_g" || columnKey[k] == "r4_b")) {
          colspan32 = colspan32 + 1;
        }
        if (columnKey[k] == "ly4_g" || columnKey[k] == "ly4_b") {
          colspan33 = colspan33 + 1;
        }
        if (columnKey[k] == "promotionRate_c4_g" || columnKey[k] == "promotionRate_c4_b") {
          colspan34 = colspan34 + 1;
        }
        if (columnKey[k] == "repetitionRate_c4_g" || columnKey[k] == "repetitionRate_c4_b") {
          colspan35 = colspan35 + 1;
        }
        if (columnKey[k] == "dropOutRate_c4_g" || columnKey[k] == "dropOutRate_c4_b") {
          colspan36 = colspan36 + 1;
        }
        if (columnKey[k] == "c6_g" || columnKey[k] == "c6_b") {
          colspan37 = colspan37 + 1;
        }
        if ((colspan38 < 2) && (columnKey[k] == "r6_g" || columnKey[k] == "r6_b")) {
          colspan38 = colspan38 + 1;
        }
        if (columnKey[k] == "freshEnrolment_c6_g" || columnKey[k] == "freshEnrolment_c6_b") {
          colspan39 = colspan39 + 1;
        }
        if ((colspan40 < 2) && (columnKey[k] == "r5_g" || columnKey[k] == "r5_b")) {
          colspan40 = colspan40 + 1;
        }
        if (columnKey[k] == "ly5_g" || columnKey[k] == "ly5_b") {
          colspan41 = colspan41 + 1;
        }
        if (columnKey[k] == "promotionRate_c5_g" || columnKey[k] == "promotionRate_c5_b") {
          colspan42 = colspan42 + 1;
        }
        if (columnKey[k] == "repetitionRate_c5_g" || columnKey[k] == "repetitionRate_c5_b") {
          colspan43 = colspan43 + 1;
        }
        if (columnKey[k] == "dropOutRate_c5_g" || columnKey[k] == "dropOutRate_c5_b") {
          colspan44 = colspan44 + 1;
        }
        //Upper Primary
        if (columnKey[k] == "c7_g" || columnKey[k] == "c7_b") {
          colspan45 = colspan45 + 1;
        }
        if ((colspan46 < 2) && (columnKey[k] == "r7_g" || columnKey[k] == "r7_b")) {
          colspan46 = colspan46 + 1;
        }
        if (columnKey[k] == "freshEnrolment_c7_g" || columnKey[k] == "freshEnrolment_c7_b") {
          colspan47 = colspan47 + 1;
        }
        if ((colspan48 < 2) && (columnKey[k] == "r6_g" || columnKey[k] == "r6_b")) {
          colspan48 = colspan48 + 1;
        }
        if (columnKey[k] == "ly6_g" || columnKey[k] == "ly6_b") {
          colspan49 = colspan49 + 1;
        }
        if (columnKey[k] == "promotionRate_c6_g" || columnKey[k] == "promotionRate_c6_b") {
          colspan50 = colspan50 + 1;
        }
        if (columnKey[k] == "repetitionRate_c6_g" || columnKey[k] == "repetitionRate_c6_b") {
          colspan51 = colspan51 + 1;
        }
        if (columnKey[k] == "dropOutRate_c6_g" || columnKey[k] == "dropOutRate_c6_b") {
          colspan52 = colspan52 + 1;
        }
        if (columnKey[k] == "c8_g" || columnKey[k] == "c8_b") {
          colspan53 = colspan53 + 1;
        }
        if ((colspan54 < 2) && (columnKey[k] == "r8_g" || columnKey[k] == "r8_b")) {
          colspan54 = colspan54 + 1;
        }
        if (columnKey[k] == "freshEnrolment_c8_g" || columnKey[k] == "freshEnrolment_c8_b") {
          colspan55 = colspan55 + 1;
        }
        if ((colspan56 < 2) && (columnKey[k] == "r7_g" || columnKey[k] == "r7_b")) {
          colspan56 = colspan56 + 1;
        }
        if (columnKey[k] == "ly7_g" || columnKey[k] == "ly7_b") {
          colspan57 = colspan57 + 1;
        }
        if (columnKey[k] == "promotionRate_c7_g" || columnKey[k] == "promotionRate_c7_b") {
          colspan58 = colspan58 + 1;
        }
        if (columnKey[k] == "repetitionRate_c7_g" || columnKey[k] == "repetitionRate_c7_b") {
          colspan59 = colspan59 + 1;
        }
        if (columnKey[k] == "dropOutRate_c7_g" || columnKey[k] == "dropOutRate_c7_b") {
          colspan60 = colspan60 + 1;
        }
        if (columnKey[k] == "c9_g" || columnKey[k] == "c9_b") {
          colspan61 = colspan61 + 1;
        }
        if ((colspan62 < 2) && (columnKey[k] == "r9_g" || columnKey[k] == "r9_b")) {
          colspan62 = colspan62 + 1;
        }
        if (columnKey[k] == "freshEnrolment_c9_g" || columnKey[k] == "freshEnrolment_c9_b") {
          colspan63 = colspan63 + 1;
        }
        if ((colspan64 < 2) && (columnKey[k] == "r8_g" || columnKey[k] == "r8_b")) {
          colspan64 = colspan64 + 1;
        }
        if (columnKey[k] == "ly8_g" || columnKey[k] == "ly8_b") {
          colspan65 = colspan65 + 1;
        }
        if (columnKey[k] == "promotionRate_c8_g" || columnKey[k] == "promotionRate_c8_b") {
          colspan66 = colspan66 + 1;
        }
        if (columnKey[k] == "repetitionRate_c8_g" || columnKey[k] == "repetitionRate_c8_b") {
          colspan67 = colspan67 + 1;
        }
        if (columnKey[k] == "dropOutRate_c8_g" || columnKey[k] == "dropOutRate_c8_b") {
          colspan68 = colspan68 + 1;
        }
        // Secondary
        if (columnKey[k] == "c10_g" || columnKey[k] == "c10_b") {
          colspan69 = colspan69 + 1;
        }
        if ((colspan70 < 2) && (columnKey[k] == "r10_g" || columnKey[k] == "r10_b")) {
          colspan70 = colspan70 + 1;
        }
        if (columnKey[k] == "freshEnrolment_c10_g" || columnKey[k] == "freshEnrolment_c10_b") {
          colspan71 = colspan71 + 1;
        }
        if ((colspan72 < 2) && (columnKey[k] == "r9_g" || columnKey[k] == "r9_b")) {
          colspan72 = colspan72 + 1;
        }
        if (columnKey[k] == "ly9_g" || columnKey[k] == "ly9_b") {
          colspan73 = colspan73 + 1;
        }
        if (columnKey[k] == "promotionRate_c9_g" || columnKey[k] == "promotionRate_c9_b") {
          colspan74 = colspan74 + 1;
        }
        if (columnKey[k] == "repetitionRate_c9_g" || columnKey[k] == "repetitionRate_c9_b") {
          colspan75 = colspan75 + 1;
        }
        if (columnKey[k] == "dropOutRate_c9_g" || columnKey[k] == "dropOutRate_c9_b") {
          colspan76 = colspan76 + 1;
        }
        if (columnKey[k] == "c11_g" || columnKey[k] == "c11_b") {
          colspan77 = colspan77 + 1;
        }
        if ((colspan78 < 2) && (columnKey[k] == "r11_g" || columnKey[k] == "r11_b")) {
          colspan78 = colspan78 + 1;
        }
        if (columnKey[k] == "freshEnrolment_c11_g" || columnKey[k] == "freshEnrolment_c11_b") {
          colspan79 = colspan79 + 1;
        }
        if ((colspan80 < 2) && (columnKey[k] == "r10_g" || columnKey[k] == "r10_b")) {
          colspan80 = colspan80 + 1;
        }
        if (columnKey[k] == "ly10_g" || columnKey[k] == "ly10_b") {
          colspan81 = colspan81 + 1;
        }
        if (columnKey[k] == "promotionRate_c10_g" || columnKey[k] == "promotionRate_c10_b") {
          colspan82 = colspan82 + 1;
        }
        if (columnKey[k] == "repetitionRate_c10_g" || columnKey[k] == "repetitionRate_c10_b") {
          colspan83 = colspan83 + 1;
        }
        if (columnKey[k] == "dropOutRate_c10_g" || columnKey[k] == "dropOutRate_c10_b") {
          colspan84 = colspan84 + 1;
        }
        // Higher Secondary
        if (columnKey[k] == "c12_g" || columnKey[k] == "c12_b") {
          colspan85 = colspan85 + 1;
        }
        if (columnKey[k] == "r12_g" || columnKey[k] == "r12_b") {
          colspan86 = colspan86 + 1;
        }
        if (columnKey[k] == "freshEnrolment_c12_g" || columnKey[k] == "freshEnrolment_c12_b") {
          colspan87 = colspan87 + 1;
        }
        if ((colspan88 < 2) && (columnKey[k] == "r11_g" || columnKey[k] == "r11_b")) {
          colspan88 = colspan88 + 1;
        }
        if (columnKey[k] == "ly11_g" || columnKey[k] == "ly11_b") {
          colspan89 = colspan89 + 1;
        }
        if (columnKey[k] == "promotionRate_c11_g" || columnKey[k] == "promotionRate_c11_b") {
          colspan90 = colspan90 + 1;
        }
        if (columnKey[k] == "repetitionRate_c11_g" || columnKey[k] == "repetitionRate_c11_b") {
          colspan91 = colspan91 + 1;
        }
        if (columnKey[k] == "dropOutRate_c11_g" || columnKey[k] == "dropOutRate_c11_b") {
          colspan92 = colspan92 + 1;
        }


      }
    }

    if (this.reportCode == 'R147') {
      var headerColumns1 = [];
      var check1 = 0;
      var check2 = 0;
      var check3 = 0;
      var check4 = 0;
      var check5 = 0;
      var check6 = 0;
      var check7 = 0;
      var check8 = 0;
      var check9 = 0;
      var check10 = 0;
      var check11 = 0;
      var check12 = 0;
      var check13 = 0;
      var check14 = 0;
      var check15 = 0;
      var check16 = 0;
      var check17 = 0;
      var check18 = 0;
      var check19 = 0;
      var check20 = 0;
      var check21 = 0;
      var check22 = 0;
      var check23 = 0;
      var check24 = 0;
      var check25 = 0;
      var check26 = 0;
      var check27 = 0;
      var check28 = 0;
      var check29 = 0;
      var check30 = 0;
      var check31 = 0;
      var check32 = 0;
      var check33 = 0;
      var check34 = 0;
      var check35 = 0;
      var check36 = 0;
      var check37 = 0;
      var check38 = 0;
      var check39 = 0;
      var check40 = 0;
      var check41 = 0;
      var check42 = 0;
      var check43 = 0;
      var check44 = 0;
      var check45 = 0;
      var check46 = 0;
      var check47 = 0;
      var check48 = 0;
      var check49 = 0;
      var check50 = 0;
      var check51 = 0;
      var check52 = 0;
      var check53 = 0;
      var check54 = 0;
      var check55 = 0;
      var check56 = 0;
      var check57 = 0;
      var check58 = 0;
      var check59 = 0;
      var check60 = 0;
      var check61 = 0;
      var check62 = 0;
      var check63 = 0;
      var check64 = 0;
      var check65 = 0;
      var check66 = 0;
      var check67 = 0;
      var check68 = 0;
      var check69 = 0;
      var check70 = 0;
      var check71 = 0;
      var check72 = 0;
      var check73 = 0;
      var check74 = 0;
      var check75 = 0;
      var check76 = 0;
      var check77 = 0;
      var check78 = 0;
      var check79 = 0;
      var check80 = 0;
      var check81 = 0;
      var check82 = 0;
      var check83 = 0;
      var check84 = 0;
      var check85 = 0;
      var check86 = 0;
      var check87 = 0;
      var check88 = 0;
      var check89 = 0;
      var check90 = 0;
      var check91 = 0;
      var check92 = 0;
      
      for (let k = 0; k < columnKey.length; k++) {

        if ((check1 != 1) && (columnKey[k] == "loc_name")) {
          headerColumns1.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } })
          check1 = 1;
          var l = k;
        }
        // else if ((check2 != 1) && (columnKey[k] == "broad_mgmt_name")) {
        //   headerColumns1.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } })
        //   check2 = 1;
        //   var l = k;
        // }
        else if ((check3 != 1) && (columnKey[k] == "minority_name")) {
          headerColumns1.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } })
          check3 = 1;
          var l = k;
        }

        else if ((check4 != 1) && (columnKey[k] == "c2_g" || columnKey[k] == "c2_b")) {
          headerColumns1.push({ content: 'Enrolment Class II', colSpan: colspan5, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check4 = 1;
          var l = k;
        }
        else if ((check5 != 1) && (columnKey[k] == "r2_g" || columnKey[k] == "r2_b")) {
          headerColumns1.push({ content: 'Repeater Class II', colSpan: colspan6, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check5 = 1;
          var l = k;
        }
        else if ((check6 != 1) && (columnKey[k] == "freshEnrolment_c2_g" || columnKey[k] == "freshEnrolment_c2_b")) {
          headerColumns1.push({ content: 'Fresh Enrolment Class II', colSpan: colspan7, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check6 = 1;
          var l = k;
        }
        else if ((check7 != 1) && (columnKey[k] == "r1_g" || columnKey[k] == "r1_b")) {
          headerColumns1.push({ content: 'Repeater Class I', colSpan: colspan8, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check7 = 1;
          var l = k;
        }
        else if ((check8 != 1) && (columnKey[k] == "ly1_g" || columnKey[k] == "ly1_b")) {
          headerColumns1.push({ content: 'Enrolment Previous Year I', colSpan: colspan9, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check8 = 1;
          var l = k;
        }
        else if ((check9 != 1) && (columnKey[k] == "promotionRate_g" || columnKey[k] == "promotionRate_b")) {
          headerColumns1.push({ content: 'Prmotion Rate - I', colSpan: colspan10, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check9 = 1;
          var l = k;
        }
        else if ((check10 != 1) && (columnKey[k] == "repetitionRate_g" || columnKey[k] == "repetitionRate_b")) {
          headerColumns1.push({ content: 'Repetition Rate - I', colSpan: colspan11, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check10 = 1;
          var l = k;
        }
        else if ((check11 != 1) && (columnKey[k] == "dropOutRate_g" || columnKey[k] == "dropOutRate_b")) {
          headerColumns1.push({ content: 'Dropout Rate - I', colSpan: colspan12, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check11 = 1;
          var l = k;
        }

      }
      l = headerColumns1.length
      for (var k = l; k < columnKey.length; k++) {

        if ((check12 != 1) && (columnKey[k] == "c3_g" || columnKey[k] == "c3_b")) {
          headerColumns1.push({ content: 'Enrolment Class III', colSpan: colspan13, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check12 = 1;
          var m = k;
        }
        else if ((check13 != 1) && (columnKey[k] == "r3_g" || columnKey[k] == "r3_b")) {
          headerColumns1.push({ content: 'Repeater Class III', colSpan: colspan14, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check13 = 1;
          var m = k;
        }
        else if ((check14 != 1) && (columnKey[k] == "freshEnrolment_c3_g" || columnKey[k] == "freshEnrolment_c3_b")) {
          headerColumns1.push({ content: 'Fresh Enrolment Class III', colSpan: colspan15, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check14 = 1;
          var m = k;
        }
        else if ((check15 != 1) && (columnKey[k] == "r2_g" || columnKey[k] == "r2_b")) {
          headerColumns1.push({ content: 'Repeater Class II', colSpan: colspan16, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check15 = 1;
          var m = k;
        }
        else if ((check16 != 1) && (columnKey[k] == "ly2_g" || columnKey[k] == "ly2_b")) {
          headerColumns1.push({ content: 'Enrolment Previous Year II', colSpan: colspan17, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check16 = 1;
          var m = k;
        }
        else if ((check17 != 1) && (columnKey[k] == "promotionRate_c2_g" || columnKey[k] == "promotionRate_c2_b")) {
          headerColumns1.push({ content: 'Prmotion Rate - II', colSpan: colspan18, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check17 = 1;
          var m = k;
        }
        else if ((check18 != 1) && (columnKey[k] == "repetitionRate_c2_g" || columnKey[k] == "repetitionRate_c2_b")) {
          headerColumns1.push({ content: 'Repetition Rate - II', colSpan: colspan19, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check18 = 1;
          var m = k;
        }
        else if ((check19 != 1) && (columnKey[k] == "dropOutRate_c2_g" || columnKey[k] == "dropOutRate_c2_b")) {
          headerColumns1.push({ content: 'Dropout Rate - II', colSpan: colspan20, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check19 = 1;
          var m = k;
        }

      }
      m = headerColumns1.length
      for (var k = m; k < columnKey.length; k++) {
        if ((check20 != 1) && (columnKey[k] == "c4_g" || columnKey[k] == "c4_b")) {
          headerColumns1.push({ content: 'Enrolment Class IV', colSpan: colspan21, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check20 = 1;
          var n = k;
        }
        else if ((check21 != 1) && (columnKey[k] == "r4_g" || columnKey[k] == "r4_b")) {
          headerColumns1.push({ content: 'Repeater Class IV', colSpan: colspan22, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check21 = 1;
          var n = k;
        }
        else if ((check22 != 1) && (columnKey[k] == "freshEnrolment_c4_g" || columnKey[k] == "freshEnrolment_c4_b")) {
          headerColumns1.push({ content: 'Fresh Enrolment Class IV', colSpan: colspan23, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check22 = 1;
          var n = k;
        }
        else if ((check23 != 1) && (columnKey[k] == "r3_g" || columnKey[k] == "r3_b")) {
          headerColumns1.push({ content: 'Repeater Class III', colSpan: colspan24, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check23 = 1;
          var n = k;
        }
        else if ((check24 != 1) && (columnKey[k] == "ly3_g" || columnKey[k] == "ly3_b")) {
          headerColumns1.push({ content: 'Enrolment Previous Year III', colSpan: colspan25, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check24 = 1;
          var n = k;
        }
        else if ((check25 != 1) && (columnKey[k] == "promotionRate_c3_g" || columnKey[k] == "promotionRate_c3_b")) {
          headerColumns1.push({ content: 'Prmotion Rate - III', colSpan: colspan26, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check25 = 1;
          var n = k;
        }
        else if ((check26 != 1) && (columnKey[k] == "repetitionRate_c3_g" || columnKey[k] == "repetitionRate_c3_b")) {
          headerColumns1.push({ content: 'Repetition Rate - III', colSpan: colspan27, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check26 = 1;
          var n = k;
        }
        else if ((check27 != 1) && (columnKey[k] == "dropOutRate_c3_g" || columnKey[k] == "dropOutRate_c3_b")) {
          headerColumns1.push({ content: 'Dropout Rate - III', colSpan: colspan28, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check27 = 1;
          var n = k;
        }

      }
      n = headerColumns1.length
      for (var k = n; k < columnKey.length; k++) {
        if ((check28 != 1) && (columnKey[k] == "c5_g" || columnKey[k] == "c5_b")) {
          headerColumns1.push({ content: 'Enrolment Class V', colSpan: colspan29, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check28 = 1;
          var o = k;
        }
        else if ((check29 != 1) && (columnKey[k] == "r5_g" || columnKey[k] == "r5_b")) {
          headerColumns1.push({ content: 'Repeater Class V', colSpan: colspan30, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check29 = 1;
          var o = k;
        }
        else if ((check30 != 1) && (columnKey[k] == "freshEnrolment_c5_g" || columnKey[k] == "freshEnrolment_c5_b")) {
          headerColumns1.push({ content: 'Fresh Enrolment Class V', colSpan: colspan31, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check30 = 1;
          var o = k;
        }
        else if ((check31 != 1) && (columnKey[k] == "r4_g" || columnKey[k] == "r4_b")) {
          headerColumns1.push({ content: 'Repeater Class IV', colSpan: colspan32, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check31 = 1;
          var o = k;
        }
        else if ((check32 != 1) && (columnKey[k] == "ly4_g" || columnKey[k] == "ly4_b")) {
          headerColumns1.push({ content: 'Enrolment Previous Year IV', colSpan: colspan33, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check32 = 1;
          var o = k;
        }
        else if ((check33 != 1) && (columnKey[k] == "promotionRate_c4_g" || columnKey[k] == "promotionRate_c4_b")) {
          headerColumns1.push({ content: 'Prmotion Rate - IV', colSpan: colspan34, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check33 = 1;
          var o = k;
        }
        else if ((check34 != 1) && (columnKey[k] == "repetitionRate_c4_g" || columnKey[k] == "repetitionRate_c4_b")) {
          headerColumns1.push({ content: 'Repetition Rate - IV', colSpan: colspan35, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check34 = 1;
          var o = k;
        }
        else if ((check35 != 1) && (columnKey[k] == "dropOutRate_c4_g" || columnKey[k] == "dropOutRate_c4_b")) {
          headerColumns1.push({ content: 'Dropout Rate - IV', colSpan: colspan36, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check35 = 1;
          var o = k;
        }
      }

      o = headerColumns1.length
      for (var k = o; k < columnKey.length; k++) {
        if ((check36 != 1) && (columnKey[k] == "c6_g" || columnKey[k] == "c6_b")) {
          headerColumns1.push({ content: 'Enrolment Class VI', colSpan: colspan37, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check36 = 1;
          var p = k;
        }
        else if ((check37 != 1) && (columnKey[k] == "r6_g" || columnKey[k] == "r6_b")) {
          headerColumns1.push({ content: 'Repeater Class VI', colSpan: colspan38, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check37 = 1;
          var p = k;
        }
        else if ((check38 != 1) && (columnKey[k] == "freshEnrolment_c6_g" || columnKey[k] == "freshEnrolment_c6_b")) {
          headerColumns1.push({ content: 'Fresh Enrolment Class VI', colSpan: colspan39, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check38 = 1;
          var p = k;
        }
        else if ((check39 != 1) && (columnKey[k] == "r5_g" || columnKey[k] == "r5_b")) {
          headerColumns1.push({ content: 'Repeater Class V', colSpan: colspan40, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check39 = 1;
          var p = k;
        }
        else if ((check40 != 1) && (columnKey[k] == "ly5_g" || columnKey[k] == "ly5_b")) {
          headerColumns1.push({ content: 'Enrolment Previous Year V', colSpan: colspan41, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check40 = 1;
          var p = k;
        }
        else if ((check41 != 1) && (columnKey[k] == "promotionRate_c5_g" || columnKey[k] == "promotionRate_c5_b")) {
          headerColumns1.push({ content: 'Prmotion Rate - V', colSpan: colspan42, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check41 = 1;
          var p = k;
        }
        else if ((check42 != 1) && (columnKey[k] == "repetitionRate_c5_g" || columnKey[k] == "repetitionRate_c5_b")) {
          headerColumns1.push({ content: 'Repetition Rate - V', colSpan: colspan43, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check42 = 1;
          var p = k;
        }
        else if ((check43 != 1) && (columnKey[k] == "dropOutRate_c5_g" || columnKey[k] == "dropOutRate_c5_b")) {
          headerColumns1.push({ content: 'Dropout Rate - V', colSpan: colspan44, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check43 = 1;
          var p = k;
        }

      }

      p = headerColumns1.length
      for (var k = p; k < columnKey.length; k++) {
        if ((check44 != 1) && (columnKey[k] == "c7_g" || columnKey[k] == "c7_b")) {
          headerColumns1.push({ content: 'Enrolment Class VII', colSpan: colspan45, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check44 = 1;
          var q = k;
        }
        else if ((check45 != 1) && (columnKey[k] == "r7_g" || columnKey[k] == "r7_b")) {
          headerColumns1.push({ content: 'Repeater Class VII', colSpan: colspan46, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check45 = 1;
          var q = k;
        }
        else if ((check46 != 1) && (columnKey[k] == "freshEnrolment_c7_g" || columnKey[k] == "freshEnrolment_c7_b")) {
          headerColumns1.push({ content: 'Fresh Enrolment Class VII', colSpan: colspan47, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check46 = 1;
          var q = k;
        }
        else if ((check47 != 1) && (columnKey[k] == "r6_g" || columnKey[k] == "r6_b")) {
          headerColumns1.push({ content: 'Repeater Class VI', colSpan: colspan48, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check47 = 1;
          var q = k;
        }
        else if ((check48 != 1) && (columnKey[k] == "ly6_g" || columnKey[k] == "ly6_b")) {
          headerColumns1.push({ content: 'Enrolment Previous Year VI', colSpan: colspan49, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check48 = 1;
          var q = k;
        }
        else if ((check49 != 1) && (columnKey[k] == "promotionRate_c6_g" || columnKey[k] == "promotionRate_c6_b")) {
          headerColumns1.push({ content: 'Prmotion Rate - VI', colSpan: colspan50, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check49 = 1;
          var q = k;
        }
        else if ((check50 != 1) && (columnKey[k] == "repetitionRate_c6_g" || columnKey[k] == "repetitionRate_c6_b")) {
          headerColumns1.push({ content: 'Repetition Rate - VI', colSpan: colspan51, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check50 = 1;
          var q = k;
        }
        else if ((check51 != 1) && (columnKey[k] == "dropOutRate_c6_g" || columnKey[k] == "dropOutRate_c6_b")) {
          headerColumns1.push({ content: 'Dropout Rate - VI', colSpan: colspan52, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check51 = 1;
          var q = k;
        }

      }

      q = headerColumns1.length
      for (var k = q; k < columnKey.length; k++) {
        if ((check52 != 1) && (columnKey[k] == "c8_g" || columnKey[k] == "c8_b")) {
          headerColumns1.push({ content: 'Enrolment Class VIII', colSpan: colspan53, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check52 = 1;
          var r = k;
        }
        else if ((check53 != 1) && (columnKey[k] == "r8_g" || columnKey[k] == "r8_b")) {
          headerColumns1.push({ content: 'Repeater Class VIII', colSpan: colspan54, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check53 = 1;
          var r = k;
        }
        else if ((check54 != 1) && (columnKey[k] == "freshEnrolment_c8_g" || columnKey[k] == "freshEnrolment_c8_b")) {
          headerColumns1.push({ content: 'Fresh Enrolment Class VIII', colSpan: colspan55, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check54 = 1;
          var r = k;
        }
        else if ((check55 != 1) && (columnKey[k] == "r7_g" || columnKey[k] == "r7_b")) {
          headerColumns1.push({ content: 'Repeater Class VII', colSpan: colspan56, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check55 = 1;
          var r = k;
        }
        else if ((check56 != 1) && (columnKey[k] == "ly7_g" || columnKey[k] == "ly7_b")) {
          headerColumns1.push({ content: 'Enrolment Previous Year II', colSpan: colspan57, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check56 = 1;
          var r = k;
        }
        else if ((check57 != 1) && (columnKey[k] == "promotionRate_c7_g" || columnKey[k] == "promotionRate_c7_b")) {
          headerColumns1.push({ content: 'Prmotion Rate - VII', colSpan: colspan58, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check57 = 1;
          var r = k;
        }
        else if ((check58 != 1) && (columnKey[k] == "repetitionRate_c7_g" || columnKey[k] == "repetitionRate_c7_b")) {
          headerColumns1.push({ content: 'Repetition Rate - VII', colSpan: colspan59, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check58 = 1;
          var r = k;
        }
        else if ((check59 != 1) && (columnKey[k] == "dropOutRate_c7_g" || columnKey[k] == "dropOutRate_c7_b")) {
          headerColumns1.push({ content: 'Dropout Rate - VII', colSpan: colspan60, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check59 = 1;
          var r = k;
        }

      }

      r = headerColumns1.length
      for (var k = r; k < columnKey.length; k++) {
        if ((check60 != 1) && (columnKey[k] == "c9_g" || columnKey[k] == "c9_b")) {
          headerColumns1.push({ content: 'Enrolment Class IX', colSpan: colspan61, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check60 = 1;
          var s = k;
        }
        else if ((check61 != 1) && (columnKey[k] == "r9_g" || columnKey[k] == "r9_b")) {
          headerColumns1.push({ content: 'Repeater Class IX', colSpan: colspan62, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check61 = 1;
          var s = k;
        }
        else if ((check62 != 1) && (columnKey[k] == "freshEnrolment_c9_g" || columnKey[k] == "freshEnrolment_c9_b")) {
          headerColumns1.push({ content: 'Fresh Enrolment Class IX', colSpan: colspan63, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check62 = 1;
          var s = k;
        }
        else if ((check63 != 1) && (columnKey[k] == "r8_g" || columnKey[k] == "r8_b")) {
          headerColumns1.push({ content: 'Repeater Class VIII', colSpan: colspan64, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check63 = 1;
          var s = k;
        }
        else if ((check64 != 1) && (columnKey[k] == "ly8_g" || columnKey[k] == "ly8_b")) {
          headerColumns1.push({ content: 'Enrolment Previous Year VIII', colSpan: colspan65, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check64 = 1;
          var s = k;
        }
        else if ((check65 != 1) && (columnKey[k] == "promotionRate_c8_g" || columnKey[k] == "promotionRate_c8_b")) {
          headerColumns1.push({ content: 'Prmotion Rate - VIII', colSpan: colspan66, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check65 = 1;
          var s = k;
        }
        else if ((check66 != 1) && (columnKey[k] == "repetitionRate_c8_g" || columnKey[k] == "repetitionRate_c8_b")) {
          headerColumns1.push({ content: 'Repetition Rate - VIII', colSpan: colspan67, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check66 = 1;
          var s = k;
        }
        else if ((check67 != 1) && (columnKey[k] == "dropOutRate_c8_g" || columnKey[k] == "dropOutRate_c8_b")) {
          headerColumns1.push({ content: 'Dropout Rate - VIII', colSpan: colspan68, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check67 = 1;
          var s = k;
        }

      }

      s = headerColumns1.length
      for (var k = s; k < columnKey.length; k++) {
        if ((check68 != 1) && (columnKey[k] == "c10_g" || columnKey[k] == "c10_b")) {
          headerColumns1.push({ content: 'Enrolment Class X', colSpan: colspan69, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check68 = 1;
          var t = k
        }
        else if ((check69 != 1) && (columnKey[k] == "r10_g" || columnKey[k] == "r10_b")) {
          headerColumns1.push({ content: 'Repeater Class X', colSpan: colspan70, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check69 = 1;
          var t = k
        }
        else if ((check70 != 1) && (columnKey[k] == "freshEnrolment_c10_g" || columnKey[k] == "freshEnrolment_c10_b")) {
          headerColumns1.push({ content: 'Fresh Enrolment Class X', colSpan: colspan71, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check70 = 1;
          var t = k
        }
        else if ((check71 != 1) && (columnKey[k] == "r9_g" || columnKey[k] == "r9_b")) {
          headerColumns1.push({ content: 'Repeater Class IX', colSpan: colspan72, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check71 = 1;
          var t = k
        }
        else if ((check72 != 1) && (columnKey[k] == "ly9_g" || columnKey[k] == "ly9_b")) {
          headerColumns1.push({ content: 'Enrolment Previous Year IX', colSpan: colspan73, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check72 = 1;
          var t = k
        }
        else if ((check73 != 1) && (columnKey[k] == "promotionRate_c9_g" || columnKey[k] == "promotionRate_c9_b")) {
          headerColumns1.push({ content: 'Prmotion Rate - IX', colSpan: colspan74, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check73 = 1;
          var t = k
        }
        else if ((check74 != 1) && (columnKey[k] == "repetitionRate_c9_g" || columnKey[k] == "repetitionRate_c9_b")) {
          headerColumns1.push({ content: 'Repetition Rate - IX', colSpan: colspan75, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check74 = 1;
          var t = k
        }
        else if ((check75 != 1) && (columnKey[k] == "dropOutRate_c9_g" || columnKey[k] == "dropOutRate_c9_b")) {
          headerColumns1.push({ content: 'Dropout Rate - IX', colSpan: colspan76, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check75 = 1;
          var t = k
        }

      }
      t = headerColumns1.length
      for (var k = t; k < columnKey.length; k++) {
        if ((check76 != 1) && (columnKey[k] == "c11_g" || columnKey[k] == "c11_b")) {
          headerColumns1.push({ content: 'Enrolment Class XI', colSpan: colspan77, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check76 = 1;
          var u = k;
        }
        else if ((check77 != 1) && (columnKey[k] == "r11_g" || columnKey[k] == "r11_b")) {
          headerColumns1.push({ content: 'Repeater Class XI', colSpan: colspan78, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check77 = 1;
          var u = k;
        }
        else if ((check78 != 1) && (columnKey[k] == "freshEnrolment_c11_g" || columnKey[k] == "freshEnrolment_c11_b")) {
          headerColumns1.push({ content: 'Fresh Enrolment Class XI', colSpan: colspan79, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check78 = 1;
          var u = k;
        }
        else if ((check79 != 1) && (columnKey[k] == "r10_g" || columnKey[k] == "r10_b")) {
          headerColumns1.push({ content: 'Repeater Class X', colSpan: colspan80, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check79 = 1;
          var u = k;
        }
        else if ((check80 != 1) && (columnKey[k] == "ly10_g" || columnKey[k] == "ly10_b")) {
          headerColumns1.push({ content: 'Enrolment Previous Year X', colSpan: colspan81, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check80 = 1;
          var u = k;
        }
        else if ((check81 != 1) && (columnKey[k] == "promotionRate_c10_g" || columnKey[k] == "promotionRate_c10_b")) {
          headerColumns1.push({ content: 'Prmotion Rate - X', colSpan: colspan82, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check81 = 1;
          var u = k;
        }
        else if ((check82 != 1) && (columnKey[k] == "repetitionRate_c10_g" || columnKey[k] == "repetitionRate_c10_b")) {
          headerColumns1.push({ content: 'Repetition Rate - X', colSpan: colspan83, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check82 = 1;
          var u = k;
        }
        else if ((check83 != 1) && (columnKey[k] == "dropOutRate_c10_g" || columnKey[k] == "dropOutRate_c10_b")) {
          headerColumns1.push({ content: 'Dropout Rate - X', colSpan: colspan84, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check83 = 1;
          var u = k;
        }

      }
      u = headerColumns1.length
      for (var k = u; k < columnKey.length; k++) {
        if ((check84 != 1) && (columnKey[k] == "c12_g" || columnKey[k] == "c12_b")) {
          headerColumns1.push({ content: 'Enrolment Class XII', colSpan: colspan85, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check84 = 1;
        }
        else if ((check85 != 1) && (columnKey[k] == "r12_g" || columnKey[k] == "r12_b")) {
          headerColumns1.push({ content: 'Repeater Class XII', colSpan: colspan86, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check85 = 1;
        }
        else if ((check86 != 1) && (columnKey[k] == "freshEnrolment_c12_g" || columnKey[k] == "freshEnrolment_c12_b")) {
          headerColumns1.push({ content: 'Fresh Enrolment Class XII', colSpan: colspan87, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check86 = 1;
        }
        else if ((check87 != 1) && (columnKey[k] == "r11_g" || columnKey[k] == "r11_b")) {
          headerColumns1.push({ content: 'Repeater Class XI', colSpan: colspan88, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check87 = 1;
        }
        else if ((check88 != 1) && (columnKey[k] == "ly11_g" || columnKey[k] == "ly11_b")) {
          headerColumns1.push({ content: 'Enrolment Previous Year XI', colSpan: colspan89, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check88 = 1;
        }
        else if ((check89 != 1) && (columnKey[k] == "promotionRate_c11_g" || columnKey[k] == "promotionRate_c11_b")) {
          headerColumns1.push({ content: 'Prmotion Rate - XI', colSpan: colspan90, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check89 = 1;
        }
        else if ((check90 != 1) && (columnKey[k] == "repetitionRate_c11_g" || columnKey[k] == "repetitionRate_c11_b")) {
          headerColumns1.push({ content: 'Repetition Rate - XI', colSpan: colspan91, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check90 = 1;
        }
        else if ((check91 != 1) && (columnKey[k] == "dropOutRate_c11_g" || columnKey[k] == "dropOutRate_c11")) {
          headerColumns1.push({ content: 'Dropout Rate - XI', colSpan: colspan92, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check91 = 1;
        }
      }
    }


    if (this.reportCode == 'R143') {

      var colspan1 = 0;
      var colspan2 = 0;
      var colspan3 = 0;
      var colspan4 = 0;
      var colspan5 = 0;
      var colspan6 = 0;
      var colspan7 = 0;
      var colspan8 = 0;
      var colspan9 = 0;
      var colspan10 = 0;
      var colspan11 = 0;
      var colspan12 = 0;
      var colspan13 = 0;
      var colspan14 = 0;
      var colspan15 = 0;
      var colspan16 = 0;
      var colspan17 = 0;
      var colspan18 = 0;
      var colspan19 = 0;
      var colspan20 = 0;
      var colspan21 = 0;
      var colspan22 = 0;
      var colspan23 = 0;
      var colspan24 = 0;
      var colspan25 = 0;
      var colspan26 = 0;
      var colspan27 = 0;
      var colspan28 = 0;
      var colspan29 = 0;
      var colspan30 = 0;
      var colspan31 = 0;
      var colspan32 = 0;
      var colspan33 = 0;
      var colspan34 = 0;
      var colspan35 = 0;
      var colspan36 = 0;
      var colspan37 = 0;
      var colspan38 = 0;
      var colspan39 = 0;
      var colspan40 = 0;
      var colspan41 = 0;
      var colspan42 = 0;
      var colspan43 = 0;
      var colspan44 = 0;
      var colspan45 = 0;
      var colspan46 = 0;
      var colspan47 = 0;
      var colspan48 = 0;
      var colspan49 = 0;
      var colspan50 = 0;
      var colspan51 = 0;
      var colspan52 = 0;
      var colspan53 = 0;
      var colspan54 = 0;
      var colspan55 = 0;
      var colspan56 = 0;
      var colspan57 = 0;
      var colspan58 = 0;
      var colspan59 = 0;
      var colspan60 = 0;
      var colspan61 = 0;
      var colspan62 = 0;
      var colspan63 = 0;
      var colspan64 = 0;
      var colspan65 = 0;
      var colspan66 = 0;
      var colspan67 = 0;
      var colspan68 = 0;
      var colspan69 = 0;
      var colspan70 = 0;
      var colspan71 = 0;
      var colspan72 = 0;
      var colspan73 = 0;
      var colspan74 = 0;
      var colspan75 = 0;
      var colspan76 = 0;
      var colspan77 = 0;
      var colspan78 = 0;
      var colspan79 = 0;
      var colspan80 = 0;
      var colspan81 = 0;
      var colspan82 = 0;
      var colspan83 = 0;
      var colspan84 = 0;
      var colspan85 = 0;
      var colspan86 = 0;
      var colspan87 = 0;
      var colspan88 = 0;
      var colspan89 = 0;
      var colspan90 = 0;
      var colspan91 = 0;
      var colspan92 = 0;


      for (let k = 0; k < columnKey.length; k++) {

        //Primary
        // 
        if (columnKey[k] == "c2_g" || columnKey[k] == "c2_b") {
          colspan5 = colspan5 + 1;
        }
        if ((colspan6 < 2) && (columnKey[k] == "r2_g" || columnKey[k] == "r2_b")) {
          colspan6 = colspan6 + 1;
        }
        if (columnKey[k] == "freshEnrolment_c2_g" || columnKey[k] == "freshEnrolment_c2_b") {
          colspan7 = colspan7 + 1;
        }
        if (columnKey[k] == "r1_g" || columnKey[k] == "r1_b") {
          colspan8 = colspan8 + 1;
        }
        if (columnKey[k] == "ly1_g" || columnKey[k] == "ly1_b") {
          colspan9 = colspan9 + 1;
        }
        if (columnKey[k] == "promotionRate_g" || columnKey[k] == "promotionRate_b") {
          colspan10 = colspan10 + 1;
        }
        if (columnKey[k] == "repetitionRate_g" || columnKey[k] == "repetitionRate_b") {
          colspan11 = colspan11 + 1;
        }
        if (columnKey[k] == "dropOutRate_g" || columnKey[k] == "dropOutRate_b") {
          colspan12 = colspan12 + 1;
        }
        if (columnKey[k] == "c3_g" || columnKey[k] == "c3_b") {
          colspan13 = colspan13 + 1;
        }
        if ((colspan14 < 2) && (columnKey[k] == "r3_g" || columnKey[k] == "r3_b")) {
          colspan14 = colspan14 + 1;
        }
        if (columnKey[k] == "freshEnrolment_c3_g" || columnKey[k] == "freshEnrolment_c3_b") {
          colspan15 = colspan15 + 1;
        }
        if ((colspan16 < 2) && (columnKey[k] == "r2_g" || columnKey[k] == "r2_b")) {
          colspan16 = colspan16 + 1;
        }
        if (columnKey[k] == "ly2_g" || columnKey[k] == "ly2_b") {
          colspan17 = colspan17 + 1;
        }
        if (columnKey[k] == "promotionRate_c2_g" || columnKey[k] == "promotionRate_c2_b") {
          colspan18 = colspan18 + 1;
        }
        if (columnKey[k] == "repetitionRate_c2_g" || columnKey[k] == "repetitionRate_c2_b") {
          colspan19 = colspan19 + 1;
        }
        if (columnKey[k] == "dropOutRate_c2_g" || columnKey[k] == "dropOutRate_c2_b") {
          colspan20 = colspan20 + 1;
        }
        if (columnKey[k] == "c4_g" || columnKey[k] == "c4_b") {
          colspan21 = colspan21 + 1;
        }
        if ((colspan22 < 2) && (columnKey[k] == "r4_g" || columnKey[k] == "r4_b")) {
          colspan22 = colspan22 + 1;
        }
        if (columnKey[k] == "freshEnrolment_c4_g" || columnKey[k] == "freshEnrolment_c4_b") {
          colspan23 = colspan23 + 1;
        }
        if ((colspan24 < 2) && (columnKey[k] == "r3_g" || columnKey[k] == "r3_b")) {
          colspan24 = colspan24 + 1;
        }
        if (columnKey[k] == "ly3_g" || columnKey[k] == "ly3_b") {
          colspan25 = colspan25 + 1;
        }
        if (columnKey[k] == "promotionRate_c3_g" || columnKey[k] == "promotionRate_c3_b") {
          colspan26 = colspan26 + 1;
        }
        if (columnKey[k] == "repetitionRate_c3_g" || columnKey[k] == "repetitionRate_c3_b") {
          colspan27 = colspan27 + 1;
        }
        if (columnKey[k] == "dropOutRate_c3_g" || columnKey[k] == "dropOutRate_c3_b") {
          colspan28 = colspan28 + 1;
        }
        if (columnKey[k] == "c5_g" || columnKey[k] == "c5_b") {
          colspan29 = colspan29 + 1;
        }
        if ((colspan30 < 2) && (columnKey[k] == "r5_g" || columnKey[k] == "r5_b")) {
          colspan30 = colspan30 + 1;
        }
        if (columnKey[k] == "freshEnrolment_c5_g" || columnKey[k] == "freshEnrolment_c5_b") {
          colspan31 = colspan31 + 1;
        }
        if ((colspan32 < 2) && (columnKey[k] == "r4_g" || columnKey[k] == "r4_b")) {
          colspan32 = colspan32 + 1;
        }
        if (columnKey[k] == "ly4_g" || columnKey[k] == "ly4_b") {
          colspan33 = colspan33 + 1;
        }
        if (columnKey[k] == "promotionRate_c4_g" || columnKey[k] == "promotionRate_c4_b") {
          colspan34 = colspan34 + 1;
        }
        if (columnKey[k] == "repetitionRate_c4_g" || columnKey[k] == "repetitionRate_c4_b") {
          colspan35 = colspan35 + 1;
        }
        if (columnKey[k] == "dropOutRate_c4_g" || columnKey[k] == "dropOutRate_c4_b") {
          colspan36 = colspan36 + 1;
        }
        if (columnKey[k] == "c6_g" || columnKey[k] == "c6_b") {
          colspan37 = colspan37 + 1;
        }
        if ((colspan38 < 2) && (columnKey[k] == "r6_g" || columnKey[k] == "r6_b")) {
          colspan38 = colspan38 + 1;
        }
        if (columnKey[k] == "freshEnrolment_c6_g" || columnKey[k] == "freshEnrolment_c6_b") {
          colspan39 = colspan39 + 1;
        }
        if ((colspan40 < 2) && (columnKey[k] == "r5_g" || columnKey[k] == "r5_b")) {
          colspan40 = colspan40 + 1;
        }
        if (columnKey[k] == "ly5_g" || columnKey[k] == "ly5_b") {
          colspan41 = colspan41 + 1;
        }
        if (columnKey[k] == "promotionRate_c5_g" || columnKey[k] == "promotionRate_c5_b") {
          colspan42 = colspan42 + 1;
        }
        if (columnKey[k] == "repetitionRate_c5_g" || columnKey[k] == "repetitionRate_c5_b") {
          colspan43 = colspan43 + 1;
        }
        if (columnKey[k] == "dropOutRate_c5_g" || columnKey[k] == "dropOutRate_c5_b") {
          colspan44 = colspan44 + 1;
        }
        //Upper Primary
        if (columnKey[k] == "c7_g" || columnKey[k] == "c7_b") {
          colspan45 = colspan45 + 1;
        }
        if ((colspan46 < 2) && (columnKey[k] == "r7_g" || columnKey[k] == "r7_b")) {
          colspan46 = colspan46 + 1;
        }
        if (columnKey[k] == "freshEnrolment_c7_g" || columnKey[k] == "freshEnrolment_c7_b") {
          colspan47 = colspan47 + 1;
        }
        if ((colspan48 < 2) && (columnKey[k] == "r6_g" || columnKey[k] == "r6_b")) {
          colspan48 = colspan48 + 1;
        }
        if (columnKey[k] == "ly6_g" || columnKey[k] == "ly6_b") {
          colspan49 = colspan49 + 1;
        }
        if (columnKey[k] == "promotionRate_c6_g" || columnKey[k] == "promotionRate_c6_b") {
          colspan50 = colspan50 + 1;
        }
        if (columnKey[k] == "repetitionRate_c6_g" || columnKey[k] == "repetitionRate_c6_b") {
          colspan51 = colspan51 + 1;
        }
        if (columnKey[k] == "dropOutRate_c6_g" || columnKey[k] == "dropOutRate_c6_b") {
          colspan52 = colspan52 + 1;
        }
        if (columnKey[k] == "c8_g" || columnKey[k] == "c8_b") {
          colspan53 = colspan53 + 1;
        }
        if ((colspan54 < 2) && (columnKey[k] == "r8_g" || columnKey[k] == "r8_b")) {
          colspan54 = colspan54 + 1;
        }
        if (columnKey[k] == "freshEnrolment_c8_g" || columnKey[k] == "freshEnrolment_c8_b") {
          colspan55 = colspan55 + 1;
        }
        if ((colspan56 < 2) && (columnKey[k] == "r7_g" || columnKey[k] == "r7_b")) {
          colspan56 = colspan56 + 1;
        }
        if (columnKey[k] == "ly7_g" || columnKey[k] == "ly7_b") {
          colspan57 = colspan57 + 1;
        }
        if (columnKey[k] == "promotionRate_c7_g" || columnKey[k] == "promotionRate_c7_b") {
          colspan58 = colspan58 + 1;
        }
        if (columnKey[k] == "repetitionRate_c7_g" || columnKey[k] == "repetitionRate_c7_b") {
          colspan59 = colspan59 + 1;
        }
        if (columnKey[k] == "dropOutRate_c7_g" || columnKey[k] == "dropOutRate_c7_b") {
          colspan60 = colspan60 + 1;
        }
        if (columnKey[k] == "c9_g" || columnKey[k] == "c9_b") {
          colspan61 = colspan61 + 1;
        }
        if ((colspan62 < 2) && (columnKey[k] == "r9_g" || columnKey[k] == "r9_b")) {
          colspan62 = colspan62 + 1;
        }
        if (columnKey[k] == "freshEnrolment_c9_g" || columnKey[k] == "freshEnrolment_c9_b") {
          colspan63 = colspan63 + 1;
        }
        if ((colspan64 < 2) && (columnKey[k] == "r8_g" || columnKey[k] == "r8_b")) {
          colspan64 = colspan64 + 1;
        }
        if (columnKey[k] == "ly8_g" || columnKey[k] == "ly8_b") {
          colspan65 = colspan65 + 1;
        }
        if (columnKey[k] == "promotionRate_c8_g" || columnKey[k] == "promotionRate_c8_b") {
          colspan66 = colspan66 + 1;
        }
        if (columnKey[k] == "repetitionRate_c8_g" || columnKey[k] == "repetitionRate_c8_b") {
          colspan67 = colspan67 + 1;
        }
        if (columnKey[k] == "dropOutRate_c8_g" || columnKey[k] == "dropOutRate_c8_b") {
          colspan68 = colspan68 + 1;
        }
        // Secondary
        if (columnKey[k] == "c10_g" || columnKey[k] == "c10_b") {
          colspan69 = colspan69 + 1;
        }
        if ((colspan70 < 2) && (columnKey[k] == "r10_g" || columnKey[k] == "r10_b")) {
          colspan70 = colspan70 + 1;
        }
        if (columnKey[k] == "freshEnrolment_c10_g" || columnKey[k] == "freshEnrolment_c10_b") {
          colspan71 = colspan71 + 1;
        }
        if ((colspan72 < 2) && (columnKey[k] == "r9_g" || columnKey[k] == "r9_b")) {
          colspan72 = colspan72 + 1;
        }
        if (columnKey[k] == "ly9_g" || columnKey[k] == "ly9_b") {
          colspan73 = colspan73 + 1;
        }
        if (columnKey[k] == "promotionRate_c9_g" || columnKey[k] == "promotionRate_c9_b") {
          colspan74 = colspan74 + 1;
        }
        if (columnKey[k] == "repetitionRate_c9_g" || columnKey[k] == "repetitionRate_c9_b") {
          colspan75 = colspan75 + 1;
        }
        if (columnKey[k] == "dropOutRate_c9_g" || columnKey[k] == "dropOutRate_c9_b") {
          colspan76 = colspan76 + 1;
        }
        if (columnKey[k] == "c11_g" || columnKey[k] == "c11_b") {
          colspan77 = colspan77 + 1;
        }
        if ((colspan78 < 2) && (columnKey[k] == "r11_g" || columnKey[k] == "r11_b")) {
          colspan78 = colspan78 + 1;
        }
        if (columnKey[k] == "freshEnrolment_c11_g" || columnKey[k] == "freshEnrolment_c11_b") {
          colspan79 = colspan79 + 1;
        }
        if ((colspan80 < 2) && (columnKey[k] == "r10_g" || columnKey[k] == "r10_b")) {
          colspan80 = colspan80 + 1;
        }
        if (columnKey[k] == "ly10_g" || columnKey[k] == "ly10_b") {
          colspan81 = colspan81 + 1;
        }
        if (columnKey[k] == "promotionRate_c10_g" || columnKey[k] == "promotionRate_c10_b") {
          colspan82 = colspan82 + 1;
        }
        if (columnKey[k] == "repetitionRate_c10_g" || columnKey[k] == "repetitionRate_c10_b") {
          colspan83 = colspan83 + 1;
        }
        if (columnKey[k] == "dropOutRate_c10_g" || columnKey[k] == "dropOutRate_c10_b") {
          colspan84 = colspan84 + 1;
        }
        // Higher Secondary
        if (columnKey[k] == "c12_g" || columnKey[k] == "c12_b") {
          colspan85 = colspan85 + 1;
        }
        if (columnKey[k] == "r12_g" || columnKey[k] == "r12_b") {
          colspan86 = colspan86 + 1;
        }
        if (columnKey[k] == "freshEnrolment_c12_g" || columnKey[k] == "freshEnrolment_c12_b") {
          colspan87 = colspan87 + 1;
        }
        if ((colspan88 < 2) && (columnKey[k] == "r11_g" || columnKey[k] == "r11_b")) {
          colspan88 = colspan88 + 1;
        }
        if (columnKey[k] == "ly11_g" || columnKey[k] == "ly11_b") {
          colspan89 = colspan89 + 1;
        }
        if (columnKey[k] == "promotionRate_c11_g" || columnKey[k] == "promotionRate_c11_b") {
          colspan90 = colspan90 + 1;
        }
        if (columnKey[k] == "repetitionRate_c11_g" || columnKey[k] == "repetitionRate_c11_b") {
          colspan91 = colspan91 + 1;
        }
        if (columnKey[k] == "dropOutRate_c11_g" || columnKey[k] == "dropOutRate_c11_b") {
          colspan92 = colspan92 + 1;
        }


      }
    }

    if (this.reportCode == 'R143') {
      var headerColumns1 = [];
      var check1 = 0;
      var check2 = 0;
      var check3 = 0;
      var check4 = 0;
      var check5 = 0;
      var check6 = 0;
      var check7 = 0;
      var check8 = 0;
      var check9 = 0;
      var check10 = 0;
      var check11 = 0;
      var check12 = 0;
      var check13 = 0;
      var check14 = 0;
      var check15 = 0;
      var check16 = 0;
      var check17 = 0;
      var check18 = 0;
      var check19 = 0;
      var check20 = 0;
      var check21 = 0;
      var check22 = 0;
      var check23 = 0;
      var check24 = 0;
      var check25 = 0;
      var check26 = 0;
      var check27 = 0;
      var check28 = 0;
      var check29 = 0;
      var check30 = 0;
      var check31 = 0;
      var check32 = 0;
      var check33 = 0;
      var check34 = 0;
      var check35 = 0;
      var check36 = 0;
      var check37 = 0;
      var check38 = 0;
      var check39 = 0;
      var check40 = 0;
      var check41 = 0;
      var check42 = 0;
      var check43 = 0;
      var check44 = 0;
      var check45 = 0;
      var check46 = 0;
      var check47 = 0;
      var check48 = 0;
      var check49 = 0;
      var check50 = 0;
      var check51 = 0;
      var check52 = 0;
      var check53 = 0;
      var check54 = 0;
      var check55 = 0;
      var check56 = 0;
      var check57 = 0;
      var check58 = 0;
      var check59 = 0;
      var check60 = 0;
      var check61 = 0;
      var check62 = 0;
      var check63 = 0;
      var check64 = 0;
      var check65 = 0;
      var check66 = 0;
      var check67 = 0;
      var check68 = 0;
      var check69 = 0;
      var check70 = 0;
      var check71 = 0;
      var check72 = 0;
      var check73 = 0;
      var check74 = 0;
      var check75 = 0;
      var check76 = 0;
      var check77 = 0;
      var check78 = 0;
      var check79 = 0;
      var check80 = 0;
      var check81 = 0;
      var check82 = 0;
      var check83 = 0;
      var check84 = 0;
      var check85 = 0;
      var check86 = 0;
      var check87 = 0;
      var check88 = 0;
      var check89 = 0;
      var check90 = 0;
      var check91 = 0;
      var check92 = 0;
      
      for (let k = 0; k < columnKey.length; k++) {

        if ((check1 != 1) && (columnKey[k] == "location")) {
          headerColumns1.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } })
          check1 = 1;
          var l = k;
        }
        else if ((check2 != 1) && (columnKey[k] == "broad_mgmt_name")) {
          headerColumns1.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } })
          check2 = 1;
          var l = k;
        }
        else if ((check3 != 1) && (columnKey[k] == "caste_name")) {
          headerColumns1.push({ content: '', colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } })
          check3 = 1;
          var l = k;
        }

        else if ((check4 != 1) && (columnKey[k] == "c2_g" || columnKey[k] == "c2_b")) {
          headerColumns1.push({ content: 'Enrolment Class II', colSpan: colspan5, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check4 = 1;
          var l = k;
        }
        else if ((check5 != 1) && (columnKey[k] == "r2_g" || columnKey[k] == "r2_b")) {
          headerColumns1.push({ content: 'Repeater Class II', colSpan: colspan6, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check5 = 1;
          var l = k;
        }
        else if ((check6 != 1) && (columnKey[k] == "freshEnrolment_c2_g" || columnKey[k] == "freshEnrolment_c2_b")) {
          headerColumns1.push({ content: 'Fresh Enrolment Class II', colSpan: colspan7, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check6 = 1;
          var l = k;
        }
        else if ((check7 != 1) && (columnKey[k] == "r1_g" || columnKey[k] == "r1_b")) {
          headerColumns1.push({ content: 'Repeater Class I', colSpan: colspan8, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check7 = 1;
          var l = k;
        }
        else if ((check8 != 1) && (columnKey[k] == "ly1_g" || columnKey[k] == "ly1_b")) {
          headerColumns1.push({ content: 'Enrolment Previous Year I', colSpan: colspan9, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check8 = 1;
          var l = k;
        }
        else if ((check9 != 1) && (columnKey[k] == "promotionRate_g" || columnKey[k] == "promotionRate_b")) {
          headerColumns1.push({ content: 'Prmotion Rate - I', colSpan: colspan10, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check9 = 1;
          var l = k;
        }
        else if ((check10 != 1) && (columnKey[k] == "repetitionRate_g" || columnKey[k] == "repetitionRate_b")) {
          headerColumns1.push({ content: 'Repetition Rate - I', colSpan: colspan11, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check10 = 1;
          var l = k;
        }
        else if ((check11 != 1) && (columnKey[k] == "dropOutRate_g" || columnKey[k] == "dropOutRate_b")) {
          headerColumns1.push({ content: 'Dropout Rate - I', colSpan: colspan12, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check11 = 1;
          var l = k;
        }

      }
      l = headerColumns1.length
      for (var k = l; k < columnKey.length; k++) {

        if ((check12 != 1) && (columnKey[k] == "c3_g" || columnKey[k] == "c3_b")) {
          headerColumns1.push({ content: 'Enrolment Class III', colSpan: colspan13, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check12 = 1;
          var m = k;
        }
        else if ((check13 != 1) && (columnKey[k] == "r3_g" || columnKey[k] == "r3_b")) {
          headerColumns1.push({ content: 'Repeater Class III', colSpan: colspan14, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check13 = 1;
          var m = k;
        }
        else if ((check14 != 1) && (columnKey[k] == "freshEnrolment_c3_g" || columnKey[k] == "freshEnrolment_c3_b")) {
          headerColumns1.push({ content: 'Fresh Enrolment Class III', colSpan: colspan15, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check14 = 1;
          var m = k;
        }
        else if ((check15 != 1) && (columnKey[k] == "r2_g" || columnKey[k] == "r2_b")) {
          headerColumns1.push({ content: 'Repeater Class II', colSpan: colspan16, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check15 = 1;
          var m = k;
        }
        else if ((check16 != 1) && (columnKey[k] == "ly2_g" || columnKey[k] == "ly2_b")) {
          headerColumns1.push({ content: 'Enrolment Previous Year II', colSpan: colspan17, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check16 = 1;
          var m = k;
        }
        else if ((check17 != 1) && (columnKey[k] == "promotionRate_c2_g" || columnKey[k] == "promotionRate_c2_b")) {
          headerColumns1.push({ content: 'Prmotion Rate - II', colSpan: colspan18, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check17 = 1;
          var m = k;
        }
        else if ((check18 != 1) && (columnKey[k] == "repetitionRate_c2_g" || columnKey[k] == "repetitionRate_c2_b")) {
          headerColumns1.push({ content: 'Repetition Rate - II', colSpan: colspan19, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check18 = 1;
          var m = k;
        }
        else if ((check19 != 1) && (columnKey[k] == "dropOutRate_c2_g" || columnKey[k] == "dropOutRate_c2_b")) {
          headerColumns1.push({ content: 'Dropout Rate - II', colSpan: colspan20, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check19 = 1;
          var m = k;
        }

      }
      m = headerColumns1.length
      for (var k = m; k < columnKey.length; k++) {
        if ((check20 != 1) && (columnKey[k] == "c4_g" || columnKey[k] == "c4_b")) {
          headerColumns1.push({ content: 'Enrolment Class IV', colSpan: colspan21, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check20 = 1;
          var n = k;
        }
        else if ((check21 != 1) && (columnKey[k] == "r4_g" || columnKey[k] == "r4_b")) {
          headerColumns1.push({ content: 'Repeater Class IV', colSpan: colspan22, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check21 = 1;
          var n = k;
        }
        else if ((check22 != 1) && (columnKey[k] == "freshEnrolment_c4_g" || columnKey[k] == "freshEnrolment_c4_b")) {
          headerColumns1.push({ content: 'Fresh Enrolment Class IV', colSpan: colspan23, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check22 = 1;
          var n = k;
        }
        else if ((check23 != 1) && (columnKey[k] == "r3_g" || columnKey[k] == "r3_b")) {
          headerColumns1.push({ content: 'Repeater Class III', colSpan: colspan24, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check23 = 1;
          var n = k;
        }
        else if ((check24 != 1) && (columnKey[k] == "ly3_g" || columnKey[k] == "ly3_b")) {
          headerColumns1.push({ content: 'Enrolment Previous Year III', colSpan: colspan25, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check24 = 1;
          var n = k;
        }
        else if ((check25 != 1) && (columnKey[k] == "promotionRate_c3_g" || columnKey[k] == "promotionRate_c3_b")) {
          headerColumns1.push({ content: 'Prmotion Rate - III', colSpan: colspan26, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check25 = 1;
          var n = k;
        }
        else if ((check26 != 1) && (columnKey[k] == "repetitionRate_c3_g" || columnKey[k] == "repetitionRate_c3_b")) {
          headerColumns1.push({ content: 'Repetition Rate - III', colSpan: colspan27, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check26 = 1;
          var n = k;
        }
        else if ((check27 != 1) && (columnKey[k] == "dropOutRate_c3_g" || columnKey[k] == "dropOutRate_c3_b")) {
          headerColumns1.push({ content: 'Dropout Rate - III', colSpan: colspan28, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check27 = 1;
          var n = k;
        }

      }
      n = headerColumns1.length
      for (var k = n; k < columnKey.length; k++) {
        if ((check28 != 1) && (columnKey[k] == "c5_g" || columnKey[k] == "c5_b")) {
          headerColumns1.push({ content: 'Enrolment Class V', colSpan: colspan29, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check28 = 1;
          var o = k;
        }
        else if ((check29 != 1) && (columnKey[k] == "r5_g" || columnKey[k] == "r5_b")) {
          headerColumns1.push({ content: 'Repeater Class V', colSpan: colspan30, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check29 = 1;
          var o = k;
        }
        else if ((check30 != 1) && (columnKey[k] == "freshEnrolment_c5_g" || columnKey[k] == "freshEnrolment_c5_b")) {
          headerColumns1.push({ content: 'Fresh Enrolment Class V', colSpan: colspan31, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check30 = 1;
          var o = k;
        }
        else if ((check31 != 1) && (columnKey[k] == "r4_g" || columnKey[k] == "r4_b")) {
          headerColumns1.push({ content: 'Repeater Class IV', colSpan: colspan32, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check31 = 1;
          var o = k;
        }
        else if ((check32 != 1) && (columnKey[k] == "ly4_g" || columnKey[k] == "ly4_b")) {
          headerColumns1.push({ content: 'Enrolment Previous Year IV', colSpan: colspan33, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check32 = 1;
          var o = k;
        }
        else if ((check33 != 1) && (columnKey[k] == "promotionRate_c4_g" || columnKey[k] == "promotionRate_c4_b")) {
          headerColumns1.push({ content: 'Prmotion Rate - IV', colSpan: colspan34, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check33 = 1;
          var o = k;
        }
        else if ((check34 != 1) && (columnKey[k] == "repetitionRate_c4_g" || columnKey[k] == "repetitionRate_c4_b")) {
          headerColumns1.push({ content: 'Repetition Rate - IV', colSpan: colspan35, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check34 = 1;
          var o = k;
        }
        else if ((check35 != 1) && (columnKey[k] == "dropOutRate_c4_g" || columnKey[k] == "dropOutRate_c4_b")) {
          headerColumns1.push({ content: 'Dropout Rate - IV', colSpan: colspan36, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check35 = 1;
          var o = k;
        }
      }

      o = headerColumns1.length
      for (var k = o; k < columnKey.length; k++) {
        if ((check36 != 1) && (columnKey[k] == "c6_g" || columnKey[k] == "c6_b")) {
          headerColumns1.push({ content: 'Enrolment Class VI', colSpan: colspan37, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check36 = 1;
          var p = k;
        }
        else if ((check37 != 1) && (columnKey[k] == "r6_g" || columnKey[k] == "r6_b")) {
          headerColumns1.push({ content: 'Repeater Class VI', colSpan: colspan38, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check37 = 1;
          var p = k;
        }
        else if ((check38 != 1) && (columnKey[k] == "freshEnrolment_c6_g" || columnKey[k] == "freshEnrolment_c6_b")) {
          headerColumns1.push({ content: 'Fresh Enrolment Class VI', colSpan: colspan39, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check38 = 1;
          var p = k;
        }
        else if ((check39 != 1) && (columnKey[k] == "r5_g" || columnKey[k] == "r5_b")) {
          headerColumns1.push({ content: 'Repeater Class V', colSpan: colspan40, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check39 = 1;
          var p = k;
        }
        else if ((check40 != 1) && (columnKey[k] == "ly5_g" || columnKey[k] == "ly5_b")) {
          headerColumns1.push({ content: 'Enrolment Previous Year V', colSpan: colspan41, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check40 = 1;
          var p = k;
        }
        else if ((check41 != 1) && (columnKey[k] == "promotionRate_c5_g" || columnKey[k] == "promotionRate_c5_b")) {
          headerColumns1.push({ content: 'Prmotion Rate - V', colSpan: colspan42, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check41 = 1;
          var p = k;
        }
        else if ((check42 != 1) && (columnKey[k] == "repetitionRate_c5_g" || columnKey[k] == "repetitionRate_c5_b")) {
          headerColumns1.push({ content: 'Repetition Rate - V', colSpan: colspan43, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check42 = 1;
          var p = k;
        }
        else if ((check43 != 1) && (columnKey[k] == "dropOutRate_c5_g" || columnKey[k] == "dropOutRate_c5_b")) {
          headerColumns1.push({ content: 'Dropout Rate - V', colSpan: colspan44, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check43 = 1;
          var p = k;
        }

      }

      p = headerColumns1.length
      for (var k = p; k < columnKey.length; k++) {
        if ((check44 != 1) && (columnKey[k] == "c7_g" || columnKey[k] == "c7_b")) {
          headerColumns1.push({ content: 'Enrolment Class VII', colSpan: colspan45, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check44 = 1;
          var q = k;
        }
        else if ((check45 != 1) && (columnKey[k] == "r7_g" || columnKey[k] == "r7_b")) {
          headerColumns1.push({ content: 'Repeater Class VII', colSpan: colspan46, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check45 = 1;
          var q = k;
        }
        else if ((check46 != 1) && (columnKey[k] == "freshEnrolment_c7_g" || columnKey[k] == "freshEnrolment_c7_b")) {
          headerColumns1.push({ content: 'Fresh Enrolment Class VII', colSpan: colspan47, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check46 = 1;
          var q = k;
        }
        else if ((check47 != 1) && (columnKey[k] == "r6_g" || columnKey[k] == "r6_b")) {
          headerColumns1.push({ content: 'Repeater Class VI', colSpan: colspan48, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check47 = 1;
          var q = k;
        }
        else if ((check48 != 1) && (columnKey[k] == "ly6_g" || columnKey[k] == "ly6_b")) {
          headerColumns1.push({ content: 'Enrolment Previous Year VI', colSpan: colspan49, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check48 = 1;
          var q = k;
        }
        else if ((check49 != 1) && (columnKey[k] == "promotionRate_c6_g" || columnKey[k] == "promotionRate_c6_b")) {
          headerColumns1.push({ content: 'Prmotion Rate - VI', colSpan: colspan50, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check49 = 1;
          var q = k;
        }
        else if ((check50 != 1) && (columnKey[k] == "repetitionRate_c6_g" || columnKey[k] == "repetitionRate_c6_b")) {
          headerColumns1.push({ content: 'Repetition Rate - VI', colSpan: colspan51, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check50 = 1;
          var q = k;
        }
        else if ((check51 != 1) && (columnKey[k] == "dropOutRate_c6_g" || columnKey[k] == "dropOutRate_c6_b")) {
          headerColumns1.push({ content: 'Dropout Rate - VI', colSpan: colspan52, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check51 = 1;
          var q = k;
        }

      }

      q = headerColumns1.length
      for (var k = q; k < columnKey.length; k++) {
        if ((check52 != 1) && (columnKey[k] == "c8_g" || columnKey[k] == "c8_b")) {
          headerColumns1.push({ content: 'Enrolment Class VIII', colSpan: colspan53, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check52 = 1;
          var r = k;
        }
        else if ((check53 != 1) && (columnKey[k] == "r8_g" || columnKey[k] == "r8_b")) {
          headerColumns1.push({ content: 'Repeater Class VIII', colSpan: colspan54, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check53 = 1;
          var r = k;
        }
        else if ((check54 != 1) && (columnKey[k] == "freshEnrolment_c8_g" || columnKey[k] == "freshEnrolment_c8_b")) {
          headerColumns1.push({ content: 'Fresh Enrolment Class VIII', colSpan: colspan55, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check54 = 1;
          var r = k;
        }
        else if ((check55 != 1) && (columnKey[k] == "r7_g" || columnKey[k] == "r7_b")) {
          headerColumns1.push({ content: 'Repeater Class VII', colSpan: colspan56, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check55 = 1;
          var r = k;
        }
        else if ((check56 != 1) && (columnKey[k] == "ly7_g" || columnKey[k] == "ly7_b")) {
          headerColumns1.push({ content: 'Enrolment Previous Year II', colSpan: colspan57, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check56 = 1;
          var r = k;
        }
        else if ((check57 != 1) && (columnKey[k] == "promotionRate_c7_g" || columnKey[k] == "promotionRate_c7_b")) {
          headerColumns1.push({ content: 'Prmotion Rate - VII', colSpan: colspan58, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check57 = 1;
          var r = k;
        }
        else if ((check58 != 1) && (columnKey[k] == "repetitionRate_c7_g" || columnKey[k] == "repetitionRate_c7_b")) {
          headerColumns1.push({ content: 'Repetition Rate - VII', colSpan: colspan59, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check58 = 1;
          var r = k;
        }
        else if ((check59 != 1) && (columnKey[k] == "dropOutRate_c7_g" || columnKey[k] == "dropOutRate_c7_b")) {
          headerColumns1.push({ content: 'Dropout Rate - VII', colSpan: colspan60, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check59 = 1;
          var r = k;
        }

      }

      r = headerColumns1.length
      for (var k = r; k < columnKey.length; k++) {
        if ((check60 != 1) && (columnKey[k] == "c9_g" || columnKey[k] == "c9_b")) {
          headerColumns1.push({ content: 'Enrolment Class IX', colSpan: colspan61, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check60 = 1;
          var s = k;
        }
        else if ((check61 != 1) && (columnKey[k] == "r9_g" || columnKey[k] == "r9_b")) {
          headerColumns1.push({ content: 'Repeater Class IX', colSpan: colspan62, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check61 = 1;
          var s = k;
        }
        else if ((check62 != 1) && (columnKey[k] == "freshEnrolment_c9_g" || columnKey[k] == "freshEnrolment_c9_b")) {
          headerColumns1.push({ content: 'Fresh Enrolment Class IX', colSpan: colspan63, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check62 = 1;
          var s = k;
        }
        else if ((check63 != 1) && (columnKey[k] == "r8_g" || columnKey[k] == "r8_b")) {
          headerColumns1.push({ content: 'Repeater Class VIII', colSpan: colspan64, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check63 = 1;
          var s = k;
        }
        else if ((check64 != 1) && (columnKey[k] == "ly8_g" || columnKey[k] == "ly8_b")) {
          headerColumns1.push({ content: 'Enrolment Previous Year VIII', colSpan: colspan65, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check64 = 1;
          var s = k;
        }
        else if ((check65 != 1) && (columnKey[k] == "promotionRate_c8_g" || columnKey[k] == "promotionRate_c8_b")) {
          headerColumns1.push({ content: 'Prmotion Rate - VIII', colSpan: colspan66, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check65 = 1;
          var s = k;
        }
        else if ((check66 != 1) && (columnKey[k] == "repetitionRate_c8_g" || columnKey[k] == "repetitionRate_c8_b")) {
          headerColumns1.push({ content: 'Repetition Rate - VIII', colSpan: colspan67, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check66 = 1;
          var s = k;
        }
        else if ((check67 != 1) && (columnKey[k] == "dropOutRate_c8_g" || columnKey[k] == "dropOutRate_c8_b")) {
          headerColumns1.push({ content: 'Dropout Rate - VIII', colSpan: colspan68, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check67 = 1;
          var s = k;
        }

      }

      s = headerColumns1.length
      for (var k = s; k < columnKey.length; k++) {
        if ((check68 != 1) && (columnKey[k] == "c10_g" || columnKey[k] == "c10_b")) {
          headerColumns1.push({ content: 'Enrolment Class X', colSpan: colspan69, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check68 = 1;
          var t = k
        }
        else if ((check69 != 1) && (columnKey[k] == "r10_g" || columnKey[k] == "r10_b")) {
          headerColumns1.push({ content: 'Repeater Class X', colSpan: colspan70, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check69 = 1;
          var t = k
        }
        else if ((check70 != 1) && (columnKey[k] == "freshEnrolment_c10_g" || columnKey[k] == "freshEnrolment_c10_b")) {
          headerColumns1.push({ content: 'Fresh Enrolment Class X', colSpan: colspan71, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check70 = 1;
          var t = k
        }
        else if ((check71 != 1) && (columnKey[k] == "r9_g" || columnKey[k] == "r9_b")) {
          headerColumns1.push({ content: 'Repeater Class IX', colSpan: colspan72, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check71 = 1;
          var t = k
        }
        else if ((check72 != 1) && (columnKey[k] == "ly9_g" || columnKey[k] == "ly9_b")) {
          headerColumns1.push({ content: 'Enrolment Previous Year IX', colSpan: colspan73, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check72 = 1;
          var t = k
        }
        else if ((check73 != 1) && (columnKey[k] == "promotionRate_c9_g" || columnKey[k] == "promotionRate_c9_b")) {
          headerColumns1.push({ content: 'Prmotion Rate - IX', colSpan: colspan74, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check73 = 1;
          var t = k
        }
        else if ((check74 != 1) && (columnKey[k] == "repetitionRate_c9_g" || columnKey[k] == "repetitionRate_c9_b")) {
          headerColumns1.push({ content: 'Repetition Rate - IX', colSpan: colspan75, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check74 = 1;
          var t = k
        }
        else if ((check75 != 1) && (columnKey[k] == "dropOutRate_c9_g" || columnKey[k] == "dropOutRate_c9_b")) {
          headerColumns1.push({ content: 'Dropout Rate - IX', colSpan: colspan76, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check75 = 1;
          var t = k
        }

      }
      t = headerColumns1.length
      for (var k = t; k < columnKey.length; k++) {
        if ((check76 != 1) && (columnKey[k] == "c11_g" || columnKey[k] == "c11_b")) {
          headerColumns1.push({ content: 'Enrolment Class XI', colSpan: colspan77, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check76 = 1;
          var u = k;
        }
        else if ((check77 != 1) && (columnKey[k] == "r11_g" || columnKey[k] == "r11_b")) {
          headerColumns1.push({ content: 'Repeater Class XI', colSpan: colspan78, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check77 = 1;
          var u = k;
        }
        else if ((check78 != 1) && (columnKey[k] == "freshEnrolment_c11_g" || columnKey[k] == "freshEnrolment_c11_b")) {
          headerColumns1.push({ content: 'Fresh Enrolment Class XI', colSpan: colspan79, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check78 = 1;
          var u = k;
        }
        else if ((check79 != 1) && (columnKey[k] == "r10_g" || columnKey[k] == "r10_b")) {
          headerColumns1.push({ content: 'Repeater Class X', colSpan: colspan80, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check79 = 1;
          var u = k;
        }
        else if ((check80 != 1) && (columnKey[k] == "ly10_g" || columnKey[k] == "ly10_b")) {
          headerColumns1.push({ content: 'Enrolment Previous Year X', colSpan: colspan81, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check80 = 1;
          var u = k;
        }
        else if ((check81 != 1) && (columnKey[k] == "promotionRate_c10_g" || columnKey[k] == "promotionRate_c10_b")) {
          headerColumns1.push({ content: 'Prmotion Rate - X', colSpan: colspan82, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check81 = 1;
          var u = k;
        }
        else if ((check82 != 1) && (columnKey[k] == "repetitionRate_c10_g" || columnKey[k] == "repetitionRate_c10_b")) {
          headerColumns1.push({ content: 'Repetition Rate - X', colSpan: colspan83, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check82 = 1;
          var u = k;
        }
        else if ((check83 != 1) && (columnKey[k] == "dropOutRate_c10_g" || columnKey[k] == "dropOutRate_c10_b")) {
          headerColumns1.push({ content: 'Dropout Rate - X', colSpan: colspan84, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check83 = 1;
          var u = k;
        }

      }
      u = headerColumns1.length
      for (var k = u; k < columnKey.length; k++) {
        if ((check84 != 1) && (columnKey[k] == "c12_g" || columnKey[k] == "c12_b")) {
          headerColumns1.push({ content: 'Enrolment Class XII', colSpan: colspan85, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check84 = 1;
        }
        else if ((check85 != 1) && (columnKey[k] == "r12_g" || columnKey[k] == "r12_b")) {
          headerColumns1.push({ content: 'Repeater Class XII', colSpan: colspan86, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check85 = 1;
        }
        else if ((check86 != 1) && (columnKey[k] == "freshEnrolment_c12_g" || columnKey[k] == "freshEnrolment_c12_b")) {
          headerColumns1.push({ content: 'Fresh Enrolment Class XII', colSpan: colspan87, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check86 = 1;
        }
        else if ((check87 != 1) && (columnKey[k] == "r11_g" || columnKey[k] == "r11_b")) {
          headerColumns1.push({ content: 'Repeater Class XI', colSpan: colspan88, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check87 = 1;
        }
        else if ((check88 != 1) && (columnKey[k] == "ly11_g" || columnKey[k] == "ly11_b")) {
          headerColumns1.push({ content: 'Enrolment Previous Year XI', colSpan: colspan89, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check88 = 1;
        }
        else if ((check89 != 1) && (columnKey[k] == "promotionRate_c11_g" || columnKey[k] == "promotionRate_c11_b")) {
          headerColumns1.push({ content: 'Prmotion Rate - XI', colSpan: colspan90, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check89 = 1;
        }
        else if ((check90 != 1) && (columnKey[k] == "repetitionRate_c11_g" || columnKey[k] == "repetitionRate_c11_b")) {
          headerColumns1.push({ content: 'Repetition Rate - XI', colSpan: colspan91, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check90 = 1;
        }
        else if ((check91 != 1) && (columnKey[k] == "dropOutRate_c11_g" || columnKey[k] == "dropOutRate_c11")) {
          headerColumns1.push({ content: 'Dropout Rate - XI', colSpan: colspan92, styles: { halign: 'center', fillColor: [22, 160, 133] } });
          check91 = 1;
        }
      }
    }








    itemNew.forEach(element => {
      var temp = [];
      for (let i = 0; i < columnKey.length; i++) {
        temp.push(element[columnKey[i]]);
      }
      rows.push(temp);
    });

    itemNew = this.finalJSONNew;
    itemNew.forEach(element => {
      var temp = [];
      for (let i = 0; i < columnKey.length; i++) {
        temp.push(element[columnKey[i]]);
      }
      rows.push(temp);
    });

    this.finalJSONNew = [];



    const uniHeader = this.uniHeader;
    const reportCode = this.reportCode;
    const uniYear = this.uniYear;
    const uniState = this.uniState;
    const uniDist = this.uniDist;
    const uniBlock = this.uniBlock;
    const currentDate = this.reportDate;

    if (uniState === "National" || uniState === "national") {
      this.reportDescription = "Report type: National";
      this.reportDescriptionName = "Report type - National";
    } else if (uniState === "State Name :all") {
      this.reportDescription = "Report type: State-wise";
      this.reportDescriptionName = "Report type - State-wise";
    } else if (uniDist === "all") {
      this.reportDescription = uniState + "   District: All District";
      this.reportDescriptionName = uniState + "   District - All District";
    } else if (uniState != "national" && uniState != "State Name :all" && uniDist == "none") {
      this.reportDescription = uniState;
      this.reportDescriptionName = uniState;
    } else if (uniBlock === "all") {
      this.reportDescription = uniState + "   District : " + uniDist + "    Block : All Block";
      this.reportDescriptionName = uniState + "   District : " + uniDist + "    Block - All Block";
    } else if (uniState != "national" && uniState != "State Name :all" && uniDist != "none" && uniDist != "all" && uniBlock === "none") {
      this.reportDescription = uniState + "   District : " + uniDist;
      this.reportDescriptionName = uniState + "   District - " + uniDist;
    } else {
      this.reportDescription = uniState + "   District : " + uniDist + "    Block : " + uniBlock;
      this.reportDescriptionName = uniState + "   District - " + uniDist + "    Block - " + uniBlock;
    }
    const tableNote = this.thableNote;
    const splitTitle = doc.splitTextToSize(tableNote, 350);
    const reportDescription = this.reportDescription;
    const reportDescriptionName = this.reportDescriptionName;
    const heights = 0;



    if (reportCode === "R117") {
      var headmain = head117
      headmain[0] = headerColumns
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R136") {
      var headmain = head136
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R147") {
      var headmain = head1431
      headmain[0] = headerColumns1
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R143") {
      var headmain = head143
      headmain[0] = headerColumns1
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R144" || reportCode === "R145" || reportCode === "R146") {
      var headmain = head144
      headmain[0] = headerColumns1
      headmain[1] = headerColumns
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R148") {
      var headmain = head148
      // headmain[0] = headerColumns
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R149") {
      var headmain = head145
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R150") {
      var headmain = head146
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R101") {
      var headmain = head101
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R102") {
      var headmain = head1011
      headmain[0] = headerColumns
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R103") {
      var headmain = head1011
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R116") {
      var headmain = head116
      headmain[0] = headerColumns
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R115") {
      var headmain = head115
      headmain[0] = headerColumns
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R104") {
      var headmain = head104
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R119") {
      var headmain = head119
      headmain[0] = headerColumns1
      headmain[1] = headerColumns
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R123") {
      var headmain = head123
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R124") {
      var headmain = head123
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R43") {
      var headmain = head43
      headmain[0] = headerColumns
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R95") {
      var headmain = head95
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R96") {
      var headmain = head96
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R98") {
      var headmain = head98
      headmain[0] = headerColumns
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R113") {
      var headmain = head113
      headmain[0] = headerColumns
      headmain[1] = headerColumns1
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R153") {
      var headmain = head153
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R94") {
      var headmain = head94
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R131") {
      var headmain = head131
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R132") {
      var headmain = head132
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R133") {
      var headmain = head133
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R97") {
      var headmain = head97
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R100") {
      var headmain = head100
      headmain[0] = headerColumns;
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R44") {
      var headmain = head44
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R45") {
      var headmain = head45
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R46") {
      var headmain = head46
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R47") {
      var headmain = head47
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R99") {
      var headmain = head99
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R106" || reportCode === "R107") {
      var headmain = head106
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R105") {
      var headmain = head105
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R126") {
      var headmain = head126
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R127") {
      var headmain = head127
      headmain[0] = headerColumns
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R128") {
      var headmain = head128
      headmain[0] = headerColumns;
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R129") {
      var headmain = head129
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R125") {
      var headmain = head125
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R135") {
      var headmain = head135
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R138") {
      var headmain = head138
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R137") {
      var headmain = head137
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R139") {
      var headmain = head139
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R140") {
      var headmain = head140
      this.testingPDF(headmain, rows, reportnumber)
    }
    else if (reportCode === "R141") {
      var headmain = head43
      headmain[0] = headerColumns
      this.testingPDF(headmain, rows, reportnumber)
    }
    else {
      doc.autoTable(col, rows, {
        addPageContent: function (data) {
          doc.setTextColor(34, 77, 138);
          doc.addImage("assets/images/udise-sm-logo.png", "PNG", 15, 10, 20, 7);
          doc.setFontSize(12);
          if (reportCode == 'R100' || reportCode == 'R107' || reportCode == 'R106' || reportCode == 'R105' || reportCode == 'R99' || reportCode == 'R141' || reportCode == 'R124' || reportCode == 'R123' || reportCode == 'R147' || reportCode == 'R137' || reportCode == 'R143' || reportCode == 'R97' || reportCode == 'R101' || reportCode == 'R98' || reportCode == 'R113' || reportCode == 'R43' || reportCode == 'R96' || reportCode == 'R48' || reportCode == 'R95') {
            doc.text(1145, 15, "Report Id : " + reportnumber)
          } else {
            doc.text(254, 15, "Report Id : " + reportnumber)
          }
          // doc.text(254, 15, "Report Id : " + reportnumber)
          if (reportCode === "R109" || reportCode === "R108" || reportCode === "R100") {
            doc.setFontSize(12);
          } else {
            doc.setFontSize(14);
          }

          if (reportCode === "R62" || reportCode === "R60" || reportCode === "R61" || reportCode === "R100") {
            const uniHeader1 = uniHeader.replace(/[^a-zA-Z ]/g, "");
            doc.text(15, 25, uniHeader1);
          }
          else {
            doc.text(15, 25, uniHeader);
          }
          doc.setFontSize(10);
          doc.text(15, 31, reportDescription);

          // Formatting Year Value to Year Start
        if(uniYear == '13' || uniYear == 13){
          var uniYearFormatted = '2012-13';
        }else if(uniYear == '14' || uniYear == 14){
          var uniYearFormatted = '2013-14';
        }else if(uniYear == '15' || uniYear == 15){
          var uniYearFormatted = '2014-15';
        }else if(uniYear == '16' || uniYear == 16){
          var uniYearFormatted = '2015-16';
        }else if(uniYear == '17' || uniYear == 17){
          var uniYearFormatted = '2016-17';
        }else if(uniYear == '18' || uniYear == 18){
          var uniYearFormatted = '2017-18';
        }else if(uniYear == '19' || uniYear == 19){
          var uniYearFormatted = '2018-19';
        }else if(uniYear == '20' || uniYear == 20){
          var uniYearFormatted = '2019-20';
        }else if(uniYear == '21' || uniYear == 21){
          var uniYearFormatted = '2020-21';
        }

          if (reportCode == 'R44' || reportCode == 'R100' || reportCode == 'R107' || reportCode == 'R106' || reportCode == 'R105' || reportCode == 'R99' || reportCode == 'R141' || reportCode == 'R124' || reportCode == 'R123' || reportCode == 'R147' || reportCode == 'R137' || reportCode == 'R143' || reportCode == 'R97' || reportCode == 'R101' || reportCode == 'R98' || reportCode == 'R113' || reportCode == 'R43' || reportCode == 'R96' || reportCode == 'R48' || reportCode == 'R95') {
            doc.text(1136, 31, "Academic Year :" + uniYearFormatted);
            doc.line(15, 35, 1175, 35);
          } else {
            doc.text(245, 31, "Academic Year :" + uniYearFormatted);
            doc.line(15, 35, 282, 35);
          }
          // doc.text(245, 31, "Academic Year :" + uniYear);

          // doc.line(15, 35, 282, 35);
        },
        margin: {
          top: 40,
          bottom: 15,
        }, tableLineColor: [189, 195, 199],
        tableLineWidth: 0.75,
        bodyStyles: { lineColor: [0, 0, 0] },
        theme: 'grid',
        styles: {
        },
        columnStyles: {
          first_name: {
            fillColor: [41, 128, 185], textColor: 255, fontStyle: 'bold',
          }
        },
        headerStyles: {
          lineWidth: 0.4,
          lineColor: [0, 0, 0]
        }
      }
      );
      let height = doc.internal.pageSize.getHeight();
      doc.setFontSize(12);
      doc.text(15, height - 13, splitTitle);
      doc.setTextColor(34, 77, 138);
      doc.addImage("assets/images/nic-sm-logo.png", "PNG", 15, height - 10, 20, 7);
      // doc.text(200, height - 5, "Report generated on :" + currentDate);
      var pageCount = doc.internal.getNumberOfPages();
      for (var i = 0; i <= pageCount; i++) {
        if (reportCode == 'R44' || reportCode == 'R100' || reportCode == 'R107' || reportCode == 'R106' || reportCode == 'R105' || reportCode == 'R99' || reportCode == 'R141' || reportCode == 'R124' || reportCode == 'R123' || reportCode == 'R147' || reportCode == 'R137' || reportCode == 'R143' || reportCode == 'R97' || reportCode == 'R101' || reportCode == 'R98' || reportCode == 'R113' || reportCode == 'R43' || reportCode == 'R96' || reportCode == 'R48' || reportCode == 'R95') {
          doc.setPage(i)
          doc.text(1091, height - 5, "Report generated on :" + currentDate);
        } else {
          doc.setPage(i)
          doc.text(200, height - 5, "Report generated on :" + currentDate);
        }
      }
      doc.save(this.uniHeader + "_" + reportDescriptionName + "_" + uniYear + '.pdf');
    }
  }

  testingPDF(headmain, rows, test) {

    var reportnumber = test

    if (this.reportCode == 'R150' || this.reportCode == 'R149' || this.reportCode == 'R148' || this.reportCode == 'R44' || this.reportCode == 'R45' || this.reportCode == 'R145' || this.reportCode == 'R144' || this.reportCode == 'R135' || this.reportCode == 'R146' || this.reportCode == 'R136' || this.reportCode == 'R100' || this.reportCode == 'R107' || this.reportCode == 'R106' || this.reportCode == 'R105' || this.reportCode == 'R99' || this.reportCode == 'R141' || this.reportCode == 'R124' || this.reportCode == 'R123' || this.reportCode == 'R137' || this.reportCode == 'R48' || this.reportCode == 'R101' || this.reportCode == 'R98' || this.reportCode == 'R97' || this.reportCode == 'R113' || this.reportCode == 'R43' || this.reportCode == 'R96' || this.reportCode == 'R95') {
      var doc = new jsPDF('l', 'mm', 'a0');
    } else if (this.reportCode == 'R143' || this.reportCode == 'R147') {
      var doc = new jsPDF('l', 'mm', [1000, 3000]);
    } else {
      var doc = new jsPDF('l', 'mm', [297, 210]);
    }



    const uniHeader = this.uniHeader;
    const reportCode = this.reportCode;
    const uniYear = this.uniYear;
    const uniState = this.uniState;
    const uniDist = this.uniDist;
    const uniBlock = this.uniBlock;
    const currentDate = this.reportDate;

    if (uniState === "National") {
      this.reportDescription = "Report type: National";
      this.reportDescriptionName = "Report type - National";
    } else if (uniState === "State Name :all") {
      this.reportDescription = "Report type: State-wise";
      this.reportDescriptionName = "Report type - State-wise";
    } else if (uniDist === "all") {
      this.reportDescription = uniState + "   District: All District";
      this.reportDescriptionName = uniState + "   District - All District";
    } else if (uniState != "national" && uniState != "State Name :all" && uniDist == "none") {
      this.reportDescription = uniState;
      this.reportDescriptionName = uniState;
    } else if (uniBlock === "all") {
      this.reportDescription = uniState + "   District : " + uniDist + "    Block : All Block";
      this.reportDescriptionName = uniState + "   District : " + uniDist + "    Block - All Block";
    } else if (uniState != "national" && uniState != "State Name :all" && uniDist != "none" && uniDist != "all" && uniBlock === "none") {
      this.reportDescription = uniState + "   District : " + uniDist;
      this.reportDescriptionName = uniState + "   District - " + uniDist;
    } else {
      this.reportDescription = uniState + "   District : " + uniDist + "    Block : " + uniBlock;
      this.reportDescriptionName = uniState + "   District - " + uniDist + "    Block - " + uniBlock;
    }
    const tableNote = this.thableNote;
    const splitTitle = doc.splitTextToSize(tableNote, 350);
    const reportDescription = this.reportDescription;
    const reportDescriptionName = this.reportDescriptionName;
    const heights = 0;

    doc.autoTable({
      head: headmain,
      body: rows,
      addPageContent: function (data) {
        doc.setTextColor(34, 77, 138);
        doc.addImage("assets/images/udise-sm-logo.png", "PNG", 15, 10, 20, 7);
        doc.setFontSize(12);
        if (reportCode == 'R150' || reportCode == 'R149' || reportCode == 'R148' || reportCode == 'R44' || reportCode == 'R45' || reportCode == 'R145' || reportCode == 'R144' || reportCode == 'R135' || reportCode == 'R146' || reportCode == 'R136' || reportCode == 'R100' || reportCode == 'R107' || reportCode == 'R106' || reportCode == 'R105' || reportCode == 'R99' || reportCode == 'R141' || reportCode == 'R124' || reportCode == 'R123' || reportCode == 'R147' || reportCode == 'R137' || reportCode == 'R143' || reportCode == 'R97' || reportCode == 'R101' || reportCode == 'R98' || reportCode == 'R113' || reportCode == 'R43' || reportCode == 'R96' || reportCode == 'R48' || reportCode == 'R95') {
          doc.text(1145, 15, "Report Id : " + reportnumber)
        } else {
          doc.text(254, 15, "Report Id : " + reportnumber)
        }
        // doc.text(254, 15, "Report Id : " + reportnumber)
        if (reportCode === "R106" || reportCode === "R107" || reportCode === "R62" || reportCode === "R100") {
          doc.setFontSize(11);
        } else {
          doc.setFontSize(14);
        }
        if (reportCode === "R62" || reportCode === "R60" || reportCode === "R61" || reportCode === "R100") {
          const uniHeader1 = uniHeader.replace(/[^a-zA-Z ]/g, "");
          doc.text(15, 25, uniHeader1);
        } else {
          doc.text(15, 25, uniHeader);
        }

        doc.setFontSize(10);
        doc.text(15, 31, reportDescription);

             // Formatting Year Value to Year Start
             if(uniYear == '13' || uniYear == 13){
              var uniYearFormatted = '2012-13';
            }else if(uniYear == '14' || uniYear == 14){
              var uniYearFormatted = '2013-14';
            }else if(uniYear == '15' || uniYear == 15){
              var uniYearFormatted = '2014-15';
            }else if(uniYear == '16' || uniYear == 16){
              var uniYearFormatted = '2015-16';
            }else if(uniYear == '17' || uniYear == 17){
              var uniYearFormatted = '2016-17';
            }else if(uniYear == '18' || uniYear == 18){
              var uniYearFormatted = '2017-18';
            }else if(uniYear == '19' || uniYear == 19){
              var uniYearFormatted = '2018-19';
            }else if(uniYear == '20' || uniYear == 20){
              var uniYearFormatted = '2019-20';
            }else if(uniYear == '21' || uniYear == 21){
              var uniYearFormatted = '2020-21';
            }

        if (reportCode == 'R150' || reportCode == 'R149' || reportCode == 'R148' || reportCode == 'R44' || reportCode == 'R44' || reportCode == 'R45' || reportCode == 'R145' || reportCode == 'R144' || reportCode == 'R135' || reportCode == 'R146' || reportCode == 'R136' || reportCode == 'R100' || reportCode == 'R107' || reportCode == 'R106' || reportCode == 'R105' || reportCode == 'R99' || reportCode == 'R141' || reportCode == 'R124' || reportCode == 'R123' || reportCode == 'R147' || reportCode == 'R137' || reportCode == 'R143' || reportCode == 'R97' || reportCode == 'R101' || reportCode == 'R98' || reportCode == 'R113' || reportCode == 'R43' || reportCode == 'R96' || reportCode == 'R48' || reportCode == 'R95') {
          doc.text(1136, 31, "Academic Year :" + uniYearFormatted);
          doc.line(15, 35, 1175, 35);
        } else {
          doc.text(245, 31, "Academic Year :" + uniYearFormatted);
          doc.line(15, 35, 282, 35);
        }
        // doc.text(245, 31, "Academic Year :" + uniYear);

        // doc.line(15, 35, 82, 35);
      },
      margin: {
        top: 40,
        bottom: 25,
      }, tableLineColor: [189, 195, 199],
      tableLineWidth: 0.75,
      bodyStyles: { lineColor: [0, 0, 0] },
      theme: 'grid',
      styles: {
      },
      columnStyles: {
        first_name: {
          fillColor: [41, 128, 185], textColor: 255, fontStyle: 'bold',
        }
      },
      headerStyles: {
        lineWidth: 0.4,
        lineColor: [0, 0, 0]
      }
    }
    );

    let height = doc.internal.pageSize.getHeight();
    doc.setFontSize(12);
    if (reportCode == 'R100') {
      doc.text(15, height - 40, splitTitle);
    } else {
      doc.text(15, height - 13, splitTitle);
    }


    doc.setTextColor(34, 77, 138);
    doc.addImage("assets/images/nic-sm-logo.png", "PNG", 15, height - 10, 20, 7);
    var pageCount = doc.internal.getNumberOfPages();
    for (var i = 0; i <= pageCount; i++) {
      if (reportCode == 'R150' || reportCode == 'R149' || reportCode == 'R148' || reportCode == 'R44' || reportCode == 'R45' || reportCode == 'R145' || reportCode == 'R144' || reportCode == 'R135' || reportCode == 'R146' || reportCode == 'R136' || reportCode == 'R100' || reportCode == 'R107' || reportCode == 'R106' || reportCode == 'R105' || reportCode == 'R99' || reportCode == 'R141' || reportCode == 'R124' || reportCode == 'R123' || reportCode == 'R147' || reportCode == 'R137' || reportCode == 'R143' || reportCode == 'R97' || reportCode == 'R101' || reportCode == 'R98' || reportCode == 'R113' || reportCode == 'R43' || reportCode == 'R96' || reportCode == 'R48' || reportCode == 'R95') {
        doc.setPage(i)
        doc.text(1091, height - 5, "Report generated on :" + currentDate);
      } else {
        doc.setPage(i)
        doc.text(200, height - 5, "Report generated on :" + currentDate);
      }
    }
    // doc.text(200, height - 5, "Report generated on :" + currentDate);

    doc.save(this.uniHeader + "_" + reportDescriptionName + "_" + uniYear + '.pdf');

  }
}
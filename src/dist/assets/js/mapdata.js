var gradeColor = {
  "G1": "#f6ee2b",
  "G2": "#ee5939",
  "G3": "#f99e2b",
  "G4": "#4cc9f0",
  "G5": "#80c254",
  "G6": "#968ac2",
}

var gradeData = {

  Grade1: ["Chandigarh", "Kerala", "Gujarat"],
  Grade2: ["Haryana", "Tamil Nadu", "Punjab", "Rajasthan"],
  Grade3: ["Delhi", "Dadra \n& Nagar Haveli", "Himachal Pradesh", "Odisha", "Chhattisgarh", "Andhra Pradesh", "Goa", "Madhya Pradesh", "Assam", "Karnataka", "Uttarakhand"],
  Grade4: ['Maharashtra', 'Puducherry', 'Sikkim', 'Mizoram', 'Telangana', 'Daman \nand Diu'],
  Grade5: ['Jharkhand', 'Andaman and Nicobar', 'Jammu \n and Kashmir', 'Tripura', 'Lakshadweep', 'West Bengal', 'Bihar', 'Manipur', 'Uttar Pradesh'],
  Grade6: ['Meghalaya', 'Nagaland', 'Arunachal Pradesh']

}

var domainData = {
  Domain_1: {
    "max": "180",
    "Chandigarh": "160",
    "Kerala": "154",
    "Gujarat": "152",
    "Haryana": "134",
    "Tamil Nadu": "132",
    "Dadra \n& Nagar Haveli": "150",
    "Punjab": "126",
    "Rajasthan": "168",
    "Delhi": "124",
    "Himachal Pradesh": "140",
    "Odisha": "134",
    "Chhattisgarh": "134",
    "Andhra Pradesh": "154",
    "Goa": "132",
    "Madhya Pradesh": "140",
    "Assam": "152",
    "Karnataka": "160",
    "Uttarakhand": "148",
    "Maharashtra": "144",
    "Puducherry": "124",
    "Sikkim": "122",
    "Mizoram": "126",
    "Telangana": "142",
    "Daman \nand Diu": "126",
    "Jharkhand": "154",
    "Andaman and Nicobar": "130",
    "Jammu \n and Kashmir": "132",
    "Tripura": "126",
    "Lakshadweep": "122",
    "West Bengal": "122",
    "Bihar": "128",
    "Manipur": "138",
    "Uttar Pradesh": "132",
    "Meghalaya": "126",
    "Nagaland": "126",
    "Arunachal Pradesh": "114"
  },
  Domain_2: {
    "max": "80",
    "Chandigarh": "75",
    "Kerala": "78",
    "Gujarat": "71",
    "Haryana": "74",
    "Tamil Nadu": "79",
    "Dadra \n& Nagar Haveli": "73",
    "Punjab": "74",
    "Rajasthan": "56",
    "Delhi": "72",
    "Himachal Pradesh": "76",
    "Odisha": "69",
    "Chhattisgarh": "66",
    "Andhra Pradesh": "70",
    "Goa": "75",
    "Madhya Pradesh": "58",
    "Assam": "64",
    "Karnataka": "69",
    "Uttarakhand": "72",
    "Maharashtra": "76",
    "Puducherry": "77",
    "Sikkim": "58",
    "Mizoram": "57",
    "Telangana": "66",
    "Daman \nand Diu": "73",
    "Jharkhand": "53",
    "Andaman and Nicobar": "65",
    "Jammu \n and Kashmir": "53",
    "Tripura": "67",
    "Lakshadweep": "67",
    "West Bengal": "53",
    "Bihar": "56",
    "Manipur": "60",
    "Uttar Pradesh": "62",
    "Meghalaya": "50",
    "Nagaland": "43",
    "Arunachal Pradesh": "46"
  },
  Domain_3: {
    "max": "150",
    "Chandigarh": "133",
    "Kerala": "123",
    "Gujarat": "99",
    "Haryana": "116",
    "Tamil Nadu": "121",
    "Dadra \n& Nagar Haveli": "110",
    "Punjab": "139",
    "Rajasthan": "84",
    "Delhi": "114",
    "Himachal Pradesh": "96",
    "Odisha": "94",
    "Chhattisgarh": "113",
    "Andhra Pradesh": "99",
    "Goa": "138",
    "Madhya Pradesh": "99",
    "Assam": "72",
    "Karnataka": "100",
    "Uttarakhand": "102",
    "Maharashtra": "113",
    "Puducherry": "114",
    "Sikkim": "90",
    "Mizoram": "102",
    "Telangana": "96",
    "Daman \nand Diu": "99",
    "Jharkhand": "95",
    "Andaman and Nicobar": "87",
    "Jammu \n and Kashmir": "88",
    "Tripura": "70",
    "Lakshadweep": "98",
    "West Bengal": "58",
    "Bihar": "86",
    "Manipur": "68",
    "Uttar Pradesh": "73",
    "Meghalaya": "57",
    "Nagaland": "63",
    "Arunachal Pradesh": "63"
  },
  Domain_4: {
    "max": "230",
    "Chandigarh": "213",
    "Kerala": "217",
    "Gujarat": "207",
    "Haryana": "211",
    "Tamil Nadu": "218",
    "Dadra \n& Nagar Haveli": "221",
    "Punjab": "200",
    "Rajasthan": "210",
    "Delhi": "214",
    "Himachal Pradesh": "209",
    "Odisha": "214",
    "Chhattisgarh": "206",
    "Andhra Pradesh": "194",
    "Goa": "209",
    "Madhya Pradesh": "209",
    "Assam": "208",
    "Karnataka": "212",
    "Uttarakhand": "194",
    "Maharashtra": "212",
    "Puducherry": "206",
    "Sikkim": "198",
    "Mizoram": "184",
    "Telangana": "205",
    "Daman \nand Diu": "208",
    "Jharkhand": "204",
    "Andaman and Nicobar": "205",
    "Jammu \n and Kashmir": "203",
    "Tripura": "207",
    "Lakshadweep": "206",
    "West Bengal": "195",
    "Bihar": "203",
    "Manipur": "193",
    "Uttar Pradesh": "202",
    "Meghalaya": "186",
    "Nagaland": "195",
    "Arunachal Pradesh": "197"
  },
  Domain_5: {
    "max": "360",
    "Chandigarh": "260",
    "Kerala": "254",
    "Gujarat": "279",
    "Haryana": "252",
    "Tamil Nadu": "224",
    "Dadra \n& Nagar Haveli": "202",
    "Punjab": "214",
    "Rajasthan": "234",
    "Delhi": "223",
    "Himachal Pradesh": "215",
    "Odisha": "223",
    "Chhattisgarh": "213",
    "Andhra Pradesh": "211",
    "Goa": "163",
    "Madhya Pradesh": "207",
    "Assam": "211",
    "Karnataka": "165",
    "Uttarakhand": "188",
    "Maharashtra": "155",
    "Puducherry": "166",
    "Sikkim": "215",
    "Mizoram": "208",
    "Telangana": "167",
    "Daman \nand Diu": "163",
    "Jharkhand": "144",
    "Andaman and Nicobar": "158",
    "Jammu \n and Kashmir": "168",
    "Tripura": "173",
    "Lakshadweep": "133",
    "West Bengal": "189",
    "Bihar": "140",
    "Manipur": "149",
    "Uttar Pradesh": "134",
    "Meghalaya": "165",
    "Nagaland": "130",
    "Arunachal Pradesh": "134"
  },
  total: {

    "Chandigarh": "841",
    "Kerala": "826",
    "Gujarat": "808",
    "Haryana": "787",
    "Tamil Nadu": "774",
    "Dadra \n& Nagar Haveli": "756",
    "Punjab": "753",
    "Rajasthan": "752",
    "Delhi": "747",
    "Himachal Pradesh": "736",
    "Odisha": "734",
    "Chhattisgarh": "732",
    "Andhra Pradesh": "728",
    "Goa": "717",
    "Madhya Pradesh": "713",
    "Assam": "707",
    "Karnataka": "706",
    "Uttarakhand": "704",
    "Maharashtra": "700",
    "Puducherry": "687",
    "Sikkim": "683",
    "Mizoram": "677",
    "Telangana": "676",
    "Daman \nand Diu": "669",
    "Jharkhand": "650",
    "Andaman and Nicobar": "645",
    "Jammu \n and Kashmir": "644",
    "Tripura": "643",
    "Lakshadweep": "626",
    "West Bengal": "617",
    "Bihar": "613",
    "Manipur": "608",
    "Uttar Pradesh": "603",
    "Meghalaya": "584",
    "Nagaland": "557",
    "Arunachal Pradesh": "554"
  }
};

console.log("Mapdata");
var simplemaps_countrymap_mapdata = {
  main_settings: {
    //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",

    //State defaults
    state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#740f78",
    state_url: "",
    border_size: 1,
    all_states_inactive: "no",
    all_states_zoomable: "no",

    //Location defaults
    location_description: "Location description",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",

    //Label defaults
    label_color: "black",
    label_hover_color: "#d5ddec",
    label_size: "14",
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",

    //Zoom settings
    zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "no",
    zoom_percentage: 0,
    zoom_time: 0.5,

    //Popup settings
    popup_color: "",
    popup_opacity: 1,
    popup_shadow: 1,
    popup_corners: 9,
    popup_font: "14px/1.5 Source Sans Pro, sans-serif",
    popup_nocss: "no",

    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: "",
    manual_zoom: "no"
  },
  state_specific: {
    "1": {
      name: "Andaman and Nicobar",
      color: gradeColor.G5,
    },
    "2": {
      name: "Andhra Pradesh",
      color: gradeColor.G3
    },
    "3": {
      name: "Arunachal Pradesh",
      color: gradeColor.G6
    },
    "4": {
      name: "Assam",
      color: gradeColor.G3
    },
    "5": {
      name: "Bihar",
      color: gradeColor.G5
    },
    "6": {
      name: "Chandigarh",
      color: gradeColor.G1
    },
    "7": {
      name: "Chhattisgarh",
      color: gradeColor.G3
    },
    "8": {
      name: "Dadra \n& Nagar Haveli",
      color: gradeColor.G3
    },
    "9": {
      name: "Daman \nand Diu",
      color: gradeColor.G4
    },
    "10": {
      name: "Delhi",
      color: gradeColor.G3
    },
    "11": {
      name: "Goa",
      color: gradeColor.G3
    },
    "12": {
      name: "Gujarat",
      color: gradeColor.G1
    },
    "13": {
      name: "Haryana",
      color: gradeColor.G2
    },
    "14": {
      name: "Himachal Pradesh",
      color: gradeColor.G3
    },
    "16": {
      name: "Jharkhand",
      color: gradeColor.G5
    },
    "17": {
      name: "Karnataka",
      color: gradeColor.G3
    },
    "18": {
      name: "Kerala",
      color: gradeColor.G1
    },
    "19": {
      name: "Lakshadweep",
      color: gradeColor.G5
    },
    "20": {
      name: "Madhya Pradesh",
      color: gradeColor.G3
    },
    "21": {
      name: "Maharashtra",
      color: gradeColor.G4
    },
    "22": {
      name: "Manipur",
      color: gradeColor.G5
    },
    "23": {
      name: "Meghalaya",
      color: gradeColor.G6
    },
    "24": {
      name: "Mizoram",
      color: gradeColor.G4
    },
    "25": {
      name: "Nagaland",
      color: gradeColor.G6
    },
    "26": {
      name: "Odisha",
      color: gradeColor.G3
    },
    "27": {
      name: "Puducherry",
      color: gradeColor.G4
    },
    "28": {
      name: "Punjab",
      color: gradeColor.G2
    },
    "29": {
      name: "Rajasthan",
      color: gradeColor.G2
    },
    "30": {
      name: "Sikkim",
      color: gradeColor.G4
    },
    "31": {
      name: "Tamil Nadu",
      color: gradeColor.G2
    },
    "32": {
      name: "Tripura",
      color: gradeColor.G5
    },
    "33": {
      name: "Uttar Pradesh",
      color: gradeColor.G5
    },
    "34": {
      name: "Uttarakhand",
      color: gradeColor.G3
    },
    "35": {
      name: "West Bengal",
      color: gradeColor.G5
    },
    "36": {
      name: "Jammu \n and Kashmir",
      color: gradeColor.G5
    },
    "37": {
      name: "Telangana",
      color: gradeColor.G4
    }
  },
  locations: {
    "0": {
      lat: 30.703,
      lng: 76.789,
      name: "Chandigarh",
      color: gradeColor.G1,
      size: "17",
      type: "circle",
      opacity: "1"
    },
    "1": {
      lat: 11.93,
      lng: 79.825,
      name: "Puducherry",
      color: gradeColor.G4,
      size: "17",
      type: "circle",
      opacity: "1"
    },
    "2": {
      lat: 20.715,
      lng: 70.981,
      name: "Daman \nand Diu",
      color: gradeColor.G4,
      size: "17",
      type: "circle",
      opacity: "1"
    },
    "3": {
      lat: 20.281,
      lng: 73.05,
      name: "Dadra \n& Nagar Haveli",
      color: gradeColor.G3,
      size: "17",
      type: "circle",
      opacity: "1"
    },

  },
  labels: {
    "0": {
      name: "Andaman and Nicobar",
      parent_id: "1",
      x: 842.8,
      y: 1030.7
    },
    "1": {
      name: "Andhra Pradesh",
      parent_id: "2",
      x: 364.5,
      y: 853.9
    },
    "2": {
      name: "Arunachal Pradesh",
      parent_id: "3",
      x: 927.7,
      y: 352
    },
    "3": {
      name: "Assam",
      parent_id: "4",
      x: 849.1,
      y: 425.1
    },
    "4": {
      name: "Bihar",
      parent_id: "5",
      x: 612.7,
      y: 458
    },
    "5": {
      name: "Chandigarh",
      parent_id: "6",
      x: 265.7,
      y: 247.4
    },
    "6": {
      name: "Chhattisgarh",
      parent_id: "7",
      x: 491.2,
      y: 591.9
    },
    "7": {
      name: "Dadra \n& Nagar Haveli",
      parent_id: "8",
      x: 170,
      y: 690
    },
    "8": {
      name: "Daman \nand Diu",
      parent_id: "9",
      x: 50.8,
      y: 660.6
    },
    "9": {
      name: "Delhi",
      parent_id: "10",
      x: 337,
      y: 340
    },
    "10": {
      name: "Goa",
      parent_id: "11",
      x: 180.7,
      y: 833.8
    },
    "11": {
      name: "Gujarat",
      parent_id: "12",
      x: 123,
      y: 544.6
    },
    "12": {
      name: "Haryana",
      parent_id: "13",
      x: 277.1,
      y: 320.2
    },
    "13": {
      name: "Himachal Pradesh",
      parent_id: "14",
      x: 325.6,
      y: 214.4
    },
    "14": {
      name: "Jharkhand",
      parent_id: "16",
      x: 574.1,
      y: 537.4
    },
    "15": {
      name: "Karnataka",
      parent_id: "17",
      x: 257.1,
      y: 823.4
    },
    "16": {
      name: "Kerala",
      parent_id: "18",
      x: 296.6,
      y: 1047.4
    },
    "17": {
      name: "Lakshadweep",
      parent_id: "19",
      x: 167.3,
      y: 1082.3
    },
    "18": {
      name: "Madhya Pradesh",
      parent_id: "20",
      x: 355,
      y: 556
    },
    "19": {
      name: "Maharashtra",
      parent_id: "21",
      x: 285.4,
      y: 660
    },
    "20": {
      name: "Manipur",
      parent_id: "22",
      x: 890.2,
      y: 498
    },
    "21": {
      name: "Meghalaya",
      parent_id: "23",
      x: 785.9,
      y: 463.5
    },
    "22": {
      name: "Mizoram",
      parent_id: "24",
      x: 860.9,
      y: 536.7
    },
    "23": {
      name: "Nagaland",
      parent_id: "25",
      x: 930,
      y: 441.4
    },
    "24": {
      name: "Odisha",
      parent_id: "26",
      x: 564.1,
      y: 641.2
    },
    "25": {
      name: "Puducherry",
      parent_id: "27",
      x: 450.5,
      y: 970.6
    },
    "26": {
      name: "Punjab",
      parent_id: "28",
      x: 251.7,
      y: 285
    },
    "27": {
      name: "Rajasthan",
      parent_id: "29",
      x: 195.9,
      y: 412.1
    },
    "28": {
      name: "Sikkim",
      parent_id: "30",
      x: 692.2,
      y: 389
    },
    "29": {
      name: "Tamil Nadu",
      parent_id: "31",
      x: 346.4,
      y: 990.2
    },
    "30": {
      name: "Tripura",
      parent_id: "32",
      x: 775.9,
      y: 534.9
    },
    "31": {
      name: "Uttar Pradesh",
      parent_id: "33",
      x: 429.4,
      y: 415.4
    },
    "32": {
      name: "Uttarakhand",
      parent_id: "34",
      x: 384,
      y: 285.6
    },
    "33": {
      name: "West Bengal",
      parent_id: "35",
      x: 670.9,
      y: 551.3
    },
    "34": {
      name: "Jammu \n and Kashmir",
      parent_id: "36",
      x: 275,
      y: 105.4
    },
    "35": {
      name: "Telangana",
      parent_id: "37",
      x: 370.7,
      y: 747.1
    }
  },
  regions: {}
};

var oldGradeData;
var oldLabels;
var originalState = JSON.stringify(simplemaps_countrymap_mapdata.state_specific);
var originalLabel = JSON.stringify(simplemaps_countrymap_mapdata.labels);
var originalLocation = JSON.stringify(simplemaps_countrymap_mapdata.locations);

initializeMap();

function initializeMap() {
  var stateLength = Object.keys(simplemaps_countrymap_mapdata.state_specific).length;
  var locLength = Object.keys(simplemaps_countrymap_mapdata.locations).length;
  for (var i = 1; i <= stateLength + 1; i++) {
    if (i != 15) {
      var stateName = JSON.parse(originalState)[i].name;
      var grade = "Grade-" + findGrade(stateName);
      simplemaps_countrymap_mapdata.state_specific[i].description = getDescription(grade, stateName);


    }
  }
  for (var i = 0; i < locLength; i++) {

    var stateName = JSON.parse(originalLocation)[i].name;
    // console.log(stateName);
    var grade = "Grade-" + findGrade(stateName);
    simplemaps_countrymap_mapdata.locations[i].description = getDescription(grade, stateName);

  }
}

function getDescription(grade, stateName) {
  var des = "<ul class='list-unstyled state-tooltip " + grade + "'>" +
    "<li>" +
    "<h2 class='text-uppercase state-name'>" + stateName + "</h2>" +
    "<div class='state-grade'>" + grade + " (" + domainData['total'][stateName] + ")</div>" +
    "</li>" +
    "<li>" +
    "<div class='domain-name one'>Learning Outcomes & Quality" +
    "<div class='domain-score'>" + domainData["Domain_1"][stateName] + "</div></div>" +
    "</li>" +
    "<li>" +
    "<div class='domain-name two'>Access" +
    "<div class='domain-score'>" + domainData["Domain_2"][stateName] + "</div></div>" +
    "</li>" +
    "<li>" +
    "<div class='domain-name three'>Infrastructure & Facilities" +
    "<div class='domain-score'>" + domainData["Domain_3"][stateName] + "</div></div>" +
    "</li>" +
    "<li>" +
    "<div class='domain-name four'>Equity" +
    "<div class='domain-score'>" + domainData["Domain_4"][stateName] + "</div></div>" +
    "</li>" +
    "<li>" +
    "<div class='domain-name five'>Governance Processes" +
    "<div class='domain-score'>" + domainData["Domain_5"][stateName] + "</div></div>" +
    "</li>" +
    "</ul>";

  return des;
}


function findGrade(state) {
  for (var i = 1; i <= Object.keys(gradeData).length; i++) {
    // console.log(gradeData['Grade' + i]);
    if (gradeData['Grade' + i].includes(state)) {
      return i;
    }
  }
}


function showGradeWise(grade) {

  if (grade == 0) {
    initializeMap();
  }
  simplemaps_countrymap_mapdata.labels = JSON.parse(originalLabel);
  //   simplemaps_countrymap_mapdata.locations = JSON.parse(originalLocation);
  var locLength = Object.keys(simplemaps_countrymap_mapdata.locations).length;
  var stateLength = Object.keys(simplemaps_countrymap_mapdata.state_specific).length;
  for (var i = 1; i <= stateLength + 1; i++) {
    if (i != 15) {
      simplemaps_countrymap_mapdata.state_specific[i].color = JSON.parse(originalState)[i].color;
    }
  }

  for (var i = 0; i < locLength; i++) {
    simplemaps_countrymap_mapdata.locations[i].color = JSON.parse(originalLocation)[i].color;
  }
  simplemaps_countrymap.refresh();
  if (grade != 0) {
    for (var i = 1; i <= stateLength + 1; i++) {
      if (i != 15) {
        // console.log(simplemaps_countrymap_mapdata.state_specific[i].name)
        if (!gradeData['Grade' + grade].includes(simplemaps_countrymap_mapdata.state_specific[i].name)) {
          simplemaps_countrymap_mapdata.state_specific[i].color = '#becee8';
        }
      }
    }
    for (var i = 0; i < locLength; i++) {

      if (!gradeData['Grade' + grade].includes(simplemaps_countrymap_mapdata.locations[i].name)) {
        simplemaps_countrymap_mapdata.locations[i].color = '#becee8';
      }

    }

    simplemaps_countrymap.refresh();
  }


}

function showIndicatorWise(indicator) {
  oldLabels = JSON.stringify(simplemaps_countrymap_mapdata.labels);
  var stateLength = Object.keys(simplemaps_countrymap_mapdata.state_specific).length;
  var labelLength = Object.keys(simplemaps_countrymap_mapdata.labels).length;
  var locLength = Object.keys(simplemaps_countrymap_mapdata.locations).length;
  for (var i = 0; i < locLength; i++) {

    simplemaps_countrymap_mapdata.locations[i].color = '#becee8';
    simplemaps_countrymap_mapdata.locations[i].description = "";

  }

  for (var i = 1; i <= stateLength + 1; i++) {
    if (i != 15) {
      simplemaps_countrymap_mapdata.state_specific[i].color = '#becee8';
      simplemaps_countrymap_mapdata.state_specific[i].description = "";
      simplemaps_countrymap_mapdata.state_specific[i].hover_color = '#740f78';
    }
  }

  console.log(indicator);
  for (var i = 0; i < labelLength; i++) {

    simplemaps_countrymap_mapdata.labels[i].name = simplemaps_countrymap_mapdata.labels[i].name + "\n" +
      indicator[simplemaps_countrymap_mapdata.labels[i].name];

    simplemaps_countrymap_mapdata.labels[i].pill = 'yes';
    simplemaps_countrymap_mapdata.labels[i].color = '#383867';


  }
  simplemaps_countrymap.refresh();
  simplemaps_countrymap_mapdata.labels = JSON.parse(oldLabels);

}

function showDomainWise(domain) {

  oldLabels = JSON.stringify(simplemaps_countrymap_mapdata.labels);
  var stateLength = Object.keys(simplemaps_countrymap_mapdata.state_specific).length;
  var labelLength = Object.keys(simplemaps_countrymap_mapdata.labels).length;
  var locLength = Object.keys(simplemaps_countrymap_mapdata.locations).length;

  for (var i = 0; i < locLength; i++) {

    simplemaps_countrymap_mapdata.locations[i].color = '#becee8';
    simplemaps_countrymap_mapdata.locations[i].description = "";

  }

  for (var i = 1; i <= stateLength + 1; i++) {
    if (i != 15) {
      simplemaps_countrymap_mapdata.state_specific[i].color = '#becee8';
      simplemaps_countrymap_mapdata.state_specific[i].description = "";
      simplemaps_countrymap_mapdata.state_specific[i].hover_color = '#740f78';
    }
  }

  for (var i = 0; i < labelLength; i++) {

    simplemaps_countrymap_mapdata.labels[i].name = simplemaps_countrymap_mapdata.labels[i].name + "\n" +
      domainData['Domain_' + domain][simplemaps_countrymap_mapdata.labels[i].name];

    simplemaps_countrymap_mapdata.labels[i].pill = 'yes';
    simplemaps_countrymap_mapdata.labels[i].color = '#383867';


  }
  simplemaps_countrymap.refresh();
  simplemaps_countrymap_mapdata.labels = JSON.parse(oldLabels);
  // console.log(simplemaps_countrymap_mapdata.labels);



}

function gridWiseChart() {
  var chart = new CanvasJS.Chart("chartContainer", {
    theme: "light2",
    title: {
      text: "Grade Wise distribution of states.",
      fontSize: 12,
      fontColor: '#740f78',
      fontWeight: 600,
      fontFamily: 'Source Sans Pro, sans-serif',
      margin: 10,
      verticalAlign: "bottom",
      horizontalAlign: "center",
    },
    axisY: {
      title: "No. of states",
      titleFontFamily: 'Source Sans Pro, sans-serif',
      titleFontSize: 12,
      titleFontWeight: 400,
      titleFontColor: '#cccccc',
      gridColor: '#fafafa',
      tickColor: '#fafafa',
      labelFontSize: 10,
      labelFontColor: '#cccccc'
    },
    axisX: {
      labelFontSize: 10,
      labelAngle: 0,
      titleFontFamily: 'Source Sans Pro, sans-serif',
      titleFontSize: 12,
      titleFontWeight: 400,
    },
    legend: {
      fontColor: '#c1c1c1',
      fontFamily: 'Source Sans Pro, sans-serif',
      fontSize: 12,
      fontWeight: 400,
    },
    dataPointWidth: 20,
    data: [{
      type: "column",
      showInLegend: false,
      click: onClick,
      dataPoints: [{
        y: gradeData['Grade1'].length,
        label: "Grade I",
        color: gradeColor.G1
      },
      {
        y: gradeData['Grade2'].length,
        label: "Grade II",
        color: gradeColor.G2
      },
      {
        y: gradeData['Grade3'].length,
        label: "Grade III",
        color: gradeColor.G3
      },
      {
        y: gradeData['Grade4'].length,
        label: "Grade IV",
        color: gradeColor.G4
      },
      {
        y: gradeData['Grade5'].length,
        label: "Grade V",
        color: gradeColor.G5
      },
      {
        y: gradeData['Grade6'].length,
        label: "Grade VI",
        color: gradeColor.G6
      }
      ]
    }]
  });
  chart.render();
  
}

function removeWatermark() {
  let canvas = document.querySelector('.canvasjs-chart-container');
  let label = canvas.querySelector('.canvasjs-chart-credit');
  label.style.display = 'none';
}

var myExtObject = (function () {

  return {
    showGradeWise: function (grade) {
      showGradeWise(grade);
    },
    findGrade: function (state) {
      return findGrade(state);
    },
    showIndicatorWise: function (indicator) {
      showIndicatorWise(indicator);
    },
    showDomainWise: function (domain) {
      showDomainWise(domain)
    },
    gridWiseChart: function () {
      gridWiseChart();
    },
    getDomainData: function () {
      return domainData;
    },
    refresh: function () {
      simplemaps_countrymap.load();
    },
    hideWatermark: function () {
      removeWatermark();
    }
  }

})(myExtObject || {})

function onClick(e) {
  var i = e.dataPointIndex + 1;
  showGradeWise(i);
}



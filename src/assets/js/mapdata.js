var gradeColor = {
  "G1": "#f6ee2b",
  "G2": "#ee5939",
  "G3": "#f99e2b",
  "G4": "#4cc9f0",
  "G5": "#80c254",
  "G6": "#968ac2",
  "G7": "#becee8"
}

var chartGradeData = {

  Grade1: 0,
  Grade2: 0,
  Grade3: 0,
  Grade4: 0,
  Grade5: 0,
  Grade6: 0,

}

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
      name: "Andaman & Nicobar Islands",
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
      name: "Dadra & Nagar Haveli",
      color: gradeColor.G3
    },
    "9": {
      name: "Daman & Diu",
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
      name: "Jammu & Kashmir",
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
      name: "Daman & Diu",
      color: gradeColor.G4,
      size: "17",
      type: "circle",
      opacity: "1"
    },
    "3": {
      lat: 20.281,
      lng: 73.05,
      name: "Dadra & Nagar Haveli",
      color: gradeColor.G3,
      size: "17",
      type: "circle",
      opacity: "1"
    },
  },
  labels: {
    "0": {
      name: "Andaman & Nicobar Islands",
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
      name: "Dadra & Nagar Haveli",
      parent_id: "8",
      x: 170,
      y: 690
    },
    "8": {
      name: "Daman & Diu",
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
var orgGradeChart = JSON.stringify(chartGradeData);

function setStatesData(states) {
  var stateLength = Object.keys(simplemaps_countrymap_mapdata.state_specific).length;
  var locLength = Object.keys(simplemaps_countrymap_mapdata.locations).length;
  chartGradeData = JSON.parse(orgGradeChart);
  for (var i = 0; i < states.length; i++) {

    for (var j = 1; j <= stateLength + 1; j++) {
      if (j != 15) {
        if (simplemaps_countrymap_mapdata.state_specific[j].name.toLowerCase().includes(states[i].stateName.toLowerCase())) {

          if (states[i].domainScore.grade) {
            simplemaps_countrymap_mapdata.state_specific[j].color = gradeColor["G" + states[i].domainScore.grade];
            simplemaps_countrymap_mapdata.state_specific[j].description = getDescription(states[i]);
            simplemaps_countrymap_mapdata.state_specific[j].domScore = states[i].domainScore;
          }
        }
      }
    }
    for (var j = 0; j < locLength; j++) {

      if (simplemaps_countrymap_mapdata.locations[j].name.toLowerCase().includes(states[i].stateName.toLowerCase())) {
        simplemaps_countrymap_mapdata.locations[j].color = gradeColor["G" + states[i].domainScore.grade];
        simplemaps_countrymap_mapdata.locations[j].description = getDescription(states[i]);
        simplemaps_countrymap_mapdata.locations[j].domScore = states[i].domainScore;

      }
    }
    chartGradeData['Grade' + states[i].domainScore.grade] += 1;
  }

  originalState = JSON.stringify(simplemaps_countrymap_mapdata.state_specific);
  originalLocation = JSON.stringify(simplemaps_countrymap_mapdata.locations);
  console.log(simplemaps_countrymap_mapdata.state_specific);
}


// function mapService(constData,type,year){
//   var uvrJson;	
// 	var  arr=new Array();

//   $("#map").html("");
//   // alert("type-->"+type+"  year--->"+year);
//   // debugger;

//   var outline =new Object();
  
//   outline.color=[0, 0, 0, 255];
//   outline.width=0.5;
//   outline.type="esriSLS";
//   outline.style="esriSLSNull";
  


// for(var i=0;i<constData.length;i++){
//   // alert(constData[i].reference_year)
//   if(constData[i].reference_year==year){
//   var uniqueValueInfos =new Object();
//   var symbol =new Object();
//   uniqueValueInfos.value=constData[i].gis_state_code
  
//   if(type=="1"){
//     // alert("in type 1"+constData[i].primary_color_code);
//     var arr1=new Array();
//     var colorstr=constData[i].primary_color_code.split(",");

//     for(var j=0;j<colorstr.length;j++){
//       arr1.push(+colorstr[j]);
//     }
//     symbol.color=arr1;
//   }else if(type=="2"){
//     var arr1=new Array();
//     var colorstr=constData[i].upper_primary_color_code.split(",");
//     for(var j=0;j<colorstr.length;j++){
//       arr1.push(+colorstr[j]);
//     }

//     symbol.color=arr1;
//   }else if(type=="3"){
//     var arr1=new Array();
//     var colorstr=constData[i].secondary_color_code.split(",");
//     for(var j=0;j<colorstr.length;j++){
//       arr1.push(+colorstr[j]);
//     }

//     symbol.color=arr1;
//   }else if(type=="4"){
//     var arr1=new Array();
//     var colorstr=constData[i].higher_secondary_color_code.split(",");
//     for(var j=0;j<colorstr.length;j++){
//       arr1.push(+colorstr[j]);
//     }
//     symbol.color=arr1;
//   }
  
//   symbol.outline=outline
//   symbol.type="esriSFS";
//   symbol.style="esriSFSSolid";

//   uniqueValueInfos.symbol=symbol

//   arr.push(uniqueValueInfos);
// }  
// }


//   var obj=new Object
//   obj.field1="STCODE11";
//   obj.type="uniqueValue";
  
  
//   var defaultSymbol=new Object();
  
//   var color=[0, 0, 0, 64];
  
  
//   defaultSymbol.type="esriSFS";
//   defaultSymbol.style="esriSFSNull";
//   defaultSymbol.color=color
//   defaultSymbol.outline=outline
  
  
  
  
  
  
  
  
  
//   obj.defaultSymbol=defaultSymbol;
//   obj.uniqueValueInfos=arr;
  
  
  
  
//   uvrJson=obj;

	
	

// // $.ajax({
// //   url: "http://10.25.26.15:8182/api/report/getStateColorWithJson",
// //   type:"POST",
// //    contentType: "application/json",
// //   data:JSON.stringify(constData),
// //   cache: false,
// //     dataType: 'json',
// //   async:false,
// //   success: function(html){
// //   // alert(JSON.stringify(html))
// //   //uvrJson=JSON.parse(html);
// //   uvrJson=html;
// //   //10.25.26.251:8182/api/report/getStateWiseColor

// //   }
// // });


// // alert($('#map').length);
//       var map;

//       require([
//         "esri/map",
//         "esri/geometry/Extent",
//         "esri/layers/FeatureLayer",
//         "esri/symbols/SimpleLineSymbol",
//         "esri/symbols/SimpleFillSymbol",
//         "esri/symbols/TextSymbol",
//         "esri/renderers/SimpleRenderer",
// 		"esri/layers/LabelClass",
// 		"esri/InfoTemplate", 
// 		"esri/dijit/Legend",
// 		"esri/Color",
// 		"esri/renderers/UniqueValueRenderer",
//         "dojo/domReady!"
// 		 ], function(Map, Extent, FeatureLayer, SimpleLineSymbol, SimpleFillSymbol,
//         TextSymbol, SimpleRenderer, LabelClass,InfoTemplate, Legend, Color, UniqueValueRenderer) {
//         // load the map centered on the United States
//        // var bbox = new Extent({"xmin":-1940058,"ymin":-814715,"xmax":1683105,"ymax":1446096,"spatialReference":{"wkid":102003}});
//         map = new Map("map", {
//         //  extent: bbox,
//            zoom: 7,
//           showLabels : true //very important that this must be set to true!
//         });
      
		
		

//         // create a renderer for the states layer to override default symbology
//         var statesColor = new Color("111");
//         var statesLine = new SimpleLineSymbol("solid", statesColor, 0.5);
//         var statesSymbol = new SimpleFillSymbol("solid", statesLine, null);
//         var statesRenderer = new SimpleRenderer(statesSymbol);
//         // create a feature layer to show country boundaries
//         //var statesUrl = "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer/3";
// 		  var statesUrl = "https://mapservice.gov.in/gismapservice/rest/services/BharatMapService/Admin_Boundary_GramPanchayat/MapServer/0";
// 		   var featureLayer1 = new FeatureLayer(statesUrl, {
//        //   id: "states",
//           outFields: ["*"] //,
// 		 // infoTemplate: new InfoTemplate("${STNAME}, ${STCODE11}", "<div style='font: 10px Segoe UI'>Tool tIp </div>")
//         });
//         featureLayer1.setRenderer(statesRenderer);
//         //map.addLayer(featureLayer1);
		
// 		var statesLabel = new TextSymbol().setColor(statesColor);
// 			statesLabel.font.setSize("5pt");
// 			statesLabel.font.setFamily("arial");
//         //var labelField = "STATE_NAME";
		
		
		
// 		//Create a JSON object which contains the labeling properties. At the very least, specify which field to label using the labelExpressionInfo property. Other properties can also be specified such as whether to work with coded value domains, fieldinfos (if working with dates or number formatted fields, and even symbology if not specified as above)
// 		var json = {
// 			"labelExpressionInfo": {"value": "{STNAME}"}
// 			};
// 		//create instance of LabelClass (note: multiple LabelClasses can also be passed in as an array)
// 		var labelClass = new LabelClass(json);
// 		labelClass.symbol = statesLabel; // symbol also can be set in LabelClass' json
// 		featureLayer1.setLabelingInfo([ labelClass ]);
// 		map.addLayer(featureLayer1);
		
// 		 map.on("load", addFeatureLayer);

//         function addFeatureLayer() {
//           var defaultSymbol = new SimpleFillSymbol().setStyle(SimpleFillSymbol.STYLE_NULL);
//           defaultSymbol.outline.setStyle(SimpleLineSymbol.STYLE_NULL);

      
// 		  var renderer = new UniqueValueRenderer(uvrJson);
          
//           var featureLayer = new FeatureLayer("https://mapservice.gov.in/gismapservice/rest/services/BharatMapService/State_Boundary/MapServer?Token=eTuJs6MTl3wT2lom4YmUFg0n0J01-sQg-jb_2dJr3Gy9zkyKSX5qbCr8_vqX0AT-", {
//             infoTemplate: new InfoTemplate("&nbsp;", "${STCODE11}"),
//             mode: FeatureLayer.MODE_ONDEMAND,
//             outFields: ["STCODE11"]
//           });
          
//           featureLayer.setRenderer(renderer);
//           map.addLayer(featureLayer);
//         }
		
//       });
// 	  }



function viewMap() {
  var map;

  require([
    "esri/dijit/BasemapLayer",
    "esri/dijit/Basemap",
    "esri/map",
    "esri/geometry/Extent",
    "esri/SpatialReference",
    "esri/layers/ArcGISDynamicMapServiceLayer",
    "esri/layers/ArcGISTiledMapServiceLayer",
  ], function (
    BasemapLayer,
    Basemap,
    Map,
    Extent,
    SpatialReference,
    ArcGISDynamicMapServiceLayer,
    ArcGISTiledMapServiceLayer
  ) {
    var nobasemap = new Basemap({
      layers: [
        new BasemapLayer({
          url: "http://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer",
          opacity: 0,
        }),
      ],
    });
    map = new Map("mapDiv", {
      logo: false,
      showAttribution: false,
      basemap: nobasemap,
    });

    map.on("click", function(e){
      console.log(e)
    });

    map.addLayer(
      new ArcGISDynamicMapServiceLayer(
        "https://mapservice.gov.in/gismapservice/rest/services/BharatMapService/State_Boundary/MapServer?Token=eTuJs6MTl3wT2lom4YmUFg0n0J01-sQg-jb_2dJr3Gy9zkyKSX5qbCr8_vqX0AT-"
      )
    );
    map.addLayer(
      new ArcGISDynamicMapServiceLayer(
        "https://mapservice.gov.in/gismapservice/rest/services/BharatMapService/District_Boundary/MapServer?Token=31jzr0XUXDTF45xOn5s_t8HstOrKl_2vOSMxVfKg2SYNj-FU5aHda6WJOGefnwwH"
      )
    );
    map.addLayer(
      new ArcGISDynamicMapServiceLayer(
        "https://mapservice.gov.in/gismapservice/rest/services/BharatMapService/Block_Boundary/MapServer?Token=odo9VMISLd_0OdjTB7Y9_8pZbsoywXVQzFTG4Pfn7TOpvfYK9i54GsvCa1MeVoi5"
      )
    );
    map.setExtent(
      new Extent(
        66.62,
        5.23,
        98.87,
        38.59,
        new SpatialReference({ wkid: 4326 })
      ),
      true
    );
  });
}


function getDescription(stateData) {
  var grade = "Grade-" + stateData.domainScore.grade;
  var total = stateData.domainScore.totalScore;
  var des = "<ul class='list-unstyled state-tooltip " + grade + "'>" +
    "<li>" +
    "<h2 class='text-uppercase state-name'>" + stateData.stateName + "</h2>" +
    "<div class='state-grade'>" + grade + " (" + total + ")</div>" +
    "</li>" +
    "<li>" +
    "<div class='domain-name one'>Learning Outcomes & Quality" +
    "<div class='domain-score'>" + stateData.domainScore.domain1 + "</div></div>" +
    "</li>" +
    "<li>" +
    "<div class='domain-name two'>Access" +
    "<div class='domain-score'>" + stateData.domainScore.domain2 + "</div></div>" +
    "</li>" +
    "<li>" +
    "<div class='domain-name three'>Infrastructure & Facilities" +
    "<div class='domain-score'>" + stateData.domainScore.domain3 + "</div></div>" +
    "</li>" +
    "<li>" +
    "<div class='domain-name four'>Equity" +
    "<div class='domain-score'>" + stateData.domainScore.domain4 + "</div></div>" +
    "</li>" +
    "<li>" +
    "<div class='domain-name five'>Governance Processes" +
    "<div class='domain-score'>" + stateData.domainScore.domain5 + "</div></div>" +
    "</li>" +
    "</ul>";

  return des;
}


function showGradeWise(grade) {

  var locLength = Object.keys(simplemaps_countrymap_mapdata.locations).length;
  var stateLength = Object.keys(simplemaps_countrymap_mapdata.state_specific).length;

  simplemaps_countrymap_mapdata.labels = JSON.parse(originalLabel);
  //   simplemaps_countrymap_mapdata.locations = JSON.parse(originalLocation);

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
        if (simplemaps_countrymap_mapdata.state_specific[i].domScore.grade != grade) {
          simplemaps_countrymap_mapdata.state_specific[i].color = '#becee8';
        }
      }
    }
    for (var i = 0; i < locLength; i++) {

      if (simplemaps_countrymap_mapdata.locations[i].domScore.grade != grade) {
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

  // console.log(indicator);
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

    var parent_id = simplemaps_countrymap_mapdata.labels[i].parent_id;
    // console.log(simplemaps_countrymap_mapdata.state_specific[parent_id].domScore['domain' + domain]);
    simplemaps_countrymap_mapdata.labels[i].name = simplemaps_countrymap_mapdata.labels[i].name + "\n" +
      simplemaps_countrymap_mapdata.state_specific[parent_id].domScore['domain' + domain];

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
      // text: "Grade Wise distribution of states.",
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
        y: chartGradeData['Grade1'],
        label: "Grade I",
        color: gradeColor.G1
      },
      {
        y: chartGradeData['Grade2'],
        label: "Grade II",
        color: gradeColor.G2
      },
      {
        y: chartGradeData['Grade3'],
        label: "Grade III",
        color: gradeColor.G3
      },
      {
        y: chartGradeData['Grade4'],
        label: "Grade IV",
        color: gradeColor.G4
      },
      {
        y: chartGradeData['Grade5'],
        label: "Grade V",
        color: gradeColor.G5
      },
      {
        y: chartGradeData['Grade6'],
        label: "Grade VI",
        color: gradeColor.G6
      }
      ]
    }]
  });
  chart.render();

}

function getDomainWiseChart(domain,domainChart)
{
if (domain == 1) {
      CanvasJS.addColorSet('chartClr', ['#fac090', '#e46c0b']);


    } else if (domain == 2) {
      CanvasJS.addColorSet('chartClr', ['#e5b7b7', '#8165a2']);

    } else if (domain == 3) {
      CanvasJS.addColorSet('chartClr', ['#4298af', '#db843d']);


    } else if (domain == 4) {
      CanvasJS.addColorSet('chartClr', ['#c5bd98', '#31859d']);


    } else {
      CanvasJS.addColorSet('chartClr', ['#da9695', '#595959']);
    }

    let chart1 = new CanvasJS.Chart('chartDomain', {
      animationEnabled: true,
      colorSet: 'chartClr',
      backgroundColor: 'transparent',
      title: {
        text: '',
      },
      axisY: {
        interval: 10,
        labelFontSize: 12,
        gridColor: '#efefef',
      },
      axisX: {
        labelFontSize: 10,
        labelAutoFit: true,
        interval: 1,
        gridColor: '#efefef',
        tickColor: '#efefef'
      },
      legend: {
        fontSize: 16,
        fontWeight: 400,
        fontFamily: 'Source Sans Pro, sans-serif',
      },
      toolTip: {
        shared: true
      },
      data: domainChart
    });

    if (domain == 1) {
      chart1.options.axisY.interval = 20;
      chart1.options.axisY.maximum = 180;
    } else if (domain == 2) {
      chart1.options.axisY.interval = 10;
      chart1.options.axisY.maximum = 80;
    } else if (domain == 3) {
      chart1.options.axisY.interval = 20;
      chart1.options.axisY.maximum = 150;
    } else if (domain == 4) {
      chart1.options.axisY.interval = 50;
      chart1.options.axisY.maximum = 230;
    } else {
      chart1.options.axisY.interval = 50;
      chart1.options.axisY.maximum = 360;
    }

    chart1.render();
    // myExtObject.hideWatermark();
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
    showIndicatorWise: function (indicator) {
      showIndicatorWise(indicator);
    },
    showDomainWise: function (domain) {
      showDomainWise(domain)
    },
    gridWiseChart: function () {
      gridWiseChart();
    },
    getDomainWiseChart: function (domain,domainChart) {
      getDomainWiseChart(domain,domainChart);
    },
    getDomainData: function () {
      return domainData;
    },
    refresh: function () {
      simplemaps_countrymap.load();
    },
    hideWatermark: function () {
      removeWatermark();
    },
    setStatesData: function (states) {
      setStatesData(states);
    },
    setMapColor:function(data,type,year){
      // alert('data-->'+data);
      mapService(data,type,year);
    },
    viewMapService:function(){
      // alert('data-->'+data);
      viewMap();
    }
  }
})(myExtObject || {})

function onClick(e) {
  var i = e.dataPointIndex + 1;
  showGradeWise(i);
  let select = document.querySelector('.grade-filters select');
  select.value = i;

}



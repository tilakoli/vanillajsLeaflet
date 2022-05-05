// initialize the map
var map = L.map("map", {
  center: [50.1637822, 0.5850372],
  zoom: 8,
});

// // add map layer (OpenStreetMap)
// L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
//   maxZoom: 19,
//   attribution:
//     '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>',
// }).addTo(map);

// // load example GEOJSON (from Wikipedia)
// var geojsonFeature = {
//   type: "FeatureCollection",
//   features: [
//     {
//       type: "Feature",
//       geometry: {
//         type: "Point",
//         coordinates: [1.5, 50.16],
//       },
//       properties: {
//         prop0: "A",
//       },
//     },
//     {
//       type: "Feature",
//       geometry: {
//         type: "LineString",
//         coordinates: [
//           [102.0, 0.0],
//           [103.0, 1.0],
//           [104.0, 0.0],
//           [105.0, 1.0],
//         ],
//       },
//       properties: {
//         prop0: "B",
//         prop1: 0.0,
//       },
//     },
//     {
//       type: "Feature",
//       geometry: {
//         type: "Polygon",
//         coordinates: [
//           [
//             [100.0, 0.0],
//             [101.0, 0.0],
//             [101.0, 1.0],
//             [100.0, 1.0],
//             [100.0, 0.0],
//           ],
//         ],
//       },
//       properties: {
//         prop0: "C",
//         prop1: {this: "that"},
//       },
//     },
//   ],
// };

// // load GEOJSON object/array to map
// L.geoJSON(geojsonFeature, {
//   // style features based on properties
//   style: function (feature) {
//     switch (feature.properties.prop0) {
//       case "B":
//         return {color: "red"};
//       case "C":
//         return {color: "green"};
//     }
//   },
//   // replace default maker with circle for point feature
//   pointToLayer: function (feature, latlng) {
//     return L.circleMarker(latlng, {
//       radius: 14,
//       fillColor: "orange",
//       color: "orange",
//       weight: 2,
//       opacity: 1,
//       fillOpacity: 0.5,
//     });
//   },
//   // bind tooltip to each feature
//   onEachFeature: function (feature, layer) {
//     // check if specific property is existing
//     if (feature.properties.prop0) {
//       layer.bindTooltip("Object: " + feature.properties.prop0);
//     }
//   },
// }).addTo(map);

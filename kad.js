<!DOCTYPE html>
<html>

<head>
  <title>Kadena Map</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
  <style>
    html,
    body {
      height: 100%;
      margin: 0;
      padding: 0;
    }

    #map {
      position: absolute;
      top: 50px;
      /* leave room for search bar */
      bottom: 0;
      left: 0;
      right: 0;
    }

    #searchBox {
      position: absolute;
      top: 10px;
      left: 10px;
      z-index: 1000;
      padding: 8px;
      font-size: 16px;
      width: 200px;
    }
  </style>
</head>

<body>
  <div id="map"></div>

  <!-- ✅ SEARCH BAR -->
  <input type="text" id="searchBox" placeholder="Enter unit number" />

  <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
  <script>
    const map = L.map('map').setView([26.3484, 127.7695], 16); // center on Kadena
    const houseIcon = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/bobbyir/bobbyir.github.io/main/img/Arnold_Terrace.png',
      iconSize: [30, 30], // size of the icon
      iconAnchor: [15, 30], // point of the icon which will correspond to marker's location
      popupAnchor: [0, -30] // point from which the popup should open
    });
    const Marek_Park_Icon = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/bobbyir/bobbyir.github.io/main/img/Marek_Park.png',
      iconSize: [30, 30], // size of the icon
      iconAnchor: [15, 30], // point of the icon which will correspond to marker's location
      popupAnchor: [0, -30] // point from which the popup should open
    });
    const Clark_Vista_Icon = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/bobbyir/bobbyir.github.io/main/img/Clark_Vista.png',
      iconSize: [30, 30], // size of the icon
      iconAnchor: [15, 30], // point of the icon which will correspond to marker's location
      popupAnchor: [0, -30] // point from which the popup should open
    });
    const Jennings_Icon = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/bobbyir/bobbyir.github.io/main/img/Jennings_Icon.png',
      iconSize: [30, 30], // size of the icon
      iconAnchor: [15, 30], // point of the icon which will correspond to marker's location
      popupAnchor: [0, -30] // point from which the popup should open
    });

    const Washington_Icon = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/bobbyir/bobbyir.github.io/main/img/Washington_Icon.png',
      iconSize: [30, 30], // size of the icon
      iconAnchor: [15, 30], // point of the icon which will correspond to marker's location
      popupAnchor: [0, -30] // point from which the popup should open
    });
    const Beeson_Icon = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/bobbyir/bobbyir.github.io/main/img/Beeson_Icon.png',
      iconSize: [30, 30], // size of the icon
      iconAnchor: [15, 30], // point of the icon which will correspond to marker's location
      popupAnchor: [0, -30] // point from which the popup should open
    });
    const Terrace_Heights_Icon = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/bobbyir/bobbyir.github.io/main/img/TerraceHeightsIcon.png',
      iconSize: [30, 30], // size of the icon
      iconAnchor: [15, 30], // point of the icon which will correspond to marker's location
      popupAnchor: [0, -30] // point from which the popup should open
    });
    const Stillwell_Park_Icon = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/bobbyir/bobbyir.github.io/main/img/StillwellParkIcon.png',
      iconSize: [30, 30], // size of the icon
      iconAnchor: [15, 30], // point of the icon which will correspond to marker's location
      popupAnchor: [0, -30] // point from which the popup should open
    });


    // Load base tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Add unit markers (example)
    const Arnold_Terrace = [
      { name: "9820", lat: 26.32774, lng: 127.7556, area: "Arnold Terrace" },
      { name: "9818", lat: 26.3281, lng: 127.75585, area: "Arnold Terrace" },
      { name: "9819", lat: 26.32824, lng: 127.75553, area: "Arnold Terrace" },
      { name: "9817", lat: 26.32841, lng: 127.7558, area: "Arnold Terrace" },
      { name: "9816", lat: 26.32874, lng: 127.75665, area: "Arnold Terrace" },
      { name: "9815", lat: 26.32896, lng: 127.75705, area: "Arnold Terrace" },
      { name: "9814", lat: 26.32925, lng: 127.75761, area: "Arnold Terrace" },
      { name: "9813", lat: 26.32938, lng: 127.75797, area: "Arnold Terrace" },
      { name: "9969", lat: 26.32791, lng: 127.75455, area: "Arnold Terrace" },
      { name: "9971", lat: 26.32793, lng: 127.75434, area: "Arnold Terrace" },
      { name: "9967", lat: 26.32809, lng: 127.7547, area: "Arnold Terrace" },
      { name: "9965", lat: 26.3284, lng: 127.75473, area: "Arnold Terrace" },
      { name: "9963", lat: 26.32861, lng: 127.75478, area: "Arnold Terrace" },
      { name: "9961", lat: 26.32885, lng: 127.75484, area: "Arnold Terrace" },
      { name: "9959", lat: 26.32909, lng: 127.75487, area: "Arnold Terrace" },
      { name: "9957", lat: 26.32929, lng: 127.75498, area: "Arnold Terrace" },
      { name: "9960", lat: 26.3284, lng: 127.75436, area: "Arnold Terrace" },
      { name: "9958", lat: 26.32868, lng: 127.75439, area: "Arnold Terrace" },
      { name: "9956", lat: 26.32892, lng: 127.75442, area: "Arnold Terrace" },
      { name: "9973", lat: 26.32834, lng: 127.75391, area: "Arnold Terrace" },
      { name: "9975", lat: 26.32861, lng: 127.75393, area: "Arnold Terrace" },
      { name: "9977", lat: 26.32888, lng: 127.75394, area: "Arnold Terrace" },
      { name: "9981", lat: 26.3289, lng: 127.75356, area: "Arnold Terrace" },
      { name: "9980", lat: 26.32885, lng: 127.75298, area: "Arnold Terrace" },
      { name: "9952", lat: 26.32938, lng: 127.75452, area: "Arnold Terrace" },
      { name: "9955", lat: 26.32951, lng: 127.7551, area: "Arnold Terrace" },
      { name: "9953", lat: 26.32971, lng: 127.75492, area: "Arnold Terrace" },
      { name: "9951", lat: 26.32974, lng: 127.75457, area: "Arnold Terrace" },
      { name: "9901", lat: 26.33068, lng: 127.75467, area: "Arnold Terrace" },
      { name: "9903", lat: 26.33064, lng: 127.75502, area: "Arnold Terrace" },
      { name: "9900", lat: 26.33115, lng: 127.75479, area: "Arnold Terrace" },
      { name: "9954", lat: 26.32916, lng: 127.75449, area: "Arnold Terrace" },
      { name: "9902", lat: 26.33125, lng: 127.7551, area: "Arnold Terrace" },
      { name: "9904", lat: 26.3313, lng: 127.7554, area: "Arnold Terrace" },
      { name: "9908", lat: 26.33134, lng: 127.75563, area: "Arnold Terrace" },
      { name: "9910", lat: 26.33141, lng: 127.75589, area: "Arnold Terrace" },
      { name: "9905", lat: 26.33085, lng: 127.75536, area: "Arnold Terrace" },
      { name: "9909", lat: 26.33063, lng: 127.75552, area: "Arnold Terrace" },
      { name: "9911", lat: 26.33058, lng: 127.75573, area: "Arnold Terrace" },
      { name: "9906", lat: 26.33085, lng: 127.75577, area: "Arnold Terrace" },
      { name: "9907", lat: 26.33099, lng: 127.75602, area: "Arnold Terrace" },
      { name: "9931", lat: 26.3297, lng: 127.75595, area: "Arnold Terrace" },
      { name: "9932", lat: 26.3297, lng: 127.75613, area: "Arnold Terrace" },
      { name: "9927", lat: 26.33011, lng: 127.75597, area: "Arnold Terrace" },
      { name: "9925", lat: 26.33035, lng: 127.75598, area: "Arnold Terrace" },
      { name: "9923", lat: 26.3306, lng: 127.75613, area: "Arnold Terrace" },
      { name: "9921", lat: 26.33079, lng: 127.75624, area: "Arnold Terrace" },
      { name: "9919", lat: 26.33097, lng: 127.75635, area: "Arnold Terrace" },
      { name: "9928", lat: 26.33012, lng: 127.7563, area: "Arnold Terrace" },
      { name: "9926", lat: 26.33032, lng: 127.75648, area: "Arnold Terrace" },
      { name: "9924", lat: 26.33064, lng: 127.75666, area: "Arnold Terrace" },
      { name: "9920", lat: 26.331, lng: 127.75681, area: "Arnold Terrace" },
      { name: "9915", lat: 26.33119, lng: 127.75628, area: "Arnold Terrace" },
      { name: "9918", lat: 26.33133, lng: 127.75673, area: "Arnold Terrace" },
      { name: "9916", lat: 26.33139, lng: 127.75709, area: "Arnold Terrace" },
      { name: "9950", lat: 26.33023, lng: 127.75456, area: "Arnold Terrace" },
      { name: "164", lat: 26.32843, lng: 127.75901, area: "Arnold Terrace" },
      { name: "9810", lat: 26.3296, lng: 127.75912, area: "Arnold Terrace" },
      { name: "9808", lat: 26.32998, lng: 127.75894, area: "Arnold Terrace" },
      { name: "9809", lat: 26.33028, lng: 127.75848, area: "Arnold Terrace" },
      { name: "9811", lat: 26.33012, lng: 127.75777, area: "Arnold Terrace" },
      { name: "9806", lat: 26.33072, lng: 127.75796, area: "Arnold Terrace" },
      { name: "9803", lat: 26.33135, lng: 127.75811, area: "Arnold Terrace" },
      { name: "9801", lat: 26.33141, lng: 127.75866, area: "Arnold Terrace" },
      { name: "9804", lat: 26.33105, lng: 127.75869, area: "Arnold Terrace" },
      { name: "9807", lat: 26.33104, lng: 127.75918, area: "Arnold Terrace" },
    ];

    const Marek_Park = [
      { name: "10347", lat: 26.33033, lng: 127.75956, area: "Marek_Park" },
      { name: "10345", lat: 26.33002, lng: 127.75984, area: "Marek_Park" },
      { name: "10348", lat: 26.33075, lng: 127.75983, area: "Marek_Park" },
      { name: "10346", lat: 26.33046, lng: 127.76012, area: "Marek_Park" },
      { name: "10343", lat: 26.33105, lng: 127.76016, area: "Marek_Park" },
      { name: "10341", lat: 26.33066, lng: 127.76051, area: "Marek_Park" },
      { name: "10342", lat: 26.3313, lng: 127.76057, area: "Marek_Park" },
      { name: "10340", lat: 26.33098, lng: 127.76077, area: "Marek_Park" },
      { name: "10329", lat: 26.33119, lng: 127.76118, area: "Marek_Park" },
      { name: "10331", lat: 26.33156, lng: 127.76099, area: "Marek_Park" },
      { name: "10330", lat: 26.33143, lng: 127.76162, area: "Marek_Park" },
      { name: "10333", lat: 26.332, lng: 127.76113, area: "Marek_Park" },
      { name: "10335", lat: 26.33223, lng: 127.76145, area: "Marek_Park" },
      { name: "10335", lat: 26.33223, lng: 127.76145, area: "Marek_Park" },
      { name: "10334", lat: 26.33184, lng: 127.76177, area: "Marek_Park" },
      { name: "10337", lat: 26.33253, lng: 127.7618, area: "Marek_Park" },
      { name: "10339", lat: 26.33273, lng: 127.76226, area: "Marek_Park" },
      { name: "10338", lat: 26.33237, lng: 127.76253, area: "Marek_Park" },
      { name: "10336", lat: 26.33202, lng: 127.76217, area: "Marek_Park" },
      { name: "10321", lat: 26.33169, lng: 127.76226, area: "Marek_Park" },
      { name: "10320", lat: 26.33174, lng: 127.76274, area: "Marek_Park" },
      { name: "10351", lat: 26.33036, lng: 127.76092, area: "Marek_Park" },
      { name: "10353", lat: 26.33021, lng: 127.76142, area: "Marek_Park" },
      { name: "10350", lat: 26.32979, lng: 127.76085, area: "Marek_Park" },
      { name: "10352", lat: 26.32981, lng: 127.76136, area: "Marek_Park" },
      { name: "10360", lat: 26.32972, lng: 127.76181, area: "Marek_Park" },
      { name: "10361", lat: 26.32991, lng: 127.76227, area: "Marek_Park" },
      { name: "10362", lat: 26.33011, lng: 127.76189, area: "Marek_Park" },
      { name: "10356", lat: 26.32913, lng: 127.76097, area: "Marek_Park" },
      { name: "10357", lat: 26.32881, lng: 127.7612, area: "Marek_Park" },
      { name: "10355", lat: 26.32912, lng: 127.76149, area: "Marek_Park" },
      { name: "10364", lat: 26.32941, lng: 127.76251, area: "Marek_Park" },
      { name: "10370", lat: 26.32958, lng: 127.76299, area: "Marek_Park" },
      { name: "10372", lat: 26.3293, lng: 127.76318, area: "Marek_Park" },
      { name: "10374", lat: 26.32916, lng: 127.76358, area: "Marek_Park" },
      { name: "10373", lat: 26.32955, lng: 127.7636, area: "Marek_Park" },
      { name: "10371", lat: 26.32982, lng: 127.76343, area: "Marek_Park" },
      { name: "10365", lat: 26.3301, lng: 127.76264, area: "Marek_Park" },
      { name: "10366", lat: 26.33033, lng: 127.76311, area: "Marek_Park" },
      { name: "10367", lat: 26.33046, lng: 127.76268, area: "Marek_Park" },
      { name: "10324", lat: 26.33072, lng: 127.76244, area: "Marek_Park" },
      { name: "10322", lat: 26.33102, lng: 127.76239, area: "Marek_Park" },
      { name: "10323", lat: 26.33111, lng: 127.76289, area: "Marek_Park" },
      { name: "10325", lat: 26.33081, lng: 127.76296, area: "Marek_Park" },
      { name: "10257", lat: 26.32985, lng: 127.76421, area: "Marek_Park" },
      { name: "10255", lat: 26.33013, lng: 127.76388, area: "Marek_Park" },
      { name: "10254", lat: 26.33023, lng: 127.76422, area: "Marek_Park" },
      { name: "10253", lat: 26.33045, lng: 127.76467, area: "Marek_Park" },
      { name: "10256", lat: 26.33058, lng: 127.76358, area: "Marek_Park" },
      { name: "10256", lat: 26.33058, lng: 127.76358, area: "Marek_Park" },
      { name: "10251", lat: 26.33074, lng: 127.76383, area: "Marek_Park" },
      { name: "10252", lat: 26.33116, lng: 127.76386, area: "Marek_Park" },
      { name: "10250", lat: 26.33101, lng: 127.76426, area: "Marek_Park" },
      { name: "10326", lat: 26.33062, lng: 127.76157, area: "Marek_Park" },
      { name: "10328", lat: 26.33047, lng: 127.76193, area: "Marek_Park" },
      { name: "10327", lat: 26.33086, lng: 127.76198, area: "Marek_Park" },
      { name: "10261", lat: 26.33167, lng: 127.76456, area: "Marek_Park" },
      { name: "10260", lat: 26.33125, lng: 127.76481, area: "Marek_Park" },
      { name: "10263", lat: 26.33182, lng: 127.76492, area: "Marek_Park" },
      { name: "10262", lat: 26.33141, lng: 127.76516, area: "Marek_Park" },
      { name: "10265", lat: 26.33205, lng: 127.76526, area: "Marek_Park" },
      { name: "10266", lat: 26.33216, lng: 127.76575, area: "Marek_Park" },
      { name: "10264", lat: 26.3318, lng: 127.76595, area: "Marek_Park" },
      { name: "10244", lat: 26.33089, lng: 127.76588, area: "Marek_Park" },
      { name: "10243", lat: 26.33109, lng: 127.76636, area: "Marek_Park" },
      { name: "10238", lat: 26.33176, lng: 127.76682, area: "Marek_Park" },
      { name: "10240", lat: 26.3317, lng: 127.76713, area: "Marek_Park" },
      { name: "10239", lat: 26.33221, lng: 127.76693, area: "Marek_Park" },
      { name: "10241", lat: 26.33217, lng: 127.76727, area: "Marek_Park" },
      { name: "10232", lat: 26.33255, lng: 127.76699, area: "Marek_Park" },
      { name: "10234", lat: 26.33271, lng: 127.76739, area: "Marek_Park" },
      { name: "10233", lat: 26.33301, lng: 127.76712, area: "Marek_Park" },
      { name: "10230", lat: 26.33322, lng: 127.76651, area: "Marek_Park" },
      { name: "10231", lat: 26.33275, lng: 127.76639, area: "Marek_Park" },
      { name: "10236", lat: 26.33249, lng: 127.76641, area: "Marek_Park" },
      { name: "10225", lat: 26.33242, lng: 127.76855, area: "Marek_Park" },
      { name: "10227", lat: 26.33201, lng: 127.76869, area: "Marek_Park" },
      { name: "10224", lat: 26.33259, lng: 127.76786, area: "Marek_Park" },
      { name: "10220", lat: 26.33296, lng: 127.76783, area: "Marek_Park" },
      { name: "10204", lat: 26.33189, lng: 127.76973, area: "Marek_Park" },
      { name: "10206", lat: 26.33211, lng: 127.77011, area: "Marek_Park" },
      { name: "10208", lat: 26.33229, lng: 127.77041, area: "Marek_Park" },
      { name: "10210", lat: 26.33263, lng: 127.77059, area: "Marek_Park" },
      { name: "10207", lat: 26.33281, lng: 127.76991, area: "Marek_Park" },
      { name: "10205", lat: 26.33251, lng: 127.76972, area: "Marek_Park" },
      { name: "10203", lat: 26.3323, lng: 127.7694, area: "Marek_Park" },
      { name: "10202", lat: 26.3326, lng: 127.76925, area: "Marek_Park" },
      { name: "10201", lat: 26.33306, lng: 127.76922, area: "Marek_Park" },
      { name: "10190", lat: 26.3334, lng: 127.77035, area: "Marek_Park" },
      { name: "10182", lat: 26.33287, lng: 127.77161, area: "Marek_Park" },
      { name: "10184", lat: 26.33331, lng: 127.77099, area: "Marek_Park" },
      { name: "10186", lat: 26.33399, lng: 127.77121, area: "Marek_Park" },
      { name: "10180", lat: 26.33445, lng: 127.77142, area: "Marek_Park" },
      { name: "10181", lat: 26.33363, lng: 127.77064, area: "Marek_Park" },
      { name: "10188", lat: 26.33462, lng: 127.77047, area: "Marek_Park" },
      { name: "97", lat: 26.33532, lng: 127.77159, area: "Marek_Park" },
      { name: "94", lat: 26.33585, lng: 127.77144, area: "Marek_Park" },
      { name: "98", lat: 26.33614, lng: 127.77071, area: "Marek_Park" },
      { name: "10283", lat: 26.33202, lng: 127.76363, area: "Marek_Park" },
      { name: "10284", lat: 26.33229, lng: 127.76329, area: "Marek_Park" },
      { name: "10282", lat: 26.3325, lng: 127.76366, area: "Marek_Park" },
      { name: "10306", lat: 26.33273, lng: 127.76305, area: "Marek_Park" },
      { name: "10304", lat: 26.333, lng: 127.7629, area: "Marek_Park" },
      { name: "10303", lat: 26.33323, lng: 127.76334, area: "Marek_Park" },
      { name: "10305", lat: 26.33291, lng: 127.76354, area: "Marek_Park" },
      { name: "10280", lat: 26.33272, lng: 127.76394, area: "Marek_Park" },
      { name: "10301", lat: 26.33306, lng: 127.76392, area: "Marek_Park" },
      { name: "10300", lat: 26.33351, lng: 127.76372, area: "Marek_Park" },
      { name: "10291", lat: 26.33378, lng: 127.76438, area: "Marek_Park" },
      { name: "10290", lat: 26.33334, lng: 127.76463, area: "Marek_Park" },
      { name: "10292", lat: 26.3337, lng: 127.76484, area: "Marek_Park" },
    ];

    const Clark_Vista = [
      { name: "359", lat: 26.3352, lng: 127.76278, area: "Clark_Vista" },
      { name: "358", lat: 26.33543, lng: 127.76267, area: "Clark_Vista" },
      { name: "357", lat: 26.33569, lng: 127.76253, area: "Clark_Vista" },
      { name: "360", lat: 26.33544, lng: 127.76313, area: "Clark_Vista" },
      { name: "356", lat: 26.33601, lng: 127.76258, area: "Clark_Vista" },
      { name: "355", lat: 26.33611, lng: 127.76288, area: "Clark_Vista" },
      { name: "354", lat: 26.33617, lng: 127.76332, area: "Clark_Vista" },
      { name: "361", lat: 26.33572, lng: 127.76333, area: "Clark_Vista" },
      { name: "362", lat: 26.33585, lng: 127.76354, area: "Clark_Vista" },
      { name: "363", lat: 26.33597, lng: 127.7638, area: "Clark_Vista" },
      { name: "353", lat: 26.33628, lng: 127.76359, area: "Clark_Vista" },
      { name: "352", lat: 26.33658, lng: 127.76353, area: "Clark_Vista" },
      { name: "351", lat: 26.33668, lng: 127.76321, area: "Clark_Vista" },
    ];


    const Jennings = [
      { name: "9304", lat: 26.33555, lng: 127.77277, area: "Jennings" },
      { name: "9305", lat: 26.33583, lng: 127.77311, area: "Jennings" },
      { name: "9306", lat: 26.33602, lng: 127.77352, area: "Jennings" },
      { name: "9302", lat: 26.33629, lng: 127.77393, area: "Jennings" },
      { name: "9303", lat: 26.33656, lng: 127.77423, area: "Jennings" },
      { name: "9309", lat: 26.33521, lng: 127.77305, area: "Jennings" },
      //MAKE SURE TO CHANGE THIS BELOW FROM JENNINGS TO NORTHERN TERRACE  
      { name: "9308", lat: 26.3578, lng: 127.79993, area: "Northern Terrace" },
      { name: "9307", lat: 26.33565, lng: 127.77382, area: "Jennings" },
      { name: "9301", lat: 26.33594, lng: 127.77418, area: "Jennings" },
      { name: "9300", lat: 26.33611, lng: 127.77461, area: "Jennings" },
      { name: "9310", lat: 26.33484, lng: 127.77318, area: "Jennings" },
      { name: "9311", lat: 26.33475, lng: 127.77359, area: "Jennings" },
      { name: "9312", lat: 26.33444, lng: 127.7733, area: "Jennings" },
      { name: "9314", lat: 26.33506, lng: 127.77378, area: "Jennings" },
      { name: "9315", lat: 26.33541, lng: 127.77411, area: "Jennings" },
      { name: "9313", lat: 26.3347, lng: 127.77404, area: "Jennings" },
      { name: "9316", lat: 26.33513, lng: 127.7745, area: "Jennings" },
      { name: "9318", lat: 26.33566, lng: 127.77463, area: "Jennings" },
      { name: "9317", lat: 26.33533, lng: 127.77485, area: "Jennings" },
      { name: "9319", lat: 26.33591, lng: 127.77503, area: "Jennings" },
      { name: "9320", lat: 26.33556, lng: 127.77529, area: "Jennings" },
      { name: "9324", lat: 26.33609, lng: 127.77549, area: "Jennings" },
      { name: "9323", lat: 26.33574, lng: 127.77563, area: "Jennings" },
      { name: "9321", lat: 26.33626, lng: 127.77607, area: "Jennings" },
      { name: "9322", lat: 26.33584, lng: 127.77615, area: "Jennings" },
      { name: "9328", lat: 26.33641, lng: 127.77656, area: "Jennings" },
      { name: "9327", lat: 26.33598, lng: 127.7766, area: "Jennings" },
      { name: "9326", lat: 26.33551, lng: 127.77649, area: "Jennings" },
      { name: "9329", lat: 26.3366, lng: 127.77713, area: "Jennings" },
      { name: "9330", lat: 26.33666, lng: 127.7776, area: "Jennings" },
      { name: "9332", lat: 26.33608, lng: 127.77732, area: "Jennings" },
      { name: "9331", lat: 26.33624, lng: 127.77777, area: "Jennings" },
      { name: "9333", lat: 26.33571, lng: 127.77744, area: "Jennings" },
      { name: "9334", lat: 26.33581, lng: 127.77791, area: "Jennings" },
      { name: "9337", lat: 26.33531, lng: 127.77711, area: "Jennings" },
      { name: "9336", lat: 26.33529, lng: 127.77758, area: "Jennings" },
      { name: "9335", lat: 26.3354, lng: 127.77806, area: "Jennings" },
      { name: "9338", lat: 26.33496, lng: 127.77787, area: "Jennings" },
      { name: "9342", lat: 26.33488, lng: 127.7769, area: "Jennings" },
      { name: "9341", lat: 26.3347, lng: 127.77731, area: "Jennings" },
      { name: "9340", lat: 26.33455, lng: 127.77771, area: "Jennings" },
      { name: "9339", lat: 26.33466, lng: 127.77808, area: "Jennings" },
      { name: "9277", lat: 26.3339, lng: 127.77345, area: "Jennings" },
      { name: "9278", lat: 26.33367, lng: 127.77382, area: "Jennings" },
      { name: "9276", lat: 26.33404, lng: 127.77394, area: "Jennings" },
      { name: "9279", lat: 26.33376, lng: 127.77434, area: "Jennings" },
      { name: "9280", lat: 26.3338, lng: 127.77476, area: "Jennings" },
      { name: "9364", lat: 26.33421, lng: 127.77455, area: "Jennings" },
      { name: "9288", lat: 26.33351, lng: 127.77512, area: "Jennings" },
      { name: "9290", lat: 26.3332, lng: 127.77475, area: "Jennings" },
      { name: "9284", lat: 26.33323, lng: 127.77427, area: "Jennings" },
      { name: "9282", lat: 26.33316, lng: 127.77378, area: "Jennings" },
      { name: "9283", lat: 26.33261, lng: 127.77399, area: "Jennings" },
      { name: "9285", lat: 26.3328, lng: 127.77444, area: "Jennings" },
      { name: "9289", lat: 26.33284, lng: 127.77504, area: "Jennings" },
      { name: "9287", lat: 26.33304, lng: 127.77549, area: "Jennings" },
      { name: "9363", lat: 26.33461, lng: 127.77484, area: "Jennings" },
      { name: "9281", lat: 26.33428, lng: 127.77523, area: "Jennings" },
      { name: "9361", lat: 26.3346, lng: 127.77556, area: "Jennings" },
      { name: "9360", lat: 26.33494, lng: 127.77531, area: "Jennings" },
      { name: "9357", lat: 26.33502, lng: 127.77588, area: "Jennings" },
      { name: "9356", lat: 26.33467, lng: 127.77601, area: "Jennings" },
      { name: "9358", lat: 26.33504, lng: 127.77629, area: "Jennings" },
      { name: "9343", lat: 26.33447, lng: 127.77667, area: "Jennings" },
      { name: "9344", lat: 26.33418, lng: 127.77704, area: "Jennings" },
      { name: "9346", lat: 26.33403, lng: 127.77635, area: "Jennings" },
      { name: "9345", lat: 26.33381, lng: 127.77675, area: "Jennings" },
      { name: "9347", lat: 26.33367, lng: 127.77618, area: "Jennings" },
      { name: "9348", lat: 26.33333, lng: 127.77612, area: "Jennings" },
      { name: "9355", lat: 26.33411, lng: 127.77562, area: "Jennings" },
      { name: "9299", lat: 26.33195, lng: 127.77469, area: "Jennings" },
      { name: "9296", lat: 26.33209, lng: 127.77508, area: "Jennings" },
      { name: "9295", lat: 26.3323, lng: 127.77553, area: "Jennings" },
      { name: "9297", lat: 26.33192, lng: 127.77543, area: "Jennings" },
      { name: "9298", lat: 26.33213, lng: 127.77589, area: "Jennings" },
      { name: "9380", lat: 26.3317, lng: 127.77579, area: "Jennings" },
      { name: "9379", lat: 26.33174, lng: 127.77624, area: "Jennings" },
      { name: "9291", lat: 26.33269, lng: 127.77625, area: "Jennings" },
      { name: "9293", lat: 26.33269, lng: 127.77666, area: "Jennings" },
      { name: "9292", lat: 26.33232, lng: 127.77654, area: "Jennings" },
      { name: "9294", lat: 26.3329, lng: 127.77696, area: "Jennings" },
      { name: "9396", lat: 26.33324, lng: 127.77711, area: "Jennings" },
      { name: "9394", lat: 26.33288, lng: 127.77738, area: "Jennings" },
      { name: "9382", lat: 26.33203, lng: 127.77673, area: "Jennings" },
      { name: "9383", lat: 26.33172, lng: 127.77708, area: "Jennings" },
      { name: "9390", lat: 26.33221, lng: 127.77724, area: "Jennings" },
      { name: "9389", lat: 26.33182, lng: 127.77752, area: "Jennings" },
      { name: "9391", lat: 26.33248, lng: 127.77758, area: "Jennings" },
      { name: "9388", lat: 26.33201, lng: 127.77798, area: "Jennings" },
      { name: "9387", lat: 26.33127, lng: 127.77792, area: "Jennings" },
      { name: "9385", lat: 26.33147, lng: 127.77832, area: "Jennings" },
      { name: "9386", lat: 26.33114, lng: 127.77832, area: "Jennings" },
      { name: "9395", lat: 26.33357, lng: 127.77763, area: "Jennings" },
      { name: "9393", lat: 26.33321, lng: 127.77792, area: "Jennings" },
      { name: "9384", lat: 26.33127, lng: 127.77682, area: "Jennings" },
    ];

    const Washington_Heights = [
      { name: "8300", lat: 26.3355, lng: 127.75998, area: "Washington Heights" },
      { name: "8400", lat: 26.33571, lng: 127.76038, area: "Washington Heights" },
      { name: "8301", lat: 26.33584, lng: 127.76077, area: "Washington Heights" },
      { name: "8107", lat: 26.33651, lng: 127.76118, area: "Washington Heights" },
      { name: "8106", lat: 26.33676, lng: 127.76136, area: "Washington Heights" },
      { name: "8105", lat: 26.3369, lng: 127.76102, area: "Washington Heights" },
      { name: "8104", lat: 26.33715, lng: 127.76092, area: "Washington Heights" },
      { name: "8103", lat: 26.33719, lng: 127.76131, area: "Washington Heights" },
      { name: "8102", lat: 26.33754, lng: 127.76128, area: "Washington Heights" },
      { name: "8101", lat: 26.33756, lng: 127.76083, area: "Washington Heights" },
      { name: "8115", lat: 26.33791, lng: 127.76152, area: "Washington Heights" },
      { name: "8113", lat: 26.33754, lng: 127.76207, area: "Washington Heights" },
      { name: "8120", lat: 26.33789, lng: 127.76212, area: "Washington Heights" },
      { name: "8122", lat: 26.33777, lng: 127.76252, area: "Washington Heights" },
      { name: "8124", lat: 26.33785, lng: 127.76291, area: "Washington Heights" },
      { name: "8117", lat: 26.33827, lng: 127.76217, area: "Washington Heights" },
      { name: "8119", lat: 26.33821, lng: 127.76258, area: "Washington Heights" },
      { name: "8121", lat: 26.33839, lng: 127.76289, area: "Washington Heights" },
      { name: "8114", lat: 26.33856, lng: 127.76228, area: "Washington Heights" },
      { name: "8116", lat: 26.33872, lng: 127.76262, area: "Washington Heights" },
      { name: "8118", lat: 26.33896, lng: 127.76286, area: "Washington Heights" },
      { name: "8213", lat: 26.33856, lng: 127.76065, area: "Washington Heights" },
      { name: "8212", lat: 26.33827, lng: 127.76094, area: "Washington Heights" },
      { name: "8211", lat: 26.33888, lng: 127.76104, area: "Washington Heights" },
      { name: "8210", lat: 26.33848, lng: 127.76143, area: "Washington Heights" },
      { name: "8209", lat: 26.33913, lng: 127.76146, area: "Washington Heights" },
      { name: "8208", lat: 26.33887, lng: 127.76169, area: "Washington Heights" },
      { name: "8207", lat: 26.3394, lng: 127.76183, area: "Washington Heights" },
      { name: "8206", lat: 26.33911, lng: 127.7621, area: "Washington Heights" },
      { name: "8205", lat: 26.33958, lng: 127.76253, area: "Washington Heights" },
      { name: "8204", lat: 26.3398, lng: 127.76297, area: "Washington Heights" },
      { name: "8203", lat: 26.33992, lng: 127.7638, area: "Washington Heights" },
      { name: "8202", lat: 26.34009, lng: 127.76424, area: "Washington Heights" },
      { name: "8201", lat: 26.33988, lng: 127.76457, area: "Washington Heights" },
      { name: "8200", lat: 26.34022, lng: 127.7649, area: "Washington Heights" },
      { name: "8123", lat: 26.33888, lng: 127.7634, area: "Washington Heights" },
      { name: "8125", lat: 26.33919, lng: 127.76366, area: "Washington Heights" },
      { name: "8127", lat: 26.3394, lng: 127.76406, area: "Washington Heights" },
      { name: "8129", lat: 26.33941, lng: 127.76454, area: "Washington Heights" },
      { name: "8131", lat: 26.33946, lng: 127.76494, area: "Washington Heights" },
      { name: "8126", lat: 26.33821, lng: 127.76362, area: "Washington Heights" },
      { name: "8128", lat: 26.33857, lng: 127.76374, area: "Washington Heights" },
      { name: "8130", lat: 26.33889, lng: 127.76402, area: "Washington Heights" },
      { name: "8132", lat: 26.33897, lng: 127.76439, area: "Washington Heights" },
      { name: "8134", lat: 26.339, lng: 127.76472, area: "Washington Heights" },
      { name: "8136", lat: 26.33906, lng: 127.76516, area: "Washington Heights" },
      { name: "8146", lat: 26.33876, lng: 127.76535, area: "Washington Heights" },
      { name: "8148", lat: 26.33848, lng: 127.76511, area: "Washington Heights" },
      { name: "8150", lat: 26.33843, lng: 127.76553, area: "Washington Heights" },
      { name: "8133", lat: 26.33997, lng: 127.76555, area: "Washington Heights" },
      { name: "8135", lat: 26.34014, lng: 127.76599, area: "Washington Heights" },
      { name: "8137", lat: 26.34036, lng: 127.76642, area: "Washington Heights" },
      { name: "8139", lat: 26.34058, lng: 127.76692, area: "Washington Heights" },
      { name: "8138", lat: 26.33957, lng: 127.76577, area: "Washington Heights" },
      { name: "8140", lat: 26.33972, lng: 127.76617, area: "Washington Heights" },
      { name: "8142", lat: 26.33988, lng: 127.76655, area: "Washington Heights" },
      { name: "8144", lat: 26.34014, lng: 127.76688, area: "Washington Heights" },
      { name: "8152", lat: 26.33925, lng: 127.76595, area: "Washington Heights" },
      { name: "8154", lat: 26.33939, lng: 127.76631, area: "Washington Heights" },
      { name: "8156", lat: 26.33966, lng: 127.76703, area: "Washington Heights" },
      { name: "8158", lat: 26.33982, lng: 127.76747, area: "Washington Heights" },
      { name: "8160", lat: 26.33986, lng: 127.76781, area: "Washington Heights" },
      { name: "8151", lat: 26.33882, lng: 127.76609, area: "Washington Heights" },
      { name: "8153", lat: 26.33895, lng: 127.76653, area: "Washington Heights" },
      { name: "8163", lat: 26.3385, lng: 127.76608, area: "Washington Heights" },
      { name: "8161", lat: 26.3381, lng: 127.76631, area: "Washington Heights" },
      { name: "8191", lat: 26.33801, lng: 127.76672, area: "Washington Heights" },
      { name: "8193", lat: 26.33828, lng: 127.76709, area: "Washington Heights" },
      { name: "8170", lat: 26.33744, lng: 127.76613, area: "Washington Heights" },
      { name: "8172", lat: 26.33708, lng: 127.76639, area: "Washington Heights" },
      { name: "8190", lat: 26.33758, lng: 127.7668, area: "Washington Heights" },
      { name: "8177", lat: 26.33729, lng: 127.76709, area: "Washington Heights" },
      { name: "8174", lat: 26.33681, lng: 127.76708, area: "Washington Heights" },
      { name: "8176", lat: 26.33698, lng: 127.76749, area: "Washington Heights" },
      { name: "8192", lat: 26.3378, lng: 127.76722, area: "Washington Heights" },
      { name: "8179", lat: 26.33754, lng: 127.76752, area: "Washington Heights" },
      { name: "8178", lat: 26.33733, lng: 127.76804, area: "Washington Heights" },
      { name: "8194", lat: 26.33803, lng: 127.76758, area: "Washington Heights" },
      { name: "8181", lat: 26.33773, lng: 127.76785, area: "Washington Heights" },
      { name: "8183", lat: 26.33801, lng: 127.76822, area: "Washington Heights" },
      { name: "8180", lat: 26.33757, lng: 127.76848, area: "Washington Heights" },
      { name: "8182", lat: 26.33779, lng: 127.76885, area: "Washington Heights" },
      { name: "8184", lat: 26.33814, lng: 127.76882, area: "Washington Heights" },
      { name: "8157", lat: 26.3394, lng: 127.76802, area: "Washington Heights" },
      { name: "1441", lat: 26.33801, lng: 127.76575, area: "Washington Heights" },
    ]

    const Beeson = [
      { name: "9462", lat: 26.33921, lng: 127.7798, area: "Beeson" },
      { name: "9463", lat: 26.33938, lng: 127.7802, area: "Beeson" },
      { name: "9464", lat: 26.33905, lng: 127.78036, area: "Beeson" },
      { name: "9465", lat: 26.33927, lng: 127.78068, area: "Beeson" },
      { name: "9466", lat: 26.3389, lng: 127.78086, area: "Beeson" },
      { name: "9467", lat: 26.33861, lng: 127.78204, area: "Beeson" },
      { name: "9468", lat: 26.33848, lng: 127.78246, area: "Beeson" },
      { name: "9476", lat: 26.33867, lng: 127.78288, area: "Beeson" },
      { name: "9469", lat: 26.33839, lng: 127.78292, area: "Beeson" },
      { name: "9470", lat: 26.33864, lng: 127.78328, area: "Beeson" },
      { name: "9471", lat: 26.33833, lng: 127.78352, area: "Beeson" },
      { name: "9472", lat: 26.33868, lng: 127.78374, area: "Beeson" },
      { name: "9473", lat: 26.33841, lng: 127.78406, area: "Beeson" },
      { name: "9474", lat: 26.33872, lng: 127.78428, area: "Beeson" },
      { name: "9475", lat: 26.33855, lng: 127.78472, area: "Beeson" },
    ]
    const TerraceHeights = [
      { name: "2984", lat: 26.35456, lng: 127.79353, area: "Terrace Heights" },
      { name: "2985", lat: 26.35459, lng: 127.79394, area: "Terrace Heights" },
      { name: "2983", lat: 26.35493, lng: 127.79377, area: "Terrace Heights" },
      { name: "2981", lat: 26.3552, lng: 127.79404, area: "Terrace Heights" },
      { name: "2982", lat: 26.35511, lng: 127.7944, area: "Terrace Heights" },
      { name: "2980", lat: 26.35544, lng: 127.79441, area: "Terrace Heights" },
      { name: "2977", lat: 26.35584, lng: 127.79405, area: "Terrace Heights" },
      { name: "2978", lat: 26.3561, lng: 127.79445, area: "Terrace Heights" },
      { name: "2979", lat: 26.3562, lng: 127.79406, area: "Terrace Heights" },
      { name: "2959", lat: 26.35633, lng: 127.79479, area: "Terrace Heights" },
      { name: "2958", lat: 26.35661, lng: 127.79511, area: "Terrace Heights" },
      { name: "2960", lat: 26.35591, lng: 127.79514, area: "Terrace Heights" },
      { name: "2961", lat: 26.35612, lng: 127.79555, area: "Terrace Heights" },
      { name: "2962", lat: 26.35638, lng: 127.79582, area: "Terrace Heights" },
      { name: "2963", lat: 26.35633, lng: 127.79626, area: "Terrace Heights" },
      { name: "2964", lat: 26.35669, lng: 127.7963, area: "Terrace Heights" },
      { name: "2965", lat: 26.35698, lng: 127.79648, area: "Terrace Heights" },
      { name: "2966", lat: 26.3572, lng: 127.79674, area: "Terrace Heights" },
      { name: "2967", lat: 26.35719, lng: 127.79717, area: "Terrace Heights" },
      { name: "2968", lat: 26.35755, lng: 127.79701, area: "Terrace Heights" },
      { name: "2969", lat: 26.3579, lng: 127.79728, area: "Terrace Heights" },
      { name: "2970", lat: 26.35801, lng: 127.79773, area: "Terrace Heights" },
      { name: "2971", lat: 26.35761, lng: 127.79789, area: "Terrace Heights" },
      { name: "2972", lat: 26.35721, lng: 127.79795, area: "Terrace Heights" },
      { name: "2973", lat: 26.35685, lng: 127.79793, area: "Terrace Heights" },
      { name: "2974", lat: 26.35664, lng: 127.79758, area: "Terrace Heights" },
      { name: "2975", lat: 26.35672, lng: 127.79719, area: "Terrace Heights" },
      { name: "2976", lat: 26.35636, lng: 127.7972, area: "Terrace Heights" },

    ]
    const StillwellPark = [
      { name: "2078", lat: 26.34152, lng: 127.78901, area: "Stilwell Park" },
      { name: "2077", lat: 26.34177, lng: 127.78879, area: "Stilwell Park" },
      { name: "2076", lat: 26.34203, lng: 127.78855, area: "Stilwell Park" },
      { name: "2075", lat: 26.34228, lng: 127.7883, area: "Stilwell Park" },
      { name: "2074", lat: 26.34219, lng: 127.78795, area: "Stilwell Park" },
      { name: "2073", lat: 26.34263, lng: 127.78802, area: "Stilwell Park" },
      { name: "2068", lat: 26.34162, lng: 127.78957, area: "Stilwell Park" },
      { name: "2069", lat: 26.34189, lng: 127.78933, area: "Stilwell Park" },
      { name: "2070", lat: 26.34215, lng: 127.78908, area: "Stilwell Park" },
      { name: "2071", lat: 26.34241, lng: 127.78884, area: "Stilwell Park" },
      { name: "2072", lat: 26.34272, lng: 127.78859, area: "Stilwell Park" },
      { name: "1873", lat: 26.34316, lng: 127.78823, area: "Stilwell Park" },
      { name: "1870", lat: 26.34327, lng: 127.7888, area: "Stilwell Park" },
      { name: "1863", lat: 26.3436, lng: 127.78915, area: "Stilwell Park" },
      { name: "1862", lat: 26.34331, lng: 127.78927, area: "Stilwell Park" },
      { name: "1874", lat: 26.34361, lng: 127.78781, area: "Stilwell Park" },
      { name: "1872", lat: 26.3439, lng: 127.78814, area: "Stilwell Park" },
      { name: "1875", lat: 26.34406, lng: 127.78752, area: "Stilwell Park" },
      { name: "1876", lat: 26.34434, lng: 127.78787, area: "Stilwell Park" },
      { name: "1871", lat: 26.34445, lng: 127.78827, area: "Stilwell Park" },
      { name: "1877", lat: 26.34454, lng: 127.78728, area: "Stilwell Park" },
      { name: "1878", lat: 26.34486, lng: 127.78747, area: "Stilwell Park" },
      { name: "1918", lat: 26.34436, lng: 127.7868, area: "Stilwell Park" },
      { name: "1920", lat: 26.34433, lng: 127.78638, area: "Stilwell Park" },
      { name: "1919", lat: 26.34478, lng: 127.78657, area: "Stilwell Park" },
      { name: "1864", lat: 26.34424, lng: 127.78939, area: "Stilwell Park" },
      { name: "1865", lat: 26.34463, lng: 127.78921, area: "Stilwell Park" },
      { name: "1866", lat: 26.34493, lng: 127.78908, area: "Stilwell Park" },
      { name: "1867", lat: 26.34405, lng: 127.78884, area: "Stilwell Park" },
      { name: "1868", lat: 26.34447, lng: 127.78877, area: "Stilwell Park" },
      { name: "1869", lat: 26.34487, lng: 127.7887, area: "Stilwell Park" },
      { name: "1883", lat: 26.34533, lng: 127.78884, area: "Stilwell Park" },
      { name: "1884", lat: 26.34567, lng: 127.78862, area: "Stilwell Park" },
      { name: "1885", lat: 26.34601, lng: 127.78888, area: "Stilwell Park" },
      { name: "1886", lat: 26.34634, lng: 127.78866, area: "Stilwell Park" },
      { name: "1882", lat: 26.34626, lng: 127.78788, area: "Stilwell Park" },
      { name: "1879", lat: 26.34488, lng: 127.7881, area: "Stilwell Park" },
      { name: "1880", lat: 26.34522, lng: 127.78776, area: "Stilwell Park" },
      { name: "1881", lat: 26.34556, lng: 127.78799, area: "Stilwell Park" },
      { name: "1632", lat: 26.34681, lng: 127.78875, area: "Stilwell Park" },
      { name: "1640", lat: 26.34706, lng: 127.78817, area: "Stilwell Park" },
      { name: "1641", lat: 26.34722, lng: 127.78787, area: "Stilwell Park" },
      { name: "1642", lat: 26.34761, lng: 127.78807, area: "Stilwell Park" },
      { name: "1643", lat: 26.34796, lng: 127.78842, area: "Stilwell Park" },
      { name: "1633", lat: 26.34803, lng: 127.78921, area: "Stilwell Park" },
      { name: "1644", lat: 26.34823, lng: 127.78878, area: "Stilwell Park" },
      { name: "1634", lat: 26.34843, lng: 127.7893, area: "Stilwell Park" },
      { name: "1645", lat: 26.34857, lng: 127.78897, area: "Stilwell Park" },
      { name: "1635", lat: 26.34881, lng: 127.78941, area: "Stilwell Park" },
      { name: "1646", lat: 26.34895, lng: 127.78913, area: "Stilwell Park" },
      { name: "1636", lat: 26.34924, lng: 127.78942, area: "Stilwell Park" },
      { name: "1637", lat: 26.34967, lng: 127.78949, area: "Stilwell Park" },
      { name: "1638", lat: 26.35009, lng: 127.78956, area: "Stilwell Park" },
      { name: "1639", lat: 26.35048, lng: 127.7895, area: "Stilwell Park" },
      { name: "1647", lat: 26.34754, lng: 127.78732, area: "Stilwell Park" },
      { name: "1648", lat: 26.34791, lng: 127.78742, area: "Stilwell Park" },
      { name: "1649", lat: 26.34832, lng: 127.78775, area: "Stilwell Park" },
      { name: "1650", lat: 26.34862, lng: 127.78805, area: "Stilwell Park" },
      { name: "1652", lat: 26.34924, lng: 127.78862, area: "Stilwell Park" },
      { name: "1653", lat: 26.34961, lng: 127.78874, area: "Stilwell Park" },
      { name: "1651", lat: 26.34888, lng: 127.78833, area: "Stilwell Park" },
      { name: "1654", lat: 26.35, lng: 127.78885, area: "Stilwell Park" },
      { name: "1849", lat: 26.34696, lng: 127.79059, area: "Stilwell Park" },




    ]

    // Add this before the loop
    const markerMap = {};

    Arnold_Terrace.forEach(unit => {
      const marker = L.marker([unit.lat, unit.lng], { icon: houseIcon })
        .addTo(map)
        .bindPopup(`<b>${unit.name}</b><br>Area: ${unit.area}<br><a href="https://www.google.com/maps/dir/?api=1&destination=${unit.lat},${unit.lng}" target="_blank">Get Directions</a>`);
      markerMap[unit.name] = marker;
    });

    Marek_Park.forEach(unit => {
      const marker = L.marker([unit.lat, unit.lng], { icon: Marek_Park_Icon })
        .addTo(map)
        .bindPopup(`<b>${unit.name}</b><br>Area: ${unit.area}<br><a href="https://www.google.com/maps/dir/?api=1&destination=${unit.lat},${unit.lng}" target="_blank">Get Directions</a>`);
      markerMap[unit.name] = marker;
    });

    Clark_Vista.forEach(unit => {
      const marker = L.marker([unit.lat, unit.lng], { icon: Clark_Vista_Icon })
        .addTo(map)
        .bindPopup(`<b>${unit.name}</b><br>Area: ${unit.area}<br><a href="https://www.google.com/maps/dir/?api=1&destination=${unit.lat},${unit.lng}" target="_blank">Get Directions</a>`);
      markerMap[unit.name] = marker;
    });
    Jennings.forEach(unit => {
      const marker = L.marker([unit.lat, unit.lng], { icon: Jennings_Icon })
        .addTo(map)
        .bindPopup(`<b>${unit.name}</b><br>Area: ${unit.area}<br><a href="https://www.google.com/maps/dir/?api=1&destination=${unit.lat},${unit.lng}" target="_blank">Get Directions</a>`);
      markerMap[unit.name] = marker;
    });

    Washington_Heights.forEach(unit => {
      const marker = L.marker([unit.lat, unit.lng], { icon: Washington_Icon })
        .addTo(map)
        .bindPopup(`<b>${unit.name}</b><br>Area: ${unit.area}<br><a href="https://www.google.com/maps/dir/?api=1&destination=${unit.lat},${unit.lng}" target="_blank">Get Directions</a>`);
      markerMap[unit.name] = marker;
    });

    Beeson.forEach(unit => {
      const marker = L.marker([unit.lat, unit.lng], { icon: Beeson_Icon })
        .addTo(map)
        .bindPopup(`<b>${unit.name}</b><br>Area: ${unit.area}<br><a href="https://www.google.com/maps/dir/?api=1&destination=${unit.lat},${unit.lng}" target="_blank">Get Directions</a>`);
      markerMap[unit.name] = marker;
    });

    TerraceHeights.forEach(unit => {
      const marker = L.marker([unit.lat, unit.lng], { icon: Terrace_Heights_Icon })
        .addTo(map)
        .bindPopup(`<b>${unit.name}</b><br>Area: ${unit.area}<br><a href="https://www.google.com/maps/dir/?api=1&destination=${unit.lat},${unit.lng}" target="_blank">Get Directions</a>`);
      markerMap[unit.name] = marker;
    });

    StillwellPark.forEach(unit => {
      const marker = L.marker([unit.lat, unit.lng], { icon: Stillwell_Park_Icon })
        .addTo(map)
        .bindPopup(`<b>${unit.name}</b><br>Area: ${unit.area}<br><a href="https://www.google.com/maps/dir/?api=1&destination=${unit.lat},${unit.lng}" target="_blank">Get Directions</a>`);
      markerMap[unit.name] = marker;
    });

    //script to search for unit number and zoom in 

    document.getElementById('searchBox').addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        const query = this.value.trim();
        const marker = markerMap[query];
        if (marker) {
          map.setView(marker.getLatLng(), 18);
          marker.openPopup();
        } else {
          alert("Unit not found");
        }
      }
    });
  </script>
</body>

</html>

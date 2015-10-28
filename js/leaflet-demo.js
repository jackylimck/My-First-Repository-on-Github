var map = L.map( 'map', {
    center: [17.5, 110.0],
    zoom: 3
});

L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="" height="16">',
    subdomains: ['otile1','otile2','otile3','otile4','otile5']
}).addTo( map );

for ( var i=0; i < markers.length; ++i ) 
{
   L.marker([markers[i].lat, markers[i].lng]).bindPopup(markers[i].name).addTo(map);
}
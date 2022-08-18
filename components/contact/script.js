function initMap(){
    let options={
        zoom:10,
        center:{lat:41.15323,lng:45.48919}
    }
    let map =new google.maps.Map(document.getElementById("map"),options)
    let marker = new google.maps.Marker({
        position:{lat:41.1562932,lng:45.48996488},
        map:map
    })
    let marker2=new google.maps.Marker({
        position:{lat:41.1154872,lng:45.4479403},
        map:map
    })
    let info= new google.maps.InfoWindow({
        content:'<h1>Nasibov</h1> '
    })
    let info2= new google.maps.InfoWindow({
        content:'<h1>Dentist Agstafa</h1> '
    })
    marker.addListener("click",function(){
        info.open(map,marker)
    })
    marker2.addListener("click",function(){
        info2.open(map,marker2)
    })
}
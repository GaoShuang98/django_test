var son_page_name = 'none'

function fly2school(viewer) {
    var element = document.getElementById("img_positioning");
    element.style.display = 'none'
    // viewer.camera.flyTo({
    //     destination: Cesium.Cartesian3.fromDegrees(113.570, 34.8125, 3500.0),
    // });
    viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(9.18141, 45.47121, 10000.0),
    });
}


function import_img() {
    alert("导入图像");
}

function img_positioning() {
    var img_positioning = document.getElementById("img_positioning");
    if (son_page_name === "img_positioning") {
        img_positioning.style.display = 'none';
        son_page_name = 'none';
    } else if (son_page_name === "none") {
        img_positioning.style.display = 'block';
        son_page_name = 'img_positioning';
    } else {
        var element = document.getElementById(son_page_name);
        element.style.display = 'none';
        img_positioning.style.display = 'block';
        son_page_name = 'img_positioning';
    }
}

function target_positioning() {
    var target_positioning = document.getElementById("target_positioning");
    if (son_page_name === "target_positioning") {
        target_positioning.style.display = 'none';
        son_page_name = 'none';
    } else if (son_page_name === "none") {
        target_positioning.style.display = 'block';
        son_page_name = 'target_positioning';
    } else {
        var element = document.getElementById(son_page_name);
        element.style.display = 'none';
        target_positioning.style.display = 'block';
        son_page_name = 'target_positioning';
    }

}


function monitoring() {

    var monitoring = document.getElementById("monitoring");
    if (son_page_name === "monitoring") {
        monitoring.style.display = 'none';
        son_page_name = 'none';
    } else if (son_page_name === "none") {
        monitoring.style.display = 'block';
        son_page_name = 'monitoring';
    } else {
        var element = document.getElementById(son_page_name);
        element.style.display = 'none';
        monitoring.style.display = 'block';
        son_page_name = 'monitoring';
    }

}


function situation_awareness() {
    var situation_awareness = document.getElementById("situation_awareness");
    if (son_page_name === "situation_awareness") {
        situation_awareness.style.display = 'none';
        son_page_name = 'none';
    } else if (son_page_name === "none") {
        situation_awareness.style.display = 'block';
        son_page_name = 'situation_awareness';
    } else {
        var element = document.getElementById(son_page_name);
        element.style.display = 'none';
        situation_awareness.style.display = 'block';
        son_page_name = 'situation_awareness';
    }
}

function show_points(cesium) {
    var latitude = [45.47121, 45.47118, 45.47104, 45.47100, 45.47093, 45.47086, 45.47075, 45.47047, 45.47031, 45.47013, 45.47013, 45.47013, 45.47015, 45.47016, 45.47017, 45.47018, 45.47019, 45.47019, 45.46999, 45.46957, 45.46942, 45.46929, 45.46910, 45.46895, 45.46888, 45.46884];
    var longitude = [9.18141, 9.18136, 9.18151, 9.18155, 9.18160, 9.18164, 9.18169, 9.18177, 9.18182, 9.18185, 9.18213, 9.18261, 9.18304, 9.18323, 9.18335, 9.18335, 9.18337, 0.18325, 9.18307, 9.18298, 9.18292, 9.18289];

    for (i = 0; i < latitude.length; i++) {
        for (j = 0; j < longitude.length; j++) {
            new cesium.PointGraphics({color:Cesium.Color.fromCssColorString("#FFFF00"), pixelSize:10})
        }
    }


}

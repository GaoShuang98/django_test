var son_page_name = 'none'

function fly2school(viewer) {
    var element = document.getElementById("img_positioning");
    element.style.display = 'none'
    viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(113.570, 34.8125, 3500.0),
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

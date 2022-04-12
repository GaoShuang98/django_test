
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
    var element = document.getElementById("img_positioning");
    alert("图像定位");
    element.style.display = 'block'

}

function target_positioning() {
    var element = document.getElementById("img_positioning");
    alert("目标定位");
    element.style.display = 'none'

}

function monitoring() {
    var element = document.getElementById("img_positioning");
    alert("舆情监测");
    element.style.display = 'none'

}

function situational_awareness() {
    var element = document.getElementById("img_positioning");
    alert("势态感知");
    element.style.display = 'none'

}

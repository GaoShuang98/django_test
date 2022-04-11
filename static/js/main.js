function fly2school(viewer) {

    viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(113.570, 34.8125, 3500.0),
    });
}

function main_window(){

}

function import_img() {
    alert("导入图像");

}

function img_positioning() {
    window.location.replace("http://127.0.0.1:8000/import_img");
    alert("图像定位");
}

function target_positioning() {
    window.location.replace("http://127.0.0.1:8000/target_positioning");
    alert("目标定位");
}

function monitoring() {
    alert("舆情监测");
}

function situational_awareness() {
    alert("势态感知");
}

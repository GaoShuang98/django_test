let son_page_name = 'none'

function fly2school(viewer) {
    let element = document.getElementById("img_positioning");
    element.style.display = 'none'
    viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(113.570, 34.8125, 3500.0),
        // destination: Cesium.Cartesian3.fromDegrees(114.489878, 35.029329, 3500.0),
    });
    // viewer.camera.flyTo({
    //     destination: Cesium.Cartesian3.fromDegrees(9.18141, 45.47121, 10000.0),  // 意大利米兰（街景图象其中一张图像）
    // });
}

function import_img(){
    return 0
}


function img_positioning() {
    let img_positioning = document.getElementById("img_positioning");
    if (son_page_name === "img_positioning") {
        img_positioning.style.display = 'none';
        son_page_name = 'none';
    } else if (son_page_name === "none") {
        img_positioning.style.display = 'block';
        son_page_name = 'img_positioning';
    } else {
        let element = document.getElementById(son_page_name);
        element.style.display = 'none';
        img_positioning.style.display = 'block';
        son_page_name = 'img_positioning';
    }
}

function target_positioning() {
    let target_positioning = document.getElementById("target_positioning");
    if (son_page_name === "target_positioning") {
        target_positioning.style.display = 'none';
        son_page_name = 'none';
    } else if (son_page_name === "none") {
        target_positioning.style.display = 'block';
        son_page_name = 'target_positioning';
    } else {
        let element = document.getElementById(son_page_name);
        element.style.display = 'none';
        target_positioning.style.display = 'block';
        son_page_name = 'target_positioning';
    }
}

function monitoring() {
    let monitoring = document.getElementById("monitoring");
    if (son_page_name === "monitoring") {
        monitoring.style.display = 'none';
        son_page_name = 'none';
    } else if (son_page_name === "none") {
        monitoring.style.display = 'block';
        son_page_name = 'monitoring';
    } else {
        let element = document.getElementById(son_page_name);
        element.style.display = 'none';
        monitoring.style.display = 'block';
        son_page_name = 'monitoring';
    }
}

function situation_awareness() {
    let situation_awareness = document.getElementById("situation_awareness");
    if (son_page_name === "situation_awareness") {
        situation_awareness.style.display = 'none';
        son_page_name = 'none';
    } else if (son_page_name === "none") {
        situation_awareness.style.display = 'block';
        son_page_name = 'situation_awareness';
    } else {
        let element = document.getElementById(son_page_name);
        element.style.display = 'none';
        situation_awareness.style.display = 'block';
        son_page_name = 'situation_awareness';
    }
}

function cesium_container_clicked() {
    let a = document.getElementById('dropdown-menu-1');
    a.style.display = 'none';
    a = document.getElementById('dropdown-menu-2');
    a.style.display = 'none';
    a = document.getElementById('dropdown-menu-3');
    a.style.display = 'none';
    a = document.getElementById('dropdown-menu-4');
    a.style.display = 'none';
    if (son_page_name === "none") {
        return 0;
    } else {
        let e = document.getElementById(son_page_name);
        e.style.display = 'none';
        son_page_name = 'none';
    }
}

function son_page_clicked() {
    let a = document.getElementById('dropdown-menu-1');
    a.style.display = 'none';
    a = document.getElementById('dropdown-menu-2');
    a.style.display = 'none';
    a = document.getElementById('dropdown-menu-3');
    a.style.display = 'none';
    a = document.getElementById('dropdown-menu-4');
    a.style.display = 'none';
}

function menu_1_clicked() {
    let menus = document.getElementsByClassName('dropdown-menu');
    for (i = 0; i < 4; i++) {
        menus.item(i).style.display = 'none'
    }
    let e = document.getElementById('dropdown-menu-1');
    if (e.style.display === 'block') {
        e.style.display = 'none';
    } else {
        e.style.display = 'block';
    }
}

function menu_2_clicked() {
    let menus = document.getElementsByClassName('dropdown-menu');
    for (i = 0; i < 4; i++) {
        menus.item(i).style.display = 'none'
    }
    e = document.getElementById('dropdown-menu-2');
    if (e.style.display === 'block') {
        e.style.display = 'none';
    } else {
        e.style.display = 'block';
    }
}

function menu_3_clicked() {
    let menus = document.getElementsByClassName('dropdown-menu');
      for (i = 0; i < 4; i++) {
        menus.item(i).style.display = 'none'
    }
    e = document.getElementById('dropdown-menu-3');
    if (e.style.display === 'block') {
        e.style.display = 'none';
    } else {
        e.style.display = 'block';
    }
}

function menu_4_clicked() {
    let menus = document.getElementsByClassName('dropdown-menu');
    for (i = 0; i < 4; i++) {
        menus.item(i).style.display = 'none'
    }
    e = document.getElementById('dropdown-menu-4');
    if (e.style.display === 'block') {
        e.style.display = 'none';
    } else {
        e.style.display = 'block';
    }
}


function file_import() {
    document.getElementById("files").click()
    let selected_file = document.getElementById("files").files[0];  // 弹窗获取文件
    let file_name = selected_file.name;  // 读取文件名
    let file_size = selected_file.size;  // 获取文件大小
    let file_dir = selected_file.directory;
    alert(file_name + " // " + file_size + " // " + file_dir);
}


// ----------------------------------------------------------------------------------------


// Path variables //
var base_url = "http://127.0.0.1:"
var g5001  = {base: "8000", cam: "8001", gripper: "8002"};
var g5002  = {base: "8010", cam: "8011", gripper: "8012"};
var brov   = {base: "8020", cam: "8021"};  // No gripper
var m_comm = {stop: "/stop",
              fw  : "/forward",
              bw  : "/backward",
              l   : "/left",
              r   : "/right",
              u   : "/up",
              d   : "/down",
              tl  : "/turnleft",
              tr  : "/turnright",
              setV: "/setVelocity?",
              getP: "/getPosition"
            };
var g_comm = {stop : "/STOP",
              open : "/OPEN",
              close: "/CLOSE"
            };

target = "g5001";

var velPctg = 100.0;
var velFraction = 1.0;

document.getElementById("dir").innerHTML = base_url + eval(target).base;

function get_pctg() {
  velPctg = document.getElementById("vel_pctg").value;
  velFraction = velPctg / 100.0;
  document.getElementById("pctg_label").innerHTML = velPctg + " %";
  // console.log('Vel percentage: ' + velFraction);
}

// Button functions //
function up(){
    var dir = base_url + eval(target).base + m_comm.u;
    fetch(dir, {mode:'no-cors'});
    showLastComm(dir);
}

function down(){
    var dir = base_url + eval(target).base + m_comm.d;
    fetch(dir, {mode:'no-cors'});
    showLastComm(dir);
}

function left(){
    var dir = base_url + eval(target).base + m_comm.l;
    fetch(dir, {mode:'no-cors'});
    showLastComm(dir);
}

function right(){
    var dir = base_url + eval(target).base + m_comm.r;
    fetch(dir, {mode:'no-cors'});
    showLastComm(dir);
}

function forward(){
    var dir = base_url + eval(target).base + m_comm.fw;
    fetch(dir, {mode:'no-cors'});
    showLastComm(dir);
}

function backward(){
    var dir = base_url + eval(target).base + m_comm.bw;
    fetch(dir, {mode:'no-cors'});
    showLastComm(dir);
}

function turnleft(){
    var dir = base_url + eval(target).base + m_comm.tl;
    fetch(dir, {mode:'no-cors'});
    showLastComm(dir);
}

function turnright(){
    var dir = base_url + eval(target).base + m_comm.tr;
    fetch(dir, {mode:'no-cors'});
    showLastComm(dir);
}

function stop(){
    var dir = base_url + eval(target).base + m_comm.stop;
    fetch(dir, {mode:'no-cors'});
    showLastComm(dir);
}

function openG(){
    var dir = base_url + eval(target).gripper + g_comm.open;
    fetch(dir, {mode:'no-cors'});
    showLastComm(dir);
}

function stopG() {
    var dir = base_url + eval(target).gripper + g_comm.stop;
    fetch(dir, {mode:'no-cors'});
    showLastComm(dir);
}

function closeG() {
    var dir = base_url + eval(target).gripper + g_comm.close;
    fetch(dir, {mode:'no-cors'});
    showLastComm(dir);
}

function setVelocity(queue) {
    var dir = base_url + eval(target).base + m_comm.setV + queue;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.addEventListener("load", function(){});
    xmlHttp.open("GET", dir);
    xmlHttp.send(null);
    showLastComm(dir);
}

function getPosition() {
    var dir = base_url + eval(target).base + m_comm.getP;
    showLastComm(dir);
    document.getElementById("getPosForm").action = dir;
    window.open(dir, 'popup', 'left=500,top=500,width=550,height=20,scrollbars=no,resizable=no');
}

// Image showing
function refreshIFrame() {
    var ifr = document.getElementById("img");
    dir = base_url + eval(target).cam;
    ifr.src = dir;
    showLastComm(dir);
}

function collect_params() {
    var queue = $('form').serialize();
    queue = queue.replace(/\./g, ",");
    setVelocity(queue);
}

function setTarget(tgt) {
    target = tgt;
    var all = document.getElementsByClassName("col-3");
    for (var i = 0; i < all.length; i++) {
        all[i].style.color = "black";
        all[i].style.fontWeight = "normal";
    }

    var act;
    if (tgt == "g5001")
        act = 0;
    else if (tgt == "g5002")
        act = 1;
    else 
        act = 2;

    document.getElementsByClassName("col-3")[act].style.color = "rgb(49, 100, 125)";
    document.getElementsByClassName("col-3")[act].style.fontWeight = "bold";
    
    dir = base_url + eval(target).base;
    showLastComm(dir);
}

function showLastComm(dir) {
    document.getElementById("dir").innerHTML = dir;
}


// -  Some help  - // 
// Get the modal
var info = document.getElementById("info");

// Get the button that opens the modal
var btn = document.getElementById("info_sel");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the info image, open the modal
btn.onclick = function() {
    info.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    info.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == info) {
        info.style.display = "none";
    }
}



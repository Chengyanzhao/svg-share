
// 各省市在地图上的坐标
var pointList = [
  { nameCH: '东煌大厦', time: '10:00', location: { x: "630", y: "390" } },
  { nameCH: '红浪漫洗浴', time: '21:00', location: { x: "510", y: "270" } },
  { nameCH: '张姐臭豆腐', time: '22:00', location: { x: "790", y: "206" } },
  { nameCH: '蚂蚁大力丸旗舰店', time: '22:20', location: { x: "600", y: "500" } },
  { nameCH: '白马会所', time: '23:00', location: { x: "430", y: "524" } },
  { nameCH: '梁师傅肛肠医院', time: '+01:30', location: { x: "390", y: "427" } },
  { nameCH: '家', time: '+07:30', location: { x: "670", y: "272" } },
];

function showPathFlowInMap(from, to) {
  var html = document.createElementNS('http://www.w3.org/2000/svg', "g");
  html.innerHTML += `
  <text x="${to.location.x - 10}" dy="${to.location.y - 10}" style="fill: #fff">${to.time}${to.nameCH}</text>
  <circle cx="${to.location.x}" cy="${to.location.y}" r="6"  stroke="#476F8E"  stroke-width="2" fill="transparent" />
  <circle cx="${to.location.x}" cy="${to.location.y}" r="2"  fill="#3C9CEF" />  
  
  <text x="${from.location.x - 10}" dy="${from.location.y - 10}" style="fill: #fff">${from.time}${from.nameCH}</text>
  <circle cx="${from.location.x}" cy="${from.location.y}" r="7" stroke="#99834C"  stroke-width="2" fill="transparent" />        
  <circle cx="${from.location.x}" cy="${from.location.y}" r="4" stroke="#58513C"  stroke-width="1.5" fill="transparent" />
  <circle cx="${from.location.x}" cy="${from.location.y}" r="2" fill="#A97631" />
`;
  document.getElementById("s1").appendChild(html);
  createPath(from, to);

}

function createPath(from, to) {
  var r = Math.sqrt((Math.pow(Math.abs(from.location.x - to.location.x), 2) + Math.pow(Math.abs(from.location.y - to.location.y), 2))) * 0.8;  //算出两点间的距离，然后乘以0.8
  var linearColor = from.location.x < to.location.x ? "grad1" : "grad3";
  var radianOrientation = from.location.x < to.location.x ? "1" : "1";//调整圆弧方向，这里用不上。所以都赋值为1.
  let html = document.createElementNS('http://www.w3.org/2000/svg', "g");
  html.innerHTML += `
<path d="M${from.location.x} ${from.location.y} A${r},${r} 0 0,${radianOrientation} ${to.location.x},${to.location.y}" stroke-width="4" stroke="url(#${linearColor})" fill="transparent" id="route${from.location.x}${from.location.y}_${to.location.x}${to.location.y}"/>
<image  x="-17" y="-10.7" width="25px" xlink:href="img/arrows.png"> 
   <animateMotion           
          dur="3s"
          begin="0s"
          fill="freeze"
          repeatCount="indefinite"
           rotate="auto"> 
           <mpath xlink:href="#route${from.location.x}${from.location.y}_${to.location.x}${to.location.y}" />         
   </animateMotion>
  </image>
`;

  document.getElementById("s1").appendChild(html);
}
showPathFlowInMap(pointList[0], pointList[1]);

let i = 1;
const doNextPath = () => {
  if (i < pointList.length - 1) {
    showPathFlowInMap(pointList[i], pointList[i + 1]);
    i += 1;
  }

}





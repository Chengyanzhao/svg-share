const svg = document.getElementById('sign-svg');

const pathDoms = svg.getElementsByTagName('path');

const disMs = 500; // ms
let ptr = 0;

const drawNext = () => {
  setTimeout(() => {
    if (ptr === pathDoms.length) {
      return;
    }
    const pathDom = pathDoms[ptr];
    pathDom.style.display = 'inline'
    ptr += 1;
    drawNext();
  }, disMs);
}

drawNext();
function show(message, delay=0, fixed=false) { // for fixed tooltip, fixed=this
    if (isNaN(delay) || delay < 0) throw TypeError('Invalid delay argument.');
    transition = delay;
    fixedElement = fixed;
    visible = true;
    toolTip.innerHTML = message;
    toolTip.style.transition = 'opacity ' + delay / 1000 + 's';
    toolTip.style.opacity = 1;
}

function move(e) {
    toolTip.width = toolTip.getBoundingClientRect().width;
    toolTip.height = toolTip.getBoundingClientRect().height;
    if (toString.call(fixedElement) === "[object HTMLAnchorElement]") { // fixed tooltip
        let top = fixedElement.offsetTop;
        let height = fixedElement.offsetHeight;
        let center = fixedElement.offsetLeft + fixedElement.offsetWidth / 2;

        if (top > toolTip.height) { // top
            toolTip.style.top = top - toolTip.height + 'px';
        } else if (window.innerHeight - top + height > toolTip.height) { // bottom
            toolTip.style.top = top + height + 'px';
        } else {
            toolTip.style.top = top + 'px';
        }

        if (center - toolTip.width / 2 > 0 && center + toolTip.width / 2 < window.innerWidth) { // center
            toolTip.style.left = center - toolTip.width / 2 + 'px';
        } else if (center - toolTip.width / 2 > 0) { // right
            toolTip.style.left = window.innerWidth - toolTip.width - 1 + 'px';
        } else { // left
            toolTip.style.left = '1px';
        }
    } else { // moving tooltip on mousemove
        toolTip.style.left = e.pageX + 5 - (toolTip.width + 6) * (e.pageX + toolTip.width + 5 >= window.innerWidth) + 'px';
        toolTip.style.top = Math.min(e.pageY + 10 - (toolTip.height + 11) * (e.pageY + toolTip.height + 10 >= window.innerHeight), window.innerHeight - toolTip.height) + 'px';
    }
}

function hide() {
    toolTip.style.opacity = null
    setTimeout(() => {
        visible = false;
    }, transition);
}

let visible, fixedElement, transition;
let toolTip = Object.assign(document.createElement('div'), {id : 'tooltip'});
document.querySelector('body').appendChild(toolTip);
window.addEventListener('mousemove', e => move(e));




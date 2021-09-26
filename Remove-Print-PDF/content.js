var g_id = '_e_p_w_p_tip';
var g_timer_id;
var g_last_el;
var g_last_el_border;
function clickTip(e) {
  e.stopPropagation();
  e.preventDefault();

  if(g_last_el) {
    g_last_el.parentNode.removeChild(g_last_el);
    g_last_el = null;
  }
  var el = document.getElementById(g_id);
  if (el) {
    el.parentNode.removeChild(el);
  }
}
function showTip(rect, ind) {
  var el = document.getElementById(g_id);
  if (!el) {
    el = document.createElement('div');
    el.id = g_id;
    el.innerHTML = 'Remove';
    el.style.cssText = 'border:solid 1px red;background:#ff8f8f;z-index:99998;position:absolute;padding:1px 3px;border-radius:3px;font-size:11px;cursor:pointer;';
    document.body.appendChild(el);

    el.addEventListener('click', clickTip, false);
  }
  el.style.top = rect.y + 'px';
  el.style.left = rect.x + 'px';
}

function mouseOver(e) {
  if (!e || !(e.target || e.srcElement)) return;
  g_timer_id = clearTimeout(g_timer_id);

  var el = e.target || e.srcElement;
  if (el.id == g_id || el.tagName.toUpperCase() == 'BODY' || g_last_el == el) {
    return;
  }
  if (g_last_el) {
    g_last_el.style.border = g_last_el_border;
  }

  g_last_el = el;
  g_last_el_border = g_last_el.style.border;
  g_last_el.style.border = 'dotted 2px red';
  var rect = el.getBoundingClientRect();

  console.log(rect);
  showTip(rect, 1);
}
function clearTip() {
  var el = document.getElementById(g_id);
  if (!el) return;
  document.body.removeChild(el);
  if (g_last_el) {
    g_last_el.style.border = g_last_el_border;
  }
}
function mouseOut(e) {
  g_timer_id = setTimeout(clearTip, 500);
}

function callDesignHTML() {
  try{
    document.designMode = 'On';

    window.addEventListener('mouseover', mouseOver, false);
    window.addEventListener('mouseout', mouseOut, false);
  }
  catch(err){
    alert('Error while run:' + err);
  }
}

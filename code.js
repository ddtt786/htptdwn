document.querySelectorAll('blockquote').forEach(el => {
    var ines = el.innerHTML;
    el.innerHTML = "<img src='따옴표.png' style=\"width:30px;margin-right:10px\">"+ines+"<img src='따옴표2.png' style=\"width:30px;margin-left:10px\">";
})

document.querySelectorAll('.zacpum').forEach(el => {
    var zac = el.innerHTML;
    el.innerHTML = "<iframe src='https://playentry.org/api/iframe/project/"+zac+"' style='width: 600px\;height: 360px\;border-radius: 8px\;border: 0\;margin:10px'>";
})
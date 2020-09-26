document.querySelectorAll('blockquote').forEach(el => {
    var ines = el.innerHTML;
    el.innerHTML = "<img src='따옴표.png' style=\"width:30px;margin-right:10px\">"+ines+"<img src='따옴표2.png' style=\"width:30px;margin-left:10px\">";
})

document.querySelectorAll('zacpum').forEach(el => {
    const 스타일 = el.getAttribute( 'style' );
    var zac = el.innerHTML;
    el.innerHTML = "<iframe style='width: 600px\;height: 360px\;border-radius: 8px\;border: 0\;margin:10px;"+스타일+"' src='https://playentry.org/api/iframe/project/"+zac+"'>";
})

document.querySelectorAll('ttl').forEach(el => {
    const 스타일 = el.getAttribute( 'style' );
    var zac = el.innerHTML;
    el.innerHTML = "<div style='"+스타일+"' class='ttl'>"+zac+"</div>";
})

document.querySelectorAll('stmp').forEach(el => {
    const 스타일 = el.getAttribute( 'style' );
    var zac = el.innerHTML;
    el.innerHTML = "<div style='"+스타일+"' class='stmp'>"+zac+"</div>";
})

document.querySelectorAll('end').forEach(el => {
    const 스타일 = el.getAttribute( 'style' );
    var zac = el.innerHTML;
    el.innerHTML = "<div style='"+스타일+"' class='end'>"+zac+"</div>";
})

document.querySelectorAll('zac').forEach(el => {
    const 스타일 = el.getAttribute( 'style' );
    const 제목 = el.getAttribute( 't' );
    const 내용 = el.getAttribute( 'p' );
    const 이미지 = el.getAttribute( 'img' );
    var sans = el.innerHTML;
    el.innerHTML = "<div style='"+스타일+"'><div style='display: block;background-image:url("+이미지+")'; class='zacu'></div><div OnClick=window.open('"+el.innerHTML+"') style='display: block;' class='zacd'><h3 style='margin: 0px;padding-top: 12px;text-align: center;'>"+제목+"</h3><p style='margin: 0;text-align: center;'>"+내용+"</p></a></div></div>";
})

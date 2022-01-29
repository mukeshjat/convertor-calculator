$(document).ready(function(){


    $('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');
    
    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');
    
    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
    
    });
    
    });
    
    var cel = document.getElementById("cel");
    var fah = document.getElementById("fah");
    var kal = document.getElementById("kal");
    
    cel.addEventListener('input', function(){
        let c = this.value;
        let f =((c * 9/5) + 32).toFixed(2);
        let k = ( 273.15 + c);
        
        fah.value = f;
        kal.value = k;
    });
    
    fah.addEventListener('input', function(){
        let f = this.value;
        let c = (f - 32) * 5/9;
        let k = f + 273;
    
        cel.value = c;
        kal.value = k;
    
    });
    kal.addEventListener('input', function(){
        let k = this.value;
        let f = k - 232;
        let c = k - 273;
       
        cel.value = c;
        fah.value = f;
    });
    
    var feet = document.getElementById("feet");
    var gaj = document.getElementById("gaj");
    var beega = document.getElementById("beega");
    var hectare = document.getElementById("hectare");
    var length = document.getElementById("length")
    var width = document.getElementById("width")
    var result = document.getElementById("result")
    
    length.addEventListener('input', function(){
        let lt = length.value;
        let wt = width.value;
        let mainresult = lt * wt;
        console.log(mainresult);
        document.getElementById("result").innerText = mainresult;
        length.value = lt
        width.value = wt
    });
    width.addEventListener('input', function(){
        let lt = length.value;
        let wt = width.value;
        let mainresult = lt * wt;
        console.log(mainresult);
        document.getElementById("result").innerText = mainresult;
        let ft = mainresult;
        let g = 3*ft;
        let b = g/(2990);
        let h = b/3.96;
        
    
        feet.value = ft;
        length.value = lt
        width.value = wt
        gaj.value = g;
        beega.value = b;
        hectare.value = h;
    });
    feet.addEventListener('input', function(){
        let ft = this.value;
        let g = 3*ft;
        let b = g/(2990);
        let h = b/3.96;
        document.getElementById("result").innerText = ft;
        length.value = ft
        width.value = "1";
        gaj.value = g;
        beega.value = b;
        hectare.value = h;
    });
    
    gaj.addEventListener('input', function(){
        let g = this.value;
        let ft = 1/3 * g;
        let b = (g/2990);
        let h = b/3.96;
        document.getElementById("result").innerText = ft;
        length.value = ft
        width.value = "1";
    
        feet.value = ft;
        beega.value = b;
        hectare.value = h;
    
    });
    beega.addEventListener('input', function(){
        let b = this.value;
        let g = (1*2990)*b;
        let h = 3.96 / b;
        let ft = 1/3 * g;
        document.getElementById("result").innerText = ft;
        length.value = ft
       width.value = "1";
        feet.value = ft;
        gaj.value = g;
        hectare.value = h;
    });
    hectare.addEventListener('input', function(){
        let h = this.value;
        let b = 3.96 * h;
        let g = 2990 * b;
        let ft = 1/3 * g;
        document.getElementById("result").innerText = ft;
        length.value = ft
        width.value = "1";
       
        feet.value = ft;
        gaj.value = g;
        beega.value = b;
    });
    var feett = document.getElementById("feett");
    var inch = document.getElementById("inch");
    var milimtr = document.getElementById("milimtr");
    var centimtr = document.getElementById("centimtr");
    var mtr = document.getElementById("mtr");
    var kilomtr = document.getElementById("kilomtr");
    
    
    feett.addEventListener('input', function(){
        let ftt = this.value;
        let i = 12 * ftt;
        let mm = 25.4 * i;
        let cm =  mm/10;
        let m = cm/100;
        let km = m/1000;
        
        inch.value = i;
        milimtr.value = mm;
        centimtr.value = cm;
        mtr.value = m;
        kilomtr.value = km;
    });
    
    inch.addEventListener('input', function(){
        let i = this.value;
        let ftt = 1/12 * i;
        let mm = 25.4 * i;
        let cm =  mm/10;
        let m = cm/100;
        let km = m/1000;
    
        
        milimtr.value = mm;
        centimtr.value = cm;
        mtr.value = m;
        kilomtr.value = km;
        feett.value = ftt;
    
    });
    milimtr.addEventListener('input', function(){
        let mm = this.value;
        let i = (25.4) * mm;
        let ftt = 1/12 * i; 
        let cm =  mm/10;
        let m = cm/100;
        let km = m/1000;
        
       
        inch.value = i;
        centimtr.value = cm;
        mtr.value = m;
        kilomtr.value = km;
        feett.value = ftt;
    });
    centimtr.addEventListener('input', function(){
        let cm = this.value;
        let mm = 10 * cm;
        let i = mm/25.4;
        let ftt = 1/12 * i;
        let m = cm/100;
        let km = m/1000;
       
       
        inch.value = i;
        milimtr.value = mm;
        mtr.value = m;
        kilomtr.value = km;
        feett.value = ftt;
    });
    mtr.addEventListener('input', function(){
        let m = this.value;
        let cm = 100 * m;
        let mm = 10 * cm;
        let i = 25.4 * mm;
        let ftt = 1/12 * i;
        let km = m/1000;
        
        inch.value = i;
        milimtr.value = mm;
        centimtr.value = cm;
        kilomtr.value = km;
        feett.value = ftt;
    });
    kilomtr.addEventListener('input', function(){
        let km = this.value;
        let m = 1000 * km;
        let cm = 100 *m;
        let mm = 10 * cm;
        let i = 25.4 * mm;
        let ftt = 1/12 * i;
      
       
        inch.value = i;
        milimtr.value = mm;
        centimtr.value = cm;
        mtr.value = m;
        feett.value = ftt;
    });
function fun1 (){
            let rtl=document.getElementById("rtl").value;
            let rtr=document.getElementById("rtr").value;
            let rbr=document.getElementById("rbr").value;
            let rbl=document.getElementById("rbl").value;
            
            let ttl=document.getElementById("ttl");
            let ttr=document.getElementById("ttr");
            let tbr=document.getElementById("tbr");
            let tbl=document.getElementById("tbl");
          
            let block = document.getElementById("block");
            
            ttl.value=rtl;
            ttr.value=rtr;
            tbr.value=rbr;
            tbl.value=rbl;
            
            block.style.borderRadius=rtl+"px "+rtr +"px "+rbr +"px "+rbl+"px ";
            }
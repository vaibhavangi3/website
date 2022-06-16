function fun(){
    var input1= document.getElementById("segment").value;
    var input2= document.getElementById("need").value;
    var input3= document.getElementById("apetite").value;
   if(input1==="youngistaan"&&input2==="wealthcreation"&&input3==="conservative")
   {
    document.getElementById("output").innerHTML = "Saver Scheme";
    document.getElementById("output1").innerHTML = `<pre>.Earn guaranteed tax free benefits in the form of a guaranteed lump sum to meet financial goal 

    . Option of taking loan against policy to help you in case of financial emergencies

    . Tax benefits on premiums paid and benefits received as per the prevailing tax law
    
    . Life cover to protect family financially in case of uncertainty<pre>`;
   }
   else if(input1==="youngistaan"&&input2==="wealthcreation"&&input3==="moderate")
   {
    document.getElementById("output").innerHTML = "Future Perfect";
    document.getElementById("output1").innerHTML = `<pre>. Only tax-free equity oriented product in market with equity exposure up to 40%
    . Good option for portfolio diversification 
    . Equity with capital guarantee to take care of market fluctuations
    . Life cover to protect family’s financial future 
    . Opportunity of high returns in terms of excellent bonus record along with guarantee<pre>`;

    document.getElementById("output").innerHTML = "Saving Surakhsa";
    document.getElementById("output1").innerHTML = `<pre>. . Scope of earning more guaranteed returns by opting for higher PT/PPT due to young age
    . Good option for portfolio diversification 
    . Life cover to protect family’s financial future <pre>`;
   }
   else if(input1==="youngistaan"&&input2==="wealthcreation"&&input3==="aggressive")
   {
    document.getElementById("output").innerHTML = "Signature";
    document.getElementById("output1").innerHTML = `<pre>. Diversify your portfolio with choice of investment across equity, debt & balanced funds
    . Protect your funds from market downturn with unlimited switching free of cost
    . Return of premium allocation charges & wealth boosters, resulting in more wealth creation
    . Flexibility to partially withdraw funds to finance any need, after lock-in period
    .  Life cover to protect family’s financial future 
    . Tax benefits on premiums paid as per the prevailing tax law
     <pre>`;
   }
   else if(input1==="youngistaan"&&input2==="wealth_second"&&input3==="aggressive")
   {
    document.getElementById("output").innerHTML = "GIFT LT";
    document.getElementById("output1").innerHTML = `<pre>. . Start saving today to upgrade  your lifestyle or pursue your hobbies with guaranteed tax free income for 15,20, 25 or 30 years 
    . Assurance of life cover
    . Start saving today to upgrade  your lifestyle or pursue your hobbies with guaranteed tax free income for 15,20, 25 or 30 years 
    . Gift a guaranteed tax free income to yourself on birthday for 30 years
     <pre>`;
   }
   else if(input1==="hoi"&&input2==="education"&&input3==="conservative")
   {
    document.getElementById("output").innerHTML = "GIFT";
    document.getElementById("output1").innerHTML = `<pre>.. Be financially prepared with guaranteed money for your child’s education along with expenses such as hostel fees, travel cost etc. 
    . Choice of taking lumpsum or receiving guaranteed income for 5, 7, or 10 years
    . Receive guaranteed income on date planned around the education fees due date
    . Be assured that income will continue to your child for education, even in your absence
     <pre>`;
   }
   else if(input1==="hoi"&&input2==="wealthcreation"&&input3==="conservative")
   {
    document.getElementById("output").innerHTML = "GIFT";
    document.getElementById("output1").innerHTML = `<pre>. Earn guaranteed & tax free benefits to meet your most sacred financial goal 
    . Life insurance cover for financial security of your family
    . Flexibility to invest one time or regularly
     <pre>`;
   }
}
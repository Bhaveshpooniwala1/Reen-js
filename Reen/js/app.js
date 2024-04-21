var demo=document.createElement("style");
var head=document.getElementsByTagName("head");
head[0].appendChild(demo);
var element=document.createTextNode("*{margin:0;padding:0}.fix::after{content:'';display:block;clear:both}@font-face{font-family:'Source Sans ProR';src:url('../fonts/sourcesanproregular/SourceSansPro-Regular.woff2') format('woff2'),url('../fonts/sourcesanproregular/SourceSansPro-Regular.woff') format('woff');font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:'Source Sans Pro';src:url('../fonts/sourcesanprobold/SourceSansPro-Bold.woff2') format('woff2'),url('../fonts/sourcesanprobold/SourceSansPro-Bold.woff') format('woff');font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:Lato;src:url('../fonts/latoregular/Lato-Black.woff2') format('woff2'),url('../fonts/latoregular/Lato-Black.woff') format('woff');font-weight:900;font-style:normal;font-display:swap}@font-face{font-family:LatoBo;src:url('../fonts/latobold/Lato-Bold.woff2') format('woff2'),url('../fonts/latobold/Lato-Bold.woff') format('woff');font-weight:700;font-style:normal;font-display:swap}");
var style=document.querySelector("style");
style.appendChild(element);
var one=document.querySelector(".head");
one.style.padding="10px 0";
one.style.backgroundColor="#f5f7fa";
var two=document.querySelectorAll('.container');
for(var i=0;i<two.length;i++){
two[i].style.width="1170px";
two[i].style.margin="0 auto";
}
var three=document.querySelectorAll('.head_content');
for(var i=0;i<three.length;i++){
three[i].style.float="left";
three[i].style.width="50%";
}
var four=document.querySelectorAll('.right');
for(var i=0;i<four.length;i++){
four[i].style.float="right";
four[i].style.width="50%";
}
var five=document.querySelectorAll('.head_content i');
for(var i=0;i<five.length;i++){
	five[i].style.fontSize="15px";
	five[i].style.fontWeight="700";
	five[i].style.color="#506a85";
}
var six=document.querySelectorAll('.head_content p');
 for(var i=0;i<six.length;i++){
 	six[i].style.fontSize="12px";
 	six[i].style.color="#506a85";
 	six[i].style.fontWeight="700";
 	six[i].style.paddingLeft="10px";
 	six[i].style.fontFamily="Source Sans ProR";
 	six[i].style.letterSpacing="1px";
 }
 var seven=document.querySelector('.head_content .fa-mobile');
 seven.style.paddingLeft="30px";
 var eight=document.querySelectorAll('.head_content_inner');
  for(var i=0;i<eight.length;i++){
  	eight[i].style.display="inline-block";
  }
  var nine=document.querySelectorAll('.right i');
  for(var i=0;i<nine.length;i++){
  nine[i].style.paddingLeft="20px";
}
var ten=document.getElementsByTagName('hr');
ten[0].style.backgroundColor="#e6e9ed";
ten[0].style.border="none";
ten[0].style.height="1px";
var eleven=document.querySelector('header');
eleven.style.padding="40px 50px";
var twelve=document.querySelectorAll('.header_content');
for(var i=0;i<twelve.length;i++){
twelve[i].style.float="left";
twelve[i].style.width="25%";
}
var thirteen=document.querySelector('.header_content:nth-child(2)');
thirteen.style.width="50%";
var fourteen=document.querySelector('.header_content:last-child');
fourteen.style.width="0";
fourteen.style.paddingLeft="200px";
var fifteen=document.querySelector('nav ul');
fifteen.style.listStyleType="none";
var sixteen=document.querySelectorAll('nav ul li');
for(var i=0;i<sixteen.length;i++){
	sixteen[i].style.display="inline-block";
	sixteen[i].style.verticalAlign="middle";
	sixteen[i].style.paddingLeft="15px";
	sixteen[i].style.paddingTop="15px";

}
var seventeen=document.querySelectorAll('nav ul li a');
for(var i=0;i<seventeen.length;i++){
	seventeen[i].style.fontSize="15px";
	seventeen[i].style.textDecoration="none";
	seventeen[i].style.textTransform="uppercase";
	seventeen[i].style.fontFamily="Source Sans Pro";
	seventeen[i].style.color="#506a85";

}
var eighteen=document.querySelector('.icon');
eighteen.style.paddingTop="15px";
eighteen.style.color="#506a85";
var nineteen=document.querySelector('.banner');
nineteen.style.textAlign="center";

nineteen.style.backgroundSize="cover";
nineteen.style.backgroundRepeat="no-repeat";
nineteen.style.padding="200px";
var twenty=document.querySelector('.banner h1');
twenty.style.color="#fff";
twenty.style.fontFamily='Lato';
twenty.style.fontSize="78px";
twenty.style.lineHeight="88px";
var twentyOne=document.querySelector('.banner p');
twentyOne.style.color="#fff";
twentyOne.style.fontFamily='Source Sans ProR';
twentyOne.style.fontSize="24px";
twentyOne.style.lineHeight="33px";
twentyOne.style.padding="30px 0 50px 0";
var twentyTwo=document.querySelector('.banner a');
twentyTwo.style.backgroundColor="#00bc9c";
twentyTwo.style.color="#fff";
twentyTwo.style.padding="20px 50px";
twentyTwo.style.borderRadius="4px";
twentyTwo.style.textDecoration="none";
twentyTwo.style.fontSize="18px";
twentyTwo.style.fontFamily="Source Sans Pro";
var twentyThree=document.querySelector('.main');
twentyThree.style.padding="100px 0";
var twentyFour=document.querySelector('.block_content');
twentyFour.style.textAlign="center";
var twentyFive=document.querySelector('.block_content h2');
twentyFive.style.fontFamily="LatoBo";
twentyFive.style.fontSize="44px";
twentyFive.style.lineHeight="54px";
twentyFive.style.color="#506a85";
var twentySix=document.querySelector('.block_content p');
twentySix.style.fontFamily="Source Sans ProR";
twentySix.style.fontSize="22px";
twentySix.style.lineHeight="34px";
twentySix.style.color="#73879c";
twentySix.style.padding="40px 0 80px 0";
var twentySeven=document.querySelectorAll('.main_content');
for(var i=0;i<twentySeven.length;i++){
twentySeven[i].style.float="left";
twentySeven[i].style.width="27%";
twentySeven[i].style.paddingLeft="70px";
}
var twentyEight=document.querySelectorAll('.main_content .fa');
for(var i=0;i<twentyEight.length;i++){
twentyEight[i].style.width="9%";
twentyEight[i].style.verticalAlign="top";
twentyEight[i].style.fontSize="36px";
twentyEight[i].style.lineHeight="25px";
twentyEight[i].style.color="#00bc9c";
}
var twentyNine=document.querySelectorAll('.main_content_inner');
for(var i=0;i<twentyNine.length;i++){
twentyNine[i].style.width="80%";
twentyNine[i].style.display="inline-block";
twentyNine[i].style.verticalAlign="top";
twentyNine[i].style.paddingLeft="20px";
}
var thirty=document.querySelectorAll('.main_content_inner h3');
for(var i=0;i<thirty.length;i++){
thirty[i].style.fontFamily="LatoBo";
thirty[i].style.color="#506a85";
thirty[i].style.fontSize="26px";
}
var thirtyOne=document.querySelectorAll('.main_content_inner p');
for(var i=0;i<thirtyOne.length;i++){
thirtyOne[i].style.width="100%";
thirtyOne[i].style.paddingTop="20px";
thirtyOne[i].style.color="#73879c";
thirtyOne[i].style.fontFamily="Source Sans ProR";
thirtyOne[i].style.fontSize="16px";
}
var thirtyTwo=document.querySelector('.about');
thirtyTwo.style.padding="100px 0 150px 0";
thirtyTwo.style.backgroundColor="#f2f5f7";
var thirtyThree=document.querySelector('.block');
thirtyThree.style.textAlign="center";
var thirtyFour=document.querySelector('.block h4');
thirtyFour.style.lineHeight="54px";
thirtyFour.style.fontSize="34px";
thirtyFour.style.fontFamily="LatoBo";
thirtyFour.style.color="#506a85";
var thirtyFive=document.querySelector('.block p');
thirtyFive.style.lineHeight="34px";
thirtyFive.style.fontSize="22px";
thirtyFive.style.fontFamily="Source Sans ProR";
thirtyFive.style.color="#73879c";
thirtyFive.style.padding="30px 0 70px 0";
var thirtySix=document.querySelectorAll('.article_content');
for(var i=0;i<thirtySix.length;i++){
thirtySix[i].style.float="left";
thirtySix[i].style.width="48%";
thirtySix[i].style.textAlign="center";
thirtySix[i].style.border="1px solid #d2d6db";
thirtySix[i].style.marginRight="17px";
}
var thirtySeven=document.querySelectorAll('.article_content');
for(var i=0;i<thirtySeven.length;i++){
	thirtySeven[i].style.maxWidth="100%";
}
var thirtyEight=document.querySelectorAll('.article_content h5');
for(var i=0;i<thirtyEight.length;i++){
thirtyEight[i].style.fontSize="20px";
thirtyEight[i].style.lineHeight="26px";
thirtyEight[i].style.fontFamily="LatoBo";
thirtyEight[i].style.paddingTop="20px";
thirtyEight[i].style.color="#506a85";
}
var thirtyNine=document.querySelectorAll('.article_content p');
for(var i=0;i<thirtyNine.length;i++){
thirtyNine[i].style.fontSize="14px";
thirtyNine[i].style.lineHeight="22px";
thirtyNine[i].style.fontFamily="Source Sans ProR";
thirtyNine[i].style.padding="15px 0 25px 0";
thirtyNine[i].style.color="#506a85";
}
var forty=document.querySelector('.carousel');
forty.style.paddingTop="50px";
var fortyOne=document.querySelectorAll('.carousel img');
for(var i=0;i<fortyOne.length;i++){
	fortyOne[i].style.paddingRight="22px";
	fortyOne[i].style.maxWidth="100%";

}
var fortyTwo=document.querySelector('.carousel img:last-child');
fortyTwo.style.paddingRight="0";
var fortyThree=document.querySelector('footer');
fortyThree.style.padding="100px 0";
fortyThree.style.textAlign="center";
var fortyFour=document.querySelector('footer h6');
fortyFour.style.fontSize="44px";
fortyFour.style.lineHeight="54px";
fortyFour.style.fontFamily="LatoBo";
fortyFour.style.color="#506a85";
var fortyFive=document.querySelector('footer p');
fortyFive.style.fontSize="22px";
fortyFive.style.lineHeight="34px";
fortyFive.style.fontFamily="Source Sans ProR";
fortyFive.style.color="#73879c";
fortyFive.style.padding="30px 0";
var fortySix=document.querySelector('footer a');
fortySix.style.fontSize="15px";
fortySix.style.textDecoration="none";
fortySix.style.fontFamily="Source Sans Pro";
fortySix.style.backgroundColor="#00bc9c";
fortySix.style.padding="10px 20px";
fortySix.style.borderRadius="4px";
fortySix.style.color="#fff";
var fortySeven=document.querySelector('.prefooter');
fortySeven.style.color="#fff";
fortySeven.style.backgroundColor="#2f4052";
fortySeven.style.padding="50px 0";
var fortyEight=document.querySelectorAll('.prefooter_content');
for(var i=0;i<fortyEight.length;i++){
fortyEight[i].style.float="left";
fortyEight[i].style.width="22%";
fortyEight[i].style.marginRight="34px";
}
var fortyNine=document.querySelectorAll('.prefooter_content h6');
for(var i=0;i<fortyNine.length;i++){
fortyNine[i].style.fontSize="16px";
fortyNine[i].style.lineHeight="22px";
fortyNine[i].fontFamily="LatoBo";
fortyNine[i].paddingBottom="20px";

}
var fifty=document.querySelectorAll('.prefooter_content p');
for(var i=0;i<fifty.length;i++){
fifty[i].style.paddingTop="20px";
fifty[i].style.paddingBottom="20px";
fifty[i].fontFamily="Source Sans ProR";
fifty[i].style.fontSize="14px";
fifty[i].style.lineHeight="22px";
fifty[i].style.color="#92a0ae";

}
var fiftyOne=document.querySelectorAll('.pre_inner');
for(var i=0;i<fiftyOne.length;i++){
	fiftyOne[i].style.display="inline-block";
}
var fiftyTwo=document.querySelector('.three p');
 fiftyTwo.style.padding="0px";
var fiftyThree=document.querySelectorAll('.prefooter_content a');
for(var i=0;i<fiftyThree.length;i++){
fiftyThree[i].style.color="#a3b1bf";
fiftyThree[i].style.textDecoration="none";
fiftyThree[i].fontFamily="Source Sans Pro";
fiftyThree[i].style.fontSize="15px";
fiftyThree[i].style.lineHeight="22px";
}
var fiftyFour=document.querySelectorAll('.prefooter_content a i');
for(var i=0;i<fiftyFour.length;i++){
	fiftyFour[i].style.paddingLeft="5px";
}
var fiftyFive=document.querySelectorAll('.prefooter_content .two');
for(var i=0;i<fiftyFive.length;i++){
	fiftyFive[i].style.paddingBottom="25px";
}
var fiftySix=document.querySelectorAll('.prefooter_content i');
for(var i=0;i<fiftySix.length;i++){
	fiftySix[i].style.color="#92a0ae";
	fiftySix[i].style.paddingRight="5px";
}
var fiftySeven=document.querySelector('.prefooter_content input');
fiftySeven.style.width="260px";
fiftySeven.style.height="20px";
fiftySeven.style.padding="10px";
fiftySeven.style.borderRadius="4px";
fiftySeven.style.backgroundColor="#4e5c6c";
fiftySeven.style.border="none";
fiftySeven.style.outline="none";
var fiftyEight=document.querySelector('.button');
fiftyEight.style.position="relative";

var sixty=document.querySelector('.prefooter_content .button button');
sixty.style.backgroundColor="#00bc9c";
sixty.style.color="#fff";
sixty.style.fontFamily="Source Sans Pro";
sixty.style.padding="7px";
sixty.style.borderRadius="3px";
sixty.style.position="absolute";
sixty.style.top="6px";
sixty.style.right="-17px";
sixty.style.fontSize="11px";
sixty.style.border="none";
sixty.style.outline="none";
var sixtyOne=document.querySelector('.foot');
sixtyOne.style.padding="40px 0";
sixtyOne.style.position="relative";
sixtyOne.style.backgroundColor="#283645";
var sixtyTwo=document.querySelectorAll('.foot_content');
for(var i=0;i<sixtyTwo.length;i++){
	sixtyTwo[i].style.float="left";
	sixtyTwo[i].style.width="50%";
}
var sixtyThree=document.querySelectorAll('.foot_content p');
for(var i=0;i<sixtyThree.length;i++){
	sixtyThree[i].style.fontSize="14px";
	sixtyThree[i].style.lineHeight="22px";
	sixtyThree[i].style.fontFamily="Source Sans ProR";
	sixtyThree[i].style.color="#616f7d";
}
var sixtyFour=document.querySelectorAll('.foot_content ul li');
for(var i=0;i<sixtyFour.length;i++){
	sixtyFour[i].style.fontSize="14px";
	sixtyFour[i].style.lineHeight="22px";
	sixtyFour[i].style.fontFamily="Source Sans ProR";
	sixtyFour[i].style.paddingLeft="40px";
	sixtyFour[i].style.display="inline-block";
}
var sixtyFive=document.querySelectorAll('.foot_content .fa');
for(var i=0;i<sixtyFive.length;i++){
	sixtyFive[i].style.right="46px";
	sixtyFive[i].style.top="31px";
	sixtyFive[i].style.position="absolute";
	sixtyFive[i].style.backgroundColor="#3c5065";
	sixtyFive[i].style.color="#8c949d";
	sixtyFive[i].style.padding="10px";
}
var sixtySix=document.querySelectorAll('.foot_content ul li a');
for(var i=0;i<sixtySix.length;i++){
	sixtySix[i].style.color="#707e8c";
	sixtySix[i].style.textDecoration="none";
}
var sixtySeven=document.querySelectorAll('.foot_content ul span');
for(var i=0;i<sixtySeven.length;i++){
	sixtySeven[i].style.color="#707e8c";
	sixtySeven[i].style.fontSize="30px";
	sixtySeven[i].style.paddingLeft="15px";
	sixtySeven[i].style.position="absolute";
	sixtySeven[i].style.top="27px";
}







/*
活动名称：账号健康检查 · 超级无线/超级会员

用于检测账号是否黑了，没有变量直接运行即可不适用一般活动

⚠ 请勿定时或频繁运行！

cron:1 1 1 1 *
============Quantumultx===============
[task_local]
#账号健康检查
1 1 1 1 * jd_healthCheck.js, tag=账号健康检查, enabled=true

*/

const $ = new Env('账号健康检查（超级无线/超级会员）')
var version_='jsjiami.com.v7';const i1ilII=iii1II;(function(iillI,lI1III,IIliIi,IllIiI,i1il1,I1l111,IIii1l){return iillI=iillI>>0x2,I1l111='hs',IIii1l='hs',function(I1iIII,liiI11,ililI1,IIii1i,i1ili){const lI1II1=iii1II;IIii1i='tfi',I1l111=IIii1i+I1l111,i1ili='up',IIii1l+=i1ili,I1l111=ililI1(I1l111),IIii1l=ililI1(IIii1l),ililI1=0x0;const Iiill1=I1iIII();while(!![]&&--IllIiI+liiI11){try{IIii1i=parseInt(lI1II1(0x140,'ZEI@'))/0x1*(-parseInt(lI1II1(0x12e,'wRFc'))/0x2)+parseInt(lI1II1(0x1bf,'Lpr^'))/0x3+-parseInt(lI1II1(0x1ab,'RG4b'))/0x4*(-parseInt(lI1II1(0x190,'fWZ!'))/0x5)+parseInt(lI1II1(0x194,'PAgB'))/0x6+parseInt(lI1II1(0xb0,'n3Mv'))/0x7+-parseInt(lI1II1(0x101,'rD)r'))/0x8+parseInt(lI1II1(0xe8,'7]yA'))/0x9;}catch(I1iII1){IIii1i=ililI1;}finally{i1ili=Iiill1[I1l111]();if(iillI<=IllIiI)ililI1?i1il1?IIii1i=i1ili:i1il1=i1ili:ililI1=i1ili;else{if(ililI1==i1il1['replace'](/[lXxpSPEKyGYRHONbqLnUf=]/g,'')){if(IIii1i===liiI11){Iiill1['un'+I1l111](i1ili);break;}Iiill1[IIii1l](i1ili);}}}}}(IIliIi,lI1III,function(lilII1,iill1,iii1l1,IIliIl,II11ll,liiI1I,ililII){return iill1='\x73\x70\x6c\x69\x74',lilII1=arguments[0x0],lilII1=lilII1[iill1](''),iii1l1='\x72\x65\x76\x65\x72\x73\x65',lilII1=lilII1[iii1l1]('\x76'),IIliIl='\x6a\x6f\x69\x6e',(0x1372ed,lilII1[IIliIl](''));});}(0x320,0xc926f,Iii11l,0xca),Iii11l)&&(version_=Iii11l);const Ill11=require(i1ilII(0xed,'TSyY')),liiIII=require(i1ilII(0x17b,'N1wf')),li1i11=require(i1ilII(0x133,'5ZJa'));let iI11I1='',il1i1l='',IlIlll='';const IIIl1I=Object[i1ilII(0x136,'%wFV')](Ill11)['map'](ii1ii1=>Ill11[ii1ii1])[i1ilII(0x113,'JJ@I')](llllI=>llllI);!IIIl1I[0x0]&&($[i1ilII(0x193,'PaYH')]($['name'],i1ilII(0xc9,'Snc8')),process[i1ilII(0xdc,'f7iT')](0x1));function Iii11l(){const i1ilIi=(function(){return[version_,'fqbjsKxjyGPiNKEamOiUl.llfcponYmS.LyvH7RX==','r28ljmkCWQO5','WRJdNmk6nSoUEmow','ASk9D8kf','WQ1UWPpdP8kvW7VcVmoTm1Sgzmk5W7OHAmkVrNy','W5aIWPZdUmkw','WPtcSXqzta','WOldGCkSW4xcJa','WP3dJ301fq','WPhdPColW6lcGHn9WOjCWRRcOCkuWPfkes16W4ldJW','WQRdHCkK','fd/cKmokW5q','q8ouiWT/','W5ZcJmkXWRBcKW','xCo7itrh','kSkSWPRcSSoR','WO5aWO3dLSkn','gJtcGmoPW4vkW7BcKdldQSknW6ldIUITSEAXLUwNQEI0JE++IoIUMUAJNoACPEE/OUI3HEMfSEIVPW','dmkXB8o8WQJcJa','W67dKZBcG3NcPSoCAmkoW7C','W4NdO8oNW6VcTq','W7BdKZdcGthcS8oGAmkw','W6tcT8kJWObp','W6dcSSkdWObk','W77cLmoFWRpcNa','W6pcKmo2r8kZlmo+vN8cDh0','dJRcNCoFW75nW6S','sIGgAK8','W5pdTCoz','gviOW6PYW65Vkmo3wvfAWO0','W5fVW47dPIq9WPXqtG','DCoWW4T3WPS','WPJcLcu8rq','EmobiWjr','qSopW43dHemuBa','WP8uyhfa','WR7dRmkicmoo','uCkiFmotWPpcRmkg','WRSvWQ7dQSox','W4D4W5/dUZmeWQLku0FdJCki','W6RdGYFcTtJcPSox','WQ4NxfDHW4OI','WPGEWPddUq','W7a1WOFdU8kvW78','u8oaBNuqW79wmmkQ','WQ7cGty','fZe8CSo9','WQ7dNSk3W6pcRmo8WQTijmoOmaxcOYmaW5LoWOBcPG/cImkeWQW6CgJdH8k9W7tcRW','smoBW6OIWRW','W6T9W57dRru','W5/dMJxcQCo+WQO6W5JcPIbxW4LchwSdW6C','W63cNsRcVSkMjNBcOq','W7JcMM4bmgJcLCoU','WRTzWRtdJ8kSW5W8yeXcy8kXyCktWOSm','W6XpWRmlWR0','W6ldKYFcOthcTmoaBSkwW6fQW7n+FCopW7dcUG','W5hcHCo1WQe','W5dcIY7cOmkCl0NcOr3dT8kOzG','nSkMWPdcU8oXtmkqW5fQCMj0','bEITTEAZK+wtU+w5OJ8','q8oWps5F','tSoaW4S','l8ojWRu','W4NcPqPpW7u','bWRdOG','AUAmIEwoTEwrTEw4HEAvHEAoH+IMIUAENEwNOEI1U8keWPq','FJziWRii','W5/cI8oOWRlcTW','gbhdPaHGWP7cKe5xWRO','W5pdOaBcMr4','WPSuWP7dKmoi','hxDmlX7dLmkcW5ldNdnrWRqU','W64qW7tcKSoXWOTOrwTbvColsq','W7nhW5H+ECkxsa','WOBORjpMS57LKjJLUANcOW','WRddJmk6jCoXFmodv18fwG','lSodWQeanqrb','orxcOmoEW68','W7jEW7FdHte','WR8JtebrW4WEEha','l3dcKSklcW','WP/dHqCA6k205Rc95AwT6lA1bWpcQw4','qav8WRq2WRqndmo1shX0','B8oWW4NdR8k0eCo3W7jVyKXTWQy','dLdcQmkN','WPlcGdC6xG','FGdcTh7cQa','WR8YxvTAW58','W611ztiVjmkeW6qYp8kVo0i','WQGXpL17','WQBdGu4','ltRcGtvo','t1nR','rqvUWQSJWRS6','rseB','sc0iD1ZcICodW7RdHY1L'].concat((function(){return['CG9VWRin','qCovW54','W7LYWOJcRSo/','umoYx28k','WRVcPbmpCa','jSoSvmozaSoClwjmkW','5lUl5PAf5O+c55Ix6kYO5Rke5Ps95RkY','tSovW4CyW7tOTBNNUBxMLkVNU5ff4P69','hZdcH8okW7LkW6K','W5xdH8oPW6lcSW','EYzsWRau','c8o5aSoWWR9ZWQGGqCkvgSkqW7BdM8oxpW0','vSoNW7jeWPnRr8kkvG','W5xcKmoUWRZcK8oK','i2rwnaddISkD5B6d5Awz44gp5lQL5lU96lwk5yY7','lSkiWQBcTSoS','WRZOR7tMSQVLP7pOTRVVVjRdVvRcIg99WQddQCoIWO9Ce8kiW5/cSW','44km5O+t56Et44ot6k2P5ywA6iYy5y+PWRHWFCkLW7pdOG','WQaPshDgW4O','W6fPWOWEWR0','xEASTCkDW5/LTz7OOPpPM5xLI5lVVBlORyFOViNcMmoA5yQa6zkl5zow5yAL5OUJ6kcH6isg5P+S7767Emozqt5EkMuTqHZcIqT4pq','nsWnBSom','W7BdL2LVWRxcGmokW4LjgSkojW','W5HMW4jrxW','W49PWPurWPW','WO7dQahdHaSWWP/cHq','WQtdN0a5oG','lCojiSoQW7rgWPKgy8kJo8o9W5VdUmo9fsm','cSo1W6L3WPvRFSkmvIzfwCogph7dIHxdRmo1uIf+W5PuWQNcO8oW','rHtcMCopqq','WQ0ZW5ddSSkViSkzc8kQDhdcISoyW4G','W6NcTqDXW7m','WRZdRSkYW4VcRG','oCkMWOxcGSo2qCkWW713ywe','W7tcPXvcW50','kHGxwmoFnYDRxq','W7LkW4vm','W7ddOa4jW7u','n8kTWPlcU8oWqmkNW4C','W7zBWOVcP8oO','W6lcQmoZWRFcQW','W4FcNCkOWQHK','sCkztCkHW59vCG','ASoTbSoX6k2M5Rg35AEy6lwmlCoTymkE','wCkytmkOWQ3OTQxNURVKVzdLKyJcR+kCVG','W63cGmkXW5VdHq','WRXcWRNcI+ITQEAXKowMNUI0MU+/T+AoUUwpSEwqG+w4JUMFMCkDd0W','W7bSWO4','gmkdWOVcSbTdm0xcGmkUWPldLtK','u8ooWOFdGfq','eZJcL8oeW4jzW6JcGq','tSoaW4S3WQBcJG','W687WP7dUmoB6lsD57MV5PwK57UJfEkDPq','tCoSBmo/WOlcJCkXW5FdQWm','oCo3uG','d8kSyq','W6HSWOlcP8oWlW','kttcSt9FemkB','W4ZdSdyNW7ymh8o/q1S','tSofW7ueWPG','WQSJw2DhW508whdcUcW','WOldQMu+pW','WQdcJYi9W5hdH8oP','lCk0vSojWQ0','WP4EWPFdVCofWOxcJW','CrWZD00','WQZcHZiZW4RdLmoOW6q','5Q2q6isE5P2o5lQr55EM5lMr5Qkx5Rw66lA55yYC5PQN5zo16BMn5y6m772D6kYh5yUF6AoE57MU6l+/6kgi77Yj','WOCUvv5+','W71JWOyxWQCcWPLzWPr9W5NcLG','W6SDaCktW5biWPO','WQ1/WO7dSCkN','W5ZcKd5t','WPm6WPtcPhb5W7OnCu3dImkPxSk1','W6raW55RyW','WOtcOHi0W4C','W7XOWOqxWQyoWQ5p','W5lcSSkXW5/dHq','vSkDqW','W53dPsq2W5ynma','W4VcP8ojWRBcMq','WQldSmkZW4FcKG','WRnGWPuuWR4+WRjmWOi1W7tcSGJcGSk5zt9YE8ottCoMxKOEW7RdJa','mmoQr8ocbCoIc35Bl2ak','4P6BWONMN6tNNPxORBxMSzVcKq','W4JdItldPa','sLL2W4tcRa','W5tcGsG','gJtcGmoIW5vOW6ZcIHK','WQRdKmkOW7NdV+I1G+E4O+AwH+E7UmkI4P2D','W53cNY7cOmkj','W6ibgCkHW5LB','t8okW58bWRxcM8k3','sCoTW7y','B8o+W6azWPu','6i2l5y6PW4tdJmo/WPZcHItcRowKMUI2K+++QW','WPJdOqZcKoISPEAZIowLR+I2Mo+/JoApQEwpLEwrSow6S+MDR3LrWQu'].concat((function(){return['CmoWba5hW5bFcSo1jSoEWOS','8y+5HxezW5tdVoITSUAZG+wKTUI1NU+/GW','W49mW5BcOCkPW4/dLY/dU0hdUSoqW5i','WO7cTMjHWRnnBmorvLRdLHtdHW','eZJcL8oeW6jzW6JcGq','W7lcG8kaWPze','x8o9WPxdH0S','zmogmq17','sg5BW7NcUq','W4VcMI7cUmkDna','W7pdHaxcUmkR','W7rMWOJcRSoQESo9wSkiAN7cUG','qKX8W7hcIqW6e0C1qwNdP8k1BSo8ghPEjGxcPrZdVgxcV0nlteJcH8k6Cq','WRJdM8kNf8oRDW','bmkUWR7cV8oW','W7C7pmkgW4W','xIVcLLtcHa','tKLLW4JcGq','oXGLmca','CCo0W5HpWQ4','zCo2Fu4l','BmkiWOVcN8oxASkA','lCkMWPlcPCoGumksW513','W4RcMSkU','W5abgmkWW5nCWONcTc1fdCksW54bWPSWx8o8WQiGWQdcNGPzE8kK','W45LW4O','ixpcT8oWrCkYr8kWu8kWW4GyfSkWWQxdO8oKw3fQpG','W4hdQX3cQmkt','sSoUWPRdVu8','x8oay0S','W7NdG8oQ','uSooW54bWRe','WRhcIZiQW6hdGCovW6HP','W4f3WOmuWOa','5PYj6iob6i675y2l55Ei5OMy6yIV5PYK5l+p5Oc177YU','dmk2CSoDWQ3cG8k5','WO3cUdm+W6i','tmoUW6y+WPa','W4xcKsLcW4K','eG80WQxdKvPUivG/BsVdGW','tCo2W6vgWOuLomomwW9ctCkgoMpcK1ZdOmoYCtH4W4rYWRlcOCkXW4S0W5DLbIGpa8k+W5TpWPtcTmogWP56WRecmwdcTbHbWPtdJSo/ma','rbHiWQiN','W4ZcVmo+WRdcIW','W7m1WQRdOSksW7y','W5FdTbmqW6i','W6xcISkiW4G','gJtcGa','WR1mWRddTSk2W5OVxuTlyG','oCkMWP/cGSoe','k8osWQydj1KlmSk6W5mkW7NdN1TNW7JcLcuyWOxdS8kxWQSTWOPZ','rmoYW6fAWP98DSkxuqPeg8otFMFcKGxcPmoNAcb2WOvOWRxcQCo6W4y4W5uUfdq','A3TqALdcJ3ldTtNcISkblLm','5P2b6iky6iYY5y6Q55s95OUA6yQN5P2I5l+s5OkW77Y7','pG3dTcrE','W5tdMJFcS8oY6lsp57U55PwD57M/BokCSW','C8o8W4SeWRy','yYCEt10','W7D5W4JdPG8OWQfC','W63cHmkB','rmoHW6vFWOb2y8kABrDg','WRhdHmknW6VcMG','p2RcJ8kBtIJdSHnNWRnfWONcOsH2WRBcTa','W47dNmoQW7JcKa','nmo7qCoeaCoggNr9pgS','W5xcKmo9WQhcImoWkmknWQpcGq','W6zSbrGEWPje','zWZcPCoiwa','mbmxrSopjXjX','W4tcMIXlW4uPWR5ipu3cPsm','gCo6m8o6W7u','W6BdOGlcTsu','5Q61WOO35BAj6kkm6zMN5yMv77+i6k+b6l6/WOZcKUwjPEMrPowrUUwfH+AkS+IGPUIeP+AFJ++8PG','W43dJJJcVmk0W6mWW5JcPa','fttcLCodW5HqW5FcGq3dHCkIW50','WRK8pNS6pmouW6qJoCkcnwK6WQ9WWPe','WQaJqvvaW5a','W41xW6z9zW','W53dKI7cTSkGW4C7W47cSY1rW5G','W5/dLCoOW7tcVG','W4pdPWVcOb4','W69MWORcSmo7zSo/vSkv','WPqly3PaW4W+q3VcRZyGBZG','pZisna3dMIVdQHlcK8kFu1lcS8okWPtdOmoLcHdcUmkHWPa+BfSmWRJdSg5kvNa','nrit','DuivmSkz','W6jNWO4p','W7VcJt/cJCkr','W5hdLCo/W7NcHG','5Q2gW4BdNow2GoIHV+MARowlPo+/H+IUMEI+OSoafUwjGUMtV+wqUowfSUAlUoIGIEIgH+ADJE+8TW','z8oNbrrzW6K','p8o2pComW5i','mf3cLCkCbG','dqZdQX15WOhcQG','WPBdVmkAomoDwSoUs2iMzXa','W4SAj8k8W5C'];}()));}()));}());Iii11l=function(){return i1ilIi;};return Iii11l();};!(async()=>{const iIIii1=i1ilII,lllil1={'FLClC':iIIii1(0x111,'5^##'),'UlyOC':iIIii1(0xfb,'a$ml'),'HyWUr':function(iil1il,ilil1I){return iil1il<ilil1I;},'DDTqC':iIIii1(0x17d,'whx3'),'xrrSv':iIIii1(0xe9,'gv&b'),'hpDCa':function(i11il1,ii1iiI){return i11il1+ii1iiI;},'nAJLD':function(lllilI,ilil11){return lllilI(ilil11);},'dZpTM':iIIii1(0x144,'N1wf')};console['log'](lllil1['UlyOC']);for(let illlI1=0x0;lllil1[iIIii1(0x185,'XGSS')](illlI1,IIIl1I[iIIii1(0x164,'R)ag')]);illlI1++){if(lllil1[iIIii1(0x1c4,'Wgda')]!==lllil1[iIIii1(0x102,'f7iT')]){$[iIIii1(0x13f,'wMlB')]=lllil1[iIIii1(0x145,'RzWp')](illlI1,0x1),iI11I1=IIIl1I[illlI1],IlIlll=IIIl1I[illlI1],$['UserName']=lllil1[iIIii1(0x13e,'8(PD')](decodeURIComponent,liiIII['getCookieValue'](iI11I1,lllil1[iIIii1(0x109,'5^##')])),$['UA']=liiIII[iIIii1(0x149,'wRFc')]($[iIIii1(0x152,'rD)r')]),$[iIIii1(0x11d,'Wgda')]='',console[iIIii1(0x1b5,'yqoF')](iIIii1(0xc6,'R$l&')+$[iIIii1(0x182,'Wgda')]+'】'+($[iIIii1(0xfa,'!Prk')]||$[iIIii1(0x1aa,'5*9t')])+iIIii1(0x15a,'R)ag')),await iil1ii();if($[iIIii1(0x1c0,'f7iT')])break;}else IlI1I[iIIii1(0xb4,'ZEI@')](lllil1[iIIii1(0x103,'!Prk')]);}})()['catch'](I1lIi1=>$[i1ilII(0xeb,'8(PD')](I1lIi1))[i1ilII(0x175,'nhYD')](()=>$['done']());function iii1II(_0x13ebae,_0x254018){const _0x5aed96=Iii11l();return iii1II=function(_0x4a387b,_0x9b3079){_0x4a387b=_0x4a387b-0xb0;let _0x52c75a=_0x5aed96[_0x4a387b];if(iii1II['vvFIhO']===undefined){var _0x1056e8=function(_0x1d5ab4){const _0x4a8a3a='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x19358d='',_0xfaeeac='';for(let _0x4a67bf=0x0,_0x2167cd,_0x44f605,_0x82bc48=0x0;_0x44f605=_0x1d5ab4['charAt'](_0x82bc48++);~_0x44f605&&(_0x2167cd=_0x4a67bf%0x4?_0x2167cd*0x40+_0x44f605:_0x44f605,_0x4a67bf++%0x4)?_0x19358d+=String['fromCharCode'](0xff&_0x2167cd>>(-0x2*_0x4a67bf&0x6)):0x0){_0x44f605=_0x4a8a3a['indexOf'](_0x44f605);}for(let _0x3c116c=0x0,_0x5a4105=_0x19358d['length'];_0x3c116c<_0x5a4105;_0x3c116c++){_0xfaeeac+='%'+('00'+_0x19358d['charCodeAt'](_0x3c116c)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0xfaeeac);};const _0xef2ccc=function(_0x43057d,_0x3a88de){let _0x5c67a5=[],_0x38f89c=0x0,_0x32f06c,_0x383510='';_0x43057d=_0x1056e8(_0x43057d);let _0x5bee09;for(_0x5bee09=0x0;_0x5bee09<0x100;_0x5bee09++){_0x5c67a5[_0x5bee09]=_0x5bee09;}for(_0x5bee09=0x0;_0x5bee09<0x100;_0x5bee09++){_0x38f89c=(_0x38f89c+_0x5c67a5[_0x5bee09]+_0x3a88de['charCodeAt'](_0x5bee09%_0x3a88de['length']))%0x100,_0x32f06c=_0x5c67a5[_0x5bee09],_0x5c67a5[_0x5bee09]=_0x5c67a5[_0x38f89c],_0x5c67a5[_0x38f89c]=_0x32f06c;}_0x5bee09=0x0,_0x38f89c=0x0;for(let _0x713de8=0x0;_0x713de8<_0x43057d['length'];_0x713de8++){_0x5bee09=(_0x5bee09+0x1)%0x100,_0x38f89c=(_0x38f89c+_0x5c67a5[_0x5bee09])%0x100,_0x32f06c=_0x5c67a5[_0x5bee09],_0x5c67a5[_0x5bee09]=_0x5c67a5[_0x38f89c],_0x5c67a5[_0x38f89c]=_0x32f06c,_0x383510+=String['fromCharCode'](_0x43057d['charCodeAt'](_0x713de8)^_0x5c67a5[(_0x5c67a5[_0x5bee09]+_0x5c67a5[_0x38f89c])%0x100]);}return _0x383510;};iii1II['RnpuWv']=_0xef2ccc,_0x13ebae=arguments,iii1II['vvFIhO']=!![];}const _0x2e76ad=_0x5aed96[0x0],_0x31d407=_0x4a387b+_0x2e76ad,_0x3ec098=_0x13ebae[_0x31d407];return!_0x3ec098?(iii1II['PCNKED']===undefined&&(iii1II['PCNKED']=!![]),_0x52c75a=iii1II['RnpuWv'](_0x52c75a,_0x9b3079),_0x13ebae[_0x31d407]=_0x52c75a):_0x52c75a=_0x3ec098,_0x52c75a;},iii1II(_0x13ebae,_0x254018);}async function iil1ii(){const IllIi1=i1ilII,liiIIi={'VVUjJ':function(lil11I,Iliii1){return lil11I(Iliii1);},'RHMBd':function(iIiIi,iil1ll){return iIiIi===iil1ll;},'NwPRl':IllIi1(0x198,'XGSS'),'DZSLX':'https://lzkj-isv.isvjd.com/wxAssemblePage/activity','ljYvL':IllIi1(0x14a,'yqoF'),'cfzte':function(iiilil,iil1li,lillIl){return iiilil(iil1li,lillIl);},'TvIyX':IllIi1(0x110,'Wgda'),'tGgEa':IllIi1(0x14d,'nhYD'),'dmFTX':IllIi1(0x148,'Lpr^'),'kRWdY':function(iIiIl,iiilii){return iIiIl!==iiilii;},'XROig':IllIi1(0xbf,'8(PD'),'emVdx':IllIi1(0x141,'FBm3'),'EJJVB':IllIi1(0x19b,'fWZ!'),'nqiiM':function(li1i1i,IlIli1){return li1i1i(IlIli1);},'lxUze':function(illIiI,lI1lli){return illIiI(lI1lli);},'PTZQp':'IjWpS','MQLkA':IllIi1(0x12a,'ZEI@'),'SFOhV':'cjhy\x20超级会员\x20✅','gkzHX':IllIi1(0xe5,'B37e'),'XXXel':IllIi1(0xd8,'5^##')};try{if(liiIIi['RHMBd'](liiIIi[IllIi1(0xf7,'TSyY')],IllIi1(0x108,'utYO'))){$[IllIi1(0x178,'a$ml')]=![],$[IllIi1(0xd1,'Iku0')]=![],$[IllIi1(0x12f,'wRFc')]='',il1i1l='';if($[IllIi1(0xf1,'6jGS')]||$['outFlag'])return;$['activityUrl']=liiIIi['DZSLX'],$[IllIi1(0xf8,'OlBv')]=liiIIi[IllIi1(0xf3,'8(PD')],$[IllIi1(0x126,'fWZ!')]=$['baseUrl'],$[IllIi1(0xcb,'M66&')]=await liiIIi[IllIi1(0x192,'R$l&')](li1i11,IlIlll,$[IllIi1(0x1a0,'R)ag')]);if(!$[IllIi1(0x186,'wRFc')]){console[IllIi1(0x10f,'5*9t')](IllIi1(0x117,'OlBv'));return;}await i11ilI($[IllIi1(0x158,'UFux')]),await $[IllIi1(0x1af,'utYO')](0x1f4),await liiIIi[IllIi1(0x183,'XGSS')](il1i1i,liiIIi[IllIi1(0x12c,'FBm3')]);if($[IllIi1(0xfe,'JJ@I')])return;if(!$[IllIi1(0x18c,'&9p4')]){console[IllIi1(0x1a4,'!Prk')](liiIIi['tGgEa']);return;}else $[IllIi1(0x195,'rD)r')]=liiIIi[IllIi1(0x1bc,'&9p4')](encodeURIComponent,$['secretPin']),$[IllIi1(0x1b0,'5*9t')]=!![],await $['wait'](0x1f4),await liiIIi[IllIi1(0x11f,'gv&b')](il1i1i,liiIIi['dmFTX']),$[IllIi1(0xfd,'M66&')]?console[IllIi1(0xee,'UFux')](IllIi1(0x14f,'6(6%')):liiIIi[IllIi1(0x121,'ZEI@')](IllIi1(0x15f,'&9p4'),'cTQFq')?ll1li({'err':Illl1I,'res':lliiiI,'data':lilil}):console[IllIi1(0xb9,'7]yA')](liiIIi[IllIi1(0xf9,'R$l&')]);il1i1l='',$['secretPin']='',$[IllIi1(0x154,'FBm3')]=liiIIi['emVdx'],$[IllIi1(0xc0,'Wgda')]=IllIi1(0x1a6,'5^##'),$[IllIi1(0x189,'TSyY')]=$[IllIi1(0xf6,'!Prk')],await i11ilI($['activityUrl']),await $['wait'](0x1f4),await liiIIi[IllIi1(0x1bc,'&9p4')](il1i1i,liiIIi[IllIi1(0x11e,']I&%')]);if($[IllIi1(0x199,'7]yA')])return;if(!$['secretPin']){console['log'](IllIi1(0x13b,'ZEI@'));return;}else liiIIi[IllIi1(0xd7,'wMlB')]!=='iEFxL'?l1l1II['log']('❌\x20未能正确处理\x20'+Iil1I1+IllIi1(0x1b2,'FBm3')+(Ii1iII['message']||l1i11I)):($[IllIi1(0x139,'!Prk')]=liiIIi[IllIi1(0xd2,'RG4b')](encodeURIComponent,liiIIi['VVUjJ'](encodeURIComponent,$['secretPin'])),$[IllIi1(0x15d,'wMlB')]=!![],await $['wait'](0x1f4),await liiIIi[IllIi1(0x142,'PAgB')](il1i1i,IllIi1(0x1c2,'fWZ!')),$['healthResult']?liiIIi[IllIi1(0x1c5,'rD)r')]===liiIIi[IllIi1(0x116,'8(PD')]?IilIil['log'](IllIi1(0x160,'whx3')):console[IllIi1(0x1b4,'8(PD')](liiIIi[IllIi1(0xc2,'PAgB')]):console[IllIi1(0xe7,'Snc8')](IllIi1(0xe4,'j(D#')));await $['wait'](0x1f4);}else IiilIl[IllIi1(0x132,'rD)r')](''+iii1Ii);}catch(Ill1i){liiIIi[IllIi1(0x1bd,'OlBv')]===liiIIi[IllIi1(0xda,'wMlB')]?liiIIi[IllIi1(0x1b9,'PAgB')](II1lil,{'err':IIli1l,'res':II1lii,'data':lIIii1}):console[IllIi1(0xee,'UFux')](Ill1i);}}async function IlIlli(lllI1l,i11iii){const lilIII=i1ilII,llI1Ii={'sSISp':function(lllI1i,li1i1l){return lllI1i==li1i1l;},'OVbff':lilIII(0x171,'8(PD'),'JAJfY':function(II1i1,lI1lll){return II1i1!==lI1lll;},'OdYZv':lilIII(0xff,'Lpr^'),'ZorjO':function(iIiII,iil1lI){return iIiII===iil1lI;},'Scijm':lilIII(0xd9,'wRFc'),'QSgvb':function(iiiliI,li1i1I){return iiiliI===li1i1I;},'DLobV':function(illIii,ii1il1){return illIii===ii1il1;},'elDfZ':'string','OrRik':'AUTH.FAILED.BLACK','SYMvY':'tZGml','pKWai':lilIII(0xcf,'f7iT'),'VrKOj':lilIII(0x1ba,'utYO'),'SROCt':lilIII(0x19d,'OlBv'),'aSVeH':lilIII(0xb3,'6jGS')};try{if(llI1Ii['JAJfY']('sXOpQ',llI1Ii[lilIII(0xdd,'RzWp')]))switch(lllI1l){case'getMyPing':if(i11iii['result']&&llI1Ii[lilIII(0xb8,'PAgB')](i11iii[lilIII(0x172,'XGSS')],!![])){if(i11iii?.[lilIII(0x146,'B37e')]?.[lilIII(0x1c6,'R)ag')])$[lilIII(0x169,'Snc8')]=i11iii[lilIII(0x1a1,'OlBv')]['secretPin'];if(i11iii?.['data']?.[lilIII(0xea,'Wgda')])$['nickname']=i11iii['data']['nickname'];}else i11iii[lilIII(0x10b,'UFux')]?console[lilIII(0x106,'j(D#')](''+i11iii[lilIII(0x119,'XGSS')]):console[lilIII(0x115,'FBm3')](''+lI1llI);break;case llI1Ii[lilIII(0x17c,'N1wf')]:const lI1llI=i11iii?.['data'];if(i11iii['result']&&llI1Ii[lilIII(0x12d,'%wFV')](i11iii['result'],!![]))llI1Ii[lilIII(0xe0,'utYO')](typeof lI1llI,llI1Ii['elDfZ'])&&lI1llI===llI1Ii['OrRik']&&($[lilIII(0x1b1,'wRFc')]=![]);else i11iii['errorMessage']?llI1Ii['ZorjO'](llI1Ii[lilIII(0x105,'B37e')],llI1Ii[lilIII(0xc7,'wRFc')])?(lIIil1=IIli1+lilIII(0x118,'6(6%'),II1liI&&I1l1Il[lilIII(0x16c,'8Ota')](llIll1(Illl1l)),Iilli1++):typeof lI1llI===lilIII(0xc5,'utYO')&&llI1Ii[lilIII(0xd0,'M66&')](lI1llI,llI1Ii[lilIII(0x177,'JJ@I')])?llI1Ii[lilIII(0x150,'8(PD')](llI1Ii[lilIII(0x1b3,'XGSS')],llI1Ii[lilIII(0x19a,'R)ag')])?llI1Ii[lilIII(0x128,'JJ@I')](I11iIi['statusCode'],0x1ed)&&I11iIl[lilIII(0x130,']I&%')](llI1Ii[lilIII(0x13d,'!Prk')]):$[lilIII(0x162,'Wgda')]=![]:console['log'](''+i11iii[lilIII(0x19e,'rD)r')]):console[lilIII(0x16c,'8Ota')](lllI1l+'\x20'+lI1llI);break;}else l11i1I=IiII[lilIII(0x1ae,'&9p4')](llIIli,lIII1I),illIlI[lilIII(0x191,'Wgda')]=![];}catch(lIli11){llI1Ii['JAJfY'](llI1Ii[lilIII(0x167,'PaYH')],lilIII(0x18b,'PaYH'))?(I1i11l[lilIII(0x13c,'TSyY')]=!![],llIlii['log'](llIlil)):console['log']('❌\x20未能正确处理\x20'+lllI1l+lilIII(0x1c1,'utYO')+(lIli11[lilIII(0x114,'8(PD')]||lIli11));}}async function il1i1i(lillI1){const Ii1ilI=i1ilII,IlIlii={'TEgis':function(lIli1I,II1il){return lIli1I===II1il;},'eqala':Ii1ilI(0x1ce,'R)ag'),'jXbev':function(lllI11,I1lIll){return lllI11===I1lIll;},'EbKtA':'未能获取用户鉴权信息！','pZTif':Ii1ilI(0xf4,'R)ag'),'NbNOf':Ii1ilI(0x1ac,'Lpr^'),'QOIXk':Ii1ilI(0x1a9,'6(6%'),'CIIrc':'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7,en-GB;q=0.6','NLHXG':Ii1ilI(0x16b,'LWS3'),'ahaGx':Ii1ilI(0x16a,'R)ag'),'dGmYm':function(I1lIli,II1ii){return I1lIli<II1ii;},'fsGti':function(IIIIII,lillII){return IIIIII>lillII;},'jtFPh':function(ii1ilI,lI1ll1,iIiI1){return ii1ilI(lI1ll1,iIiI1);},'TqdoS':Ii1ilI(0x131,'JJ@I'),'WaTeb':Ii1ilI(0x135,'gv&b'),'KhzlJ':Ii1ilI(0x197,'whx3'),'kAWsE':'MTgEt','FQXSJ':Ii1ilI(0x18e,']I&%'),'UhqXK':function(liil1I,i11ii1){return liil1I(i11ii1);},'jGTtW':function(IlIliI,l1iII1){return IlIliI!==l1iII1;},'yKAqA':Ii1ilI(0x173,'U!mv'),'ZmOhu':Ii1ilI(0x1cc,'whx3')};if($[Ii1ilI(0x179,'fWZ!')])return;let i1l1i1='',liil11='',iiillI='POST';switch(lillI1){case Ii1ilI(0x1a3,'%wFV'):i1l1i1=$[Ii1ilI(0x107,'RzWp')]+Ii1ilI(0x180,'PaYH'),liil11=Ii1ilI(0xf0,'Snc8')+$['token']+Ii1ilI(0x10a,'M66&');break;case IlIlii[Ii1ilI(0x157,'PaYH')]:i1l1i1=$['baseUrl']+Ii1ilI(0xd4,'FBm3'),liil11=Ii1ilI(0x10d,'6(6%')+$[Ii1ilI(0xdb,'8Ota')];break;default:console[Ii1ilI(0x153,'B37e')](Ii1ilI(0x10c,'fWZ!')+lillI1);return;}const l1l111={'url':i1l1i1,'method':iiillI,'headers':{'Origin':$['origin'],'Accept':IlIlii[Ii1ilI(0x174,'Gw4M')],'Accept-Encoding':IlIlii[Ii1ilI(0x1c7,'Gw4M')],'Accept-Language':IlIlii['CIIrc'],'Connection':'keep-alive','Content-Type':IlIlii[Ii1ilI(0x1a5,'8Ota')],'Cookie':($[Ii1ilI(0xc4,'FBm3')]?Ii1ilI(0x176,'fWZ!')+$['secretPin']+';':'')+'\x20'+il1i1l,'User-Agent':$['UA'],'X-Requested-With':IlIlii[Ii1ilI(0xe1,']I&%')],'Referer':$[Ii1ilI(0xb7,'R$l&')]},'body':liil11,'timeout':0x7530},l1iIII=0x3;let llI1I1=0x0,IlIlil=null;while(IlIlii['dGmYm'](llI1I1,l1iIII)){IlIlii['fsGti'](llI1I1,0x0)&&await $[Ii1ilI(0x16e,'M66&')](0x3e8);const {err:iiill1,res:lIli1i,data:IIIII1}=await IlIlii[Ii1ilI(0x1a7,'8(PD')](lil111,l1l111,iiillI);if(iiill1){if(IlIlii[Ii1ilI(0xdf,'Snc8')](typeof iiill1,IlIlii[Ii1ilI(0x112,'5*9t')])&&iiill1[Ii1ilI(0x104,'M66&')](IlIlii[Ii1ilI(0x13a,'M66&')]))IlIlil=lillI1+'\x20请求超时，请检查网络重试';else{const I1lIlI=lIli1i?.[Ii1ilI(0x1bb,'nhYD')];if(I1lIlI){if(IlIlii['TEgis'](IlIlii[Ii1ilI(0x17f,'RG4b')],'fdLVQ'))II11Il[Ii1ilI(0xef,'TSyY')](Ii1ilI(0xec,'N1wf'));else{if([0x193,0x1ed][Ii1ilI(0xde,'wRFc')](I1lIlI)){IlIlil=lillI1+Ii1ilI(0xcc,'Wgda')+I1lIlI+'）';break;}else{if([0x190,0x194][Ii1ilI(0x15c,'8Ota')](I1lIlI)){IlIlil=lillI1+'\x20请求配置参数错误，请联系开发者进行反馈（Response\x20code\x20'+I1lIlI+'）';break;}else{IlIlil=lillI1+Ii1ilI(0xc8,'Snc8')+I1lIlI+'）';break;}}}}else IlIlii[Ii1ilI(0xfc,'R)ag')]!==Ii1ilI(0x18f,'utYO')?IlIlil=lillI1+Ii1ilI(0xe3,'U!mv')+(iiill1[Ii1ilI(0xb5,'PAgB')]||iiill1):I1llil=I1llii+Ii1ilI(0x1c8,'RzWp')+(lilIll['message']||l1i111);}llI1I1++;}else{if(lIli1i?.[Ii1ilI(0xbd,'UFux')]===0xc8){il1i1l=liiIII['getResponseCookie'](lIli1i,il1i1l);try{if(IlIlii[Ii1ilI(0xc1,'PaYH')]!==IlIlii[Ii1ilI(0x168,'&9p4')]){const llI1II=JSON[Ii1ilI(0x138,'8(PD')](IIIII1);IlIlli(lillI1,llI1II);break;}else Ii1iIi[Ii1ilI(0x1c9,'PAgB')]=![];}catch(lillIi){IlIlil=Ii1ilI(0x11a,'!Prk')+lillI1+Ii1ilI(0x1b8,'U!mv')+lillIi[Ii1ilI(0x1c3,'yqoF')],console[Ii1ilI(0xb2,'RG4b')](IlIlii[Ii1ilI(0x14e,'nhYD')](String,IIIII1)),llI1I1++;}break;}else{if(IlIlii[Ii1ilI(0xbc,'whx3')](IlIlii[Ii1ilI(0x134,'6(6%')],IlIlii['yKAqA']))IlIlii['TEgis'](typeof i1ill1,IlIlii[Ii1ilI(0xba,'Snc8')])&&IlIlii['jXbev'](iIIl1l,Ii1ilI(0xc3,'U!mv'))?I1lllI[Ii1ilI(0x124,'Snc8')]=![]:ill111[Ii1ilI(0x132,'rD)r')](''+Iliil1[Ii1ilI(0x166,'6(6%')]);else{IlIlil=lillI1+Ii1ilI(0xe6,'Snc8');if(IIIII1){if(IlIlii[Ii1ilI(0x143,'utYO')](IlIlii[Ii1ilI(0x127,'wRFc')],Ii1ilI(0x16f,'5*9t')))console[Ii1ilI(0x106,'j(D#')](IlIlii['UhqXK'](String,IIIII1));else{i1ili1[Ii1ilI(0x181,'5^##')](IlIlii['EbKtA']);return;}}llI1I1++;}}}}llI1I1>=l1iIII&&($[Ii1ilI(0x19f,'&9p4')]=!![],console[Ii1ilI(0xef,'TSyY')](IlIlil));}async function lil111(liil1i,lI1lil='POST'){const II11i1=i1ilII,i1l1iI={'PNhyJ':function(liil1l,lI1lii){return liil1l===lI1lii;},'IHHJj':function(Iiili1,Iil1l1){return Iiili1(Iil1l1);},'HDLnH':function(i1i11I,il1iIl){return i1i11I(il1iIl);},'vwiVm':II11i1(0x1a2,'N1wf'),'eZGhD':function(iii1ii,il1iIi){return iii1ii===il1iIi;},'opBun':'WBBoy','QeJEr':II11i1(0x16d,'a$ml'),'SVeBd':II11i1(0x17a,'j(D#'),'iezYL':II11i1(0x137,'PaYH'),'oSAhp':II11i1(0x1a8,'rD)r'),'YCNSg':II11i1(0x129,'LDEi'),'PrZAm':II11i1(0xbe,'5^##')};if(lI1lil===i1l1iI[II11i1(0x15e,'U!mv')])return new Promise(async iii1il=>{const iliIii=II11i1,II11li={'xSXbj':function(I1l11i,iIIiiI){const iliIil=iii1II;return i1l1iI[iliIil(0xf5,'RG4b')](I1l11i,iIIiiI);}};$[iliIii(0x100,'wMlB')](liil1i,(liiI1i,ililIi,lilIIl)=>{const lill1i=iliIii;if(i1l1iI['PNhyJ']('BBjoS',lill1i(0x18d,']I&%')))i1l1iI[lill1i(0xd5,'5ZJa')](iii1il,{'err':liiI1i,'res':ililIi,'data':lilIIl});else{const liiI1l={'qDGlN':function(i1l1II,i1ill){return II11li['xSXbj'](i1l1II,i1ill);}};return new IIlii(async I1l11l=>{const il1li=lill1i;IlI1ii[il1li(0x1cb,'Gw4M')](lIIiii,(lilIIi,i1l1Il,llIli)=>{const iIIill=il1li;liiI1l[iIIill(0x120,'XGSS')](I1l11l,{'err':lilIIi,'res':i1l1Il,'data':llIli});});});}});});else{if(lI1lil===i1l1iI[II11i1(0x10e,'ZEI@')])return new Promise(async i1i11l=>{const iilii=II11i1,i1i11i={'JibQw':i1l1iI['opBun'],'hPtMs':i1l1iI[iilii(0x165,'f7iT')]};i1l1iI['eZGhD']('jTqwa',iilii(0x1ad,'M66&'))?typeof IlI1l===i1l1iI[iilii(0xb1,'n3Mv')]&&i1l1iI[iilii(0x12b,'LWS3')](lilIil,iilii(0x156,'Gw4M'))&&(i1l1li['healthResult']=![]):$[iilii(0x147,'Wgda')](liil1i,(Iil1lI,IiiliI,iii1iI)=>{const Ill11i=iilii,llIll={'TiIuH':'未能获取用户鉴权信息！'};if(i1i11i[Ill11i(0x151,'R$l&')]!==i1i11i[Ill11i(0x15b,'5ZJa')])i1i11l({'err':Iil1lI,'res':IiiliI,'data':iii1iI});else{iIIIIl['log'](llIll[Ill11i(0x187,'Lpr^')]);return;}});});else{if(i1l1iI[II11i1(0x1b6,'wMlB')](i1l1iI[II11i1(0x170,'PaYH')],i1l1iI['YCNSg']))I1iIl1[II11i1(0xb6,'R$l&')](i1il);else{const IlllIl=i1l1iI[II11i1(0x196,'FBm3')];return{'err':IlllIl,'res':null,'data':null};}}}}function i11ilI(II11lI){const iilil=i1ilII,lI1IIi={'KdYay':iilil(0x161,'6(6%'),'DkoVS':function(I1l11I,Ilil1l){return I1l11I==Ilil1l;},'wnNxE':iilil(0x188,'Wgda'),'MbtnE':function(iIIiii){return iIIiii();},'lQyDv':iilil(0x163,'n3Mv'),'BeJmT':iilil(0x18a,'&9p4'),'dWEWc':iilil(0x14b,'FBm3')};return $[iilil(0xe2,'j(D#')]=!![],new Promise(iilll=>{const Ill11l=iilil;let il1iI1={'url':II11lI,'headers':{'Accept':Ill11l(0x125,'ZEI@'),'Accept-Encoding':lI1IIi[Ill11l(0xcd,'8Ota')],'Accept-Language':Ill11l(0x184,'utYO'),'Connection':lI1IIi['BeJmT'],'Content-Type':lI1IIi[Ill11l(0xbb,'%wFV')],'Referer':II11lI,'User-Agent':$['UA']},'timeout':0x7530};$[Ill11l(0x147,'Wgda')](il1iI1,async(IlllIi,iIIiil,i1l1Ii)=>{const il1ll=Ill11l;try{IlllIi?(iIIiil&&typeof iIIiil[il1ll(0xf2,'RzWp')]!=lI1IIi[il1ll(0x123,'6(6%')]&&(lI1IIi[il1ll(0x17e,'5^##')](iIIiil[il1ll(0x159,'utYO')],0x1ed)&&console['log']('此ip已被限制，请过10分钟后再执行脚本！')),console[il1ll(0x1b7,'nhYD')](String(IlllIi)),console['log'](lI1IIi[il1ll(0x155,'5^##')])):iIIiil[il1ll(0x122,'5*9t')]==0xc8&&(il1i1l=liiIII[il1ll(0xd3,'U!mv')](iIIiil,il1i1l),$[il1ll(0xf1,'6jGS')]=![]);}catch(I1iIIi){$[il1ll(0xca,'R)ag')](I1iIIi,iIIiil);}finally{lI1IIi[il1ll(0x1cd,'LDEi')](iilll);}});});}var version_ = 'jsjiami.com.v7';
// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }

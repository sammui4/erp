var express = require('express')
var app = express();
var formidable = require('formidable');
var app = express();

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "content-type,Access-Token,token");
    res.header("Access-Control-Allow-Credentials",'*');
    res.header('Access-Control-Expose-Headers','*');
    res.header("Access-Control-Allow-Methods","*"); 
    res.header("Access-Control-Allow-Credentials",true);
	res.header("Content-Type", "application/json;charset=UTF-8");
	next(); 
})

app.post('/data-web/crs/finance/accountSet/getAll.do',function (req,res) {
    console.log('123');
    var form = new formidable.IncomingForm();
    form.parse(req, function(err,fields,files) {
        //所有的文本域、单选框，都放在fields中
        //所有的文件类，放在了files中
        if(err){
            throw err
        }
        res.send({"status":"OK","istrue":true,"msg":"请求成功","data":[{"createUserId":null,"createTime":1531357311000,"modifyUserId":null,"modifyTime":1531357311000,"accountSet":null,"state":"10A","createUserName":null,"modifyUserName":null,"backup1":null,"backup2":null,"backup3":null,"backup4":null,"backup5":null,"accountSetId":1,"parentId":-1,"companyId":null,"setCode":"TQ","setName":"天奇新材料","showName":"天奇新材料","openStatus":1,"remarks":null,"openDate":null,"stopDate":null,"expireDate":null,"startDate":1532275200000}],"showDialog":false});
    });
})

app.post('/data-web/tokenLogin.do',function (req,res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function(err,fields,files) {
        if(err){
            throw err
        }
        res.send({"status":"OK","istrue":true,"msg":"请求成功","data":"eyJhbGciOiJIUzI1NiIsInppcCI6IkRFRiJ9.eNo0jbEOgjAURf-lMyXvUdpa_sBZf6ClzwQTkUhJMMZRZ91cndwcHfwfg59hjbiec0_ujrWdYwWzflXVLGFdS5s59SGi9-MwPG_D_Tqcjq_zJcqqiRhBpJhhmsEkxdz8m21DrICEUR9HKBUYrQHMz059ZLG34euk0KOzZbnu6jCjMC6WoYoXSjoki8CFLhXPXUbc2YXgoGSuKAPv0bD9BwAA__8.ZuLAKLrl2H9kZGebL7rjIk5Ky_iBfqTOb2NdNfkFy7g","showDialog":false});
    });
})

app.post('/data-web/token/getCurrentUser.do',function (req,res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function(err,fields,files) {
        if(err){
            throw err
        }
        res.send({"status":"OK","istrue":true,"msg":"请求成功","data":{"userId":1,"userText":"超级管理员","userPassword":"+S/en8hFURUgzaF9ZVA7HPm0V7nRyeUSELpkeWKSjVU=","username":"admin","expireTime":1529996078000,"state":"10A","createUserId":null,"createTime":1529653647000,"modifyUserId":1,"modifyTime":1533004941000,"remarks":null,"createUserName":null,"modifyUserName":null,"newPassword":null,"userType":0,"source":2,"openStatus":1,"openDate":null,"stopDate":null,"accountSetId":null,"currentIp":null,"dataPrivExemption":1,"staffId":null,"staffNumber":null,"staffName":null,"staffIcon":null,"sex":null,"wechat":null,"qq":null,"telephone":null,"email":null,"jobId":null,"jobCode":null,"jobName":null,"orgId":null,"parentOrgId":null,"orgCode":null,"orgName":null,"orgCodePath":null,"orgNamePath":null,"areaId":null,"parentAreaId":null,"areaCode":null,"areaName":null,"areaCodePath":null,"areaNamePath":null,"jobOrgAreas":[],"company":null},"showDialog":false});
    });
})

app.post('/data-web/crs/oaas/menu/getPrivateMenus.do',function (req,res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function(err,fields,files) {
        //所有的文本域、单选框，都放在fields中
        //所有的文件类，放在了files中
        if(err){
            throw err
        }
        res.send({
            "status":"OK",
            "istrue":true,
            "msg":"请求成功",
            "showDialog":false,
            "data":[
                {
       
                    "menuId":7297895,
                    "menuCode":"basic_information",
                    "menuName":"基础信息",
                    "privateId":7304305,
                    "menuUrl":"/basicIn_formation/index",
                    "menuIcon":"jichuxinxi",
                    "parentMenuId":-1,
                    "idPath":"7297895",
                    "isParent":true,
                    "children":[
                        {
                            "menuId":7297896,
                            "menuCode":"basicIn_Modules_area",
                            "menuName":"行政区划",
                            "privateId":7304306,
                            "menuUrl":null,
                            "menuIcon":null,
                            "parentMenuId":7297895,
                            "idPath":"7297895,7297896",
                            "isParent":true,
                            "children":[
                                {
                                    
                                    "menuId":7297897,
                                    "menuCode":"area",
                                    "menuName":"行政区划",
                                    "privateId":7304307,
                                    "menuUrl":"/basicIn_formation/area/area",
                                    "menuIcon":"hangzhengquhua",
                                    "parentMenuId":7297896,
                                    "idPath":"7297895,7297896,7297897",
                                    "isParent":false,
                                    "children":[
                                    ],
                                    "funcs":[
                                    ],
                                    "attrs":[
                                    ],
                                    "text":"行政区划",
                                    "parentId":7297896,
                                    "id":7297897
                                }
                            ],
                            "funcs":[
                            ],
                            "attrs":[
                            ],
                            "text":"行政区划",
                            "parentId":7297895,
                            "id":7297896
                        }

                    ],
      
                }
            ]
        });
    });
})

app.listen(3000);

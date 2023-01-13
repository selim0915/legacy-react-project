var express = require('express');

var router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post('/', (req, res, next) => {
    var type = req.query.type;
    if(type == 'list'){
      try {
        var dbconnect_Module = require('./dbconnect_Module');
    
        //Mysql 쿼리 호출 정보 입력
        req.body.mapper = 'UserAdminMapper';//mybatis xml 파일명
        req.body.crud = 'select';//select, insert, update, delete 중에 입력
        req.body.mapper_id = 'selectUserList';
        
        router.use('/', dbconnect_Module);
        next('route')
      } catch (error) {
        console.log("Module > dbconnect error : "+ error);      
      }
    }else if(type == 'modify'){
      //Swtool 수정
      try {
        // Mysql Api 모듈(CRUD)
        var dbconnect_Module = require('./dbconnect_Module');
    
        //Mysql 쿼리 호출정보 입력
        req.body.mapper = 'UserAdminMapper';//mybatis xml 파일명
        req.body.crud = 'update';//select, insert, update, delete 중에 입력
        req.body.mapper_id = 'updateUser';
        
        router.use('/', dbconnect_Module);
        next('route')
      } catch (error) {
        console.log("Module > dbconnect error : "+ error);      
      }
    }
});

module.exports = router;
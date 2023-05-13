// reuire the dependencies just installed from above commands
const sql = require('mssql/msnodesqlv8');

//create a database configuration 

var config = {

        server : "LAPTOP-IETKFC1P\\MSSQLSERVER01", // eg:: 'DESKTOP_mjsi\\MSSQLEXPRESS'
        databse: "POSEIDON",   // please read above note
        options :{
        trustedConnection:true,
        },
        driver:"msnodesqlv8",

 }

//note: please make double ( \\ ) before your instance name
//if you get confused then please watch the video link at the bottom you can see in details about this

// now make the connections as 

sql.connect(config,function(err){
    if(err)console.log(err)

    // make a request as

    var request = new sql.Request();

   //make the query

    var query = "select * form Status";  // eg : "select * from tbl_name"

    var request=new sql.Request();
    request.query('select * form Status',function(err,recordSet){
    if (err){
        console.log(err)
    }
    else{
    console.log(recordSet)
    }
    });
    })
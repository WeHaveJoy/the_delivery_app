module.exports =  function  MobiCarWash(pool) {
    const recordedNames = {};


 async function setList(settings){
    await pool.query('insert into customer(name, location, item_name, item_price) values($1, $2), $3, $4', [settings, 1]);

  }

 function getList(){
    var list = pool.query('SELECT * FROM customer')
    return list;
 }


    function setName(name) {
        if (name) {
            if (recordedNames[name] === undefined) {
                recordedNames[name] = 0;
            }
            recordedNames[name];
        }

    }

    function getName() {
        return recordedNames;
    }


    return {
        setList,
        getList,
        getName
       // service

    }
}



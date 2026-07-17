class ApiFeatures {
    constructor(query,queryStr){
        this.query = query
        this.queryStr = queryStr
    }

    search(){
        let keyword = this.queryStr.keyword?{
            name:{
                $regex:this.queryStr.keyword,
                $options:'i'
            }
        }:{}
        this.query.find({...keyword})
        return this
    }
    filter(){
        let queryCopy = {...this.queryStr}
        const deleteField = ['keyword','limits',]
        deleteField.forEach((feild)=> {
            return delete queryCopy[feild]
        })
        this.query.find(queryCopy)
        return this
    }
}

module.exports = ApiFeatures
export default{
        change(state,city){
            //console.log(city)
            state.city=city
            //localStorage.city=city
            try {
                localStorage.city=city
            }catch(e){}
        }
}
const appkey = "demo13_1545210570249";

export async function getStudentPage(page = 1, limit = 10) {
    return await fetch(`https://open.duyiedu.com/api/student/findByPage?appkey=${appkey}&page=${page}&size=${limit}`).then(res => res.json()).then(res => res.data);
}

export async function searchStudent({page = 1, limit = 10, key = "", sex = -1} = {}) {
    if(key) {
        const resp = await fetch(`https://open.duyiedu.com/api/student/searchStudent?appkey=${appkey}&page=${page}&size=${limit}&search=${key}&sex=${sex}`).then(res => res.json()).then(res => res.data);
        return {
            cont: resp.cont,
            datas: resp.searchList
        }
    }
    const resp = await getStudentPage(page, limit);
    return {
        cont: resp.cont,
        datas: resp.findByPage
    }
}


export async function getAllStudent(){
    return await fetch("https://api.duyiedu.com/api/student/findAll?appkey=demo13_1545210570249").then(res => res.json()).then(res => res.data)
}
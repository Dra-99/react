const appkey = "demo13_1545210570249";

export async function getStudentPage(page = 1, limit = 10) {
    return await fetch(`https://open.duyiedu.com/api/student/findByPage?appkey=${appkey}&page=${page}&size=${limit}`).then(res => res.json()).then(res => res.data);
}
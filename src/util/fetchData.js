const appkey = "demo13_1545210570249";
export function fetchData(page = 1, size = 10) {
    return fetch(`https://api.duyiedu.com/api/student/findByPage?appkey=${appkey}&page=${page}&size=${size}`).then(res => res.json()).then(res => res.data);
}
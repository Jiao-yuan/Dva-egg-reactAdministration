import request from '@/utils/headertoken'

//获取所有的试题
export const examsubject = () => request.get('exam/subject')
// 获取所有的考试类型
export const examType = () => request.get('exam/examType')
// 获取考试列表
export const fecthexam = () => request.get('exam/exam')

// 添加试题
export const addExam = (params) => request.post('exam/exam', params)

//删除试卷
export const deleteExam = () => request.delete('exam/exam/w5tcy-g2dts')

//更新试卷 
export const upDateExam = () => request.put('exam/exam/w5tcy-g2dts')

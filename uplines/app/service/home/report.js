/*
 * @Author: tao 
 * @Date: 2019-01-29 11:42:34 
 * @Last Modified by: tao
 * @Last Modified time: 2019-02-17 16:25:49
 * @Func 试题类型以及试题题库相关的业务逻辑
 */
const Service = require('egg').Service;
const path = require('path');
const fs = require('fs');
const {
  QuestionsTypeScale,
  QuestionsSubjectScale,
  QuestionsExamScale
} = require('../../sql/report');

class ReportService extends Service{
    /**
     * 获取总试题数量
     * 获取当前用户添加的试题数量
     */
    async getCount (user_id) {
      let questionsCount = await this.app.mysql.query('select COUNT(*) from questions');
      let userQuestionsCount = await this.app.mysql.query('select COUNT(*) from questions where user_id=?', [user_id]);
      let gradeCount = await this.app.mysql.query('select COUNT(*) from grade');
      let studentCount = await this.app.mysql.query('select COUNT(*) from student');
      let examCount = await this.app.mysql.query('select COUNT(*) from exam_exam where user_id=?', [user_id]);
      return [
        {
          label: '试题总数',
          num: questionsCount[0]['COUNT(*)']
        },
        {
          label: '我添加的题量',
          num: userQuestionsCount[0]['COUNT(*)']
        },
        {
          label: '总班级数量',
          num: gradeCount[0]['COUNT(*)']
        },
        {
          label: '总学生数量',
          num: studentCount[0]['COUNT(*)']
        },
        {
          label: '我创建的试卷',
          num: examCount[0]['COUNT(*)']
        }
      ]
    }

    async getQuestionsTypeScale () {
      let questionsCount = await this.app.mysql.query(QuestionsTypeScale);
      return questionsCount
    }

    async getQuestionsSubjectScale () {
      let subjectCount = await this.app.mysql.query(QuestionsSubjectScale);
      return subjectCount
    }

    async getQuestionsExamScale () {
      let examCount = await this.app.mysql.query(QuestionsExamScale);
      return examCount
    }
}
module.exports = ReportService;
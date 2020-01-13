/*
 * @Author: liuyu
 * @Date: 2019-03-04 08:30:28 
 * @Last Modified by: jasonandjay
 * @Last Modified time: 2019-03-21 21:26:16
 */

const Controller = require('egg').Controller;
class ReportController extends Controller{

  async report () {
    let user_id = this.ctx.token.user_id;
    let result = await this.ctx.service.home.report.getCount(user_id);
    
    this.ctx.body = {code: 1, report: result};
  }

  async questionsReport () {
    let user_id = this.ctx.token.user_id;
    let result = await this.ctx.service.home.report.getQuestionsTypeScale();
    let result2 = await this.ctx.service.home.report.getQuestionsSubjectScale();
    let result3 = await this.ctx.service.home.report.getQuestionsExamScale();
    
    this.ctx.body = {
      code: 1,
      type_scale: result,
      subject_scale: result2,
      exam_scale: result3
    };
  }

}
module.exports = ReportController;
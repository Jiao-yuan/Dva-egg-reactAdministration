/*
 * @Author: tao
 * @Date: 2019-02-17 15:49:19
 * @Last Modified by: simple
 * @Last Modified time: 2019-12-06 15:49:30
 * @func 试题相关的sql语句
 */

// 获取所有试题的sql语句
const SQL_ALLQUESTIONS = `
 SELECT
 interviews.title AS title,
 interviews.interviews_id AS interviews_id,
 interviews.json_path AS json_path,
 user.user_name AS user_name,
 user.user_id AS user_id,
 interviews_types.interviews_type_text as interviews_type_text,
 interviews_types.interviews_type_id as interviews_type_id
FROM
 interviews,
 interviews_types,
 user,
WHERE
 interviews.user_id=user.user_id
 And 
 interviews.interviews_type_id=interviews_types.interviews_type_id
 `;

exports.SQL_ALLQUESTIONS = SQL_ALLQUESTIONS;
// 根据条件获取试题的sql语句
exports.getSqlConditionQuestions = (conditions = []) => {
    conditions = conditions.map(item => {
        return `interviews.${item.key}="${item.val}"`;
    });
    let conditionsStr = conditions.join("\nAND\n");
    if (conditions.length !== 0) {
        conditionsStr = "\nAND\n" + conditionsStr;
    }
    return SQL_ALLQUESTIONS + conditionsStr;
};
// let a = exports.getSqlConditionQuestions([{key:'user_id',val:'fjeiwojf'}]);
// console.log(a);


// const QuestionsTypeScale = `
//   select 
//     count(q.questions_id) num, t.questions_type_text 
//   from questions q 
//   left join questions_types t 
//   on 
//     t.questions_type_id = q.questions_type_id;
// `

// const QuestionsTypeScale = `
//   select 
//     count(q.questions_id) num, t.questions_type_text 
//   from questions q 
//   left join questions_types t 
//   on 
//     t.questions_type_id = q.questions_type_id 
//   group by q.questions_type_id;
// `

// const QuestionsTypeScale = `
//   select 
//     count(q.questions_id) text, t.questions_type_text 
//   from questions q 
//   left join questions_types t 
//   on 
//     t.questions_type_id = q.questions_type_id 
//   group by q.questions_type_id;
// `
const QuestionsTypeScale = `
  select 
    count(q.questions_id) num, t.questions_type_text 
  from 
    questions_types t 
  left join 
    questions q 
  on 
    t.questions_type_id = q.questions_type_id 
  group by 
    t.questions_type_id ;
`

// const QuestionsSubjectScale = `
//   select 
//     count(q.questions_id) num, s.subject_text 
//   from 
//     subject s 
//   left join 
//     questions q 
//   on 
//     s.subject_id = q.subject_id 
//   group by 
//     s.subject_id;
// `

const QuestionsSubjectScale = `
  select 
    count(q.questions_id) num, s.subject_text 
  from 
    subject s 
  left join 
    questions q 
  on 
    s.subject_id = q.subject_id 
  group by 
    s.subject_id;
`

const QuestionsExamScale = `
  select 
    count(q.questions_id) num, a.exam_name 
  from 
    exam_type a 
  left join 
    questions q 
  on 
    a.exam_id = q.exam_id 
  group by 
    a.exam_id;
`
exports.QuestionsSubjectScale = QuestionsSubjectScale;
exports.QuestionsTypeScale = QuestionsTypeScale;
exports.QuestionsExamScale = QuestionsExamScale;

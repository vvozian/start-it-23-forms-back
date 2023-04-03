const forms = [
    {id: '1', formId: '102132', title: "Form 1", subtitle: "Form 1"},
    {id: '2', formId: '2013', title: "Form 2", subtitle: "Form 2"},
    {id: '3', formId: '103', title: "Form 3", subtitle: "Form 3"},
    {id: '4', formId: '1037', title: "Form 4", subtitle: "Form 4"},
    {id: '5', formId: '88193', title: "Form 5", subtitle: "Form 5"},
]

const activeForms = [
    {id: '1', form: forms.find((form) => form.id === '1'), progress: 80, nextQuestionId: '2'},
    {id: '2', form: forms.find((form) => form.id === '2'), progress: 10, nextQuestionId: '1'},
    {id: '5', form: forms.find((form) => form.id === '5'), progress: 99, nextQuestionId: '3'},
]

const questionsPack1 = [
    {id: '1', content: 'What is your name?', answerType: 'ALPHA', nextQuestionId: '2'},
    {id: '2', content: 'Do you have children?', answerType: 'BOOL', nextQuestionId: '3'},
    {id: '3', content: 'How many children do you have?', answerType: 'NUMERIC', nextQuestionId: '4'},
    {id: '4', content: 'Do you have a driver license?', answerType: 'BOOL', nextQuestionId: null}
]

export const mockData = {
    forms,
    activeForms,
    questionsPack1
}
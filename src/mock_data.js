const forms = [
    {id: '1', formId: '102132', title: "Form 1", subtitle: "Form 1"},
    {id: '2', formId: '2013', title: "Form 2", subtitle: "Form 2"},
    {id: '3', formId: '103', title: "Form 3", subtitle: "Form 3"},
    {id: '4', formId: '1037', title: "Form 4", subtitle: "Form 4"},
    {id: '5', formId: '88193', title: "Form 5", subtitle: "Form 5"},
]

const activeForms = [
    {id: '1', form: forms.find((form) => form.id === '1'), progress: 80},
    {id: '2', form: forms.find((form) => form.id === '2'), progress: 10},
    {id: '5', form: forms.find((form) => form.id === '5'), progress: 99},
]

const questionsPack1 = [
    {id: '1', content: 'What is your name?'}
]

export const mockData = {
    forms,
    activeForms
}
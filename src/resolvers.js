import {mockData} from "./mock_data.js";

export const Resolvers = {
    Query: {
        form: (_, {id}) => mockData.forms.find((form) => form.id === id),
        activeForm: (_, {id}) => mockData.activeForms.find((form) => form.id === id),
        allForms: () => mockData.forms,
        activeForms: () => mockData.activeForms,
        question: (_, {id}) => mockData.questionsPack1.find((question) => question.id === id)
    },
    Mutation: {
        answerBooleanQuestion: (_, {questionId, activeFormId}) => {
            const question = mockData.questionsPack1.find((question) => question.id === questionId)

            return {
                questionId: question.id,
                activeFormId,
                nextQuestionId: question.nextQuestionId,
                hasNextQuestion: !!question.nextQuestionId
            }
        },
        answerNumericQuestion: (_, {questionId, activeFormId}) => {
            const question = mockData.questionsPack1.find((question) => question.id === questionId)

            return {
                questionId: question.id,
                activeFormId,
                nextQuestionId: question.nextQuestionId,
                hasNextQuestion: !!question.nextQuestionId
            }
        },
        answerAlphaQuestion: (_, {questionId, activeFormId}) => {
            const question = mockData.questionsPack1.find((question) => question.id === questionId)

            return {
                questionId: question.id,
                activeFormId,
                nextQuestionId: question.nextQuestionId,
                hasNextQuestion: !!question.nextQuestionId
            }
        }
    }
}
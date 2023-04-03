import {mockData} from "./mock_data.js";

export const Resolvers = {
    Query: {
        form: (_, {id}) => mockData.forms.find((form) => form.id === id),
        allForms: () => mockData.forms,
        activeForms: () => mockData.activeForms
    }
}
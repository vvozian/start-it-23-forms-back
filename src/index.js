import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import {Resolvers} from "./resolvers.js";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
type Form {
    id: ID
    formId: String
    title: String
    subtitle: String
}

type ActiveForm {
    id: ID
    form: Form
    progress: Int
    nextQuestionId: ID
}

type Account {
    id: ID
    email: String
}

type ArchivedForm {
    id: ID
    formId: ID
    form: Form
    downloadLink: String
}

enum AnswerType {
    NUMERIC,
    ALPHA,
    BOOL
}

type Question {
    id: ID
    content: String
    answerType: AnswerType
}

type GivenAnswerResponse {
    questionId: ID
    activeFormId: ID
    nextQuestionId: ID
    hasNextQuestion: Boolean
}

type LoginReturn {
    success: Boolean
    account: Account
}

type RegisterAccountReturn {
    success: Boolean
    account: Account
}

input RegisterAccountInput {
    firstName: String
    lastName: String
    email: String
    password: String
}

type Query {
    form(id: ID): Form
    activeForm(id: ID): ActiveForm
    allForms: [Form]
    activeForms: [ActiveForm]
    archiveForms: [ArchivedForm]
    currentAccount: Account
    question(id: ID): Question
}

type Mutation {
    answerAlphaQuestion(activeFormId: ID, questionId: ID, answer: String): GivenAnswerResponse
    answerNumericQuestion(activeFormId: ID, questionId: ID, answer: Int): GivenAnswerResponse
    answerBooleanQuestion(activeFormId: ID, questionId: ID, answer: Boolean): GivenAnswerResponse
    login(email: String, password: String): LoginReturn
    registerAccount(input: RegisterAccountInput): RegisterAccountReturn
}
`;

const books = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin',
    },
    {
        title: 'City of Glass',
        author: 'Paul Auster',
    },
];


const server = new ApolloServer({
    typeDefs,
    resolvers: Resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const {url} = await startStandaloneServer(server, {
    listen: {port: 4000},
});

console.log(`🚀  Server ready at: ${url}`);
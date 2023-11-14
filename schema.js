export const typeDefs = `#graphql

type Author {
    authorId: String!
    name: String!
    books: [Book!]
}

type Book {
    id: ID!
    title: String!
    description: String!
    author: Author
    issuedBy: Student
    reviews: [Review!]
}

type Student {
    studentId: String
    name: String
    books: [Book!]
    reviews: [Review!]
}

type Review {
    createdBy: Student
    createdOn: Book
    review: String
}

type signedUpUser {
    username: String!
    name: String!
    role: String!
}

type Query {
    getBooks: [Book!]
    getSingleBook(id: ID!): Book
    getStudents: [Student]
    getSingleStudent(studentId: ID!): Student
    getAuthors: [Author]
    getSingleAuthor(authorId: ID!): Author
    getReviews: [Review]
    getSingleReview(id: ID!): Review
}

type Mutation {
    signup(signupData: SignupData): signedUpUser
    addReview(loginData: loginData, reviewData: reviewData): Review!
    addBook(loginData: loginData, bookData: BookData): Book
}

input loginData {
    username: String!
    password: String!
}

input SignupData {
    name: String!
    username: String!
    password: String!
    role: String!
}

input reviewData {
    bookId: String!
    review: String!
}

input BookData {
    title: String!
    description: String!
}

`;

/* How to run Queries:
query ExampleQuery($userData: UserData) {
  login(userData: $userData) {
    username
    password
    name
  }
}
*/

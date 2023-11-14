import db from "./db.js";
import { typeDefs } from "./schema.js";

export const resolvers = {
  Query: {
    // login(_, args) {
    //   console.log(args);
    //   return db.students.find(
    //     (student) => student.username === args.userData.username
    //   );
    // },
    getBooks() {
      return db.books;
    },
    getSingleBook(_, args) {
      return db.books.find((book) => book.id === args.id);
    },

    getStudents() {
      return db.students;
    },

    getSingleStudent(_, { studentId }) {
      return db.students.find((student) => student.studentId === studentId);
    },

    getAuthors() {
      return db.authors;
    },

    getSingleAuthor(_, { authorId }) {
      return db.authors.find((author) => author.authorId === authorId);
    },

    getReviews() {
      return db.reviews;
    },

    getSingleReview(_, { id }) {
      return db.reviews.find((review) => review.id === id);
    },
  },

  Mutation: {
    signup(_, { signupData: { name, username, password, role } }) {
      console.log(role);
      console.log(name);
      if (role == "Student") {
        let student = {
          studentId: username,
          name,
          password,
        };

        db.students.push(student);

        let signupDetails = {
          username,
          name,
          role,
        };

        return signupDetails;
      } else {
        let author = {
          authorId: username,
          name,
          password,
        };
        db.authors.push(author);

        let signupDetails = {
          username,
          name,
          role,
        };

        return signupDetails;
      }
    },

    addReview(_, { loginData, reviewData }) {
      if (!loginData || !reviewData) {
        let error = new Error("Please provide both credentials and Review");
        throw error;
      }

      let student = db.students.find(
        (student) => student.studentId === loginData.username
      );

      let book = db.books.find((book) => book.id === reviewData.bookId);

      if (!student) {
        let error = new Error("No student found with this username");
        throw error;
      }

      if (student.password === loginData.password) {
        let review = {
          id: Math.random().toString(),
          createdBy: student,
          createdOn: book,
          review: reviewData.review,
        };
        db.reviews.push(review);

        return review;
      } else {
        let error = new Error("Invalid credentials");
        throw error;
      }
    },

    addBook(_, { loginData, bookData }) {
      if (!loginData || !bookData) {
        let error = new Error("Please provide both credentials and Review");
        throw error;
      }

      let author = db.authors.find(
        (author) => author.authorId === loginData.username
      );

      if (!author) {
        let error = new Error("No author found with this username");
        throw error;
      }

      if (author.password === loginData.password) {
        let book = {
          id: Math.random().toString(),
          title: bookData.title,
          description: bookData.description,
          author: author,
        };
        db.books.push(book);

        return book;
      } else {
        let error = new Error("Invalid credentials");
        throw error;
      }
    },
  },

  Author: {
    books(parent) {
      return db.books.filter((book) => book.author === parent.name);
    },
  },

  Student: {
    books(parent) {
      return db.books.filter((book) => book.issuedBy === parent.studentId);
    },
    reviews(parent) {
      return db.reviews.filter(
        (review) => review.createdBy === parent.studentId
      );
    },
  },

  Review: {
    createdOn(parent) {
      return db.books.find((book) => book.id === parent.createdOn);
    },
    createdBy(parent) {
      return parent.createdBy;
    },
  },

  Book: {
    author(parent) {
      return db.authors.find((author) => author.name === parent.author);
    },
    issuedBy(parent) {
      return db.students.find(
        (student) => student.studentId === parent.issuedBy
      );
    },
    reviews(parent) {
      return db.reviews.filter((review) => review.createdOn === parent.id);
    },
  },

  // Mutation: {
  //   signup: async function (_, args) {
  //     console.log(args);
  //     let existingUser = db.users.find(
  //       (user) => user.username === args.signupData.username
  //     );
  //     if (existingUser) {
  //       let error = new Error("username already in use.");
  //       throw error;
  //     }
  //     db.users.push({
  //       id: Math.random().toString(),
  //       username: args.signupData.username,
  //       name: args.signupData.name,
  //       password: args.signupData.password,
  //     });
  //     return db.users.find(
  //       (user) => user.username === args.signupData.username
  //     );
  //   },
  // },
};

let students = [
  { studentId: "student1", name: "mario", password: "password" },
  { studentId: "student2", name: "donald", password: "password" },
  { studentId: "student3", name: "jerry", password: "password" },
];

let authors = [
  { authorId: "author1", name: "John peterson", password: "password" },
  { authorId: "author2", name: "patrick jacobs", password: "password" },
  { authorId: "suthor3", name: "roberts evans", password: "password" },
];

let books = [
  {
    id: "1",
    title: "javascript for advanced devs",
    description: "are you and advanced dev, then this guide is for you",
    author: "John peterson",
    issuedBy: "student2",
  },
  {
    id: "2",
    title: "react for noobs",
    description: "just starting out with react, heres your starting resource",
    author: "patrick jacobs",
    issuedBy: "student3",
  },
  {
    id: "3",
    title: "css for ametuers",
    description: "wanna learn how to make those cool kids UI with css?",
    author: "roberts evans",
    issuedBy: "student1",
  },
];

let reviews = [
  {
    id: "1",
    createdBy: "student1",
    createdOn: "2",
    review: "Loved this Guide",
  },
  {
    id: "2",
    createdBy: "student1",
    createdOn: "2",
    review: "such an amazing guide",
  },
  {
    id: "3",
    createdBy: "student1",
    createdOn: "2",
    review: "the details in this are very fine.",
  },
];

export default { students, authors, books, reviews };
